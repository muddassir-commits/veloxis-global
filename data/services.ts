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
    id: 'landing-pages',
    title: 'High-Converting Landing Pages',
    slug: 'high-converting-landing-pages',
    icon: 'layout',
    accentColor: 'teal',
    shortDesc: 'Stop wasting ad spend on slow websites. We build lightning-fast, high-converting real estate landing pages that turn clicks into site visits.',
    longDesc: 'Our custom-built real estate landing pages are optimized for one thing: conversions. We remove distractions, highlight property USPs, and implement aggressive lead capture forms to maximize your ROI.',
    benefits: [
      'Sub-2-second load times',
      'Mobile-first UX design',
      'Sticky CTA buttons',
      'Direct WhatsApp integration',
      'Conversion tracking setup'
    ],
    pricing: {
      starter: 'Single Property LP',
      growth: 'Multi-Project LPs',
      enterprise: 'Custom Portal UI'
    }
  },
  {
    id: 'paid-ads',
    title: 'Meta & Google Ads Performance',
    slug: 'paid-ads',
    icon: 'target',
    accentColor: 'indigo',
    shortDesc: 'Laser-targeted Google and Facebook ad campaigns designed exclusively for real estate developers and channel partners in Delhi NCR.',
    longDesc: 'We do not just buy clicks; we buy qualified leads. By leveraging advanced audience targeting on Meta and high-intent keyword strategies on Google, we ensure your properties are seen by actual home buyers, not window shoppers.',
    benefits: [
      'Hyper-local geo-targeting',
      'High-intent search keywords',
      'Retargeting funnels',
      'A/B tested ad creatives',
      'Daily budget optimization'
    ],
    pricing: {
      starter: 'Basic Campaign Management',
      growth: 'Aggressive Lead Gen',
      enterprise: 'National Multi-Channel'
    }
  },
  {
    id: 'ai-automation',
    title: 'AI & WhatsApp Automation',
    slug: 'ai-automation',
    icon: 'zap',
    accentColor: 'orange',
    shortDesc: 'Never lose a lead again. We integrate CRM pipelines and automated WhatsApp follow-ups so you contact every lead within 5 minutes.',
    longDesc: 'Speed to lead is everything in real estate. We build custom coded automation workflows that capture leads from your ads, push them to your CRM, and trigger instant WhatsApp/Email follow-ups while the buyer is still hot.',
    benefits: [
      'Instant lead routing',
      'Automated WhatsApp follow-ups',
      'CRM integration (Salesforce/Hubspot)',
      'Lead qualification chatbots',
      'Zero lead leakage'
    ],
    pricing: {
      starter: 'Basic WhatsApp API',
      growth: 'CRM Integration',
      enterprise: 'Full AI Agent Setup'
    }
  }
];
