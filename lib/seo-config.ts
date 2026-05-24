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
    alternates: {
      canonical: url,
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
    other: {
      'hreflang': 'en-IN'
    }
  };
}

export const pageMeta = {
  home: {
    title: 'Best Digital Marketing Agency in Delhi, Noida, Lucknow & Kanpur | Veloxis Global',
    description: "Veloxis Global — India's trusted digital marketing agency delivering SEO, Google Ads, Social Media & Content marketing for Delhi, Noida, Lucknow & Kanpur.",
    path: '/'
  },
  delhi: {
    title: 'Best Digital Marketing Agency in Delhi 2026 | Veloxis Global',
    description: 'Looking for the best digital marketing agency in Delhi? Veloxis Global delivers proven SEO, Google Ads & Social Media results for Delhi businesses. Free audit.',
    path: '/digital-marketing-agency-delhi'
  },
  noida: {
    title: 'Best Digital Marketing Agency in Noida 2026 | Veloxis Global',
    description: 'Top-rated digital marketing agency in Noida — SEO, Google Ads, Social Media for IT companies, startups & businesses. Veloxis Global. Get free audit.',
    path: '/digital-marketing-agency-noida'
  },
  lucknow: {
    title: 'Best Digital Marketing Agency in Lucknow 2026 | Veloxis Global',
    description: 'Award-winning digital marketing agency in Lucknow — SEO, Google Ads & Social Media for Lucknow businesses. Veloxis Global. Free audit today.',
    path: '/digital-marketing-agency-lucknow'
  },
  kanpur: {
    title: 'Best Digital Marketing Agency in Kanpur 2026 | Veloxis Global',
    description: 'Leading digital marketing agency in Kanpur for textile, manufacturing & MSME businesses. SEO, Google Ads, Social Media. Veloxis Global. Get free audit.',
    path: '/digital-marketing-agency-kanpur'
  },
  seo: {
    title: 'Professional SEO Services in Delhi, Noida, Lucknow & Kanpur | Veloxis Global',
    description: "Rank #1 on Google with Veloxis Global's expert SEO services. Local SEO, technical SEO, link building for businesses across North India. Free audit.",
    path: '/services/seo'
  },
  smm: {
    title: 'Social Media Marketing Agency in India 2026 | Veloxis Global',
    description: 'Instagram, Facebook, LinkedIn, SMM marketing agency. Build your brand and drive direct inquiries across Delhi, Noida, Lucknow & Kanpur.',
    path: '/services/social-media-marketing'
  },
  ppc: {
    title: 'Google Ads & PPC Management Agency India 2026 | Veloxis Global',
    description: 'Stop wasting ad budget. Our Google-certified team manages Search, Display, Shopping, and YouTube Ads to deliver the highest possible ROAS. Free audit.',
    path: '/services/google-ads-ppc'
  },
  content: {
    title: 'Content Marketing Services Delhi Noida Lucknow | Veloxis Global',
    description: 'SEO-optimized articles, blogs, copy, and landing pages that rank, educate, and convert your website visitors into buyers. Contact our content team.',
    path: '/services/content-marketing'
  },
  webDev: {
    title: 'Web Design & Development Company India 2026 | Veloxis Global',
    description: 'Fast, secure, mobile-first websites optimized for Core Web Vitals and Google rankings. Built with Next.js, React, and Tailwind. Free quote.',
    path: '/services/web-design-development'
  },
  email: {
    title: 'Email & WhatsApp Marketing Automation Agency | Veloxis Global',
    description: 'Automated newsletters, WhatsApp flows, and CRM integration that nurture leads, re-engage cold contacts, and upsell customers.',
    path: '/services/email-marketing'
  },
  services: {
    title: 'Digital Marketing Services Delhi, Noida, Lucknow & Kanpur | Veloxis Global',
    description: 'Discover our six results-driven marketing services: SEO, Google Ads PPC, Social Media, Content, Web Dev, and Email automation.',
    path: '/services'
  },
  about: {
    title: 'About Veloxis Global | Trusted Digital Marketing Agency',
    description: 'Learn about North India\'s leading digital marketing agency. Established in 2019, our certified team is dedicated to scaling businesses with data.',
    path: '/about'
  },
  caseStudies: {
    title: 'Case Studies: Real Growth and ROI | Veloxis Global',
    description: 'Explore case studies showing how we help companies grow. Read success stories from real estate, EdTech, healthcare, and manufacturing brands.',
    path: '/case-studies'
  },
  pricing: {
    title: 'Transparent Pricing & Packages | Veloxis Global',
    description: 'Get details on our SEO, Social Media Marketing, and Google Ads packages. Results-based, ROI-driven, with no long-term contracts.',
    path: '/pricing'
  },
  testimonials: {
    title: 'Client Reviews and Testimonials | Veloxis Global',
    description: 'Read reviews from our clients in Delhi, Noida, Lucknow, and Kanpur. Discover why we have a 4.9/5 client rating and 98% retention.',
    path: '/testimonials'
  },
  audit: {
    title: 'Get a Free Website SEO & Marketing Audit | Veloxis Global',
    description: 'Get a FREE, no-obligation website SEO and digital marketing health audit. Complete our simple form and receive your roadmap in 48 hours.',
    path: '/free-seo-audit'
  },
  contact: {
    title: 'Contact Us | Veloxis Global Digital Marketing Agency',
    description: 'Ready to grow? Talk to our Delhi, Noida, Lucknow & Kanpur marketing specialists. Book a 30-min strategy call, call us, or chat on WhatsApp.',
    path: '/contact'
  },
  blog: {
    title: 'Digital Marketing Blog: Insights & Strategy | Veloxis Global',
    description: 'Read articles, strategy guides, and tips on SEO, PPC, social media, and content marketing designed for Indian businesses.',
    path: '/blog'
  }
};
