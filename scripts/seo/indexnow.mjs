// Tell Bing, Yandex and other IndexNow engines that the site changed. Bing's index also feeds
// ChatGPT search and Copilot. Runs after a successful production deploy (.github/workflows/indexnow.yml);
// can also be run by hand: node scripts/seo/indexnow.mjs
// The key is public by design: IndexNow checks it at https://www.veloxisglobal.com/<key>.txt.
const HOST = 'www.veloxisglobal.com';
const KEY = 'e72468c9356f2a124955e78d31800eca';

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) {
  console.error('No URLs found in the sitemap.');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});

// 200 = accepted, 202 = accepted and key validation pending.
console.log(`IndexNow: ${res.status} for ${urlList.length} URLs`);
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
