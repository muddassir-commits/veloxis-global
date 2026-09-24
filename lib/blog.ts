// Blog posts live in content/blog/<slug>/ as two files:
//   post.json     metadata (title, date, category, image, FAQs ...)
//   content.html  the article body; every <h2 id="..."> becomes a table-of-contents entry
// Each post is loaded and validated on its own. A broken post is skipped with a warning,
// so it can never break the build or any other page. Folders starting with "_" are ignored
// (templates), and posts with "draft": true are not published.
// See docs/BLOG.md. Check all posts with: npm run blog:check
//
// Server-only (reads the file system). Client components may `import type { Post }` from here.

import fs from 'node:fs';
import path from 'node:path';
import { z } from 'zod';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

export const CATEGORIES = ['Guides', 'Landing Pages', 'Paid Ads', 'AI Automation', 'Growth Tips'] as const;
export type Category = (typeof CATEGORIES)[number];

const BADGE_COLORS: Record<Category, 'teal' | 'orange' | 'indigo' | 'blue'> = {
  Guides: 'indigo',
  'Landing Pages': 'blue',
  'Paid Ads': 'orange',
  'AI Automation': 'teal',
  'Growth Tips': 'teal',
};

const AUTHOR = { name: 'Muddassir Ali', photo: '/images/profiles/muddassir.jpg' };
const SERVICES = ['high-converting-landing-pages', 'paid-ads', 'ai-automation'] as const;

const isoDay = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'use YYYY-MM-DD');
const localImage = z.string().regex(/^\/images\/.+\.(jpg|jpeg|png|webp)$/i, 'must be a /images/... jpg, png or webp path');

const PostMetaSchema = z.object({
  title: z.string().min(10).max(120),
  seoTitle: z.string().min(10).max(65),
  excerpt: z.string().min(50).max(170),
  date: isoDay,
  updated: isoDay.optional(),
  category: z.enum(CATEGORIES),
  service: z.enum(SERVICES).optional(),
  image: localImage,
  imageAlt: z.string().min(5),
  inlineImages: z
    .array(z.object({ src: localImage, alt: z.string().min(5), caption: z.string().optional(), beforeHeading: z.string() }))
    .optional(),
  about: z.array(z.object({ name: z.string(), sameAs: z.string().url() })).optional(),
  faqs: z.array(z.object({ question: z.string().min(5), answer: z.string().min(10) })).min(7).max(9),
  draft: z.boolean().optional(),
});

export type PostMeta = z.infer<typeof PostMetaSchema>;

export interface Post extends Omit<PostMeta, 'draft'> {
  slug: string;
  author: string;
  authorPhoto: string;
  badgeColor: 'teal' | 'orange' | 'indigo' | 'blue';
  /** Display date, e.g. "September 24, 2026" */
  displayDate: string;
  isoDate: string;
  modifiedIso: string;
  headings: { id: string; text: string }[];
  htmlContent: string;
}

export interface LoadResult {
  posts: Post[];
  skipped: { slug: string; problems: string[] }[];
  /** Unpublished drafts, with what is still missing (empty = ready to publish). */
  drafts: { slug: string; problems: string[] }[];
}

const toIso = (day: string) => `${day}T00:00:00+05:30`;
const formatDay = (day: string) =>
  new Date(`${day}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const stripTags = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim();

function loadOne(slug: string): { post?: Post; draft?: boolean; problems: string[] } {
  const dir = path.join(BLOG_DIR, slug);
  const problems: string[] = [];

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) problems.push('folder name must be lowercase-words-with-dashes');

  let raw: unknown;
  try {
    raw = JSON.parse(fs.readFileSync(path.join(dir, 'post.json'), 'utf8'));
  } catch (e) {
    return { problems: [`post.json missing or not valid JSON (${(e as Error).message})`] };
  }

  const isDraft = typeof raw === 'object' && raw !== null && (raw as { draft?: unknown }).draft === true;
  const parsed = PostMetaSchema.safeParse(raw);
  if (!parsed.success) {
    return { draft: isDraft, problems: parsed.error.issues.map((i) => `post.json ${i.path.join('.') || '(root)'}: ${i.message}`) };
  }
  const meta = parsed.data;

  let html = '';
  try {
    html = fs.readFileSync(path.join(dir, 'content.html'), 'utf8').trim();
  } catch {
    problems.push('content.html missing');
  }
  if (html && html.length < 500) problems.push('content.html is too short (under 500 characters)');
  if (/<script|<iframe|<style|\son\w+=/i.test(html)) problems.push('content.html must not contain scripts, iframes, styles or inline event handlers');

  const headings = [...html.matchAll(/<h2 id="([a-z0-9-]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => ({ id: m[1], text: stripTags(m[2]) }));
  if (html && headings.length < 2) problems.push('content.html needs at least two <h2 id="..."> headings');
  if (/<h2(?![^>]*\bid=)/.test(html)) problems.push('every <h2> needs an id, e.g. <h2 id="pricing">');
  if (/<h1[\s>]/.test(html)) problems.push('content.html must not contain <h1> (the title is the h1)');

  for (const img of [meta.image, ...(meta.inlineImages ?? []).map((i) => i.src)]) {
    if (!fs.existsSync(path.join(PUBLIC_DIR, img))) problems.push(`image not found: public${img}`);
  }
  for (const img of meta.inlineImages ?? []) {
    if (!headings.some((h) => h.id === img.beforeHeading)) problems.push(`inline image beforeHeading "${img.beforeHeading}" is not an <h2> id`);
  }
  if (meta.updated && meta.updated < meta.date) problems.push('"updated" cannot be before "date"');

  if (problems.length) return { draft: isDraft, problems };

  const { draft, ...rest } = meta;
  return {
    draft: !!draft,
    problems,
    post: {
      ...rest,
      slug,
      author: AUTHOR.name,
      authorPhoto: AUTHOR.photo,
      badgeColor: BADGE_COLORS[meta.category],
      displayDate: formatDay(meta.date),
      isoDate: toIso(meta.date),
      modifiedIso: toIso(meta.updated ?? meta.date),
      headings,
      htmlContent: html,
    },
  };
}

let cache: LoadResult | null = null;

/** Loads and validates every post. Never throws. */
export function loadPosts(): LoadResult {
  if (cache) return cache;
  const result: LoadResult = { posts: [], skipped: [], drafts: [] };

  let slugs: string[] = [];
  try {
    slugs = fs
      .readdirSync(BLOG_DIR, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
      .map((d) => d.name);
  } catch (e) {
    console.warn(`[blog] could not read ${BLOG_DIR}: ${(e as Error).message}`);
  }

  for (const slug of slugs) {
    try {
      const { post, draft, problems } = loadOne(slug);
      if (draft) {
        result.drafts.push({ slug, problems });
      } else if (!post) {
        result.skipped.push({ slug, problems });
        console.warn(`[blog] skipped "${slug}":\n  - ${problems.join('\n  - ')}`);
      } else {
        result.posts.push(post);
      }
    } catch (e) {
      result.skipped.push({ slug, problems: [(e as Error).message] });
      console.warn(`[blog] skipped "${slug}": ${(e as Error).message}`);
    }
  }

  // Newest first; ties keep a stable order by title.
  result.posts.sort((a, b) => b.isoDate.localeCompare(a.isoDate) || a.title.localeCompare(b.title));
  cache = result;
  return result;
}

/** What cards and lists need (no article body), safe to pass to client components. */
export type PostCard = Omit<Post, 'htmlContent' | 'faqs' | 'headings' | 'inlineImages' | 'about'>;

export function toCard({ htmlContent: _h, faqs: _f, headings: _hd, inlineImages: _i, about: _a, ...card }: Post): PostCard {
  return card;
}

export function getAllPosts(): Post[] {
  return loadPosts().posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
