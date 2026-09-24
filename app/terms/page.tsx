import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Badge } from '../../components/ui/Badge';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { siteData } from '../../data/site';
import { termsFaqs } from '../../data/page-faqs';

export const metadata: Metadata = constructMetadata(pageMeta.terms);

export default function TermsPage() {
  const breadcrumbItems = [{ name: 'Terms of Service', href: '/terms' }];

  return (
    <>
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter text-left">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 text-left font-sans">
        <div className="max-w-3xl mx-auto px-gutter">
          <Badge color="indigo" className="mb-4">LEGAL DETAILS</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-xs text-slate-500 font-bold mb-8 uppercase tracking-wider">Last updated: 24 September 2026</p>

          <div className="flex flex-col gap-6 text-sm sm:text-body-md text-slate-600 leading-relaxed">
            <p>By accessing this website, you agree to comply with and be bound by the following Terms of Service. If you disagree with any part of these terms, please do not use our site or request audits.</p>
            
            <h2 className="text-lg font-extrabold text-slate-900 mt-4">1. Strategy Audits</h2>
            <p>Our Free Growth Audits are delivered in good faith. Key provisions include:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Audits are manual assessments of your landing page, ad accounts, and lead response setup.</li>
              <li>We make no guarantees regarding results from implementing recommendations.</li>
              <li>All recommendations are action roadmaps, not contracts.</li>
            </ul>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">2. Month-to-Month Agreements</h2>
            <p>Our performance services operate on flexible, transparent frameworks:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Marketing retainer packages run on a month-to-month basis.</li>
              <li>Clients can pause or terminate campaigns with a 30-day notice.</li>
              <li>No lock-in contracts or hidden cancellation penalties.</li>
            </ul>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">3. Governing Law</h2>
            <p>These terms and conditions are governed by regional Indian laws:</p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Governing body is the Government of India.</li>
              <li>Any claims are subject strictly to {siteData.jurisdiction} jurisdiction.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Terms of Service FAQ Accordion */}
      <FaqAccordion
        withSchema={false}
        title="Terms & Contracts FAQ"
        badgeText="TERMS FAQ"
        customFaqs={termsFaqs}
        description="Short answers based on the policy above."
      />
    </>
  );
}
