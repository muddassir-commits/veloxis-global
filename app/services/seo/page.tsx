import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import SeoServiceContent from './SeoServiceContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = constructMetadata({
  title: "Expert SEO Services in India 2026 — Rank #1 on Google | Veloxis Global",
  description: "India's results-driven SEO agency. Technical SEO, local SEO, and link building. Serving Delhi, Noida, Lucknow & Kanpur. Get your free SEO audit today.",
  path: "/services/seo"
});

export default function SeoServicePage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'SEO Services', href: '/services/seo' }
  ];

  // 2. Generate schema markup structures
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'SEO Services', url: 'https://veloxisglobal.com/services/seo' }
  ]);

  const serviceSchema = generateServiceSchema(
    "SEO Services",
    "Rank higher, drive qualified traffic, and grow revenue — with data-driven SEO built for Delhi, Noida, Lucknow & Kanpur."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "How long does SEO take in India?",
      a: "Typically, noticeable improvements in organic search rankings and traffic occur within 3 to 6 months. High-competition keywords may take longer, while local SEO wins can appear in as little as 30 to 90 days."
    },
    {
      q: "What's local vs national SEO?",
      a: "Local SEO focuses on optimizing your search presence for physical locations or specific service areas (like Delhi or Noida) to win local map packs. National SEO targets broader, non-geographical keywords across the entire country."
    },
    {
      q: "Do you do black-hat SEO?",
      a: "Absolutely not. We strictly adhere to Google's Search Essentials (Webmaster Guidelines) and use 100% white-hat techniques to ensure long-term, sustainable rankings without the risk of penalties."
    },
    {
      q: "How do you measure SEO success?",
      a: "We measure success using hard business metrics: organic traffic growth, keyword rankings in top search positions, and most importantly, qualified leads and conversions tracked via analytics."
    },
    {
      q: "What keywords will you target?",
      a: "We target a blend of high-intent transactional keywords (ready to buy), local geographical queries, and informational long-tail phrases to capture customers at every stage of the funnel."
    },
    {
      q: "Can you recover from a Google penalty?",
      a: "Yes. We conduct technical audits to identify the cause of the drop, clean up spammy backlink profiles, rectify low-quality duplicate content, and submit reconsideration requests to Google."
    },
    {
      q: "How does link building work?",
      a: "We earn high-authority backlinks using white-hat outreach, guest postings on industry-relevant publications, and creating linkable content assets that natural sources want to reference."
    },
    {
      q: "What's in your technical SEO audit?",
      a: "Our technical audit checks Core Web Vitals (speed), indexing errors, crawling efficiency, mobile responsiveness, SSL security, XML sitemaps, robots.txt directives, and structured schema markup."
    },
    {
      q: "Do you work outside Delhi NCR?",
      a: "Yes, we provide digital marketing and SEO services for clients across India, with specialized targeting in Delhi, Noida, Lucknow, and Kanpur."
    },
    {
      q: "How are you different from other agencies?",
      a: "We don't hide behind vanity metrics. We focus strictly on organic conversions and pipeline revenue, providing completely transparent, real-time custom dashboards with weekly updates."
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
      <SeoServiceContent />
    </>
  );
}
