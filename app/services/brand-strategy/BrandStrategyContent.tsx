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
  Palette, 
  Compass, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Search,
  Code,
  Map,
  Link2,
  TrendingUp,
  Award,
  Layers
} from 'lucide-react';

export default function BrandStrategyContent() {
  const { getSectionAnimation } = useInViewAnimation();
  const [activeTab, setActiveTab] = useState<'pos' | 'per' | 'fun'>('pos');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Competitor Audit Pass",
    "Value Proposition Draft",
    "Customer Persona Map",
    "Buying Journey Analysis",
    "Funnel Blueprint Design",
    "Copywriting Angles List",
    "Creative Concept Decks",
    "Brand Voice Definition",
    "Ad Creative Maps",
    "Consultation Briefing"
  ];

  const tabContent = {
    pos: {
      title: "Unique Positioning & Differentiation",
      description: "Stop competing on price alone. We analyze your market competitor array, isolate their messages, and define a unique selling hook that establishes your brand as the obvious premium choice in your category.",
      features: [
        "Competitor analysis & message mapping",
        "Unique Value Proposition (UVP) drafting",
        "Tagline & key brand message guidelines",
        "Market white-space opportunity audits"
      ],
      icon: <Compass className="w-5 h-5 text-white" />,
      tag: "Market Authority"
    },
    per: {
      title: "Detailed Buyer Persona Sizing",
      description: "Understand exactly who buys. We map your target audience profiles down to their specific pain points, objections, and buying channels, providing a clear map of what triggers their purchase decisions.",
      features: [
        "Demographics & psychographics profiles",
        "Customer core pain point identification",
        "Fears, objections & friction factors mapping",
        "Custom messaging hooks per target persona"
      ],
      icon: <Palette className="w-5 h-5 text-white" />,
      tag: "Ideal Customer"
    },
    fun: {
      title: "Full-Funnel Sales Architecture",
      description: "Convert traffic into repeat buyers. We map the complete visual pathways from top-of-funnel ads to landing pages, nurturing sequences, and checkout, creating a high-performance customer conversion path.",
      features: [
        "Lead magnet & opt-in strategy design",
        "Email sequence touchpoint structure mapping",
        "Landing page layout structure blueprinting",
        "Cross-sell & retention campaign mapping"
      ],
      icon: <Layers className="w-5 h-5 text-white" />,
      tag: "Conversion Architecture"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Internal Auditing",
      desc: "Deep-dive interview of company stakeholders to align on historical assets, values, and core growth directions.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Competitive Research",
      desc: "Audit the top 5 direct and indirect competitors, dissecting their ad copies, landing pages, and positioning angles.",
      icon: <Map className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Persona Mapping",
      desc: "Conduct target customer research to outline detailed psychographic buyer personas and their buying triggers.",
      icon: <Palette className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Positioning Blueprint",
      desc: "Craft your core Value Proposition, brand promise statements, and primary copywriting hooks.",
      icon: <Compass className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Funnel Layout",
      desc: "Map out landing page wireframes, email nurturing trees, and remarketing copy segments.",
      icon: <Layers className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Playbook Handover",
      desc: "Package all research, schemas, and assets into a clean Brand Playbook, presenting the final strategy to your leadership.",
      icon: <Award className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "100%", label: "Cohesive brand messaging across all sales teams" },
    { value: "3.5x", label: "Average uplift in landing page conversion rate" },
    { value: "250+", label: "Businesses served with performance frameworks" }
  ];

  const faqs = [
    {
      q: "What is Brand Strategy & Positioning?",
      a: "It is the process of defining your brand's unique market position, messaging pillars, buyer personas, and sales funnels to differentiate your brand from competitors."
    },
    {
      q: "How do you define a Brand Value Proposition?",
      a: "We conduct competitor audits, audit your target customers, and identify market white space to craft a concise statement of what makes your business unique."
    },
    {
      q: "What is a Customer Journey Map?",
      a: "A visual mapping of all interaction touchpoints between a customer and your business—from first hearing of you to purchasing—ensuring your messaging aligns with their intent at each stage."
    },
    {
      q: "Who needs a Brand Strategy?",
      a: "New businesses launching products, companies scaling retargeting budgets, or established brands struggling with price commoditization in crowded markets."
    },
    {
      q: "How does this translate to ad campaigns?",
      a: "Your strategy defines the copy hooks, visuals, and messaging angles. Using this blueprint, we build ad campaigns with unified, high-converting copy."
    },
    {
      q: "What deliverables do we receive?",
      a: "A comprehensive Brand Playbook containing positioning statements, key buyer personas, customer journey maps, copywriting hooks, and visual guidelines."
    },
    {
      q: "What is the project pricing?",
      a: "Brand Strategy projects range from ₹25,000 to ₹1,50,000 depending on depth of research, company size, and funnel structures."
    },
    {
      q: "Do you provide visual logo design?",
      a: "We focus strictly on the messaging, positioning, copywriting, and sales funnel structures. If logo assets or graphic redesign is needed, we coordinate with your design team."
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
              POSITIONING · PERSONAS · CONVERSION FUNNELS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Brand Strategy Built for Sales Performance
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Don't get lost in the noise. We craft unique brand positioning blueprints and high-converting marketing funnels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="brand-hero-audit-btn" href="/free-seo-audit" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Free Brand Audit →
              </Button>
              <Button id="brand-hero-talk-btn" href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Talk to Brand Strategist
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
                STRATEGIC BRAND SUITE
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              What is Brand Strategy & Positioning?
            </h2>
            
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
              <strong>Definition:</strong> Brand strategy is the long-term plan for developing a successful brand in order to achieve specific business goals. We define your company's core messaging pillars, build buyer personas, map buying journeys, and wireframe conversion pathways to maximize advertising ROI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-2">
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">1. Market White-space</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We audit competitors to locate gaps in their messaging and position your product in the white space as the unique solution.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">2. Buyer Intent Personas</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Avoid generic targeting. We define target buyer profiles based on their intent, pain points, and specific channels.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">3. Unified Ad Creative</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We translate strategy into visual scripts and text copy options for your Meta, Google, and LinkedIn campaigns.
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
              Strategic Playbook Deliverables
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
              BLUEPRINT SPECIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Strategy Areas
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['pos', 'per', 'fun'] as const).map((tab) => (
              <button
                key={tab}
                id={`brand-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'pos' && <Compass className="w-4 h-4" />}
                  {tab === 'per' && <Palette className="w-4 h-4" />}
                  {tab === 'fun' && <Layers className="w-4 h-4" />}
                  {tab === 'pos' ? 'Positioning' : tab === 'per' ? 'Buyer Personas' : 'Funnel Design'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorBrand"
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
              6-Step Blueprint Build
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
                PROJECT FEES
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Establish a premium brand strategy blueprint.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Strategy packages range from ₹25,000–₹1,50,000 (project-based). Let's design a research scope tailored to your market.
              </p>
            </div>
            <Button id="brand-pricing-btn" href="/free-seo-audit" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Request Strategy Consultation →
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
                  id={`brand-faq-btn-${idx}`}
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
            Strategy services available in:
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
