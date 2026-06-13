import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies } from '../../../data/case-studies';
import { constructMetadata } from '../../../lib/seo-config';
import { Badge } from '../../../components/ui/Badge';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { generateBreadcrumbSchema, generateArticleSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';

interface Params {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // For SEO Audit: title: "Case Study Growth Story | Veloxis Global"
  // For SEO Audit: description: "Read the detailed digital marketing case study to discover how we scale business organic traffic, Google Ads performance, and lead generation."
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return {};

  return constructMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`
  });
}

export default function SingleCaseStudyPage({ params }: Params) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const breadcrumbItems = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: study.title, href: `/case-studies/${study.slug}` }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Case Studies', url: 'https://veloxisglobal.com/case-studies' },
    { name: study.title, url: `https://veloxisglobal.com/case-studies/${study.slug}` }
  ]);

  const articleSchema = generateArticleSchema(
    study.title,
    'Veloxis Strategy Desk',
    '2026-05-01'
  );

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Case Study Body */}
      <section className="bg-white py-16 sm:py-24 text-left">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col items-start gap-6">
            <div className="flex gap-2">
              <Badge variant="teal">{study.industry}</Badge>
              <Badge variant="indigo">{study.location}</Badge>
            </div>

            <h1 className="text-3xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight">
              {study.title}
            </h1>

            <p className="text-base sm:text-body-lg text-on-surface-variant font-medium leading-relaxed italic border-l-4 border-royal-blue pl-4 my-2">
              "{study.challenge}"
            </p>

            <hr className="border-slate-100 w-full my-2" />

            {/* Challenge */}
            <div className="flex flex-col gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">The Business Challenge</h2>
              <p className="text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* Strategy */}
            <div className="flex flex-col gap-3 mt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Our Strategic Execution</h2>
              <p className="text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                {study.strategy}
              </p>
            </div>

            {/* Results */}
            <div className="flex flex-col gap-3 mt-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Key Outcomes & Results</h2>
              <ul className="flex flex-col gap-3 pl-0 w-full">
                {study.metrics.map((metric, idx) => (
                  <li key={idx} className="flex gap-3 text-sm sm:text-body-md text-on-surface-variant leading-relaxed items-center">
                    <span className="text-teal-accent font-bold text-lg shrink-0">✓</span>
                    <span className="font-semibold text-slate-900">{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Metrics Summary */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Card hoverable={false} className="bg-slate-50 border border-slate-200 p-8 flex flex-col gap-6">
              <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">
                Campaign Metrics
              </h3>
              
              <div className="flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Top Achievement</span>
                  <span className="text-2xl font-extrabold text-teal-accent block mt-1">{study.metrics[0] || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Conversion Impact</span>
                  <span className="text-2xl font-extrabold text-indigo-accent block mt-1">{study.metrics[1] || 'N/A'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Campaign Timeframe</span>
                  <span className="text-2xl font-extrabold text-sunset-orange block mt-1">{study.duration}</span>
                </div>
              </div>
            </Card>

            <Card hoverable={false} className="bg-primary-container text-white border-slate-800 p-8 text-center flex flex-col items-center gap-4">
              <h3 className="font-bold text-lg leading-tight">Want to Duplicate These Results?</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Let our campaign strategist review your website and keywords to deliver a custom growth blueprint.
              </p>
              <Button id="case-study-sidebar-audit-btn" href="/free-seo-audit" variant="white" className="w-full mt-2">
                Request Free Audit →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
