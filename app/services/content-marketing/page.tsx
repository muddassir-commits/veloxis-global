import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import ContentServiceContent from './ContentServiceContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = constructMetadata({
  title: pageMeta.content.title,
  description: pageMeta.content.description,
  path: pageMeta.content.path
});

export default function ContentServicePage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Content Marketing', href: '/services/content-marketing' }
  ];

  // 2. Generate schema markup structures
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Content Marketing', url: 'https://veloxisglobal.com/services/content-marketing' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Content Marketing Services",
    "Expert content marketing services in India 2026. Content calendars, landing page direct response copy, SEO blog writing, and white papers."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "How long does content marketing take to generate leads?",
      a: "Content marketing is a long-term compound asset. High-intent landing pages can generate leads immediately when paired with ads, while organic blog posts typically take 3 to 6 months to rank and scale lead volume."
    },
    {
      q: "Who researches the content topics?",
      a: "Our SEO and content strategy team conducts in-depth competitor gap analysis and search volume research to pitch topic ideas that align with what your customers are actually searching for."
    },
    {
      q: "Do you write industry-specific technical content?",
      a: "Yes. We have specialized writers for IT/Tech, SaaS, Healthcare, Real Estate, and Education. We interview your internal experts to ensure technical accuracy and E-E-A-T alignment."
    },
    {
      q: "What is Google E-E-A-T?",
      a: "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses these criteria to rate search content quality, especially for finance and healthcare ('Your Money or Your Life' topics)."
    },
    {
      q: "Do you build linkable assets like whitepapers?",
      a: "Yes. We draft and design downloadable PDF guides, whitepapers, and infographics that act as excellent lead magnets and linkable resources."
    },
    {
      q: "Do you upload content directly to our website?",
      a: "Yes, we can upload and format drafts directly in your CMS (WordPress, Webflow, Next.js, etc.), complete with meta descriptions, alt text, and schema tags."
    },
    {
      q: "What length are your blog posts?",
      a: "Blog lengths vary depending on competitor keyword benchmarks, typically ranging from 1,200 to 2,500 words to ensure thorough topic coverage."
    },
    {
      q: "How do you track content ROI?",
      a: "We set up conversion goals in Google Analytics 4 to track form submissions, WhatsApp clicks, and signups originating from specific content pages."
    },
    {
      q: "Can we review drafts before publishing?",
      a: "Yes. All drafts are shared in Google Docs or custom collaborative platforms for your team to review, comment on, and approve before launch."
    },
    {
      q: "Do you offer content updates for old blog posts?",
      a: "Yes. Part of our content marketing package includes auditing and refreshing decaying content to recover or maintain search rankings."
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
      <ContentServiceContent />
    </>
  );
}
