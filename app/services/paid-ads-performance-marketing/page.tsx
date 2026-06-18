import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import PaidAdsServiceContent from './PaidAdsServiceContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.paidAds.title,
  description: pageMeta.paidAds.description,
  path: pageMeta.paidAds.path
});

export default function PaidAdsServicePage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Paid Ads', href: '/services/paid-ads-performance-marketing' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Paid Advertising', url: 'https://veloxisglobal.com/services/paid-ads-performance-marketing' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Paid Advertising & Performance Marketing",
    "Meta, Google, and LinkedIn ads engineered for maximum ROI. Data-driven campaign scaling and budget optimization."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What platforms do you advertise on?",
      a: "We primarily manage campaigns on Meta (Facebook & Instagram), Google (Search, Display, Shopping, YouTube), and LinkedIn, plus platform-specific networks depending on B2B vs B2C targets."
    },
    {
      q: "What ad budget is required?",
      a: "We manage budgets from ₹20,000 to ₹10,00,000+ per month. We recommend starting with a minimum of ₹15,000-₹20,000/month in ad spend to ensure adequate data collection for optimization."
    },
    {
      q: "How do you measure campaign ROI?",
      a: "We track concrete conversion actions (leads, purchases, form submits) using pixels, conversion APIs, and Google Analytics 4, calculating your exact Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS)."
    },
    {
      q: "Do you charge a percentage of ad spend?",
      a: "No, we charge flat monthly retainer fees based on the complexity of your campaigns, rather than taxing your budget growth."
    },
    {
      q: "How long before we see results?",
      a: "Paid ads generate immediate traffic. However, optimizing for peak conversion efficiency and finding your best audience segments typically takes 14 to 30 days of data tuning."
    },
    {
      q: "Who designs the ad creatives?",
      a: "We provide complete creative direction, including ad copy, graphic layouts, and short-form video outlines, ensuring your creatives align with high-converting hooks."
    },
    {
      q: "Can you audit our current accounts?",
      a: "Yes, we offer detailed 48-hour ad account audits to identify budget leakage, targeting issues, and optimization quick wins."
    },
    {
      q: "Do we own the ad accounts?",
      a: "Absolutely. All ad accounts, pixels, and data assets remain 100% under your ownership. We merely request secure manager access."
    }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <PaidAdsServiceContent />
    </>
  );
}
