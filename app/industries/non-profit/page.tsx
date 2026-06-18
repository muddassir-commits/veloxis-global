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
  title: 'Non-Profit & NGO Marketing: Google Ad Grants | Veloxis Global',
  description: 'Google Ad Grants setup, storytelling strategies, donor acquisition workflows, and event-based engagement systems for non-profits.',
  path: '/industries/non-profit'
});

export default function NonProfitIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'Non-Profit', href: '/industries/non-profit' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'Non-Profit', item: 'https://veloxisglobal.com/industries/non-profit' }
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
            <Badge variant="teal" className="mb-4">NON-PROFIT & NGO ADVOCACY</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Donor Acquisition & Free Google Search Grants
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Secure donations and expand advocacy programs. Veloxis Global sets up and manages Google Ad Grants configurations (securing up to $10,000/month in free search credits), builds storytelling landing pages, and automates donor email nurturing flows.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Helping charitable NGOs, educational foundations, environmental groups, and social advocacy organizations build brand awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="nonprofit-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get Grants Audit →
              </Button>
              <Button id="nonprofit-hero-contact-btn" href="/contact" variant="outline">
                Talk to NGO Strategist
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">NGO Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Pan-India NGO</span>
              <span><strong>Timeframe:</strong> 6 Months scale</span>
              <span><strong>Outcome:</strong> $60,000+ free Google Search credits optimized</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Acquired over 15,000+ new monthly organic visits</span>
            </div>
            <hr className="border-slate-200 my-1" />
            <Link href="/case-studies" className="text-xs font-bold text-royal-blue hover:underline flex items-center gap-1" id="nonprofit-case-link">
              Explore Our Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE ACQUIRE DONORS</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">NGO Performance Playbook</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Google Ad Grants Setup</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Apply for, secure, and configure Google Ad Grants, launching search ad campaigns targeting relevant donation and cause queries.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Storytelling Landing Pages</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Build high-converting, E-E-A-T friendly landing pages that showcase your NGO's project impact, converting traffic into donors.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Donor Nurturing Sequences</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Integrate automated email sequences to welcome new donors, share progress updates, and nurture recurring giving commitments.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
