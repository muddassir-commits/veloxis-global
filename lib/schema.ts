// JSON-LD generators. The site-wide Organization / WebSite graph is
// emitted once in app/layout.tsx; page-level schema references those nodes by @id.
import { siteData } from '../data/site';

const BASE = siteData.url;
export const ORG_ID = `${BASE}/#organization`;
export const WEBSITE_ID = `${BASE}/#website`;

const areaServed = [
  ...siteData.areaServed.map((name) => ({ '@type': 'City', name })),
  ...siteData.countriesServed.map((name) => ({ '@type': 'Country', name })),
];

export const getSiteGraph = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      // Service-area business: no street address is published on purpose.
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: siteData.name,
      alternateName: ['Veloxis Global Performance Marketing', 'veloxisglobal.com'],
      url: BASE,
      logo: { '@type': 'ImageObject', '@id': `${BASE}/#logo`, url: siteData.logoSquare, contentUrl: siteData.logoSquare, width: 512, height: 512, caption: siteData.name },
      image: [siteData.logoSquare, siteData.logo, `${BASE}/images/og/homepage-og.jpg`],
      description: siteData.definition,
      disambiguatingDescription: siteData.disambiguation,
      slogan: 'Performance marketing measured on leads and sales, not clicks.',
      email: siteData.email,
      telephone: siteData.phoneRaw,
      address: { '@type': 'PostalAddress', addressLocality: siteData.baseCity, addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
      areaServed,
      knowsAbout: [
        'Performance marketing',
        'E-commerce marketing',
        'D2C brand marketing',
        'Shopify stores',
        'Local SEO',
        'Google Business Profile',
        'Clinic and dental marketing',
        'Real estate marketing',
        'Real estate lead generation',
        'Meta ads',
        'Google Ads',
        'Landing pages',
        'Website design',
        'Search engine optimization',
        'WhatsApp automation',
        'AI chatbots',
      ],
      sameAs: [...siteData.socials, ...siteData.profiles],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteData.phoneRaw,
        email: siteData.email,
        contactType: 'sales',
        areaServed: ['IN', 'US', 'GB'],
        availableLanguage: ['en', 'hi'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: BASE,
      name: siteData.name,
      inLanguage: 'en-IN',
      publisher: { '@id': ORG_ID },
    },
  ],
});

export const getServiceSchema = ({
  name,
  description,
  path,
  serviceType,
  audience,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  audience?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${BASE}${path}#service`,
  name,
  description,
  url: `${BASE}${path}`,
  serviceType,
  provider: { '@id': ORG_ID },
  areaServed,
  ...(audience ? { audience: { '@type': 'BusinessAudience', name: audience } } : {}),
});

export const getFAQPageSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

export const getBreadcrumbListSchema = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.item,
  })),
});

export const getArticleSchema = ({
  title,
  description,
  path,
  image,
  datePublished,
  dateModified,
  about,
}: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  about?: { name: string; sameAs: string }[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description,
  url: `${BASE}${path}`,
  mainEntityOfPage: `${BASE}${path}`,
  // Full-size ImageObject so Google can show the cover photo as a large result image.
  image: {
    '@type': 'ImageObject',
    url: image.startsWith('http') ? image : `${BASE}${image}`,
    width: 1600,
    height: 1000,
  },
  thumbnailUrl: image.startsWith('http') ? image : `${BASE}${image}`,
  datePublished,
  dateModified: dateModified || datePublished,
  inLanguage: 'en-IN',
  author: { '@type': 'Organization', '@id': ORG_ID, name: siteData.name, url: `${BASE}/about` },
  publisher: { '@id': ORG_ID },
  ...(about?.length ? { about: about.map((a) => ({ '@type': 'Thing', name: a.name, sameAs: a.sameAs })) } : {}),
});

export const getWebPageSchema = ({
  type = 'WebPage',
  name,
  description,
  path,
  mentions,
  dateModified,
}: {
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  name: string;
  description: string;
  path: string;
  /** @id of a node the page is about besides the organisation, e.g. a service */
  mentions?: string;
  dateModified?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': type,
  '@id': `${BASE}${path}#webpage`,
  name,
  description,
  url: `${BASE}${path}`,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  ...(mentions ? { mentions: { '@id': mentions } } : {}),
  ...(dateModified ? { dateModified } : {}),
  inLanguage: 'en-IN',
});

export const getVideoSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl,
  transcript,
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
  transcript?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name,
  description,
  thumbnailUrl: thumbnailUrl.startsWith('http') ? thumbnailUrl : `${BASE}${thumbnailUrl}`,
  uploadDate,
  ...(duration ? { duration } : {}),
  ...(contentUrl ? { contentUrl } : {}),
  ...(embedUrl ? { embedUrl } : {}),
  ...(transcript ? { transcript } : {}),
  inLanguage: ['hi-IN', 'en-IN'],
  publisher: { '@id': ORG_ID },
  author: { '@type': 'Organization', '@id': ORG_ID, name: siteData.name },
});

