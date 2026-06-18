import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '../../../lib/seo-config';
import { Badge } from '../../../components/ui/Badge';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Coaches, Consultants & Experts | Veloxis Global',
  description: 'Personal brand positioning, high-ticket automated webinar funnels, paid ads, and student onboarding automation for coaches and consultants.',
  path: '/industries/coaching-consulting'
});

export default function CoachingConsultingIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'Coaching & Consulting', href: '/industries/coaching-consulting' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'Coaching & Consulting', item: 'https://veloxisglobal.com/industries/coaching-consulting' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-16 sm:py-24 text-left relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge variant="teal" className="mb-4">COACHING & CONSULTING MARKETING</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              High-Ticket Client Acquisition for Experts
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Scale your coaching or consulting practice. Veloxis Global designs high-ticket webinar funnels, launches personal brand advertising on Meta and YouTube, and automates student onboarding and email nurturing loops to convert prospects on autopilot.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Helping executive coaches, business consultants, online course creators, and professional training institutes build consistent pipeline systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="coaching-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get Funnel Audit →
              </Button>
              <Button id="coaching-hero-contact-btn" href="/contact" variant="outline">
                Talk to Funnel Architect
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">Expert Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Delhi Business Coach</span>
              <span><strong>Timeframe:</strong> 4 Months scale</span>
              <span><strong>Outcome:</strong> 280+ new high-ticket applications</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Reduced cost-per-application by 45% via YouTube Ads</span>
            </div>
            <hr className="border-slate-200 my-1" />
            <Link href="/case-studies" className="text-xs font-bold text-royal-blue hover:underline flex items-center gap-1" id="coaching-case-link">
              Explore Our Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE ACQUIRE CLIENTS</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Expert Performance Playbook</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Personal Brand Positioning</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Craft a unique positioning hook and messaging framework that establishes your expertise and commands premium fees.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Automated Webinar Funnels</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Design and wireframe high-converting webinar and VSL funnels to warm up cold traffic and filter out unqualified leads.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Email & WhatsApp Nurture</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Setup automated WhatsApp reminders and email sequences to maximize show-up rates and nurture long-term applications.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
