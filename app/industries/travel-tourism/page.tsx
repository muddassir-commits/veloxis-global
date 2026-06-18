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
  title: "Travel & Tourism Marketing Agency | Veloxis Global",
  description: "Grow direct resort bookings and tour package inquiries. We scale travel brands with Google Ads, local SEO, and Meta campaigns.",
  path: "/industries/travel-tourism"
});

export default function TravelTourismIndustryPage() {
  const industry = getIndustryBySlug('travel-tourism');
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
