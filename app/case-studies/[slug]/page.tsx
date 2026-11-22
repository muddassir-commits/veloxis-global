import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { constructMetadata } from '../../../lib/seo-config';
import { caseStudies, caseCategories, getCaseStudyBySlug, type CaseShot } from '../../../data/case-studies';
import { getServiceBySlug } from '../../../data/services-data';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { getArticleSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';
import { siteData } from '../../../data/site';
import { ScrollProgress } from '../../../components/ui/ScrollProgress';
import { ArrowRight, Clock } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) return {};
  return constructMetadata({
    title: c.seoTitle,
    description: c.metaDescription,
    path: `/case-studies/${c.slug}`,
    ogImage: c.cover.src,
    ogImageWidth: c.cover.width,
    ogImageHeight: c.cover.height,
    ogType: 'article',
    publishedTime: c.updated,
    modifiedTime: c.updated,
  });
}

function Shot({ shot, priority = false }: { shot: CaseShot; priority?: boolean }) {
  return (
    <figure className="my-8">
      <a
        href={shot.src}
        target="_blank"
        rel="noopener"
        className="block rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          width={shot.width}
          height={shot.height}
          priority={priority}
          sizes="(max-width: 768px) 100vw, 768px"
          className="w-full h-auto"
        />
      </a>
      <figcaption className="text-xs text-slate-500 mt-2">{shot.caption} · tap to enlarge</figcaption>
    </figure>
  );
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const c = getCaseStudyBySlug(slug);
  if (!c) notFound();

  const path = `/case-studies/${c.slug}`;
  const service = getServiceBySlug(c.service);
  const category = caseCategories.find((k) => k.id === c.category);
  const related = [
    ...caseStudies.filter((o) => o.slug !== c.slug && o.category === c.category),
    ...caseStudies.filter((o) => o.slug !== c.slug && o.category !== c.category),
  ].slice(0, 4);

  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema({
          title: c.title,
          description: c.metaDescription,
          path,
          image: c.cover.src,
          datePublished: c.updated,
          section: category?.label,
        })}
      />
      <ScrollProgress />
      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Case Studies', href: '/case-studies' }, { name: c.title, href: path }]} />
        </div>
      </section>

      <article className="bg-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-gutter">
          <span className="text-xs font-bold uppercase tracking-wider text-royal-blue">
            Case study · {category?.label}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-3 mb-4">{c.title}</h1>
          <p className="text-sm text-slate-500 mb-8">
            By <Link href="/about" className="font-semibold text-slate-700 hover:text-royal-blue">the {siteData.name} team</Link>
            {' · '}Updated{' '}
            <time dateTime={c.updated}>
              {new Date(c.updated).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </p>

          <p className="text-lg text-slate-700 leading-relaxed mb-8">{c.summary}</p>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {c.results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="text-2xl sm:text-3xl font-extrabold text-royal-blue">{r.big}</div>
                <div className="text-sm text-slate-600 mt-1 leading-snug">{r.label}</div>
              </div>
            ))}
          </div>

          {c.status === 'in-progress' && (
            <p className="flex items-start gap-2 text-sm text-slate-700 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10">
              <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
              <span>This project is still running. Results will be added here when there is real data to show.</span>
            </p>
          )}

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm border border-slate-200 rounded-2xl p-6 mb-4">
            <div><dt className="font-bold text-slate-900">Client</dt><dd className="text-slate-600">{c.client}</dd></div>
            <div><dt className="font-bold text-slate-900">Industry</dt><dd className="text-slate-600">{c.industry}</dd></div>
            <div><dt className="font-bold text-slate-900">Location</dt><dd className="text-slate-600">{c.location}</dd></div>
            <div><dt className="font-bold text-slate-900">Period</dt><dd className="text-slate-600">{c.period}</dd></div>
            <div className="sm:col-span-2"><dt className="font-bold text-slate-900">What we did</dt><dd className="text-slate-600">{c.services.join(' · ')}</dd></div>
          </dl>

          <Shot shot={c.cover} priority />

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The problem</h2>
            {c.problem.map((p, i) => (
              <p key={i} className="text-slate-700 leading-relaxed mb-4">{p}</p>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">What we did</h2>
            <ol className="flex flex-col gap-6">
              {c.steps.map((s, i) => (
                <li key={s.head} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-royal-blue text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{s.head}</h3>
                    <p className="text-slate-700 leading-relaxed">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {c.shots.map((s) => (
            <Shot key={s.src} shot={s} />
          ))}

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{c.status === 'in-progress' ? 'Where it stands' : 'The result'}</h2>
            {c.outcome.map((p, i) => (
              <p key={i} className="text-slate-700 leading-relaxed mb-4">{p}</p>
            ))}
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What we learned</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2 text-slate-700 leading-relaxed">
              {c.lessons.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-lg font-bold text-slate-900 mb-3">Tools used</h2>
            <ul className="flex flex-wrap gap-2">
              {c.tools.map((t) => (
                <li key={t} className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-700">{t}</li>
              ))}
            </ul>
          </section>

          {service && (
            <div className="mt-14 rounded-2xl bg-slate-900 text-white p-8 spotlight spotlight-dark section-reveal">
              <h2 className="text-xl font-bold mb-2">Want the same for your business?</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1 font-bold text-teal-300 hover:text-white">
                About our {service.title.toLowerCase()} service <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          )}

          <div className="mt-12">
            <h2 className="text-lg font-bold text-slate-900 mb-4">More case studies</h2>
            <ul className="flex flex-col gap-2">
              {related.map((o) => (
                <li key={o.slug}>
                  <Link href={`/case-studies/${o.slug}`} className="text-royal-blue font-semibold hover:underline">{o.title}</Link>
                </li>
              ))}
            </ul>
            <Link href="/case-studies" className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-slate-700 hover:text-royal-blue">
              All case studies <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>

      <CtaBanner
        title="Get a free audit of your own account"
        description="We’ll check your ads, website and follow-up the way we did here, and send you a short list of what to fix first."
      />
    </>
  );
}
