import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import DevServiceContent from './DevServiceContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = constructMetadata({
  title: pageMeta.webDev.title,
  description: pageMeta.webDev.description,
  path: pageMeta.webDev.path
});

export default function WebDesignServicePage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Web Design & Dev', href: '/services/web-design-development' }
  ];

  // 2. Generate schema markup structures
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Web Design & Development', url: 'https://veloxisglobal.com/services/web-design-development' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Web Design & Development Services",
    "Modern, mobile-first Next.js React design and full-stack development company in Delhi Noida 2026."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What is your main technology stack?",
      a: "We primarily build in Next.js, React, Tailwind CSS, and TypeScript for high-performance corporate sites, and WordPress or Webflow for content-focused projects."
    },
    {
      q: "How does a fast page speed affect SEO?",
      a: "Google uses Page Speed and Core Web Vitals as ranking factors. Fast loading sites rank higher and convert better because users exit slow sites immediately (high bounce rate)."
    },
    {
      q: "Is your code structure SEO-friendly?",
      a: "Yes. We write clean semantic HTML5 code, construct structured metadata headers dynamically, and pre-render text content for easy search crawler indexing."
    },
    {
      q: "What is the difference between Webflow/WordPress and Next.js?",
      a: "Webflow and WordPress are excellent drag-and-drop CMS engines. Next.js is a React developer framework providing static rendering speed, security, and infinite customization."
    },
    {
      q: "Will my website display correctly on mobile screens?",
      a: "Yes. All design layouts are mobile-first, ensuring smooth, responsive displays on all Android, Apple iOS, tablets, and desktop screen sizes."
    },
    {
      q: "Do you integrate custom CRM trackers?",
      a: "Yes. We write serverless routes to forward website lead form payloads to N8n webhooks, connecting to Salesforce, Google Sheets, or custom email hosts."
    },
    {
      q: "What security measures do you implement?",
      a: "We deploy SSL certificate redirects, prevent SQL injection via input validation, block spammers using honeypot parameters, and host assets securely on Vercel CDN."
    },
    {
      q: "How long does a web design build take?",
      a: "A standard corporate page takes 4 to 6 weeks. Complex custom applications, client portals, and e-commerce platforms take 8 to 12 weeks."
    },
    {
      q: "Do you help with domain names and server hosting?",
      a: "Yes. We configure your DNS records, map domain pointers to Vercel/AWS servers, and set up dynamic staging links for client reviews."
    },
    {
      q: "How do you track user events?",
      a: "We implement Google Tag Manager, tracking scroll depths, page interactions, form submissions, and direct phone link clicks."
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
      <DevServiceContent />
    </>
  );
}
