// Full SEO QA of a running site (live or local). Usage: node scripts/seo/qa.js https://www.veloxisglobal.com
// Reports PASS / FAIL / WARN per check across every sitemap URL.
const BASE = (process.argv[2] || 'http://localhost:3000').replace(/\/$/, '');
const PROD = 'https://www.veloxisglobal.com';

const results = [];
const add = (status, check, route, issue) => results.push({ status, check, route, issue });
const get = async (url, opts = {}) => {
  const r = await fetch(url, { redirect: 'manual', ...opts });
  return { status: r.status, loc: r.headers.get('location'), headers: r.headers, text: r.status === 200 ? await r.text() : '' };
};
const decode = (s = '') => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const metas = (h, attr, name) => [...h.matchAll(new RegExp(`<meta ${attr}="${name}" content="([^"]*)"`, 'g'))].map((m) => decode(m[1]));

(async () => {
  // robots.txt
  const robots = await get(`${BASE}/robots.txt`);
  if (robots.status !== 200) add('FAIL', 'robots', '/robots.txt', `HTTP ${robots.status}`);
  else {
    if (/Disallow:\s*\/\s*$/m.test(robots.text)) add('FAIL', 'robots', '/robots.txt', 'Disallows the whole site');
    if (!robots.text.includes(`Sitemap: ${PROD}/sitemap.xml`)) add('FAIL', 'robots', '/robots.txt', 'Sitemap line missing or wrong host');
  }

  const sm = await get(`${BASE}/sitemap.xml`);
  const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urls.length) add('FAIL', 'sitemap', '/sitemap.xml', 'Empty or unreachable');
  if (urls.some((u) => !u.startsWith(PROD))) add('FAIL', 'sitemap', '/sitemap.xml', 'Contains non-canonical host URLs');
  if (new Set(urls).size !== urls.length) add('FAIL', 'sitemap', '/sitemap.xml', 'Duplicate URLs');

  const seen = { title: new Map(), desc: new Map(), h1: new Map() };
  const links = new Set();
  const imgs = new Map();

  for (const url of urls) {
    const route = url.replace(PROD, '') || '/';
    const r = await get(BASE + route);
    if (r.status !== 200) { add('FAIL', 'status', route, `Sitemap URL returns ${r.status}`); continue; }
    const h = r.text;
    const head = (h.match(/<head>[\s\S]*?<\/head>/) || [''])[0];
    const body = h.replace(/<script[\s\S]*?<\/script>/g, '');

    // Duplicate / obsolete tags
    const titles = [...head.matchAll(/<title>([^<]*)<\/title>/g)].map((m) => decode(m[1]));
    const descs = metas(head, 'name', 'description');
    const canons = [...head.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((m) => m[1]);
    if (titles.length !== 1) add('FAIL', 'duplicate-meta', route, `${titles.length} <title> tags`);
    if (descs.length !== 1) add('FAIL', 'duplicate-meta', route, `${descs.length} meta descriptions`);
    if (canons.length !== 1) add('FAIL', 'duplicate-meta', route, `${canons.length} canonical tags`);
    if (/<meta name="keywords"/.test(head)) add('FAIL', 'meta-keywords', route, 'Obsolete meta keywords tag present');

    const title = titles[0] || '', desc = descs[0] || '';
    if (title.length < 20 || title.length > 62) add('WARN', 'title', route, `Title length ${title.length}: "${title}"`);
    if (seen.title.has(title)) add('FAIL', 'title', route, `Duplicate title with ${seen.title.get(title)}`);
    seen.title.set(title, route);
    if (desc.length < 120 || desc.length > 162) add('WARN', 'description', route, `Description length ${desc.length}`);
    if (seen.desc.has(desc)) add('FAIL', 'description', route, `Duplicate description with ${seen.desc.get(desc)}`);
    seen.desc.set(desc, route);
    if (canons[0] !== url) add('FAIL', 'canonical', route, `Canonical ${canons[0]} ≠ ${url}`);
    const robotsMeta = metas(head, 'name', 'robots').join(' ');
    if (/noindex/i.test(robotsMeta)) add('FAIL', 'noindex', route, 'noindex on a sitemap URL');
    if (/noindex/i.test(r.headers.get('x-robots-tag') || '')) add('FAIL', 'noindex', route, 'X-Robots-Tag noindex');

    // Open Graph / Twitter
    for (const p of ['og:title', 'og:description', 'og:url', 'og:image', 'og:type', 'og:site_name', 'og:locale']) {
      if (!metas(head, 'property', p).length) add('FAIL', 'open-graph', route, `Missing ${p}`);
    }
    const ogUrl = metas(head, 'property', 'og:url')[0];
    if (ogUrl && ogUrl !== url) add('FAIL', 'open-graph', route, `og:url ${ogUrl} ≠ canonical`);
    const ogImg = metas(head, 'property', 'og:image')[0];
    if (ogImg) {
      const ir = await fetch(ogImg.replace(PROD, BASE), { method: 'HEAD' });
      if (ir.status !== 200) add('FAIL', 'open-graph', route, `og:image ${ogImg} returns ${ir.status}`);
    }
    for (const n of ['twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
      if (!metas(head, 'name', n).length) add('FAIL', 'twitter', route, `Missing ${n}`);
    }

    // Headings
    const heads = [...body.matchAll(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/g)].map((m) => ({ l: +m[1], t: m[2].replace(/<[^>]+>/g, '').trim() }));
    const h1s = heads.filter((x) => x.l === 1);
    if (h1s.length !== 1) add('FAIL', 'headings', route, `${h1s.length} H1s`);
    if (h1s[0] && seen.h1.has(h1s[0].t)) add('FAIL', 'headings', route, `Duplicate H1 with ${seen.h1.get(h1s[0].t)}`);
    if (h1s[0]) seen.h1.set(h1s[0].t, route);
    if (heads.length && heads[0].l !== 1) add('WARN', 'headings', route, `First heading is H${heads[0].l} ("${heads[0].t.slice(0, 40)}") before the H1`);
    for (let i = 1; i < heads.length; i++) {
      if (heads[i].l > heads[i - 1].l + 1) add('WARN', 'headings', route, `H${heads[i - 1].l} → H${heads[i].l} skip at "${heads[i].t.slice(0, 50)}"`);
    }
    for (const x of heads) if (!x.t) add('FAIL', 'headings', route, `Empty H${x.l}`);

    // JSON-LD
    const blocks = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => { try { return JSON.parse(m[1]); } catch { return null; } });
    if (blocks.includes(null)) add('FAIL', 'schema', route, 'Invalid JSON-LD');
    const nodes = blocks.filter(Boolean).flatMap((b) => (b['@graph'] ? b['@graph'] : [b]));
    const types = nodes.map((n) => [].concat(n['@type']).join('+'));
    const dup = types.filter((t, i) => types.indexOf(t) !== i);
    if (dup.length) add('FAIL', 'schema', route, `Duplicate schema types: ${dup.join(', ')}`);
    const org = nodes.find((n) => [].concat(n['@type']).includes('Organization'));
    if (!org) add('FAIL', 'schema-org', route, 'Organization missing');
    else {
      for (const k of ['name', 'url', 'logo', 'email', 'telephone', 'sameAs', 'areaServed']) if (!org[k]) add('FAIL', 'schema-org', route, `Organization.${k} missing`);
      if (org.address) add('FAIL', 'schema-org', route, 'Organization has an address (service-area business)');
      if (org.aggregateRating || org.review) add('FAIL', 'schema-org', route, 'Self-rated review markup present');
    }
    if (!nodes.find((n) => n['@type'] === 'WebSite')) add('FAIL', 'schema-website', route, 'WebSite missing');
    if (/"(aggregateRating|Review)"/.test(JSON.stringify(blocks))) add('FAIL', 'schema', route, 'Review/aggregateRating found');
    const bc = nodes.find((n) => n['@type'] === 'BreadcrumbList');
    if (route !== '/') {
      if (!bc) add('FAIL', 'schema-breadcrumb', route, 'BreadcrumbList missing');
      else {
        const items = bc.itemListElement;
        if (items[0].item !== PROD) add('FAIL', 'schema-breadcrumb', route, 'First breadcrumb is not the homepage');
        if (items[items.length - 1].item !== url) add('FAIL', 'schema-breadcrumb', route, `Last breadcrumb ${items[items.length - 1].item} ≠ page URL`);
        items.forEach((it, i) => { if (it.position !== i + 1) add('FAIL', 'schema-breadcrumb', route, 'Positions not sequential'); });
      }
    }
    for (const n of nodes) {
      const t = n['@type'];
      if (t === 'BlogPosting') {
        for (const k of ['headline', 'image', 'datePublished', 'dateModified', 'author', 'publisher']) if (!n[k]) add('FAIL', 'schema-article', route, `BlogPosting.${k} missing`);
        if (n.headline && n.headline.length > 110) add('WARN', 'schema-article', route, `headline ${n.headline.length} chars (>110)`);
        if (n.url && n.url !== url) add('FAIL', 'schema-article', route, 'BlogPosting.url ≠ page URL');
      }
      if (t === 'Service') {
        for (const k of ['name', 'description', 'provider', 'serviceType', 'url']) if (!n[k]) add('FAIL', 'schema-service', route, `Service.${k} missing`);
        if (n.url && n.url !== url) add('FAIL', 'schema-service', route, 'Service.url ≠ page URL');
      }
      if (t === 'FAQPage') {
        const visible = (body.match(/<dt>/g) || []).length;
        if (n.mainEntity.length !== visible) add('FAIL', 'schema-faq', route, `FAQPage ${n.mainEntity.length} ≠ ${visible} visible`);
        for (const q of n.mainEntity) if (!decode(body).includes(q.acceptedAnswer.text.slice(0, 60))) add('FAIL', 'schema-faq', route, `FAQ answer not visible: "${q.name.slice(0, 50)}"`);
      }
    }

    // Images
    for (const m of body.matchAll(/<img\b[^>]*>/g)) {
      const tag = m[0];
      const src = decode((tag.match(/\ssrc="([^"]+)"/) || [])[1] || '');
      if (!/\balt=/.test(tag)) add('FAIL', 'images', route, `Missing alt: ${src.slice(0, 80)}`);
      if (!/\/_next\/image|data:image/.test(src) && src.startsWith('/')) add('WARN', 'images', route, `Unoptimised <img> (not next/image): ${src}`);
      if (!/(width|fill|sizes)=/.test(tag) && !/position:absolute/.test(tag)) add('WARN', 'images', route, `No dimensions: ${src.slice(0, 60)}`);
      const orig = decodeURIComponent((src.match(/url=([^&]+)/) || [])[1] || '');
      if (orig) imgs.set(orig, route);
    }

    // Links
    const bodyOnly = body.replace(/<head>[\s\S]*?<\/head>/, "");
    for (const m of bodyOnly.matchAll(/<a\b[^>]*\shref="([^"#]*)(#[^"]*)?"/g)) {
      const href = decode(m[1]);
      if (href.startsWith('/') && !href.startsWith('/_next')) links.add(href.split('?')[0]);
      if (/^https?:\/\/(www\.)?veloxisglobal\.com/.test(href)) add('WARN', 'links', route, `Absolute internal link: ${href}`);
    }
  }

  // Link targets + redirects
  for (const l of links) {
    const r = await get(BASE + l);
    if (r.status === 200) continue;
    if ([301, 302, 307, 308].includes(r.status)) add('FAIL', 'unnecessary-redirect', l, `Internal link redirects to ${r.loc}`);
    else add('FAIL', 'broken-link', l, `HTTP ${r.status}`);
  }
  const routes = new Set(urls.map((u) => u.replace(PROD, '') || '/'));
  for (const r of routes) if (r !== '/' && !links.has(r)) add('FAIL', 'orphan', r, 'Not linked from any sitemap page');
  for (const l of links) {
    if (routes.has(l) || /\.(xml|txt|ico|png|jpg|webp)$/.test(l)) continue;
    add('WARN', 'sitemap', l, 'Linked internally but not in sitemap');
  }

  // Image weight (originals)
  for (const [src, route] of imgs) {
    if (!src.startsWith('/')) continue;
    const r = await fetch(BASE + src, { method: 'HEAD' });
    const kb = Math.round(+(r.headers.get('content-length') || 0) / 1024);
    if (kb > 400) add('WARN', 'image-weight', route, `${src} original is ${kb} KB (served resized via next/image)`);
  }

  // Redirect loops / chains for apex + legacy
  const apex = await get(BASE.replace('://www.', '://') + '/');
  if (BASE.includes('www.') && apex.status !== 308) add('WARN', 'redirects', 'apex', `Apex returns ${apex.status}`);

  const order = { FAIL: 0, WARN: 1 };
  results.sort((a, b) => order[a.status] - order[b.status] || a.check.localeCompare(b.check));
  const byCheck = {};
  for (const r of results) (byCheck[r.check] ||= []).push(r);
  console.log(`Checked ${urls.length} URLs, ${links.size} internal link targets.`);
  console.log(`FAIL: ${results.filter((r) => r.status === 'FAIL').length}  WARN: ${results.filter((r) => r.status === 'WARN').length}\n`);
  for (const r of results) console.log(`${r.status.padEnd(4)} [${r.check}] ${r.route} — ${r.issue}`);
})();
