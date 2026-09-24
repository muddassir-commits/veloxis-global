// Validates every blog post in content/blog/ without building the site.
// Usage: npm run blog:check
// Exit code 1 if any post has problems (those posts would be skipped on the live site).
import { loadPosts } from '../../lib/blog.ts';

const { posts, skipped, drafts } = loadPosts();

console.log(`\nPublished posts (${posts.length}), newest first:`);
for (const p of posts) console.log(`  ✓ ${p.displayDate.padEnd(20)} ${p.slug}`);
if (drafts.length) {
  console.log(`\nDrafts (not published):`);
  for (const d of drafts) {
    console.log(`  • ${d.slug}${d.problems.length ? ' — still to do:' : ' — ready: remove "draft": true to publish'}`);
    for (const p of d.problems) console.log(`      - ${p}`);
  }
}
if (skipped.length) {
  console.log(`\nPROBLEMS — these posts will NOT appear on the site until fixed:`);
  for (const s of skipped) console.log(`  ✗ ${s.slug}\n      - ${s.problems.join('\n      - ')}`);
  process.exit(1);
}
console.log('\nAll posts are valid.');
