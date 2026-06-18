# VELOXIS GLOBAL — WEBSITE IMPLEMENTATION GUIDE
**Services & Industries Redesign (14 Services & 12 Industries)**

---

## 🚀 COMPLETED COMPONENT DETAILS (JUNE 2026)

- **Central Navbar**: `components/layout/Navbar.tsx` (rebuilt with hover mega-menus for categorized services and industries)
- **Menu Configurations**: `data/navbar-data.ts` (centralized menu groups)
- **Service Detail Pages Component**: `components/services/ServicePageTemplate.tsx` (reusable detail layout)
- **Industry Detail Pages Component**: `components/services/IndustryPageTemplate.tsx` (reusable detail layout)
- **Industry Data File**: `data/industries-data.ts` (12 researched industries content)
- **Services Hub Page**: `app/services/page.tsx` (lists 14 services from services-data.ts)
- **Industries Hub Page**: `app/industries/page.tsx` (lists 12 industries from industries-data.ts)

---

## 📋 PROJECT OVERVIEW

**Current State**: 6 services on homepage + individual service pages
**Target State**: 14 comprehensive service categories + sub-services architecture
**Timeline**: 2-4 weeks
**Impact**: Improved SEO, better customer clarity, increased lead quality

---

## 🗂️ NEW PAGE STRUCTURE

```
veloxisglobal.com/
├── / (homepage)
│   ├── Services Grid (14 cards)
│   └── CTA: "View All Services"
│
├── /services (main services hub)
│   ├── All 14 services in grid/list view
│   ├── Filter by price, industry, deliverables
│   └── Search functionality
│
├── /services/paid-advertising-performance-marketing
│   ├── Hero section
│   ├── Overview & why it matters
│   ├── 5 sub-service expandable sections
│   ├── Case studies (relevant)
│   ├── Pricing breakdown
│   ├── Client testimonials
│   ├── FAQ section
│   └── CTA: "Get Your Free Ad Audit"
│
├── /services/organic-growth-seo-mastery
├── /services/content-creative-services
├── /services/social-media-community-building
├── /services/web-development-technology
├── /services/email-marketing-automation
├── /services/ai-automation-systems
├── /services/brand-strategy-positioning
├── /services/analytics-tracking-attribution
├── /services/training-education
├── /services/ecommerce-catalog-services
├── /services/audits-consulting-strategy
├── /services/b2b-lead-generation-sales
└── /services/industry-specific-marketing
```

---

## 🎨 HOMEPAGE SERVICES SECTION (Redesign)

### Current Display:
```
Six cards in 2x3 grid with "View All Services" button
```

### Proposed Display Option 1: Tabbed Interface
```
[Paid Ads] [SEO] [Content] [Social] [Web Dev] [Email]
[AI] [Brand] [Analytics] [Training] [E-commerce] [Audits]

Show 6, "View All 14 Services →"
```

### Proposed Display Option 2: Interactive Category Selector
```
"What are you looking for?"

Popular Services:
- Meta Ads & Paid Advertising
- SEO & Organic Growth
- Website Development
- Content & Creative

View All 14 Services →
```

### Proposed Display Option 3: 2-Row Carousel
```
Row 1: [Paid Ads] [SEO] [Content] [Social] [Web Dev]
Row 2: [AI] [Brand] [Analytics] [Training] [All Others]

"Show All 14 Services →"
```

**Recommendation**: Option 1 (Tabbed) — allows navigation without leaving homepage

---

## 📄 INDIVIDUAL SERVICE PAGE TEMPLATE

### Page Structure:

```
1. HERO SECTION (300px height)
   ├── Icon
   ├── Title (e.g., "🎯 Paid Advertising & Performance Marketing")
   ├── Subtitle
   ├── Single CTA button
   └── Background color (brand-aligned)

2. OVERVIEW SECTION
   ├── What it is (1 paragraph)
   ├── Why it matters (3 bullet points)
   └── Who it's for (3 industries/use cases)

3. SUB-SERVICES CAROUSEL / ACCORDION
   ├── Expandable cards for each sub-service
   │   ├── Sub-service name
   │   ├── 7-9 key deliverables (bullet list)
   │   └── Icon/visual
   └── Smooth expand/collapse animation

4. KEY RESULTS / ACHIEVEMENTS (if applicable)
   ├── Stat 1: "340% traffic increase"
   ├── Stat 2: "20+ keywords ranked"
   └── Stat 3: "₹650 cost-per-lead"

5. WHO IT'S BEST FOR
   ├── 4 industry cards
   ├── Use case description per industry
   └── Icon representation

6. PRICING SECTION
   ├── Service-specific pricing
   ├── Pricing breakdown table
   │   ├── Starter: ₹X
   │   ├── Growth: ₹Y
   │   └── Premium: ₹Z
   └── "Schedule a consultation" CTA

7. CASE STUDIES / SUCCESS STORIES
   ├── 2-3 relevant case study cards
   ├── Result preview
   ├── Client name & industry
   └── "Read Full Case Study" link

8. CLIENT TESTIMONIALS
   ├── 3-4 review cards
   ├── Star rating
   ├── Quote
   ├── Client name & company
   └── Avatar

9. FAQ SECTION
   ├── Accordion format
   ├── 5-8 common questions
   │   ├── "What's included?"
   │   ├── "How long does it take?"
   │   ├── "Can I cancel?"
   │   ├── "Do you work with [industry]?"
   │   └── etc.
   └── Expandable answers

10. FINAL CTA SECTION
    ├── Bold headline: "Ready to [service outcome]?"
    ├── Description (1-2 sentences)
    ├── Primary CTA: "Get Your Free Audit" / "Schedule Consultation"
    └── Secondary CTA: "See Our Case Studies"

11. RELATED SERVICES
    ├── 3-4 related service cards
    ├── "Often paired with..." text
    └── Links to other service pages

12. FOOTER
    ├── Quick links
    ├── Contact info
    └── Social links
```

---

## 🔗 INTERNAL LINKING STRATEGY

Each service page should link to:

1. **Related Services**
   - Paid Advertising → Analytics, Brand Strategy
   - SEO → Content, Analytics, Brand Strategy
   - Content → SEO, Email Marketing, Social Media
   - etc.

2. **Case Studies**
   - Filter case studies by service type
   - Link most relevant 2-3 on each page

3. **Blog Posts**
   - Link to blog posts related to that service
   - E.g., on SEO page, link to "SEO in 2026" article

4. **Location Pages**
   - Link to Delhi/Noida/Lucknow/Kanpur pages
   - These pages should show "Available Services"

---

## 🎯 SERVICES HUB PAGE (/services)

### Layout:

```
1. HERO
   Title: "Everything Your Business Needs to Dominate Digital in 2026"
   Subtitle: "14 specialized services. One unified strategy. Consistent growth."

2. SEARCH & FILTER BAR
   ├── Search box: "Find a service..."
   ├── Filter buttons:
   │   ├── By Budget: ₹0-20K | ₹20K-50K | ₹50K-150K | ₹150K+
   │   ├── By Type: Ads | SEO | Content | Social | Dev | Email | AI | Brand | Analytics | Training | Ecommerce | Audits | B2B | Industry
   │   ├── By Goal: Lead Generation | Traffic | Sales | Automation | Strategy | Training
   │   └── Sort by: Relevance | Price (Low-High) | Price (High-Low)

3. SERVICES GRID (14 Cards)
   Each card shows:
   ├── Icon & Title
   ├── Subtitle
   ├── 3-4 key deliverables
   ├── Price range
   ├── "Learn More →" button
   └── Hover effect: expand slightly, show "See pricing"

4. SERVICES COMPARISON TABLE (Optional)
   ├── Service name
   ├── Price range
   ├── Deliverables count
   ├── Suitable for (industries)
   └── "See Details" button

5. FAQ: "WHICH SERVICE DO I NEED?"
   ├── I want to rank on Google → SEO
   ├── I want to generate leads → Paid Ads / B2B Lead Gen
   ├── I need a website → Web Development
   ├── I want to automate workflows → AI & Automation
   └── etc.

6. PREMIUM PACKAGES SECTION
   ├── 6 high-ticket package cards
   ├── Price, scope, duration
   └── "Discuss Package" CTA

7. SERVICE TIERS (Pricing Breakdown)
   ├── 5 client tier cards
   │   ├── Tier name
   │   ├── Price range
   │   ├── Key benefits
   │   └── "Choose this tier"
   └── Comparison feature matrix

8. FINAL CTA
   "Not sure which service you need?"
   → "Get a free consultation"
   → "Talk to our Director"
```

---

## 🎨 DESIGN SPECIFICATIONS

### Color Scheme:
- **Hero Icon Background**: Gradient or solid matching service type
  - Paid Ads: Teal/Blue gradient
  - SEO: Green gradient
  - Content: Amber/Orange gradient
  - Social: Purple/Pink gradient
  - Dev: Navy/Indigo gradient
  - Email: Red/Orange gradient
  - AI: Cyan/Blue gradient
  - Brand: Gold/Amber gradient
  - Analytics: Purple gradient
  - Training: Blue gradient
  - E-commerce: Green gradient
  - Audits: Blue gradient
  - B2B: Indigo gradient
  - Industry: Gray gradient

### Typography:
- **Title**: Bebas Neue (if available) or Space Grotesk Bold
- **Subtitle**: DM Sans Regular, 18px
- **Body**: Inter Regular, 16px
- **Buttons**: Space Grotesk Bold, 14px

### Icons:
- Use emoji from service titles (🎯, 🔍, ✍️, etc.)
- Or create custom SVG icons

### Spacing:
- Section padding: 60px vertical, 40px horizontal (desktop)
- Card gap: 24px
- Accordion margin: 16px between items

### Animation:
- Sub-service accordion: 300ms ease-in-out
- Hover effects on cards: 200ms, slight scale + shadow
- CTA buttons: 150ms background color transition

---

## 📊 SEO OPTIMIZATIONS

### Meta Tags (Per Service Page):

```
Title Tag: "[Service Name] | Veloxis Global — Results-Driven Digital Marketing"
Meta Description: "[Service] with certified specialists. [Key benefit]. No fluff, only results. Free consultation."

Example:
Title: "Meta Ads & Performance Marketing | Veloxis Global"
Description: "Expert Meta Ads management across Facebook & Instagram. Certified specialists, proven ROAS. No lock-in. Free audit today."
```

### Schema Markup (Per Service Page):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "provider": {
    "@type": "Organization",
    "name": "Veloxis Global",
    "url": "https://veloxisglobal.com"
  },
  "description": "[Service description]",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "[Price range]",
    "pricingModel": "Monthly retainer"
  },
  "areaServed": ["IN"],
  "serviceType": "[Category]"
}
```

### Internal Linking:
- Each service page links to 3-4 related services
- Services hub links to all individual pages
- Blog posts link to relevant service pages
- Location pages link to available services

### URL Structure:
- Slug format: `/services/[kebab-case-title]`
- Examples:
  - `/services/paid-advertising-performance-marketing`
  - `/services/organic-growth-seo-mastery`
  - `/services/ai-automation-systems`

---

## 🚀 IMPLEMENTATION CHECKLIST

### Phase 1: Preparation (Week 1)
- [ ] Approve service taxonomy
- [ ] Confirm pricing tiers
- [ ] Gather case studies (relevant to each service)
- [ ] Collect testimonials (categorize by service)
- [ ] Create icon/visual strategy
- [ ] Write sub-service descriptions
- [ ] Create FAQ content per service

### Phase 2: Development (Week 2-3)
- [ ] Build `/services` hub page component
- [ ] Create individual service page template
- [ ] Build sub-service accordion/carousel component
- [ ] Implement pricing table component
- [ ] Add search/filter functionality
- [ ] Create related services component
- [ ] Implement internal linking structure
- [ ] Add schema markup
- [ ] Test responsive design (mobile, tablet, desktop)

### Phase 3: Content & SEO (Week 3-4)
- [ ] Write individual service page content
- [ ] Create FAQ content
- [ ] Write meta descriptions
- [ ] Optimize page titles
- [ ] Add image alt texts
- [ ] Create testimonial quotes
- [ ] Link from blog to services
- [ ] Link from homepage to new services
- [ ] Test internal links

### Phase 4: Launch & Optimization (Week 4+)
- [ ] Set up Google Search Console monitoring
- [ ] Monitor rankings for service keywords
- [ ] Track click-through rates (CTR) from SERPs
- [ ] Monitor page load speeds
- [ ] A/B test CTAs ("Get Free Audit" vs "Schedule Consultation")
- [ ] Track conversion rates per service
- [ ] Optimize based on performance data

---

## 📈 TRACKING & ANALYTICS

### Google Analytics 4 Events to Track:

```
1. Service Page View
   - Event: page_view
   - Parameter: page_path = /services/[service-slug]

2. CTA Click (Service Page)
   - Event: click_button
   - Parameters:
     - button_text = CTA text
     - button_type = primary / secondary
     - service_page = service slug

3. Sub-service Expansion
   - Event: expand_accordion
   - Parameters:
     - subservice_name
     - service_page

4. Related Service Click
   - Event: click_related_service
   - Parameters:
     - source_service
     - destination_service

5. Testimonial Click
   - Event: click_testimonial
   - Parameters:
     - testimonial_index

6. Case Study Click
   - Event: click_case_study
   - Parameters:
     - case_study_title
     - service_page

7. FAQ Expansion
   - Event: expand_faq
   - Parameters:
     - faq_question_index
     - service_page

8. Filter/Search (Services Hub)
   - Event: search_or_filter
   - Parameters:
     - filter_type (budget / type / goal)
     - filter_value
```

### Dashboard KPIs:

Per service:
- Page views
- Unique users
- Avg. time on page
- Bounce rate
- Conversion rate (CTA clicks / visitors)
- Top entry device (mobile/desktop)
- Top traffic source

---

## 💡 ADDITIONAL RECOMMENDATIONS

### 1. Chatbot Integration
Add a live chat widget asking:
"What service are you looking for?"
- Lead gen? → B2B Lead Gen page
- Want to rank on Google? → SEO page
- Need a website? → Web Dev page
- etc.

### 2. Interactive Service Quiz
"Which service is right for your business?"
- 5 questions
- Recommends 2-3 services
- Links to those service pages

### 3. Service Comparison Matrix
Allow users to compare 2-3 services side-by-side
- Pricing
- Deliverables
- Timeline
- Best for (industries)

### 4. "Build Your Package" Tool
Allow customers to select multiple services
- Add services to cart
- See combined price
- Request custom quote

### 5. Video Testimonials
Per service:
- 30-60 second client testimonial video
- Name, company, results
- Embedded on service page

### 6. Live Proof of Results
Real-time dashboard showing:
- "X leads generated today"
- "Y keywords ranked this month"
- "Z revenue tracked"

---

## 🔧 TECHNICAL STACK

### Frontend:
- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Components**: React
- **Icons**: React Icons + custom SVG

### Data Structure:
- **Source**: `/data/services.json` (use provided JSON file)
- **Route**: `/app/services/[[...slug]]/page.tsx`

### Component Tree:
```
/services
├── ServicesLayout
│   ├── ServicesHub (if no slug)
│   │   ├── SearchBar
│   │   ├── FilterButtons
│   │   ├── ServicesGrid
│   │   │   └── ServiceCard (×14)
│   │   ├── ServicesComparisonTable
│   │   ├── PremiumPackages
│   │   └── FAQ
│   │
│   └── ServiceDetail (if slug provided)
│       ├── ServiceHero
│       ├── ServiceOverview
│       ├── SubservicesAccordion
│       ├── KeyResults
│       ├── BestFor
│       ├── PricingSection
│       ├── CaseStudies
│       ├── Testimonials
│       ├── FAQ
│       ├── FinalCTA
│       ├── RelatedServices
│       └── Footer
```

### API/Data Fetching:
- Use static JSON import or Supabase (if you want dynamic updates)
- Suggested: Static JSON for faster load times + monthly updates

---

## 📱 MOBILE OPTIMIZATION

### Responsive Breakpoints:
- Mobile (< 640px): 1 column layout
- Tablet (640px - 1024px): 2 column layout
- Desktop (> 1024px): 3 column layout

### Mobile-Specific:
- Stack tabs vertically or use dropdown
- Collapse sub-services accordion by default
- Full-width buttons
- Simplified pricing table (stack vertically)
- Reduced image sizes
- Touch-friendly tap targets (48px minimum)

---

## 🎯 LAUNCH STRATEGY

### Week 1: Soft Launch
- Deploy to staging environment
- Internal testing & QA
- Get feedback from team
- Fix issues & refinements

### Week 2: Gradual Rollout
- Deploy to production
- Monitor performance & errors
- Update sitemap
- Submit to Google Search Console
- Monitor rankings

### Week 3-4: Promotion
- Email to existing clients: "Explore our expanded services"
- LinkedIn post: "We've expanded to 14 specialized services"
- Blog post: "What Veloxis Global Now Offers" (link to services)
- Update homepage with new services

---

## 📞 NEXT STEPS

1. **Review & Approval**
   - Review this guide with your team
   - Approve service taxonomy
   - Finalize pricing

2. **Content Creation**
   - Write service descriptions (if not already done)
   - Create FAQ per service
   - Gather testimonials & case studies

3. **Design Decisions**
   - Choose color scheme per service
   - Finalize icon/visual strategy
   - Create design mockups

4. **Development**
   - Set up routes & components
   - Implement JSON data structure
   - Build responsive layouts
   - Add interactivity (accordions, filters)

5. **Testing & QA**
   - Test all links
   - Test responsiveness
   - Test analytics events
   - Performance testing

6. **Launch**
   - Deploy to production
   - Monitor performance
   - Track metrics & optimize

---

**Questions? Let's discuss:**
- muddassirali@gmail.com
- +91-8887620727
