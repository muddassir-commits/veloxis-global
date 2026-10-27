// Daily: lists posts whose date (IST) has arrived in content/blog/published.txt.
// If the list changes, the GitHub Action commits it to main and Vercel deploys as usual,
// so scheduled posts go live on their date with no extra setup.
// Usage: node scripts/blog/publish-due.mjs   (prints the newly published slugs)
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';

const dir = 'content/blog';
const listFile = `${dir}/published.txt`;
const today = new Date(Date.now() + 5.5 * 3600 * 1000).toISOString().slice(0, 10);

const due = readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .flatMap((d) => {
    try {
      const meta = JSON.parse(readFileSync(`${dir}/${d.name}/post.json`, 'utf8'));
      return !meta.draft && meta.date <= today ? [d.name] : [];
    } catch {
      return [];
    }
  })
  .sort();

const before = existsSync(listFile) ? readFileSync(listFile, 'utf8').split('\n').filter(Boolean) : [];
const added = due.filter((s) => !before.includes(s));
writeFileSync(listFile, due.join('\n') + '\n');
console.log(added.join(' '));
