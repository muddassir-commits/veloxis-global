'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import { AnimatedCounter } from '../../../components/ui/AnimatedCounter';
import { useInViewAnimation } from '../../../lib/useInViewAnimation';
import { 
  Check, 
  MapPin, 
  BarChart3, 
  Server, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Search,
  Code,
  Map,
  Link2,
  TrendingUp,
  Award,
  LineChart,
  Activity
} from 'lucide-react';

export default function AnalyticsContent() {
  const { getSectionAnimation } = useInViewAnimation();
  const [activeTab, setActiveTab] = useState<'ga4' | 'server' | 'dash'>('ga4');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "GA4 Configuration Pass",
    "GTM Container Mapping",
    "Custom Event Scripting",
    "Server-Side tag container config",
    "Meta CAPI routing setup",
    "Google Ads conversion link",
    "Call Tracking API sync",
    "Attribution Modeling review",
    "Looker Studio Dashboard",
    "Automated PDF reporting"
  ];

  const tabContent = {
    ga4: {
      title: "Google Analytics 4 & Tag Manager",
      description: "Remove the blind spots. We deploy custom Google Tag Manager scripts to track scroll depths, form submissions, button clicks, and video plays, structuring a clean GA4 event schema that shows how customers browse.",
      features: [
        "Custom event triggers for leads/sales",
        "Cross-domain user journey tracking",
        "User parameter & custom dimension tuning",
        "Enhanced Measurement setup & cleaning"
      ],
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      tag: "Conversion Auditing"
    },
    server: {
      title: "Server-Side Tagging & Privacy API",
      description: "Protect your ad pixel data. We configure Google Cloud servers to host your tracking container. This routes ad pixel events (Meta, Google, TikTok) server-side, boosting load speeds and securing your ads from ad-block loss.",
      features: [
        "Google Cloud Platform tagging server config",
        "Bypassing browser ad-blockers (15%+ data recovery)",
        "Meta Conversions API (CAPI) direct integration",
        "First-party cookie extension setup"
      ],
      icon: <Server className="w-5 h-5 text-white" />,
      tag: "Data Infrastructure"
    },
    dash: {
      title: "Looker Studio Custom Dashboards",
      description: "One unified view of performance. We connect Google Search Console, Google Ads, Meta Ads, and GA4 into interactive, real-time Looker Studio reports so you can track ROI without checking 5 platforms.",
      features: [
        "Cross-channel cost & lead consolidation",
        "Real-time data refreshes with API links",
        "Filterable metrics (by location, city, platform)",
        "Automatic weekly email PDF summaries"
      ],
      icon: <LineChart className="w-5 h-5 text-white" />,
      tag: "Visual Telemetry"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Measurement Audit",
      desc: "Audit current GA4 events and pixel configurations, locating duplicate tags, tracking gaps, and spam traffic patterns.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Schema Mapping",
      desc: "Define naming schemas for all conversions, form fills, clicks, and page milestones matching standard Google variables.",
      icon: <FileText className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "GTM Implementation",
      desc: "Build Google Tag Manager variables, custom JavaScript tags, and trigger variables, publishing a clean sandboxed draft.",
      icon: <Code className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Server Tag Config",
      desc: "Deploy client containers on secure cloud servers, routing browser metrics through first-party domains.",
      icon: <Server className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Attribution Setup",
      desc: "Link marketing expenses, align attribution algorithms (Data-Driven models), and build custom cross-channel formulas.",
      icon: <Link2 className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Dashboard Delivery",
      desc: "Design Looker Studio panels, establish scheduled notifications, and present dashboard instructions to your staff.",
      icon: <Award className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "100%", label: "Accurate multi-channel conversion tracking" },
    { value: "8+", label: "Client websites with custom GA4 integrations" },
    { value: "15%", label: "Average page speed improvement via server tagging" }
  ];

  const faqs = [
    {
      q: "What does Analytics & Tracking involve?",
      a: "We set up Google Analytics 4 (GA4), custom event triggers via Google Tag Manager (GTM), server-side tagging, and multi-channel attribution models to measure exactly where your leads and revenue come from."
    },
    {
      q: "What is GA4 transition?",
      a: "Google Analytics 4 is Google's modern analytics system replacing Universal Analytics, relying on an event-based tracking structure rather than pageviews, providing robust cross-device user mapping."
    },
    {
      q: "What is Server-Side Tagging?",
      a: "Instead of loading pixel scripts directly in user browsers, server-side tagging routes data through a secure cloud server first. This bypasses ad-blockers, increases site speed, and secures user data privacy."
    },
    {
      q: "Can you track call leads?",
      a: "Yes, we integrate third-party call-tracking tools (like Ringba or CallRail) to measure which search terms or ad sets triggered direct phone calls."
    },
    {
      q: "What is Attribution Modeling?",
      a: "Attribution modeling allocates credit for conversions across different marketing touchpoints (like first click, last click, or linear), showing you which channels nurture vs close sales."
    },
    {
      q: "Do you build custom reporting dashboards?",
      a: "Yes, we build interactive Looker Studio (formerly Google Data Studio) dashboards, combining your ad platforms, search console, and analytics into one clean, real-time interface."
    },
    {
      q: "What is the monthly pricing?",
      a: "Analytics setup and tracking retainers range from ₹8,000 to ₹50,000/month depending on site complexity, e-commerce scale, and server-side tracking configurations."
    },
    {
      q: "How long does setup take?",
      a: "Basic GA4 and tag setup takes 3 to 7 days, while custom server-side tagging and multi-platform dashboard builds typically take 10 to 14 days."
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
              GA4 · GTM · SERVER-SIDE TAGGING · LOOKER STUDIO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Data Infrastructure Mapping Sales ROI
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Track everything. We set up Google Analytics 4 and server tagging to pinpoint exactly which keyword or ad generates revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="analytics-hero-audit-btn" href="/free-seo-audit" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Free Analytics Audit →
              </Button>
              <Button id="analytics-hero-talk-btn" href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Talk to Analytics Architect
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AEO Summary Box */}
      <section className="relative z-20 max-w-container-max mx-auto px-gutter mt-[-30px] lg:mt-[-40px]">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg max-w-4xl mx-auto text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-royal-blue/5 rounded-full blur-2xl"></div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-accent animate-pulse" />
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                ANALYTICS & MEASUREMENT SUITE
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              What is Analytics, Tracking & Attribution?
            </h2>
            
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
              <strong>Definition:</strong> Analytics and attribution refer to the configuration of software tools to capture user interaction logs, verify conversion events, and allocate credit for conversions across marketing campaigns. Under modern privacy standards, we transition tracking from basic browser pixels to first-party server-side tagging.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-2">
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">1. GTM Schema Customization</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Avoid basic configurations. We build custom triggers for forms, copy clicks, and media plays to map out precise conversion schemas.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">2. Cloud Server Routing</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We configure tagging servers in Google Cloud, moving tracking out of browser block reach and increasing page loading performance.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">3. Unified Looker Studio</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Combine search data, social expense sheets, and custom analytics conversion calculations into one clean, interactive panel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Analytics & Tracking Deliverables
            </h2>
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
      </motion.section>

      {/* Interactive Tabs Section */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              TRACKING SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Data Measurement Systems
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['ga4', 'server', 'dash'] as const).map((tab) => (
              <button
                key={tab}
                id={`analytics-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'ga4' && <BarChart3 className="w-4 h-4" />}
                  {tab === 'server' && <Server className="w-4 h-4" />}
                  {tab === 'dash' && <LineChart className="w-4 h-4" />}
                  {tab === 'ga4' ? 'GA4 & GTM' : tab === 'server' ? 'Server Tagging' : 'Looker Studio'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorAnalytics"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-blue"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
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
      </motion.section>

      {/* Timeline Section */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              TIMELINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              6-Step Analytics Setup
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {timelineSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 rounded-xl p-6 relative hover:shadow-md transition-shadow">
                <span className="absolute right-6 top-6 text-3xl font-extrabold text-royal-blue/15 select-none">
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
      </motion.section>

      {/* Stats Strip */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-35"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {stats.map((stat, i) => {
              const match = stat.value.match(/^([\d.]+)(.*)$/);
              const numVal = match ? parseFloat(match[1]) : 0;
              const suffix = match ? match[2] : '';
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-4xl sm:text-5xl font-extrabold text-royal-blue bg-clip-text text-transparent bg-gradient-to-r from-royal-blue to-teal-accent">
                    <AnimatedCounter value={numVal} suffix={suffix} />
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-400 max-w-xs uppercase tracking-wider leading-relaxed">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <motion.section {...getSectionAnimation()} className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-3 max-w-lg text-left">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                PRICING RETAINERS
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Establish accurate measurement telemetry.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Setup and analysis retainers range from ₹8,000–₹50,000/month. Let's design a tracking scope for your portals.
              </p>
            </div>
            <Button id="analytics-pricing-btn" href="/free-seo-audit" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Request Tracking Audit →
            </Button>
          </div>
        </div>
      </motion.section>

      {/* FAQs Accordion */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-slate-50">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  id={`analytics-faq-btn-${idx}`}
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
      </motion.section>

      {/* City Strip */}
      <motion.section {...getSectionAnimation()} className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-container-max mx-auto px-gutter">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Tracking services available in:
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
      </motion.section>
    </div>
  );
}
