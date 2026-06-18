import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import B2bLeadGenContent from './B2bLeadGenContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.b2bLeadGen.title,
  description: pageMeta.b2bLeadGen.description,
  path: pageMeta.b2bLeadGen.path
});

export default function B2bLeadGenPage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'B2B Lead Gen', href: '/services/b2b-lead-generation' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'B2B Lead Gen', url: 'https://veloxisglobal.com/services/b2b-lead-generation' }
  ]);

  const serviceSchema = generateServiceSchema(
    "B2B Lead Generation & Sales",
    "Cold outreach, LinkedIn campaigns, and pipeline automation to fill your sales calendar with qualified B2B prospects."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What does B2B Lead Generation involve?",
      a: "Our service blends automated cold email outreach, LinkedIn outreach, account-based marketing (ABM), and CRM setup to source and qualify decision-maker meetings."
    },
    {
      q: "How do you source contact lists?",
      a: "We build clean contact list databases matching your exact Ideal Customer Profile (ICP) using verified sources like Apollo and LinkedIn Sales Navigator, run through strict bounce-checking protocols."
    },
    {
      q: "What is your cold email deliverability protocol?",
      a: "We set up secondary outreach domains, fully warm up secondary email inboxes, and configure DNS parameters (SPF, DKIM, DMARC) so your emails land in primary inboxes rather than spam."
    },
    {
      q: "Do you handle response management?",
      a: "Yes, we monitor outreach replies, filter out out-of-office responses, and nurture positive hand-raisers to book meetings directly into your sales calendars."
    },
    {
      q: "What is the monthly pricing?",
      a: "B2B Lead Generation retainers range from ₹20,000 to ₹1,50,000/month depending on outbound volumes, database building needs, and LinkedIn campaign management."
    },
    {
      q: "Is this compliance-friendly (spam regulations)?",
      a: "Absolutely. We adhere to CAN-SPAM and GDPR regulations by sending highly-personalized, one-on-one business propositions with easy opt-outs, avoiding bulk blast spam."
    },
    {
      q: "How many leads can we expect?",
      a: "While results vary by market and offer offer strength, our campaigns typically generate 15 to 45+ highly qualified demo or sales calls per month."
    },
    {
      q: "Do you integrate with our current CRM?",
      a: "Yes, we build custom webhooks and workflows to route qualified leads directly into Salesforce, Hubspot, Zoho, or your preferred CRM."
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

      <B2bLeadGenContent />
    </>
  );
}
