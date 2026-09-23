// Crawl every sitemap URL on a running server and report SEO problems.
// Usage: node scripts/seo/crawl.js http://localhost:3000
const BASE = process.argv[2] || 'http://localhost:3000';
const PROD = 'https://www.veloxisglobal.com';

const get = async (url) => {
  const r = await fetch(url, { redirect: 'manual' });
  return { status: r.status, location: r.headers.get('location'), text: r.status === 200 ? await r.text() : '' };
};
const pick = (h, re) => (h.match(re) || [])[1];
const decode = (s = '') => s.replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');

(async () => {
  const sm = await get(`${BASE}/sitemap.xml`);
  const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  console.log(`sitemap: ${urls.length} URLs`);
  const problems = [];
  const links = new Set();
  const titles = new Map();

  for (const prodUrl of urls) {
    const path = prodUrl.replace(PROD, '') || '/';
    const { status, text: h } = await get(BASE + path);
    if (status !== 200) { problems.push(`${path}: HTTP ${status}`); continue; }
    const title = decode(pick(h, /<title>([^<]*)<\/title>/));
    const desc = decode(pick(h, /<meta name="description" content="([^"]*)"/));
    const canon = pick(h, /<link rel="canonical" href="([^"]*)"/);
    const robots = pick(h, /<meta name="robots" content="([^"]*)"/) || '';
    const body = h.replace(/<script[\s\S]*?<\/script>/g, '');
    const h1s = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => m[1].replace(/<[^>]+>/g, '').trim());
    const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => {
      try { const j = JSON.parse(m[1]); return j['@graph'] ? 'graph' : [].concat(j['@type']).join('+'); } catch { return 'INVALID'; }
    });
    const imgsNoAlt = [...body.matchAll(/<img(?![^>]*\balt=)[^>]*>/g)].length;
    const words = (body.match(/<main[\s\S]*<\/main>/) || [''])[0].replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

    if (!title) problems.push(`${path}: missing title`);
    else if (title.length > 65) problems.push(`${path}: title ${title.length} chars`);
    if (titles.has(title)) problems.push(`${path}: duplicate title with ${titles.get(title)}`);
    titles.set(title, path);
    if (!desc || desc.length < 110 || desc.length > 165) problems.push(`${path}: description ${desc ? desc.length : 0} chars`);
    if (canon !== prodUrl) problems.push(`${path}: canonical ${canon} ≠ ${prodUrl}`);
    if (/noindex/.test(robots)) problems.push(`${path}: noindex`);
    if (h1s.length !== 1) problems.push(`${path}: ${h1s.length} H1s`);
    if (ld.includes('INVALID')) problems.push(`${path}: invalid JSON-LD`);
    const dupes = ld.filter((t, i) => ld.indexOf(t) !== i);
    if (dupes.length) problems.push(`${path}: duplicate JSON-LD ${dupes.join(',')}`);
    if (imgsNoAlt) problems.push(`${path}: ${imgsNoAlt} <img> without alt`);

    for (const m of body.matchAll(/href="(\/[^"#?]*)/g)) if (!m[1].startsWith('/_next')) links.add(m[1]);
    console.log(`${path.padEnd(58)} ${String(words).padStart(5)}w  ${ld.join(',')}\n   ${title}\n   H1: ${h1s[0] || '-'}`);
  }

  console.log(`\nchecking ${links.size} internal link targets…`);
  for (const l of links) {
    const r = await get(BASE + l);
    if (r.status === 200) continue;
    if ([301, 308].includes(r.status)) problems.push(`link ${l}: redirects to ${r.location} (update the link)`);
    else problems.push(`link ${l}: HTTP ${r.status}`);
  }
  const inSitemap = new Set(urls.map((u) => u.replace(PROD, '') || '/'));
  const orphans = [...inSitemap].filter((p) => p !== '/' && ![...links].includes(p));
  if (orphans.length) problems.push(`not linked from any sitemap page: ${orphans.join(', ')}`);

  console.log(`\n${problems.length ? 'PROBLEMS:\n- ' + problems.join('\n- ') : 'No problems found.'}`);
})();
