import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, Megaphone, MessageCircle, LineChart, CheckCircle, ArrowRight, Building2, Users } from 'lucide-react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Button } from '../../components/ui/Button';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { getWebPageSchema } from '../../lib/schema';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { auditAreas, auditDeliverables, auditSteps, freeAuditFaqs } from '../../data/free-audit';
import { siteData } from '../../data/site';

export const metadata: Metadata = constructMetadata(pageMeta.freeAudit);

const areaIcons = [Globe, Megaphone, MessageCircle, LineChart];

// Replaces the old /pricing page (301 in next.config.mjs). FAQPage schema comes from FaqAccordion.
export default function FreeAuditPage() {
  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          name: 'Free real estate marketing audit',
          description: pageMeta.freeAudit.description,
          path: '/free-audit',
        })}
      />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Free Audit', href: '/free-audit' }]} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden text-left">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob -top-40 -right-40 w-96 h-96 bg-[rgba(37,99,235,0.3)]" />
          <div className="aurora-blob aurora-blob-delay -bottom-48 left-1/4 w-80 h-80 bg-[rgba(52,211,153,0.12)]" />
        </div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider">
              Free · No obligation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Free real estate marketing audit
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Send us your project or current campaigns. Muddassir personally reviews your landing page, ads and lead
              follow-up, and tells you what to fix first — whether or not you work with us.
            </p>
            <div className="mt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="free-audit-hero-btn" href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Request your free audit →
              </Button>
              <Link
                href={siteData.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-bold text-white/85 hover:text-white transition-colors px-5 py-3 border border-white/25 rounded-xl hover:bg-white/10 text-center"
              >
                Ask on WhatsApp
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 w-full max-w-xl lg:max-w-none">
            <ImageFrame
              src="/images/people/free-audit/budget-discussion-laptop.jpg"
              alt="A man and a woman going through a marketing review at a table with a laptop and notebook"
              ratio="4/3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* What we review */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">What we review</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The full path from ad to site visit
            </h2>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Most lost leads aren’t an ads problem or a page problem alone. We look at every step a buyer goes through.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
            {auditAreas.map((area, i) => {
              const Icon = areaIcons[i] || Globe;
              return (
                <div
                  key={area.title}
                  className="group spotlight bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-2">{area.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you get + how it works */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">What you get</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Clear fixes, not a sales pitch</h2>
            <ul className="flex flex-col gap-4">
              {auditDeliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700 font-semibold leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ImageFrame
              src="/images/people/free-audit/reviewing-campaign-reports.jpg"
              alt="People reviewing printed charts and reports around a meeting table"
              ratio="16/10"
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="mt-10 shadow-xl border border-slate-100"
            />
          </div>

          <div>
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">How it works</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">Three simple steps</h2>
            <ol className="flex flex-col gap-5 stagger-reveal">
              {auditSteps.map((step, i) => (
                <li key={step.title} className="group spotlight relative bg-white border border-slate-200 rounded-2xl p-6 flex gap-5 transition-all duration-500 hover:shadow-lg hover:-translate-y-0.5">
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

            <div className="relative mt-8 rounded-2xl bg-slate-900 text-white p-7">
              <span className="border-beam border-beam-light" aria-hidden="true" />
              <h3 className="text-lg font-bold mb-2">Ready when you are</h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-5">
                Tell us about your project and current lead flow. Muddassir replies personally.
              </p>
              <Button id="free-audit-steps-btn" href="/contact" variant="white" className="w-full sm:w-auto">
                Request your free audit →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-16 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center section-reveal">Who the audit is for</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto stagger-reveal">
            <Link href="/industries/real-estate" className="group spotlight bg-slate-50 rounded-2xl border border-slate-200 p-7 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1">
              <Building2 className="w-7 h-7 text-royal-blue mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true" />
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-royal-blue transition-colors">Developers and builders</h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">Launching a project or phase, or clearing unsold inventory, and not getting enough site visits from the budget.</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-royal-blue">
                Marketing for developers <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
            <Link href="/channel-partners" className="group spotlight bg-slate-50 rounded-2xl border border-slate-200 p-7 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1">
              <Users className="w-7 h-7 text-royal-blue mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true" />
              <h3 className="font-bold text-lg text-slate-900 group-hover:text-royal-blue transition-colors">Channel partners and brokers</h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-2">Relying on shared portal leads and wanting exclusive enquiries for the projects you’re mandated on.</p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-royal-blue">
                Marketing for channel partners <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <FaqAccordion
        customFaqs={freeAuditFaqs}
        title="Free audit questions"
        badgeText="FAQ"
        description="What the audit covers, what we need from you and what happens afterwards."
      />

      <CtaBanner showAuditLink={false} />
    </>
  );
}
