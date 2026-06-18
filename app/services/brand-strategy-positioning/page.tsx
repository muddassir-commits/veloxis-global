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
  title: "Brand Strategy, Positioning & Identity Agency | Veloxis Global",
  description: "Differentiate your business from competitors. Establish a unique market positioning, define visual branding guidelines, and design high-converting funnels.",
  path: "/services/brand-strategy-positioning"
});

export default function BrandStrategyPositioningPage() {
  const service = getServiceBySlug('brand-strategy-positioning');
  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: service.title, href: `/services/${service.slug}` }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: service.title, url: `https://veloxisglobal.com/services/${service.slug}` }
  ]);

  const serviceSchema = generateServiceSchema(
    service.title,
    service.longDesc
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
