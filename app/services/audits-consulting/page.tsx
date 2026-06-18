import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import AuditsConsultingContent from './AuditsConsultingContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.auditsConsulting.title,
  description: pageMeta.auditsConsulting.description,
  path: pageMeta.auditsConsulting.path
});

export default function AuditsConsultingPage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Audits & Consulting', href: '/services/audits-consulting' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Audits & Consulting', url: 'https://veloxisglobal.com/services/audits-consulting' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Audits, Consulting & Strategy",
    "Deep-dive audits of your website, SEO, and ad accounts with clear, actionable recommendations delivered in 48 hours."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What is a Digital Marketing Audit?",
      a: "It is a comprehensive review of your website performance, SEO keyword rankings, Google Business Profile setups, and ad account setups to spot budget leakage and performance wins."
    },
    {
      q: "How fast is audit delivery?",
      a: "We deliver our core marketing and SEO audits within 48 hours of receiving secure read access to your platform accounts."
    },
    {
      q: "What do we receive in the audit report?",
      a: "You receive a detailed markdown and PDF report outlining technical search issues, competitor traffic metrics, keyword opportunities, and ad campaign optimizations, plus a video recording explaining the issues."
    },
    {
      q: "Is the initial strategy session free?",
      a: "Yes, we provide a free initial 20-minute strategy call to align on your growth goals and review quick wins before scope planning."
    },
    {
      q: "Can you audit competitor strategies?",
      a: "Yes, we run competitor keyword audits and ad intelligence checks to show you what keywords they target, what ad formats they use, and where their traffic comes from."
    },
    {
      q: "Do you execute the changes suggested?",
      a: "Yes. We operate as a full-service agency and can execute any technical SEO, PPC, or web dev updates outlined in the audit under a separate monthly retainer."
    },
    {
      q: "What is the cost of an audit?",
      a: "Audits range from ₹5,000 to ₹50,000 depending on the scope of your properties, number of ad channels, and custom CRM integrations."
    },
    {
      q: "Will we need to share passwords?",
      a: "No. We request secure read-only access via Google Analytics, Search Console, Meta Business Manager, or Google Ads manager connections, avoiding password sharing."
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

      <AuditsConsultingContent />
    </>
  );
}
