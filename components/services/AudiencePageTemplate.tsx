import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, AlertTriangle, Check } from 'lucide-react';
import { AudienceData } from '../../data/audiences';
import { getServiceBySlug } from '../../data/services-data';
import { getPlaybookBySlug } from '../../data/playbooks';
import { blogPosts } from '../../data/blog-posts';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Breadcrumb } from '../ui/Breadcrumb';
import { FaqAccordion } from '../sections/FaqAccordion';
import { CtaBanner } from '../sections/CtaBanner';

export const AudiencePageTemplate: React.FC<{ audience: AudienceData }> = ({ audience }) => {
  const playbooks = audience.relatedPlaybooks.map(getPlaybookBySlug).filter(Boolean);
  const posts = audience.relatedPosts.map((s) => blogPosts.find((p) => p.slug === s)).filter(Boolean);

  return (
    <>
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: audience.breadcrumb, href: audience.path }]} />
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24 text-left">
        <Image src="/images/sections/industries-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" quality={80} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/80 to-slate-900/55" aria-hidden="true" />
        <div className="relative z-10 max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl flex flex-col items-start">
            <Badge variant="teal" className="mb-4">{audience.eyebrow.toUpperCase()}</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-white tracking-tight leading-tight mb-6">{audience.h1}</h1>
            <p className="text-base sm:text-body-lg text-white/80 leading-relaxed mb-8">{audience.lead}</p>
            <Button id={`audience-hero-cta-${audience.key}`} href="/contact" variant="primary">
              Get a free marketing review →
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-gutter flex flex-col gap-4">
          {audience.intro.map((p, i) => (
            <p key={i} className="text-slate-700 leading-relaxed text-base sm:text-lg">{p}</p>
          ))}
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{audience.painsHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {audience.pains.map((p) => (
              <div key={p.title} className="bg-white p-6 border border-slate-200 rounded-2xl">
                <AlertTriangle className="w-5 h-5 text-orange-500 mb-4" aria-hidden="true" />
                <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">{audience.helpHeading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audience.help.map((h) => {
              const service = getServiceBySlug(h.service);
              return (
                <div key={h.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col">
                  <h3 className="font-bold text-lg text-slate-900 mb-3">{h.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">{h.desc}</p>
                  {service && (
                    <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1 mt-5 text-sm font-bold text-royal-blue hover:underline">
                      {service.title} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">{audience.extraHeading}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audience.extra.map((e) => (
              <li key={e.title} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-slate-900">{e.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{e.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Example plans</h2>
            <ul className="flex flex-col gap-3">
              {playbooks.map((pb) => pb && (
                <li key={pb.slug}>
                  <Link href={`/playbooks/${pb.slug}`} className="font-semibold text-royal-blue hover:underline">{pb.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Guides</h2>
            <ul className="flex flex-col gap-3">
              {posts.map((p) => p && (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="font-semibold text-royal-blue hover:underline">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqAccordion
        customFaqs={audience.faqs}
        title="Common questions"
        badgeText="FAQ"
        description={`What ${audience.key === 'developers' ? 'developers' : 'channel partners and brokers'} usually ask before working with us.`}
      />

      <CtaBanner title={audience.ctaTitle} description={audience.ctaDescription} />
    </>
  );
};
