import { Metadata } from 'next';

// Canonical host is www (the apex domain 308-redirects to it in Vercel).
export const SITE_URL = 'https://www.veloxisglobal.com';
export const DEFAULT_OG_IMAGE = '/images/og/homepage-og.jpg';
/** When the offer, service and audience pages were last checked for accuracy. Shown on those pages
 *  and used as the sitemap lastmod for static pages — bump it whenever they are reviewed. */
export const CONTENT_REVIEWED = '2026-11-08';

export interface MetaProps {
  /** Rendered exactly as written — include the brand yourself. Keep it under ~60 characters. */
  title: string;
  /** Aim for 140–160 characters. */
  description: string;
  path: string;
  ogImage?: string;
  /** Real pixel size of ogImage, when it isn't the default 1200x630 */
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  noIndex = false,
}: MetaProps): Metadata {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;

  return {
    title: { absolute: title },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Veloxis Global',
      images: [{ url: ogImage, width: ogImageWidth, height: ogImageHeight, alt: title }],
      locale: 'en_IN',
      type: ogType,
      ...(ogType === 'article' ? { publishedTime, modifiedTime, authors: [`${SITE_URL}/about`] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

// Metadata for static routes. Keyword targets per page are documented in
// docs/SEO.md — keep one primary intent per page.
export const pageMeta = {
  home: {
    title: 'E-commerce & D2C Marketing Agency in India | Veloxis Global',
    description:
      'Performance marketing for e-commerce and D2C brands: Meta and Google ads, Shopify stores, CRO, email and WhatsApp. Judged on orders, not clicks. Free audit.',
    path: '/',
  },
  industries: {
    title: 'Industries: E-commerce, Local & Real Estate | Veloxis Global',
    description:
      'Veloxis Global works with e-commerce and D2C brands, local businesses and clinics, and real estate developers and brokers. See how we help each one grow.',
    path: '/industries',
  },
  ecommerce: {
    title: 'E-commerce Marketing Agency for D2C Brands | Veloxis Global',
    description:
      'Meta and Google ads, Shopify store pages that convert, and WhatsApp and email follow-ups for e-commerce and D2C brands. Judged on orders. Free audit.',
    path: '/industries/ecommerce',
  },
  localBusiness: {
    title: 'Digital Marketing for Local Businesses & Clinics | Veloxis',
    description:
      'Websites, local SEO, Google Business Profile and local ads for clinics, dentists, salons and home services in India, the UK and the US. Free website audit.',
    path: '/industries/local-business',
  },
  services: {
    title: 'E-commerce Marketing Services: Ads, Shopify, CRO | Veloxis',
    description:
      'Meta and Google ads, Shopify development, conversion rate optimisation, email and WhatsApp marketing and SEO for online stores and D2C brands. Free audit.',
    path: '/services',
  },
  developers: {
    title: 'Real Estate Marketing Agency for Builders | Veloxis Global',
    description:
      'Real estate marketing for builders, developers and brokers: RERA-compliant project pages, Meta and Google ads and WhatsApp follow-up that books visits.',
    path: '/industries/real-estate',
  },
  channelPartners: {
    title: 'Real Estate Channel Partner & Agent Marketing | Veloxis',
    description:
      'Digital marketing for real estate agents, brokers and channel partners: exclusive Meta and Google leads, project pages you control, instant WhatsApp replies.',
    path: '/channel-partners',
  },
  nriBuyers: {
    title: 'NRI Real Estate Marketing for Developers & CPs | Veloxis',
    description:
      'Meta ads to Indians in the UAE, UK and US, an NRI project page and WhatsApp replies in their time zone. For developers and channel partners in India.',
    path: '/industries/real-estate/nri-buyers',
  },
  lucknow: {
    title: 'Digital Marketing Agency in Lucknow | Veloxis Global',
    description:
      'Digital marketing agency in Lucknow: Meta and Google ads, websites, SEO and WhatsApp automation for e-commerce, local businesses and real estate. Free audit.',
    path: '/digital-marketing-agency-lucknow',
  },
  kanpur: {
    title: 'Digital Marketing Agency in Kanpur | Veloxis Global',
    description:
      'Digital marketing agency in Kanpur: Meta and Google ads, websites, SEO and WhatsApp automation for e-commerce, local businesses and real estate. Free audit.',
    path: '/digital-marketing-agency-kanpur',
  },
  noida: {
    title: 'Digital Marketing Agency in Noida | Veloxis Global',
    description:
      'Digital marketing agency in Noida: Meta and Google ads, websites, SEO and WhatsApp automation for e-commerce, local businesses and real estate. Free audit.',
    path: '/digital-marketing-agency-noida',
  },
  playbooks: {
    title: 'Real Estate Marketing Playbooks & Strategy Examples',
    description:
      'Example real estate marketing plans: campaign structure, keyword groups, bidding, landing page blueprints and WhatsApp lead flows you can inspect.',
    path: '/playbooks',
  },
  freeAudit: {
    title: 'Free Marketing Audit for Your Business | Veloxis Global',
    description:
      'Free audit of your website or store, Meta and Google ads and lead follow-up, for e-commerce, local businesses and real estate. Personal review, no obligation.',
    path: '/free-audit',
  },
  leadSystem: {
    title: 'Real Estate Lead Generation System for Builders & Brokers',
    description:
      'A real estate lead generation system: Meta ads, a project landing page and instant WhatsApp replies, run as one for builders and brokers. No lock-in.',
    path: '/real-estate-lead-system',
  },
  about: {
    title: 'About Veloxis Global | Digital Marketing Agency, Noida',
    description:
      'Veloxis Global is a Noida digital marketing agency for real estate, D2C brands and local businesses: landing pages, Meta and Google ads, WhatsApp follow-up.',
    path: '/about',
  },
  contact: {
    title: 'Contact Veloxis Global | Performance Marketing Agency',
    description:
      'Talk to Veloxis Global about ads, websites, SEO or WhatsApp automation. WhatsApp +91 91940 20727, or send the form for a free marketing audit.',
    path: '/contact',
  },
  guides: {
    title: 'Digital Marketing & AI Search Guides | Veloxis Global',
    description:
      'Free guides on AI search (GEO, AEO), Meta and Google ads, SEO, WhatsApp automation, Reels and landing pages, with real examples from Indian real estate.',
    path: '/guides',
  },
  websiteAudit: {
    title: 'Free Website Audit Tool: SEO, Speed & Mobile Check',
    description:
      'Audit your website online for free: check any page for SEO, speed, mobile, tracking and AI search readiness in under a minute, with a fix list. No sign-up.',
    path: '/tools/website-audit',
  },
  blog: {
    title: 'Marketing Blog: E-commerce, Local & Real Estate | Veloxis',
    description:
      'Practical marketing guides for e-commerce and D2C brands, local businesses and clinics, and real estate: Meta and Google ads, local SEO, landing pages.',
    path: '/blog',
  },
  privacy: {
    title: 'Privacy Policy | Veloxis Global',
    description:
      'How Veloxis Global collects and uses the information you share through our forms, cookies and analytics, and how to ask for your data to be deleted.',
    path: '/privacy-policy',
  },
  terms: {
    title: 'Terms of Service | Veloxis Global',
    description:
      'Terms for using the Veloxis Global website and our marketing services, including audits, month-to-month agreements and governing law.',
    path: '/terms',
  },
};

