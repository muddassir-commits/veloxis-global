import React from 'react';
import { Metadata } from 'next';
import { Globe, MapPin, Star, MessageCircle } from 'lucide-react';
import { NichePage, type NichePageData } from '../../../components/industries/NichePage';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

// Local businesses & clinics niche page (moved from /local-business on 8 Nov 2026; /local-business 301s here).
export const metadata: Metadata = constructMetadata(pageMeta.localBusiness);

const faqs = [
  {
    question: 'What does Veloxis Global do for local businesses and clinics?',
    answer:
      'We build or fix your website, set up local SEO and your Google Business Profile, run local Google and Meta ads when they make sense, and connect form, call and WhatsApp enquiries so every lead gets a fast reply.',
  },
  {
    question: 'Which kinds of local businesses do you work with?',
    answer:
      'Clinics, dental practices, physiotherapists, salons and spas, gyms, home services such as cleaning, repairs and pest control, trades and shops. If customers find you by searching nearby, the approach fits.',
  },
  {
    question: 'Do you work with businesses outside India?',
    answer:
      'Yes. We work remotely with businesses in the UK, the US and other countries, on email, WhatsApp and video calls, in your time zone where needed.',
  },
  {
    question: 'How long until I see results from local SEO?',
    answer:
      'Google Business Profile changes can show within a few weeks. Website rankings usually take a few months, depending on your area and competition. We report progress every month.',
  },
  {
    question: 'Can you get my business to the top of Google Maps?',
    answer:
      'Nobody can honestly promise a top position on Google Maps. We set up and keep your profile complete and accurate the way Google’s own guidelines describe, and show you each month what changed.',
  },
  {
    question: 'Will I own the website?',
    answer: 'Yes. The domain, website and Google profile stay in your name, and you keep everything if you stop working with us.',
  },
  {
    question: 'Do you have case studies for local businesses?',
    answer:
      'Not yet published. We would rather show you a free audit of your own website and profile than claim results we cannot show.',
  },
];

const data: NichePageData = {
  industry: 'local-business',
  path: '/industries/local-business',
  idPrefix: 'local',
  breadcrumb: 'Local Businesses',
  description: pageMeta.localBusiness.description,
  schema: {
    name: 'Digital marketing for local businesses and clinics',
    serviceType: 'Local SEO, websites and local ads',
    audience: 'Local businesses, clinics and home services',
  },
  hero: {
    badge: 'For local businesses & clinics',
    h1: 'Digital marketing for local businesses & clinics',
    lead:
      'More calls and bookings from people searching nearby. We build websites that turn visitors into calls, set up your Google Business Profile and local SEO, and run local ads for clinics, dentists, salons and home services in India, the UK and the US.',
    whatsappLabel: 'Get a free website audit →',
    image: '/images/people/blog/local-seo-man-phone-market.jpg',
    imageAlt: 'A shop owner checking his phone at a local market',
    emailSubject: 'Free website audit',
  },
  problemsHeading: 'Why nearby customers call someone else',
  problemsIntro:
    'Most local customers search on their phone, compare two or three businesses and call the one that looks easiest to trust. These are the usual reasons that call goes elsewhere.',
  problems: [
    { title: 'Hard to find on Google Maps', desc: 'An incomplete or unverified Google Business Profile, wrong categories or no recent photos and reviews.' },
    { title: 'A website that does not bring calls', desc: 'Slow on a phone, no clear services or areas, and the call or WhatsApp button is hard to find.' },
    { title: 'Enquiries that wait', desc: 'Form and WhatsApp messages answered hours later, by which time the customer has booked elsewhere.' },
    { title: 'Ads with no tracking', desc: 'Money spent on boosts or Google ads with no way to tell which ones brought a call or a booking.' },
  ],
  servicesHeading: 'From search to a phone call',
  servicesIntro: 'Your website, Google profile, ads and replies have to work together to win that first call.',
  services: [
    {
      icon: Star,
      title: 'Google Business Profile & local SEO',
      desc: 'Profile set up or cleaned up, categories, photos and posts, service and area pages, and a simple way to ask happy customers for reviews.',
      href: '/services',
      linkLabel: 'All services',
    },
    {
      icon: Globe,
      title: 'A website that brings calls',
      desc: 'A fast, mobile-first site with your services, reviews and a clear call, WhatsApp or booking button on every page.',
      href: '/services/high-converting-landing-pages',
      linkLabel: 'Websites & Landing Pages',
    },
    {
      icon: MapPin,
      title: 'Local Google & Meta ads',
      desc: 'Search ads for people looking for your service nearby, and Meta ads in your area, with calls and bookings tracked.',
      href: '/services/paid-ads',
      linkLabel: 'Meta & Google Ads',
    },
    {
      icon: MessageCircle,
      title: 'Instant enquiry follow-up',
      desc: 'Form, call and WhatsApp enquiries land in one place, with an instant reply and reminders so no lead waits until tomorrow.',
      href: '/services/ai-automation',
      linkLabel: 'WhatsApp & AI Automation',
    },
  ],
  steps: [
    { title: 'Free website audit', desc: 'Send your website or Google profile. We check speed, mobile layout, search visibility and how easy it is to contact you.' },
    { title: 'A fixed quote', desc: 'You get a written list of what we would build or fix first and one fixed price. No long contract.' },
    { title: 'Build, launch and report', desc: 'We build or fix the site and profile, then send a short monthly report on calls, forms and search visibility.' },
  ],
  fit: [
    'Clinics, dental practices, salons, gyms, home services, trades, repair services and shops',
    'In India, the UK, the US or anywhere you want more local customers',
    'You have no website, an old one, or one that brings no calls',
    'You want one team for the website, Google profile, ads and follow-up, month-to-month',
  ],
  auditBox: {
    title: 'Start with a free website audit',
    desc: 'Send your website or Google profile link on WhatsApp or email. We reply personally with the first changes we would make.',
  },
  guidesTitle: 'Latest guides for local businesses',
  faqTitle: 'Local business questions',
  faqDescription: 'How we work with local businesses and clinics, what it costs and what you own.',
  faqs,
  cta: {
    title: 'Get a free local marketing audit',
    description: 'Send us your website or Google Business Profile. We will tell you what is stopping nearby customers from calling, and what to fix first.',
  },
};

export default function LocalBusinessPage() {
  return <NichePage data={data} />;
}
