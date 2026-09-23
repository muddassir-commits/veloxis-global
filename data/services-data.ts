export interface Subservice {
  name: string;
  items: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  emoji: string;
  subtitle: string;
  definition?: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  accentColor: 'teal' | 'indigo' | 'orange' | 'purple' | 'cyan' | 'gold' | 'green' | 'navy' | 'red' | 'gray';
  gradientClass: string;
  pricing: {
    starter: string;
    growth: string;
    enterprise: string;
  };
  pricingRange: string;
  benefits: string[];
  subservices: Subservice[];
  bestFor: string[];
  cta: string;
  achievements: string[];
  relatedServices: string[];
  faqs: ServiceFAQ[];
}

export interface PremiumPackage {
  name: string;
  scope: string;
  price: string;
  bestFor: string;
}

export interface ClientTier {
  tier: number;
  name: string;
  price: string;
  includes: string[];
  bestFor: string;
}

export const servicesData: ServiceData[] = [
  {
    id: 'landing-pages',
    slug: 'high-converting-landing-pages',
    title: 'High-Converting Landing Pages',
    emoji: '⚡',
    subtitle: 'Lightning-fast real estate pages that turn clicks into site visits.',
    shortDesc: 'Stop wasting ad spend on slow websites. We build lightning-fast, high-converting real estate landing pages that turn clicks into site visits.',
    longDesc: 'Our custom-built real estate landing pages are optimized for one thing: conversions. We remove distractions, highlight property USPs, and implement aggressive lead capture forms to maximize your ROI.',
    icon: 'Code',
    accentColor: 'teal',
    gradientClass: 'from-teal-50 to-emerald-50',
    pricing: {
      starter: 'Single Property LP',
      growth: 'Multi-Project LPs',
      enterprise: 'Custom Portal UI'
    },
    pricingRange: 'Starts from ₹15,000 / month',
    benefits: [
      'Sub-2-second load times',
      'Mobile-first UX design',
      'Sticky CTA buttons',
      'Direct WhatsApp integration',
      'Conversion tracking setup'
    ],
    subservices: [
      { name: "Design", items: ["Wireframing", "UI/UX Design", "Copywriting"] },
      { name: "Tech", items: ["Next.js Build", "Vercel Hosting", "Analytics"] }
    ],
    bestFor: ['New Project Launches', 'Single Property Sales', 'Real Estate Brokers'],
    cta: 'Get Your Free Growth Plan →',
    achievements: ['35% Average Conversion Rate', '0.8s Average Load Time'],
    relatedServices: ['paid-ads', 'ai-automation'],
    faqs: [
      { question: 'How fast do you build a landing page?', answer: 'We can launch a high-converting landing page in under 3 days.' }
    ]
  },
  {
    id: 'paid-ads',
    slug: 'paid-ads',
    title: 'Meta & Google Ads Performance',
    emoji: '🎯',
    subtitle: 'Laser-targeted local real estate leads.',
    shortDesc: 'Laser-targeted Google and Facebook ad campaigns designed exclusively for real estate developers and channel partners in Delhi NCR.',
    longDesc: 'We do not just buy clicks; we buy qualified leads. By leveraging advanced audience targeting on Meta and high-intent keyword strategies on Google, we ensure your properties are seen by actual home buyers, not window shoppers.',
    icon: 'Target',
    accentColor: 'indigo',
    gradientClass: 'from-indigo-50 to-blue-50',
    pricing: {
      starter: 'Basic Campaign',
      growth: 'Aggressive Lead Gen',
      enterprise: 'National Scale'
    },
    pricingRange: 'Starts from ₹25,000 / month',
    benefits: [
      'Hyper-local geo-targeting',
      'High-intent search keywords',
      'Retargeting funnels',
      'A/B tested ad creatives',
      'Daily budget optimization'
    ],
    subservices: [
      { name: "Google Ads", items: ["Search Campaigns", "Performance Max", "YouTube Ads"] },
      { name: "Meta Ads", items: ["Lead Gen Forms", "Carousel Ads", "WhatsApp Ads"] }
    ],
    bestFor: ['Commercial Projects', 'Luxury Residential', 'Townships'],
    cta: 'Get Your Free Growth Plan →',
    achievements: ['4x ROI on Average', '10,000+ Leads Generated'],
    relatedServices: ['high-converting-landing-pages', 'ai-automation'],
    faqs: [
      { question: 'Do you provide the ad spend?', answer: 'No, ad spend is paid directly to Google/Meta. Our fee is for management and optimization.' }
    ]
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    title: 'AI & WhatsApp Automation',
    emoji: '🤖',
    subtitle: 'Instant lead routing and auto-followups.',
    shortDesc: 'Never lose a lead again. We integrate CRM pipelines and automated WhatsApp follow-ups so you contact every lead within 5 minutes.',
    longDesc: 'Speed to lead is everything in real estate. We build custom coded automation workflows that capture leads from your ads, push them to your CRM, and trigger instant WhatsApp/Email follow-ups while the buyer is still hot.',
    icon: 'Zap',
    accentColor: 'orange',
    gradientClass: 'from-orange-50 to-amber-50',
    pricing: {
      starter: 'Basic API',
      growth: 'CRM Integration',
      enterprise: 'Full AI Agent'
    },
    pricingRange: 'Starts from ₹20,000 / month',
    benefits: [
      'Instant lead routing',
      'Automated WhatsApp follow-ups',
      'CRM integration',
      'Lead qualification chatbots',
      'Zero lead leakage'
    ],
    subservices: [
      { name: "WhatsApp", items: ["Cloud API Setup", "Template Messages", "Chatbots"] },
      { name: "CRM", items: ["Lead Routing", "Pipeline Tracking", "Webhooks"] }
    ],
    bestFor: ['Real Estate Agencies', 'Developers', 'Sales Teams'],
    cta: 'Get Your Free Growth Plan →',
    achievements: ['<1 Min Response Time', '100% Lead Capture Rate'],
    relatedServices: ['high-converting-landing-pages', 'paid-ads'],
    faqs: [
      { question: 'Do I need a WhatsApp Business API account?', answer: 'Yes, we will help you set it up.' }
    ]
  }
];
