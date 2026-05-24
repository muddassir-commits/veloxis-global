# Veloxis Global — Digital Marketing Agency
# Website Structure, Wireframe & Content Guide v2.0
## Updated: May 2026 | Target: Delhi · Noida · Lucknow · Kanpur
---

## DESIGN SYSTEM REFERENCE (DESIGN.md)

| Token | Value | Use |
|---|---|---|
| Background | `#F8FAFC` (Slate-50) | Page background, breathing space |
| White Surface | `#FFFFFF` | Cards, nav, modals |
| Navy / Primary | `#0F172A` (Slate-900) | All H1–H3 headlines, body text |
| Royal Blue | `#2563EB` | CTA buttons, links, highlights, active states |
| Teal Accent | `#0D9488` | Icons, badges, data viz — never for text |
| Indigo Accent | `#4F46E5` | Secondary icon variant, tags |
| Sunset Orange | `#F59E0B` | Stats, warning badges, highlight pills |
| Glass Stroke | `rgba(255,255,255,0.4)` | Nav glassmorphism border |
| Font | Plus Jakarta Sans | Only font — 800/700/600/400 weights |
| Card Radius | `rounded-xl` (1.5rem) | All cards, large containers |
| Button Radius | `rounded-md` (0.75rem) | All buttons, inputs |
| Section Gap | 120px | Vertical space between sections |
| Container Max | 1280px | Max width, centered |

**Typography Scale:**
- Hero H1: 72px / 800 weight / -0.02em tracking (display-lg)
- Section H2: 48px / 700 weight / -0.01em (headline-lg) → 32px mobile
- Card H3: 30px / 600 weight (headline-md)
- Body: 18px / 400 / 1.56 line-height (body-lg)
- Labels/Caps: 12px / 700 / 0.05em tracking (label-caps)

**Glassmorphism Nav:** `background: rgba(255,255,255,0.70)`, `backdrop-filter: blur(20px)`, 1px glass-stroke border, `position: sticky top-0`

---

## INTEGRATIONS & TECHNICAL SETUP

### Analytics Stack
```
Google Analytics 4 (GA4)
├── Measurement ID → GA_MEASUREMENT_ID (env var)
├── Events to track: cta_click, form_submit, phone_click, 
│   whatsapp_click, scroll_depth (25/50/75/100%), page_view
└── Install: Next.js → @next/third-parties/google OR partytown

Google Search Console (GSC)
├── Verify via: HTML meta tag in <head> OR DNS TXT record
├── Submit: /sitemap.xml after launch
└── Env: NEXT_PUBLIC_GSC_VERIFICATION_TOKEN

Meta Pixel (Facebook/Instagram)
└── NEXT_PUBLIC_META_PIXEL_ID (env var)

Hotjar (Heatmaps + Recordings)
└── NEXT_PUBLIC_HOTJAR_ID

Microsoft Clarity (Free heatmaps — use as Hotjar backup)
└── NEXT_PUBLIC_CLARITY_ID
```

### SEO Technical Files
```
/public/
├── robots.txt          ← Allow all, disallow /api/, sitemap link
├── sitemap.xml         ← Dynamic, generated via /app/sitemap.ts
├── site.webmanifest    ← PWA manifest for mobile
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
└── og-default.jpg      ← 1200×630 OG fallback image

robots.txt content:
  User-agent: *
  Allow: /
  Disallow: /api/
  Disallow: /admin/
  Sitemap: https://veloxisglobal.com/sitemap.xml
```

### Folder Structure (Next.js App Router)
```
veloxis-global/
├── .env.local
├── next.config.ts
├── tailwind.config.ts          ← Veloxis design tokens
├── public/
│   ├── robots.txt
│   ├── sitemap.xml             ← Static fallback
│   ├── images/
│   │   ├── logos/
│   │   ├── team/
│   │   ├── case-studies/
│   │   └── og/                 ← Per-page OG images
│   └── fonts/                  ← Plus Jakarta Sans self-hosted
├── app/
│   ├── layout.tsx              ← Root layout: Nav + Footer + Analytics
│   ├── page.tsx                ← Homepage
│   ├── sitemap.ts              ← Dynamic sitemap generator
│   ├── robots.ts               ← robots.txt generator
│   ├── not-found.tsx           ← Custom 404
│   ├── services/
│   │   ├── page.tsx
│   │   ├── seo/page.tsx
│   │   ├── social-media-marketing/page.tsx
│   │   ├── google-ads-ppc/page.tsx
│   │   ├── content-marketing/page.tsx
│   │   ├── web-design-development/page.tsx
│   │   └── email-marketing/page.tsx
│   ├── digital-marketing-agency-delhi/page.tsx
│   ├── digital-marketing-agency-noida/page.tsx
│   ├── digital-marketing-agency-lucknow/page.tsx
│   ├── digital-marketing-agency-kanpur/page.tsx
│   ├── about/page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── industries/
│   │   ├── page.tsx
│   │   ├── real-estate/page.tsx
│   │   ├── healthcare/page.tsx
│   │   ├── education/page.tsx
│   │   ├── ecommerce/page.tsx
│   │   └── msme-small-business/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── pricing/page.tsx
│   ├── testimonials/page.tsx
│   ├── free-seo-audit/page.tsx
│   ├── contact/page.tsx
│   └── api/
│       ├── contact/route.ts
│       ├── audit-request/route.ts
│       └── newsletter/route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          ← Glassmorphism nav
│   │   ├── Footer.tsx
│   │   ├── MobileMenu.tsx
│   │   └── WhatsAppWidget.tsx
│   ├── sections/               ← Page-level sections (reusable)
│   │   ├── HeroSection.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── TestimonialsSlider.tsx
│   │   ├── CasestudyFeature.tsx
│   │   ├── ProcessTimeline.tsx
│   │   ├── FaqAccordion.tsx
│   │   ├── CtaBanner.tsx
│   │   ├── LocationsGrid.tsx
│   │   └── BlogPreview.tsx
│   ├── ui/
│   │   ├── Button.tsx          ← Primary / Secondary / Ghost
│   │   ├── Badge.tsx           ← Teal/Indigo/Orange accent chips
│   │   ├── Card.tsx            ← White, rounded-xl, 1px border
│   │   ├── Input.tsx           ← Slate-50 bg, Royal Blue focus
│   │   ├── Breadcrumb.tsx
│   │   ├── SchemaMarkup.tsx    ← JSON-LD renderer
│   │   └── AnimatedCounter.tsx
│   └── forms/
│       ├── ContactForm.tsx
│       ├── AuditForm.tsx
│       └── NewsletterForm.tsx
├── lib/
│   ├── analytics.ts            ← GA4 event helpers
│   ├── schema.ts               ← Schema generators
│   └── seo-config.ts           ← Per-page meta defaults
└── data/
    ├── services.ts
    ├── testimonials.ts
    ├── case-studies.ts
    └── faqs.ts
```

### environment variables (.env.local)
```bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GSC_TOKEN=your-gsc-token
NEXT_PUBLIC_META_PIXEL_ID=your-pixel-id
NEXT_PUBLIC_HOTJAR_ID=your-hotjar-id
NEXT_PUBLIC_CLARITY_ID=your-clarity-id

# Contact / Email
RESEND_API_KEY=re_xxxx
CONTACT_EMAIL=hello@veloxisglobal.com
SLACK_WEBHOOK_URL=https://hooks.slack.com/...

# Site
NEXT_PUBLIC_SITE_URL=https://veloxisglobal.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+919XXXXXXXXX
```

### sitemap.ts (dynamic)
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://veloxisglobal.com'
  const now = new Date()
  return [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    // Location pages — highest priority after homepage
    { url: `${base}/digital-marketing-agency-delhi`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/digital-marketing-agency-noida`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/digital-marketing-agency-lucknow`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/digital-marketing-agency-kanpur`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    // Service pages
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/services/seo`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/services/social-media-marketing`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/services/google-ads-ppc`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/services/content-marketing`, lastModified: now, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${base}/services/web-design-development`, lastModified: now, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${base}/services/email-marketing`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    // Core pages
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.70 },
    { url: `${base}/case-studies`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${base}/free-seo-audit`, lastModified: now, changeFrequency: 'monthly', priority: 0.80 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.70 },
    // Industry pages
    { url: `${base}/industries/real-estate`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/industries/healthcare`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/industries/education`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/industries/ecommerce`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${base}/industries/msme-small-business`, lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
  ]
}
```

---

## PAGE-BY-PAGE CONTENT, KEYWORDS & WIREFRAME

---

### PAGE 1 — HOMEPAGE (/)

**SEO Meta (May 2026 — competitor-researched):**
```
Title: Best Digital Marketing Agency in Delhi, Noida, Lucknow & Kanpur | Veloxis Global
Meta Desc: Veloxis Global — India's trusted digital marketing agency delivering SEO, Google Ads, 
           Social Media & Content marketing for businesses in Delhi, Noida, Lucknow & Kanpur. 
           Get free audit. (156 chars)
Canonical: https://veloxisglobal.com/
OG Image: /images/og/homepage-og.jpg (1200×630)
```

**Schema Markup:**
```json
LocalBusiness + WebSite + Organization schema
"@type": "MarketingAgency"
"areaServed": ["Delhi", "Noida", "Lucknow", "Kanpur"]
"aggregateRating": { "ratingValue": "4.9", "reviewCount": "180" }
```

**Primary Keyword:** digital marketing agency Delhi Noida Lucknow Kanpur
**Supporting Keywords:** best digital marketing company India 2026, digital marketing services North India, performance marketing agency, growth marketing agency India, ROI-driven digital marketing

---

#### SECTION 1.1 — GLASSMORPHISM NAVIGATION
```
Design: sticky top-0, bg rgba(255,255,255,0.70), backdrop-blur-20, 1px glass-stroke border
Font: Plus Jakarta Sans 15px / Slate-900 → Royal Blue on hover

[VELOXIS GLOBAL logo]              [Services ▾] [Locations ▾] [About] [Case Studies] [Blog]              [📞 Call] [Get Free Audit →]

Services Mega-Menu (2-col, white bg, rounded-xl, shadow):
Col 1: 🔍 SEO Services | 📱 Social Media | 💰 Google Ads PPC
Col 2: ✍️ Content Marketing | 💻 Web Design & Dev | 📧 Email Marketing

Locations Dropdown:
📍 Delhi | 📍 Noida | 📍 Lucknow | 📍 Kanpur

Mobile: Hamburger → full overlay, all links + CTA visible
```

---

#### SECTION 1.2 — HERO
```
Design: min-height 92vh, bg Slate-50, max-width 1280px centered

LEFT COLUMN (60%):

  [BADGE — label-caps, Teal/10% bg, Teal text]
  "⚡ GOOGLE PARTNER · 250+ BRANDS SCALED IN 2026"

  H1 [display-lg — 72px/800wt/-0.02em — Slate-900]:
  "North India's Most
  Results-Driven Digital
  Marketing Agency"

  [Body-lg — 18px/400 — Slate-500, max-width 560px]:
  "From SEO that ranks to Google Ads that converts — Veloxis Global
  delivers measurable digital growth for businesses in Delhi, Noida,
  Lucknow & Kanpur. No fluff. Only results."

  [Primary CTA — Royal Blue bg, white text, rounded-md, 16px/32px padding]:
  "Get Your Free Marketing Audit →"  → links to /free-seo-audit/

  [Secondary CTA — Royal Blue border 1.5px, Royal Blue text, transparent bg]:
  "See Our Results ↓"  → smooth scroll to case study section

  TRUST METRICS ROW (label-caps + large number):
  ⭐ 4.9/5 Google Rating  |  250+ Clients  |  6+ Years  |  ₹75Cr+ Revenue Generated

RIGHT COLUMN (40%):
  [Lottie animation or high-quality graphic — analytics dashboard mockup]
  Floating glass cards (glassmorphism) showing live-style metrics:
  → "↑ 340% Organic Traffic — Real Estate Client, Delhi"
  → "5.2x ROAS — E-commerce Brand, Noida"

Keywords woven in: "digital marketing agency Delhi", "North India", "SEO", "Google Ads", "Noida Lucknow Kanpur"
```

---

#### SECTION 1.3 — CLIENT LOGOS STRIP
```
Design: bg White, py-12, border-y 1px Slate-100

[label-caps, Slate-400]: "TRUSTED BY GROWING BUSINESSES ACROSS NORTH INDIA"

Marquee Row 1 (left-scroll): 8 client logos — grayscale → color on hover
Marquee Row 2 (right-scroll): 8 more client logos — opposite direction

Keywords: naturally mention cities in section heading variant copy
```

---

#### SECTION 1.4 — SERVICES OVERVIEW
```
Design: bg Slate-50, section-gap, max-width 1280px

[label-caps, Royal Blue]: "OUR SERVICES"
H2 [headline-lg]: "Everything Your Business Needs to Dominate Digital in 2026"
[Body-md, Slate-500]: "Six specialized services. One unified strategy. Consistent growth."

6-card grid (3×2 desktop / 2×3 tablet / 1×6 mobile):
Each card: White bg, rounded-xl, 1px Slate-100 border, 32px padding
  → Icon (Teal or Indigo bg, 10% opacity, rounded-lg)
  → H3 [headline-md]: Service name
  → Body-md: 2-line benefit-driven description
  → "Explore →" link in Royal Blue

Card 1 — SEO Services:
  Icon: 🔍 (Teal accent)
  H3: "SEO Services"
  Body: "Rank #1 on Google for keywords your customers are actually searching. 
         White-hat, sustainable, city-specific SEO strategies."
  Keywords used: rank on Google, SEO services India

Card 2 — Social Media Marketing:
  Icon: 📱 (Indigo accent)
  H3: "Social Media Marketing"
  Body: "Instagram, Facebook, LinkedIn — content that builds your brand and 
         brings real enquiries from your target audience."

Card 3 — Google Ads / PPC:
  Icon: 💰 (Sunset Orange)
  H3: "Google Ads & PPC"
  Body: "Every rupee tracked. Google-certified campaigns with proven ROAS 
         for Delhi, Noida, Lucknow & Kanpur businesses."
  Keywords used: Google Ads management, PPC agency India

Card 4 — Content Marketing:
  Icon: ✍️ (Teal accent)
  H3: "Content Marketing"
  Body: "SEO-optimised blogs, landing pages, and articles that rank, educate, 
         and convert visitors into leads."

Card 5 — Web Design & Dev:
  Icon: 💻 (Indigo accent)
  H3: "Web Design & Development"
  Body: "Fast, modern, mobile-first websites that convert traffic into customers. 
         Built for Core Web Vitals and Google rankings."

Card 6 — Email Marketing:
  Icon: 📧 (Sunset Orange)
  H3: "Email & WhatsApp Marketing"
  Body: "Automated sequences that nurture leads and re-engage customers — 
         integrated with your CRM and sales pipeline."
```

---

#### SECTION 1.5 — WHY CHOOSE US (Stats + USPs)
```
Design: bg White, section-gap

[label-caps, Royal Blue]: "WHY VELOXIS GLOBAL"
H2 [headline-lg]: "Why 250+ Businesses Chose Us Over Other Agencies in 2026"

STATS ROW — 4 counters (animate 0→final on scroll entry):
┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│     250+     │ │      6+      │ │     98%      │ │   ₹75Cr+     │
│   Clients    │ │  Yrs Exp.    │ │  Retention   │ │  Revenue Gen │
└──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘
Stats: display-lg size number, Slate-900 | label-caps label, Slate-500

USP GRID — 2 columns, 3 rows:
✅ Data-First, Not Guesswork — Every strategy backed by research and tracked by numbers
✅ Dedicated Account Manager — One point of contact, always reachable
✅ Transparent Reporting — Live dashboards, no vanity metrics
✅ Google & Meta Certified Team — Verified expertise, not just claims
✅ No Forced Lock-in Contracts — Month-to-month, results earn our retention
✅ Deep Local Market Knowledge — We understand Delhi, Noida, Lucknow & Kanpur buyers

Keywords: "digital marketing agency North India", "Google certified", "transparent reporting"
```

---

#### SECTION 1.6 — FEATURED CASE STUDY
```
Design: bg Slate-900 (dark section for contrast), rounded-xl on inner card, section-gap

[label-caps, Teal]: "PROVEN RESULTS"
H2 [headline-lg, White]: "Real Businesses. Real Growth. Real Numbers."

Case Study Card (bg: primary-container #131B2E, rounded-xl, 40px padding):
LEFT:
  [Badge: "Real Estate | Delhi | 6 Months"]
  H3 [White]: "How We Took a Delhi Real Estate Developer from 0 to 35,000 Monthly Visitors"
  [White/70%]: "Challenge: No online presence, losing leads to competitors. 
                 Strategy: Local SEO + Google Ads + Landing Page Optimisation."
  [Metric chips — Teal/Indigo/Orange badges]:
  → "+340% Organic Traffic"   → "5x Return on Ad Spend"   → "#1 on Google for 18 keywords"
  [CTA — White border, White text]: "Read Full Case Study →"

RIGHT:
  [Mockup: Google Search Console screenshot or traffic graph — blurred/styled]
  Floating metric card: "Month 1 vs Month 6 comparison"

Below: "View All 25+ Case Studies →" in Royal Blue
```

---

#### SECTION 1.7 — PROCESS (How We Work)
```
Design: bg Slate-50, section-gap

[label-caps, Royal Blue]: "OUR PROCESS"
H2 [headline-lg]: "From Day 1 to Results — Our 5-Step Growth Framework"

Horizontal timeline (desktop) / Vertical (mobile):
Line: 2px Royal Blue, animated draw on scroll

Step 1 — Audit & Discovery [Teal dot]
  "Deep dive into your website, competitors, audience & market. No assumptions."

Step 2 — Strategy Building [Royal Blue dot]
  "Custom 90-day roadmap: channels, keywords, content, budget — all mapped to your goals."

Step 3 — Execution [Indigo dot]
  "Our specialists go live — SEO, Ads, Social, Content — all moving simultaneously."

Step 4 — Optimise & Scale [Sunset Orange dot]
  "Weekly performance reviews, A/B testing, and budget reallocation to what's working."

Step 5 — Report & Grow [Teal dot]
  "Monthly in-depth reports with plain-English insights, next steps, and growth projections."

Keywords: "digital marketing process", "how digital marketing works", "marketing strategy India"
```

---

#### SECTION 1.8 — TESTIMONIALS
```
Design: bg White, section-gap

[label-caps, Royal Blue]: "CLIENT LOVE"
H2 [headline-lg]: "What Our Clients Say About Working With Veloxis Global"

Auto-rotating slider (5s interval, Framer Motion):
Each slide: White card, rounded-xl, 1px Slate-100 border, 40px padding

Testimonial 1 [Delhi — Real Estate]:
  ⭐⭐⭐⭐⭐
  "Veloxis Global completely transformed our digital presence. In 6 months, we went 
   from invisible online to ranking #1 in Delhi for our main search terms. Our 
   enquiry volume tripled. Best investment we've made."
  — Rohit Malhotra, Director, Malhotra Properties, Delhi

Testimonial 2 [Noida — EdTech]:
  ⭐⭐⭐⭐⭐
  "Their Google Ads team cut our cost-per-lead by 42% in the first 60 days while 
   doubling our lead volume. The weekly reports are genuinely insightful — not just 
   numbers, but clear next steps."
  — Priya Agarwal, Founder, SkillEdge Academy, Noida

Testimonial 3 [Lucknow — Healthcare]:
  ⭐⭐⭐⭐⭐
  "As a multi-specialty clinic, we needed patients to find us locally. Veloxis set up 
   our Google Business Profiles for all 3 locations and built our local SEO. Footfall 
   increased 60% in 4 months."
  — Dr. Ashish Verma, Director, Verma Health Group, Lucknow

Testimonial 4 [Kanpur — Manufacturing/Textile]:
  ⭐⭐⭐⭐⭐
  "We were sceptical about digital marketing for our textile business, but Veloxis 
   proved us wrong. Our B2B leads from Google now account for 40% of new business. 
   Exceptional team."
  — Suresh Gupta, MD, Gupta Fabrics Ltd., Kanpur

Testimonial 5 [Delhi — E-commerce]:
  ⭐⭐⭐⭐⭐
  "Our Instagram following grew from 2,000 to 58,000 in 8 months. More importantly, 
   our Shopify revenue from social traffic increased 220%. These people know what they 
   are doing."
  — Neha Singh, Founder, Bloom Skincare, Delhi

Google badge: "⭐ 4.9/5 — 180+ Google Reviews" with link
Keywords used: city names, client industry names — all local SEO signals
```

---

#### SECTION 1.9 — LOCATIONS SERVED
```
Design: bg Slate-50, section-gap

[label-caps, Royal Blue]: "WHERE WE OPERATE"
H2 [headline-lg]: "Local Expertise Across 4 Major North Indian Markets"

4-card grid (each city = clickable card):

Delhi Card [Royal Blue accent]:
  H3: "Digital Marketing Agency in Delhi"
  [Body-md]: "Serving South Delhi, Connaught Place, Rohini, Dwarka, Saket & all NCR. 
               Specialists in real estate, retail, healthcare & education sectors."
  [Tag chips]: Real Estate · Healthcare · Retail · Education
  [link →]: /digital-marketing-agency-delhi/

Noida Card [Teal accent]:
  H3: "Digital Marketing Agency in Noida"
  [Body-md]: "IT companies, startups, real estate & co-working brands in Sector 62, 
               Sector 18, Greater Noida & Noida Extension."
  [Tag chips]: IT · Startups · Real Estate · SaaS
  [link →]: /digital-marketing-agency-noida/

Lucknow Card [Indigo accent]:
  H3: "Digital Marketing Agency in Lucknow"
  [Body-md]: "Helping businesses in Gomti Nagar, Hazratganj, Indira Nagar, Alambagh 
               compete and win online in 2026."
  [Tag chips]: Healthcare · Education · Hospitality · Retail
  [link →]: /digital-marketing-agency-lucknow/

Kanpur Card [Sunset Orange accent]:
  H3: "Digital Marketing Agency in Kanpur"
  [Body-md]: "Digital growth for Kanpur's textile, manufacturing, leather & MSME 
               businesses — industry-specific strategies that work."
  [Tag chips]: Textile · Manufacturing · MSME · Leather
  [link →]: /digital-marketing-agency-kanpur/

Keywords: each city mentioned as H3 (SEO signal), industry tags
```

---

#### SECTION 1.10 — AWARDS & CERTIFICATIONS
```
Design: bg White, py-16, border-y 1px Slate-100

[label-caps, Slate-400]: "CERTIFIED & RECOGNISED"
Logos strip (all grayscale, hover = color):
[Google Partner Badge] [Meta Business Partner] [HubSpot Certified] [Semrush Agency Partner]
[Award 2026 logo] [Clutch Top Agency India 2026]
```

---

#### SECTION 1.11 — BLOG PREVIEW
```
Design: bg Slate-50, section-gap

[label-caps, Royal Blue]: "INSIGHTS"
H2 [headline-lg]: "Digital Marketing Knowledge Built for Indian Businesses"

3-card row (White cards, rounded-xl, 1px Slate-100 border):
Each: Hero image (bleed-to-edge, rounded-t-xl) + Category badge + H3 + Excerpt + Author + Date + Read time

Post 1: "SEO in 2026: What's Changed and What Indian Businesses Must Do Now"
Post 2: "Google Ads vs Meta Ads — Which Platform Gives Better ROI in India?"
Post 3: "How We Generated 500 Leads in 90 Days for a Lucknow Healthcare Brand"

[CTA]: "Browse All Articles →" in Royal Blue
```

---

#### SECTION 1.12 — FINAL CTA BANNER
```
Design: bg Royal Blue (#2563EB), rounded-xl inside section-gap container

H2 [White, headline-lg]: "Ready to Grow Your Business in 2026?"
[White/80%]: "Get a FREE, no-obligation digital marketing audit — 
               we'll show you exactly where your growth is being lost."

[Primary CTA — White bg, Royal Blue text]: "Get My Free Audit →" → /free-seo-audit/
[Secondary CTA — White border, White text]: "📞 Call Our Team Now"

Bottom: Animated subtle grid/mesh pattern in bg (Royal Blue + slightly lighter blue)
```

---

#### SECTION 1.13 — FOOTER
```
Design: bg Slate-900, White text, section-gap padding

Col 1 — Brand:
  [VELOXIS GLOBAL logo — white version]
  "North India's leading digital marketing agency — delivering measurable growth since 2019."
  Social icons: [FB] [IG] [LI] [YT] [X] → each Royal Blue on hover
  "📍 Serving: Delhi · Noida · Lucknow · Kanpur"

Col 2 — Services:
  SEO Services · Social Media Marketing · Google Ads & PPC
  Content Marketing · Web Design & Dev · Email Marketing

Col 3 — Locations:
  Digital Marketing Delhi · Digital Marketing Noida
  Digital Marketing Lucknow · Digital Marketing Kanpur

Col 4 — Company:
  About Us · Case Studies · Blog · Pricing · Testimonials · Contact

Col 5 — Contact:
  📞 +91-XXXXXXXXXX (clickable tel:)
  📧 hello@veloxisglobal.com
  💬 Chat on WhatsApp
  📍 [Office Address]

Bottom bar: © 2026 Veloxis Global. All Rights Reserved. | Privacy Policy | Terms | Sitemap
Schema: Organization LocalBusiness JSON-LD in footer
```

---
---

### PAGE 2 — DELHI LOCATION (/digital-marketing-agency-delhi/)

**SEO Meta:**
```
Title: Best Digital Marketing Agency in Delhi 2026 | Veloxis Global
Meta Desc: Looking for the best digital marketing agency in Delhi? Veloxis Global delivers 
           proven SEO, Google Ads & Social Media results for Delhi businesses. Free audit.
Canonical: https://veloxisglobal.com/digital-marketing-agency-delhi/
Schema: LocalBusiness — "addressLocality": "Delhi", "areaServed": "Delhi NCR"
```

**Primary KW:** best digital marketing agency in Delhi
**Secondary KWs:** digital marketing company Delhi 2026, SEO agency Delhi, Google Ads Delhi, performance marketing agency Delhi
**LSI:** Delhi NCR digital marketing, South Delhi marketing agency, online marketing Delhi, digital marketing for Delhi businesses

#### SECTIONS:

**2.1 — HERO (Delhi-specific)**
```
[Breadcrumb]: Home > Digital Marketing Agency Delhi

[label-caps, Teal]: "DELHI'S GROWTH PARTNER SINCE 2019"

H1 [display-lg, Slate-900]:
"Best Digital Marketing Agency in Delhi"

[Body-lg, Slate-500]:
"Veloxis Global helps Delhi businesses dominate Google search, social media, and paid ads. 
 Whether you're in South Delhi, Connaught Place, Rohini, or anywhere in NCR — 
 our data-driven strategies are built for Delhi's competitive market."

[Primary CTA]: "Get Free Delhi Marketing Audit →"
[Secondary]: "📞 Talk to Our Delhi Team"

Trust strip: "250+ Delhi Businesses Served | ⭐4.9 Google Rating | Google Partner Agency"
```

**2.2 — DELHI MARKET SECTION**
```
H2: "We Understand Delhi's Business Landscape Better Than Anyone"

Body: 200-word paragraph using keywords naturally:
"Delhi is one of India's most competitive business markets. Whether you're a real estate 
developer in Dwarka, a healthcare clinic in Saket, an educational institute in Lajpat Nagar, 
or a retail brand in Connaught Place — the digital competition is fierce and growing every month.

At Veloxis Global, our Delhi digital marketing team has spent 6+ years studying exactly 
how Delhi consumers search, compare, and buy. We know that a South Delhi real estate buyer 
behaves differently from a Rohini-based SME owner. Our campaigns reflect that nuance.

As the best digital marketing agency in Delhi, we've helped 100+ Delhi businesses — from 
startups to established brands — grow their online presence, generate qualified leads, 
and build sustainable digital revenue streams."

Industries tile row: [Real Estate] [Healthcare] [Education] [Retail] [Hospitality] [Manufacturing]
```

**2.3 — DELHI SERVICES (with keyword-rich copy)**
```
H2: "Digital Marketing Services We Offer in Delhi"

6 service cards — each with Delhi-specific copy:
"SEO Services in Delhi" | "Social Media Marketing Delhi" | "Google Ads Agency Delhi"
"Content Marketing Delhi" | "Website Design Company Delhi" | "Email Marketing Delhi"
```

**2.4 — DELHI CASE STUDIES**
```
H2: "Results We've Delivered for Delhi Businesses"
2-3 cards with: industry, challenge, metric results, CTA
```

**2.5 — WHY US FOR DELHI**
```
H2: "Why Delhi Businesses Choose Veloxis Global Over Other Agencies"

✅ Team physically accessible in Delhi NCR — quick meetings possible
✅ Deep understanding of Delhi consumer psychology and seasonal trends
✅ Experience across Delhi's most competitive industries
✅ Bilingual campaigns — Hindi + English for maximum reach
✅ 100+ Delhi client testimonials and Google reviews
✅ Google Partner status — access to beta features and dedicated Google support
```

**2.6 — GOOGLE MAPS + ADDRESS**
```
H2: "Our Delhi Service Coverage"
Google Maps embed (iframe) showing NCR coverage area
Address: [Office Address / Virtual presence details]
Phone: +91-XXXXXXXXXX | Email | WhatsApp
```

**2.7 — DELHI FAQS (with FAQ schema)**
```
H2: "Frequently Asked Questions — Digital Marketing in Delhi"

Q1: What is the cost of digital marketing services in Delhi in 2026?
A: Digital marketing services in Delhi range from ₹15,000/month for basic SEO to 
   ₹80,000+/month for full-service campaigns. At Veloxis Global, our Delhi packages 
   start at ₹18,000/month with transparent, results-based pricing.

Q2: How long does it take to see SEO results in Delhi?
A: For most Delhi businesses, initial ranking improvements appear in 60-90 days. 
   Competitive keywords in industries like real estate or healthcare in Delhi may 
   take 4-6 months for top-3 positions. We set realistic timelines upfront.

Q3: Do you offer Google Ads management for small businesses in Delhi?
A: Yes — we manage Google Ads campaigns for Delhi businesses starting from ₹20,000/month 
   ad spend. Our Google-certified team ensures every rupee is tracked and optimised.

Q4: Can you help my Delhi business rank on Google Maps?
A: Absolutely. Local SEO and Google Business Profile optimisation is one of our strongest 
   services in Delhi. We've helped 80+ Delhi businesses rank in the Local 3-Pack.

Q5: Which industries do you serve in Delhi?
A: Real estate, healthcare, education, retail, hospitality, manufacturing, e-commerce, 
   legal services, and more. We have dedicated specialists for each Delhi sector.

Q6: Do you offer free consultations for Delhi businesses?
A: Yes — we offer a free 30-minute strategy call + website audit for all new Delhi 
   enquiries. No commitments, just clarity.

Q7: Is Veloxis Global a Google Partner agency in Delhi?
A: Yes. We are an official Google Partner, which means our team is Google-certified 
   and we have access to exclusive tools, beta features, and Google support.

Q8: What makes Veloxis Global different from other digital marketing agencies in Delhi?
A: Unlike most Delhi agencies that give you templated strategies, Veloxis builds 
   custom data-driven plans for each client. We report on real business metrics — 
   leads, revenue, conversions — not just traffic numbers.

(FAQPage schema applied to all 8 Q&As)
```

**2.8 — FOOTER CTA (Delhi)**
```
H2: "Ready to Dominate Delhi's Digital Space in 2026?"
Body: "Join 100+ Delhi businesses already growing with Veloxis Global."
CTA: "Book Your Free Delhi Consultation →"
```

---

### PAGE 3 — NOIDA LOCATION (/digital-marketing-agency-noida/)

**SEO Meta:**
```
Title: Best Digital Marketing Agency in Noida 2026 | Veloxis Global
Meta Desc: Top-rated digital marketing agency in Noida — SEO, Google Ads, Social Media 
           for IT companies, startups & businesses. Veloxis Global. Get free audit.
```
**Primary KW:** best digital marketing agency in Noida
**Secondary KWs:** digital marketing company Noida 2026, SEO services Noida, Google Ads agency Noida, social media marketing Noida, performance marketing Noida
**LSI:** IT company marketing Noida, startup marketing Noida, digital marketing Sector 62, Noida Extension marketing agency, Greater Noida digital marketing

**Unique Noida Angle:** Noida's IT & startup ecosystem — tech-first messaging. Sector 62, Sector 18, Greater Noida, Noida Extension all mentioned for local signals.

**Same 8 sections as Delhi but with Noida-specific content:**
- H1: "Best Digital Marketing Agency in Noida"
- Market section: Focus on IT companies, startups, SaaS, real estate developers, co-working brands
- Industries: IT/Tech · Startups · Real Estate · SaaS · Education · Healthcare
- Local areas: Sector 62, Sector 18, Sector 137, Greater Noida, Noida Extension, Film City
- Noida FAQs (unique 8 questions about Noida market, startup-focused)

---

### PAGE 4 — LUCKNOW LOCATION (/digital-marketing-agency-lucknow/)

**SEO Meta:**
```
Title: Best Digital Marketing Agency in Lucknow 2026 | Veloxis Global
Meta Desc: Award-winning digital marketing agency in Lucknow — SEO, Google Ads & 
           Social Media for Lucknow businesses. Veloxis Global. Free audit today.
```
**Primary KW:** best digital marketing agency in Lucknow
**Secondary KWs:** digital marketing company Lucknow 2026, SEO services Lucknow, Google Ads Lucknow, social media marketing Lucknow, online marketing agency Lucknow
**LSI:** digital marketing Gomti Nagar, Hazratganj marketing agency, Indira Nagar digital marketing, Alambagh marketing, Lucknow business marketing

**Unique Lucknow Angle:** Traditional meets modern — Lucknow's growing economy, blend of heritage businesses and new-age brands. Mention local areas for geo-signals.

**Lucknow-specific Industries:** Healthcare · Education · Hospitality · Retail · Real Estate · MSME

---

### PAGE 5 — KANPUR LOCATION (/digital-marketing-agency-kanpur/)

**SEO Meta:**
```
Title: Best Digital Marketing Agency in Kanpur 2026 | Veloxis Global
Meta Desc: Leading digital marketing agency in Kanpur for textile, manufacturing & MSME 
           businesses. SEO, Google Ads, Social Media. Veloxis Global. Get free audit.
```
**Primary KW:** best digital marketing agency in Kanpur
**Secondary KWs:** digital marketing company Kanpur 2026, SEO services Kanpur, Google Ads Kanpur, online marketing Kanpur, MSME digital marketing Kanpur
**LSI:** textile business digital marketing Kanpur, Civil Lines marketing agency, Kanpur manufacturing SEO, leather industry marketing, Kanpur MSME online presence

**Unique Kanpur Angle:** Industrial heritage + MSME growth — position as the agency that understands B2B manufacturing, textile export, and leather industry digital challenges.

**Kanpur-specific Industries:** Textile · Leather · Manufacturing · MSME · Retail · Education

---

### PAGE 6 — SEO SERVICES (/services/seo/)

**SEO Meta:**
```
Title: Professional SEO Services in Delhi, Noida, Lucknow & Kanpur | Veloxis Global
Meta Desc: Rank #1 on Google with Veloxis Global's expert SEO services. Local SEO, 
           technical SEO, link building for businesses across North India. Free audit.
```
**Primary KW:** SEO services India 2026
**Secondary KWs:** best SEO agency Delhi, SEO company Noida, local SEO services India, technical SEO agency, professional SEO services North India
**LSI:** rank on Google India, organic traffic growth, keyword research India, on-page SEO, off-page SEO, link building India 2026

#### SECTIONS WITH CONTENT:

**6.1 — HERO**
```
[label-caps, Teal]: "SEO SERVICES · GOOGLE PARTNER"
H1 [display-lg]: "SEO Services That Get Your Business to Page 1 on Google"
[Body-lg]: "Veloxis Global delivers data-driven, white-hat SEO for businesses in Delhi, 
            Noida, Lucknow & Kanpur. From technical audits to link building — 
            we handle every aspect of your Google rankings."
CTAs: "Get Free SEO Audit →" | "See SEO Results →"
```

**6.2 — WHAT'S INCLUDED (keyword-rich checklist)**
```
H2: "What's Included in Our SEO Services in 2026"

✅ Technical SEO Audit — Core Web Vitals, crawl errors, speed, mobile
✅ Keyword Research & Mapping — 100+ target keywords per campaign
✅ On-Page Optimisation — H1-H6 structure, meta tags, schema markup
✅ Local SEO — Google Business Profile, local citations, map pack ranking
✅ Link Building — DA 40+ placements, guest posts, digital PR
✅ Content Strategy & Writing — SEO-optimised articles, landing pages
✅ E-E-A-T Signals — Author bios, expertise content, trust building
✅ Monthly Rank & Traffic Reports — Transparent, no vanity metrics
✅ Competitor Gap Analysis — Steal rankings from weaker competitors
✅ Schema Markup — LocalBusiness, FAQ, Article, BreadcrumbList
```

**6.3 — SEO TABS (Local / National / E-Commerce)**

**6.4 — SEO PROCESS (6 steps with timeline)**

**6.5 — RESULTS PROOF**
```
H2: "Our SEO Results Speak for Themselves"
Stats: "Average ranking improvement: 180% in 6 months | 
        Average organic traffic growth: 240% | 
        18 clients in Google Local Pack within 90 days"
```

**6.6 — PRICING**
```
H2: "Transparent SEO Pricing — No Hidden Charges"
Starter: ₹18,000/mo | Growth: ₹35,000/mo ⭐ | Enterprise: Custom
```

**6.7 — SEO FAQS (10 Q&As with schema)**
```
Q1: How long does SEO take to show results in India?
Q2: What's the difference between local SEO and national SEO?
Q3: Do you do black-hat SEO?
Q4: How do you measure SEO success?
Q5: What keywords will you target for my business?
Q6: Can you help recover from a Google penalty?
Q7: How does link building work?
Q8: What's included in your technical SEO audit?
Q9: Do you work with businesses outside Delhi NCR?
Q10: How is your SEO different from other agencies?
```

**6.8 — CITY STRIP (internal links)**
```
"Our SEO services are available across: Delhi | Noida | Lucknow | Kanpur"
Each city links to respective location page.
```

---

### PAGE 7 — GOOGLE ADS / PPC (/services/google-ads-ppc/)

**Primary KW:** Google Ads management agency India 2026
**Secondary KWs:** Google Ads agency Delhi, PPC management Noida, Google AdWords services India, performance marketing agency
**Key Copy Angle:** "Stop wasting ad budget — our Google-certified team delivers measurable ROAS"

**Sections:** Hero with Google Partner badge prominent → Campaign types (Search/Display/Shopping/YouTube/Remarketing/Local) → Why Google Partner → Ad management process → ROAS metrics strip → Case study → Pricing → FAQ → City strip → CTA

---

### PAGE 8 — SOCIAL MEDIA MARKETING (/services/social-media-marketing/)

**Primary KW:** social media marketing agency India 2026
**Secondary KWs:** Instagram marketing agency Delhi, Facebook marketing India, SMM services Noida, social media management agency
**Key Copy Angle:** "Build. Engage. Convert. — Complete social media management for Indian businesses"

---

### PAGE 9 — ABOUT US (/about/)

**Primary KW:** about Veloxis Global digital marketing agency
**Key E-E-A-T signals to include:**
- Founder name + LinkedIn + credentials (real person = trust signal)
- Team photos + bios (E-E-A-T)
- Company registration/founding year
- Awards and certifications with verification links
- "As seen in" media mentions

**Sections:** Hero → Founding story (500 words, humanised) → Mission & Vision → Team (photos, names, LinkedIn) → Timeline 2019–2026 → Awards & Certifications → Values (4 core values) → CTA

---

### PAGE 10 — FREE SEO AUDIT (/free-seo-audit/)

**Primary KW:** free SEO audit India 2026
**Secondary KWs:** free website audit, free digital marketing audit, website SEO analysis free India

**Design note:** This is a CONVERSION page — minimal navigation, zero distractions, single focus.

**Sections:**
```
Hero: H1 "Get Your FREE Website SEO Audit (Worth ₹8,000)"
      Sub: "Discover exactly why your website isn't ranking — in 48 hours"

What you get:
✅ Technical SEO Health Score
✅ Keyword Opportunity Analysis (50+ keywords)
✅ Competitor Comparison Report
✅ Google Business Profile Audit
✅ Core Web Vitals & Page Speed Report
✅ Backlink Profile Review
✅ Custom Priority Checklist

Form (5 fields max):
  Website URL* | Full Name* | Email* | Phone* | City* [Delhi/Noida/Lucknow/Kanpur/Other]
  [Get My Free Audit →] — Royal Blue, large

Social proof: "Join 250+ businesses who got clarity with our free audit"
What happens next: [Submit] → [48hr Audit] → [Email Report] → [Free Strategy Call]
```

---

### PAGE 11 — BLOG (/blog/)

**Primary KW:** digital marketing blog India 2026
**Structure:** Category tabs → Featured post hero → Grid of posts → Load more
**Post card:** Image + Category badge (Teal/Indigo/Orange) + H3 + Excerpt + Author + Date + Read time
**Article schema + Author schema on all posts**

---

### PAGE 12 — CONTACT (/contact/)

**Primary KW:** contact digital marketing agency Delhi
**Schema:** ContactPage

```
Left: Contact form (Name, Company, Email, Phone, Service interested, City, Message)
      After submit: Thank you message + "What happens next" 3 steps

Right: 📞 Phone (clickable) | 📧 Email | 💬 WhatsApp large button
       ⏰ Mon–Sat, 9am–7pm IST
       📍 Office address with Google Maps embed
       [Book a 30-min call] button → Calendly link
```

---

## GLOBAL SEO RULES FOR ALL PAGES

### Internal Linking Matrix
```
Every service page → links to all 4 location pages (city strip at bottom)
Every location page → links to all 6 service pages
Blog posts → minimum 3 internal links to relevant service/location pages
Homepage → links to all major landing pages
Case studies → link to relevant service + location page
```

### Schema Markup — Every Page Uses:
```
Homepage: LocalBusiness + Organization + WebSite + SiteLinksSearchBox
Location pages: LocalBusiness (city-specific) + BreadcrumbList
Service pages: Service + BreadcrumbList + FAQPage
Blog posts: Article + Author + BreadcrumbList + AggregateRating (where applicable)
About: Organization + Person (founder + team)
Pricing: PriceSpecification
Contact: ContactPage
FAQ sections: FAQPage (on all pages with FAQs)
```

### Meta Tag Template (all pages)
```
Title: [Primary Keyword] | Veloxis Global — [Year] (50-60 chars)
Meta Description: [Benefit] + [Agency name] + [Location] + [CTA] (145-155 chars)
Robots: index, follow
OG:Title, OG:Description, OG:Image (1200×630), OG:URL, OG:Type
Twitter: summary_large_image card
Canonical: self-referencing on every page
hreflang: en-IN for all pages
```

### Core Web Vitals Targets
```
LCP < 2.0s (hero image preloaded, WebP format, CDN)
CLS < 0.05 (explicit img dimensions, no layout shifts)
INP < 100ms (defer non-critical JS, partytown for analytics)
Lighthouse score target: 92+ Performance, 100 SEO, 95+ Accessibility
```

---
END OF WEBSITE STRUCTURE & WIREFRAME v2.0
