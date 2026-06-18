export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  accentColor: string; // 'teal' | 'indigo' | 'orange'
  tier: string; // 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Tier 4' | 'Tier 5' | 'Tier 6'
  emoji: string;
  shortDesc: string;
  longDesc: string;
  benefits: string[];
  pricing: {
    starter: string;
    growth: string;
    enterprise: string;
  };
}

export const services: Service[] = [
  {
    id: "seo",
    title: "SEO Services",
    slug: "seo",
    icon: "Search",
    accentColor: "teal",
    tier: "Tier 2",
    emoji: "🔍",
    shortDesc: "Rank #1 on Google for keywords your customers are actually searching. White-hat, sustainable, city-specific SEO strategies.",
    longDesc: "Rank #1 on Google for keywords your customers are actually searching. Our white-hat, sustainable, city-specific SEO strategies drive consistent organic traffic and high-value leads without relying on paid ads.",
    benefits: [
      "Technical SEO Audit (Core Web Vitals, crawl errors)",
      "Keyword Research & Mapping (100+ keywords)",
      "On-Page Optimization & Schema Markup",
      "Local SEO & Google Business Profile setup",
      "DA 40+ Link Building & Digital PR",
      "Monthly Rank & Traffic Reporting"
    ],
    pricing: {
      starter: "₹18,000/mo",
      growth: "₹35,000/mo",
      enterprise: "Custom Pricing"
    }
  },
  {
    id: "smm",
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: "Share2",
    accentColor: "indigo",
    tier: "Tier 2",
    emoji: "📱",
    shortDesc: "Instagram, Facebook, LinkedIn — content that builds your brand and brings real enquiries from your target audience.",
    longDesc: "Instagram, Facebook, LinkedIn — we design high-converting social campaigns and creative content that builds your brand, engages your target audience, and drives direct enquiries.",
    benefits: [
      "Custom Content Calendar & Post Design",
      "Short-form Video & Reels Production",
      "Community Management & Enquiry Response",
      "Paid Social Campaigns (Meta, LinkedIn, Instagram Ads)",
      "Influencer Outreach & Collaborations",
      "Detailed Engagement & ROI Analytics"
    ],
    pricing: {
      starter: "₹20,000/mo",
      growth: "₹40,000/mo",
      enterprise: "Custom Pricing"
    }
  },
  {
    id: "ppc",
    title: "Google Ads & PPC",
    slug: "google-ads-ppc",
    icon: "DollarSign",
    accentColor: "orange",
    tier: "Tier 1",
    emoji: "💰",
    shortDesc: "Every rupee tracked. Google-certified campaigns with proven ROAS for Delhi, Noida, Lucknow & Kanpur businesses.",
    longDesc: "Stop wasting ad budget. Our Google-certified PPC experts manage Search, Display, Shopping, and YouTube Ads to deliver the highest possible Return on Ad Spend (ROAS) for your business.",
    benefits: [
      "Google-Certified Campaign Setup & Management",
      "Search, Display, Shopping & Video Campaigns",
      "A/B Testing of Ads & Landing Pages",
      "Negative Keyword List Management",
      "Conversion Tracking & Event Setup",
      "Weekly ROAS & Budget Allocation Audits"
    ],
    pricing: {
      starter: "₹22,000/mo",
      growth: "₹45,000/mo",
      enterprise: "Custom Pricing"
    }
  },
  {
    id: "content",
    title: "Content Marketing",
    slug: "content-marketing",
    icon: "PenTool",
    accentColor: "teal",
    tier: "Tier 2",
    emoji: "✍️",
    shortDesc: "SEO-optimised blogs, landing pages, and articles that rank, educate, and convert visitors into leads.",
    longDesc: "SEO-optimized blogs, landing pages, and articles that rank, educate, and convert visitors into high-intent leads. We establish your business as an industry authority with E-E-A-T guidelines.",
    benefits: [
      "Content Strategy & Topic Clusters",
      "SEO Blog Writing & Optimization",
      "High-Converting Landing Page Copy",
      "E-E-A-T Focused Author Bio Setup",
      "Email Newsletter Content Copywriting",
      "Content Audit & Repurposing Strategy"
    ],
    pricing: {
      starter: "₹15,000/mo",
      growth: "₹30,000/mo",
      enterprise: "Custom Pricing"
    }
  },
  {
    id: "web-dev",
    title: "Web Design & Development",
    slug: "web-design-development",
    icon: "Code",
    accentColor: "indigo",
    tier: "Tier 5",
    emoji: "💻",
    shortDesc: "Fast, modern, mobile-first websites that convert traffic into customers. Built for Core Web Vitals and Google rankings.",
    longDesc: "Fast, modern, mobile-first websites designed to turn traffic into clients. We build with Next.js, Tailwind CSS, and strict optimization standards for unbeatable Core Web Vitals scores.",
    benefits: [
      "Custom UI/UX & Responsive Web Design",
      "Next.js & React High-Performance Development",
      "SEO-Friendly Semantic HTML & Schema Integration",
      "Fast Page Speed (LCP < 2.0s, CLS < 0.05)",
      "Security Audits & SSL Implementation",
      "CMS Setup & User-Friendly Administration"
    ],
    pricing: {
      starter: "₹45,000 (One-time)",
      growth: "₹85,000 (One-time)",
      enterprise: "Custom Pricing"
    }
  },
  {
    id: "email",
    title: "Email & WhatsApp Marketing",
    slug: "email-marketing",
    icon: "Mail",
    accentColor: "orange",
    tier: "Tier 3",
    emoji: "📧",
    shortDesc: "Automated sequences that nurture leads and re-engage customers — integrated with your CRM and sales pipeline.",
    longDesc: "Automated newsletter sequences and WhatsApp flows that nurture leads, re-engage cold contacts, and upsell existing customers — fully integrated with your CRM and sales pipeline.",
    benefits: [
      "Email & WhatsApp List Segmentation",
      "Automated Nurture & Welcome Sequences",
      "Resend & Twilio API Integrations",
      "Drip Campaign Planning & Scheduling",
      "A/B Testing of Subject Lines & Copy",
      "Deliverability Optimization & Spam Audits"
    ],
    pricing: {
      starter: "₹12,000/mo",
      growth: "₹25,000/mo",
      enterprise: "Custom Pricing"
    }
  },
  {
    id: "paid-ads",
    title: "Paid Advertising & Performance Marketing",
    slug: "paid-ads-performance-marketing",
    icon: "Target",
    accentColor: "teal",
    tier: "Tier 1",
    emoji: "🎯",
    shortDesc: "Meta, Google, and LinkedIn ads engineered for maximum ROI. Data-driven campaign scaling and budget optimization.",
    longDesc: "Get maximum ROI from your ad spend. We design, launch, and optimize cross-channel advertising campaigns on Meta, Google, and LinkedIn to generate qualified leads and sales.",
    benefits: [
      "Meta, Google & LinkedIn Ad Management",
      "Audience Building & Custom Retargeting",
      "High-Converting Ad Copy & Creative Direction",
      "Continuous A/B Testing & Budget Scaling",
      "Pixel, API & Conversion API Tracking Setup",
      "Weekly Performance & ROAS Reporting"
    ],
    pricing: {
      starter: "₹22,000/mo",
      growth: "₹65,000/mo",
      enterprise: "₹1,50,000/mo"
    }
  },
  {
    id: "b2b-lead-gen",
    title: "B2B Lead Generation & Sales",
    slug: "b2b-lead-generation",
    icon: "Users",
    accentColor: "indigo",
    tier: "Tier 1",
    emoji: "🎯",
    shortDesc: "Cold outreach, LinkedIn campaigns, and pipeline automation to fill your sales calendar with qualified B2B prospects.",
    longDesc: "Supercharge your sales pipeline. We combine automated cold email outreach, LinkedIn social selling, and account-based marketing (ABM) to secure meetings with decision-makers.",
    benefits: [
      "Cold Email Outreach Automation & Setup",
      "LinkedIn Lead Gen & Profile Optimization",
      "Account-Based Marketing (ABM) Strategy",
      "Lead Scoring, Nurturing & Qualification",
      "CRM Sales Pipeline Integration",
      "Targeted B2B Contact List Building"
    ],
    pricing: {
      starter: "₹20,000/mo",
      growth: "₹60,000/mo",
      enterprise: "₹1,50,000/mo"
    }
  },
  {
    id: "ai-marketing-automation",
    title: "AI & Marketing Automation",
    slug: "ai-marketing-automation",
    icon: "Cpu",
    accentColor: "orange",
    tier: "Tier 3",
    emoji: "🤖",
    shortDesc: "Automate lead capture, routing, and workflows using n8n and AI tools to save hundreds of hours of manual labor.",
    longDesc: "Work smarter, not harder. We build custom n8n workflows, AI content generators, and smart chatbots that automate repetitive tasks, route leads instantly, and integrate your tools.",
    benefits: [
      "Custom n8n Workflow Deployments",
      "Instant Lead Capture & CRM Routing",
      "AI-Powered Content & Copy Generators",
      "Smart Customer Support Chatbots",
      "Cross-Platform API & Webhook Integrations",
      "Process Automation & System Audits"
    ],
    pricing: {
      starter: "₹15,000/mo",
      growth: "₹45,000/mo",
      enterprise: "₹1,00,000/mo"
    }
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy & Positioning",
    slug: "brand-strategy",
    icon: "Palette",
    accentColor: "teal",
    tier: "Tier 4",
    emoji: "🎨",
    shortDesc: "Define your unique positioning, customer personas, and sales funnels to stand out in crowded markets.",
    longDesc: "Build a brand that commands premium prices. We define your market positioning, craft buyer personas, design conversion funnels, and build a cohesive brand identity.",
    benefits: [
      "Unique Value Proposition & Positioning",
      "Detailed Buyer Persona Development",
      "Customer Journey Map Design",
      "Full-Funnel Sales Architecture",
      "Competitor Positioning Analysis",
      "Brand Voice & Identity Guidelines"
    ],
    pricing: {
      starter: "₹25,000 (One-time)",
      growth: "₹75,000 (One-time)",
      enterprise: "Custom Pricing"
    }
  },
  {
    id: "analytics-tracking",
    title: "Analytics, Tracking & Attribution",
    slug: "analytics-tracking",
    icon: "BarChart3",
    accentColor: "indigo",
    tier: "Tier 4",
    emoji: "📊",
    shortDesc: "Implement GA4, server-side tracking, and multi-channel attribution to measure exactly where your revenue comes from.",
    longDesc: "Remove the guesswork from your marketing. We set up Google Analytics 4, conversion tracking, custom Looker Studio dashboards, and multi-touch attribution systems.",
    benefits: [
      "Google Analytics 4 (GA4) Implementation",
      "Custom Conversion & Event Tracking",
      "Multi-Channel Attribution Modeling",
      "Interactive Looker Studio Dashboards",
      "Server-Side Tagging & Tracking Setup",
      "Data Quality & Privacy Compliance Audits"
    ],
    pricing: {
      starter: "₹8,000/mo",
      growth: "₹25,000/mo",
      enterprise: "₹50,000/mo"
    }
  },
  {
    id: "audits-consulting",
    title: "Audits, Consulting & Strategy",
    slug: "audits-consulting",
    icon: "ClipboardCheck",
    accentColor: "orange",
    tier: "Tier 4",
    emoji: "🔍",
    shortDesc: "Deep-dive audits of your website, SEO, and ad accounts with clear, actionable recommendations delivered in 48 hours.",
    longDesc: "Get a roadmap to growth. Our rapid-turnaround audits examine your SEO, paid ads, and conversion rates to identify performance bottlenecks and quick-win opportunities.",
    benefits: [
      "Comprehensive 48-Hour Digital Audit",
      "Website Performance & Speed Assessment",
      "SEO & Keyword Ranking Analysis",
      "Ad Account Setup & Budget Leak Audits",
      "Competitor Marketing Analysis",
      "1-on-1 Strategy Consulting Session"
    ],
    pricing: {
      starter: "₹5,000 (One-time)",
      growth: "₹20,000 (One-time)",
      enterprise: "Custom Pricing"
    }
  },
  {
    id: "ecommerce-services",
    title: "E-commerce & Catalog Services",
    slug: "ecommerce-services",
    icon: "ShoppingBag",
    accentColor: "indigo",
    tier: "Tier 5",
    emoji: "🛍️",
    shortDesc: "Shopify setup, product feed optimization, and high-performance Shopping and Catalog ads built for online stores.",
    longDesc: "Scale your e-commerce store. We handle everything from Shopify development and product feed optimization to high-converting Google Shopping and Meta Catalog campaigns.",
    benefits: [
      "Shopify & WooCommerce Store Setup",
      "Merchant Center & Product Feed Management",
      "Google Shopping & Performance Max Ads",
      "Dynamic Meta Catalog Campaigns",
      "E-commerce Conversion Rate Optimization (CRO)",
      "Average Order Value (AOV) Expansion"
    ],
    pricing: {
      starter: "₹30,000/mo",
      growth: "₹90,000/mo",
      enterprise: "₹2,00,000/mo"
    }
  },
  {
    id: "training-education",
    title: "Training & Education",
    slug: "training-education",
    icon: "GraduationCap",
    accentColor: "teal",
    tier: "Tier 6",
    emoji: "🎓",
    shortDesc: "Corporate workshops, team training, and 1-on-1 mentorship to upskill your in-house marketing team.",
    longDesc: "Upskill your team or accelerate your career. We deliver custom corporate marketing training, structured group workshops, and intensive 1-on-1 mentorship programs.",
    benefits: [
      "Custom Corporate Training Programs",
      "1-on-1 Digital Marketing Mentorship",
      "Hands-on Workshops & Masterclasses",
      "Step-by-Step SOPs & Campaign Playbooks",
      "Lifetime Access to Training Portal",
      "Post-Training Implementation Support"
    ],
    pricing: {
      starter: "₹499 (Online)",
      growth: "₹25,000 (Workshop)",
      enterprise: "Custom Pricing"
    }
  }
];
