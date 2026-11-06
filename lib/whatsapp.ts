// Builds every WhatsApp link on the site from data/whatsapp-messages.ts.
// Client-safe (no Node APIs). Used through components/ui/WhatsAppLink.tsx.

import {
  BLOG_MESSAGES,
  DEFAULT_MESSAGE,
  LEGACY_CTA_NAMES,
  PAGE_MESSAGES,
  SPECIAL_MESSAGES,
  WHATSAPP_NUMBER,
  type WaPage,
  type WaPageType,
  type WaPlacement,
} from '../data/whatsapp-messages';

export type { WaPlacement, WaPageType };

const GREETING = 'Hi Veloxis Global, ';

export interface WhatsAppOptions {
  /** Use a special page message instead of the URL (e.g. the 404 page, which can show at any URL). */
  page?: keyof typeof SPECIAL_MESSAGES;
  /** Blog post title, used when the post has no entry in BLOG_MESSAGES yet. */
  title?: string;
  /** Replace the page message for this one button (e.g. the audit tool with the visitor's score). */
  message?: string;
  /** GA4 `cta` name. Defaults to the legacy name for this placement, else "whatsapp_<placement>". */
  cta?: string;
}

export interface WhatsAppTarget {
  href: string;
  text: string;
  /** Page code, e.g. "blog-eoi". */
  ref: string;
  pageType: WaPageType;
  placement: WaPlacement;
  cta: string;
  /** Data attributes for the link: read by AnalyticsTracker (data-cta) and ready for GTM triggers. */
  attrs: Record<`data-${string}`, string>;
}

/** wa.me link for any text. */
export function whatsappHref(text: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/** Strips "/" at the end so "/blog/" and "/blog" match the same entry. */
function cleanPath(pathname: string | null | undefined) {
  if (!pathname) return '/';
  const p = pathname.split(/[?#]/)[0];
  return p.length > 1 ? p.replace(/\/+$/, '') : p;
}

/** Short topic from a post title: "EOI Meaning in Real Estate: Full Form ..." becomes "EOI Meaning in Real Estate". */
function topicFromTitle(title: string) {
  return title.split(/[:(|–—]/)[0].trim();
}

/** Which message a page gets: exact page entry, then blog post entry, then a safe default. */
export function pageMessage(pathname: string | null | undefined, opts: Pick<WhatsAppOptions, 'page' | 'title'> = {}): WaPage {
  if (opts.page) return SPECIAL_MESSAGES[opts.page];
  const path = cleanPath(pathname);
  const exact = PAGE_MESSAGES[path];
  if (exact) return exact;

  const blog = path.match(/^\/blog\/([a-z0-9-]+)$/);
  if (blog) {
    const slug = blog[1];
    const entry = BLOG_MESSAGES[slug];
    if (entry) return { type: 'blog_post', ...entry };
    return {
      type: 'blog_post',
      ref: `blog-${slug}`.slice(0, 40),
      message: opts.title
        ? `I read your post on ${topicFromTitle(opts.title)} and would like help with this for my business.`
        : 'I was reading your blog and would like a free marketing audit for my business.',
    };
  }
  return DEFAULT_MESSAGE;
}

/** Everything one WhatsApp button needs: link, message, ref code and tracking attributes. */
export function whatsappTarget(pathname: string | null | undefined, placement: WaPlacement, opts: WhatsAppOptions = {}): WhatsAppTarget {
  const page = pageMessage(pathname, opts);
  const fullRef = `${page.ref}/${placement}`;
  const text = `${GREETING}${opts.message ?? page.message} (ref: ${fullRef})`;
  const cta = opts.cta ?? LEGACY_CTA_NAMES[placement] ?? `whatsapp_${placement.replace(/-/g, '_')}`;
  return {
    href: whatsappHref(text),
    text,
    ref: page.ref,
    pageType: page.type,
    placement,
    cta,
    attrs: {
      'data-cta': cta,
      'data-cta-type': 'whatsapp',
      'data-cta-location': placement,
      'data-page-type': page.type,
      'data-ref': fullRef,
    },
  };
}
