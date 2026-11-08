// Shows the publishing queue: posts scheduled after today (IST), the next free date, and the
// topic backlog left in content/blog-queue.json.
// Usage: node scripts/blog/queue-status.mjs           (human-readable)
//        node scripts/blog/queue-status.mjs --count   (just the number of posts scheduled ahead)
//        node scripts/blog/queue-status.mjs --next-date (the first day after the last post, YYYY-MM-DD)
import { readdirSync, readFileSync, existsSync } from 'node:fs';

const dir = 'content/blog';
// Publishing day flips at 07:00 IST (UTC+5:30 minus 7 h = UTC-1:30), same as lib/blog.ts.
const today = new Date(Date.now() - 1.5 * 3600 * 1000).toISOString().slice(0, 10);

const posts = readdirSync(dir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
  .flatMap((d) => {
    try {
      const m = JSON.parse(readFileSync(`${dir}/${d.name}/post.json`, 'utf8'));
      return m.draft ? [] : [{ slug: d.name, date: m.date }];
    } catch {
      return [];
    }
  })
  .sort((a, b) => a.date.localeCompare(b.date));

const ahead = posts.filter((p) => p.date > today);
const last = posts.at(-1)?.date ?? today;
const base = last > today ? last : today;
const next = new Date(`${base}T00:00:00Z`);
next.setUTCDate(next.getUTCDate() + 1);
const nextDate = next.toISOString().slice(0, 10);

const arg = process.argv[2];
if (arg === '--count') {
  console.log(ahead.length);
} else if (arg === '--next-date') {
  console.log(nextDate);
} else {
  console.log(`Today (IST): ${today}`);
  console.log(`Last published: ${posts.filter((p) => p.date <= today).at(-1)?.slug ?? '-'}`);
  console.log(`Scheduled ahead (${ahead.length}): ${ahead.map((p) => `${p.date} ${p.slug}`).join(', ') || 'none'}`);
  console.log(`Next free date: ${nextDate}`);
  const qf = 'content/blog-queue.json';
  if (existsSync(qf)) {
    const q = JSON.parse(readFileSync(qf, 'utf8'));
    const todo = q.topics.filter((t) => t.status === 'todo');
    console.log(`Backlog topics to write: ${todo.length} (next: ${todo[0]?.slug ?? '-'})`);
  }
}
