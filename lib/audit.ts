// Free Website Audit: fetches one public page (plus its robots.txt, llms.txt and sitemap) and runs
// plain checks for SEO basics, speed, lead capture, tracking, trust and AI search readiness.
// Server-only. Every check is a regex/heuristic on the raw HTML, so it costs nothing to run.
// Scores are a guide, not a ranking promise; the page says so.

import dns from 'node:dns/promises';
import net from 'node:net';

export type Status = 'pass' | 'warn' | 'fail' | 'info';
export type CategoryId = 'ai' | 'seo' | 'leads' | 'tracking' | 'speed' | 'trust';

export interface Check {
  id: string;
  category: CategoryId;
  label: string;
  status: Status;
  detail: string;
  /** What to do about it; only set when status is warn/fail */
  fix?: string;
  /** 1 = fix first */
  priority?: 1 | 2 | 3;
  weight: number;
}

export interface AuditResult {
  url: string;
  finalUrl: string;
  fetchedAt: string;
  responseMs: number;
  htmlKb: number;
  score: number;
  categories: { id: CategoryId; label: string; score: number }[];
  checks: Check[];
}

export const CATEGORY_LABELS: Record<CategoryId, string> = {
  ai: 'AI search readiness',
  seo: 'SEO basics',
  leads: 'Lead capture',
  tracking: 'Tracking',
  speed: 'Speed',
  trust: 'Trust',
};

export class AuditError extends Error {}

const UA = 'Mozilla/5.0 (compatible; VeloxisAudit/1.0; +https://www.veloxisglobal.com/tools/website-audit)';
const MAX_BYTES = 3_000_000;

// ---------- safe fetching (blocks private and internal addresses) ----------

function isPrivateIp(ip: string): boolean {
  if (net.isIPv4(ip)) {
    const [a, b] = ip.split('.').map(Number);
    return (
      a === 0 || a === 10 || a === 127 || (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) || (a === 198 && (b === 18 || b === 19)) || a >= 224
    );
  }
  const v = ip.toLowerCase();
  if (v.startsWith('::ffff:')) return isPrivateIp(v.slice(7));
  return v === '::' || v === '::1' || v.startsWith('fc') || v.startsWith('fd') || v.startsWith('fe80') || v.startsWith('ff');
}

async function assertPublicHost(url: URL) {
  if (!['http:', 'https:'].includes(url.protocol)) throw new AuditError('Only http and https addresses can be checked.');
  if (url.port && !['80', '443'].includes(url.port)) throw new AuditError('Only standard web ports can be checked.');
  const host = url.hostname.replace(/^\[|\]$/g, '');
  if (net.isIP(host)) throw new AuditError('Enter a domain name, not an IP address.');
  if (!host.includes('.') || /\.(local|internal|localhost)$/i.test(host)) throw new AuditError('That address is not a public website.');
  let addrs: { address: string }[];
  try {
    addrs = await dns.lookup(host, { all: true });
  } catch {
    throw new AuditError(`Couldn't find the website ${host}. Check the spelling.`);
  }
  if (!addrs.length || addrs.some((a) => isPrivateIp(a.address))) throw new AuditError('That address is not a public website.');
}

async function readCapped(res: Response): Promise<string> {
  if (!res.body) return '';
  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > MAX_BYTES) {
      await reader.cancel();
      break;
    }
    chunks.push(value);
  }
  return new TextDecoder('utf-8', { fatal: false }).decode(Buffer.concat(chunks));
}

interface Fetched {
  url: string;
  status: number;
  headers: Headers;
  body: string;
  ms: number;
  redirects: number;
}

async function safeFetch(start: string, timeoutMs = 10_000): Promise<Fetched> {
  let url = new URL(start);
  const t0 = Date.now();
  for (let redirects = 0; redirects <= 5; redirects++) {
    await assertPublicHost(url);
    const res = await fetch(url, {
      redirect: 'manual',
      headers: { 'User-Agent': UA, Accept: 'text/html,text/plain,application/xml;q=0.9,*/*;q=0.5' },
      signal: AbortSignal.timeout(timeoutMs),
      cache: 'no-store',
    });
    const loc = res.headers.get('location');
    if (res.status >= 300 && res.status < 400 && loc) {
      url = new URL(loc, url);
      continue;
    }
    const body = await readCapped(res);
    return { url: url.toString(), status: res.status, headers: res.headers, body, ms: Date.now() - t0, redirects };
  }
  throw new AuditError('The page redirects too many times.');
}

async function tryFetch(url: string): Promise<Fetched | null> {
  try {
    return await safeFetch(url, 6_000);
  } catch {
    return null;
  }
}

// ---------- HTML helpers ----------

const decode = (s: string) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const strip = (s: string) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

function metaContent(html: string, key: string): string | null {
  const re = new RegExp(`<meta[^>]+(?:name|property)=["']${key}["'][^>]*>`, 'i');
  const tag = html.match(re)?.[0];
  if (!tag) return null;
  return decode(tag.match(/content=["']([^"']*)["']/i)?.[1] ?? '').trim();
}

function linkHref(html: string, rel: string): string | null {
  const tag = html.match(new RegExp(`<link[^>]+rel=["'][^"']*\\b${rel}\\b[^"']*["'][^>]*>`, 'i'))?.[0];
  return tag?.match(/href=["']([^"']+)["']/i)?.[1] ?? null;
}

function jsonLdTypes(html: string): { types: Set<string>; sameAs: number; ok: boolean } {
  const types = new Set<string>();
  let sameAs = 0;
  let ok = true;
  const walk = (n: unknown) => {
    if (Array.isArray(n)) return n.forEach(walk);
    if (n && typeof n === 'object') {
      const o = n as Record<string, unknown>;
      const t = o['@type'];
      (Array.isArray(t) ? t : t ? [t] : []).forEach((x) => types.add(String(x)));
      if (Array.isArray(o.sameAs)) sameAs += o.sameAs.length;
      Object.values(o).forEach(walk);
    }
  };
  for (const m of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      walk(JSON.parse(m[1].trim()));
    } catch {
      ok = false;
    }
  }
  return { types, sameAs, ok };
}

const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Bingbot'];

/** Is `bot` blocked from `/` by robots.txt? Simple group matching, enough for the common cases. */
function robotsBlocks(robots: string, bot: string): boolean {
  const groups: { agents: string[]; rules: string[] }[] = [];
  let cur: { agents: string[]; rules: string[] } | null = null;
  for (const raw of robots.split(/\r?\n/)) {
    const line = raw.replace(/#.*/, '').trim();
    const m = line.match(/^([a-z-]+)\s*:\s*(.*)$/i);
    if (!m) continue;
    const [, k, v] = m;
    if (k.toLowerCase() === 'user-agent') {
      if (!cur || cur.rules.length) groups.push((cur = { agents: [], rules: [] }));
      cur.agents.push(v.trim().toLowerCase());
    } else if (cur && /^(dis)?allow$/i.test(k)) {
      cur.rules.push(`${k.toLowerCase()}:${v.trim()}`);
    }
  }
  const pick = groups.find((g) => g.agents.includes(bot.toLowerCase())) ?? groups.find((g) => g.agents.includes('*'));
  if (!pick) return false;
  const disallowRoot = pick.rules.includes('disallow:/');
  const allowRoot = pick.rules.includes('allow:/');
  return disallowRoot && !allowRoot;
}

// ---------- the audit ----------

export async function runAudit(input: string): Promise<AuditResult> {
  let raw = input.trim();
  if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
  let start: URL;
  try {
    start = new URL(raw);
  } catch {
    throw new AuditError('That doesn’t look like a website address.');
  }

  let page: Fetched;
  try {
    page = await safeFetch(start.toString());
  } catch (e) {
    if (e instanceof AuditError) throw e;
    throw new AuditError('The website didn’t respond in time. Check the address or try again.');
  }
  const ctype = page.headers.get('content-type') || '';
  if (!/html/i.test(ctype) && !/<html/i.test(page.body.slice(0, 2000))) throw new AuditError('That address doesn’t return a web page.');

  const html = page.body;
  const final = new URL(page.url);
  const origin = final.origin;
  const [robotsF, llmsF] = await Promise.all([tryFetch(`${origin}/robots.txt`), tryFetch(`${origin}/llms.txt`)]);
  const robots = robotsF && robotsF.status === 200 && !/<html/i.test(robotsF.body.slice(0, 500)) ? robotsF.body : null;
  const sitemapUrl = robots?.match(/^\s*sitemap:\s*(\S+)/im)?.[1] ?? `${origin}/sitemap.xml`;
  const sitemapF = await tryFetch(sitemapUrl);
  const hasSitemap = !!sitemapF && sitemapF.status === 200 && /<(urlset|sitemapindex)/i.test(sitemapF.body);
  const hasLlms = !!llmsF && llmsF.status === 200 && !/<html/i.test(llmsF.body.slice(0, 500)) && llmsF.body.trim().length > 50;

  const head = html.match(/<head[\s\S]*?<\/head>/i)?.[0] ?? html.slice(0, 20000);
  const bodyHtml = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  const text = strip(bodyHtml.match(/<body[\s\S]*<\/body>/i)?.[0] ?? bodyHtml);
  const words = text ? text.split(' ').length : 0;

  const title = strip(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '');
  const desc = metaContent(head, 'description');
  const robotsMeta = `${metaContent(head, 'robots') ?? ''} ${metaContent(head, 'googlebot') ?? ''}`.toLowerCase();
  const xRobots = (page.headers.get('x-robots-tag') || '').toLowerCase();
  const canonical = linkHref(head, 'canonical');
  const lang = html.match(/<html[^>]+lang=["']([^"']+)["']/i)?.[1];
  const viewport = metaContent(head, 'viewport');
  const ogTitle = metaContent(head, 'og:title');
  const ogImage = metaContent(head, 'og:image');
  const favicon = linkHref(head, 'icon') || linkHref(head, 'shortcut icon');
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => strip(m[1])).filter(Boolean);
  const subHeads = [...html.matchAll(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi)].map((m) => strip(m[1]));
  const questionHeads = subHeads.filter((h) => /\?$/.test(h) || /^(what|how|why|when|where|which|who|is|can|do|does|should)\b/i.test(h));
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const imgsNoAlt = imgs.filter((t) => !/\balt=["'][^"']+["']/i.test(t)).length;
  const lazyImgs = imgs.filter((t) => /loading=["']lazy["']/i.test(t)).length;
  const links = [...html.matchAll(/<a\b[^>]*href=["']([^"'#]+)["']/gi)].map((m) => m[1]);
  const internalLinks = links.filter((h) => h.startsWith('/') || h.startsWith(origin)).length;
  const scripts = [...html.matchAll(/<script\b[^>]*\bsrc=["'][^"']+["'][^>]*>/gi)].map((m) => m[0]);
  const blockingScripts = [...head.matchAll(/<script\b[^>]*\bsrc=["'][^"']+["'][^>]*>/gi)].filter((m) => !/\b(async|defer)\b|type=["']module["']/i.test(m[0])).length;
  const stylesheets = [...head.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]*>/gi)].length;
  const ld = jsonLdTypes(html);
  const has = (re: RegExp) => re.test(html);
  const htmlKb = Math.round(Buffer.byteLength(html) / 1024);

  const checks: Check[] = [];
  const add = (c: Check) => checks.push(c);

  // ---- AI search readiness ----
  const blockedBots = robots ? AI_BOTS.filter((b) => robotsBlocks(robots, b)) : [];
  add({
    id: 'ai-crawlers', category: 'ai', label: 'AI crawlers can read the site', weight: 3,
    status: blockedBots.length === 0 ? 'pass' : blockedBots.length >= 3 ? 'fail' : 'warn',
    detail: blockedBots.length ? `robots.txt blocks: ${blockedBots.join(', ')}.` : 'robots.txt does not block GPTBot, ClaudeBot, PerplexityBot, Google-Extended or Bingbot.',
    fix: 'Allow the AI search crawlers (OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, Bingbot) in robots.txt, or ChatGPT, Perplexity and Copilot cannot use your pages in answers.',
    priority: 1,
  });
  add({
    id: 'ai-no-js', category: 'ai', label: 'Content readable without JavaScript', weight: 3,
    status: words >= 300 ? 'pass' : words >= 120 ? 'warn' : 'fail',
    detail: `${words} words of text in the raw HTML.`,
    fix: 'Most AI crawlers do not run JavaScript. Make sure the main text is in the HTML the server sends (server-side rendering), not loaded later by scripts.',
    priority: 1,
  });
  add({
    id: 'ai-schema-org', category: 'ai', label: 'Business identity in structured data', weight: 2,
    status: [...ld.types].some((t) => /Organization|LocalBusiness|ProfessionalService|Corporation|Store|Person/.test(t)) ? 'pass' : 'fail',
    detail: ld.types.size ? `Schema types found: ${[...ld.types].slice(0, 8).join(', ')}.` : 'No JSON-LD structured data found.',
    fix: 'Add Organization (or LocalBusiness) JSON-LD with your name, logo, URL, phone, area served and social profiles, so search engines and AI tools know exactly who you are.',
    priority: 1,
  });
  add({
    id: 'ai-sameas', category: 'ai', label: 'Profiles linked with sameAs', weight: 1,
    status: ld.sameAs >= 2 ? 'pass' : 'warn',
    detail: ld.sameAs ? `${ld.sameAs} sameAs links in structured data.` : 'No sameAs links connect the site to your social and directory profiles.',
    fix: 'List your LinkedIn, Instagram, Facebook, YouTube and directory profiles in the sameAs field of your Organization schema. It helps AI tools match your brand to one entity.',
    priority: 2,
  });
  add({
    id: 'ai-questions', category: 'ai', label: 'Question-style headings', weight: 2,
    status: questionHeads.length >= 3 ? 'pass' : questionHeads.length >= 1 ? 'warn' : 'fail',
    detail: `${questionHeads.length} headings phrased as questions people ask.`,
    fix: 'Add H2/H3 headings that match real questions ("How much does …", "What is …") with a direct 1–2 sentence answer right below. Answer engines lift these.',
    priority: 2,
  });
  add({
    id: 'ai-faq', category: 'ai', label: 'FAQ structured data', weight: 1,
    status: ld.types.has('FAQPage') || ld.types.has('QAPage') ? 'pass' : 'warn',
    detail: ld.types.has('FAQPage') ? 'FAQPage schema found.' : 'No FAQPage schema on this page.',
    fix: 'Add a short FAQ section with FAQPage JSON-LD that matches the visible questions and answers.',
    priority: 3,
  });
  add({
    id: 'ai-snippet', category: 'ai', label: 'Snippets not restricted', weight: 2,
    status: /nosnippet|max-snippet:\s*0/.test(robotsMeta + xRobots) ? 'fail' : 'pass',
    detail: /nosnippet|max-snippet:\s*0/.test(robotsMeta + xRobots) ? 'nosnippet or max-snippet:0 is set, so Google cannot quote this page in AI Overviews.' : 'No snippet restrictions.',
    fix: 'Remove nosnippet / max-snippet:0 from the robots meta tag or X-Robots-Tag header.',
    priority: 1,
  });
  add({
    id: 'ai-llms', category: 'ai', label: 'llms.txt file', weight: 0,
    status: 'info',
    detail: hasLlms ? 'llms.txt found.' : 'No llms.txt. It is optional: Google has said it does not use it, and other AI tools are still experimenting.',
  });

  // ---- SEO basics ----
  const indexBlocked = /noindex/.test(robotsMeta + xRobots);
  add({
    id: 'seo-index', category: 'seo', label: 'Page can be indexed', weight: 3,
    status: page.status !== 200 ? 'fail' : indexBlocked ? 'fail' : 'pass',
    detail: page.status !== 200 ? `The page returned HTTP ${page.status}.` : indexBlocked ? 'A noindex tag tells Google not to show this page.' : 'Returns 200 and no noindex tag.',
    fix: page.status !== 200 ? 'Make sure the page returns HTTP 200.' : 'Remove the noindex robots tag if you want this page in Google.',
    priority: 1,
  });
  add({
    id: 'seo-https', category: 'seo', label: 'HTTPS', weight: 2,
    status: final.protocol === 'https:' ? 'pass' : 'fail',
    detail: final.protocol === 'https:' ? 'The page loads over HTTPS.' : 'The page loads over plain HTTP.',
    fix: 'Install an SSL certificate and redirect every http:// address to https://.',
    priority: 1,
  });
  add({
    id: 'seo-title', category: 'seo', label: 'Title tag', weight: 2,
    status: !title ? 'fail' : title.length < 20 || title.length > 65 ? 'warn' : 'pass',
    detail: title ? `"${title.slice(0, 90)}" (${title.length} characters)` : 'No <title> tag.',
    fix: 'Write a unique title of 30–60 characters with the main search phrase near the start and your brand at the end.',
    priority: 1,
  });
  add({
    id: 'seo-desc', category: 'seo', label: 'Meta description', weight: 1,
    status: !desc ? 'fail' : desc.length < 70 || desc.length > 170 ? 'warn' : 'pass',
    detail: desc ? `${desc.length} characters.` : 'No meta description.',
    fix: 'Add a 140–160 character description that says what the page offers and why to click.',
    priority: 2,
  });
  add({
    id: 'seo-h1', category: 'seo', label: 'One clear H1 heading', weight: 2,
    status: h1s.length === 1 ? 'pass' : h1s.length === 0 ? 'fail' : 'warn',
    detail: h1s.length ? `${h1s.length} H1: "${h1s[0].slice(0, 80)}"` : 'No H1 heading.',
    fix: 'Use exactly one H1 that states what the page is about.',
    priority: 2,
  });
  add({
    id: 'seo-canonical', category: 'seo', label: 'Canonical URL', weight: 1,
    status: canonical ? 'pass' : 'warn',
    detail: canonical ? `Canonical: ${canonical}` : 'No canonical link tag.',
    fix: 'Add <link rel="canonical"> pointing to the preferred address of the page, so duplicates don’t split your ranking.',
    priority: 2,
  });
  add({
    id: 'seo-sitemap', category: 'seo', label: 'XML sitemap', weight: 1,
    status: hasSitemap ? 'pass' : 'warn',
    detail: hasSitemap ? `Sitemap found at ${sitemapUrl}.` : 'No sitemap found in robots.txt or at /sitemap.xml.',
    fix: 'Publish a sitemap.xml, list it in robots.txt and submit it in Google Search Console and Bing Webmaster Tools.',
    priority: 2,
  });
  add({
    id: 'seo-robots', category: 'seo', label: 'robots.txt', weight: 1,
    status: robots ? 'pass' : 'warn',
    detail: robots ? 'robots.txt found.' : 'No robots.txt file.',
    fix: 'Add a robots.txt that allows crawling and points to your sitemap.',
    priority: 3,
  });
  add({
    id: 'seo-alt', category: 'seo', label: 'Image alt text', weight: 1,
    status: imgs.length === 0 || imgsNoAlt === 0 ? 'pass' : imgsNoAlt / imgs.length > 0.3 ? 'fail' : 'warn',
    detail: imgs.length ? `${imgs.length - imgsNoAlt} of ${imgs.length} images have alt text.` : 'No <img> tags in the HTML.',
    fix: 'Describe every meaningful image in its alt text. It helps Google Images, accessibility and AI tools.',
    priority: 3,
  });
  add({
    id: 'seo-og', category: 'seo', label: 'Social sharing preview', weight: 1,
    status: ogTitle && ogImage ? 'pass' : 'warn',
    detail: ogTitle && ogImage ? 'Open Graph title and image set.' : `Missing: ${[!ogTitle && 'og:title', !ogImage && 'og:image'].filter(Boolean).join(', ')}.`,
    fix: 'Add og:title, og:description and a 1200×630 og:image so links shared on WhatsApp, LinkedIn and Facebook show a proper preview.',
    priority: 3,
  });
  add({
    id: 'seo-mobile', category: 'seo', label: 'Mobile viewport', weight: 2,
    status: viewport && /width=device-width/i.test(viewport) ? 'pass' : 'fail',
    detail: viewport ? `viewport: ${viewport}` : 'No viewport meta tag; the page will look tiny on phones.',
    fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1">.',
    priority: 1,
  });
  add({
    id: 'seo-lang', category: 'seo', label: 'Language declared', weight: 0.5,
    status: lang ? 'pass' : 'warn',
    detail: lang ? `lang="${lang}"` : 'No lang attribute on <html>.',
    fix: 'Set <html lang="en-IN"> (or the page’s real language).',
    priority: 3,
  });
  add({
    id: 'seo-links', category: 'seo', label: 'Internal links', weight: 1,
    status: internalLinks >= 10 ? 'pass' : internalLinks >= 3 ? 'warn' : 'fail',
    detail: `${internalLinks} links to other pages on the same site.`,
    fix: 'Link to your key pages (services, contact, guides) from this page so Google and visitors can find them.',
    priority: 3,
  });
  add({
    id: 'seo-favicon', category: 'seo', label: 'Favicon', weight: 0.5,
    status: favicon ? 'pass' : 'warn',
    detail: favicon ? 'Favicon set.' : 'No favicon link; Google shows a blank globe next to your result.',
    fix: 'Add a square favicon (at least 48×48 px) so Google can show your logo next to your results.',
    priority: 3,
  });

  // ---- Lead capture ----
  const hasForm = /<form\b/i.test(html) || /<input[^>]+type=["'](email|tel)["']/i.test(html);
  const hasWa = has(/wa\.me\/|api\.whatsapp\.com\/send|whatsapp:\/\/send/i);
  const hasTel = has(/href=["']tel:/i);
  const hasMail = has(/href=["']mailto:/i);
  add({
    id: 'lead-form', category: 'leads', label: 'Enquiry form', weight: 3,
    status: hasForm ? 'pass' : 'fail',
    detail: hasForm ? 'A form is on the page.' : 'No form found in the page HTML.',
    fix: 'Put a short enquiry form (name, phone, one question) on the page, ideally visible without scrolling.',
    priority: 1,
  });
  add({
    id: 'lead-whatsapp', category: 'leads', label: 'WhatsApp click-to-chat', weight: 3,
    status: hasWa ? 'pass' : 'fail',
    detail: hasWa ? 'A WhatsApp chat link is on the page.' : 'No WhatsApp link. In India most buyers prefer to message first.',
    fix: 'Add a wa.me link with a pre-filled message, as a button and as a floating icon on mobile.',
    priority: 1,
  });
  add({
    id: 'lead-contact', category: 'leads', label: 'Phone or email link', weight: 1,
    status: hasTel || hasMail ? 'pass' : 'warn',
    detail: [hasTel && 'tap-to-call link', hasMail && 'email link'].filter(Boolean).join(' and ') || 'No tap-to-call or email link.',
    fix: 'Add at least one direct contact link (tel: or mailto:).',
    priority: 2,
  });

  // ---- Tracking ----
  const ga4 = has(/gtag\/js\?id=G-|['"]G-[A-Z0-9]{6,}['"]/);
  const gtm = has(/googletagmanager\.com\/gtm\.js|GTM-[A-Z0-9]{4,}/);
  const pixel = has(/connect\.facebook\.net\/[^"']*fbevents\.js|fbq\(\s*['"]init/);
  const gads = has(/AW-\d{6,}/);
  const clarity = has(/clarity\.ms\/tag/);
  add({
    id: 'track-analytics', category: 'tracking', label: 'Analytics installed', weight: 3,
    status: ga4 || gtm ? 'pass' : 'fail',
    detail: [ga4 && 'Google Analytics 4', gtm && 'Google Tag Manager', clarity && 'Microsoft Clarity'].filter(Boolean).join(', ') || 'No Google Analytics or Tag Manager found in the HTML.',
    fix: 'Install Google Analytics 4 (through Google Tag Manager) so you can see visits and which sources bring enquiries.',
    priority: 1,
  });
  add({
    id: 'track-pixel', category: 'tracking', label: 'Ad tracking (Meta Pixel / Google Ads)', weight: 2,
    status: pixel || gads ? 'pass' : 'warn',
    detail: [pixel && 'Meta Pixel', gads && 'Google Ads tag'].filter(Boolean).join(', ') || 'No Meta Pixel or Google Ads tag found.',
    fix: 'If you run or plan to run ads, add the Meta Pixel and Google Ads conversion tag, and record a conversion on every form submit and WhatsApp click.',
    priority: 2,
  });
  add({
    id: 'track-note', category: 'tracking', label: 'Note', weight: 0, status: 'info',
    detail: 'Tags loaded only after cookie consent may not show up here. If you know a tag is installed this way, ignore a fail above.',
  });

  // ---- Speed (from the server's point of view) ----
  add({
    id: 'speed-response', category: 'speed', label: 'Server response time', weight: 2,
    status: page.ms < 800 ? 'pass' : page.ms < 2000 ? 'warn' : 'fail',
    detail: `${page.ms} ms to receive the page${page.redirects ? ` (after ${page.redirects} redirect${page.redirects > 1 ? 's' : ''})` : ''}.`,
    fix: 'Use better hosting or a CDN, enable caching, and link straight to the final URL to avoid redirects.',
    priority: 2,
  });
  add({
    id: 'speed-size', category: 'speed', label: 'HTML size', weight: 1,
    status: htmlKb < 300 ? 'pass' : htmlKb < 800 ? 'warn' : 'fail',
    detail: `${htmlKb} KB of HTML.`,
    fix: 'Remove inline page-builder code, unused sections and huge inline scripts.',
    priority: 3,
  });
  add({
    id: 'speed-blocking', category: 'speed', label: 'Render-blocking scripts', weight: 2,
    status: blockingScripts === 0 ? 'pass' : blockingScripts <= 3 ? 'warn' : 'fail',
    detail: `${blockingScripts} scripts in <head> without async/defer; ${stylesheets} stylesheets; ${scripts.length} script files in total.`,
    fix: 'Add defer or async to scripts in <head> and remove plugins you don’t use. Each one delays the first paint on a phone.',
    priority: 2,
  });
  add({
    id: 'speed-lazy', category: 'speed', label: 'Lazy-loaded images', weight: 1,
    status: imgs.length <= 3 || lazyImgs > 0 ? 'pass' : 'warn',
    detail: `${lazyImgs} of ${imgs.length} images use loading="lazy".`,
    fix: 'Add loading="lazy" to images below the first screen.',
    priority: 3,
  });

  // ---- Trust ----
  const privacy = links.some((h) => /privacy/i.test(h));
  const socials = ['instagram.com', 'facebook.com', 'linkedin.com', 'youtube.com', 'x.com/', 'twitter.com'].filter((d) => links.some((h) => h.includes(d)));
  add({
    id: 'trust-privacy', category: 'trust', label: 'Privacy policy', weight: 2,
    status: privacy ? 'pass' : 'fail',
    detail: privacy ? 'A privacy policy is linked.' : 'No privacy policy link. Ad platforms and India’s DPDP Act expect one when you collect leads.',
    fix: 'Publish a privacy policy page and link it in the footer and next to every form.',
    priority: 2,
  });
  add({
    id: 'trust-social', category: 'trust', label: 'Social profiles linked', weight: 1,
    status: socials.length >= 2 ? 'pass' : socials.length === 1 ? 'warn' : 'fail',
    detail: socials.length ? `Links to ${socials.map((s) => s.replace(/\.com\/?|\/$/, '')).join(', ')}.` : 'No links to social profiles.',
    fix: 'Link your active social profiles in the footer so visitors (and Google) can confirm you are a real business.',
    priority: 3,
  });

  // ---- scoring ----
  const scoreOf = (list: Check[]) => {
    const scored = list.filter((c) => c.status !== 'info' && c.weight > 0);
    const max = scored.reduce((s, c) => s + c.weight, 0);
    const got = scored.reduce((s, c) => s + c.weight * (c.status === 'pass' ? 1 : c.status === 'warn' ? 0.5 : 0), 0);
    return max ? Math.round((got / max) * 100) : 100;
  };
  const order: CategoryId[] = ['ai', 'seo', 'leads', 'tracking', 'speed', 'trust'];
  const categories = order.map((id) => ({ id, label: CATEGORY_LABELS[id], score: scoreOf(checks.filter((c) => c.category === id)) }));
  for (const c of checks) if (c.status === 'pass' || c.status === 'info') delete c.fix;

  return {
    url: start.toString(),
    finalUrl: page.url,
    fetchedAt: new Date().toISOString(),
    responseMs: page.ms,
    htmlKb,
    score: scoreOf(checks),
    categories,
    checks,
  };
}
