@AGENTS.md

# veloxisglobal.com: guide for anyone editing this repo

Veloxis Global is a **multi-niche performance marketing agency** (Noida, India; service-area business). Three
equal niches: **E-commerce & D2C**, **Local businesses & clinics**, **Real estate**. Services: Meta & Google ads,
websites/landing pages (incl. Shopify), SEO + local SEO/Google Business Profile, WhatsApp & AI automation.
Month-to-month, free audit first, the client owns the ad accounts. Rebrand live since 8 Nov 2026 (PR #67).

Start with `README.md`: commands, route map, blog pipeline (industry tag, 7 AM publishing, auto-merge of Blog
PRs), analytics events, cookie default (PR #70), Meta Conversions API (PR #68) and how to add a service or niche
page. Then `docs/SEO.md` (keyword map and SEO rules) and `docs/BLOG.md` (post format). Blog agents:
`scripts/blog/WRITER.md` and `scripts/blog/REFRESH.md`.

## Before every PR
`npm run build`, `npx tsc --noEmit`, `npm run lint`, `npm run blog:check`; for SEO changes also
`node scripts/seo/crawl.js <base>` and `node scripts/seo/qa.js`. Work on a branch; the owner merges (only
`Blog:` PRs from `blog/` branches auto-merge). Do not edit the Next.js block in `AGENTS.md` by hand.

## Hard rules
- No invented numbers, results, clients, logos, testimonials, ratings, reviews, offices or certifications.
  Never "Google Partner". Example figures must be labelled as examples; every statistic needs a cited source.
- Never name the founder or any person; no founder photo, Person schema or portfolio link. Author = "the
  Veloxis Global team".
- No prices, no street address, no working hours, no self-rated review schema.
- NAP: Veloxis Global · +91 91940 20727 (WhatsApp messages only, no calls) · info@veloxisglobal.com ·
  https://www.veloxisglobal.com. Never +91 88876 20727.
- Header stays: Services, Industries, Blog, About, Free Audit.
- Public repo: no client or lead data, no employer material, no secrets (env vars live in Vercel).
