# SEO guide — veloxisglobal.com

How SEO is set up on this site, which page targets which search, and the rules that keep it working.
Search volumes are Google Ads data for India via DataForSEO (September 2026).

## Keyword map

One primary search intent per page. Don't target a page's primary keyword on any other page.
Volumes refreshed 2026-09-26 (research in `research/kw-free-2026-09/KEYWORD-MAP.md`; repeat it with the `keyword-research` skill).

| Page | Primary keyword (monthly searches) | Secondary keywords | Intent |
|---|---|---|---|
| `/` | real estate marketing agency (880) | real estate digital marketing agency (720), real estate marketing company (320) | Commercial — choosing an agency |
| `/services` | real estate marketing services | real estate digital marketing services | Commercial — comparing services |
| `/services/high-converting-landing-pages` | real estate landing page (390) | real estate website design (590, SERP is mostly design galleries), project microsite | Commercial |
| `/services/paid-ads` | real estate lead generation (1,300) | facebook ads for real estate (320), google ads for real estate (260), meta ads for real estate (90, ×3 in a year), real estate lead generation agency (110), real estate lead generation services (90) | Commercial |
| `/services/ai-automation` | real estate chatbot (480, rising) | real estate AI chatbot, ai chatbot for real estate (40, ×7), real estate automation (50), whatsapp marketing for real estate (40) | Commercial |
| `/industries/real-estate` | marketing for real estate developers | builder marketing | Commercial — developers |
| `/channel-partners` | channel partner marketing | digital marketing for real estate agents (260), marketing for brokers | Commercial — CPs and brokers |
| `/playbooks` | real estate marketing strategies (320) | real estate marketing ideas (140), real estate marketing plan | Informational → commercial |
| `/free-audit` | free real estate marketing audit | real estate marketing review, lead flow audit | Commercial — conversion |
| `/blog/ai-for-real-estate-india` | ai for real estate (1,000, fastest-rising) | ai in real estate marketing, ai for real estate agents (70), ai in real estate india (40) | Informational |
| `/blog/how-to-generate-real-estate-leads` | how to generate real estate leads (480) | how to get clients in real estate (90 × several variants), real estate leads free (90), junk/fake leads | Informational |
| `/blog/meta-ads-for-real-estate-india` | meta ads for real estate (90) | facebook ads for real estate (as a guide), instagram ads for real estate (40) | Informational |
| `/blog/google-ads-for-real-estate-india` | google ads for real estate agents / in india | google ads strategy for real estate, negative keywords for real estate | Informational |
| `/blog/real-estate-ad-examples` | real estate ads (1,900) | real estate advertising, real estate ad examples, real estate ad ideas (90), real estate ads creative (140) | Informational — the SERP is inspiration/examples, not agencies |
| `/blog/channel-partner-in-real-estate` | channel partner in real estate (880) | how to become a channel partner in real estate (110), cp commission, rera agent registration | Informational |
| `/blog/what-is-eoi-in-real-estate` | what is eoi in real estate (880) | eoi vs token amount, eoi refund | Informational |
| `/blog/google-ads-vs-meta-ads-real-estate-india` | facebook ads vs google ads for real estate | google ads vs meta ads | Informational |
| `/blog/real-estate-landing-page-conversion-hacks` | real estate landing page best practices | landing page for property launch | Informational |
| `/blog/whatsapp-automation-for-real-estate-leads` | whatsapp automation for real estate leads | real estate lead follow up | Informational |
| `/blog/real-estate-local-seo-ncr` | local seo for real estate (70) | google business profile for real estate agents | Informational |

Service page vs guide on the same topic: the service page targets the commercial phrase ("real estate lead generation", "real estate chatbot"); the guide targets the how-to / what-is phrase. Always link guide → service page.

Copy rules from the research:
- Write "Meta (Facebook and Instagram) ads", not only "Facebook ads" — in India "meta ads" is now searched more than "facebook ads" (Google Trends, 2026).
- Lead with lead **quality** (junk leads, site visits, follow-up speed) — that is what builders and brokers complain about.

Deliberately **not** targeted:
- **real estate crm (2,400)** — Google shows CRM software vendors and "top 10 CRM" lists.
- **builder website (60,500)** — means website-builder tools, not property builders.
- **channel partner meaning (1,300)** — generic business definition.
- **how to sell property / flat fast (210–260)** — homeowners, not our clients.
- **real estate + city** (e.g. "real estate marketing agency lucknow") — 0–40 searches a month. Revisit once the Google Business Profile is verified.

## Where things live

| What | File |
|---|---|
| Business facts (email, phone, service area, socials, booking link) | `data/site.ts` |
| Titles and descriptions for static pages | `lib/seo-config.ts` → `pageMeta` |
| Metadata builder (canonical, Open Graph, Twitter, robots) | `lib/seo-config.ts` → `constructMetadata()` |
| Structured data (JSON-LD) | `lib/schema.ts` — site-wide graph emitted once in `app/layout.tsx` |
| Breadcrumb schema | Automatic — rendered by `components/ui/Breadcrumb.tsx` |
| FAQs + FAQ schema | Automatic — rendered by `components/sections/FaqAccordion.tsx` (`withSchema={false}` to turn off) |
| Service pages | `data/services-data.ts` |
| Developer and channel partner pages | `data/audiences.ts` |
| Playbooks (example plans) | `data/playbooks.ts` |
| Blog posts | `data/blog-posts.ts` |
| Sitemap / robots / llms.txt | `app/sitemap.ts`, `app/robots.ts`, `lib/llms.ts` (generated from the data files) |
| Redirects | `next.config.mjs` → `redirects()` |

## Rules

1. **Titles** under ~60 characters and **descriptions** 140–160 characters. `constructMetadata()` renders the title exactly as written.
2. **Canonical host is `https://www.veloxisglobal.com`.** The apex domain 308-redirects to www in Vercel. Never hardcode the apex domain.
3. **No invented proof.** No testimonials, ratings, client names, case studies or statistics unless they are real and verifiable. Playbooks must stay labelled as examples.
4. **No address.** Veloxis Global is a service-area business; don't publish a street address in copy or schema.
5. **No self-rated reviews** in structured data (`aggregateRating`, `Review`).
6. **Removing a URL?** Add a single-hop 301/308 in `next.config.mjs` to the closest live page, and update internal links.
7. **New blog post?** Add it to `data/blog-posts.ts` with `seoTitle`, a 140–160 character `excerpt`, `isoDate`, `modifiedIso`, `service` and a descriptive `imageAlt`. It appears in the sitemap, blog index, related posts and llms.txt automatically. Link to at least one service page from the article body.
8. When static page content changes, bump `SITE_CONTENT_UPDATED` in `app/sitemap.ts`.
9. **Every page shows 7–9 FAQs with answers visible** (no collapsed panels), using `components/sections/FaqAccordion.tsx`. FAQ text lives in the page’s data file, or in `data/page-faqs.ts`, `data/blog-faqs.ts` and `data/playbook-faqs.ts`. Answers may only state facts the page already supports. `scripts/seo/crawl.js` fails any page with fewer than 7.

## Checks

Run against a local server (`npm run dev` or `npm run build && npx next start`):

```bash
node scripts/seo/crawl.js http://localhost:3000            # titles, descriptions, canonicals, H1s, JSON-LD, broken/orphan links
node scripts/seo/check-redirects.js http://localhost:3000  # every redirect is one hop to a 200 page
```
