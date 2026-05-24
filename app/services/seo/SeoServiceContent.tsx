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
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Search,
  Code,
  Map,
  Link2,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Award
} from 'lucide-react';

export default function SeoServiceContent() {
  const { getSectionAnimation } = useInViewAnimation();
  const [activeTab, setActiveTab] = useState<'local' | 'national' | 'ecommerce'>('local');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Technical SEO Audit",
    "Keyword Research & Mapping",
    "On-Page Optimisation",
    "Local SEO & GBP Setup",
    "Link Building (White-hat)",
    "Content Strategy",
    "E-E-A-T Signal Building",
    "Monthly Rank Reports",
    "Competitor Gap Analysis",
    "Schema Markup"
  ];

  const tabContent = {
    local: {
      title: "Local SEO Pack Dominance",
      description: "Own the local map listings in Delhi NCR, Kanpur, and Lucknow. Over 60% of local searches lead to direct calls and map clicks. We optimize your Google Business Profile (GBP) and local footprint to put your business where the calls happen.",
      features: [
        "Google Business Profile optimization & maintenance",
        "Local citation audits and cleanups in local directories",
        "Hyper-local landing page creation for target sectors",
        "Review generation campaigns to boost rating speed"
      ],
      icon: <MapPin className="w-5 h-5 text-white" />,
      tag: "Hyper-Local Coverage"
    },
    national: {
      title: "National Keyword Escalation",
      description: "Scale organic rankings across India for high-competition commercial and transactional queries. We target buyer-intent keywords that scale your pipeline, construct structured content hubs, and earn high-authority backlinks.",
      features: [
        "In-depth keyword gap analysis against top competitors",
        "Semantic search cluster mapping (E-E-A-T friendly)",
        "High-authority editorial backlink campaigns",
        "Custom conversions tracking via GTM & GA4"
      ],
      icon: <Globe className="w-5 h-5 text-white" />,
      tag: "Pan-India Expansion"
    },
    ecommerce: {
      title: "E-Commerce Revenue SEO",
      description: "Turn organic queries into retail transactions. We optimize site architecture for fast crawl paths, fix category hierarchies, structure Product Schema markup for active pricing/stock listings, and optimize listing page tags.",
      features: [
        "Dynamic Product schema markup & rich snippet alignment",
        "Faceted navigation fix to resolve index bloat",
        "Speed & Core Web Vitals optimization pass",
        "Category & collection page rank acceleration"
      ],
      icon: <ShoppingBag className="w-5 h-5 text-white" />,
      tag: "D2C & Retail Acceleration"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Technical Discovery",
      desc: "Complete crawl audit mapping indexing errors, duplicate path issues, speed parameters, and mobile performance diagnostics.",
      icon: <Code className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Keyword Blueprinting",
      desc: "In-depth intent research mapping high-conversion buyer keywords and outlining content gaps against top industry ranks.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "On-Page & Schema Integration",
      desc: "Meta tags restructuring, internal linking alignment, and schema markup deployments across target pages.",
      icon: <FileText className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Local GMB Pack Activation",
      desc: "Local directory syncing, maps coordinates validation, and coordinate-specific GBP rank campaigns.",
      icon: <Map className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Authority Outreach",
      desc: "Safe white-hat digital PR outreach to acquire high-authority, contextual backlinks from real media publications.",
      icon: <Link2 className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Conversion Tuning & Scale",
      desc: "Analyze conversion performance, fine-tune target content copies, and expand new keyword clusters weekly.",
      icon: <TrendingUp className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "180%", label: "Average ranking improvement in 6 months" },
    { value: "240%", label: "Average organic traffic growth" },
    { value: "85%", label: "Clients in Google Local Pack within 90 days" }
  ];

  const faqs = [
    {
      q: "How long does SEO take in India?",
      a: "Typically, noticeable improvements in organic search rankings and traffic occur within 3 to 6 months. High-competition keywords may take longer, while local SEO wins can appear in as little as 30 to 90 days."
    },
    {
      q: "What's local vs national SEO?",
      a: "Local SEO focuses on optimizing your search presence for physical locations or specific service areas (like Delhi or Noida) to win local map packs. National SEO targets broader, non-geographical keywords across the entire country."
    },
    {
      q: "Do you do black-hat SEO?",
      a: "Absolutely not. We strictly adhere to Google's Search Essentials (Webmaster Guidelines) and use 100% white-hat techniques to ensure long-term, sustainable rankings without the risk of penalties."
    },
    {
      q: "How do you measure SEO success?",
      a: "We measure success using hard business metrics: organic traffic growth, keyword rankings in top search positions, and most importantly, qualified leads and conversions tracked via analytics."
    },
    {
      q: "What keywords will you target?",
      a: "We target a blend of high-intent transactional keywords (ready to buy), local geographical queries, and informational long-tail phrases to capture customers at every stage of the funnel."
    },
    {
      q: "Can you recover from a Google penalty?",
      a: "Yes. We conduct technical audits to identify the cause of the drop, clean up spammy backlink profiles, rectify low-quality duplicate content, and submit reconsideration requests to Google."
    },
    {
      q: "How does link building work?",
      a: "We earn high-authority backlinks using white-hat outreach, guest postings on industry-relevant publications, and creating linkable content assets that natural sources want to reference."
    },
    {
      q: "What's in your technical SEO audit?",
      a: "Our technical audit checks Core Web Vitals (speed), indexing errors, crawling efficiency, mobile responsiveness, SSL security, XML sitemaps, robots.txt directives, and structured schema markup."
    },
    {
      q: "Do you work outside Delhi NCR?",
      a: "Yes, we provide digital marketing and SEO services for clients across India, with specialized targeting in Delhi, Noida, Lucknow, and Kanpur."
    },
    {
      q: "How are you different from other agencies?",
      a: "We don't hide behind vanity metrics. We focus strictly on organic conversions and pipeline revenue, providing completely transparent, real-time custom dashboards with weekly updates."
    }
  ];

  return (
    <div className="bg-white font-sans text-left">
      {/* 2. Hero Section */}
      <section className="bg-slate-900 text-white relative py-20 lg:py-28 overflow-hidden">
        {/* Decorative Grid Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-royal-blue/20 blur-[128px]"></div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-[800px] flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-royal-blue/20 border border-royal-blue/30 px-3 py-1 rounded-full text-xs font-bold text-royal-blue uppercase tracking-wider">
              LOCAL SEO · TECHNICAL SEO · LINK BUILDING
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              SEO Services That Get Your Business to Page 1 on Google in 2026
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Rank higher, drive qualified traffic, and grow revenue — with data-driven SEO built for Delhi, Noida, Lucknow & Kanpur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button href="/free-seo-audit" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Free SEO Audit →
              </Button>
              <Button href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Talk to SEO Director
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What's Included Section */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              WHAT WE DELIVER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Enterprise-Grade SEO Deliverables
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              No generic tasks. We deliver complete manual audit optimization assets designed to build sustainable growth.
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

      {/* 4. Interactive Tabs Section */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              OUR TARGETED SPECIALTIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tailored SEO Frameworks
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We apply customized SEO processes depending on where your target buyers search.
            </p>
          </div>

          {/* Tab Selector Row */}
          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['local', 'national', 'ecommerce'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'local' && <MapPin className="w-4 h-4" />}
                  {tab === 'national' && <Globe className="w-4 h-4" />}
                  {tab === 'ecommerce' && <ShoppingBag className="w-4 h-4" />}
                  {tab === 'local' ? 'Local SEO' : tab === 'national' ? 'National SEO' : 'E-Commerce SEO'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-royal-blue"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Window */}
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

      {/* 5. 6-Step SEO Process Timeline */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              OUR PATHWAY TO #1
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              6-Step Rank Acceleration Blueprint
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We execute a strict, structured SEO workflow designed to build long-term dominance.
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
      </motion.section>

      {/* 6. Results Proof Strip (animated stats on view) */}
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
                  viewport={{ once: true, margin: '-80px' }}
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

      {/* 7. Custom Pricing CTA */}
      <motion.section {...getSectionAnimation()} className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-3 max-w-lg text-left">
              <span className="text-xs font-bold text-teal-600 uppercase tracking-wider">
                PRICING & TIMELINE
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Get a custom roadmap tailored to your specific market.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Pricing is tailored to your goals and market. Get a free audit — we'll recommend exactly what you need.
              </p>
            </div>
            <Button href="/free-seo-audit" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Get Custom Quote →
            </Button>
          </div>
        </div>
      </motion.section>

      {/* 8. FAQs Section (Accordion) */}
      <motion.section {...getSectionAnimation()} className="py-20 bg-slate-50">
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

      {/* 9. City Strip */}
      <motion.section {...getSectionAnimation()} className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-container-max mx-auto px-gutter">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            SEO services available in:
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
