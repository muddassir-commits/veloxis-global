# SEO guide — veloxisglobal.com

How SEO is set up on this site, which page targets which search, and the rules that keep it working.
Search volumes are Google Ads data for India via DataForSEO (September 2026).

## Keyword map

One primary search intent per page. Don't target a page's primary keyword on any other page.

| Page | Primary keyword (monthly searches) | Secondary keywords | Intent |
|---|---|---|---|
| `/` | real estate marketing agency (880) | real estate digital marketing agency (720), real estate marketing companies (320) | Commercial — choosing an agency |
| `/services` | real estate marketing services (260) | real estate digital marketing services (210) | Commercial — comparing services |
| `/services/high-converting-landing-pages` | real estate landing page design | real estate website design (590), real estate landing page (390), project microsite | Commercial |
| `/services/paid-ads` | real estate lead generation (1,300) | real estate ads (1,900), facebook ads for real estate (320), google ads for real estate (260) | Commercial |
| `/services/ai-automation` | real estate chatbot (480) | whatsapp automation for real estate, real estate CRM integration | Commercial |
| `/industries/real-estate` | marketing for real estate developers | builder marketing, digital marketing for real estate agents (260) | Commercial — developers |
| `/channel-partners` | channel partner marketing | marketing for real estate channel partners and brokers | Commercial — CPs and brokers |
| `/playbooks` | real estate marketing strategy (320) | real estate marketing plan examples | Informational → commercial |
| `/pricing` | real estate marketing packages | real estate marketing pricing | Commercial |
| `/blog/what-is-eoi-in-real-estate` | what is eoi in real estate (880) | eoi vs token amount, eoi refund | Informational |
| `/blog/channel-partner-in-real-estate` | channel partner in real estate (880) | cp commission, rera agent registration | Informational |
| `/blog/real-estate-ad-examples` | creative real estate ads (880) | real estate ad examples, real estate advertising | Informational |
| `/blog/google-ads-vs-meta-ads-real-estate-india` | facebook ads vs google ads for real estate | meta ads for real estate | Informational |
| `/blog/real-estate-landing-page-conversion-hacks` | real estate landing page best practices | landing page for property launch | Informational |
| `/blog/whatsapp-automation-for-real-estate-leads` | whatsapp automation for real estate leads | real estate lead follow up | Informational |
| `/blog/real-estate-local-seo-ncr` | google business profile for real estate agents | local seo for brokers | Informational |

Deliberately **not** targeted:
- **real estate crm (2,400)** — Google shows CRM software vendors and "top 10 CRM" lists. We mention CRM integration, but don't compete for this term.
- **real estate + city** (e.g. "real estate marketing agency lucknow") — too little search volume to justify separate city pages. Revisit once the Google Business Profile is verified.

## Where things live

| What | File |
|---|---|
| Business facts (email, phone, service area, socials, booking link) | `data/site.ts` |
| Titles and descriptions for static pages | `lib/seo-config.ts` → `pageMeta` |
| Metadata builder (canonical, Open Graph, Twitter, robots) | `lib/seo-config.ts` → `constructMetadata()` |
| Structured data (JSON-LD) | `lib/schema.ts` — site-wide graph emitted once in `app/layout.tsx` |
| Breadcrumb schema | Automatic — rendered by `components/ui/Breadcrumb.tsx` |
| FAQ schema | Automatic — rendered by `components/sections/FaqAccordion.tsx` (`withSchema={false}` to turn off) |
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

## Checks

Run against a local server (`npm run dev` or `npm run build && npx next start`):

```bash
node scripts/seo/crawl.js http://localhost:3000            # titles, descriptions, canonicals, H1s, JSON-LD, broken/orphan links
node scripts/seo/check-redirects.js http://localhost:3000  # every redirect is one hop to a 200 page
```
