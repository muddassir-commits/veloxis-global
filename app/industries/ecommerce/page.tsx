import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Megaphone, LayoutTemplate, MessageCircle, Search } from 'lucide-react';
import { NichePage, type NichePageData } from '../../../components/industries/NichePage';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';
import { getPostBySlug } from '../../../lib/blog';

// E-commerce & D2C niche page (moved from /d2c on 8 Nov 2026; /d2c 301s here).
export const metadata: Metadata = constructMetadata(pageMeta.ecommerce);

const faqs = [
  {
    question: 'What does Veloxis Global do for e-commerce and D2C brands?',
    answer:
      'We run Meta and Google ads, improve the store pages those ads send people to, fix tracking, and set up WhatsApp and email follow-ups for shoppers who did not buy. We report on orders and cost per order, not clicks.',
  },
  {
    question: 'Do you only work with Shopify stores?',
    answer:
      'No. Shopify is the most common, but the same approach works for WooCommerce and other platforms as long as we can add tracking and edit the pages ads point to. We also build new Shopify stores and landing pages.',
  },
  {
    question: 'Who pays for the ads?',
    answer: 'You do, directly to Meta and Google from your own ad accounts. Our fee is separate and the ad accounts stay yours.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'It depends on how many products and channels are involved. After the free audit we send a fixed monthly quote. There is no long contract: we work month-to-month.',
  },
  {
    question: 'Do you have e-commerce case studies?',
    answer:
      'Not yet published. We would rather show you a free audit of your own store than claim results we cannot show.',
  },
  {
    question: 'What do you need for the free audit?',
    answer: 'Your store address, and if you run ads, a rough idea of your monthly budget and which products you push.',
  },
  {
    question: 'Who will work on my account?',
    answer:
      'A small team that plans and reviews every account directly. Campaigns are planned by a Google certified team (Google Ads Search, Google Ads Apps and Google Analytics). No junior account managers.',
  },
];

export default function EcommercePage() {
  // Link the D2C Meta ads guide only once it is published (posts can be scheduled).
  const d2cGuide = getPostBySlug('meta-ads-for-d2c-brands');

  const data: NichePageData = {
    industry: 'ecommerce',
    path: '/industries/ecommerce',
    idPrefix: 'd2c',
    breadcrumb: 'E-commerce & D2C',
    description: pageMeta.ecommerce.description,
    schema: {
      name: 'E-commerce and D2C marketing: Meta and Google ads, store pages and follow-ups',
      serviceType: 'E-commerce and D2C marketing',
      audience: 'E-commerce and direct-to-consumer (D2C) brands selling on their own website',
    },
    hero: {
      badge: 'For e-commerce & D2C brands',
      h1: 'E-commerce marketing agency for D2C brands',
      lead:
        'More orders from your own website. We run Meta and Google ads, fix the store pages they send people to, and set up WhatsApp and email follow-ups for shoppers who did not buy. One hands-on team, judged on orders and cost per order.',
      whatsappLabel: 'Get a free store audit →',
      image: '/images/people/blog/meta-ads-for-d2c-brands-1.jpg',
      imageAlt: 'Hands packing a clothing order into a cardboard box next to folded sweaters',
      emailSubject: 'Free store audit',
    },
    problemsHeading: 'Why ad spend stops turning into orders',
    problemsIntro:
      'Most stores that come to us are not short of traffic ideas. Something between the ad and the order is leaking, and it is hard to see where from inside Ads Manager.',
    problems: [
      { title: 'Numbers you cannot trust', desc: 'Purchases in Ads Manager and in your store do not match, so every budget decision is a guess.' },
      { title: 'Ads that land on the wrong page', desc: 'An ad for one product opens the homepage, or a slow page loses people before the price even loads.' },
      { title: 'Carts left behind', desc: 'Surprise shipping costs, forced sign-ups or missing payment options stop people at checkout.' },
      { title: 'No second chance', desc: 'Shoppers who add to cart and leave, or first-time buyers who could reorder, never hear from you again.' },
    ],
    servicesHeading: 'The full path from ad to order',
    servicesIntro: 'Most shoppers do not buy on their first visit. Ads, pages and follow-ups have to work together.',
    services: [
      {
        icon: Megaphone,
        title: 'Meta & Google ads',
        desc: 'Prospecting and retargeting on Facebook and Instagram, plus Google Search and Shopping, with budget moved weekly to what sells.',
        href: '/services/paid-ads',
        linkLabel: 'Meta & Google Ads',
      },
      {
        icon: LayoutTemplate,
        title: 'Store & landing pages',
        desc: 'Shopify and product pages that load fast on a phone and answer the questions that stop people buying.',
        href: '/services/high-converting-landing-pages',
        linkLabel: 'Websites & Landing Pages',
      },
      {
        icon: Search,
        title: 'Tracking & SEO',
        desc: 'Meta pixel, Conversions API and GA4 set up properly, plus product and collection pages that can rank on Google.',
        href: '/services',
        linkLabel: 'All services',
      },
      {
        icon: MessageCircle,
        title: 'WhatsApp & email follow-ups',
        desc: 'Abandoned cart, browse and repeat-purchase reminders, so shoppers who left get a reason to come back.',
        href: '/services/ai-automation',
        linkLabel: 'WhatsApp & AI Automation',
      },
    ],
    checks: {
      label: 'The free store audit',
      heading: 'What we look at first in an online store',
      intro:
        'Before changing any ad, we check whether the store can turn the traffic it already gets into orders, and whether the numbers can be trusted. These six checks come first, because a problem in any one of them makes more ad spend less useful.',
      items: [
        {
          title: 'Tracking you can trust',
          desc: 'Is the Meta pixel firing on add to cart, checkout and purchase? Is the Conversions API sending the same orders from the server, without counting them twice? If the numbers in Ads Manager and in your store do not roughly agree, every budget decision is a guess.',
        },
        {
          title: 'The page each ad sends people to',
          desc: 'An ad for one product should land on that product, not the homepage. We check the first phone screen: price, delivery time, return policy, reviews you actually have, and a buy button that is visible without scrolling.',
        },
        {
          title: 'Speed on a mid-range phone',
          desc: 'Large images, many apps and pop-ups slow a store down on mobile data. We list the heaviest items on your key pages and what can be removed or compressed.',
        },
        {
          title: 'Checkout friction',
          desc: 'Forced account creation, surprise shipping charges at the last step and missing payment options (UPI, or cash on delivery where you offer it) are common reasons carts are left behind.',
        },
        {
          title: 'Follow-up after a visit',
          desc: 'Do shoppers who add to cart and leave get a WhatsApp or email reminder? Do first-time buyers hear from you again before they need to reorder? We check what is set up today and what each message says.',
        },
        {
          title: 'Ad account structure',
          desc: 'Too many small campaigns split the budget so thin that Meta cannot learn. We check how campaigns, audiences and creatives are organised and where the spend is actually going.',
        },
      ],
      after: (
        <>
          You get the findings in plain language, with the two or three changes we would make first. If you would rather
          make the changes yourself, you are free to.
          {d2cGuide && (
            <>
              {' '}For the ads side in more detail, read our guide to{' '}
              <Link href={`/blog/${d2cGuide.slug}`} className="font-semibold text-royal-blue hover:underline">
                Meta ads for D2C brands
              </Link>
              .
            </>
          )}
        </>
      ),
    },
    steps: [
      { title: 'Free store audit', desc: 'Send your website. We review your ads, store pages and follow-ups and list the 2-3 changes we would make first.' },
      { title: 'A plan for one month', desc: 'If it makes sense to work together, we agree on one product range, a budget and the numbers we will report on.' },
      { title: 'Launch and weekly reviews', desc: 'We run the ads and follow-ups, then review orders every week and move budget to what sells.' },
    ],
    fit: [
      'You sell on your own website (Shopify, WooCommerce or similar), with or without marketplaces',
      'You run Meta or Google ads, or want to start, and you pay the ad budget to them directly',
      'You want a small team that works with you directly, not an account manager',
      'Month-to-month: no long contract',
    ],
    auditBox: {
      title: 'Start with a free store audit',
      desc: 'Send your website on WhatsApp or email. We reply personally with the first changes we would make.',
    },
    guidesTitle: 'Latest guides for e-commerce brands',
    faqTitle: 'E-commerce & D2C questions',
    faqDescription: 'How we work with online brands, what it costs and what we need from you.',
    faqs,
    cta: {
      title: 'Get a free store audit',
      description: 'Send us your store and current ads. We will check tracking, pages and follow-ups and tell you what to fix first. No obligation.',
    },
  };

  return <NichePage data={data} />;
}
