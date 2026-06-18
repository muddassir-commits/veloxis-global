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
  title: "Website Design & Development Services Agency | Veloxis Global",
  description: "Get lightning-fast, secure, and CRO-optimized websites. Custom Next.js, React apps, Shopify development, and landing pages.",
  path: "/services/web-design-development"
});

export default function WebDesignDevelopmentPage() {
  const service = getServiceBySlug('web-development-technology');
  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Web Design & Development', href: '/services/web-design-development' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Web Design & Development', url: 'https://veloxisglobal.com/services/web-design-development' }
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
