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
  title: 'Healthcare & Clinic Marketing Agency | Veloxis Global',
  description: 'Boost patient bookings and Google Map pack rankings for hospitals, dental clinics, IVF centers, and pediatricians in Lucknow, Kanpur, and Delhi NCR.',
  path: '/industries/healthcare'
});

export default function HealthcareIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'Healthcare', href: '/industries/healthcare' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'Healthcare', item: 'https://veloxisglobal.com/industries/healthcare' }
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
            <Badge variant="indigo" className="mb-4">HEALTHCARE PATIENT GROWTH</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Patient Acquisition Marketing for Hospitals & Clinics
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Increase doctor appointments and OPD registrations on autopilot. We build compliant, local SEO map setups, E-E-A-T expert medical copy clusters, and local Facebook/Meta lead ads designed to earn patient trust.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Serving multi-specialty hospitals, IVF centers, skin/dental clinics, and pediatric practitioners in Lucknow, Kanpur, and Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="healthcare-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get Clinic Audit →
              </Button>
              <Button id="healthcare-hero-contact-btn" href="/contact" variant="outline">
                Consult Healthcare Marketer
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">Healthcare Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Lucknow Specialist Clinic</span>
              <span><strong>Timeframe:</strong> 90 Days local campaign</span>
              <span><strong>Outcome:</strong> 500+ patient bookings generated</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Achieved #1 local map pack placement for 12 key search terms</span>
            </div>
            <hr className="border-slate-200 my-1" />
            <Link href="/case-studies/lucknow-healthcare-leads" className="text-xs font-bold text-royal-blue hover:underline flex items-center gap-1" id="healthcare-case-link">
              Read Lucknow Healthcare Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="teal" className="mb-4">HOW WE SCALE PATIENTS</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Compliant Healthcare Marketing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Google Map 3-Pack Optimization</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Clean GBP settings, duplicate citation cleanup, and patient review acquisition systems to dominate localized map listings.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">E-E-A-T Medical Content Clusters</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Expert-written, medically reviewed content answering patient queries, building search index weight.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Local Facebook Lead Campaigns</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Highly targeted regional campaigns on Instagram & Facebook displaying clinical safety reviews with WhatsApp integration.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
