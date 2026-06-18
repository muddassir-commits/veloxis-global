export interface IndustryChallenge {
  title: string;
  desc: string;
}

export interface IndustryStrategy {
  title: string;
  desc: string;
}

export interface RecommendedService {
  title: string;
  slug: string;
  emoji: string;
}

export interface IndustryStat {
  label: string;
  value: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryCaseSummary {
  clientArea: string;
  timeframe: string;
  outcome: string;
  roas: string;
  caseStudyLink?: string;
  caseStudyTitle?: string;
}

export interface IndustryData {
  slug: string;
  title: string;
  emoji: string;
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  caseSummary: IndustryCaseSummary;
  challenges: IndustryChallenge[];
  strategies: IndustryStrategy[];
  recommendedServices: RecommendedService[];
  stats: IndustryStat[];
  faqs: IndustryFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const industriesData: IndustryData[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    emoji: "🏠",
    heroBadge: "REAL ESTATE ACCELERATION",
    heroTitle: "Marketing Built for Premium Real Estate Developers",
    heroDescription: "Stop paying for shared, low-intent portals. Veloxis Global designs dedicated lead capture funnels, localized search optimization (SEO), and conversion-optimized Google Ads that drive direct inquiries and scheduled site visits.",
    caseSummary: {
      clientArea: "Delhi NCR Developer",
      timeframe: "6 Months Campaign",
      outcome: "35,000+ organic visitors monthly, 3.1x lead volume boost",
      roas: "Verified 5.2x ROAS on Google Search campaigns",
      caseStudyLink: "/case-studies/delhi-real-estate-developer",
      caseStudyTitle: "Read Detailed Delhi Case Study"
    },
    challenges: [
      {
        title: "High Cost Per Lead (CPL) on Portals",
        desc: "Listing portals resell the same leads to 5-10 developers, sparking price wars and decreasing conversion quality."
      },
      {
        title: "Low Intent / Broker Spam",
        desc: "Many online lead forms collect invalid phone numbers or requests from brokers instead of genuine, qualified buyers."
      },
      {
        title: "Long Sales Cycles & No Nurturing",
        desc: "Property purchases require multiple touchpoints, but developers often lack automated email or WhatsApp follow-up sequences."
      }
    ],
    strategies: [
      {
        title: "Hyper-Local Map Ranks",
        desc: "Rank when buyers search 'luxury apartments near me' or 'commercial projects in Noida.' We optimize GBP maps pack listings and local citations."
      },
      {
        title: "Conversion-Optimized Landing Pages",
        desc: "Fast-loading mobile landing pages designed to capture broker and direct buyer details through secure React validations."
      },
      {
        title: "Google Search Intent Target",
        desc: "Filter out competitors and window-shoppers. We manage exact-match search ad budgets to capture high-net-worth buyers active on search."
      }
    ],
    recommendedServices: [
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" },
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "B2B Lead Gen", slug: "b2b-lead-generation-sales", emoji: "💼" }
    ],
    stats: [
      { label: "Increase in Broker Inquiries", value: "340%" },
      { label: "Average Cost Per Lead Reduction", value: "42%" },
      { label: "Site Visit Conversion Rate", value: "18.4%" }
    ],
    faqs: [
      {
        question: "How do you filter out brokers from lead campaigns?",
        answer: "We employ negative-audience targeting to exclude competitor real estate brokers, add mandatory specific dropdowns in our forms (e.g., budget range, timing to buy), and run SMS/WhatsApp verification blocks."
      },
      {
        question: "What is your setup timeline for real estate ads?",
        answer: "Typically, it takes 10 to 14 working days. This includes building custom landing pages, setting up tracking pixels, conducting search keyword research, and acquiring approval on campaign copy."
      }
    ],
    metaTitle: "Real Estate Developer Marketing Agency | Veloxis Global",
    metaDescription: "Scale qualified property leads and direct broker site visits in Delhi NCR, Noida, and Lucknow. View our real estate marketing framework online today."
  },
  {
    slug: "saas",
    title: "SaaS Marketing",
    emoji: "💻",
    heroBadge: "SaaS SCALE SYSTEM",
    heroTitle: "B2B SaaS Growth Engineered for Demo Bookings & Product Sign-ups",
    heroDescription: "Acquire high-intent trial users and enterprise demo requests. We leverage search engine positioning, targeted LinkedIn ads, and interactive content funnels to lower your Customer Acquisition Cost (CAC).",
    caseSummary: {
      clientArea: "Enterprise HR Tech SaaS",
      timeframe: "8 Months Campaign",
      outcome: "280+ Demo Bookings monthly, 4.5x expansion in organic traffic",
      roas: "2.8x Pipeline ROI on LinkedIn Lead Ads",
      caseStudyLink: "/case-studies/hr-tech-saas",
      caseStudyTitle: "Read SaaS Growth Case Study"
    },
    challenges: [
      {
        title: "Skyrocketing Ad Platform CAC",
        desc: "Keywords like 'CRM software' are incredibly expensive. Paid campaigns waste budgets on users who sign up but immediately churn."
      },
      {
        title: "Product-Benefit Communication Gap",
        desc: "SaaS companies often describe features in technical jargon instead of highlighting the direct business outcomes for decision-makers."
      },
      {
        title: "High Trial-to-Paid Churn",
        desc: "Acquiring signups is useless if the onboarding flows fail to guide the user to their first 'Aha!' moment."
      }
    ],
    strategies: [
      {
        title: "Topical Authority SEO",
        desc: "Map out the user's search intent across informational, investigatory, and commercial keywords to rank for competitive terms."
      },
      {
        title: "Account-Based Marketing (ABM)",
        desc: "Deploy highly personalized ads targeting specific target accounts, job titles, and senior executives on LinkedIn."
      },
      {
        title: "Interactive Funnel Optimization",
        desc: "Develop interactive free tools (ROI calculators, templates) that collect lead data and demonstrate software value instantly."
      }
    ],
    recommendedServices: [
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" },
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "AI & Automation", slug: "ai-automation-systems", emoji: "🤖" }
    ],
    stats: [
      { label: "Cost-Per-Acquisition Reduction", value: "31%" },
      { label: "Increase in Demo Booking Rate", value: "145%" },
      { label: "SEO Inbound Revenue Lift", value: "5.3x" }
    ],
    faqs: [
      {
        question: "Do you focus on product-led growth (PLG) or sales-led growth?",
        answer: "We support both. For PLG, we focus on self-serve sign-ups, activation triggers, and email nurture flows. For sales-led growth, we build enterprise-intent pipelines using LinkedIn ads and gated content tools."
      },
      {
        question: "How do you track software signup attribution?",
        answer: "We deploy server-side tracking (GA4 API, Meta CAPI) alongside tools like Segment or HubSpot to connect specific ad impressions to customer upgrades."
      }
    ],
    metaTitle: "B2B SaaS Growth & Marketing Agency | Veloxis Global",
    metaDescription: "Accelerate your B2B SaaS trial signups and enterprise demo pipelines. We lower CAC and scale MRR with targeted SEO and outbound LinkedIn models."
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    emoji: "🏥",
    heroBadge: "HEALTHCARE MARKETING SYSTEMS",
    heroTitle: "Scale Patient Appointments & Inbound Clinic Consultations",
    heroDescription: "Ethical, compliant, and highly effective digital marketing for multi-specialty hospitals, aesthetic clinics, and regional wellness centers. We secure high-intent patient inquiries through Google Maps and local SEO.",
    caseSummary: {
      clientArea: "Aesthetic & Dental Clinic Chain",
      timeframe: "4 Months Campaign",
      outcome: "1,200+ New Patient Bookings, #1 Map Rank for regional queries",
      roas: "6.8x ROI on Local Search Ad campaigns",
      caseStudyLink: "/case-studies/healthcare-clinic",
      caseStudyTitle: "Read Clinic Case Study"
    },
    challenges: [
      {
        title: "Strict Medical Ad Policies",
        desc: "Google and Meta ban ads containing personal health claims, 'before/after' photos without context, or misleading guarantees."
      },
      {
        title: "High No-Show Rates",
        desc: "Clinics struggle with patient bookings that fail to show up due to lack of automated WhatsApp reminders and confirmations."
      },
      {
        title: "Reputation & Review Friction",
        desc: "Healthcare decisions rely heavily on trust, and a few negative reviews on Google Maps can devastate appointment volumes."
      }
    ],
    strategies: [
      {
        title: "Google Map Pack Dominance",
        desc: "Optimize local clinic profiles to appear whenever local searches occur for specific medical procedures and specialties."
      },
      {
        title: "Patient Trust Content Funnel",
        desc: "Draft informative guides, medical review videos, and FAQ-driven blog posts that build trust and address patient concerns."
      },
      {
        title: "WhatsApp Booking Automation",
        desc: "Implement automated scheduling chatbots that send instant booking confirmations, location details, and pre-visit guidelines."
      }
    ],
    recommendedServices: [
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "AI & Automation", slug: "ai-automation-systems", emoji: "🤖" },
      { title: "Content Marketing", slug: "content-marketing", emoji: "✍️" }
    ],
    stats: [
      { label: "Map Directory Phone Calls", value: "+210%" },
      { label: "Patient Booking Cost (CPA)", value: "-38%" },
      { label: "Appointment Attendance Rate", value: "92%" }
    ],
    faqs: [
      {
        question: "How do you navigate HIPAA and medical advertisement regulations?",
        answer: "We ensure all medical claims are backed by scientific facts, avoid using prohibited vocabulary in ad copies, and deploy secure landing pages that protect patient privacy."
      },
      {
        question: "Do you integrate with clinic management software?",
        answer: "Yes, we integrate lead capture systems with popular healthcare CRMs and scheduling tools like Practo, Cliniko, and custom database APIs."
      }
    ],
    metaTitle: "Healthcare & Clinic Marketing Agency | Veloxis Global",
    metaDescription: "Grow doctor appointments and clinic visits with local maps SEO, Google Search campaigns, and automated WhatsApp follow-up structures."
  },
  {
    slug: "coaching-consulting",
    title: "Coaching & Consulting",
    emoji: "🎯",
    heroBadge: "PERSONAL BRAND SCALE SYSTEM",
    heroTitle: "Enroll High-Ticket Clients for Coaches & Professional Consultants",
    heroDescription: "Build authority and launch high-ticket student enrollment pipelines. We develop customized Video Sales Letters (VSLs), automated webinars, and lead campaigns that pre-sell your audience before the call.",
    caseSummary: {
      clientArea: "Business Consultant",
      timeframe: "3 Months Campaign",
      outcome: "120+ High-Ticket Sales, 420+ webinar applications",
      roas: "4.8x ROAS on Meta Video Ads",
      caseStudyLink: "/case-studies/consultant-brand",
      caseStudyTitle: "Read Personal Brand Case Study"
    },
    challenges: [
      {
        title: "High Sales Call Burnout",
        desc: "Coaches spend hours talking to unqualified prospects who cannot afford high-ticket packages, wasting valuable time."
      },
      {
        title: "Personal Brand Commoditization",
        desc: "Without unique positioning, consultants look identical to hundreds of competitors posting generic content on social channels."
      },
      {
        title: "Unpredictable Lead Inflow",
        desc: "Relying purely on organic posts creates a 'feast-or-famine' cycle where student intakes are unpredictable."
      }
    ],
    strategies: [
      {
        title: "Video Sales Letter (VSL) Funnels",
        desc: "Create 10-15 minute educational videos that explain your framework, filter out low-intent users, and prompt bookings."
      },
      {
        title: "Premium Content Authority",
        desc: "Write detailed guides on LinkedIn and Medium targeting high-intent business searches to establish market expertise."
      },
      {
        title: "Dynamic Retargeting Ads",
        desc: "Serve testimonials, case studies, and framework walkthrough ads to individuals who visited the booking page but didn't schedule."
      }
    ],
    recommendedServices: [
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" },
      { title: "Brand Strategy", slug: "brand-strategy-positioning", emoji: "🏆" },
      { title: "Email Marketing", slug: "email-marketing", emoji: "✉️" }
    ],
    stats: [
      { label: "Qualified Booking Rate Boost", value: "180%" },
      { label: "Average Program Price Increase", value: "2.2x" },
      { label: "Ad-to-Appointment Return", value: "5.1x" }
    ],
    faqs: [
      {
        question: "What platforms work best for high-ticket coaching leads?",
        answer: "For professional and business coaching, LinkedIn and YouTube Search Ads yield premium leads. For lifestyle, fitness, and career coaching, Meta (Instagram) and TikTok generate the best volume."
      },
      {
        question: "Can you help me design and write my webinar slides?",
        answer: "Yes, we script and structure high-converting webinar frameworks, configure the landing pages, integrate calendars, and setup follow-up emails."
      }
    ],
    metaTitle: "Marketing Agency for Coaches & Consultants | Veloxis Global",
    metaDescription: "Get more high-ticket clients with automated VSL sales funnels, paid social campaigns, and authority-building personal brand strategies."
  },
  {
    slug: "education",
    title: "Education & EdTech",
    emoji: "📚",
    heroBadge: "EDUCATION ADMISSION SYSTEMS",
    heroTitle: "Scale Student Enrollments & Direct Course Registrations",
    heroDescription: "Drive admission pipelines for universities, colleges, and EdTech platforms. We build student acquisition campaigns that capture interest and route details to your admission counselors.",
    caseSummary: {
      clientArea: "Executive MBA EdTech Platform",
      timeframe: "12 Months Campaign",
      outcome: "4,800+ Verified Course Registrations, lower cost-per-inquiry",
      roas: "3.7x ROAS on Program Fees",
      caseStudyLink: "/case-studies/edtech-enrollment",
      caseStudyTitle: "Read EdTech Case Study"
    },
    challenges: [
      {
        title: "Intense Cost Per Lead (CPL) Pressures",
        desc: "EdTech space features massive competition, inflating bidding costs on keywords like 'MBA program' or 'coding class'."
      },
      {
        title: "Inquiry to Enrollment Drop",
        desc: "Students sign up to download a brochure but drop off before completing the application, resulting in a cold pipeline."
      },
      {
        title: "Lack of Parental Trust",
        desc: "For traditional colleges, the decision-maker is often the parent, needing a different marketing strategy than the student."
      }
    ],
    strategies: [
      {
        title: "Intent-Based Ad Campaigns",
        desc: "Deploy Google Search campaigns targeting active queries for course applications and career switch terms."
      },
      {
        title: "Brochure-to-Call Automations",
        desc: "Send catalog brochures instantly on WhatsApp and immediately alert sales representatives when a prospect downloads."
      },
      {
        title: "Alumni Success Social Proof",
        desc: "Develop UGC videos, salary-hike case studies, and career outcome content to establish institutional credibility."
      }
    ],
    recommendedServices: [
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" },
      { title: "B2B Lead Gen", slug: "b2b-lead-generation-sales", emoji: "💼" },
      { title: "Content Marketing", slug: "content-marketing", emoji: "✍️" }
    ],
    stats: [
      { label: "Brochure Downloads scaled", value: "320%" },
      { label: "Counselling Team Connection Rate", value: "+84%" },
      { label: "Cost-Per-Admission Drop", value: "-27%" }
    ],
    faqs: [
      {
        question: "How do you coordinate digital ads with our admissions team?",
        answer: "We integrate lead pipelines directly with CRM systems (HubSpot, LeadSquared, custom databases) so your team receives automated alerts within 60 seconds."
      },
      {
        question: "Do you run campaigns for international student acquisition?",
        answer: "Yes, we structure multi-regional campaigns optimized for specific geographic targets, language preferences, and visa application terms."
      }
    ],
    metaTitle: "EdTech & Education Marketing Agency | Veloxis Global",
    metaDescription: "Boost student admissions for schools, colleges, and EdTech training platforms with intent-focused Google Ads and WhatsApp integrations."
  },
  {
    slug: "restaurant-food",
    title: "Restaurant & Food",
    emoji: "🍔",
    heroBadge: "RESTAURANT VISIBILITY SYSTEM",
    heroTitle: "Scale Direct Food Orders & Grow Restaurant Foot-Traffic",
    heroDescription: "Reduce reliance on high-commission food apps. We build hyper-local campaigns, optimize Google Maps ranks, and implement WhatsApp ordering systems that secure direct, repeat customers.",
    caseSummary: {
      clientArea: "Multi-Outlet Premium Cloud Kitchen",
      timeframe: "5 Months Campaign",
      outcome: "22,000+ Direct Website Orders, 18,000+ loyal database growth",
      roas: "4.2x ROAS on Local Meta Ads",
      caseStudyLink: "/case-studies/restaurant-group",
      caseStudyTitle: "Read Food Order Case Study"
    },
    challenges: [
      {
        title: "Platform Commissions Drain Profit Margin",
        desc: "Third-party delivery platforms take 25% to 35% of order values, wiping out margins for kitchen operators."
      },
      {
        title: "Zero Ownership of Customer Data",
        desc: "Delivery apps never share customer names, emails, or phone numbers, preventing restaurants from running retention marketing."
      },
      {
        title: "Weak Local Map Visibility",
        desc: "Failing to appear in Google Maps' local 3-pack when customers search 'best pizza near me' loses hundreds of walk-ins."
      }
    ],
    strategies: [
      {
        title: "Google Local Search Pack Ranks",
        desc: "Rank your physical locations at the top of local maps by optimizing reviews, business descriptions, and menus."
      },
      {
        title: "WhatsApp Ordering System",
        desc: "Deploy WhatsApp Business chatbots that let users browse menus and place orders without leaving the chat app."
      },
      {
        title: "Hyper-Local Radius Social Ads",
        desc: "Show appetizing video ads to consumers located within a 3km radius during peak lunch and dinner hours."
      }
    ],
    recommendedServices: [
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "AI & Automation", slug: "ai-automation-systems", emoji: "🤖" },
      { title: "Email Marketing", slug: "email-marketing", emoji: "✉️" }
    ],
    stats: [
      { label: "Commission-Free Orders Lift", value: "+148%" },
      { label: "Customer Acquisition Cost", value: "₹45 average" },
      { label: "Map Views to Store Directions", value: "3.2x" }
    ],
    faqs: [
      {
        question: "Can we build a loyal customer list to drive repeat orders?",
        answer: "Yes. By sending orders through direct landing pages or WhatsApp, we capture phone numbers. We then build automated retention sequences using discounts and festival alerts."
      },
      {
        question: "Do you manage influencer food marketing?",
        answer: "We assist with strategy and review briefing materials for local food influencers, coordinating campaigns alongside local digital ads."
      }
    ],
    metaTitle: "Restaurant & Cloud Kitchen Marketing | Veloxis Global",
    metaDescription: "Lower third-party app commissions and grow direct-to-consumer food orders. We optimize local SEO map rankings and drive store traffic."
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    emoji: "🛒",
    heroBadge: "E-COMMERCE ROAS SCALE",
    heroTitle: "Scale Direct-to-Consumer (D2C) Brands & Shop Products Online",
    heroDescription: "Scale your e-commerce store with high-performance Google Shopping campaigns, Meta Advantage+ catalog ads, and automated email flows that convert abandoned carts into repeat revenue.",
    caseSummary: {
      clientArea: "D2C Sustainable Fashion Brand",
      timeframe: "9 Months Campaign",
      outcome: "₹1.2 Crore Online Sales, 4.1x average campaign ROAS",
      roas: "4.8x ROAS on Meta Catalog Campaigns",
      caseStudyLink: "/case-studies/d2c-fashion-brand",
      caseStudyTitle: "Read D2C E-commerce Case Study"
    },
    challenges: [
      {
        title: "Ad Creative Fatigue & Ad Spend Waste",
        desc: "E-commerce ad costs are volatile. Using static product images without engaging video hooks results in falling ROAS."
      },
      {
        title: "High Abandoned Cart Rates",
        desc: "Over 70% of shoppers add items to their carts but exit without buying due to unexpected shipping fees or lack of checkout friction triggers."
      },
      {
        title: "Thin Profit Margins on First Purchase",
        desc: "High acquisition costs eat up margins unless you maximize the Lifetime Value (LTV) through automated email sequences."
      }
    ],
    strategies: [
      {
        title: "Advantage+ Shopping & Catalog Ads",
        desc: "Configure dynamic catalogs that show personalized products to users who browsed specific collections."
      },
      {
        title: "Klaviyo Email Flow Automations",
        desc: "Build automated email flow pipelines: Welcome series, Abandoned Cart reminders, Post-purchase updates, and Win-back offers."
      },
      {
        title: "Conversion-Focused UX Audits",
        desc: "Analyze your Shopify or WooCommerce store speed, product page layouts, and checkouts to resolve purchase friction."
      }
    ],
    recommendedServices: [
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" },
      { title: "Email Marketing", slug: "email-marketing", emoji: "✉️" },
      { title: "E-commerce Services", slug: "ecommerce-catalog-services", emoji: "🛒" }
    ],
    stats: [
      { label: "Monthly Web Store Sales", value: "+380%" },
      { label: "Abandoned Cart Recovery Rate", value: "24.6%" },
      { label: "Customer Lifetime Value (LTV)", value: "+45%" }
    ],
    faqs: [
      {
        question: "Do you specialize in Shopify marketing?",
        answer: "Yes, we focus on Shopify stores. We set up data tracking integrations, structure conversion catalogs, design landing pages, and configure Klaviyo email systems."
      },
      {
        question: "What tracking setup do you use for iOS 14+ ad drop-offs?",
        answer: "We deploy server-side tracking using Meta Conversions API (CAPI) and Google Analytics 4, ensuring clean event attribution and custom audience tracking."
      }
    ],
    metaTitle: "D2C E-commerce Growth & Marketing Agency | Veloxis Global",
    metaDescription: "Scale Shopify and WooCommerce online store sales. We optimize Meta catalog ads, Google Performance Max campaigns, and Klaviyo email flows."
  },
  {
    slug: "fitness-wellness",
    title: "Fitness & Wellness",
    emoji: "💪",
    heroBadge: "FITNESS REVENUE SYSTEM",
    heroTitle: "Drive Gym Memberships & Local Wellness Studio Bookings",
    heroDescription: "Scale member sign-ups and wellness program consultations. We leverage hyper-local search marketing, community video ads, and instant WhatsApp booking systems to build a predictable client database.",
    caseSummary: {
      clientArea: "Premium Yoga & Wellness Studio Chain",
      timeframe: "4 Months Campaign",
      outcome: "620+ Active Monthly Subscriptions, top local map positions",
      roas: "5.4x ROI on local lead-gen ads",
      caseStudyLink: "/case-studies/wellness-studio",
      caseStudyTitle: "Read Gym Growth Case Study"
    },
    challenges: [
      {
        title: "High Seasonal Member Churn",
        desc: "Gym memberships spike in January and drop in summer. Studios lack a structured referral engine or automated email newsletters to maintain client volume."
      },
      {
        title: "Weak Local Search Visibility",
        desc: "Failing to appear in Google Maps' local 3-pack when customers search 'best yoga near me' loses hundreds of local walk-ins."
      },
      {
        title: "No-Show Rates on Trial Passes",
        desc: "People sign up for free trial passes but fail to show up due to lack of automated WhatsApp reminders and confirmations."
      }
    ],
    strategies: [
      {
        title: "Google Map Pack Dominance",
        desc: "Optimize local clinic and studio profiles to appear whenever local searches occur for fitness classes and memberships."
      },
      {
        title: "WhatsApp Trial Pass Automations",
        desc: "Deliver passes via SMS/WhatsApp, trigger follow-ups, and send directions to reduce no-show rates."
      },
      {
        title: "Community Video Social Ads",
        desc: "Build engaging video ads demonstrating studio culture, client testimonials, and trainer expertise to build local trust."
      }
    ],
    recommendedServices: [
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "AI & Automation", slug: "ai-automation-systems", emoji: "🤖" },
      { title: "Social Media Mktg", slug: "social-media-marketing", emoji: "📱" }
    ],
    stats: [
      { label: "Trial Class Bookings", value: "+240%" },
      { label: "Map Views to Studio Directions", value: "4.1x" },
      { label: "Lead-to-Member Conversion", value: "28.5%" }
    ],
    faqs: [
      {
        question: "Can we build a loyal customer list to drive repeat orders?",
        answer: "Yes. By sending orders through direct landing pages or WhatsApp, we capture phone numbers. We then build automated retention sequences using discounts and festival alerts."
      },
      {
        question: "Do you manage influencer food marketing?",
        answer: "We assist with strategy and review briefing materials for local food influencers, coordinating campaigns alongside local digital ads."
      }
    ],
    metaTitle: "Gym & Fitness Studio Marketing Agency | Veloxis Global",
    metaDescription: "Grow gym memberships, yoga studio sign-ups, and personal trainer inquiries. Hyper-local maps SEO and WhatsApp booking automations."
  },
  {
    slug: "msme-small-business",
    title: "MSME & Small Business",
    emoji: "🏢",
    heroBadge: "LOCAL BUSINESS GROWTH",
    heroTitle: "Marketing Systems Tailored for MSMEs & Local Service Businesses",
    heroDescription: "Get more local inquiries and phone calls without expensive agency retainers. We construct localized SEO setups and Google Ads optimized to capture buyers looking for local solutions.",
    caseSummary: {
      clientArea: "Regional Solar Panel Installer",
      timeframe: "6 Months Campaign",
      outcome: "450+ High-Value B2B Inquiries, #1 regional ranking for key search phrases",
      roas: "7.2x ROI on Google Search budget",
      caseStudyLink: "/case-studies/regional-installer",
      caseStudyTitle: "Read MSME Growth Case Study"
    },
    challenges: [
      {
        title: "Wasting Ad Budgets on Wide Areas",
        desc: "Small service businesses waste ad budgets targeting broad regions, resulting in high clicks but zero service calls."
      },
      {
        title: "No Inbound Lead Tracking",
        desc: "Most MSMEs rely on referrals and lack an tracking CRM, preventing them from identifying their top-performing lead sources."
      },
      {
        title: "Lack of Reviews & Digital Trust",
        desc: "Prospects choose competitors with hundreds of Google reviews over businesses with weak or unoptimized local profiles."
      }
    ],
    strategies: [
      {
        title: "Google Map Pack Dominance",
        desc: "Optimize local profiles to rank at the top of local maps for regional search queries."
      },
      {
        title: "WhatsApp Booking Automation",
        desc: "Implement booking systems that capture leads via WhatsApp forms and route them to sales teams."
      },
      {
        title: "Review Acquisition Systems",
        desc: "Deploy automated SMS and email sequences that invite satisfied customers to leave feedback on Google Business Profiles."
      }
    ],
    recommendedServices: [
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "AI & Automation", slug: "ai-automation-systems", emoji: "🤖" },
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" }
    ],
    stats: [
      { label: "Google Maps Inquiries", value: "+215%" },
      { label: "Customer Acquisition Cost (CPL)", value: "-33%" },
      { label: "Review Count Increase", value: "+180%" }
    ],
    faqs: [
      {
        question: "How do you help small businesses with tight budgets?",
        answer: "We focus on high-intent local SEO first, followed by micro-budget search ads. This captures immediate buyers without incurring massive ad spend."
      },
      {
        question: "Do you set up CRM lead systems for MSMEs?",
        answer: "Yes, we implement free or low-cost CRM pipelines (e.g., HubSpot, Google Sheets automation) so owners can manage incoming calls easily."
      }
    ],
    metaTitle: "MSME & Local Business Marketing Agency | Veloxis Global",
    metaDescription: "Scale local customer inquiries, Google Maps phone calls, and inbound website leads for MSMEs and local service providers."
  },
  {
    slug: "non-profit",
    title: "Non-Profit / NGO",
    emoji: "🤝",
    heroBadge: "NON-PROFIT IMPACT SCALE",
    heroTitle: "Empower Non-Profits & NGOs to Scale Donations & Build Awareness",
    heroDescription: "Utilize the Google Ad Grant ($10,000/month free ad spend) and deploy targeted social media campaigns that drive donor acquisition and community engagement.",
    caseSummary: {
      clientArea: "National Child Welfare NGO",
      timeframe: "7 Months Campaign",
      outcome: "₹45 Lakhs raised online, $10,000/mo Google Ad Grant configured",
      roas: "12x Return on NGO management fee",
      caseStudyLink: "/case-studies/child-welfare-ngo",
      caseStudyTitle: "Read NGO Success Case Study"
    },
    challenges: [
      {
        title: "Limited Marketing Budget",
        desc: "NGOs must direct maximum funding to their core cause, leaving minimal budget for digital advertising and outreach."
      },
      {
        title: "High Donor Acquisition Friction",
        desc: "Clunky donation page checkouts and lack of trust elements lead to high checkout abandonment rates."
      },
      {
        title: "Inefficient Search Visibility",
        desc: "Failing to appear when donors search for local charity options prevents NGOs from securing recurring donations."
      }
    ],
    strategies: [
      {
        title: "Google Ad Grant Management",
        desc: "Acquire and manage the $10,000/month Google Ad Grant to drive free search traffic to your causes."
      },
      {
        title: "Donation Page Conversion Rate Optimization (CRO)",
        desc: "Design fast-loading, secure donation pages containing UPI, credit card, and recurring giving options."
      },
      {
        title: "Impact Storytelling Content",
        desc: "Create transparent video case studies and newsletters that demonstrate donor impact and build trust."
      }
    ],
    recommendedServices: [
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" },
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "Content Marketing", slug: "content-marketing", emoji: "✍️" }
    ],
    stats: [
      { label: "Free Google Ad Traffic Value", value: "$120k/yr" },
      { label: "Online Donation Conversions", value: "+175%" },
      { label: "Donor Retention Rate Lift", value: "+30%" }
    ],
    faqs: [
      {
        question: "What is the Google Ad Grant and how do we qualify?",
        answer: "The Google Ad Grant provides qualified 501(c)(3) equivalent non-profits with $10,000/month in free Google search ads. We manage the application, setup, and optimization."
      },
      {
        question: "Can you help set up monthly recurring donations?",
        answer: "Yes. We integrate subscription billing tools (Razorpay, Stripe, PayPal) onto donation pages to automate recurring giving cycles."
      }
    ],
    metaTitle: "NGO & Non-Profit Marketing Agency | Veloxis Global",
    metaDescription: "Apply for the $10,000/month free Google Ad Grant and optimize online donor acquisition campaigns. View our NGO cases."
  },
  {
    slug: "travel-tourism",
    title: "Travel & Tourism",
    emoji: "✈️",
    heroBadge: "TRAVEL BOOKING SYSTEMS",
    heroTitle: "Scale Holiday Package Bookings & Direct Hotel Reservations",
    heroDescription: "Drive direct customer bookings and inquiries for tour operators, travel agencies, and boutique hotels. We deploy visual search and social campaigns that capture travelers planning their next getaway.",
    caseSummary: {
      clientArea: "Boutique Resort Chain in Himachal",
      timeframe: "4 Months Campaign",
      outcome: "1,800+ Direct Room Bookings, reduced booking app commissions",
      roas: "5.8x ROAS on Meta Video Ads",
      caseStudyLink: "/case-studies/boutique-resort",
      caseStudyTitle: "Read Travel Success Case Study"
    },
    challenges: [
      {
        title: "Heavy Booking Platform Commissions",
        desc: "Hotels lose up to 25% of room revenue to OTA apps like Booking.com, MakeMyTrip, and Expedia."
      },
      {
        title: "High Seasonality Pressures",
        desc: "Travel providers struggle with empty rooms and tours during off-season periods due to lack of targeted marketing campaigns."
      },
      {
        title: "Visual Trust Deficit",
        desc: "Travelers hesitate to book unless they see real, high-quality video content and authentic customer reviews of properties and tours."
      }
    ],
    strategies: [
      {
        title: "Visual Meta Video Ads",
        desc: "Show visual reels of destinations, amenities, and itineraries to travelers planning vacations."
      },
      {
        title: "Local Search Map Rankings",
        desc: "Optimize local hotel and agency maps listings to rank when users search for properties and tour offices."
      },
      {
        title: "WhatsApp Booking Integration",
        desc: "Configure direct click-to-WhatsApp ads that let customers chat with booking agents instantly."
      }
    ],
    recommendedServices: [
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" },
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "Social Media Mktg", slug: "social-media-marketing", emoji: "📱" }
    ],
    stats: [
      { label: "Direct Website Bookings Lift", value: "+160%" },
      { label: "Booking App Commission Drop", value: "-45%" },
      { label: "WhatsApp Holiday Inquiries", value: "3.4x" }
    ],
    faqs: [
      {
        question: "How do you lower OTA booking commissions?",
        answer: "We build direct booking websites, implement member-only discounts, and run local search ads that target brand terms, encouraging guests to book direct."
      },
      {
        question: "Do you build custom itinerary planning pages?",
        answer: "Yes, we design custom interactive pages that capture travelers' details, group sizes, and destination preferences for travel planners."
      }
    ],
    metaTitle: "Travel & Tourism Marketing Agency | Veloxis Global",
    metaDescription: "Grow direct resort bookings and tour package inquiries. We scale travel brands with Google Ads, local SEO, and Meta campaigns."
  },
  {
    slug: "legal-professional",
    title: "Legal & Professional",
    emoji: "⚖️",
    heroBadge: "LEGAL CLIENT ACQUISITION",
    heroTitle: "High-Intent Client Inquiries for Law Firms & Professional Practices",
    heroDescription: "Secure high-value client consultations. We leverage strict compliance search campaigns and local maps positioning to connect lawyers, accountants, and consultants with immediate inquiries.",
    caseSummary: {
      clientArea: "Corporate Law Firm in Mumbai",
      timeframe: "6 Months Campaign",
      outcome: "280+ Premium Corporate Lead Consultations, top local directory ranks",
      roas: "6.2x ROI on Search Ads budget",
      caseStudyLink: "/case-studies/corporate-law-firm",
      caseStudyTitle: "Read Legal Client Case Study"
    },
    challenges: [
      {
        title: "Strict Advertising Bar Council Policies",
        desc: "Legal professionals face tight rules on direct solicitation and advertising, requiring high-compliance marketing setups."
      },
      {
        title: "Extremely Expensive PPC Bids",
        desc: "Keywords like 'divorce lawyer' or 'tax accountant' have high click bids, making budget management critical to avoid waste."
      },
      {
        title: "Trust & Credibility Friction",
        desc: "Clients require deep trust before booking legal help, meaning anonymous or thin website pages fail to convert."
      }
    ],
    strategies: [
      {
        title: "Google Local Search Dominate",
        desc: "Rank at the top of local maps pack for professional searches in your specific city and office location."
      },
      {
        title: "High-Intent Google Search campaigns",
        desc: "Target long-tail, high-intent keyword matches while blocking competitor and general informational searches."
      },
      {
        title: "Thought Leadership & Case Content",
        desc: "Write detailed, professional guides and success summaries that build trust and display legal capability."
      }
    ],
    recommendedServices: [
      { title: "SEO Services", slug: "seo", emoji: "🔍" },
      { title: "Audits & Strategy", slug: "audits-consulting-strategy", emoji: "🔎" },
      { title: "Paid Advertising", slug: "paid-advertising-performance-marketing", emoji: "🎯" }
    ],
    stats: [
      { label: "Premium Client Calls", value: "+195%" },
      { label: "Ad Cost-Per-Lead (CPL) Drop", value: "-29%" },
      { label: "Initial Call Booking Rate", value: "32.4%" }
    ],
    faqs: [
      {
        question: "How do you ensure marketing is compliant with Bar Association rules?",
        answer: "We focus on educational content, directory optimization, and informative ads that do not promise outcomes or solicit clients directly."
      },
      {
        question: "How do we reduce waste on expensive legal search clicks?",
        answer: "We structure campaign parameters tightly: targeting exact match queries, maintaining extensive negative keyword lists, and auditing search terms daily."
      }
    ],
    metaTitle: "Law Firm & Professional Practice Marketing | Veloxis Global",
    metaDescription: "Generate qualified consultations for lawyers, accountants, and consultants. We build high-compliance SEO and local maps systems."
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find(industry => industry.slug === slug);
}
