/**
 * NichePage — Server Component.
 * One layout for the niche pages (/industries/ecommerce, /industries/local-business):
 * hero · problems · what we do (4 services) · optional audit checks · process + fit · free audit CTA ·
 * latest guides · FAQ (FAQPage schema via FaqAccordion) · CTA banner.
 */
import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, CheckCircle, type LucideIcon } from 'lucide-react';
import { WhatsAppLink } from '../ui/WhatsAppLink';
import { Button } from '../ui/Button';
import { ImageFrame } from '../ui/ImageFrame';
import { SchemaMarkup } from '../ui/SchemaMarkup';
import { Breadcrumb } from '../ui/Breadcrumb';
import { ReviewedLine } from '../ui/ReviewedLine';
import { FaqAccordion } from '../sections/FaqAccordion';
import { CtaBanner } from '../sections/CtaBanner';
import { NicheGuides } from '../sections/NicheGuides';
import { getServiceSchema } from '../../lib/schema';
import { siteData } from '../../data/site';
import type { IndustryKey } from '../../data/industries';

export interface NichePageData {
  industry: IndustryKey;
  path: string;
  /** Short id prefix for buttons (kept from the old pages so analytics stay comparable) */
  idPrefix: string;
  breadcrumb: string;
  description: string;
  schema: { name: string; serviceType: string; audience: string };
  hero: { badge: string; h1: string; lead: string; whatsappLabel: string; image: string; imageAlt: string; emailSubject: string };
  problemsHeading: string;
  problemsIntro: string;
  problems: { title: string; desc: string }[];
  servicesHeading: string;
  servicesIntro: string;
  services: { icon: LucideIcon; title: string; desc: string; href: string; linkLabel: string }[];
  checks?: { label: string; heading: string; intro: string; items: { title: string; desc: string }[]; after?: React.ReactNode };
  steps: { title: string; desc: string }[];
  fit: string[];
  auditBox: { title: string; desc: string };
  guidesTitle: string;
  faqTitle: string;
  faqDescription: string;
  faqs: { question: string; answer: string }[];
  cta: { title: string; description: string };
}

export const NichePage: React.FC<{ data: NichePageData }> = ({ data: d }) => (
  <>
    <SchemaMarkup
      schema={getServiceSchema({
        name: d.schema.name,
        description: d.description,
        path: d.path,
        serviceType: d.schema.serviceType,
        audience: d.schema.audience,
      })}
    />
    <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
      <div className="max-w-container-max mx-auto px-gutter">
        <Breadcrumb items={[{ name: 'Industries', href: '/industries' }, { name: d.breadcrumb, href: d.path }]} />
      </div>
    </section>

    {/* Hero */}
    <section className="bg-slate-900 text-white relative py-16 sm:py-20 lg:py-28 overflow-hidden text-left">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" aria-hidden="true" />
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="aurora-blob -top-40 -right-40 w-96 h-96 bg-[rgba(37,99,235,0.3)]" />
        <div className="aurora-blob aurora-blob-delay -bottom-48 left-1/4 w-80 h-80 bg-[rgba(52,211,153,0.12)]" />
      </div>
      <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider">
            {d.hero.badge}
          </span>
          <h1 className="text-[34px] sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">{d.hero.h1}</h1>
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">{d.hero.lead}</p>
          <ReviewedLine className="text-white/60" />
          <div className="mt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <WhatsAppLink id={`${d.idPrefix}-hero-btn`} placement="hero" button={{ variant: 'primary', size: 'lg' }} className="w-full sm:w-auto">
              {d.hero.whatsappLabel}
            </WhatsAppLink>
            <Link
              id={`${d.idPrefix}-hero-audit`}
              href="/free-audit"
              className="text-[15px] font-bold text-white/85 hover:text-white transition-colors px-5 py-3 border border-white/25 rounded-xl hover:bg-white/10 text-center"
            >
              How the free audit works
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 w-full max-w-xl lg:max-w-none">
          <ImageFrame
            src={d.hero.image}
            alt={d.hero.imageAlt}
            ratio="4/3"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
            className="shadow-2xl border border-slate-800"
          />
        </div>
      </div>
    </section>

    {/* Problems */}
    <section className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="max-w-3xl mb-10 section-reveal">
          <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">The problem</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{d.problemsHeading}</h2>
          <p className="text-slate-600 mt-4 leading-relaxed">{d.problemsIntro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-reveal">
          {d.problems.map((p) => (
            <div key={p.title} className="group spotlight bg-white p-6 border border-slate-200 rounded-2xl transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <AlertTriangle className="w-5 h-5 text-orange-500 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true" />
              <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What we do */}
    <section className="py-20 bg-white">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
          <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">What we do</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{d.servicesHeading}</h2>
          <p className="text-slate-500 mt-4 leading-relaxed">{d.servicesIntro}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
          {d.services.map(({ icon: Icon, title, desc, href, linkLabel }) => (
            <div
              key={title}
              className="group spotlight flex flex-col bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-extrabold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">{desc}</p>
              <Link href={href} className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-royal-blue hover:underline">
                {linkLabel} <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-10 text-sm text-slate-600">
          Want to check your own site first? Try our{' '}
          <Link href="/tools/website-audit" className="font-bold text-royal-blue hover:underline">free website audit tool</Link>.
        </p>
      </div>
    </section>

    {d.checks && (
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl mb-10 section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">{d.checks.label}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">{d.checks.heading}</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">{d.checks.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-reveal">
            {d.checks.items.map((c) => (
              <div key={c.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-extrabold text-slate-900 mb-2">{c.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          {d.checks.after && <p className="text-slate-600 mt-8 leading-relaxed max-w-3xl">{d.checks.after}</p>}
        </div>
      </section>
    )}

    {/* Process + fit + free audit CTA */}
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">How it works</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Three simple steps</h2>
          <ol className="flex flex-col gap-5 stagger-reveal">
            {d.steps.map((step, i) => (
              <li key={step.title} className="group spotlight relative bg-slate-50 border border-slate-200 rounded-2xl p-6 flex gap-5 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-0.5">
                <span className="w-10 h-10 rounded-full bg-royal-blue text-white font-bold flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-extrabold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="section-reveal">
          <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">A good fit if</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Who this is for</h2>
          <ul className="flex flex-col gap-4">
            {d.fit.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700 font-semibold leading-relaxed">
                <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="relative mt-10 rounded-2xl bg-slate-900 text-white p-7">
            <span className="border-beam border-beam-light" aria-hidden="true" />
            <h3 className="text-lg font-bold mb-2">{d.auditBox.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-5">{d.auditBox.desc}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppLink id={`${d.idPrefix}-steps-btn`} placement="steps" button={{ variant: 'white' }} className="w-full sm:w-auto">
                Message on WhatsApp →
              </WhatsAppLink>
              <Button
                id={`${d.idPrefix}-steps-email`}
                href={`mailto:${siteData.email}?subject=${encodeURIComponent(d.hero.emailSubject)}`}
                variant="outline"
                className="w-full sm:w-auto !border-white/40 !text-white hover:!bg-white/10"
              >
                Email us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <NicheGuides industry={d.industry} title={d.guidesTitle} />

    <FaqAccordion customFaqs={d.faqs} title={d.faqTitle} badgeText="FAQ" description={d.faqDescription} />

    <CtaBanner title={d.cta.title} description={d.cta.description} />
  </>
);
