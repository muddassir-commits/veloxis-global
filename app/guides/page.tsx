import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Gauge } from 'lucide-react';
import { constructMetadata, pageMeta, SITE_URL } from '../../lib/seo-config';
import { getAllPosts } from '../../lib/blog';
import { guideTopics, glossary, guidesHubFaqs } from '../../data/guides';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Badge } from '../../components/ui/Badge';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getWebPageSchema } from '../../lib/schema';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { FaqAccordion } from '../../components/sections/FaqAccordion';

export const metadata: Metadata = constructMetadata(pageMeta.guides);

const chip =
  'text-sm font-semibold px-3 py-1.5 rounded-full border border-slate-200 text-slate-700 hover:border-royal-blue hover:text-royal-blue transition-colors';

export default function GuidesPage() {
  const bySlug = new Map(getAllPosts().map((p) => [p.slug, p]));
  // Only published guides are shown; a topic with nothing published yet is hidden.
  const topics = guideTopics
    .map((t) => ({ ...t, guides: t.slugs.flatMap((s) => (bySlug.has(s) ? [bySlug.get(s)!] : [])) }))
    .filter((t) => t.guides.length);

  // Separate JSON-LD blocks: the site-wide @graph comes from the layout.
  const schemas = [
    getWebPageSchema({
      type: 'CollectionPage',
      name: 'Digital marketing and AI search guides',
      description: pageMeta.guides.description,
      path: '/guides',
    }),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Veloxis Global guides',
      itemListElement: topics
        .flatMap((t) => t.guides)
        .map((g, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}/blog/${g.slug}`, name: g.title })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      '@id': `${SITE_URL}/guides#glossary`,
      name: 'Digital marketing and AI search glossary',
      hasDefinedTerm: glossary.map((g) => ({ '@type': 'DefinedTerm', name: g.term, description: g.definition })),
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <SchemaMarkup key={i} schema={schema} />
      ))}
      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Guides', href: '/guides' }]} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-container-max mx-auto px-gutter max-w-3xl">
          <Badge variant="indigo" className="mb-4">GUIDES</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-5">
            Digital marketing and AI search guides
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Plain, step-by-step guides on getting found in AI answers, running Meta and Google ads, SEO, WhatsApp automation,
            Reels and landing pages. Each topic is explained in general terms first. The examples come from Indian real estate,
            the industry we specialise in, and the steps work for any business that sells through enquiries.
          </p>
          <nav aria-label="Guide topics" className="mt-8 flex flex-wrap gap-2">
            {topics.map((t) => (
              <a key={t.id} href={`#${t.id}`} className={chip}>{t.title}</a>
            ))}
            <a href="#glossary" className={chip}>Glossary</a>
          </nav>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="max-w-container-max mx-auto px-gutter py-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div className="flex items-start gap-4">
            <Gauge className="w-8 h-8 text-emerald-400 shrink-0" aria-hidden="true" />
            <div>
              <h2 className="text-xl font-bold">Free Website Audit</h2>
              <p className="text-slate-300 text-sm mt-1">
                Check any page for SEO basics, speed, tracking, lead capture and AI search readiness in under a minute.
              </p>
            </div>
          </div>
          <Link
            href="/tools/website-audit"
            className="inline-flex items-center gap-2 bg-emerald-400 text-slate-900 font-bold px-5 py-3 rounded-xl hover:bg-emerald-300 transition-colors w-fit"
          >
            Run the audit <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {topics.map((t, i) => (
        <section key={t.id} id={t.id} className={`${i % 2 ? 'bg-white' : 'bg-slate-50'} py-16 scroll-mt-24`}>
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="max-w-3xl mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{t.title}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{t.intro}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.guides.map((g) => (
                <article key={g.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                  <ImageFrame
                    src={g.image}
                    alt={g.imageAlt}
                    ratio="16/10"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="!rounded-none"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-slate-900 leading-snug">
                      <Link href={`/blog/${g.slug}`} className="hover:text-royal-blue transition-colors">{g.title}</Link>
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed flex-grow">{g.excerpt}</p>
                    <span className="text-xs text-slate-500 mt-4">
                      Updated {new Date(g.modifiedIso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section id="glossary" className="bg-white py-16 scroll-mt-24 border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Glossary</h2>
          <div className="divide-y divide-slate-100">
            {glossary.map((g) => (
              <div key={g.term} className="py-4">
                <h3 className="font-bold text-slate-900">{g.term}</h3>
                <p className="text-slate-600 mt-1 leading-relaxed">{g.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion customFaqs={guidesHubFaqs} title="About these guides" badgeText="FAQ" description="Who writes them, who they are for and how to use them." />
      <CtaBanner />
    </>
  );
}
