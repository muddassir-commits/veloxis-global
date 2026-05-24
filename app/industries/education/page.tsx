import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '../../../lib/seo-config';
import { Badge } from '../../../components/ui/Badge';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';

export const metadata: Metadata = constructMetadata({
  title: 'Higher Education & Academy Marketing Agency | Veloxis Global',
  description: 'Boost student enrollments, course applications, and inquiry conversion rates for academies, universities, and coaching institutes in Noida & Delhi.',
  path: '/industries/education'
});

export default function EducationIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'Education', href: '/industries/education' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'Education', item: 'https://veloxisglobal.com/industries/education' }
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
            <Badge variant="orange" className="mb-4">STUDENT ACQUISITION FLOWS</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Enrollment Marketing for Universities, Schools & Academies
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Stop chasing cold database lists. Veloxis Global designs student inquiry pathways, search intent-optimized courses marketing, and automatic WhatsApp CRM drip flows that scale application volume.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Serving private universities, professional coaching institutes, and skill development academies across Noida, Delhi NCR, and Lucknow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="/free-seo-audit" variant="primary">
                Get Academy Audit →
              </Button>
              <Button href="/contact" variant="outline">
                Book Academy Call
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">Education Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Noida Skill Academy</span>
              <span><strong>Timeframe:</strong> 9 Months Campaign</span>
              <span><strong>Outcome:</strong> 2.8x increase in qualified application forms</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Ranked for 80+ high-intent course keyword phrases</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="teal" className="mb-4">HOW WE SCALE ENROLLMENTS</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Education Inbound Strategies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Course Keyword Rank Domination</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Rank for exact searches (e.g. "data science course in Noida", "best management institute in Delhi").
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Lead-Scoring CRM Setup</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Connect landing page forms with CRMs to qualify student profiles before calling, saving team hours.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">WhatsApp Automation Drips</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Send instant prospectus links, registration details, and follow-up templates to student numbers on submit.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
