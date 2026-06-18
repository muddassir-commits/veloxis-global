import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import BrandStrategyContent from './BrandStrategyContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.brandStrategy.title,
  description: pageMeta.brandStrategy.description,
  path: pageMeta.brandStrategy.path
});

export default function BrandStrategyPage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Brand Strategy', href: '/services/brand-strategy' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Brand Strategy', url: 'https://veloxisglobal.com/services/brand-strategy' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Brand Strategy & Positioning",
    "Define your unique positioning, customer personas, and sales funnels to stand out in crowded markets."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What is Brand Strategy & Positioning?",
      a: "It is the process of defining your brand's unique market position, messaging pillars, buyer personas, and sales funnels to differentiate your brand from competitors."
    },
    {
      q: "How do you define a Brand Value Proposition?",
      a: "We conduct competitor audits, audit your target customers, and identify market white space to craft a concise statement of what makes your business unique."
    },
    {
      q: "What is a Customer Journey Map?",
      a: "A visual mapping of all interaction touchpoints between a customer and your business—from first hearing of you to purchasing—ensuring your messaging aligns with their intent at each stage."
    },
    {
      q: "Who needs a Brand Strategy?",
      a: "New businesses launching products, companies scaling retargeting budgets, or established brands struggling with price commoditization in crowded markets."
    },
    {
      q: "How does this translate to ad campaigns?",
      a: "Your strategy defines the copy hooks, visuals, and messaging angles. Using this blueprint, we build ad campaigns with unified, high-converting copy."
    },
    {
      q: "What deliverables do we receive?",
      a: "A comprehensive Brand Playbook containing positioning statements, key buyer personas, customer journey maps, copywriting hooks, and visual guidelines."
    },
    {
      q: "What is the project pricing?",
      a: "Brand Strategy projects range from ₹25,000 to ₹1,50,000 depending on depth of research, company size, and funnel structures."
    },
    {
      q: "Do you provide visual logo design?",
      a: "We focus strictly on the messaging, positioning, copywriting, and sales funnel structures. If logo assets or graphic redesign is needed, we coordinate with your design team."
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

      <BrandStrategyContent />
    </>
  );
}
