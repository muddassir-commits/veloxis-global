'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import { 
  Check, 
  Search, 
  Layers, 
  RotateCcw, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Target,
  BarChart3,
  TrendingUp,
  Award
} from 'lucide-react';

export default function PpcServiceContent() {
  const [activeTab, setActiveTab] = useState<'search' | 'pmax' | 'remarketing'>('search');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Google Ads Audit",
    "Keyword Research & Bidding",
    "Performance Max Strategy",
    "High-Converting Copywriting",
    "Landing Page Audits",
    "Conversion Tracking Pass",
    "A/B Creative Testing",
    "Negative Keyword Filters",
    "Budget Optimization",
    "Weekly Performance Reports"
  ];

  const tabContent = {
    search: {
      title: "High-Intent Google Search Ads",
      description: "Capture buyers at the exact moment they search for your services. We draft persuasive ad copies, build tight keyword lists, exclude irrelevant search queries via negative list optimization, and bids aggressively for target search share.",
      features: [
        "Granular single-keyword ad group structures (SKAGs)",
        "Negative keyword list updates to block wasted spend",
        "A/B split testing for ad titles and descriptions",
        "Quality Score optimizations to lower CPCs"
      ],
      icon: <Search className="w-5 h-5 text-white" />,
      tag: "Direct Demand Capture"
    },
    pmax: {
      title: "Performance Max (PMax) Campaigns",
      description: "Leverage Google's dominant AI campaign format for 2026. We feed Google's algorithm with top creative assets, audience signals, and precise conversion data to drive scale across Search, YouTube, Display, and Maps.",
      features: [
        "Unified asset group creations (video, copy, images)",
        "Advanced first-party customer audience signal sync",
        "Search themes and placement exclusions pass",
        "Smart bidding settings (Target CPA / Target ROAS)"
      ],
      icon: <Layers className="w-5 h-5 text-white" />,
      tag: "AI-Powered Scalability"
    },
    remarketing: {
      title: "Dynamic Remarketing Funnels",
      description: "Bring back lost visitors who didn't convert on their first visit. We deploy dynamic display banner ads and Search Ad Customizers to serve personalized offers to prior site browsers, lowering overall acquisition cost.",
      features: [
        "Custom audience segment mapping based on site activity",
        "Cross-device display banner ad distribution",
        "Dynamic cart-abandonment offers for e-commerce",
        "Frequency capping to protect brand reputation"
      ],
      icon: <RotateCcw className="w-5 h-5 text-white" />,
      tag: "Lost Lead Recovery"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Account Structure Discovery",
      desc: "Complete audit of historical campaign performance, conversion tracking settings, and keyword settings.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Conversion Tracking Verification",
      desc: "Deploying Google Tag Manager scripts to ensure call clicks, form fills, and WhatsApp events track perfectly.",
      icon: <BarChart3 className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Keyword & Ad Copy Build",
      desc: "Comprehensive research targeting high-intent buyer terms, writing ad headlines, and adding descriptions.",
      icon: <FileText className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Creative Assets Alignment",
      desc: "Designing custom display banners and vertical assets for Performance Max asset groups.",
      icon: <Target className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Campaign Orchestration & Bid Sync",
      desc: "Launching structured campaigns with manual bidding limits to prevent budget runaway on Day 1.",
      icon: <Award className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Algorithmic Scaling",
      desc: "Transitioning to target ROAS smart bidding, adding negative queries daily, and scaling budgets.",
      icon: <TrendingUp className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "4.8x", label: "Average Return on Ad Spend (ROAS)" },
    { value: "32%", label: "Average drop in Cost Per Acquisition (CPA)" },
    { value: "100%", label: "Google Ads Certified management team" }
  ];

  const faqs = [
    {
      q: "How fast do Google Ads campaigns show results?",
      a: "Google Ads can generate qualified clicks and conversions within 24 to 48 hours of launching campaigns. However, optimization models require 14 to 30 days to build stable cost per lead metrics."
    },
    {
      q: "What is your setup process for brand new accounts?",
      a: "We configure your billing settings, structure the conversion tracking parameters via Google Tag Manager, link Google Analytics 4, build campaign skeletons, and write all initial ad copies."
    },
    {
      q: "Do you guarantee page 1 rankings on Google?",
      a: "Yes. Google Ads guarantees page 1 ad placement as long as your budget bids are competitive and Quality Scores are high. We optimize bids to capture maximum top-of-page search views."
    },
    {
      q: "What is a Performance Max (PMax) campaign?",
      a: "Performance Max is Google's automated, asset-based campaign type. It displays ads across Search, Maps, YouTube, Gmail, and Google Display network using Google's machine learning systems."
    },
    {
      q: "How do you handle budget management?",
      a: "You pay Google directly for ad clicks using your corporate billing method. Veloxis Global manages the campaigns under a flat management fee or percentage of ad spend, ensuring budgets never exceed monthly caps."
    },
    {
      q: "What keywords will you block?",
      a: "We actively compile lists of 'negative keywords' (such as 'free', 'jobs', or competitor terms) to prevent your ads from triggering on irrelevant searches, preserving ad budget."
    },
    {
      q: "Do you write the landing page copy?",
      a: "Yes. We perform landing page conversion rate optimization (CRO) audits and rewrite copy or design targeted high-converting landing pages to ensure visitors convert into leads."
    },
    {
      q: "How are you different from other PPC agencies?",
      a: "We focus on sales and lead volume rather than just traffic and clicks. Our Google Ads Certified team coordinates search campaigns with direct lead tracking models to display real revenue attribution."
    },
    {
      q: "What is your minimum monthly budget?",
      a: "We work with clients starting at a minimum ad spend of ₹30,000 per month to ensure campaigns have sufficient conversion data to train Google's bidding systems."
    },
    {
      q: "How do you track WhatsApp conversions?",
      a: "We configure custom tag listeners in Google Tag Manager that fire a conversion signal only when a user successfully clicks your WhatsApp icon and redirects to start a chat."
    }
  ];

  return (
    <div className="bg-white font-sans text-left">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-royal-blue/20 blur-[128px]"></div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-[800px] flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-royal-blue uppercase tracking-wider">
              GOOGLE ADS CERTIFIED · SEARCH · DISPLAY · PMAX
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Google Ads Management That Maximises Every Rupee You Spend
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Partner with a Google Ads Certified Team. We build structured Search and dominant Performance Max (PMax) campaigns optimized for Indian business growth parameters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="ppc-hero-quote-btn" href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Custom Quote →
              </Button>
              <Button id="ppc-hero-audit-btn" href="/free-seo-audit" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Request Free Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Full-Scale PPC Management Suite
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              Complete optimization pass on campaign segments, keywords, and landing structures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {checklistItems.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 flex items-start gap-3 hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full bg-royal-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-royal-blue" />
                </div>
                <span className="font-bold text-slate-900 text-sm leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              CAMPAIGN FORMATS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Targeted PPC Ad Frameworks
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We apply customized campaign settings depending on search volumes and buyer signals.
            </p>
          </div>

          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['search', 'pmax', 'remarketing'] as const).map((tab) => (
              <button
                key={tab}
                id={`ppc-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'search' && <Search className="w-4 h-4" />}
                  {tab === 'pmax' && <Layers className="w-4 h-4" />}
                  {tab === 'remarketing' && <RotateCcw className="w-4 h-4" />}
                  {tab === 'search' ? 'Search Ads' : tab === 'pmax' ? 'Performance Max' : 'Remarketing'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorPpc"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-blue"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-10 shadow-sm max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-7 flex flex-col items-start gap-4">
                  <span className="bg-royal-blue/10 text-royal-blue text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                    {tabContent[activeTab].tag}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {tabContent[activeTab].description}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2 w-full">
                    {tabContent[activeTab].features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                        <Check className="w-4 h-4 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-royal-blue flex items-center justify-center shadow-lg shadow-royal-blue/20">
                    {tabContent[activeTab].icon}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 6-Step PPC Acceleration Roadmap
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We construct search campaigns with manual bidding controls to prevent early budget runaways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-6 relative hover:shadow-md transition-shadow">
                <span className="absolute right-6 top-6 text-3xl font-extrabold text-royal-blue/15 select-none font-sans">
                  {step.step}
                </span>
                <div className="w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center mb-5">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Proof Strip */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-35"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-4xl sm:text-5xl font-extrabold text-royal-blue bg-clip-text text-transparent bg-gradient-to-r from-royal-blue to-teal-accent">
                  {stat.value}
                </span>
                <p className="text-xs sm:text-sm font-bold text-slate-400 max-w-xs uppercase tracking-wider leading-relaxed">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Pricing CTA */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-3 max-w-lg text-left">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                PRICING & MANAGEMENT retainer
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                PPC campaigns tailored to maximize your search visibility and ROAS.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Pricing is tailored to your goals and market. Contact us for a free quote — we'll recommend exactly what you need.
              </p>
            </div>
            <Button id="ppc-pricing-quote-btn" href="/contact" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Get Custom Quote →
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              Clear answers regarding search visibility parameters, strategies, and deliverables.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  id={`ppc-faq-btn-${idx}`}
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
                      <div className="px-6 pb-5 pt-1 border-t border-slate-50 text-xs sm:text-sm text-slate-500 leading-relaxed">
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

      {/* City Strip */}
      <section className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-container-max mx-auto px-gutter">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Google Ads marketing services available in:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6 text-sm font-extrabold text-slate-800">
            <Link href="/digital-marketing-agency-delhi" className="hover:text-royal-blue transition-colors">Delhi</Link>
            <span className="text-slate-200 hidden sm:inline">•</span>
            <Link href="/digital-marketing-agency-noida" className="hover:text-royal-blue transition-colors">Noida</Link>
            <span className="text-slate-200 hidden sm:inline">•</span>
            <Link href="/digital-marketing-agency-lucknow" className="hover:text-royal-blue transition-colors">Lucknow</Link>
            <span className="text-slate-200 hidden sm:inline">•</span>
            <Link href="/digital-marketing-agency-kanpur" className="hover:text-royal-blue transition-colors">Kanpur</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
