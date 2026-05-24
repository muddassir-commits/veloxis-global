'use client';

import React, { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PricingContent() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const plans = [
    {
      title: 'Starter',
      desc: 'Perfect for small businesses starting their digital journey',
      features: [
        'Local SEO & Google Business Profile (GBP) Setup',
        'Basic technical health fixes',
        'Keyword mapping for up to 20 local search terms',
        'Monthly rank progress and search clicks report',
        'Email & WhatsApp support'
      ]
    },
    {
      title: 'Growth',
      desc: 'For established businesses ready to scale aggressively',
      features: [
        'Full-scale SEO campaign (Local + Technical)',
        'Content strategy & article copywriting (4 posts/mo)',
        'PPC Ad campaigns setup & management (Google + Meta)',
        'CRM, lead tracker, and WhatsApp automations',
        'Competitor analysis & rank tracking benchmarks',
        'Bi-weekly review meetings'
      ],
      popular: true
    },
    {
      title: 'Enterprise',
      desc: 'Custom campaigns for larger brands and multi-location businesses',
      features: [
        'National or International SEO frameworks',
        'High-spend multi-channel Google/Meta/LinkedIn Ads',
        'Custom high-performance landing page UX development',
        'Full CRM lead pipeline mapping with custom N8n servers',
        'Dedicated senior marketing director assignment',
        'Live Looker Studio performance dashboard integration'
      ]
    }
  ];

  const faqs = [
    {
      q: "Do you lock clients into long-term contracts?",
      a: "No. We work month-to-month. Our results earn your retention. We want to be a partner you choose to stay with, not one you are forced to."
    },
    {
      q: "What's the minimum budget to work with you?",
      a: "Depends entirely on your goals, competitors, and target locations. Let's start with a free audit and find out the exact baseline required for your project."
    },
    {
      q: "How do you determine the final price for a campaign?",
      a: "We analyze competitor density, technical code size, and target keywords during the free audit phase, then calculate the precise execution hours required monthly."
    },
    {
      q: "Are ad budgets included in your monthly fees?",
      a: "No. Ad budgets (for Google and Meta Ads) are paid directly to the respective ad platform by the client. We only charge a flat monthly fee for strategy, design, optimization, and analytics tracking."
    },
    {
      q: "How long does it take to see tangible results?",
      a: "Paid campaigns (Google Ads, Meta Ads) start generating leads in the first week. Organic SEO and keyword authority building typically require 3 to 6 months to establish front-page rankings."
    },
    {
      q: "Can I upgrade, downgrade, or cancel at any time?",
      a: "Yes. Since we work on rolling monthly terms, you can change your package or pause services with a simple 30-day notice, allowing us to package assets and pause automation workflows."
    }
  ];

  return (
    <div className="bg-white font-sans text-left">
      {/* Header Section */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-royal-blue/20 blur-[128px]"></div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-[800px] flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-royal-blue uppercase tracking-wider">
              PRICING FRAMEWORK
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Pricing Built Around Your Goals, Not a Generic Package
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Every business is different. Our pricing reflects that. Start with a free audit — we'll recommend exactly what you need and what it'll cost. No surprises, no lock-ins.
            </p>
            <div className="mt-2">
              <Button href="/free-seo-audit" variant="primary" size="lg">
                Request Free SEO Audit →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              SERVICE TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bespoke Execution Frameworks
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We align our team scale and resources directly with your brand size and market complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className={`bg-white border rounded-2xl p-8 flex flex-col justify-between shadow-sm relative ${
                  plan.popular ? 'border-royal-blue ring-1 ring-royal-blue/20' : 'border-slate-100'
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-royal-blue text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    RECOMMENDED VALUE
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
                    href="/free-seo-audit" 
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

      {/* Pricing FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pricing FAQs & Delivery Policies
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              Answers regarding contracts, ad spend payments, campaign durations, and cancellation terms.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-slate-900 hover:text-royal-blue transition-colors text-sm sm:text-base gap-4"
                >
                  <span>{faq.q}</span>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {expandedFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-1 border-t border-slate-200/40 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
