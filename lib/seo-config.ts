import { Metadata } from 'next';

// Canonical host is www (the apex domain 308-redirects to it in Vercel).
export const SITE_URL = 'https://www.veloxisglobal.com';
export const DEFAULT_OG_IMAGE = '/images/og/homepage-og.jpg';

export interface MetaProps {
  /** Rendered exactly as written — include the brand yourself. Keep it under ~60 characters. */
  title: string;
  /** Aim for 140–160 characters. */
  description: string;
  path: string;
  ogImage?: string;
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
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
    title: 'Real Estate Marketing Agency | Veloxis Global',
    description:
      'We build project landing pages, run Meta and Google ads for property leads, and set up WhatsApp automation for builders, brokers and channel partners.',
    path: '/',
  },
  services: {
    title: 'Real Estate Marketing Services | Veloxis Global',
    description:
      'Three real estate marketing services: project landing pages, Meta and Google ads for property leads, and WhatsApp chatbots that reply to every enquiry.',
    path: '/services',
  },
  developers: {
    title: 'Marketing for Real Estate Developers & Builders | Veloxis',
    description:
      'Launch and inventory marketing for developers: RERA-compliant project pages, Meta and Google campaigns, and WhatsApp follow-up that books site visits.',
    path: '/industries/real-estate',
  },
  channelPartners: {
    title: 'Marketing for Real Estate Channel Partners | Veloxis',
    description:
      'Marketing for real estate channel partners and brokers: exclusive leads from Meta and Google, project pages you control, and instant WhatsApp follow-up.',
    path: '/channel-partners',
  },
  playbooks: {
    title: 'Real Estate Marketing Playbooks & Strategy Examples',
    description:
      'Example real estate marketing plans: campaign structure, keyword groups, bidding, landing page blueprints and WhatsApp lead flows you can inspect.',
    path: '/playbooks',
  },
  pricing: {
    title: 'Real Estate Marketing Pricing & Packages | Veloxis',
    description:
      'Monthly pricing for real estate landing pages, Meta and Google ad management and WhatsApp automation. Ad spend is paid separately; no lock-in.',
    path: '/pricing',
  },
  about: {
    title: 'About Veloxis Global & Founder Muddassir Ali',
    description:
      'Veloxis Global is a founder-led real estate marketing agency run by Muddassir Ali, working with builders, brokers and channel partners across UP and Delhi NCR.',
    path: '/about',
  },
  contact: {
    title: 'Contact Veloxis Global | Real Estate Marketing',
    description:
      'Talk to Veloxis Global about landing pages, property ads or WhatsApp automation. Call or WhatsApp +91 88876 20727, or send the form for a free marketing audit.',
    path: '/contact',
  },
  blog: {
    title: 'Real Estate Marketing Blog | Veloxis Global',
    description:
      'Practical guides for builders, brokers and channel partners: Meta and Google ads for property, landing pages, WhatsApp follow-up, EOI and CP programmes.',
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
      'Terms for using the Veloxis Global website and our real estate marketing services, including audits, month-to-month agreements and governing law.',
    path: '/terms',
  },
};

export const FOUNDER_YEARS = 4;
