# SEO guide — veloxisglobal.com

How SEO is set up on this site, which page targets which search, and the rules that keep it working.

**Since 10 Nov 2026 Veloxis Global is e-commerce and D2C first.** Before that (8 Nov 2026, PR #67) it was a multi-niche performance marketing agency with three equal
niches: e-commerce & D2C, local businesses & clinics, real estate. The homepage, services, city pages and
`/industries` are generic; the real estate keywords below now belong to the real estate pages and posts only.
Rows marked "volume not checked" have no researched search volume yet: research them before quoting numbers.
Search volumes are Google Ads data for India via DataForSEO (September 2026).

## Keyword map

One primary search intent per page. Don't target a page's primary keyword on any other page.
Volumes refreshed 2026-09-26 (research in `research/kw-free-2026-09/KEYWORD-MAP.md`; repeat it with the `keyword-research` skill).

| Page | Primary keyword (monthly searches) | Secondary keywords | Intent |
|---|---|---|---|
| `/` | performance marketing agency in india (volume not checked) | digital marketing agency, performance marketing agency | Commercial — choosing an agency |
| `/services` | digital marketing services (volume not checked) | ads, SEO and website services | Commercial — comparing services |
| `/services/high-converting-landing-pages` | website and landing page design (volume not checked) | shopify store design, landing page design, real estate landing page (390) | Commercial |
| `/services/paid-ads` | meta and google ads management (volume not checked) | facebook/instagram ads agency, google ads agency, real estate lead generation (1,300) | Commercial |
| `/services/seo` | seo services (volume not checked) | local seo services, google business profile optimisation | Commercial |
| `/services/ai-automation` | whatsapp automation (volume not checked) | ai chatbot for business, real estate chatbot (480, rising), whatsapp marketing for real estate (40) | Commercial |
| `/industries` | marketing for e-commerce, local businesses and real estate | industries we serve | Commercial — hub |
| `/industries/ecommerce` | ecommerce marketing agency (volume not checked) | d2c marketing agency, shopify marketing (old `/d2c` 301s here) | Commercial — online stores |
| `/industries/local-business` | digital marketing for local businesses (volume not checked) | marketing for clinics, dentists and salons, local seo (old `/local-business` 301s here) | Commercial — local businesses |
| `/industries/real-estate` | real estate marketing agency (880) | real estate digital marketing agency (720), marketing for real estate developers, builder marketing | Commercial — real estate |
| `/real-estate-lead-system` | real estate lead generation system | real estate lead generation services (90) | Commercial — real estate offer |
| `/tools/website-audit` | free website audit (volume not checked) | website seo checker, website speed and mobile check | Tool |
| `/channel-partners` | channel partner marketing | digital marketing for real estate agents (260), marketing for brokers | Commercial — CPs and brokers |
| `/playbooks` | real estate marketing strategies (320) | real estate marketing ideas (140), real estate marketing plan | Informational → commercial |
| `/free-audit` | free marketing audit | free website audit, lead flow audit | Commercial — conversion |
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
| `/blog/rera-number-check` | rera number check (3,600) | rera number (2,900), check rera number (720), rera number format (170), is rera mandatory (70) | Informational |
| `/blog/real-estate-brochure` | real estate brochure (1,000) | real estate brochure design, what to include in a real estate brochure | Informational |
| `/blog/real-estate-social-media-marketing` | real estate social media (260) | real estate social media post (390), real estate on social media (260), real estate facebook page (40), real estate post ideas (50) | Informational |
| `/blog/rera-registration-for-agents` | rera registration for agents (480) | how to become real estate agent in india (320), rera agent registration fee (210), online rera registration for agents (140), how to become rera registered agent (50) | Informational |
| `/blog/real-estate-hoarding-design` | real estate hoarding (390) | real estate hoarding design (320), hoarding ideas (40), hoarding ads (30), wall branding (30) | Informational |
| `/blog/real-estate-seo-india` | real estate seo (480) | real estate seo agency (90), seo india (50), real estate agent seo (50) | Informational |
| `/blog/real-estate-slogans-taglines` | real estate slogans (390) | real estate taglines (210), company slogans (90), slogan ideas (70), catchy slogans (70), agent tagline (70) | Informational |
| `/digital-marketing-agency-lucknow` | digital marketing agency in lucknow | performance marketing agency lucknow, seo company lucknow | Commercial (local) |
| `/digital-marketing-agency-kanpur` | digital marketing agency in kanpur | performance marketing agency kanpur, seo company kanpur | Commercial (local) |
| `/digital-marketing-agency-noida` | digital marketing agency in noida | performance marketing agency noida, greater noida | Commercial (local) |

The blog rows above are the October real estate posts. Since 8 Nov new topics come from `content/blog-queue.json` across the three niches (each post has an `industry` tag); its `keyword` field is the post's primary keyword. Before writing, check that no live page already targets it. The October 60-day plan stays in `docs/CONTENT-PLAN.md` for history. Volumes are from DataForSEO, India, 2026-10-01.

Service or niche page vs guide on the same topic: the service/niche page targets the commercial phrase ("ecommerce marketing agency", "local seo services", "real estate lead generation"); the guide targets the how-to / what-is phrase. Always link guide → its niche page (`/industries/<niche>`) and the matching service page.

Copy rules from the research:
- Write "Meta (Facebook and Instagram) ads", not only "Facebook ads" — in India "meta ads" is now searched more than "facebook ads" (Google Trends, 2026).
- Lead with the outcome each niche cares about: orders and cost per order (e-commerce), calls and bookings (local), lead **quality**, site visits and follow-up speed (real estate).

Deliberately **not** targeted:
- **real estate crm (2,400)** — Google shows CRM software vendors and "top 10 CRM" lists.
- **builder website (60,500)** — means website-builder tools, not property builders.
- **channel partner meaning (1,300)** — generic business definition.
- **how to sell property / flat fast (210–260)** — homeowners, not our clients.
- **real estate + city** (e.g. "real estate marketing agency lucknow") — 0–40 searches a month, so the city pages target "digital marketing agency in lucknow/kanpur" (GSC, Sept–Oct 2026: 486 and 260 impressions on the old city URLs) and, since 8 Nov 2026, are generic for all three niches (template + `data/cities.ts`). Pages restored on the old URLs on 7 Oct 2026.

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
| Niches (hub cards, homepage strip) | `data/industries.ts`; pages in `app/industries/<niche>/page.tsx` (`components/industries/NichePage.tsx`) |
| Blog niche labels, tabs and CTA text | `data/blog-niches.ts` |
| City pages | `data/cities.ts` |
| Real estate developer and channel partner pages | `data/audiences.ts` |
| Playbooks (example plans) | `data/playbooks.ts` |
| Blog posts | `content/blog/<slug>/` (`post.json` + `content.html`), loaded by `lib/blog.ts` |
| Sitemap / robots / llms.txt | `app/sitemap.ts`, `app/robots.ts`, `lib/llms.ts` (generated from the data files) |
| Redirects | `next.config.mjs` → `redirects()` |

## Rules

1. **Titles** under ~60 characters and **descriptions** 140–160 characters. `constructMetadata()` renders the title exactly as written.
2. **Canonical host is `https://www.veloxisglobal.com`.** The apex domain 308-redirects to www in Vercel. Never hardcode the apex domain.
3. **No invented proof.** No testimonials, ratings, client names, case studies or statistics unless they are real and verifiable. Playbooks must stay labelled as examples.
4. **No address.** Veloxis Global is a service-area business; don't publish a street address in copy or schema.
5. **No self-rated reviews** in structured data (`aggregateRating`, `Review`).
6. **Removing a URL?** Add a single-hop 301/308 in `next.config.mjs` to the closest live page, and update internal links.
7. **New blog post?** Add a folder in `content/blog/<slug>/` (see `docs/BLOG.md`) with `seoTitle`, an `excerpt`, `date`, `industry`, `service` and a descriptive `imageAlt`. It appears in the sitemap, blog index, related posts and llms.txt automatically. Link to at least one service page from the article body.
8. When static page content changes, bump `CONTENT_REVIEWED` in `lib/seo-config.ts` (it sets `SITE_CONTENT_UPDATED` in `app/sitemap.ts`).
9. **Every page shows 7–9 FAQs with answers visible** (no collapsed panels), using `components/sections/FaqAccordion.tsx`. FAQ text lives in the page’s data file, or in `data/page-faqs.ts`, `data/blog-faqs.ts` and `data/playbook-faqs.ts`. Answers may only state facts the page already supports. `scripts/seo/crawl.js` fails any page with fewer than 7.

## Checks

Run against a local server (`npm run dev` or `npm run build && npx next start`):

```bash
node scripts/seo/crawl.js http://localhost:3000            # titles, descriptions, canonicals, H1s, JSON-LD, broken/orphan links
node scripts/seo/check-redirects.js http://localhost:3000  # every redirect is one hop to a 200 page
```
