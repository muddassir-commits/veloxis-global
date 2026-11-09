import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { IndustriesStrip } from '../../components/sections/IndustriesStrip';
import { ProcessTimeline } from '../../components/sections/ProcessTimeline';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { getWebPageSchema } from '../../lib/schema';
import { constructMetadata, pageMeta, SITE_URL } from '../../lib/seo-config';
import { industries } from '../../data/industries';

// Industries hub (8 Nov 2026): the three equal niches. Replaces the old /industries → /industries/real-estate redirect.
export const metadata: Metadata = constructMetadata(pageMeta.industries);

const faqs = [
  {
    question: 'Which industries does Veloxis Global work with?',
    answer:
      'Three: e-commerce and D2C brands, local businesses and clinics (dentists, clinics, salons, home services and similar), and real estate (developers, builders, brokers and channel partners).',
  },
  {
    question: 'Why is e-commerce your main focus?',
    answer:
      'Online stores need ads, the store and repeat orders to work together, and that is the system we build best. We still take local business and real estate work, planned around how those customers call, book or visit.',
  },
  {
    question: 'Are the services different for each industry?',
    answer:
      'The core work is the same: ads, pages, SEO and follow-up. Online stores also get Shopify, conversion and retention work. What changes is the result we track and the pages and campaigns we build.',
  },
  {
    question: 'Do you work with businesses outside India?',
    answer:
      'Yes. We are based in Noida and work remotely with online brands and local businesses in the UK and the US as well as across India.',
  },
  {
    question: 'My business is not in these industries. Can you still help?',
    answer:
      'Sometimes. Tell us about your business and how customers find you today. If we are not the right fit, we will say so and, where we can, point you to what to fix first.',
  },
  {
    question: 'How do I start?',
    answer:
      'Ask for a free audit. We review your website or store, ads and lead follow-up and tell you what we would change first, with no obligation.',
  },
  {
    question: 'Is there a contract?',
    answer: 'No long contract. We work month-to-month, and your ad accounts, website and data stay in your name.',
  },
];

export default function IndustriesPage() {
  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          type: 'CollectionPage',
          name: 'Industries we serve',
          description: pageMeta.industries.description,
          path: '/industries',
        })}
      />
      <SchemaMarkup
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Industries Veloxis Global serves',
          itemListElement: industries.map((ind, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: ind.title,
            url: `${SITE_URL}${ind.href}`,
          })),
        }}
      />

      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Industries', href: '/industries' }]} />
        </div>
      </section>

      <section className="bg-slate-900 text-white relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob -top-40 -right-40 w-96 h-96 bg-[rgba(37,99,235,0.3)]" />
          <div className="aurora-blob aurora-blob-delay -bottom-48 left-1/4 w-80 h-80 bg-[rgba(52,211,153,0.12)]" />
        </div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-left">
          <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider mb-6">
            Industries
          </span>
          <h1 className="text-[34px] sm:text-5xl font-extrabold tracking-tight leading-[1.1]">Marketing for e-commerce, local businesses and real estate</h1>
          <p className="text-lg text-slate-300 leading-relaxed mt-6">
            We focus on three kinds of business, so we know how their customers search, compare and buy. Pick yours to see
            the problems we fix, what we do and how a free audit works.
          </p>
          </div>
        </div>
      </section>

      <IndustriesStrip
        title="Choose your industry"
        intro="E-commerce and D2C come first. The same core services also work for local businesses and real estate, planned around orders, calls and bookings, or site visits."
      />

      <ProcessTimeline />

      <section className="bg-white pb-8">
        <p className="max-w-container-max mx-auto px-gutter text-center text-sm text-slate-600">
          Not in one of these industries?{' '}
          <Link href="/contact" className="font-bold text-royal-blue hover:underline">Tell us about your business</Link>; if
          we are not the right fit, we will say so.
        </p>
      </section>

      <FaqAccordion customFaqs={faqs} title="Questions about the industries we serve" badgeText="FAQ" />

      <CtaBanner />
    </>
  );
}
