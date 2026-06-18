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
  ShoppingBag, 
  Settings, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Search,
  Code,
  Map,
  Link2,
  TrendingUp,
  Award,
  Database,
  LineChart
} from 'lucide-react';

export default function EcommerceServicesContent() {
  const { getSectionAnimation } = useInViewAnimation();
  const [activeTab, setActiveTab] = useState<'shop' | 'feed' | 'ads'>('shop');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Shopify Setup & Theme UX",
    "Catalog Extraction Sync",
    "Product Feed Cleanups",
    "Google Merchant Center",
    "Meta Commerce Manager",
    "PMax Campaign setups",
    "Shopping Ads Optimization",
    "Purchase Pixel Triggers",
    "Recover Cart automations",
    "Attribution reporting setup"
  ];

  const tabContent = {
    shop: {
      title: "Shopify Store Build & Customization",
      description: "Build a high-converting digital storefront. We customize premium themes, optimize product pages for mobile conversions, map navigation hierarchies, and integrate secure payment gateways to provide a friction-free checkout journey.",
      features: [
        "Mobile-first checkout optimization pass",
        "Trust badges & social proof integrations",
        "Product collection page configurations",
        "Fast server-side speed optimization pass"
      ],
      icon: <ShoppingBag className="w-5 h-5 text-white" />,
      tag: "D2C Storefronts"
    },
    feed: {
      title: "Product Feed Tuning & Merchant Center",
      description: "Get approved for Google Shopping. We structure product titles to contain keywords searchers use, map Google Product Categories, remove listing errors, and setup automated syncs to prevent catalog suspensions.",
      features: [
        "Title & description keyword enrichment",
        "XML feed dynamic setups & caching",
        "Merchant Center policy audit & cleanup",
        "Custom label grouping for price ranges"
      ],
      icon: <Database className="w-5 h-5 text-white" />,
      tag: "Product Feeds"
    },
    ads: {
      title: "Google Shopping & Meta Catalog Ads",
      description: "Scale sales channels. We manage Performance Max (PMax) campaigns targeting search/shopping channels, configure dynamic remarketing ads showing users what they viewed, and build catalogs for social shopping.",
      features: [
        "PMax asset group designs & copy",
        "Dynamic Product Ads (DPA) configurations",
        "Shopping bids & ROAS target tuning",
        "Exclude out-of-stock items automations"
      ],
      icon: <LineChart className="w-5 h-5 text-white" />,
      tag: "Acquisition & ROAS"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Catalog Audit",
      desc: "Review current Shopify catalog data, checking for broken images, missing variants, policy conflicts, and pricing mismatches.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Feed Structuring",
      desc: "Map attributes (color, size, gender) into Merchant Center schemas, generating automated XML feed links.",
      icon: <Database className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Pixel Integration",
      desc: "Implement custom purchase, add-to-cart, and view-content pixel trackers using Google Tag Manager containers.",
      icon: <Code className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Campaign Build",
      desc: "Structure Performance Max asset groups and launch dynamic remarketing pools on Meta Ads Manager.",
      icon: <ShoppingBag className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "CRO Modifications",
      desc: "Modify checkout details, product templates, and trust messaging to boost average order rates weekly.",
      icon: <TrendingUp className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Scale Retainers",
      desc: "Increase daily ad budgets on high-ROAS categories and structure seasonal discount campaigns.",
      icon: <Award className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "5x+", label: "Average Return on Ad Spend (ROAS)" },
    { value: "85%", label: "Decrease in Merchant Center suspensions" },
    { value: "40%", label: "Average uplift in Average Order Value" }
  ];

  const faqs = [
    {
      q: "What are E-commerce & Catalog Services?",
      a: "We build Shopify or WooCommerce stores, optimize product feeds, and run Google Shopping, Performance Max, and Meta catalog campaigns to scale online retail sales."
    },
    {
      q: "What platforms do you support?",
      a: "We specialize in Shopify and WooCommerce for store development, alongside Google Merchant Center and Meta Commerce Manager for catalog and ad management."
    },
    {
      q: "What is Product Feed Optimization?",
      a: "It is the process of structuring product titles, descriptions, categories, image links, and custom tags in your product feed so Google Shopping algorithms rank your products for high-intent queries."
    },
    {
      q: "Do you manage Meta Catalog Ads?",
      a: "Yes, we design dynamic product ads (DPA) on Meta, showing users the exact products they viewed or added to cart on your site, driving high retargeting conversions."
    },
    {
      q: "What is Google Performance Max (PMax)?",
      a: "Google PMax is an AI-driven campaign type that displays your products across Google Search, Shopping, YouTube, Display, and Maps based on your merchant center product feed."
    },
    {
      q: "How do you improve store conversion rates (CRO)?",
      a: "We audit checkout flows, optimize product description layouts, setup speed acceleration passes, and integrate trust badges to reduce cart abandonment."
    },
    {
      q: "What is the monthly pricing?",
      a: "E-commerce retainers range from ₹30,000 to ₹2,00,000/month depending on store sizing, number of SKUs, and cross-channel ad spend volumes."
    },
    {
      q: "How fast can we launch a store?",
      a: "Custom Shopify setups typically take 14 to 30 days, while catalog integration and campaign setups take 7 to 10 days."
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
              SHOPIFY · MERCHANT CENTER · PMAX · CATALOG ADS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              E-Commerce Sizing Scaling Store Revenue
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Scale your store. We customize Shopify sites, optimize product data feeds, and deploy ROAS-driven Google Shopping ads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="ecom-hero-audit-btn" href="/free-seo-audit" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Free E-Com Audit →
              </Button>
              <Button id="ecom-hero-talk-btn" href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Talk to E-Com Expert
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
                RETAIL ENGINE PERFORMANCE
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              What are E-commerce & Catalog Services?
            </h2>
            
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
              <strong>Definition:</strong> E-commerce and catalog services are specialized operations targeting retail stores, encompassing theme setup, merchant center feed structures, and dynamic product ad configurations. We align product data sheets with search engine expectations to drive direct checkouts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-2">
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">1. Shopify UX Tuning</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We modify collection pages, implement instant payment anchors, and resolve mobile checkout errors to optimize user conversion loops.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">2. Feed Optimization</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We inject transactional keywords directly into product feeds, structure variations, and maintain error-free Merchant Center accounts.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">3. Dynamic Catalog Retargeting</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We set up catalog structures that automatically retarget users with exact product cards, boosting secondary purchase loops.
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
              E-commerce Optimization Deliverables
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
              SYSTEM SECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              E-Commerce Strategies
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['shop', 'feed', 'ads'] as const).map((tab) => (
              <button
                key={tab}
                id={`ecommerce-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'shop' && <ShoppingBag className="w-4 h-4" />}
                  {tab === 'feed' && <Database className="w-4 h-4" />}
                  {tab === 'ads' && <LineChart className="w-4 h-4" />}
                  {tab === 'shop' ? 'Shopify Stores' : tab === 'feed' ? 'Product Feeds' : 'PMax & DPAs'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorEcommerce"
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
              E-commerce Setup timeline
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
                Scale store transaction channels.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                E-commerce retainers range from ₹30,000–₹2,00,000/month depending on SKU counts. Reach out to scope catalog integrations.
              </p>
            </div>
            <Button id="ecommerce-pricing-btn" href="/free-seo-audit" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Request E-commerce Proposal →
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
                  id={`ecommerce-faq-btn-${idx}`}
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
            E-com services available in:
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
