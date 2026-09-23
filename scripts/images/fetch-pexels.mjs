// Download a Pexels photo, cropped server-side to an exact size.
// Usage: node scripts/images/fetch-pexels.mjs <pexelsId> <outPath> <width> <height>
// Example: node scripts/images/fetch-pexels.mjs 7578939 public/images/people/home/agent.jpg 1600 1200
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const [id, out, w = '1600', h = '1200'] = process.argv.slice(2);
if (!id || !out) {
  console.error('Usage: node scripts/images/fetch-pexels.mjs <pexelsId> <outPath> <width> <height>');
  process.exit(1);
}

const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
const res = await fetch(url);
if (!res.ok) {
  console.error(`Failed ${res.status} for Pexels id ${id}`);
  process.exit(1);
}
const buf = Buffer.from(await res.arrayBuffer());
await mkdir(dirname(out), { recursive: true });
await writeFile(out, buf);
console.log(`${out}  ${w}x${h}  ${(buf.length / 1024).toFixed(0)} KB  (pexels.com/photo/${id})`);
