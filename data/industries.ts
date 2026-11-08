// The three niches Veloxis Global serves (owner, 8 Nov 2026: equal weight, no "main" niche).
// Used by the homepage industries section, the /industries hub and the niche "latest guides" lists.

export type IndustryKey = 'ecommerce' | 'local-business' | 'real-estate';

export interface Industry {
  key: IndustryKey;
  href: string;
  eyebrow: string;
  title: string;
  desc: string;
  points: string[];
  image: string;
  alt: string;
  cta: string;
  /** Blog slugs that belong to this niche when a post has no `industry` field yet (matched as substrings). */
  slugKeywords: string[];
}

export const industries: Industry[] = [
  {
    key: 'ecommerce',
    href: '/industries/ecommerce',
    eyebrow: 'Online stores',
    title: 'E-commerce & D2C brands',
    desc: 'Meta and Google ads, store pages that convert and WhatsApp and email follow-ups. Measured on orders and cost per order.',
    points: ['Meta & Google shopping ads', 'Shopify and store page fixes', 'Cart and repeat-order follow-ups'],
    image: '/images/people/blog/meta-ads-for-d2c-brands-1.jpg',
    alt: 'Hands packing a clothing order into a cardboard box next to folded sweaters',
    cta: 'E-commerce marketing',
    slugKeywords: ['d2c', 'ecommerce', 'e-commerce', 'shopify', 'instagram-reels-marketing'],
  },
  {
    key: 'local-business',
    href: '/industries/local-business',
    eyebrow: 'India, UK & US',
    title: 'Local businesses & clinics',
    desc: 'Websites, local SEO, Google Business Profile and local ads for clinics, dentists, salons and home services. Measured on calls and bookings.',
    points: ['Google Business Profile & Maps', 'Websites that bring calls', 'Local Google & Meta ads'],
    image: '/images/people/blog/local-seo-woman-phone-call.jpg',
    alt: 'A woman calling a local business from her phone',
    cta: 'Local business marketing',
    slugKeywords: ['local-seo-for', 'generative-engine-optimization', 'google-business-profile-checklist', 'dentist', 'clinic', 'salon', 'local-business'],
  },
  {
    key: 'real-estate',
    href: '/industries/real-estate',
    eyebrow: 'Builders & brokers',
    title: 'Real estate',
    desc: 'Project landing pages, Meta and Google ads and instant WhatsApp replies for developers, brokers and channel partners. Measured on site visits.',
    points: ['Project landing pages', 'Property lead ads', 'WhatsApp lead follow-up'],
    image: '/images/people/home/home-buyer-browsing-laptop.jpg',
    alt: 'A home buyer browsing property listings on a laptop',
    cta: 'Real estate marketing',
    slugKeywords: ['real-estate', 'rera', 'property', 'nri', 'channel-partner', 'plots', 'eoi', '99acres'],
  },
];

export const getIndustry = (key: IndustryKey) => industries.find((i) => i.key === key)!;
