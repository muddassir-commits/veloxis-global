import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { caseStudies, caseCategories } from '../../data/case-studies';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Badge } from '../../components/ui/Badge';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getWebPageSchema } from '../../lib/schema';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = constructMetadata(pageMeta.caseStudies);

export default function CaseStudiesPage() {
  const groups = caseCategories
    .map((cat) => ({ ...cat, items: caseStudies.filter((c) => c.category === cat.id) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          type: 'CollectionPage',
          name: 'Case studies',
          description: pageMeta.caseStudies.description,
          path: '/case-studies',
        })}
      />
      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Case Studies', href: '/case-studies' }]} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-container-max mx-auto px-gutter max-w-3xl">
          <Badge variant="teal" className="mb-4">CASE STUDIES</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-5">
            Case studies: real accounts, real screenshots, real numbers
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            What we found inside ad accounts, websites and systems, what we changed, and what happened next. Every number
            comes from the platform’s own screen, shown in the screenshot beside it.
          </p>
          <p className="mt-6 flex items-start gap-2 text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <ShieldCheck className="w-4 h-4 text-royal-blue shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              We never name clients. Brand names, account IDs and logins are covered in every screenshot; the numbers are
              left as they are.
            </span>
          </p>
          <nav aria-label="Case study categories" className="mt-8 flex flex-wrap gap-2">
            {groups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="text-sm font-semibold px-4 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-royal-blue hover:text-royal-blue transition-colors"
              >
                {g.label} ({g.items.length})
              </a>
            ))}
          </nav>
        </div>
      </section>

      {groups.map((g, gi) => (
        <section key={g.id} id={g.id} className={`${gi % 2 === 0 ? 'bg-slate-50' : 'bg-white'} py-16 scroll-mt-24`}>
          <div className="max-w-container-max mx-auto px-gutter">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">{g.label}</h2>
            <p className="text-slate-600 mb-10">{g.blurb}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 stagger-reveal">
              {g.items.map((c) => (
                <article
                  key={c.slug}
                  className="group spotlight bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-xl hover:-translate-y-1"
                >
                  <ImageFrame
                    src={c.cover.src}
                    alt={c.cover.alt}
                    ratio="16/9"
                    position="left top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
                    className="!rounded-none"
                    imageClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                  <div className="p-7 flex flex-col flex-grow">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {c.industry} · {c.location}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-3 mb-4 leading-snug">
                      <Link href={`/case-studies/${c.slug}`} className="hover:text-royal-blue transition-colors">
                        {c.title}
                      </Link>
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-2xl font-extrabold text-royal-blue whitespace-nowrap">{c.results[0].big}</span>
                      <span className="text-sm text-slate-600">{c.results[0].label}</span>
                    </div>
                    {c.status === 'in-progress' && (
                      <span className="self-start text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-3 py-1 mb-4">
                        In progress: results to follow
                      </span>
                    )}
                    <Link
                      href={`/case-studies/${c.slug}`}
                      className="inline-flex items-center gap-1 mt-auto text-sm font-bold text-royal-blue"
                    >
                      Read the case study{' '}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBanner
        title="Want us to look inside your account?"
        description="Start with a free audit. We’ll check your ads, website and follow-up the same way we did in these case studies, and tell you what we would fix first."
      />
    </>
  );
}
