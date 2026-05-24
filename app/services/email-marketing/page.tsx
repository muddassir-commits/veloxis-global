import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import EmailServiceContent from './EmailServiceContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

// 1. Static Metadata with canonical alternates
export const metadata: Metadata = constructMetadata({
  title: "Email & WhatsApp Marketing Services India 2026 | Veloxis Global",
  description: "Automated email and WhatsApp marketing for businesses across India. N8n-powered sequences that nurture leads and close deals on autopilot.",
  path: "/services/email-marketing"
});

export default function EmailMarketingServicePage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Email & WhatsApp', href: '/services/email-marketing' }
  ];

  // 2. Generate schema markup structures
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Email & WhatsApp Marketing', url: 'https://veloxisglobal.com/services/email-marketing' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Email & WhatsApp Marketing Services",
    "WhatsApp Business API setups, automated B2B cold email sequences, SPF/DKIM authentication, and N8n workflow pipelines in India 2026."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What is the WhatsApp Business API?",
      a: "The WhatsApp Business API is Meta's official framework for medium and large businesses to broadcast messages, integrate chatbots, and send automated transactional updates at scale."
    },
    {
      q: "Do you provide the phone numbers for WhatsApp broadcasts?",
      a: "No. You provide a clean phone number not linked to any consumer WhatsApp app. We help link it to Meta Business Manager and handle the developer setup."
    },
    {
      q: "What is N8n automation?",
      a: "N8n is a powerful fair-code workflow automation tool similar to Zapier. It allows us to integrate website lead capture forms with CRM pipelines and email triggers securely."
    },
    {
      q: "What is SPF, DKIM, and DMARC?",
      a: "These are DNS records that verify your domain identity to email servers (like Gmail or Outlook). Having them set up properly prevents your emails from landing in spam folders."
    },
    {
      q: "How do you build cold email contact lists?",
      a: "We help identify your ideal buyer profiles, clean historical client directories, and set up outbound parameters, ensuring all campaigns target valid B2B contact lists."
    },
    {
      q: "What is your copywriting process for email campaigns?",
      a: "We draft short, punchy, value-focused scripts. We avoid spam-trigger words and construct clear, single-choice calls to action (like booking a call)."
    },
    {
      q: "Do you offer customer chatbot development?",
      a: "Yes. As part of our WhatsApp automation services, we write custom chat trees to answer frequently asked questions, collect customer detail parameters, and alert your sales team."
    },
    {
      q: "How do you track sales conversions?",
      a: "We set up tracking parameters linking custom landing pages to the email/WhatsApp workflows, tracking every signup event via Google Tag Manager."
    },
    {
      q: "Are Meta messaging fees included in your pricing?",
      a: "No. Meta charges separate conversation-based fees for business-initiated and user-initiated WhatsApp chats. These fees are billed directly to your Meta account."
    },
    {
      q: "Do you help with email warming?",
      a: "Yes. For new outreach domains, we configure and run a 14-to-30 day warming sequence to build sender reputation before launching active marketing campaigns."
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
      <EmailServiceContent />
    </>
  );
}
