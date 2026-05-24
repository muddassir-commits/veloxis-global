import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import PpcServiceContent from './PpcServiceContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = constructMetadata({
  title: pageMeta.ppc.title,
  description: pageMeta.ppc.description,
  path: pageMeta.ppc.path
});

export default function PpcServicePage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Google Ads & PPC', href: '/services/google-ads-ppc' }
  ];

  // 2. Generate schema markup structures
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Google Ads & PPC', url: 'https://veloxisglobal.com/services/google-ads-ppc' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Google Ads & PPC Services",
    "Certified Google Ads management services in India 2026. Setup, management, search campaigns, Performance Max groups, and analytics."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "How fast do Google Ads campaigns show results?",
      a: "Google Ads can generate qualified clicks and conversions within 24 to 48 hours of launching campaigns. However, optimization models require 14 to 30 days to build stable cost per lead metrics."
    },
    {
      q: "What is your setup process for brand new accounts?",
      a: "We configure your billing settings, structure the conversion tracking parameters via Google Tag Manager, link Google Analytics 4, build campaign skeletons, and write all initial ad copies."
    },
    {
      q: "Do you guarantee page 1 rankings on Google?",
      a: "Yes. Google Ads guarantees page 1 ad placement as long as your budget bids are competitive and Quality Scores are high. We optimize bids to capture maximum top-of-page search views."
    },
    {
      q: "What is a Performance Max (PMax) campaign?",
      a: "Performance Max is Google's automated, asset-based campaign type. It displays ads across Search, Maps, YouTube, Gmail, and Google Display network using Google's machine learning systems."
    },
    {
      q: "How do you handle budget management?",
      a: "You pay Google directly for ad clicks using your corporate billing method. Veloxis Global manages the campaigns under a flat management fee or percentage of ad spend, ensuring budgets never exceed monthly caps."
    },
    {
      q: "What keywords will you block?",
      a: "We actively compile lists of 'negative keywords' (such as 'free', 'jobs', or competitor terms) to prevent your ads from triggering on irrelevant searches, preserving ad budget."
    },
    {
      q: "Do you write the landing page copy?",
      a: "Yes. We perform landing page conversion rate optimization (CRO) audits and rewrite copy or design targeted high-converting landing pages to ensure visitors convert into leads."
    },
    {
      q: "How are you different from other PPC agencies?",
      a: "We focus on sales and lead volume rather than just traffic and clicks. Our Google Ads Certified team coordinates search campaigns with direct lead tracking models to display real revenue attribution."
    },
    {
      q: "What is your minimum monthly budget?",
      a: "We work with clients starting at a minimum ad spend of ₹30,000 per month to ensure campaigns have sufficient conversion data to train Google's bidding systems."
    },
    {
      q: "How do you track WhatsApp conversions?",
      a: "We configure custom tag listeners in Google Tag Manager that fire a conversion signal only when a user successfully clicks your WhatsApp icon and redirects to start a chat."
    }
  ]);

  return (
    <>
      {/* Dynamic JSON-LD injection */}
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* 1. Breadcrumb navigation header */}
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Interactive Main Page Content */}
      <PpcServiceContent />
    </>
  );
}
