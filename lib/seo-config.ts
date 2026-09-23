import { Metadata } from 'next';

// Canonical host is www (the apex domain 308-redirects to it in Vercel).
export const SITE_URL = 'https://www.veloxisglobal.com';

export interface MetaProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
  geoRegion?: string;
  geoPlacename?: string;
  geoPosition?: string;
}

export function constructMetadata({
  title,
  description,
  path,
  ogImage = '/images/og/homepage-og.jpg',
  noIndex = false,
  geoRegion,
  geoPlacename,
  geoPosition
}: MetaProps): Metadata {
  const url = `${SITE_URL}${path}`;
  const cleanTitle = title.replace(' | Veloxis Global', '');
  const titleObj = title.includes(' | Veloxis Global') ? { absolute: title } : cleanTitle;

  const otherMeta: Record<string, string> = {};
  if (geoRegion) otherMeta["geo.region"] = geoRegion;
  if (geoPlacename) otherMeta["geo.placename"] = geoPlacename;
  if (geoPosition) {
    otherMeta["geo.position"] = geoPosition;
    otherMeta["ICBM"] = geoPosition.replace(';', ', ');
  }

  return {
    title: titleObj,
    description,
    metadataBase: new URL(SITE_URL),
    authors: [{ name: 'Muddassir Ali', url: 'https://muddassirali.com' }],
    creator: 'Muddassir Ali',
    publisher: 'Veloxis Global',
    alternates: {
      canonical: url,
      languages: {
        'en-IN': url,
        'x-default': url,
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
    other: otherMeta
  };
}

export const pageMeta = {
  home: {
    title: "Real Estate Marketing Agency in Delhi NCR | Veloxis Global",
    description: "Veloxis Global — Delhi NCR's trusted real estate marketing agency delivering high-converting landing pages, Google Ads, and Meta Ads for property developers.",
    path: '/'
  },

  about: {
    title: "About Us | Real Estate Marketing Agency NCR",
    description: "Veloxis Global is a results-driven real estate marketing agency founded by Muddassir Ali. We specialize in property lead generation and WhatsApp CRM automation.",
    path: '/about'
  },
  caseStudies: {
    title: 'Real Estate Case Studies: Growth and ROI | Veloxis Global',
    description: 'Explore how we help real estate developers and channel partners in Delhi NCR scale site visits and lower CPL with data-driven marketing.',
    path: '/case-studies'
  },
  pricing: {
    title: 'Real Estate Marketing Pricing & Packages | Veloxis Global',
    description: 'Get transparent details on our real estate lead generation, landing page, and automation packages. ROI-driven for brokers and developers.',
    path: '/pricing'
  },
  testimonials: {
    title: 'Client Reviews and Testimonials 2026 | Veloxis Global',
    description: 'Read reviews from real estate developers and brokers in Delhi, Noida, and Greater Noida. Discover why we have a 4.9/5 rating for property marketing.',
    path: '/testimonials'
  },
  audit: {
    title: 'Get a Free Real Estate Marketing Audit | Veloxis Global',
    description: 'Get a FREE, no-obligation real estate marketing health audit. Complete our simple form to receive your property lead generation roadmap today.',
    path: '/contact'
  },
  contact: {
    title: 'Contact Us | Veloxis Global Real Estate Marketing',
    description: 'Ready to sell more properties? Talk to our Delhi NCR real estate marketing specialists. Book a strategy call or chat on WhatsApp to scale your leads.',
    path: '/contact'
  },
  blog: {
    title: "Real Estate Marketing Blog & Insights | Veloxis Global",
    description: "Expert real estate marketing insights for brokers and developers. Google Ads tutorials, landing page optimization, and WhatsApp automation guides.",
    path: '/blog'
  }
};

export const FOUNDER_YEARS = 4;
