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
  Globe, 
  ShoppingBag, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Search,
  Code,
  Map,
  Link2,
  TrendingUp,
  Target,
  Users,
  Award
} from 'lucide-react';

export default function PaidAdsServiceContent() {
  const { getSectionAnimation } = useInViewAnimation();
  const [activeTab, setActiveTab] = useState<'meta' | 'google' | 'linkedin'>('meta');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Ad Account Setup & Audit",
    "Custom Audience Building",
    "Lookalike Modeling Pass",
    "Creative Direction & Copy",
    "Landing Page Review",
    "Meta CAPI & Pixel Tuning",
    "A/B Dynamic Ad Testing",
    "Bid Strategy Optimization",
    "Retargeting funnels mapping",
    "Daily ROI Tracking"
  ];

  const tabContent = {
    meta: {
      title: "Meta Ads (Facebook & Instagram)",
      description: "Scale your customer acquisition. We construct creative-first campaigns using Meta's Advantage+ suites, customize custom lookalike segments, and build engaging reels/images that capture active attention in competitive feeds.",
      features: [
        "Dynamic Creative Testing (DCT) for ad angles",
        "Advantage+ Shopping Campaign setup & optimization",
        "Custom conversions tracking via Meta Conversion API",
        "Retargeting sequences targeting cart dropouts"
      ],
      icon: <Target className="w-5 h-5 text-white" />,
      tag: "Social Retargeting & Brand"
    },
    google: {
      title: "Google Search, Display & Shopping",
      description: "Capture high-intent searches. We manage Search Campaigns for ready-to-buy terms, configure PMax setups for retail catalog display, and deploy search ads matching precise intent keywords for Indian industries.",
      features: [
        "In-depth negative keyword list maintenance",
        "Performance Max (PMax) feed configuration",
        "Google Tag Manager custom tracking variables",
        "Competitive bidding adjustments for peak times"
      ],
      icon: <Search className="w-5 h-5 text-white" />,
      tag: "High-Intent Capture"
    },
    linkedin: {
      title: "LinkedIn Ads for B2B Leads",
      description: "Target enterprise decision-makers. We construct LinkedIn ads based on exact job titles, company sizes, and industries, driving high-value contract queries for technology and manufacturing companies.",
      features: [
        "Company name & member job title targeting",
        "Lead Gen Form setup (2x submission rates)",
        "Account-Based Marketing (ABM) matching lists",
        "Sponsored Content & InMail strategy"
      ],
      icon: <Users className="w-5 h-5 text-white" />,
      tag: "Enterprise B2B Leads"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Discovery & Ad Audit",
      desc: "Comprehensive review of current accounts, identifying historical win angles, budget leakage paths, and targeting errors.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Tracking Installation",
      desc: "Verify CAPI integration, server-side parameters, and Google Analytics 4 event loops for 100% conversion verification.",
      icon: <Code className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Creative Strategy",
      desc: "Produce dynamic copy drafts, design image variants, and structure short-form video hooks for active testing.",
      icon: <FileText className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Launch & Testing",
      desc: "Deploy campaigns under strict isolation matrices to find winning creatives and audiences within 7 to 14 days.",
      icon: <Target className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Optimization Pass",
      desc: "Reallocate budget from losing sets, optimize bid caps, refine landing pages, and scale positive ad sets.",
      icon: <TrendingUp className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Scaling & Expansion",
      desc: "Deploy advanced lookalikes, structure multi-channel funnels, and scale weekly budget ranges dynamically.",
      icon: <Award className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "4.2x", label: "Average Return on Ad Spend (ROAS)" },
    { value: "₹650", label: "Average B2B cost-per-lead generated" },
    { value: "35%", label: "Average reduction in cost-per-acquisition" }
  ];

  const faqs = [
    {
      q: "What platforms do you advertise on?",
      a: "We primarily manage campaigns on Meta (Facebook & Instagram), Google (Search, Display, Shopping, YouTube), and LinkedIn, plus platform-specific networks depending on B2B vs B2C targets."
    },
    {
      q: "What ad budget is required?",
      a: "We manage budgets from ₹20,000 to ₹10,00,000+ per month. We recommend starting with a minimum of ₹15,000-₹20,000/month in ad spend to ensure adequate data collection for optimization."
    },
    {
      q: "How do you measure campaign ROI?",
      a: "We track concrete conversion actions (leads, purchases, form submits) using pixels, conversion APIs, and Google Analytics 4, calculating your exact Cost Per Acquisition (CPA) and Return on Ad Spend (ROAS)."
    },
    {
      q: "Do you charge a percentage of ad spend?",
      a: "No, we charge flat monthly retainer fees based on the complexity of your campaigns, rather than taxing your budget growth."
    },
    {
      q: "How long before we see results?",
      a: "Paid ads generate immediate traffic. However, optimizing for peak conversion efficiency and finding your best audience segments typically takes 14 to 30 days of data tuning."
    },
    {
      q: "Who designs the ad creatives?",
      a: "We provide complete creative direction, including ad copy, graphic layouts, and short-form video outlines, ensuring your creatives align with high-converting hooks."
    },
    {
      q: "Can you audit our current accounts?",
      a: "Yes, we offer detailed 48-hour ad account audits to identify budget leakage, targeting issues, and optimization quick wins."
    },
    {
      q: "Do we own the ad accounts?",
      a: "Absolutely. All ad accounts, pixels, and data assets remain 100% under your ownership. We merely request secure manager access."
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
              META ADS · GOOGLE ADS · PERFORMANCE Retainers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Ad Campaigns Designed for Direct Revenue
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Stop wasting budget. We construct Meta, Google, and LinkedIn ad pipelines that drive sales, inquiries, and trackable ROAS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="paid-ads-hero-audit-btn" href="/free-seo-audit" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Free Ad Audit →
              </Button>
              <Button id="paid-ads-hero-contact-btn" href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Talk to Media Buyer
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
                PERFORMANCE MARKETING OVERVIEW
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              What is Paid Advertising & Performance Marketing?
            </h2>
            
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
              <strong>Definition:</strong> Performance marketing refers to online advertising programs where advertisers pay marketing companies or advertising platforms when a specific action is completed—such as a lead, click, or sale. By utilizing advanced AI tracking loops, custom product feeds, and algorithmic bidding, we map ad spend directly to pipeline conversions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-2">
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">1. Creative-First Strategy</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  In modern ad auctions, creatives do the targeting. We engineer visual hooks and copywriting that attract your specific buyer profile.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">2. Server-Side Data Loops</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Avoid signal loss from browser blocks. We set up CAPI and server tags to feed advertising algorithms clean conversion feedback.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">3. Algorithmic Scaling</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We use bid caps, cost-control triggers, and horizontal scaling structures to grow campaigns without ballooning acquisition costs.
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
              High-Converting Ad Deliverables
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              We manage all technical, strategic, and creative operations.
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
      </motion.section>

      {/* Interactive Tabs Section */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              CAMPAIGN PATHS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Strategic Ad Frameworks
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['meta', 'google', 'linkedin'] as const).map((tab) => (
              <button
                key={tab}
                id={`paid-ads-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'meta' && <Target className="w-4 h-4" />}
                  {tab === 'google' && <Search className="w-4 h-4" />}
                  {tab === 'linkedin' && <Users className="w-4 h-4" />}
                  {tab === 'meta' ? 'Meta Ads' : tab === 'google' ? 'Google Ads' : 'LinkedIn B2B'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorPaid"
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
              6-Step Optimization Timeline
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
                PRICING retainers
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Invest in ad management with clear monthly ranges.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Ranges: ₹22,000–₹1,50,000/month depending on channels and complexity. Let's design a custom package for your brand.
              </p>
            </div>
            <Button id="paid-ads-pricing-btn" href="/free-seo-audit" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Request Custom Proposal →
            </Button>
          </div>
        </div>
      </motion.section>

      {/* FAQs */}
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
                  id={`paid-ads-faq-btn-${idx}`}
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
            Ad services available in:
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
