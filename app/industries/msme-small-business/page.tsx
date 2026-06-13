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
  title: 'MSME & B2B Manufacturing Marketing Agency | Veloxis Global',
  description: 'Scale domestic inquiries and global export leads for textile mills, leather exporters, and manufacturing MSMEs in Kanpur, Lucknow, and Delhi NCR.',
  path: '/industries/msme-small-business'
});

export default function MsmeIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'MSME & B2B', href: '/industries/msme-small-business' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'MSME & B2B', item: 'https://veloxisglobal.com/industries/msme-small-business' }
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
            <Badge variant="teal" className="mb-4">MSME & MANUFACTURING B2B</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Marketing Built for Indian Manufacturers & MSMEs
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Reach corporate buyers domestically and international importers globally. Veloxis Global designs technical catalogs optimized for Google speed weight, targets global search export intents, and sets up high-performance B2B inquiry pipelines.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Supporting Kanpur industrial mills, leather exporters, B2B manufacturers, and regional MSMEs across Lucknow and Delhi NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="msme-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get B2B SEO Audit →
              </Button>
              <Button id="msme-hero-contact-btn" href="/contact" variant="outline">
                Talk to B2B Director
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">B2B Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Kanpur Leather Exporter</span>
              <span><strong>Timeframe:</strong> 12 Months B2B Campaign</span>
              <span><strong>Outcome:</strong> 180% growth in global buyer catalog views</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Ranked #1 for 15+ international export keywords</span>
            </div>
            <hr className="border-slate-200 my-1" />
            <Link href="/case-studies/kanpur-fabrics-b2b" className="text-xs font-bold text-royal-blue hover:underline flex items-center gap-1" id="msme-case-link">
              Read Kanpur B2B Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE SCALE MSMES</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">B2B Manufacturing Growth</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Global Export Keywords SEO</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Rank when international buyers search for manufacturing products from India, bypassing third-party catalog portals.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Technical Catalog Speed Boost</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Slow databases drop buyer sessions. We build fast, responsive Next.js catalog lists to display product details under 1s.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">B2B Lead Funnel Qualification</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Setup custom contact queries with capacity, specs, and geographic requirements to capture high-value contracts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
