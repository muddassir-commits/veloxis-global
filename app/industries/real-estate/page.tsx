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
  title: 'Real Estate Developer Marketing Agency | Veloxis Global',
  description: 'Scale qualified property leads and direct broker site visits in Delhi NCR, Noida, and Lucknow. View our real estate marketing framework online today.',
  path: '/industries/real-estate'
});

export default function RealEstateIndustryPage() {
  const industry = getIndustryBySlug('real-estate');
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
