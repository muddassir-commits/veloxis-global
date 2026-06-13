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
  title: 'E-commerce & Shopify Growth Marketing Agency | Veloxis',
  description: 'Scale your online store sales and maximize Return on Ad Spend (ROAS) with certified Google Shopping, Facebook, and Instagram reels campaigns today.',
  path: '/industries/ecommerce'
});

export default function EcommerceIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'E-commerce', href: '/industries/ecommerce' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'E-commerce', item: 'https://veloxisglobal.com/industries/ecommerce' }
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
            <Badge variant="teal" className="mb-4">ECOMMERCE & ROAS SCALING</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Shopify & D2C Sales Acceleration Marketing
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Stop bleeding ad spend on unqualified clicks. Veloxis Global optimizes Google Performance Max (PMax) feeds, structures high-converting Instagram video creatives, and deploys abandoned cart email automation to maximize Shopify purchase volumes.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Helping fashion, beauty, home decor, and consumer electronics brands scale their sales across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="ecommerce-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get E-com Audit →
              </Button>
              <Button id="ecommerce-hero-contact-btn" href="/contact" variant="outline">
                Talk to E-com Strategist
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">E-commerce Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Noida D2C Skincare</span>
              <span><strong>Timeframe:</strong> 6 Months scale</span>
              <span><strong>Outcome:</strong> 5.2x Return on Ad Spend (ROAS) average</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Decreased Customer Acquisition Cost (CAC) by 28%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE SCALE SALES</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">E-commerce Performance Playbook</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">PMax Feed & Shopping Optimization</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Filter feed titles, map precise shopping tags, and optimize product pictures to rank first on Google Shopping.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Reels & Video Creative Testing</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Daily dynamic ads creation targeting lookalike consumer profiles with engaging customer review videos.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Abandoned Cart Recoveries</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Setup Resend email pipelines and automated WhatsApp flows to recover up to 15% of abandoned checkouts.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
