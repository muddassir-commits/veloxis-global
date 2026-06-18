import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import EcommerceServicesContent from './EcommerceServicesContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.ecommerceServices.title,
  description: pageMeta.ecommerceServices.description,
  path: pageMeta.ecommerceServices.path
});

export default function EcommerceServicesPage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'E-commerce Services', href: '/services/ecommerce-services' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'E-commerce Services', url: 'https://veloxisglobal.com/services/ecommerce-services' }
  ]);

  const serviceSchema = generateServiceSchema(
    "E-commerce & Catalog Services",
    "Shopify setup, product feed optimization, and high-performance Shopping and Catalog ads built for online stores."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What are E-commerce & Catalog Services?",
      a: "We build Shopify or WooCommerce stores, optimize product feeds, and run Google Shopping, Performance Max, and Meta catalog campaigns to scale online retail sales."
    },
    {
      q: "What platforms do you support?",
      a: "We specialize in Shopify and WooCommerce for store development, alongside Google Merchant Center and Meta Commerce Manager for catalog and ad management."
    },
    {
      q: "What is Product Feed Optimization?",
      a: "It is the process of structuring product titles, descriptions, categories, image links, and custom tags in your product feed so Google Shopping algorithms rank your products for high-intent queries."
    },
    {
      q: "Do you manage Meta Catalog Ads?",
      a: "Yes, we design dynamic product ads (DPA) on Meta, showing users the exact products they viewed or added to cart on your site, driving high retargeting conversions."
    },
    {
      q: "What is Google Performance Max (PMax)?",
      a: "Google PMax is an AI-driven campaign type that displays your products across Google Search, Shopping, YouTube, Display, and Maps based on your merchant center product feed."
    },
    {
      q: "How do you improve store conversion rates (CRO)?",
      a: "We audit checkout flows, optimize product description layouts, setup speed acceleration passes, and integrate trust badges to reduce cart abandonment."
    },
    {
      q: "What is the monthly pricing?",
      a: "E-commerce retainers range from ₹30,000 to ₹2,00,000/month depending on store sizing, number of SKUs, and cross-channel ad spend volumes."
    },
    {
      q: "How fast can we launch a store?",
      a: "Custom Shopify setups typically take 14 to 30 days, while catalog integration and campaign setups take 7 to 10 days."
    }
  ]);

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

      <EcommerceServicesContent />
    </>
  );
}
