import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle, Megaphone, LayoutTemplate, MessageCircle, ArrowRight, Users, PhoneOff, MoonStar,
  Target, Building2, KeyRound, UserRound, MapPin, CalendarCheck, Receipt, Wallet, BarChart3,
} from 'lucide-react';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Button } from '../../components/ui/Button';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { ContactForm } from '../../components/forms/ContactForm';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { WhatsAppFlowMockup } from '../../components/sections/WhatsAppFlowMockup';
import { getServiceSchema } from '../../lib/schema';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { siteData } from '../../data/site';
import {
  MIN_AD_BUDGET, leadSystemDefinition, leadSystemFaqs, leadSystemIncluded, leadSystemMetrics, leadSystemNeeds, leadSystemNri, leadSystemPricing,
  leadSystemProblems, leadSystemReasons, leadSystemSteps, leadSystemTimeline,
} from '../../data/lead-system';

export const metadata: Metadata = constructMetadata(pageMeta.leadSystem);

const problemIcons = [Users, PhoneOff, MoonStar];
const stepIcons = [Megaphone, LayoutTemplate, MessageCircle];
const includedIcons = [LayoutTemplate, Megaphone, MessageCircle, BarChart3];
const reasonIcons = [Building2, Target, KeyRound, UserRound, MapPin, CalendarCheck];
const pricingIcons = [Receipt, CalendarCheck, Wallet];

// Offer page for the one packaged service. The brochure QR code, cold emails and ads point here,
// so every section ends in the same action: book the free audit call.
export default function LeadSystemPage() {
  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: 'Real Estate Lead System',
          description: pageMeta.leadSystem.description,
          path: pageMeta.leadSystem.path,
          serviceType: 'Real estate lead generation',
          audience: 'Real estate agents, brokers, channel partners and builders',
        })}
      />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Real Estate Lead System', href: pageMeta.leadSystem.path }]} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob -top-40 -right-40 w-96 h-96 bg-[rgba(37,99,235,0.3)]" />
          <div className="aurora-blob aurora-blob-delay -bottom-48 left-1/4 w-80 h-80 bg-[rgba(52,211,153,0.12)]" />
        </div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider">
              Real estate lead generation system
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Genuine buyer enquiries on your WhatsApp, every day
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Meta ads, a landing page for your project and an instant WhatsApp reply, set up and run as one
              system for real estate agents, brokers and builders.
            </p>
            <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-200">
              {['Exclusive leads, not shared', 'Reply within seconds, 24×7', 'Month-to-month after setup'].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="lead-system-hero-btn" href="#enquire" variant="primary" size="lg" className="w-full sm:w-auto">
                Book a free audit call →
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
              src="/images/people/channel-partners/hero-broker-showing-apartment.jpg"
              alt="A property agent showing an apartment to a buyer"
              ratio="4/3"
              position="65% center"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Direct answer: what this is, in one paragraph */}
      <section className="bg-white pt-14 pb-2">
        <div className="max-w-3xl mx-auto px-gutter text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">{leadSystemDefinition.question}</h2>
          <p className="text-slate-600 leading-relaxed text-lg">{leadSystemDefinition.answer}</p>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">The problem</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why most property leads never become site visits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-reveal">
            {leadSystemProblems.map((p, i) => {
              const Icon = problemIcons[i];
              return (
                <div key={p.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-7">
                  <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5" aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The system */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="section-reveal">
              <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">The system</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Ad → Landing page → WhatsApp
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-xl">
                Three parts that only work well together. We build and run all three, so a buyer goes from seeing
                your ad to talking to you without a single gap.
              </p>
            </div>
            <ol className="flex flex-col gap-5 stagger-reveal">
              {leadSystemSteps.map((s, i) => {
                const Icon = stepIcons[i];
                return (
                  <li key={s.step} className="relative bg-white border border-slate-200 rounded-2xl p-6 flex gap-5">
                    <span className="w-11 h-11 rounded-full bg-royal-blue text-white flex items-center justify-center shrink-0" aria-hidden="true">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-royal-blue uppercase tracking-widest">Step {i + 1} · {s.step}</p>
                      <h3 className="font-extrabold text-slate-900 mt-1">{s.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="lg:col-span-5 flex flex-col items-center gap-4">
            <WhatsAppFlowMockup />
            <p className="text-xs text-slate-500 text-center max-w-[300px]">
              Example of the instant reply a buyer gets at 10 PM. Sample project shown.
            </p>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">What’s included</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Everything, in one monthly plan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
            {leadSystemIncluded.map((g, i) => {
              const Icon = includedIcons[i];
              return (
                <div key={g.group} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center mb-5" aria-hidden="true">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 mb-4">{g.group}</h3>
                  <ul className="flex flex-col gap-3">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline + metrics */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">How it rolls out</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Live in two weeks</h2>
            <ol className="relative border-l-2 border-royal-blue/20 ml-3 flex flex-col gap-8 stagger-reveal">
              {leadSystemTimeline.map((t) => (
                <li key={t.when} className="pl-8 relative">
                  <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-royal-blue ring-4 ring-slate-50" aria-hidden="true" />
                  <p className="text-xs font-bold text-royal-blue uppercase tracking-widest">{t.when}</p>
                  <h3 className="font-extrabold text-slate-900 mt-1">{t.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mt-1">{t.desc}</p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">Your weekly report</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">Five numbers, every week</h2>
            <div className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 stagger-reveal">
              {leadSystemMetrics.map((m, i) => (
                <div key={m.label} className="flex items-center gap-4 p-5">
                  <span className="w-9 h-9 rounded-lg bg-teal-accent/10 text-teal-700 font-extrabold flex items-center justify-center shrink-0" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-extrabold text-slate-900">{m.label}</h3>
                    <p className="text-sm text-slate-600">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-4">No vanity numbers. Reach, likes and clicks stay out of the report.</p>
          </div>
        </div>
      </section>

      {/* Why Veloxis */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-7 section-reveal">
              <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">Why Veloxis</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Built for property sales, run by the founder
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-xl">
                You get one person accountable for the ads, the page and the follow-up, and every account stays in
                your name from day one.
              </p>
            </div>
            <div className="lg:col-span-5">
              <ImageFrame
                src="/images/people/blog/whatsapp-man-messaging-phone.jpg"
                alt="A man reading a WhatsApp message on his phone"
                ratio="16/10"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="shadow-xl border border-slate-100"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-reveal">
            {leadSystemReasons.map((r, i) => {
              const Icon = reasonIcons[i];
              return (
                <div key={r.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex gap-4">
                  <Icon className="w-6 h-6 text-royal-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-extrabold text-slate-900">{r.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mt-1">{r.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NRI track, one line out to its own page */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-gutter text-center section-reveal">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">{leadSystemNri.title}</h2>
          <p className="text-slate-600 leading-relaxed mb-4">{leadSystemNri.desc}</p>
          <Link href={leadSystemNri.href} className="inline-flex items-center gap-2 font-bold text-royal-blue hover:underline">
            {leadSystemNri.linkLabel} <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Pricing structure + what we need */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-widest block mb-3">How you pay</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Simple, transparent pricing</h2>
            <p className="text-slate-300 mt-4 leading-relaxed">
              Your exact fee depends on the number of projects and cities. We quote it after the free audit call,
              in writing, before you commit to anything.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-reveal">
            {leadSystemPricing.map((p, i) => {
              const Icon = pricingIcons[i];
              return (
                <div key={p.title} className="bg-white/5 border border-white/10 rounded-2xl p-7">
                  <Icon className="w-7 h-7 text-blue-300 mb-4" aria-hidden="true" />
                  <h3 className="font-extrabold text-lg">{p.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mt-2">{p.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-sm text-slate-400 mt-8">
            Month-to-month after setup · 30 days’ notice to stop · Minimum recommended ad budget {MIN_AD_BUDGET}/month
          </p>
        </div>
      </section>

      {/* Enquiry */}
      <section id="enquire" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">Start with a free audit</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              15 minutes, no obligation
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Muddassir looks at your project and your current lead flow, tells you what he would change, and gives
              you a realistic lead range and a written quote. Use the advice with or without us.
            </p>
            <h3 className="font-extrabold text-slate-900 mb-4">What we’ll need if you go ahead</h3>
            <ul className="flex flex-col gap-3 mb-8">
              {leadSystemNeeds.map((n) => (
                <li key={n} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
            <Link
              href={siteData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-royal-blue hover:underline"
            >
              Prefer WhatsApp? Message {siteData.phone} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <ContactForm defaultService="Real Estate Lead System" />
        </div>
      </section>

      <FaqAccordion
        customFaqs={leadSystemFaqs}
        title="Questions about the Lead System"
        badgeText="FAQ"
        description="Costs, ownership, contracts and what to expect."
      />
    </>
  );
}
