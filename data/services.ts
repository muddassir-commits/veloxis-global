export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  accentColor: string; // 'teal' | 'indigo' | 'orange'
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
  }
];
