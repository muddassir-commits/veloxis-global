import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import AiAutomationContent from './AiAutomationContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.aiAutomation.title,
  description: pageMeta.aiAutomation.description,
  path: pageMeta.aiAutomation.path
});

export default function AiAutomationPage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'AI Automation', href: '/services/ai-marketing-automation' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'AI Automation', url: 'https://veloxisglobal.com/services/ai-marketing-automation' }
  ]);

  const serviceSchema = generateServiceSchema(
    "AI & Marketing Automation",
    "Automate lead capture, routing, and workflows using n8n and AI tools to save hundreds of hours of manual labor."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What is marketing automation?",
      a: "Marketing automation refers to software and workflows designed to execute marketing tasks on autopilot—such as routing leads instantly, syncing data between apps, sending alerts, and running AI generation loops."
    },
    {
      q: "What tools do you use for automation?",
      a: "We primarily build workflows using n8n and Make (Integromat), integrated with APIs, databases (Airtable, PostgreSQL), CRMs, and messaging apps like WhatsApp, Telegram, and Slack."
    },
    {
      q: "How can AI be integrated into marketing?",
      a: "We connect LLMs (GPT-4, Claude) to write email replies, analyze lead profiles for sales teams, generate social media outlines, or summarize client reports automatically."
    },
    {
      q: "Can you build custom WhatsApp chatbots?",
      a: "Yes, we set up official WhatsApp Business API connections and build interactive AI assistants that answer inquiries, schedule bookings, and route hot leads to sales reps."
    },
    {
      q: "What is n8n?",
      a: "n8n is a powerful node-based workflow automation tool. It allows secure, self-hosted or cloud connections between apps, enabling complex branching logic without high per-transaction costs."
    },
    {
      q: "Will our staff need training to manage this?",
      a: "No. We build these systems to run fully in the background. We also provide step-by-step SOPs and training sessions if your team wants to monitor or adapt the setups."
    },
    {
      q: "How much time can this save?",
      a: "Most clients save between 15 to 40+ hours per week of manual data entry, lead copying, profile checking, and messaging work."
    },
    {
      q: "What is the monthly pricing?",
      a: "AI & Marketing Automation setup retainers range from ₹15,000 to ₹1,00,000/month depending on workflow complexity, app API integrations, and database custom builds."
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

      <AiAutomationContent />
    </>
  );
}
