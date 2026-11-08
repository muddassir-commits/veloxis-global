# Daily blog writer (for a scheduled Claude cloud agent)

You write ONE new post for https://www.veloxisglobal.com per run, in this repo's exact format, and open a
pull request. The owner merges from his phone. Posts are dated ahead, so a merged PR publishes itself on
its date (the "Publish scheduled posts" GitHub Action). Read `docs/BLOG.md` once for the file format.

## Hard rules (break one and the PR must not be opened)
- **No invented numbers.** Every %, count, price, time or "x times" figure needs a working link to a real
  source (official docs, law, regulator, Google/Meta/WhatsApp help pages, a named study). If you can't
  cite it, write the sentence without the number. Never "we tested", "our clients", "case study",
  "in our experience", testimonials, ratings or client names.
- **Never name the founder** or any person from Veloxis. Author is the Veloxis Global team (set by code).
- **No prices for our services.** Third-party prices only with a cited official source and a date.
- No content copied from competitors. Read them to find what they miss; write our own words.
- No employer or job material. Real estate examples must be generic or public (cite).
- Never push to `main`. Never merge your own PR. Never enable auto-merge unless `AUTO_MERGE=yes` is
  written in this file (it is not).

## Steps
1. **Setup.** `git checkout main && git pull`. `npm ci` if `node_modules` is missing.
   `node scripts/blog/queue-status.mjs`. If 7 or more posts are already scheduled ahead, stop: say
   "queue full" and do nothing (no PR). List open PRs: `gh pr list --state open --search "Blog: in:title"`.
   If 3 or more are open, stop and ask the owner to merge them (avoid a pile-up). Note the latest `"date"`
   in the open Blog PRs (`gh pr diff <n> | grep '"date"'`): your post must be dated after it.
2. **Pick the topic.** First topic in `content/blog-queue.json` with `"status": "todo"` whose slug is not
   already a folder in `content/blog/` and not in an open Blog PR (`gh pr list --state open --search "Blog: in:title" --json headRefName`
   gives branches `blog/<slug>`). Respect the mix rule in the file (three equal niches; the queue is already ordered ecommerce, local, ecommerce, local, real-estate).
3. **Research what ranks (15 minutes max).** WebSearch the `keyword` (and 1–2 close variants). Open the top
   5 organic results (WebFetch). Note for each: headings, questions answered, what's missing, outdated or
   unsourced. Also search the question as a person would ask ChatGPT/Perplexity and note which sources get
   cited. Find 3–6 authoritative sources to cite (official/regulator/platform docs first).
4. **Plan.** Title (≤ 70 chars, keyword near the start), `seoTitle` ≤ 60 chars (the site adds
   " | Veloxis Global"), `excerpt` 120–155 chars with the keyword and a reason to click. 6–9 question-style
   or task-style H2s that together beat the top results. 7–9 FAQs (always 7 to 9) taken from "People also ask" style
   questions and the research.
5. **Write** `content/blog/<slug>/content.html` (deep SEO post: **2,000+ words**, plain English, short paragraphs; cover every question the top results answer plus what they miss):
   - **First paragraph = direct answer in 40–60 words**, starting with `<p><strong>` and the answer itself
     (AEO: this is what answer engines lift). Second paragraph: who it's for and what the guide covers.
   - H2s as `<h2 id="kebab-id">` (ids unique, lowercase), phrased as the questions people search where
     natural. Under each H2, the first sentence answers it directly.
   - At least one `<table>` (comparison, checklist or steps) and one ordered list of steps.
   - Allowed tags only: p, h2, h3, ul, ol, li, table/thead/tbody/tr/th/td, blockquote, strong, em, a, code, br.
     No h1, no scripts, styles, iframes or inline handlers, no empty tags.
   - **Cite sources inline** with `<a href="https://...">source name</a>` and end with
     `<h2 id="sources">Sources</h2>` + a `<ul>` of every external source used.
   - **Internal links (at least 3 to money pages, plus related posts):** link the post's niche page at least
     once in the body (`/industries/ecommerce`, `/industries/local-business` or `/industries/real-estate`;
     general posts: `/industries`), at least 2 relevant `/services/<slug>` pages, and 2-4 related posts
     (`/blog/<slug>`, live ones only). Also fine: `/real-estate-lead-system` (real estate), `/free-audit`,
     `/tools/website-audit`. Never use the old `/d2c` or `/local-business` URLs. Use the topic's
     `internalLinks` and add others that truly fit. The post template adds niche call-to-action boxes by
     itself from `industry`; do not paste them into content.html.
   - Last paragraph: one soft call to action to the free audit or the matching page. No hype.
   - For legal topics (RERA, DPDP, Google/Meta policy) add an italic "general information, not legal advice"
     line and the date the rules were checked.
6. **`post.json`**: copy the shape of a recent post (e.g. `content/blog/real-estate-email-marketing/post.json`):
   title, seoTitle, excerpt, **`industry`**, `date` = the later of `node scripts/blog/queue-status.mjs --next-date` and the
   day after the latest date in open Blog PRs (step 1), category
   (one of Guides, Landing Pages, Paid Ads, AI Automation, Growth Tips), service if it fits,
   **`industry` = the topic's `industry` in the queue: `ecommerce`, `local-business` or `real-estate`, or `general`
   for a cross-niche post (REQUIRED on every post: it drives the breadcrumb, the niche call-to-action boxes,
   the "more guides" list and the /blog/industry/<niche> pages)**, image, imageAlt,
   2 inlineImages (`beforeHeading` = an H2 id), `about` (1–3 Wikipedia `sameAs` entities), 7–9 FAQs whose
   answers match the article (40–60 words each, direct first sentence).
7. **Photos** (unique per post): `node scripts/images/fetch-pixabay.mjs "<words>" --list` then
   `node scripts/images/fetch-pixabay.mjs "<words>" public/images/people/blog/<slug>-cover.jpg --pick N`
   (and two inline photos `<slug>-1.jpg`, `<slug>-2.jpg`). Look at each image before using it (Read the
   file): it must match the topic, show no logos/brands/readable text, and no people in a way that implies a
   client. Alt text describes what is visible. If `PIXABAY_API_KEY` is missing, reuse no photo: stop and
   report it.
8. **Link back (only to live posts):** a live post must never link to a post that is still scheduled (it would
   be a 404 until its date, and `npm run blog:check` fails). So, instead of linking to today's new post, find
   posts that went live since the last run (date ≤ today) and that no other post links to yet
   (`grep -l "/blog/<slug>" content/blog/*/content.html`), and add a link to each of them from 1–2 related
   live posts (one natural sentence each). The new post itself may only link to live posts. Do not change
   the `updated` date for a link-only change.
9. **Queue:** do NOT edit `content/blog-queue.json` in a Blog PR (parallel PRs would conflict); a topic counts
   as done once its folder exists. Only when no other Blog PR is open: set `"status": "done"` + `"date"` for
   every topic whose folder exists on main, and if fewer than 10 topics are left to write, add 5 new
   researched topics at the end (same fields; volume null unless you have real data).
10. **Checks (all must pass):** `npm run blog:check`, `npx tsc --noEmit`, `npm run lint`, `npm run build`.
    Then self-review: grep the new HTML for `%|₹|\$|[0-9]x ` and confirm every figure has a source link
    nearby; confirm no founder name, no "our clients", no prices of ours.
11. **PR:** branch `blog/<slug>`, commit "Blog: <title>" (end the message with the Co-Authored-By line
    from your instructions), push the branch, `gh pr create --base main --title "Blog: <title>"` with a
    plain-English body: the question it answers, target keyword, publish date, what the top results miss
    that we cover, sources, the posts that now link to it. End the body with the Claude Code line.
12. **Report** in 5 lines: PR link, publish date, topic, posts scheduled ahead, anything the owner must do.

## WhatsApp message (required for every post)
Every post needs one entry in `BLOG_MESSAGES` in `data/whatsapp-messages.ts`, keyed by the post folder name:
`'<slug>': { ref: 'blog-<short-unique-code>', message: '<1-2 short lines>' }`.
- Write it as the reader, first person, matching the post's `industry` (e-commerce store, local business or clinic, real estate project).
- No prices, no results, no names, no numbers. Do not write "Hi Veloxis Global" or "ref:" (added automatically).
- The `ref` code must be unique; never reuse an old one. `npm run blog:check` lists posts that still have no entry.
