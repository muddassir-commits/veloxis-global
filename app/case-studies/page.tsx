import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { generateBreadcrumbSchema } from '../../lib/schema';
import CaseStudiesContent from './CaseStudiesContent';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = {
  title: "Digital Marketing Case Studies & ROI Outcomes | Veloxis Global",
  description: "Real growth stories from Delhi, Noida, Lucknow & Kanpur. Learn how we scale organic traffic, reduce cost per lead, and optimize campaign ROI.",
  alternates: {
    canonical: "https://veloxisglobal.com/case-studies/",
  }
};

export default function CaseStudiesPage() {
  const breadcrumbItems = [{ name: 'Case Studies', href: '/case-studies' }];

  // 2. Generate schemas
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Case Studies', url: 'https://veloxisglobal.com/case-studies' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <CaseStudiesContent />
    </>
  );
}
