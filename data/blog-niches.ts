// Blog -> niche funnel copy. Client-safe (no fs). Used by the blog post template, the sticky bar and /blog/industry/<niche>.
import type { PostIndustry } from '../lib/blog';

export interface BlogNicheInfo {
  key: PostIndustry;
  /** Breadcrumb / tab label */
  name: string;
  /** Niche page; general posts go to the hub */
  href: string;
  /** Box after the intro */
  inlineCta: { title: string; link: string };
  /** Stronger box at the end of the post */
  endCta: { title: string; desc: string; link: string };
  /** Mobile bar text */
  barText: string;
  /** Heading for the "more guides" list */
  moreTitle: string;
}

export const BLOG_NICHES: Record<PostIndustry, BlogNicheInfo> = {
  ecommerce: {
    key: 'ecommerce',
    name: 'E-commerce & D2C',
    href: '/industries/ecommerce',
    inlineCta: { title: 'Run an e-commerce brand? See how we turn ad spend into sales.', link: 'See e-commerce marketing' },
    endCta: {
      title: 'Want this working for your online store?',
      desc: 'We run Meta and Google ads, fix store pages and set up WhatsApp and email follow-ups, measured on orders and cost per order.',
      link: 'See how we grow e-commerce brands',
    },
    barText: 'Run an online store? See how we grow e-commerce brands',
    moreTitle: 'More e-commerce & D2C guides',
  },
  'local-business': {
    key: 'local-business',
    name: 'Local Business',
    href: '/industries/local-business',
    inlineCta: { title: 'Own a clinic or local business? See how we bring in more calls and bookings.', link: 'See local business marketing' },
    endCta: {
      title: 'Want more calls and bookings for your local business?',
      desc: 'We fix your Google Business Profile, build a website that brings calls and run local ads, measured on calls and bookings.',
      link: 'See how we help local businesses',
    },
    barText: 'Own a clinic or local business? See how we get you more bookings',
    moreTitle: 'More local business guides',
  },
  'real-estate': {
    key: 'real-estate',
    name: 'Real Estate',
    href: '/industries/real-estate',
    inlineCta: { title: 'Builder, broker or channel partner? See how we turn ad spend into site visits.', link: 'See real estate marketing' },
    endCta: {
      title: 'Want more site visits for your project?',
      desc: 'Project landing pages, Meta and Google ads and instant WhatsApp replies, measured on qualified enquiries and site visits.',
      link: 'See how we market real estate',
    },
    barText: 'Selling property? See how we turn ad spend into site visits',
    moreTitle: 'More real estate guides',
  },
  general: {
    key: 'general',
    name: 'Marketing',
    href: '/industries',
    inlineCta: { title: 'Not sure where to start? See the businesses we run performance marketing for.', link: 'See who we work with' },
    endCta: {
      title: 'Want this done for your business?',
      desc: 'We run performance marketing for e-commerce and D2C brands, local businesses and clinics, and real estate.',
      link: 'See the industries we work with',
    },
    barText: 'See the industries we run performance marketing for',
    moreTitle: 'Related guides',
  },
};

export const BLOG_TABS: { key: PostIndustry | 'all'; label: string; href: string }[] = [
  { key: 'all', label: 'All', href: '/blog' },
  { key: 'ecommerce', label: 'E-commerce', href: '/blog/industry/ecommerce' },
  { key: 'local-business', label: 'Local Business', href: '/blog/industry/local-business' },
  { key: 'real-estate', label: 'Real Estate', href: '/blog/industry/real-estate' },
  { key: 'general', label: 'Marketing', href: '/blog/industry/general' },
];
