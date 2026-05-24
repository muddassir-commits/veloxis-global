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
  services: {
    title: 'Digital Marketing Services in India 2026 | Veloxis Global',
    description: 'Discover our six results-driven marketing services: SEO, Google Ads PPC, Social Media, Content, Web Dev, and Email automation. Contact us for a quote.',
    path: '/services'
  },
  about: {
    title: "About Veloxis Global — India's Digital Marketing Agency | Muddassir Ali",
    description: "Veloxis Global — India's results-driven digital marketing agency founded by Muddassir Ali. 4 years in digital marketing, serving businesses across India from Kanpur. Learn our story.",
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
    title: "Digital Marketing Blog India 2026 — Insights & Strategies | Veloxis Global",
    description: "Expert digital marketing insights for Indian businesses. SEO guides, Google Ads tips, Social Media strategies — all built for India's unique market. Updated regularly by Muddassir Ali.",
    path: '/blog'
  }
};
