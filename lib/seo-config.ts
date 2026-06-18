import { Metadata } from 'next';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://veloxisglobal.com';

export interface MetaProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path,
  ogImage = '/images/og/homepage-og.jpg',
  noIndex = false
}: MetaProps): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    authors: [{ name: 'Muddassir Ali', url: 'https://muddassirali.com' }],
    creator: 'Muddassir Ali',
    publisher: 'Veloxis Global',
    alternates: {
      canonical: url,
      languages: {
        'en-IN': url,
      },
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      }
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Veloxis Global',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export const pageMeta = {
  home: {
    title: "Best Digital Marketing Agency in India | Veloxis Global",
    description: "Veloxis Global — India's trusted digital marketing agency delivering SEO, PPC, and social media campaigns. Contact us for a free site audit today.",
    path: '/'
  },
  delhi: {
    title: 'Best Digital Marketing Agency in Delhi 2026 | Veloxis Global',
    description: 'Looking for the best digital marketing agency in Delhi? Veloxis Global delivers proven SEO, Google Ads & social media results. Request a free audit today.',
    path: '/digital-marketing-agency-delhi'
  },
  noida: {
    title: 'Best Digital Marketing Agency in Noida 2026 | Veloxis Global',
    description: 'Top-rated digital marketing agency in Noida — SEO, Google Ads, Social Media for IT companies, startups & businesses. Veloxis Global. Get free audit.',
    path: '/digital-marketing-agency-noida'
  },
  lucknow: {
    title: 'Best Digital Marketing Agency in Lucknow 2026 | Veloxis Global',
    description: 'Award-winning digital marketing agency in Lucknow. We deliver proven SEO, Google Ads & social media campaigns for Lucknow brands. Get your free audit.',
    path: '/digital-marketing-agency-lucknow'
  },
  kanpur: {
    title: 'Best Digital Marketing Agency in Kanpur 2026 | Veloxis Global',
    description: 'Leading digital marketing agency in Kanpur for textile, manufacturing & MSME businesses. SEO, Google Ads, Social Media. Veloxis Global. Get free audit.',
    path: '/digital-marketing-agency-kanpur'
  },
  seo: {
    title: 'Professional SEO Services in India 2026 | Veloxis Global',
    description: "Rank #1 on Google with Veloxis Global's expert SEO services. Local SEO, technical SEO, link building for businesses across India. Free audit.",
    path: '/services/seo'
  },
  smm: {
    title: 'Social Media Marketing Agency in India 2026 | Veloxis Global',
    description: 'Grow your brand with our top social media marketing agency in India. We design campaigns across Noida, Delhi, Lucknow & Kanpur. Get a free quote.',
    path: '/services/social-media-marketing'
  },
  ppc: {
    title: 'Google Ads & PPC Management Agency India | Veloxis Global',
    description: 'Stop wasting ad budget. Our Google-certified team manages Search, Display, Shopping, and YouTube Ads to deliver the highest possible ROAS. Free audit.',
    path: '/services/google-ads-ppc'
  },
  content: {
    title: 'Content Marketing Services in India 2026 | Veloxis Global',
    description: 'SEO-optimized articles, blogs, copy, and landing pages that rank, educate, and convert your website visitors into buyers. Contact our content team.',
    path: '/services/content-marketing'
  },
  webDev: {
    title: 'Web Design & Development Company India 2026 | Veloxis Global',
    description: 'We design and build fast, mobile-first websites optimized for Core Web Vitals and Google search rankings. Request a free web design quote today online.',
    path: '/services/web-design-development'
  },
  email: {
    title: 'Email & WhatsApp Marketing Automation | Veloxis Global',
    description: 'Automate your sales pipeline with automated newsletters, WhatsApp flows, and CRM integrations to nurture leads and scale sales. Get a free quote.',
    path: '/services/email-marketing'
  },
  paidAds: {
    title: 'Performance Marketing & Paid Advertising Agency | Veloxis Global',
    description: 'Meta, Google, and LinkedIn ads engineered for maximum ROI. Data-driven campaign scaling and budget optimization. Get a free ad audit.',
    path: '/services/paid-ads-performance-marketing'
  },
  b2bLeadGen: {
    title: 'B2B Lead Generation & Sales Pipeline Agency | Veloxis Global',
    description: 'Cold email outreach automation, LinkedIn lead generation, and sales pipeline setup to secure high-quality B2B meetings. Free consultation.',
    path: '/services/b2b-lead-generation'
  },
  aiAutomation: {
    title: 'AI & Marketing Automation Workflows Systems | Veloxis Global',
    description: 'Streamline your business operations. Custom n8n workflows, lead routing automation, AI content copy generators, and smart chatbots. Free audit.',
    path: '/services/ai-marketing-automation'
  },
  brandStrategy: {
    title: 'Brand Strategy, Positioning & Sales Funnels | Veloxis Global',
    description: 'Define your unique positioning, customer buyer personas, customer journey maps, and high-converting sales funnels to stand out. Get details.',
    path: '/services/brand-strategy'
  },
  analyticsTracking: {
    title: 'Google Analytics 4, Tagging & Attribution Tracking | Veloxis Global',
    description: 'GA4 setup, custom conversion tagging, server-side tagging, and multi-channel attribution tracking for precise marketing measurement.',
    path: '/services/analytics-tracking'
  },
  auditsConsulting: {
    title: 'Digital Marketing Audits & Strategy Consulting | Veloxis Global',
    description: 'Comprehensive 48-hour website performance, SEO, and ad account audits. Actionable roadmaps to scale your brand. Book a strategy session.',
    path: '/services/audits-consulting'
  },
  ecommerceServices: {
    title: 'E-commerce Marketing & Shopify Catalog Services | Veloxis Global',
    description: 'Shopify setups, feed optimization, Google Shopping ads, and dynamic Meta catalog campaigns built to scale online store revenue.',
    path: '/services/ecommerce-services'
  },
  trainingEducation: {
    title: 'Corporate Marketing Training & Mentorship | Veloxis Global',
    description: 'Group training, corporate marketing workshops, and 1-on-1 digital marketing mentorship to upskill your in-house marketing team.',
    path: '/services/training-education'
  },
  saas: {
    title: 'SaaS & Software Product Marketing Agency | Veloxis Global',
    description: 'Product-led growth, organic search loops, paid ads performance marketing, and GA4 attribution tracking for scaling software brands.',
    path: '/industries/saas'
  },
  coachingConsulting: {
    title: 'Digital Marketing for Coaches, Consultants & Experts | Veloxis',
    description: 'Personal brand positioning, high-ticket automated webinar funnels, paid ads, and student onboarding automation for coaches.',
    path: '/industries/coaching-consulting'
  },
  restaurantFood: {
    title: 'Restaurant & Food Brand Marketing Agency | Veloxis Global',
    description: 'Hyper-local map optimization, Instagram reels production, local SEO, and delivery channel marketing to fill tables and orders.',
    path: '/industries/restaurant-food'
  },
  fitnessWellness: {
    title: 'Fitness Centers, Gyms & Wellness Marketing | Veloxis Global',
    description: 'Lead-to-member conversion systems, local gym brand visibility, social media stories, and CRM retention workflows for wellness hubs.',
    path: '/industries/fitness-wellness'
  },
  nonProfit: {
    title: 'Non-Profit & NGO Marketing: Google Ad Grants | Veloxis Global',
    description: 'Google Ad Grants setup, storytelling strategies, donor acquisition workflows, and event engagement systems for non-profits.',
    path: '/industries/non-profit'
  },
  services: {
    title: 'Digital Marketing Services in India 2026 | Veloxis Global',
    description: 'Discover our fourteen results-driven marketing services grouped by optimization tier. Contact us for a custom quote today.',
    path: '/services'
  },
  about: {
    title: "About Veloxis Global | Digital Marketing Agency India",
    description: "Veloxis Global is a results-driven digital marketing agency founded by Muddassir Ali. We deliver expert SEO, Google Ads & social campaigns. Learn our story.",
    path: '/about'
  },
  caseStudies: {
    title: 'Case Studies: Real Growth and ROI | Veloxis Global',
    description: 'Explore case studies showing how we help companies grow. Read success stories from real estate, EdTech, healthcare, and manufacturing. Request audit.',
    path: '/case-studies'
  },
  pricing: {
    title: 'Digital Marketing Pricing & Packages | Veloxis Global',
    description: 'Get transparent details on our SEO, Social Media Marketing, and Google Ads packages. Results-based, ROI-driven, with no contracts. Request a quote.',
    path: '/pricing'
  },
  testimonials: {
    title: 'Client Reviews and Testimonials 2026 | Veloxis Global',
    description: 'Read reviews from our clients in Delhi, Noida, Lucknow, and Kanpur. Discover why we have a 4.9/5 client rating and 98% retention. Book a strategy call.',
    path: '/testimonials'
  },
  audit: {
    title: 'Get a Free Website SEO & Marketing Audit | Veloxis Global',
    description: 'Get a FREE, no-obligation website SEO and digital marketing health audit. Complete our simple form to receive your detailed roadmap in 48 hours today.',
    path: '/free-seo-audit'
  },
  contact: {
    title: 'Contact Us | Veloxis Global Digital Marketing Agency',
    description: 'Ready to grow? Talk to our Delhi, Noida, Lucknow & Kanpur marketing specialists. Book a 30-min strategy call or chat on WhatsApp to scale your leads.',
    path: '/contact'
  },
  blog: {
    title: "Digital Marketing Blog India | Insights & Strategies | Veloxis",
    description: "Expert digital marketing insights for Indian businesses. SEO guides, Google Ads tutorials, and social media growth strategies written by Muddassir Ali.",
    path: '/blog'
  }
};
