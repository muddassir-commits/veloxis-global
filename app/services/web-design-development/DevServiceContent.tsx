'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import { 
  Check, 
  Code, 
  Smartphone, 
  Zap, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Search,
  Layout,
  Globe,
  Settings,
  Shield,
  BarChart3
} from 'lucide-react';

export default function DevServiceContent() {
  const [activeTab, setActiveTab] = useState<'nextjs' | 'mobile' | 'cro'>('nextjs');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Next.js SPA Development",
    "Mobile-First Responsive Design",
    "Core Web Vitals Pass (90+)",
    "Figma UI/UX Mockups",
    "CMS Admin Integrations",
    "Lead Capture Funnels",
    "SEO-Friendly Code Base",
    "HTTPS Security Sync",
    "Dynamic Sitemap Setup",
    "Analytics & Tracking Scripts"
  ];

  const tabContent = {
    nextjs: {
      title: "Next.js & React Applications",
      description: "Scale page speed and SEO with modern JavaScript frameworks. Next.js delivers static site generation (SSG) and server-side rendering (SSR) directly out of the box, ensuring search engine bots index 100% of your site content instantly.",
      features: [
        "Server-Side Rendering (SSR) & Static Generation (SSG)",
        "Zero layout shifts and fast page transitions",
        "React-powered modular, component-driven design",
        "Simplified API route support directly in your site"
      ],
      icon: <Code className="w-5 h-5 text-white" />,
      tag: "Modern Frontend Stack"
    },
    mobile: {
      title: "Mobile-First Responsiveness",
      description: "Own the mobile search market. Over 70% of Indian internet traffic searches via mobile. We design websites specifically targeting mobile screen widths, optimizing button padding, tap sizes, and light asset sizes.",
      features: [
        "Fluid grid layouts engineered for all device shapes",
        "Optimized image sizes preventing mobile speed lag",
        "Interactive, thumb-friendly navigation structures",
        "Cross-browser testing on Chrome, Safari, and Firefox"
      ],
      icon: <Smartphone className="w-5 h-5 text-white" />,
      tag: "Mobile SEO Compliance"
    },
    cro: {
      title: "Conversion Optimization (CRO)",
      description: "Turn clicks into active sales. We structure layout hierarchies matching screen scanning behaviors, optimize form counts to reduce friction, build visible click-to-action hooks, and implement fast funnel clicks.",
      features: [
        "User journey mapping and visual hierarchy audits",
        "Sticky calls-to-action for direct mobile clicks",
        "Single-tap form inputs and fast webhook POST routes",
        "Trust signifiers and client rating banner grids"
      ],
      icon: <Zap className="w-5 h-5 text-white" />,
      tag: "Sales Pipeline Optimization"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Crawl & Funnel Audit",
      desc: "Complete audit mapping current site page speeds, Core Web Vitals health score, and lead drop points.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Figma UI/UX Mockups",
      desc: "Drafting high-fidelity mobile-first visual layouts and client flows for approval before coding.",
      icon: <Layout className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Next.js Frontend Build",
      desc: "Coding responsive interfaces using Next.js and React components for speed and layout stability.",
      icon: <Globe className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "CMS & Forms Integration",
      desc: "Binding lead capture fields to serverless POST endpoints linked directly to N8n CRM webhooks.",
      icon: <Settings className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Core Web Vitals Pass",
      desc: "Compressing images, removing render-blocking JavaScript files, and securing Google speed score 90+.",
      icon: <Shield className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Launch & Analytics Sync",
      desc: "Deploying code base to server hosting, linking domain name, and syncing Google Analytics 4 tags.",
      icon: <BarChart3 className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "98/100", label: "Average mobile page speed score" },
    { value: "45%", label: "Average increase in site conversions (CRO)" },
    { value: "100%", label: "Next.js serverless architecture deployment" }
  ];

  const faqs = [
    {
      q: "What is your main technology stack?",
      a: "We primarily build in Next.js, React, Tailwind CSS, and TypeScript for high-performance corporate sites, and WordPress or Webflow for content-focused projects."
    },
    {
      q: "How does a fast page speed affect SEO?",
      a: "Google uses Page Speed and Core Web Vitals as ranking factors. Fast loading sites rank higher and convert better because users exit slow sites immediately (high bounce rate)."
    },
    {
      q: "Is your code structure SEO-friendly?",
      a: "Yes. We write clean semantic HTML5 code, construct structured metadata headers dynamically, and pre-render text content for easy search crawler indexing."
    },
    {
      q: "What is the difference between Webflow/WordPress and Next.js?",
      a: "Webflow and WordPress are excellent drag-and-drop CMS engines. Next.js is a React developer framework providing static rendering speed, security, and infinite customization."
    },
    {
      q: "Will my website display correctly on mobile screens?",
      a: "Yes. All design layouts are mobile-first, ensuring smooth, responsive displays on all Android, Apple iOS, tablets, and desktop screen sizes."
    },
    {
      q: "Do you integrate custom CRM trackers?",
      a: "Yes. We write serverless routes to forward website lead form payloads to N8n webhooks, connecting to Salesforce, Google Sheets, or custom email hosts."
    },
    {
      q: "What security measures do you implement?",
      a: "We deploy SSL certificate redirects, prevent SQL injection via input validation, block spammers using honeypot parameters, and host assets securely on Vercel CDN."
    },
    {
      q: "How long does a web design build take?",
      a: "A standard corporate page takes 4 to 6 weeks. Complex custom applications, client portals, and e-commerce platforms take 8 to 12 weeks."
    },
    {
      q: "Do you help with domain names and server hosting?",
      a: "Yes. We configure your DNS records, map domain pointers to Vercel/AWS servers, and set up dynamic staging links for client reviews."
    },
    {
      q: "How do you track user events?",
      a: "We implement Google Tag Manager, tracking scroll depths, page interactions, form submissions, and direct phone link clicks."
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
              NEXT.JS · MOBILE-FIRST · CORE WEB VITALS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Web Design & Development That Converts Traffic Into Customers
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Partner with a leading website design company Delhi Noida 2026. We build premium, high-performance Next.js React websites optimized for lightning speed, SEO crawl paths, and client conversion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="dev-hero-quote-btn" href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Custom Quote →
              </Button>
              <Button id="dev-hero-audit-btn" href="/free-seo-audit" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
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
              Modern Full-Stack Development
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              No slow templates. We build custom-coded, optimized corporate websites designed to scale.
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
              DEVELOPMENT SPECIALTIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineered Website Frameworks
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We leverage modern React architectures to ensure extreme loading speeds and robust layouts.
            </p>
          </div>

          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['nextjs', 'mobile', 'cro'] as const).map((tab) => (
              <button
                key={tab}
                id={`dev-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'nextjs' && <Code className="w-4 h-4" />}
                  {tab === 'mobile' && <Smartphone className="w-4 h-4" />}
                  {tab === 'cro' && <Zap className="w-4 h-4" />}
                  {tab === 'nextjs' ? 'Next.js Apps' : tab === 'mobile' ? 'Mobile-First' : 'CRO Focus'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorDev"
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
              Our 6-Step Web Development Lifecycle
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We apply structured development stages ensuring pixel-perfect responsive templates.
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
                PRICING & ARCHITECTURE RETAINER
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Websites engineered to load instantly, rank cleanly, and capture direct conversions.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Pricing is tailored to your goals and market. Contact us for a free quote — we'll recommend exactly what you need.
              </p>
            </div>
            <Button id="dev-pricing-quote-btn" href="/contact" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
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
              Clear answers regarding frontend platforms, Speed scores, and CRM api integrations.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  id={`dev-faq-btn-${idx}`}
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
            Website design and development services available in:
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
