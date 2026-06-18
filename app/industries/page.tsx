import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../lib/schema';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { industriesData } from '../../data/industries-data';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing Services for Industries We Serve | Veloxis Global',
  description: 'Customized B2B and B2C marketing pipelines for Real Estate, SaaS, Healthcare, Coaching, EdTech, Cloud Kitchens, E-commerce, Fitness, NGO, Travel, and Law Firms.',
  path: '/industries'
});

export default function IndustriesIndexPage() {
  const breadcrumbItems = [{ name: 'Industries', href: '/industries' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Header */}
      <section className="bg-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 to-transparent -z-10" />
        <div className="max-w-container-max mx-auto px-gutter">
          <Badge variant="teal" className="mb-4">SPECIALIZED MARKETS</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-4">
            Industry-Specific Performance Frameworks
          </h1>
          <p className="text-base sm:text-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            We don't believe in one-size-fits-all. We build customized, domain-specific digital pipelines optimized for your industry's buying journeys.
          </p>
        </div>
      </section>

      {/* Industry List Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind, idx) => {
              // Map dynamic badge colors to look cohesive
              const badgeColors = ['teal', 'indigo', 'orange'] as const;
              const activeBadgeColor = badgeColors[idx % badgeColors.length];

              return (
                <Card key={idx} className="flex flex-col justify-between items-start text-left bg-white p-8 h-full border border-slate-200 rounded-3xl hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="w-full">
                    <div className="w-12 h-12 rounded-2xl bg-royal-blue/5 border border-royal-blue/15 flex items-center justify-center mb-6 text-2xl shadow-sm">
                      {ind.emoji}
                    </div>
                    <Badge variant={activeBadgeColor} className="mb-3 uppercase font-black text-[10px]">
                      {ind.slug.replace('-', ' ')}
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{ind.title}</h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                      {ind.heroDescription}
                    </p>
                  </div>
                  <Button 
                    href={`/industries/${ind.slug}`} 
                    variant="outline" 
                    className="w-full sm:w-auto mt-auto text-xs font-bold" 
                    id={`industries-card-btn-${ind.slug}`}
                  >
                    View Solutions →
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
