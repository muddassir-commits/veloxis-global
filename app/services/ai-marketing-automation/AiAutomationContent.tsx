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
  Cpu, 
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
  Zap,
  Bot
} from 'lucide-react';

export default function AiAutomationContent() {
  const { getSectionAnimation } = useInViewAnimation();
  const [activeTab, setActiveTab] = useState<'n8n' | 'routing' | 'bots'>('n8n');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Workflow Mapping & Audit",
    "n8n Self-Hosted Setup",
    "Third-Party API Integrations",
    "WhatsApp API Gateway Sync",
    "LLM Integration (GPT/Claude)",
    "Airtable Database Structuring",
    "Telegram / Slack Alert Loops",
    "Lead Enrichment Routing",
    "Dynamic Email Draft Loops",
    "Pre-launch Sandbox Audits"
  ];

  const tabContent = {
    n8n: {
      title: "n8n & Make Workflow Integrations",
      description: "Eliminate repetitive manual data entry. We build node-based visual workflows that connect your website, CRM, databases, and emails, ensuring data flows instantly and accurately across your digital tools without transaction fees.",
      features: [
        "Self-hosted n8n setups to avoid per-run costs",
        "Multi-app data synchronization passes",
        "Complex logical branch mapping",
        "System health monitoring loops"
      ],
      icon: <Cpu className="w-5 h-5 text-white" />,
      tag: "Workflow Automation"
    },
    routing: {
      title: "Smart Lead Capture & CRM Routing",
      description: "Respond to inquiries in seconds. We construct webhooks that grab leads from Facebook Ads, web forms, and WhatsApp, enrich them with social data, and route them to your sales agents' CRM files with instant phone alerts.",
      features: [
        "Immediate auto-responder loops via WhatsApp/Email",
        "Social profile enrichment lookup steps",
        "Round-robin lead allocation strategies",
        "Slack/Telegram sales notification channels"
      ],
      icon: <Zap className="w-5 h-5 text-white" />,
      tag: "Instant Response"
    },
    bots: {
      title: "AI Agents & WhatsApp Chatbots",
      description: "Answer customer inquiries 24/7. We design smart AI conversational assistants connected to your business documentation, letting them answer questions, qualify intent, and secure calendar bookings.",
      features: [
        "Official WhatsApp Business API setup",
        "Knowledge base indexing (RAG framework)",
        "Calendar booking api integrations (Calendly/tidycal)",
        "Seamless human-agent handoff triggers"
      ],
      icon: <Bot className="w-5 h-5 text-white" />,
      tag: "AI Conversation"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Process Discovery",
      desc: "Audit your current manual tasks, identifying operational bottlenecks, double entries, and quick-win integration goals.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "System Architecture",
      desc: "Plan your data tables, map integrations pathways, and secure API permissions across all systems.",
      icon: <Code className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Workflow Construction",
      desc: "Assemble n8n workflows, configure data formatting code nodes, and link primary applications.",
      icon: <Settings className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "AI Context Tuning",
      desc: "Program system instructions, upload company documentation, and index custom databases for chatbots.",
      icon: <Bot className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Sandbox Validation",
      desc: "Run extensive tests inside isolated sandboxes to verify data routing accuracy, exception handlers, and speed.",
      icon: <Zap className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Launch & Training",
      desc: "Deploy workflows live, establish telemetry dashboards, and hand over clean SOP guides and videos to your staff.",
      icon: <TrendingUp className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "18+", label: "n8n automated workflows deployed" },
    { value: "35hr", label: "Average weekly manual work saved per team" },
    { value: "2min", label: "Average lead response time achieved" }
  ];

  const faqs = [
    {
      q: "What is marketing automation?",
      a: "Marketing automation refers to software and workflows designed to execute marketing tasks on autopilot—such as routing leads instantly, syncing data between apps, sending alerts, and running AI generation loops."
    },
    {
      q: "What tools do you use for automation?",
      a: "We primarily build workflows using n8n and Make (Integromat), integrated with APIs, databases (Airtable, PostgreSQL), CRMs, and messaging apps like WhatsApp, Telegram, and Slack."
    },
    {
      q: "How can AI be integrated into marketing?",
      a: "We connect LLMs (GPT-4, Claude) to write email replies, analyze lead profiles for sales teams, generate social media outlines, or summarize client reports automatically."
    },
    {
      q: "Can you build custom WhatsApp chatbots?",
      a: "Yes, we set up official WhatsApp Business API connections and build interactive AI assistants that answer inquiries, schedule bookings, and route hot leads to sales reps."
    },
    {
      q: "What is n8n?",
      a: "n8n is a powerful node-based workflow automation tool. It allows secure, self-hosted or cloud connections between apps, enabling complex branching logic without high per-transaction costs."
    },
    {
      q: "Will our staff need training to manage this?",
      a: "No. We build these systems to run fully in the background. We also provide step-by-step SOPs and training sessions if your team wants to monitor or adapt the setups."
    },
    {
      q: "How much time can this save?",
      a: "Most clients save between 15 to 40+ hours per week of manual data entry, lead copying, profile checking, and messaging work."
    },
    {
      q: "What is the monthly pricing?",
      a: "AI & Marketing Automation setup retainers range from ₹15,000 to ₹1,00,000/month depending on workflow complexity, app API integrations, and database custom builds."
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
              N8N WORKFLOWS · AI INTEGRATIONS · CHATBOTS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              AI & Marketing Automation Deployments
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Eliminate busywork. We design custom n8n systems and AI pipelines that save hours and route leads instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="ai-hero-audit-btn" href="/free-seo-audit" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Free Automation Audit →
              </Button>
              <Button id="ai-hero-talk-btn" href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Talk to Automation Engineer
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
                SYSTEMS & OPERATIONS SUITE
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              What is AI & Marketing Automation?
            </h2>
            
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
              <strong>Definition:</strong> AI & Marketing Automation is the deployment of software systems and large language models (LLMs) to automatically perform repetitive marketing tasks. We configure custom API pipelines, trigger alerts, and design contextual assistants to accelerate response times and cut administrative labor.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-2">
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">1. Zero-Fee Infrastructure</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We configure self-hosted n8n instances on cloud servers, providing unlimited workflow operations without Zaper's steep tier scaling bills.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">2. Custom AI Agent Context</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We index custom company documents using embeddings, enabling chatbots to answer leads with accurate, company-approved context.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">3. Automated Data Cleansing</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Format phone numbers, parse addresses, categorize fields, and alert managers in real-time, avoiding human data transfer bugs.
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
              Marketing Automation Deliverables
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
              AUTOMATION FIELDS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Automation Specialties
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['n8n', 'routing', 'bots'] as const).map((tab) => (
              <button
                key={tab}
                id={`ai-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'n8n' && <Cpu className="w-4 h-4" />}
                  {tab === 'routing' && <Zap className="w-4 h-4" />}
                  {tab === 'bots' && <Bot className="w-4 h-4" />}
                  {tab === 'n8n' ? 'n8n Workflows' : tab === 'routing' ? 'Smart Routing' : 'AI Bots & Assistants'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorAI"
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
              6-Step Deployment Process
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
                PRICING Retainers
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Save manual hours with automated systems.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Setup and maintenance retainers range from ₹15,000–₹1,00,000/month. Let's design a custom setup plan.
              </p>
            </div>
            <Button id="ai-pricing-btn" href="/free-seo-audit" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Request Automation Scoping →
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
                  id={`ai-faq-btn-${idx}`}
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
            Automation services available in:
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
