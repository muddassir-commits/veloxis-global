# veloxisglobal.com

Website of **Veloxis Global**, a performance marketing agency based in Noida, India (service-area business,
no street address). E-commerce & D2C leads since 10 Nov 2026; also: **E-commerce & D2C brands**, **Local businesses & clinics** and
**Real estate**. Services: Meta & Google ads, websites and landing pages (incl. Shopify), SEO, local SEO and
Google Business Profile, and WhatsApp & AI automation. Month-to-month work, a free audit as the main call to
action, and the client owns every ad account. Rebranded from real-estate-only on 8 Nov 2026 (PR #67).

Next.js 16 (App Router) on Vercel. **This Next.js version differs from older ones: read `AGENTS.md` and the
guides in `node_modules/next/dist/docs/` before changing code.** Pushes to `main` deploy to production.

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Local server (use a free port if 3000 is taken: `npx next dev -p 3001`) |
| `npm run build` | Production build (must pass before every PR) |
| `npx tsc --noEmit` | Type check |
| `npm run lint` | ESLint |
| `npm run blog:check` | Validates every post (fields, FAQs, links to unpublished posts, WhatsApp message) |
| `node scripts/seo/crawl.js <base>` | Titles, descriptions, canonicals, one H1, JSON-LD, 7+ FAQs, broken/orphan links |
| `node scripts/seo/qa.js` / `check-redirects.js <base>` | SEO QA and one-hop redirect check |
| `node scripts/blog/queue-status.mjs` | Posts scheduled ahead and the next free date |

## Route map

| Route | Page |
|---|---|
| `/` | Homepage: generic performance marketing agency, three niche cards, free audit |
| `/services` | Services hub |
| `/services/paid-ads` · `/services/high-converting-landing-pages` · `/services/seo` · `/services/ai-automation` | Service pages, all multi-niche (data: `data/services-data.ts`) |
| `/industries` | Industries hub (three niches, equal weight) |
| `/industries/ecommerce` | E-commerce & D2C (`/d2c` 301s here) |
| `/industries/local-business` | Local businesses & clinics (`/local-business` 301s here) |
| `/industries/real-estate` | Real estate hub (builders, brokers, channel partners) |
| `/industries/real-estate/nri-buyers` · `/channel-partners` · `/real-estate-lead-system` · `/playbooks`, `/playbooks/[slug]` | Real estate pages (kept, not in the header) |
| `/digital-marketing-agency-noida` · `-lucknow` · `-kanpur` | City pages, generic (template + `data/cities.ts`) |
| `/blog` · `/blog/[slug]` · `/blog/industry/[niche]` | Blog, single posts, per-niche lists (`ecommerce`, `local-business`, `real-estate`, `general`) |
| `/guides` | Guides hub |
| `/tools/website-audit` | Free website audit tool |
| `/free-audit` · `/contact` · `/about` | Conversion and company pages |
| `/privacy-policy` · `/terms` | Legal |
| `/api/contact` · `/api/newsletter` · `/api/audit` · `/api/meta-capi` · `/api/health` | Server routes |

Header stays simple (owner, 8 Nov 2026): **Services, Industries, Blog, About, Free Audit**. Menus come from
`data/navbar-data.ts`. Old URLs redirect in `next.config.mjs` → `redirects()`.

## Blog: industry tag, 7 AM publishing, auto-merge

- Every post lives in `content/blog/<slug>/` (`post.json` + `content.html`). `post.json` must have
  **`industry`**: `ecommerce`, `local-business`, `real-estate` or `general`. It drives the breadcrumb, the niche
  call-to-action boxes (`components/blog/NicheCta.tsx`, links to the niche page, not redirects), the sticky
  bar, "more guides" and `/blog/industry/<niche>`. Niche labels and tabs: `data/blog-niches.ts`.
- Every post also needs a WhatsApp message in `BLOG_MESSAGES` (`data/whatsapp-messages.ts`).
- **Writing:** a scheduled Claude agent follows `scripts/blog/WRITER.md` (topics from `content/blog-queue.json`,
  mixed across the three niches, roughly 40% e-commerce, 35% local, 25% real estate) and opens a `Blog: <title>` PR from a `blog/<slug>` branch.
- **Auto-merge:** `.github/workflows/auto-merge-blog.yml` merges a Blog PR by itself when it only touches blog
  files and `blog:check`, `tsc` and `lint` pass (on every PR update and a 05:30 IST sweep). Any other PR waits
  for the owner.
- **Publishing:** posts are dated ahead. `.github/workflows/daily-rebuild.yml` runs at **07:01 IST** (backup
  08:30 IST), adds posts dated today to `content/blog/published.txt` and commits, so Vercel deploys them at about
  7 AM. It opens an issue when fewer than 3 posts are scheduled ahead.
- **IndexNow:** `.github/workflows/indexnow.yml` pings search engines after each production deploy.
- Weekly refresh of posts with low click rate: `scripts/blog/REFRESH.md`. Full post format: `docs/BLOG.md`.

## Analytics and consent

- **GA4** by direct `gtag` (events also pushed to the GTM `dataLayer` for GTM triggers; GTM `GTM-5LS7XH76`).
  IDs in `lib/tag-ids.ts`. Event code: `lib/analytics.ts`; clicks are caught site-wide by
  `components/analytics/AnalyticsTracker.tsx`.
- **Events:** `generate_lead` (contact form success, the lead metric) + `form_submit`, `form_start`,
  `newsletter_signup`, `whatsapp_click`, `phone_click`, `email_click`, `booking_click`, `cta_click`,
  `scroll_depth`, `website_audit_run`. Click events carry `source_page`, and where known `cta`, `cta_location`,
  `page_type`, `wa_ref` and **`industry`** (from `data-industry` on the element, else from the
  `/industries/<niche>` URL). GA4 has an event-scoped custom dimension `industry` and niche audiences.
- **Meta Pixel + Conversions API (PR #68):** `generate_lead` → Lead, the contact clicks → Contact,
  `booking_click` → BookingClick, `newsletter_signup` → NewsletterSignup. Browser and server events share one
  `event_id` so Meta drops duplicates. Lead and NewsletterSignup are sent server-side by the form routes; the
  click events are relayed by the browser to `/api/meta-capi`. Server code `lib/metaCapi.ts`; off unless the
  Vercel env vars `META_PIXEL_ID` and `META_CAPI_ACCESS_TOKEN` are set (`META_CAPI_TEST_EVENT_CODE` sends
  everything to Test events only). Never log personal data.
- **Cookie default (PR #70):** outside the EEA/UK/Switzerland analytics and marketing are on by default (no
  banner; "Cookie settings" in the footer turns them off). In the EEA/UK/Switzerland, or when the country is
  unknown, nothing non-essential loads until the visitor accepts. A saved choice always wins. Region comes from
  `proxy.ts` (`lib/region.ts`), logic in `lib/consent.ts`. Own devices: open `/?internal=1` once to stop tracking.

## How to add a service or niche page

**Service:** add an entry to `servicesData` in `data/services-data.ts` (slug, title, `seoTitle` under 60
characters, description, problems, what's included, 7–9 FAQs). `/services/[slug]`, the services hub, sitemap and
`llms.txt` pick it up. Add it to the Services menu in `data/navbar-data.ts` if it belongs in the header, and
add a WhatsApp page message in `data/whatsapp-messages.ts`.

**Niche (max three; adding one is an owner decision):**
1. Add the key to `IndustryKey` and an entry to `industries` in `data/industries.ts` (hub card, homepage strip).
2. Create `app/industries/<key>/page.tsx` using `components/industries/NichePage.tsx` (copy
   `app/industries/ecommerce/page.tsx`) with its own 7–9 FAQs, and a title/description in `pageMeta`
   (`lib/seo-config.ts`).
3. Add the niche to `BLOG_NICHES` / `BLOG_TABS` in `data/blog-niches.ts`, the `industry` values in the blog
   loader and `blog:check`, the regex in `industryFromPath()` (`lib/analytics.ts`), the Industries menu in
   `data/navbar-data.ts`, the sitemap list in `app/sitemap.ts` and a WhatsApp page message.
4. Redirect any old URL for that niche in `next.config.mjs` (single hop, 301).
5. Run build, `tsc`, lint, `blog:check` and `crawl.js`; in GA4 add an audience for the new page.

## Rules (short)

- No invented numbers, results, clients, testimonials, ratings, reviews or certifications. Only true claims.
  Google certifications are personal Skillshop certificates (3): never write "Google Partner" or claim others.
- Never name the founder or any person on this site; the blog author is "the Veloxis Global team".
- No prices, no street address, no self-rated review schema. WhatsApp +91 91940 20727 is messages only.
- No client or lead data, employer material or secrets in this repo: it is public.
- Work on a branch and open a PR; the owner merges (Blog PRs auto-merge as described above).

More: `docs/SEO.md` (keyword map, SEO rules), `docs/BLOG.md` (post format), `docs/CONTENT-PLAN.md` (history).
