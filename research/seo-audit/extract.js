// Usage: node extract.js <url> -> prints title, meta, canonical, headings, visible text
const url = process.argv[2];
(async () => {
  const r = await fetch(url, { redirect: 'manual' });
  const h = await r.text();
  const g = (re) => (h.match(re) || [])[1] || '';
  console.log('STATUS', r.status, url);
  console.log('TITLE', g(/<title>([^<]*)<\/title>/));
  console.log('DESC', g(/<meta name="description" content="([^"]*)"/));
  console.log('CANON', g(/<link rel="canonical" href="([^"]*)"/));
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => { try { const j = JSON.parse(m[1]); return j['@type'] || (j['@graph'] ? 'graph' : '?'); } catch { return 'INVALID'; } });
  console.log('JSONLD', JSON.stringify(ld));
  const body = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const heads = [...body.matchAll(/<h([1-3])[^>]*>([\s\S]*?)<\/h\1>/g)].map(m => '  H' + m[1] + ' ' + m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  console.log(heads.join('\n'));
  const main = (body.match(/<main[\s\S]*<\/main>/) || [body])[0];
  const text = main.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
  console.log('WORDS', text.split(' ').length);
  if (process.argv[3] === 'text') console.log('TEXT', text);
})();
