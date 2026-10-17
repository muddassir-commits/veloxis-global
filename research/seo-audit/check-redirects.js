// Verify every redirect in next.config.mjs is a single permanent hop to a 200 page.
const BASE = process.argv[2] || 'http://localhost:3000';
(async () => {
  const { default: config } = await import('../../next.config.mjs');
  const list = await config.redirects();
  const bad = [];
  for (const { source, destination } of list) {
    const r = await fetch(BASE + source, { redirect: 'manual' });
    const loc = (r.headers.get('location') || '').replace(/^https?:\/\/[^/]+/, '');
    if (![301, 308].includes(r.status) || loc !== destination) { bad.push(`${source}: ${r.status} → ${loc}`); continue; }
    const d = await fetch(BASE + destination, { redirect: 'manual' });
    if (d.status !== 200) bad.push(`${source} → ${destination}: destination returns ${d.status}`);
  }
  console.log(`${list.length} redirects checked. ${bad.length ? 'Problems:\n' + bad.join('\n') : 'All single-hop to 200.'}`);
})();
