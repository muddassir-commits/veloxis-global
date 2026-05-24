import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { generateBreadcrumbSchema, generateFAQSchema } from '../../lib/schema';
import PricingContent from './PricingContent';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = {
  title: "Pricing Plans Built for Real Business Growth | Veloxis Global",
  description: "Tailored digital marketing campaigns without lock-in contracts. Get a free website audit to discover recommended service structures and exact quotes.",
  alternates: {
    canonical: "https://veloxisglobal.com/pricing/",
  }
};

export default function PricingPage() {
  const breadcrumbItems = [{ name: 'Pricing', href: '/pricing' }];

  // 2. Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Pricing', url: 'https://veloxisglobal.com/pricing' }
  ]);

  const faqSchema = generateFAQSchema([
    {
      q: "Do you lock clients into long-term contracts?",
      a: "No. We work month-to-month. Our results earn your retention. We want to be a partner you choose to stay with, not one you are forced to."
    },
    {
      q: "What's the minimum budget to work with you?",
      a: "Depends entirely on your goals, competitors, and target locations. Let's start with a free audit and find out the exact baseline required for your project."
    },
    {
      q: "How do you determine the final price for a campaign?",
      a: "We analyze competitor density, technical code size, and target keywords during the free audit phase, then calculate the precise execution hours required monthly."
    },
    {
      q: "Are ad budgets included in your monthly fees?",
      a: "No. Ad budgets (for Google and Meta Ads) are paid directly to the respective ad platform by the client. We only charge a flat monthly fee for strategy, design, optimization, and analytics tracking."
    },
    {
      q: "How long does it take to see tangible results?",
      a: "Paid campaigns (Google Ads, Meta Ads) start generating leads in the first week. Organic SEO and keyword authority building typically require 3 to 6 months to establish front-page rankings."
    },
    {
      q: "Can I upgrade, downgrade, or cancel at any time?",
      a: "Yes. Since we work on rolling monthly terms, you can change your package or pause services with a simple 30-day notice, allowing us to package assets and pause automation workflows."
    }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <PricingContent />
    </>
  );
}
