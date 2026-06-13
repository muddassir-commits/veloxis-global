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
  title: 'Real Estate Developer Marketing Agency | Veloxis Global',
  description: 'Scale qualified property leads and direct broker site visits in Delhi NCR, Noida, and Lucknow. View our real estate marketing framework online today.',
  path: '/industries/real-estate'
});

export default function RealEstateIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'Real Estate', href: '/industries/real-estate' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'Real Estate', item: 'https://veloxisglobal.com/industries/real-estate' }
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
            <Badge variant="teal" className="mb-4">REAL ESTATE ACCELERATION</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Marketing Built for Premium Real Estate Developers
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Stop paying for shared, low-intent portals. Veloxis Global designs dedicated lead capture funnels, localized search optimization (SEO), and conversion-optimized Google Ads that drive direct inquiries and scheduled site visits.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              We have helped Delhi NCR, Noida, and Lucknow developers generate qualified inquiries for residential apartments, luxury villas, and commercial properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="realestate-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get Real Estate Audit →
              </Button>
              <Button id="realestate-hero-contact-btn" href="/contact" variant="outline">
                Talk to Strategy Lead
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">Real Estate Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Delhi NCR Developer</span>
              <span><strong>Timeframe:</strong> 6 Months Campaign</span>
              <span><strong>Outcome:</strong> 35,000+ organic visitors monthly, 3.1x lead volume boost</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Verified 5.2x ROAS on Google Search campaigns</span>
            </div>
            <hr className="border-slate-200 my-1" />
            <Link href="/case-studies/delhi-real-estate-developer" className="text-xs font-bold text-royal-blue hover:underline flex items-center gap-1" id="real-estate-case-link">
              Read Detailed Delhi Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE SCALE REAL ESTATE</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Our Real Estate Marketing Tactics</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Hyper-Local Map Ranks</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Rank when buyers search "luxury apartments near me" or "commercial projects in Noida." We optimize GBP maps pack listings and local citations.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Conversion-Optimized Landing Pages</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Fast-loading mobile landing pages designed to capture broker and direct buyer details through secure React validations.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Google Search Intent Target</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Filter out competitors and window-shoppers. We manage exact-match search ad budgets to capture high-net-worth buyers active on search.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
