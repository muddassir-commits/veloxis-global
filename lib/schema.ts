// JSON-LD generators. The site-wide Organization / WebSite / founder Person graph is
// emitted once in app/layout.tsx; page-level schema references those nodes by @id.
import { siteData } from '../data/site';

const BASE = siteData.url;
export const ORG_ID = `${BASE}/#organization`;
export const WEBSITE_ID = `${BASE}/#website`;
export const FOUNDER_ID = `${BASE}/about#founder`;

const areaServed = siteData.areaServed.map((name) => ({ '@type': 'City', name }));

export const getSiteGraph = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      // Service-area business: no street address is published on purpose.
      '@type': ['Organization', 'ProfessionalService'],
      '@id': ORG_ID,
      name: siteData.name,
      url: BASE,
      logo: { '@type': 'ImageObject', url: siteData.logo, width: 2000, height: 500 },
      image: siteData.logo,
      description:
        'Veloxis Global is a real estate marketing agency for builders, developers, brokers and channel partners. We build project landing pages, run Meta and Google ads for property leads, and set up WhatsApp chatbots and CRM automation that reply to every enquiry.',
      email: siteData.email,
      telephone: siteData.phoneRaw,
      founder: { '@id': FOUNDER_ID },
      areaServed,
      knowsAbout: [
        'Real estate marketing',
        'Real estate lead generation',
        'Real estate landing pages',
        'Meta ads for real estate',
        'Google Ads for real estate',
        'WhatsApp automation',
        'Real estate chatbots',
        'Channel partner marketing',
      ],
      sameAs: siteData.socials,
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteData.phoneRaw,
        email: siteData.email,
        contactType: 'sales',
        areaServed: 'IN',
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
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: siteData.founder,
      jobTitle: 'Founder',
      url: `${BASE}/about`,
      image: `${BASE}/images/profiles/muddassir.jpg`,
      worksFor: { '@id': ORG_ID },
      sameAs: [siteData.founderLinkedIn, siteData.founderX],
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
  image: image.startsWith('http') ? image : `${BASE}${image}`,
  datePublished,
  dateModified: dateModified || datePublished,
  inLanguage: 'en-IN',
  author: { '@id': FOUNDER_ID },
  publisher: { '@id': ORG_ID },
  ...(about?.length ? { about: about.map((a) => ({ '@type': 'Thing', name: a.name, sameAs: a.sameAs })) } : {}),
});

export const getWebPageSchema = ({
  type = 'WebPage',
  name,
  description,
  path,
}: {
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  name: string;
  description: string;
  path: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': type,
  '@id': `${BASE}${path}#webpage`,
  name,
  description,
  url: `${BASE}${path}`,
  isPartOf: { '@id': WEBSITE_ID },
  about: { '@id': ORG_ID },
  inLanguage: 'en-IN',
});
