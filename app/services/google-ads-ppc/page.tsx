import React from 'react';
import { Metadata } from 'next';
import { getServiceBySlug } from '../../../data/services-data';
import { ServicePageTemplate } from '../../../components/services/ServicePageTemplate';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import { constructMetadata } from '../../../lib/seo-config';
import { notFound } from 'next/navigation';

export const metadata: Metadata = constructMetadata({
  title: "Google Ads & PPC Management Agency India | Veloxis Global",
  description: "Certified Google Ads management services in India. Search marketing, Display ads, YouTube, and Performance Max budget optimization.",
  path: "/services/google-ads-ppc"
});

export default function GoogleAdsPpcPage() {
  const service = getServiceBySlug('paid-advertising-performance-marketing');
  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Google Ads & PPC', href: '/services/google-ads-ppc' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Google Ads & PPC', url: 'https://veloxisglobal.com/services/google-ads-ppc' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Google Ads & PPC Services",
    "Certified Google Ads management services in India 2026. Setup, management, search campaigns, Performance Max groups, and analytics."
  );

  const faqSchema = generateFAQSchema(
    service.faqs.map(f => ({ q: f.question, a: f.answer }))
  );

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

      <ServicePageTemplate service={service} />
    </>
  );
}
