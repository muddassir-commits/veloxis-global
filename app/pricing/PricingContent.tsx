import React from 'react';
import { Button } from '../../components/ui/Button';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Check } from 'lucide-react';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { plans, pricingFaqs } from '../../data/pricing';
import { servicesData } from '../../data/services-data';

export default function PricingContent() {
  return (
    <div className="bg-white font-sans text-left">
      {/* Header Section */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob -top-40 -right-40 w-96 h-96 bg-[rgba(37,99,235,0.3)]" />
          <div className="aurora-blob aurora-blob-delay -bottom-48 left-1/4 w-80 h-80 bg-[rgba(52,211,153,0.12)]" />
        </div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 max-w-[800px] flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider">
              PRICING
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Real estate marketing pricing and packages
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Monthly fees for landing pages, Meta and Google ads, and WhatsApp automation. Ad spend is paid directly to Google and Meta, and there is no lock-in. Start with a free audit and we’ll recommend the right scope.
            </p>
            <div className="mt-2">
              <Button id="pricing-hero-audit-btn" href="/contact" variant="primary" size="lg">
                Get a free audit →
              </Button>
            </div>
          </div>
          <div className="lg:col-span-5 w-full max-w-xl lg:max-w-none">
            <ImageFrame
              src="/images/people/pricing/budget-discussion-laptop.jpg"
              alt="A man and a woman discussing plans at a table with a laptop and notebook"
              ratio="4/3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
              className="shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-5">
            <ImageFrame
              src="/images/people/pricing/reviewing-campaign-reports.jpg"
              alt="People reviewing printed charts and reports around a meeting table"
              ratio="4/3"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="shadow-xl border border-slate-100"
            />
          </div>
          <div className="lg:col-span-7 text-center lg:text-left section-reveal">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              STARTING PRICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What each service starts from
            </h2>
            <ul className="mt-6 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start gap-3 text-sm">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`} className="inline-block bg-white border border-slate-200 rounded-full px-4 py-2 transition-all duration-300 hover:border-royal-blue hover:shadow-md hover:-translate-y-0.5">
                    <span className="font-bold text-slate-900">{s.title}</span>{' '}
                    <span className="text-slate-500">· {s.pricingRange.replace('Starts from ', 'from ')}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 mt-6 text-sm">
              Most clients combine services in one of the packages below. Final fees are fixed after a free audit.
            </p>
          </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch stagger-reveal">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`spotlight bg-white border rounded-2xl p-8 flex flex-col justify-between shadow-sm relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-xl hover:-translate-y-1.5 ${
                  plan.popular ? 'border-royal-blue ring-1 ring-royal-blue/20' : 'border-slate-100'
                }`}
              >
                {plan.popular && <span className="border-beam" aria-hidden="true" />}
                {plan.popular && (
                  <span className="absolute z-10 top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-royal-blue text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    MOST COMMON
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">{plan.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {plan.desc}
                  </p>

                  <div className="w-full border-t border-slate-100 my-4"></div>

                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                        <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Button
                    id={`pricing-plan-btn-${plan.title.toLowerCase()}`}
                    href="/contact"
                    variant={plan.popular ? 'primary' : 'outline'}
                    className="w-full text-center"
                  >
                    Get Recommendation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion
        customFaqs={pricingFaqs}
        title="Pricing questions"
        badgeText="FAQ"
        description="Contracts, ad spend, timelines and cancellation."
      />
    </div>
  );
}
