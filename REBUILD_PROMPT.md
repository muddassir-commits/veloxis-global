# Veloxis Global — Real Estate Niche Rebuild (Execution Brief)

## ROLE

You are a senior Next.js engineer + technical SEO working on an **existing, live** production site at `D:\01_Projects\veloxis-global` (veloxisglobal.com). This is a **repositioning of a live site**, not a greenfield build. Read before you write. Preserve before you delete.

## CURRENT STATE (verified — but re-verify before deleting anything)

- **Stack:** Next.js 14.2.35 App Router, React 18, TypeScript, Tailwind 3.4, framer-motion, lucide-react, react-hook-form + zod, resend (installed, unused — forms go to n8n).
- **Design system:** `DESIGN.md` front-matter defines tokens; they surface as CSS vars in `app/globals.css` and are mapped in `tailwind.config.ts`. Font: Plus Jakarta Sans, self-hosted and preloaded in layout.
- **SEO plumbing:** `lib/seo-config.ts` (`constructMetadata`, `pageMeta`), `lib/schema.ts` (Organization / LocalBusiness / Service / FAQ / Article / Breadcrumb / HowTo / Review generators), `app/sitemap.ts`, `app/robots.ts`, `public/llms.txt`, `public/llms-full.txt`.
- **Content is data-driven:** pages are thin; content lives in `data/*.ts` (`services-data.ts`, `industries-data.ts`, `case-studies.ts`, `blog-posts.ts`, `testimonials.ts`, `navbar-data.ts`, `faqs.ts`, `site.ts`, `stats.ts`).
- **Templates:** `components/services/ServicePageTemplate.tsx`, `components/services/IndustryPageTemplate.tsx`, plus `components/sections/*` (Hero, ServicesGrid, ProcessTimeline, TestimonialsSlider, CasestudyFeature, LocationsGrid, BlogPreview, CtaBanner, FaqAccordion).
- **Forms:** `/api/contact`, `/api/audit-request`, `/api/newsletter` — zod validation + honeypot + forward to n8n webhooks (`N8N_*_WEBHOOK` env vars), with a mock-success fallback when the webhook is unset.
- **Analytics:** GA4 (`G-LC9XWNSGCF`), Meta Pixel (`1484475786790290`), Clarity (`wvclr1xtkt`) in `app/layout.tsx`; helpers in `lib/analytics.ts` and `components/analytics/AnalyticsTracker.tsx`.
- **Contact facts** (`data/site.ts`): phone `+91-88876 20727`, email `hello@veloxisglobal.com`, Kanpur UP, founder Muddassir Ali.

## MISSION

Reposition Veloxis Global from a **generalist multi-service, multi-industry Indian digital marketing agency** into a **single-niche real estate growth partner**.

**The niche:** real estate — builders, developers, brokerages, channel partners, property consultants.

**The only three services:**

1. **High-converting landing pages & websites** for property launches and inventory.
2. **Paid ads** — Meta (Facebook/Instagram) and Google — for site visits and qualified enquiries.
3. **AI automation** — lead qualification, instant WhatsApp response, CRM routing, follow-up sequences.

**The test every page must pass:** a stranger landing on any URL concludes, within three seconds, *"this company only does real estate."* No "we serve 12 industries" energy anywhere. No SEO / social / content-marketing / e-commerce service pages surviving as standalone offers.

## NON-NEGOTIABLE RULES

1. **No URL dies without a 301.** Every deleted route gets a permanent redirect in `next.config.mjs` → `redirects()`, pointing at the *closest topical match*, not a lazy dump to `/`. Preserve the existing `/case-studies/noida-ecommerce-skincare` redirect.
2. **Never invent proof.** Do not fabricate client names, revenue figures, ROAS numbers, testimonials, review counts, or case study outcomes. Where real data is missing, write the copy structure and insert `{/* TODO-CLIENT: real figure needed */}` with a clearly marked placeholder. Existing values in `data/stats.ts` may be reused as-is. Do not inflate `clientRating`, `projectsDelivered`, or any other counter.
3. **Reuse the existing design system.** No new font, no new UI library, no new palette. Work within `DESIGN.md` tokens and existing `components/ui/*`. New section components are fine; restyling the brand is not.
4. **Keep the data-driven pattern.** Content goes in `data/*.ts` behind typed interfaces. Page files stay thin: metadata + schema + template invocation.
5. **The build must stay green.** Run `npm run build` at the end of every phase. Do not start the next phase on a broken build.
6. **Phase by phase, one commit per phase.** Do not attempt the whole rebuild in a single pass.
7. **Preserve** the GA4 / Pixel / Clarity IDs, the GSC verification token, the n8n webhook request shapes, and the zod validation contracts. Lead capture must never regress.
8. **Leave the audit folders alone:** `seofx/`, `seo/`, `scratch/`, `scripts/`, `SEO_TRACKER.md`, `seo_audit_report.md`. Working notes, not site content.

---

# PHASE 0 — Inventory & safety net

1. Branch: `git checkout -b feat/real-estate-repositioning`.
2. Generate `REBUILD_INVENTORY.md` listing **every** current public URL — derive it from `app/**/page.tsx` plus the slug arrays in `data/services-data.ts`, `data/industries-data.ts`, `data/case-studies.ts`, `data/blog-posts.ts` — with a column for KEEP / REWRITE / DELETE+REDIRECT, and the redirect target for the last group.
3. **Fix the pre-existing 404 bug first.** These eight routes under `app/services/` call `getServiceBySlug()` with slugs that are absent from `servicesData`, so they render 404 in production today: `ai-automation-systems`, `analytics-tracking-attribution`, `audits-consulting-strategy`, `b2b-lead-generation-sales`, `brand-strategy-positioning`, `ecommerce-catalog-services`, `industry-specific-marketing`, `training-education`. They get deleted in Phase 1 anyway — but add their redirects now, so the broken internal link in `components/layout/Footer.tsx` (around line 171, pointing at `/services/ai-automation-systems`) resolves immediately.
4. Commit the inventory before touching anything else.

---

# PHASE 1 — Information architecture

## Final URL map

### Core

| URL | Action |
|---|---|
| `/` | REWRITE — real estate homepage |
| `/about` | REWRITE — founder-led, real estate credibility |
| `/contact` | REWRITE — real-estate-specific enquiry fields |
| `/pricing` | REWRITE — three packages mapped to the three services |
| `/case-studies` | REWRITE — real estate results only |
| `/testimonials` | REWRITE — real estate clients only |
| `/blog` | KEEP shell, REWRITE content strategy |
| `/author/muddassir-ali` | KEEP, re-angle bio to real estate |
| `/privacy-policy`, `/terms` | KEEP, update the service descriptions inside |

### Services (the entire offer)

| New URL | Notes |
|---|---|
| `/services` | Hub: the three services, nothing else |
| `/services/real-estate-landing-pages` | Launch pages, project microsites, inventory pages, CRO |
| `/services/real-estate-paid-ads` | Parent: Meta + Google, full-funnel, cost-per-site-visit framing |
| `/services/meta-ads-for-real-estate` | Child: Lead Ads, creative, lookalikes, retargeting |
| `/services/google-ads-for-real-estate` | Child: high-intent search, PMax, project + locality keywords |
| `/services/real-estate-ai-automation` | Instant lead response, WhatsApp qualification bot, CRM routing, drip follow-up, site-visit booking |

### Audience pages (replaces the industries section)

| New URL |
|---|
| `/for/builders-and-developers` |
| `/for/real-estate-brokers-and-agencies` |
| `/for/channel-partners` |

### Location pages (re-slugged, niche-scoped)

| New URL | Replaces |
|---|---|
| `/real-estate-marketing-agency-delhi-ncr` | `/digital-marketing-agency-delhi` |
| `/real-estate-marketing-agency-noida` | `/digital-marketing-agency-noida` |
| `/real-estate-marketing-agency-lucknow` | `/digital-marketing-agency-lucknow` |
| `/real-estate-marketing-agency-kanpur` | `/digital-marketing-agency-kanpur` |

### Lead magnet

| New URL | Replaces |
|---|---|
| `/real-estate-marketing-audit` | `/free-seo-audit` |

### Deleted entirely (all redirected)

- All 12 `/industries/*` pages, plus `/industries`
- All 15 current `/services/*` route folders, including `/services/google-ads-ppc`
- All four `/digital-marketing-agency-*` pages
- `/free-seo-audit`
- Three of four case studies (see Phase 2)
- Three of six blog posts (see Phase 2)

**Delete these data files** once nothing imports them: `data/industries-data.ts`, and `data/services.ts` (the legacy duplicate of `services-data.ts` — confirm zero imports first). Rewrite rather than delete: `data/services-data.ts`, `data/navbar-data.ts`, `data/faqs.ts`, `data/testimonials.ts`, `data/case-studies.ts`, `data/blog-posts.ts`.

**Delete these components** once unreferenced: `components/services/IndustryPageTemplate.tsx` (after adapting it — see Phase 4), and `components/sections/LocationsGrid.tsx` *or* repurpose it for the four new city pages. Prefer repurposing.

---

# PHASE 2 — Redirect map (`next.config.mjs`)

Add all of the following as `permanent: true`. Keep the existing skincare redirect.

```
/industries                                      → /
/industries/real-estate                          → /for/builders-and-developers
/industries/saas                                 → /
/industries/healthcare                           → /
/industries/coaching-consulting                  → /
/industries/education                            → /
/industries/restaurant-food                      → /
/industries/ecommerce                            → /
/industries/fitness-wellness                     → /
/industries/msme-small-business                  → /
/industries/non-profit                           → /
/industries/travel-tourism                       → /
/industries/legal-professional                   → /

/services/seo                                    → /services
/services/content-marketing                      → /services/real-estate-landing-pages
/services/social-media-marketing                 → /services/meta-ads-for-real-estate
/services/paid-advertising-performance-marketing → /services/real-estate-paid-ads
/services/google-ads-ppc                         → /services/google-ads-for-real-estate
/services/web-design-development                 → /services/real-estate-landing-pages
/services/email-marketing                        → /services/real-estate-ai-automation
/services/ai-automation-systems                  → /services/real-estate-ai-automation
/services/b2b-lead-generation-sales              → /services/real-estate-paid-ads
/services/analytics-tracking-attribution         → /services/real-estate-paid-ads
/services/audits-consulting-strategy             → /real-estate-marketing-audit
/services/brand-strategy-positioning             → /services
/services/ecommerce-catalog-services             → /services
/services/industry-specific-marketing            → /services
/services/training-education                     → /about

/digital-marketing-agency-delhi                  → /real-estate-marketing-agency-delhi-ncr
/digital-marketing-agency-noida                  → /real-estate-marketing-agency-noida
/digital-marketing-agency-lucknow                → /real-estate-marketing-agency-lucknow
/digital-marketing-agency-kanpur                 → /real-estate-marketing-agency-kanpur

/free-seo-audit                                  → /real-estate-marketing-audit

/case-studies/noida-edtech-lead-generation       → /case-studies
/case-studies/lucknow-healthcare-leads           → /case-studies
/case-studies/kanpur-fabrics-b2b                 → /case-studies

/blog/seo-in-2026-whats-changed-for-indian-businesses → /blog
/blog/content-marketing-eeat-framework               → /blog
/blog/how-to-optimize-google-business-profile-2026   → /blog
```

Keep and rewrite these into real estate angles rather than redirecting them:

- `/case-studies/delhi-real-estate-developer` — already on-niche; expand it into the flagship case study.
- `/blog/google-ads-vs-meta-ads-roi-india` — re-angle: which channel actually produces property enquiries.
- `/blog/instagram-reels-funnel-local-brands` — re-angle: a reels funnel for property walkthroughs.
- `/blog/meta-performance-max-best-practices` — re-angle: PMax for real estate.

If you rename any of those three blog slugs to carry "real estate", add a 301 from the old slug to the new one.

---

# PHASE 3 — Data layer

1. **`data/services-data.ts`** — replace the six service objects with the new set. Keep the `ServiceData` interface shape (`id`, `slug`, `title`, `emoji`, `subtitle`, `definition`, `shortDesc`, `longDesc`, `icon`, `accentColor`, `gradientClass`, `pricing`, `pricingRange`, `benefits`, `subservices`, `bestFor`, `cta`, `achievements`, `relatedServices`, `faqs`) so `ServicePageTemplate` keeps working untouched. **Every slug in the array must match a real directory under `app/services/`, and every directory must match a slug** — that mismatch is exactly what produced the eight live 404s. Add a build-time assertion that fails loudly on drift.
2. **New `data/audiences-data.ts`** — for the three `/for/*` pages. Model the interface on the existing `IndustryData` (hero badge, hero title, hero description, pain points, solution blocks, case summary, FAQs) so you can adapt `IndustryPageTemplate` instead of writing a template from scratch.
3. **New `data/locations-data.ts`** — the four cities, each with a local market angle (Noida/Greater Noida launches, Delhi NCR resale, Lucknow plotted development, Kanpur residential), local FAQs, and geo coordinates for `constructMetadata`'s `geoRegion` / `geoPlacename` / `geoPosition` params — which already exist in `lib/seo-config.ts` and are currently underused.
4. **`data/navbar-data.ts`** — collapse to: Services (3 items + 2 children), Who We Help (3 items), Case Studies, Pricing, Blog, About. Delete `industryMenuItems` entirely.
5. **`data/faqs.ts`** — rewrite all six for real estate: cost per qualified lead, typical CPL for property enquiries, how fast the automation responds, whether you work with RERA-registered projects, minimum ad spend, lock-in terms.
6. **`data/testimonials.ts` / `data/case-studies.ts`** — real estate only. Mark anything unverified as `TODO-CLIENT`.
7. **`data/site.ts`** — unchanged; the contact facts are still accurate.
8. **`data/stats.ts`** — do **not** inflate. If you add real-estate-specific counters (projects marketed, site visits generated), leave them as `TODO-CLIENT` placeholders until the owner supplies real numbers.

---

# PHASE 4 — Pages & components

1. **Homepage (`app/page.tsx`)** — keep the existing section composition and the dynamic-import strategy; it is well tuned for Core Web Vitals. Swap the content:
   - Hero: real-estate-specific promise, primary CTA to the audit, secondary to WhatsApp.
   - `ServicesGrid`: the three services.
   - `ProcessTimeline`, reframed as the engagement flow — audit → landing page → ad launch → AI qualification → site visits booked.
   - Keep `CasestudyFeature`, `TestimonialsSlider`, `BlogPreview`, `CtaBanner`.
   - Repurpose `LocationsGrid` to the four new city URLs.
2. **`AudiencePageTemplate`** — adapt from `IndustryPageTemplate`, then delete the original.
3. **`ServicePageTemplate`** — reuse as-is; only the data changes.
4. **Forms** — add a real-estate context field to `ContactForm` and `AuditForm` (a select: Builder/Developer, Brokerage, Channel Partner, Other) plus a "current monthly ad spend" band. Update the matching zod schemas in `app/api/contact/route.ts` and `app/api/audit-request/route.ts`. **Keep the honeypot, keep the phone regex, keep the n8n forwarding and its 8-second abort timeout.** Make the new fields optional in zod so a stale cached client cannot start failing validation.
5. **Navbar / Footer / MobileMenu** — rebuild the link sets from the new IA. Audit the footer for every hardcoded link; several currently point at routes that will no longer exist.

---

# PHASE 5 — SEO & structured data

1. **`lib/seo-config.ts`** — rewrite the `pageMeta` object for the new URL set. Update the site-wide title template in `app/layout.tsx` from the four-city generalist string to a real estate positioning line. Titles ≤ 60 characters, descriptions 140–160.
2. **`lib/schema.ts`** — update `generateOrganizationSchema` and `generateLocalBusinessSchema`: `description`, `knowsAbout`, `areaServed`, and `hasOfferCatalog` should describe real estate marketing services only. Add `serviceType: "Real Estate Marketing"`. Do not touch `aggregateRating` values unless the owner supplies real review data.
3. **`app/sitemap.ts`** — rebuild from the new data arrays. Priorities: `/` 1.0, the three service pages 0.9, the audit 0.9, audience pages 0.85, city pages 0.85, case studies 0.7, blog 0.7, legal 0.3. Remove every industry and legacy service entry.
4. **`public/llms.txt` and `public/llms-full.txt`** — regenerate completely. They currently describe the generalist agency and will actively mislead AI search engines about the new positioning.
5. **Per-page schema:** Service on service pages, FAQPage on every page with an FAQ block, BreadcrumbList everywhere, LocalBusiness on city pages using the geo meta params, Article on blog posts, Person on the author page.
6. **Internal linking:** every service page links to the other two plus the relevant audience page; every audience page links to all three services; city pages link to services and the audit. No orphans.

---

# PHASE 6 — Copy & positioning

**Positioning line to work from** (refine it, do not pad it): Veloxis Global builds the lead engine for real estate — landing pages that convert, ads that fill the pipeline, and AI that answers every enquiry in under a minute.

**Copy rules:**

- Lead with the buyer's real problem: enquiries that never get called back, leads that go cold in the first ten minutes, ad spend burned on tyre-kickers, brokers chasing unqualified numbers.
- Use the industry's actual vocabulary: site visits, walk-ins, channel partners, inventory, launch, possession, RERA, CP network, booking, EOI, locality, project microsite.
- The metric that matters is **cost per qualified site visit**, not impressions or clicks.
- Voice: direct, operator-to-operator, specific. No "unlock", "elevate", "synergy", "in today's fast-paced digital landscape".
- Indian market context throughout: INR pricing, WhatsApp as the primary response channel, Delhi NCR / Noida / Lucknow / Kanpur as the served geography.
- Every page ends with one clear CTA. Primary across the site: the free real estate marketing audit. Secondary: WhatsApp.

---

# PHASE 7 — QA gate (all must pass before merge)

- [ ] `npm run build` clean — zero type errors, zero ESLint errors.
- [ ] Every URL marked DELETE in `REBUILD_INVENTORY.md` resolves 301 → a 200 page. Test each one individually.
- [ ] Zero internal links to deleted routes. Grep the entire tree for every dead slug, including `Footer.tsx`, `Navbar.tsx`, `MobileMenu.tsx`, and all `data/*.ts` cross-references.
- [ ] Every slug in `servicesData` has a matching `app/services/<slug>/page.tsx`, and vice versa.
- [ ] `/sitemap.xml` contains only live URLs, and every live URL appears in it.
- [ ] All three forms submit successfully both with the webhooks unset (mock path) and with them set.
- [ ] GA4, Meta Pixel and Clarity all still fire; `AnalyticsTracker` still mounts.
- [ ] Schema validates — run one page of each type through Google's Rich Results Test.
- [ ] Mobile at 375px: no horizontal scroll; the sticky mobile bar and WhatsApp widget do not overlap.
- [ ] Lighthouse ≥ 90 performance and 100 SEO on `/` and on one service page.
- [ ] Search the rendered site for leftover generalist terms — "SEO services", "e-commerce", "EdTech", "restaurant", "12 industries" — and confirm every remaining hit is intentional.

---

# DELIVERABLE

Work phase by phase. After each phase: run the build, commit with a clear message, and report what changed, what you deleted, and anything you found that contradicts this brief. If a decision in this document turns out to be wrong once you are in the code, say so and propose the alternative rather than silently working around it.
