import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import PricingContent from './PricingContent';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata(pageMeta.pricing);

// FAQPage schema is emitted by the FaqAccordion inside PricingContent.
export default function PricingPage() {
  return (
    <>
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Pricing', href: '/pricing' }]} />
        </div>
      </section>
      <PricingContent />
    </>
  );
}
