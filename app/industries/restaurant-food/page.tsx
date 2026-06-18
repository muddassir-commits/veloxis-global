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
  title: 'Restaurant & Food Brand Marketing Agency | Veloxis Global',
  description: 'Hyper-local map optimization, Instagram reels production, local SEO, and delivery channel marketing to fill tables and online orders.',
  path: '/industries/restaurant-food'
});

export default function RestaurantFoodIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'Restaurant & Food', href: '/industries/restaurant-food' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'Restaurant & Food', item: 'https://veloxisglobal.com/industries/restaurant-food' }
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
            <Badge variant="teal" className="mb-4">RESTAURANT & FOOD MARKETING</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Fill Tables & Boost Online Direct Orders
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Fill tables and boost online orders. Veloxis Global optimizes hyper-local map visibility to capture search intent, manages creative Instagram campaigns to capture attention, and structures promotions to drive loyalty.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Helping fine dining restaurants, cloud kitchens, regional food chains, and gourmet retail brands stand out in Delhi NCR and Lucknow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="food-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get Local Audit →
              </Button>
              <Button id="food-hero-contact-btn" href="/contact" variant="outline">
                Talk to Food Strategist
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">Food Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Noida Multi-cuisine Chain</span>
              <span><strong>Timeframe:</strong> 2 Months scale</span>
              <span><strong>Outcome:</strong> 65% increase in Google Maps calls</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Acquired over 4,500+ new Instagram page views monthly</span>
            </div>
            <hr className="border-slate-200 my-1" />
            <Link href="/case-studies" className="text-xs font-bold text-royal-blue hover:underline flex items-center gap-1" id="food-case-link">
              Explore Our Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE FILL TABLES</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Food Brand Playbook</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Hyper-local Map Domination</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Claim and optimize Google Business Profiles (GBP), configure location schema tags, and build local search citations to win local search results.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Social Media & Short-Form Video</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Plan and script creative Instagram reels showcasing menu highlights and restaurant experiences, driving regional brand awareness.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Delivery & Offers Setup</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Design and schedule geotargeted paid ad campaigns and local discount offers to boost direct online ordering.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
