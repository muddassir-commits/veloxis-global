import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
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

            {/* Rich Content Sections */}
            <div className="flex flex-col gap-8 w-full mt-6">
              {study.sections && study.sections.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                    {section.heading}
                  </h2>
                  {section.subheading && (
                    <span className="text-xs sm:text-sm font-bold text-royal-blue uppercase tracking-wider block">
                      {section.subheading}
                    </span>
                  )}
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-body-md text-on-surface-variant leading-relaxed font-sans">
                      {p}
                    </p>
                  ))}
                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="flex flex-col gap-2 pl-0 w-full mt-2">
                      {section.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="flex gap-2.5 text-sm sm:text-body-md text-on-surface-variant leading-relaxed items-start">
                          <span className="text-royal-blue font-bold shrink-0 mt-0.5">▪</span>
                          <span className="font-semibold text-slate-800">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Comparison Table */}
            {study.dataComparison && study.dataComparison.length > 0 && (
              <div className="w-full mt-8 border border-slate-100 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-slate-50 p-4 border-b border-slate-100">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">Campaign Metric Comparison</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider bg-slate-50/50">
                        <th className="p-4">Key Diagnostic Metric</th>
                        <th className="p-4">Pre-Campaign</th>
                        <th className="p-4">Post-Campaign</th>
                        <th className="p-4 text-right">Growth / Reduction</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50 font-semibold text-slate-700">
                      {study.dataComparison.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/30 transition-colors">
                          <td className="p-4 text-slate-900 font-bold">{row.metricName}</td>
                          <td className="p-4 text-red-500">{row.beforeValue}</td>
                          <td className="p-4 text-teal-accent">{row.afterValue}</td>
                          <td className="p-4 text-right">
                            <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-full bg-teal-accent/10 text-teal-accent">
                              {row.improvementPercentage}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
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

      {/* Related Case Studies Section */}
      <section className="bg-slate-50 py-16 border-t border-b border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 tracking-tight">
            Read Other Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies
              .filter((s) => s.slug !== study.slug)
              .slice(0, 3)
              .map((other) => (
                <Card 
                  key={other.id} 
                  hoverable={true} 
                  className="bg-white border border-slate-100 p-6 flex flex-col justify-between h-full"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      <Badge variant="teal">{other.industry}</Badge>
                      <Badge variant="indigo">{other.location}</Badge>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base hover:text-royal-blue transition-colors">
                      <Link href={`/case-studies/${other.slug}`} id={`related-study-link-${other.id}`}>
                        {other.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-on-surface-variant line-clamp-3 leading-relaxed">
                      {other.challenge}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-royal-blue">
                    <span>Read Success Story</span>
                    <span>→</span>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
