// Picks blog posts worth a "1% better" refresh from Google Search Console (last 28 days):
// posts with many impressions but a low click rate, or an average position of 8-20 (page 1-2 edge).
// Prints a ranked list with each post's top queries, so the refresher knows what searchers want.
// No npm packages: signs the service-account token with node:crypto.
// Credentials: env GOOGLE_SA_JSON (the whole JSON key, cloud) or ~/.gsc/service_account.json (PC).
// Usage: node scripts/seo/gsc-refresh.mjs [howMany=5]
import { readFileSync, existsSync } from 'node:fs';
import { createSign } from 'node:crypto';
import { homedir } from 'node:os';
import { join } from 'node:path';

const SITE = 'sc-domain:veloxisglobal.com';
const howMany = Number(process.argv[2] ?? 5);

function serviceAccount() {
  if (process.env.GOOGLE_SA_JSON) return JSON.parse(process.env.GOOGLE_SA_JSON);
  const f = join(homedir(), '.gsc', 'service_account.json');
  if (existsSync(f)) return JSON.parse(readFileSync(f, 'utf8'));
  throw new Error('No Google service account: set GOOGLE_SA_JSON');
}

async function token(sa) {
  const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: sa.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(sa.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sig}`,
  });
  if (!r.ok) throw new Error(`token: ${r.status} ${await r.text()}`);
  return (await r.json()).access_token;
}

const day = (offset) => new Date(Date.now() - offset * 86400000).toISOString().slice(0, 10);
const tok = await token(serviceAccount());
async function query(dimensions, rowLimit) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
    method: 'POST',
    headers: { authorization: `Bearer ${tok}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      startDate: day(31),
      endDate: day(3),
      dimensions,
      rowLimit,
      dimensionFilterGroups: [{ filters: [{ dimension: 'page', operator: 'contains', expression: '/blog/' }] }],
    }),
  });
  if (!r.ok) throw new Error(`GSC: ${r.status} ${await r.text()}`);
  return (await r.json()).rows ?? [];
}

const pages = await query(['page'], 200);
const pq = await query(['page', 'query'], 2000);

// Score: impressions we are not turning into clicks, weighted towards positions Google may lift.
const scored = pages
  .map((r) => {
    const slug = r.keys[0].split('/blog/')[1]?.replace(/\/$/, '');
    const nearTop = r.position >= 4 && r.position <= 20 ? 1.5 : 1;
    const missed = r.impressions * Math.max(0, 0.03 - r.ctr);
    return { slug, ...r, score: missed * nearTop };
  })
  .filter((r) => r.slug && r.impressions >= 20)
  .sort((a, b) => b.score - a.score)
  .slice(0, howMany);

console.log(`Search Console ${day(31)} to ${day(3)}: refresh candidates (best first)\n`);
for (const p of scored) {
  console.log(`${p.slug}: ${p.impressions} impressions, ${p.clicks} clicks, CTR ${(p.ctr * 100).toFixed(1)}%, position ${p.position.toFixed(1)}`);
  const qs = pq
    .filter((r) => r.keys[0] === p.keys[0])
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 8);
  for (const q of qs) console.log(`    "${q.keys[1].slice(0, 90)}"  ${q.impressions} impr, pos ${q.position.toFixed(1)}`);
}
