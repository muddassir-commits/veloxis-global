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
  title: 'SaaS & Software Product Marketing Agency | Veloxis Global',
  description: 'Scale your SaaS product MRR and trial signups. Organic search loops, Performance ad campaigns, and GA4 attribution setups.',
  path: '/industries/saas'
});

export default function SaasIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'SaaS', href: '/industries/saas' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'SaaS', item: 'https://veloxisglobal.com/industries/saas' }
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
            <Badge variant="teal" className="mb-4">SAAS PRODUCT MARKETING</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Data-Driven SaaS Product Growth Marketing
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Scale trial signups and monthly recurring revenue (MRR). Veloxis Global builds organic content acquisition loops, launches search-intent ad campaigns on Google and LinkedIn, and sets up GA4 multi-channel attribution to measure customer acquisition costs (CAC) precisely.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Helping B2B SaaS, developer tools, mobile applications, and enterprise software platforms scale their MRR in India and globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="saas-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get SaaS Audit →
              </Button>
              <Button id="saas-hero-contact-btn" href="/contact" variant="outline">
                Talk to SaaS Strategist
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">SaaS Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Noida B2B CRM SaaS</span>
              <span><strong>Timeframe:</strong> 3 Months launch</span>
              <span><strong>Outcome:</strong> ₹2.1M pipeline value generated</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Reduced cost-per-signup by 32% via Google Search Ads</span>
            </div>
            <hr className="border-slate-200 my-1" />
            <Link href="/case-studies" className="text-xs font-bold text-royal-blue hover:underline flex items-center gap-1" id="saas-case-link">
              Explore Our Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE SCALE MRR</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">SaaS Performance Playbook</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Organic Search Loops</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Construct semantic content hubs targeting transactional buyer terms, capturing users at the exact moment of search intent.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">High-Intent LinkedIn Ads</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Run targeted ad campaigns using member job titles, company sizes, and industries to secure demo requests from enterprise buyers.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Attribution Tracking & GA4</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Set up server-side event tags to measure customer acquisition cost (CAC) and customer lifetime value (LTV) across all touchpoints.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
