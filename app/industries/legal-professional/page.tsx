import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getIndustryBySlug } from '../../../data/industries-data';
import { IndustryPageTemplate } from '../../../components/services/IndustryPageTemplate';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { getBreadcrumbListSchema } from '../../../lib/schema';
import { constructMetadata } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: "Law Firm & Professional Practice Marketing | Veloxis Global",
  description: "Generate qualified consultations for lawyers, accountants, and consultants. We build high-compliance SEO and local maps systems.",
  path: "/industries/legal-professional"
});

export default function LegalProfessionalIndustryPage() {
  const industry = getIndustryBySlug('legal-professional');
  if (!industry) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: industry.title, href: `/industries/${industry.slug}` }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: industry.title, item: `https://veloxisglobal.com/industries/${industry.slug}` }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <IndustryPageTemplate industry={industry} />
    </>
  );
}
