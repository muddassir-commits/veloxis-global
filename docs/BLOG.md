# Blog posts

Every post is a folder in `content/blog/<slug>/` (the slug is the URL: `/blog/<slug>`):

| File | What it holds |
|---|---|
| `post.json` | title, SEO title, excerpt, **date** (`YYYY-MM-DD`), optional `updated`, category, `industry` (ecommerce, local-business, real-estate or general; missing = general), related service, cover image, inline images, 7–9 FAQs |
| `content.html` | the article body; every `<h2 id="...">` becomes a table-of-contents entry |

Categories: `Guides`, `Landing Pages`, `Paid Ads`, `AI Automation`, `Growth Tips`.
Services: `high-converting-landing-pages`, `paid-ads`, `seo`, `ai-automation`.
Posts are listed newest first by `date`. Hand-written posts: the owner chooses the date; the writer agent takes
the next free date (`node scripts/blog/queue-status.mjs --next-date`).

**Industry tag (since 8 Nov 2026, required).** Veloxis Global serves three equal niches, so every post says which
one it is for: `"industry": "ecommerce" | "local-business" | "real-estate" | "general"`. The post template uses
it for the breadcrumb, the niche call-to-action boxes (`components/blog/NicheCta.tsx`, plain links to
`/industries/<niche>`), the sticky bar, the "more guides" list and the `/blog/industry/<niche>` pages; GA4 click
events carry it as `industry`. Labels and CTA text live in `data/blog-niches.ts`. In the body, link the niche page
at least once (`/industries` for general posts) and never use the old `/d2c` or `/local-business` URLs.

## Why a bad post cannot break the site

`lib/blog.ts` loads each folder on its own and validates it. A post with invalid JSON, missing
fields, a missing image, an `<h2>` without id, scripts in the HTML, or fewer than 7 FAQs is
**skipped** (with a warning in the build log). The build still succeeds and every other page and
post stays online. Unknown slugs return 404 (`dynamicParams = false`), and `app/blog/error.tsx`
and `app/blog/[slug]/error.tsx` contain any runtime error inside the blog section.

- `"draft": true` → never published (use while writing).
- Folders starting with `_` (like `_template`) are ignored.

## Adding a post

1. **From Word:** save as `.docx` (Google Docs: File → Download → .docx), then
   `npm run blog:from-docx -- "C:\path\article.docx" my-post-slug 2026-10-01`
   Word "Title" becomes the post title; Heading 1/2 become `<h2 id>`, Heading 3 becomes `<h3>`;
   pictures are saved to `public/images/blog/<slug>/`. A **draft** is created.
   **Without Word:** copy `content/blog/_template/` to `content/blog/<slug>/` and fill it in.
2. Add a 1600×1000 cover photo (and optional inline photos) under `public/images/people/blog/`.
3. Complete `post.json` (SEO title under 60 characters, excerpt, category, 7–9 FAQs from the article).
   Add the post's WhatsApp message to `BLOG_MESSAGES` in `data/whatsapp-messages.ts` (one line in the
   visitor's voice about the topic, plus a short unique `ref` like `blog-eoi`). `blog:check` lists posts
   without one; until then the WhatsApp buttons use a message built from the post title.
4. `npm run blog:check` — fix anything listed, then remove `"draft": true`.
5. `npm run build`, open the post locally, then PR → Vercel preview → merge.

Nothing else needs editing: the blog page, homepage preview, related posts, sitemap, `llms.txt`
and Article/FAQ schema all read from `content/blog` automatically.

## Automatic writing and publishing (since 5 Nov 2026; 7 AM + auto-merge since 8 Nov)

- **Publishing** runs in GitHub's cloud: `.github/workflows/daily-rebuild.yml` ("Publish scheduled posts", **07:01 IST**, backup 08:30 IST) runs `scripts/blog/publish-due.mjs`, adds posts dated today to `content/blog/published.txt` and commits, so Vercel deploys them at about 7:00 AM IST. It opens a GitHub issue "Blog queue running low" when fewer than 3 posts are scheduled ahead. Optional secret `VERCEL_DEPLOY_HOOK_URL` also triggers a deploy.
- **Writing:** a scheduled Claude cloud agent follows `scripts/blog/WRITER.md`: next topic from `content/blog-queue.json` (three niches, roughly 40% e-commerce, 35% local, 25% real estate), research of what ranks, one post, checks, a "Blog: <title>" PR from a `blog/<slug>` branch. Posts are dated ahead, so merged PRs publish one per day.
- **Auto-merge:** `.github/workflows/auto-merge-blog.yml` merges a Blog PR by itself (squash) when its title starts with "Blog:", its branch with `blog/`, it only touches blog files (`content/blog/`, the queue, blog images, `scripts/images/pixabay-used/`, `data/whatsapp-messages.ts`) and `blog:check`, `tsc` and `lint` pass. It runs on every PR update and in a 05:30 IST sweep. Anything else stays open with a comment for the owner. A merged post still waits for its date.
- **Refreshing:** a weekly agent follows `scripts/blog/REFRESH.md` using `node scripts/seo/gsc-refresh.mjs` (Search Console: high impressions, low CTR, position 8–20).
- Helpers: `node scripts/blog/queue-status.mjs` (what's scheduled, next free date), `node scripts/images/fetch-pixabay.mjs` (unique photos), and `npm run blog:check` now fails if a live post links to a post that isn't live yet.
