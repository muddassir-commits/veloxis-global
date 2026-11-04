// Find and download a Pixabay photo for a blog post, cropped to 1600x1000 JPEG.
// Pixabay's licence allows free commercial use without attribution.
// Needs env var PIXABAY_API_KEY (cloud environment "Veloxis"; on the PC it is in the env file).
// Skips any photo already used on the site (see below) and any
// file whose bytes match an existing image, so every post gets unique photos.
// Used ids are empty marker files in scripts/images/pixabay-used/ (one file per id, so parallel PRs never conflict).
//
// Usage: node scripts/images/fetch-pixabay.mjs "<search words>" <outPath> [--pick N] [--list]
//   --list    show the first 10 unused results (id, tags, size) without downloading
//   --pick N  download result number N from that list (default 1)
// Example: node scripts/images/fetch-pixabay.mjs "dentist clinic reception" public/images/people/blog/gbp-dentist.jpg
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const pickIdx = args.indexOf('--pick');
const pick = pickIdx >= 0 ? Number(args[pickIdx + 1]) : 1;
const [query, out] = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--pick');
const key = process.env.PIXABAY_API_KEY;
if (!query || (!out && !flag('--list'))) {
  console.error('Usage: node scripts/images/fetch-pixabay.mjs "<search words>" <outPath> [--pick N] [--list]');
  process.exit(1);
}
if (!key) {
  console.error('PIXABAY_API_KEY is not set.');
  process.exit(1);
}

const usedDir = 'scripts/images/pixabay-used';
const used = new Set(existsSync(usedDir) ? readdirSync(usedDir) : []);

const url = `https://pixabay.com/api/?key=${key}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&min_width=1200&safesearch=true&per_page=40`;
const res = await fetch(url);
if (!res.ok) {
  console.error(`Pixabay search failed: ${res.status}`);
  process.exit(1);
}
const hits = (await res.json()).hits.filter((h) => !used.has(String(h.id)));
if (!hits.length) {
  console.error('No unused results. Try other search words.');
  process.exit(1);
}

if (flag('--list')) {
  hits.slice(0, 10).forEach((h, i) => console.log(`${i + 1}. id ${h.id}  ${h.imageWidth}x${h.imageHeight}  ${h.tags}  ${h.pageURL}`));
  process.exit(0);
}

const hit = hits[pick - 1];
if (!hit) {
  console.error(`No result number ${pick}.`);
  process.exit(1);
}
const img = await fetch(hit.largeImageURL);
if (!img.ok) {
  console.error(`Download failed: ${img.status}`);
  process.exit(1);
}
const buf = await sharp(Buffer.from(await img.arrayBuffer()))
  .resize(1600, 1000, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 80, mozjpeg: true })
  .toBuffer();

// Byte-level duplicate check against every image already on the site.
const md5 = (b) => createHash('md5').update(b).digest('hex');
const mine = md5(buf);
const walk = (d) =>
  readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]));
if (walk('public/images').some((f) => /\.(jpe?g|png|webp)$/i.test(f) && md5(readFileSync(f)) === mine)) {
  console.error('This exact image is already on the site. Use --pick with another number.');
  process.exit(1);
}

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, buf);
mkdirSync(usedDir, { recursive: true });
writeFileSync(join(usedDir, String(hit.id)), '');
console.log(`${out}  1600x1000  ${(buf.length / 1024).toFixed(0)} KB  (pixabay id ${hit.id}: ${hit.tags})`);
