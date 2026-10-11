import fs from 'node:fs';
import path from 'node:path';
import { MetadataRoute } from 'next';
import { getAllPosts } from '../lib/blog';
import { servicesData } from '../data/services-data';
import { playbooks } from '../data/playbooks';
import { SITE_URL, CONTENT_REVIEWED } from '../lib/seo-config';

// Only canonical, indexable URLs. Google ignores priority/changefreq, so lastModified
// is the only hint that matters — bump SITE_CONTENT_UPDATED when static pages change.
const SITE_CONTENT_UPDATED = new Date(`${CONTENT_REVIEWED}T00:00:00+05:30`);

// Image sitemap: each page lists the photos that appear on it, so Google Images can index them
// and show them next to our results. Static pages use their own folder under /images/people.
const PAGE_IMAGE_DIRS: Record<string, string[]> = {
  '': ['home', '../og'],
  '/services': ['services'],
  '/industries/real-estate': ['developers'],
  '/industries/real-estate/nri-buyers': ['nri-buyers'],
  '/channel-partners': ['channel-partners'],
  '/digital-marketing-agency-lucknow': ['lucknow'],
  '/digital-marketing-agency-kanpur': ['kanpur'],
  '/digital-marketing-agency-noida': ['noida'],
  '/free-audit': ['free-audit'],
  '/about': ['about', '../../profiles'],
  '/contact': ['contact'],
};

const abs = (src: string) => (src.startsWith('http') ? src : `${SITE_URL}${src}`);

function folderImages(route: string): string[] {
  const out: string[] = [];
  for (const dir of PAGE_IMAGE_DIRS[route] ?? []) {
    const rel = path.posix.join('/images/people', dir);
    try {
      for (const f of fs.readdirSync(path.join(process.cwd(), 'public', rel))) {
        if (/\.(jpe?g|png|webp)$/i.test(f) && !/^photo\.|\.webp$/i.test(f)) out.push(`${SITE_URL}${rel}/${f}`);
      }
    } catch {
      // Missing folder: the page simply gets no image entries.
    }
  }
  return out;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/services',
    '/industries/real-estate',
    '/industries/real-estate/nri-buyers',
    '/channel-partners',
    '/digital-marketing-agency-lucknow',
    '/digital-marketing-agency-kanpur',
    '/digital-marketing-agency-noida',
    '/playbooks',
    '/free-audit',
    '/real-estate-lead-system',
    '/about',
    '/contact',
    '/blog',
    '/guides',
    '/tools/website-audit',
    '/privacy-policy',
    '/terms',
  ].map((route) => {
    const images = folderImages(route);
    return { url: `${SITE_URL}${route}`, lastModified: SITE_CONTENT_UPDATED, ...(images.length ? { images } : {}) };
  });

  const services = servicesData.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: SITE_CONTENT_UPDATED,
  }));

  const playbookPages = playbooks.map((p) => ({
    url: `${SITE_URL}/playbooks/${p.slug}`,
    lastModified: new Date(p.updated),
    images: [p.image, ...p.sections.flatMap((sec) => (sec.image ? [sec.image.src] : []))].map(abs),
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedIso),
    images: [post.image, ...(post.inlineImages ?? []).map((i) => i.src)].map(abs),
  }));

  return [...staticRoutes, ...services, ...playbookPages, ...posts];
}
