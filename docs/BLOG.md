# Blog posts

Every post is a folder in `content/blog/<slug>/` (the slug is the URL: `/blog/<slug>`):

| File | What it holds |
|---|---|
| `post.json` | title, SEO title, excerpt, **date** (`YYYY-MM-DD`), optional `updated`, category, related service, cover image, inline images, 7–9 FAQs |
| `content.html` | the article body; every `<h2 id="...">` becomes a table-of-contents entry |

Categories: `Guides`, `Landing Pages`, `Paid Ads`, `AI Automation`, `Growth Tips`.
Services: `high-converting-landing-pages`, `paid-ads`, `ai-automation`.
Posts are listed newest first by `date`. The owner chooses the date of every new post.

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
4. `npm run blog:check` — fix anything listed, then remove `"draft": true`.
5. `npm run build`, open the post locally, then PR → Vercel preview → merge.

Nothing else needs editing: the blog page, homepage preview, related posts, sitemap, `llms.txt`
and Article/FAQ schema all read from `content/blog` automatically.
