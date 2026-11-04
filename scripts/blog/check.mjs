// Validates every blog post in content/blog/ without building the site.
// Usage: npm run blog:check
// Exit code 1 if any post has problems (those posts would be skipped on the live site).
import { loadPosts } from '../../lib/blog.ts';

const { posts, skipped, drafts, scheduled } = loadPosts();

console.log(`\nPublished posts (${posts.length}), newest first:`);
for (const p of posts) console.log(`  ✓ ${p.displayDate.padEnd(20)} ${p.slug}`);
if (scheduled.length) console.log(`
Scheduled (hidden until their date, IST): ${scheduled.join(', ')}`);
if (drafts.length) {
  console.log(`\nDrafts (not published):`);
  for (const d of drafts) {
    console.log(`  • ${d.slug}${d.problems.length ? ' — still to do:' : ' — ready: remove "draft": true to publish'}`);
    for (const p of d.problems) console.log(`      - ${p}`);
  }
}
// Links between posts: a live post must not link to a post that is scheduled, a draft or missing
// (that page is a 404 until its date). Add such links once the target post is live.
const live = new Set(posts.map((p) => p.slug));
const badLinks = [];
for (const p of posts) {
  for (const m of p.htmlContent.matchAll(/href="\/blog\/([a-z0-9-]+)\/?(?:#[^"]*)?"/g)) {
    if (!live.has(m[1])) badLinks.push(`${p.slug} links to /blog/${m[1]}, which is not live`);
  }
}
if (badLinks.length) {
  console.log(`\nBROKEN LINKS — live posts linking to posts that are not live yet:`);
  for (const b of badLinks) console.log(`  ✗ ${b}`);
  process.exit(1);
}
if (skipped.length) {
  console.log(`\nPROBLEMS — these posts will NOT appear on the site until fixed:`);
  for (const s of skipped) console.log(`  ✗ ${s.slug}\n      - ${s.problems.join('\n      - ')}`);
  process.exit(1);
}
console.log('\nAll posts are valid.');
