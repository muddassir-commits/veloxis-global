import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { constructMetadata } from '../../../lib/seo-config';
import { playbooks, getPlaybookBySlug } from '../../../data/playbooks';
import { getServiceBySlug } from '../../../data/services-data';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { getArticleSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';
import { FaqAccordion } from '../../../components/sections/FaqAccordion';
import { playbookFaqs } from '../../../data/playbook-faqs';
import { ImageFrame } from '../../../components/ui/ImageFrame';
import { Info, ArrowRight } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return playbooks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pb = getPlaybookBySlug(slug);
  if (!pb) return {};
  return constructMetadata({
    title: pb.seoTitle,
    description: pb.metaDescription,
    path: `/playbooks/${pb.slug}`,
    ogType: 'article',
    modifiedTime: pb.updated,
  });
}

export default async function PlaybookPage({ params }: PageProps) {
  const { slug } = await params;
  const pb = getPlaybookBySlug(slug);
  if (!pb) notFound();

  const service = getServiceBySlug(pb.service);
  const others = playbooks.filter((p) => p.slug !== pb.slug);
  const path = `/playbooks/${pb.slug}`;
  // Position of each section photo on the page, used to alternate right / left.
  const imageIndex = new Map(
    pb.sections.filter((s) => s.image).map((s, i) => [s.id, i] as const),
  );

  return (
    <>
      <SchemaMarkup
        schema={getArticleSchema({
          title: pb.title,
          description: pb.metaDescription,
          path,
          image: pb.image,
          datePublished: pb.updated,
        })}
      />
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Playbooks', href: '/playbooks' }, { name: pb.title, href: path }]} />
        </div>
      </section>

      <article className="bg-white py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-gutter">
          <span className="text-xs font-bold uppercase tracking-wider text-royal-blue">
            Example plan · {service?.title}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mt-3 mb-6">{pb.title}</h1>

          <ImageFrame
            src={pb.image}
            alt={pb.imageAlt}
            ratio="16/10"
            priority
            sizes="(max-width: 768px) 100vw, 720px"
            className="mb-8"
          />

          <div className="flex items-start gap-2 text-sm text-slate-700 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-10">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Scenario:</strong> {pb.scenario} This is not a client case study.
            </p>
          </div>

          <nav aria-label="On this page" className="mb-12 border border-slate-100 rounded-xl p-5 bg-slate-50">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">On this page</h2>
            <ol className="list-decimal pl-5 flex flex-col gap-1 text-sm">
              {pb.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-royal-blue hover:underline">{s.heading}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex flex-col gap-12">
            {pb.sections.map((s) => {
              const paragraphs = s.paragraphs?.map((p, i) => (
                <p key={i} className="text-slate-700 leading-relaxed mb-4">{p}</p>
              ));
              const list = s.list && (
                <ul className="list-disc pl-5 flex flex-col gap-2 text-slate-700 leading-relaxed">
                  {s.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
              // Photos alternate right / left down the page. When a section has a table,
              // only the paragraphs sit beside the photo and the table keeps full width.
              const imageOnLeft = s.image ? (imageIndex.get(s.id) ?? 0) % 2 === 1 : false;
              return (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{s.heading}</h2>
                {s.image ? (
                  <div className="md:flex md:items-start md:gap-8 mb-4">
                    <div className="md:flex-1 min-w-0">
                      {paragraphs}
                      {!s.table && list}
                    </div>
                    <div className={`mt-6 md:mt-1 md:w-2/5 md:shrink-0 ${imageOnLeft ? 'md:order-first' : ''}`}>
                      <ImageFrame
                        src={s.image.src}
                        alt={s.image.alt}
                        ratio="4/3"
                        position={s.image.position}
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  </div>
                ) : (
                  paragraphs
                )}
                {s.table && (
                  <div className="overflow-x-auto border border-slate-200 rounded-xl my-4">
                    <table className="w-full text-sm text-left min-w-[560px]">
                      {s.table.caption && <caption className="text-left text-xs text-slate-500 p-3">{s.table.caption}</caption>}
                      <thead className="bg-slate-50">
                        <tr>
                          {s.table.headers.map((h) => (
                            <th key={h} scope="col" className="p-3 font-bold text-slate-900 border-b border-slate-200">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, ri) => (
                          <tr key={ri} className="border-b border-slate-100 last:border-0 align-top">
                            {row.map((cell, ci) => (
                              <td key={ci} className={`p-3 text-slate-700 ${ci === 0 ? 'font-semibold text-slate-900' : ''}`}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {(!s.image || s.table) && list}
              </section>
              );
            })}
          </div>

          {service && (
            <div className="mt-14 rounded-2xl bg-slate-900 text-white p-8">
              <h2 className="text-xl font-bold mb-2">Want this set up for your project?</h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-5">{service.shortDesc}</p>
              <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1 font-bold text-teal-300 hover:text-white">
                About our {service.title.toLowerCase()} service <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          )}

          <div className="mt-12">
            <h2 className="text-lg font-bold text-slate-900 mb-4">More playbooks</h2>
            <ul className="flex flex-col gap-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/playbooks/${o.slug}`} className="text-royal-blue font-semibold hover:underline">{o.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {playbookFaqs[pb.slug] && (
        <FaqAccordion customFaqs={playbookFaqs[pb.slug]} title="Questions about this plan" badgeText="FAQ" description="Short answers to the questions this playbook raises most often." />
      )}

      <CtaBanner
        title="Get a plan for your own project"
        description="Share your project and current lead flow. We’ll review your pages, ads and follow-up, and send back a plan you can use with or without us."
      />
    </>
  );
}
