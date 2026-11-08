// City pages: "Digital Marketing Agency in <City>". General agency pages with the three niches;
// real estate keeps its local details (corridors/localities) from data/audiences.ts.
// Service-area business: no street address, no working hours. Never invent clients or results.

import { audiences, type AudienceImages, type AudienceBlock } from './audiences';

export type CityKey = 'noida' | 'lucknow' | 'kanpur';

export interface CityData {
  key: CityKey;
  city: string;
  path: string;
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  /** Nearby areas we serve (names only, no addresses) */
  areasServed: { heading: string; intro: string; areas: string[] };
  niches: { title: string; desc: string; href: string; linkLabel: string }[];
  realEstate: { heading: string; intro: string; areas: AudienceBlock[] };
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  images: AudienceImages;
  schemaServiceType: string;
}

export const cityServices = (city: string) => [
  { title: 'Meta & Google Ads', desc: `Campaigns for ${city} customers, judged on orders, bookings or qualified enquiries.`, href: '/services/paid-ads' },
  { title: 'Websites & Landing Pages', desc: 'Fast, mobile-first pages with WhatsApp and booking buttons and tracking built in.', href: '/services/high-converting-landing-pages' },
  { title: 'SEO & Local SEO', desc: `Google Business Profile, local search and on-page SEO so ${city} customers find you.`, href: '/services/seo' },
  { title: 'WhatsApp & AI Automation', desc: 'Instant replies, qualification, booking and follow-ups for every enquiry.', href: '/services/ai-automation' },
];

const niches = (city: string, reNote: string) => [
  {
    title: 'E-commerce & D2C',
    desc: `For online stores and D2C brands selling to ${city} and across India: Meta and Google ads, store and landing page fixes, and WhatsApp and email follow-ups, measured on orders and cost per order.`,
    href: '/industries/ecommerce',
    linkLabel: 'E-commerce marketing',
  },
  {
    title: 'Local businesses & clinics',
    desc: `For clinics, dentists, salons, coaching centres and home-service businesses in ${city}: a clear website, Google Business Profile, local SEO and local ads, measured on calls and bookings.`,
    href: '/industries/local-business',
    linkLabel: 'Local business marketing',
  },
  {
    title: 'Real estate',
    desc: reNote,
    href: '/industries/real-estate',
    linkLabel: 'Real estate marketing',
  },
];

export const cities: Record<CityKey, CityData> = {
  noida: {
    key: 'noida',
    city: 'Noida',
    path: '/digital-marketing-agency-noida',
    breadcrumb: 'Noida',
    eyebrow: 'Noida & Greater Noida · digital marketing',
    h1: 'Digital Marketing Agency in Noida for Ads, SEO and WhatsApp Leads',
    lead:
      'Veloxis Global is a Noida-based performance marketing agency for e-commerce brands, local businesses and clinics, and real estate: Meta and Google ads, websites, SEO and WhatsApp automation.',
    intro: [
      'Veloxis Global is a digital marketing agency based in Noida. We help businesses in Noida, Greater Noida and the wider Delhi NCR get more orders, bookings and qualified enquiries, and we also work with online brands that sell across India.',
      'We work with three kinds of business: e-commerce and D2C brands, local businesses and clinics, and real estate developers, brokers and channel partners. Each gets its own plan, because a store, a dental clinic and a property launch measure success in different ways.',
      'Everything starts with a free audit of your website or store, ads and lead follow-up. You keep ownership of your ad accounts, pay ad spend directly to Google and Meta, and work with us month-to-month. We are a service-area business: we meet clients on WhatsApp, phone and video, and in person in Noida and Greater Noida when it helps.',
    ],
    areasServed: {
      heading: 'Areas we serve around Noida',
      intro: 'We work with businesses across Noida and the nearby NCR, mostly remotely and in person where useful. We don’t run a walk-in office.',
      areas: ['Noida (all sectors)', 'Noida Expressway', 'Greater Noida', 'Greater Noida West (Noida Extension)', 'Yamuna Expressway', 'Ghaziabad', 'Delhi', 'Gurugram', 'Faridabad'],
    },
    niches: niches(
      'Noida',
      'For developers, builders, brokers and channel partners selling in Noida, Greater Noida and along the Yamuna Expressway: project landing pages, Meta and Google ads and instant WhatsApp replies, reported on cost per site visit. Every project we promote must be UP RERA registered.'
    ),
    realEstate: {
      heading: 'Real estate in Noida: corridors we plan campaigns around',
      intro: 'Noida is one of the most crowded property ad markets in North India. Many projects compete for the same buyers in the same sectors, so exclusive leads, speed of reply and cost per site visit matter more than reach. We plan by sector and corridor.',
      areas: audiences.noida.local!.areas,
    },
    faqs: [
      { question: 'Which digital marketing services do you offer in Noida?', answer: 'Four services that work together: Meta and Google ads management, websites and landing pages, SEO and local SEO (including Google Business Profile), and WhatsApp and AI automation that replies to every enquiry in seconds.' },
      { question: 'Are you based in Noida?', answer: 'Yes. Veloxis Global is a team based in Noida. We don’t have a public walk-in office: we work with clients on WhatsApp, phone and video calls, and can meet in person in Noida and Greater Noida. Your ads, pages and leads are all set up in accounts you own.' },
      { question: 'What kinds of businesses do you work with in Noida?', answer: 'E-commerce and D2C brands, local businesses and clinics, and real estate developers, builders, brokers and channel partners. We don’t take on every industry, so the plans can be specific.' },
      { question: 'How much does a digital marketing agency in Noida cost?', answer: 'It depends on the services and the size of the business, so we quote after a free audit. There is no lock-in: we work month-to-month with 30 days’ notice. Ad spend is paid by you directly to Google and Meta and is separate from our fee.' },
      { question: 'Can you help my local business in Noida show up on Google Maps?', answer: 'Yes. We set up and optimise your Google Business Profile, improve your website for local search and help you collect genuine reviews. We can’t promise a ranking, but we fix what is holding you back first.' },
      { question: 'Do you cover Greater Noida, Greater Noida West and the rest of NCR?', answer: 'Yes. We work with businesses across Noida, Greater Noida, Greater Noida West, Ghaziabad, Delhi, Gurugram and Faridabad, and we run campaigns for clients elsewhere in India too.' },
      { question: 'How much ad budget does a Noida business need?', answer: 'You pay ad spend directly to Meta and Google. The right budget depends on your market and average order or customer value, and we recommend one after the audit. For real estate projects we suggest at least ₹15,000 a month per project, and launches usually need more.' },
      { question: 'Can you promote a real estate project that is not UP RERA registered?', answer: 'No. We only advertise projects that are registered with UP RERA, and the registration number appears on every ad and landing page.' },
    ],
    ctaTitle: 'Based in Noida or Greater Noida?',
    ctaDescription: 'Get a free review of your website or store, ads and lead follow-up from a Noida-based team, with the first fixes we would make.',
    images: audiences.noida.images,
    schemaServiceType: 'Digital marketing in Noida and Greater Noida',
  },
  lucknow: {
    key: 'lucknow',
    city: 'Lucknow',
    path: '/digital-marketing-agency-lucknow',
    breadcrumb: 'Lucknow',
    eyebrow: 'Lucknow · digital marketing',
    h1: 'Digital Marketing Agency in Lucknow for Ads, SEO and WhatsApp Leads',
    lead:
      'Meta and Google ads, websites, local SEO and WhatsApp automation for Lucknow businesses: e-commerce brands, clinics and local businesses, and real estate developers and brokers.',
    intro: [
      'Veloxis Global is a digital marketing agency working with businesses in Lucknow. We help e-commerce and D2C brands, local businesses and clinics, and real estate developers, brokers and channel partners turn ad spend and search visibility into orders, bookings and qualified enquiries.',
      'Lucknow customers search by area: a dentist in Gomti Nagar, a coaching centre near Aliganj, flats on Sultanpur Road. So we plan around localities, not just the city name: pages and ads aimed at the areas your customers live in, a complete Google Business Profile, and an instant WhatsApp reply to every enquiry.',
      'We are a team based in Noida with roots in Kanpur, so we know Uttar Pradesh customers, Lucknow included. We work with Lucknow clients on WhatsApp, phone and video calls, without a walk-in office, and every account and lead stays in your name. We work month-to-month and start with a free audit.',
    ],
    areasServed: {
      heading: 'Lucknow areas we work with',
      intro: 'We work with Lucknow businesses remotely. These are areas customers and buyers ask about most; we also serve the rest of the city and nearby towns.',
      areas: ['Gomti Nagar and Gomti Nagar Extension', 'Hazratganj', 'Aliganj', 'Indira Nagar', 'Jankipuram', 'Alambagh', 'Sushant Golf City', 'Sultanpur Road', 'Raebareli Road', 'Faizabad Road', 'IIM Road', 'Shaheed Path'],
    },
    niches: niches(
      'Lucknow',
      'For developers, builders, brokers and channel partners selling in Lucknow: a landing page per project, Meta and Google ads aimed at the corridors buyers search, and instant WhatsApp replies, reported on cost per site visit. Every project we promote must be UP RERA registered.'
    ),
    realEstate: {
      heading: 'Real estate in Lucknow: localities we plan campaigns around',
      intro: 'Lucknow buyers rarely search for “property in Lucknow”. They search by corridor and locality, so each project gets its own page and ads aimed at the areas its buyers actually live in.',
      areas: audiences.lucknow.local!.areas,
    },
    faqs: [
      { question: 'Which digital marketing services do you offer in Lucknow?', answer: 'Four services that work together: Meta and Google ads management, websites and landing pages, SEO and local SEO (including Google Business Profile), and WhatsApp and AI automation that replies to every enquiry in seconds.' },
      { question: 'Do you have an office in Lucknow?', answer: 'No. We are a team based in Noida and work with Lucknow clients on WhatsApp, phone and video calls. Your ads, pages and leads are all set up in accounts you own.' },
      { question: 'What kinds of businesses do you work with in Lucknow?', answer: 'E-commerce and D2C brands, local businesses and clinics, and real estate developers, builders, brokers and channel partners.' },
      { question: 'How do I choose a digital marketing agency in Lucknow?', answer: 'Ask three things: will they report on orders, bookings or qualified enquiries rather than likes and clicks, will the ad accounts and data be in your name, and is there a lock-in. At Veloxis Global you own the accounts, reports are on outcomes, and we work month-to-month with 30 days’ notice.' },
      { question: 'Can you help my clinic or shop in Lucknow rank on Google Maps?', answer: 'Yes. We set up and optimise your Google Business Profile, improve your website for local search and help you collect genuine reviews. We can’t promise a ranking, but we fix what is holding you back first.' },
      { question: 'How much ad budget do I need in Lucknow?', answer: 'You pay ad spend directly to Meta and Google. The right budget depends on your market and what a customer is worth to you, and we recommend one after a free audit. For real estate projects we suggest at least ₹15,000 a month per project.' },
      { question: 'Which Lucknow localities do you run real estate campaigns for?', answer: 'We plan campaigns locality by locality, including Gomti Nagar and Gomti Nagar Extension, Sushant Golf City, Shaheed Path, Sultanpur Road, Raebareli Road, Faizabad Road, IIM Road and Jankipuram. Each project is targeted at the areas its buyers live in and search for.' },
      { question: 'Can you promote a real estate project that is not UP RERA registered?', answer: 'No. We only advertise projects that are registered with UP RERA, and the registration number appears on every ad and landing page.' },
    ],
    ctaTitle: 'Growing a business in Lucknow?',
    ctaDescription: 'Get a free review of your website or store, ads and lead follow-up, with the first three fixes we would make.',
    images: audiences.lucknow.images,
    schemaServiceType: 'Digital marketing in Lucknow',
  },
  kanpur: {
    key: 'kanpur',
    city: 'Kanpur',
    path: '/digital-marketing-agency-kanpur',
    breadcrumb: 'Kanpur',
    eyebrow: 'Kanpur · digital marketing',
    h1: 'Digital Marketing Agency in Kanpur for Ads, SEO and WhatsApp Leads',
    lead:
      'Meta and Google ads, websites, local SEO and WhatsApp automation for Kanpur businesses: shops and D2C brands, clinics and local businesses, and real estate developers and brokers.',
    intro: [
      'Veloxis Global is a digital marketing agency with roots in Kanpur and a team based in Noida. We help Kanpur e-commerce and D2C brands, local businesses and clinics, and real estate developers, brokers and channel partners get more orders, bookings and qualified enquiries.',
      'Kanpur is a word-of-mouth market. Many customers already know someone in your trade, and they message on WhatsApp before they ever fill a form. Speed and trust decide who wins: a clear page with real details, a complete Google Business Profile with genuine reviews, and a quick, polite reply on WhatsApp.',
      'We work with Kanpur clients on WhatsApp, phone and video calls, without a walk-in office. Your ad accounts, pages and leads stay in your name, we work month-to-month, and we start with a free audit.',
    ],
    areasServed: {
      heading: 'Kanpur areas we work with',
      intro: 'We work with Kanpur businesses remotely. These are areas customers and buyers ask about most; we also serve the rest of the city and nearby towns.',
      areas: ['Swaroop Nagar', 'Civil Lines', 'Tilak Nagar', 'Kakadeo', 'Kalyanpur', 'Rawatpur', 'Kidwai Nagar', 'Barra', 'Naubasta', 'Shyam Nagar', 'Panki', 'Unnao'],
    },
    niches: niches(
      'Kanpur',
      'For developers, builders, brokers and channel partners selling flats, plots and villas in Kanpur: a landing page per project, Meta and Google ads by locality and instant WhatsApp replies, reported on cost per site visit. Every project we promote must be UP RERA registered.'
    ),
    realEstate: {
      heading: 'Real estate in Kanpur: localities we plan campaigns around',
      intro: 'Kanpur buyers search and compare by area. Each project gets ads and messaging for the people who live near it or want to move there.',
      areas: audiences.kanpur.local!.areas,
    },
    faqs: [
      { question: 'Are you a Kanpur agency?', answer: 'Veloxis Global has roots in Kanpur. We are based in Noida and work with Kanpur clients on WhatsApp, phone and video calls. We don’t have a public walk-in office.' },
      { question: 'Which digital marketing services do you offer in Kanpur?', answer: 'Four services that work together: Meta and Google ads management, websites and landing pages, SEO and local SEO (including Google Business Profile), and WhatsApp and AI automation that replies to every enquiry in seconds.' },
      { question: 'What kinds of businesses do you work with in Kanpur?', answer: 'E-commerce and D2C brands, local businesses and clinics, and real estate developers, builders, brokers and channel partners.' },
      { question: 'Can online marketing work in a word-of-mouth market like Kanpur?', answer: 'Yes, when it is narrow and quick. Ads aimed at the right areas, a page that answers price and trust questions, a complete Google Business Profile and an instant WhatsApp reply add a steady source of new customers next to referrals.' },
      { question: 'Can you help my shop or clinic in Kanpur show up on Google Maps?', answer: 'Yes. We set up and optimise your Google Business Profile, improve your website for local search and help you collect genuine reviews. We can’t promise a ranking, but we fix what is holding you back first.' },
      { question: 'How much ad budget does a Kanpur business need?', answer: 'You pay ad spend directly to Meta and Google. The right budget depends on your market and what a customer is worth to you, and we recommend one after a free audit. For real estate projects we suggest at least ₹15,000 a month per project, and more for a launch.' },
      { question: 'Can you promote plots and plotted developments in Kanpur?', answer: 'Yes, if the project is registered with UP RERA where registration is required. Plot campaigns focus on location, price per square yard, approvals and site-visit booking.' },
      { question: 'Do you work with individual brokers in Kanpur?', answer: 'Yes. Brokers and channel partners get a page for each project they sell, ads that bring leads only they receive, and instant WhatsApp follow-up.' },
    ],
    ctaTitle: 'Growing a business in Kanpur?',
    ctaDescription: 'Get a free review of your website or store, ads and lead follow-up from a team with Kanpur roots.',
    images: audiences.kanpur.images,
    schemaServiceType: 'Digital marketing in Kanpur',
  },
};
