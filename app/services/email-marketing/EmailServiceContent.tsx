'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import { 
  Check, 
  MessageSquare, 
  Mail, 
  Cpu, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Search,
  MessageCircle,
  FileText,
  Target,
  BarChart3,
  Award
} from 'lucide-react';

export default function EmailServiceContent() {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'email' | 'n8n'>('whatsapp');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "WhatsApp Business API Setup",
    "Cold Email Campaign Setup",
    "N8n Automation Integration",
    "Template Copywriting Pass",
    "List Segmentation Models",
    "DKIM & SPF Authentication",
    "Lead Capture Endpoints",
    "Follow-up Sequence Automation",
    "Deliverability Health Audits",
    "ROI Performance Reports"
  ];

  const tabContent = {
    whatsapp: {
      title: "WhatsApp Business API Marketing",
      description: "Tap into India's most responsive communication format. With open rates exceeding 95%, we integrate the official WhatsApp Business API to deliver template updates, purchase confirmations, and automated response chat paths.",
      features: [
        "Official WhatsApp green tick validation guidance",
        "Meta Business Manager API verification sync",
        "Interactive chatbot flow and keyword response triggers",
        "High-converting click-to-chat ad setup"
      ],
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      tag: "WhatsApp Lead Capture"
    },
    email: {
      title: "Cold Email & Newsletter Retainers",
      description: "Construct scalable B2B email pipelines that reach the inbox. We run DNS deliverability syncs (SPF, DKIM, DMARC), script personalized value-focused cold copy, and organize list cleanup passes to prevent spam placement.",
      features: [
        "Email server warming & domain reputation syncing",
        "Custom segment sequencing and automated follow-ups",
        "A/B split testing for subject lines & pitch styles",
        "Newsletter production and distribution scheduling"
      ],
      icon: <Mail className="w-5 h-5 text-white" />,
      tag: "Cold & Nurture Campaigns"
    },
    n8n: {
      title: "N8n Workflow Automation",
      description: "Automate manual data paths completely. We sync your Next.js forms, Google Sheets, email triggers, and CRM data using customized N8n workflow pipelines, ensuring your sales leads receive instant confirmations.",
      features: [
        "Next.js API webhook POST mappings",
        "Google Sheets database syncing scripts",
        "Instant SMTP auto-responder configurations",
        "Multi-step CRM automated routing setups"
      ],
      icon: <Cpu className="w-5 h-5 text-white" />,
      tag: "Process Automation"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Audit & Reputation Pass",
      desc: "Checking domain blacklists, audit sender ratings, and map current CRM contact pipelines.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "DNS Setup & Warmer Sync",
      desc: "Configuring SPF, DKIM, and DMARC parameters, and initiating email warming cycles.",
      icon: <Award className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "WhatsApp API Mapping",
      desc: "Linking phone numbers to Meta Business Manager, registering API nodes, and creating messaging templates.",
      icon: <MessageCircle className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "N8n Webhook Mappings",
      desc: "Constructing N8n workflows linking web lead forms to Google Sheets and sending client alerts.",
      icon: <Cpu className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Copywriting & Templates",
      desc: "Drafting personalized subject lines, clear calls to action, and WhatsApp message templates.",
      icon: <FileText className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Launch & Analytics Audit",
      desc: "Activating workflows, monitoring delivery metrics daily, and reviewing conversions dashboards.",
      icon: <BarChart3 className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "95%+", label: "Average WhatsApp message open rates" },
    { value: "40%", label: "Average increase in cold email responses" },
    { value: "100%", label: "CRM integrations mapped via N8n workflows" }
  ];

  const faqs = [
    {
      q: "What is the WhatsApp Business API?",
      a: "The WhatsApp Business API is Meta's official framework for medium and large businesses to broadcast messages, integrate chatbots, and send automated transactional updates at scale."
    },
    {
      q: "Do you provide the phone numbers for WhatsApp broadcasts?",
      a: "No. You provide a clean phone number not linked to any consumer WhatsApp app. We help link it to Meta Business Manager and handle the developer setup."
    },
    {
      q: "What is N8n automation?",
      a: "N8n is a powerful fair-code workflow automation tool similar to Zapier. It allows us to integrate website lead capture forms with CRM pipelines and email triggers securely."
    },
    {
      q: "What is SPF, DKIM, and DMARC?",
      a: "These are DNS records that verify your domain identity to email servers (like Gmail or Outlook). Having them set up properly prevents your emails from landing in spam folders."
    },
    {
      q: "How do you build cold email contact lists?",
      a: "We help identify your ideal buyer profiles, clean historical client directories, and set up outbound parameters, ensuring all campaigns target valid B2B contact lists."
    },
    {
      q: "What is your copywriting process for email campaigns?",
      a: "We draft short, punchy, value-focused scripts. We avoid spam-trigger words and construct clear, single-choice calls to action (like booking a call)."
    },
    {
      q: "Do you offer customer chatbot development?",
      a: "Yes. As part of our WhatsApp automation services, we write custom chat trees to answer frequently asked questions, collect customer detail parameters, and alert your sales team."
    },
    {
      q: "How do you track sales conversions?",
      a: "We set up tracking parameters linking custom landing pages to the email/WhatsApp workflows, tracking every signup event via Google Tag Manager."
    },
    {
      q: "Are Meta messaging fees included in your pricing?",
      a: "No. Meta charges separate conversation-based fees for business-initiated and user-initiated WhatsApp chats. These fees are billed directly to your Meta account."
    },
    {
      q: "Do you help with email warming?",
      a: "Yes. For new outreach domains, we configure and run a 14-to-30 day warming sequence to build sender reputation before launching active marketing campaigns."
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
              EMAIL · WHATSAPP · AUTOMATION · N8N
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Email & WhatsApp Marketing Automation That Closes More Deals
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Connect directly with customers where they read. We integrate WhatsApp Business APIs and build automated email flows mapped via custom N8n server workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="email-hero-quote-btn" href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Custom Quote →
              </Button>
              <Button id="email-hero-audit-btn" href="/free-seo-audit" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
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
              High-Deliverability Marketing Systems
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              No manual messaging spam. We build fully automated chat pathways and inbox campaigns.
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
              MESSAGING PATTERNS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Targeted Automation Frameworks
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We apply customized templates depending on where your prospects engage with your content.
            </p>
          </div>

          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['whatsapp', 'email', 'n8n'] as const).map((tab) => (
              <button
                key={tab}
                id={`email-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'whatsapp' && <MessageSquare className="w-4 h-4" />}
                  {tab === 'email' && <Mail className="w-4 h-4" />}
                  {tab === 'n8n' && <Cpu className="w-4 h-4" />}
                  {tab === 'whatsapp' ? 'WhatsApp API' : tab === 'email' ? 'Cold Email' : 'N8n Automation'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorEmail"
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
              Our 6-Step Automation Flowchart
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We sync DNS records and warm domains thoroughly to ensure emails always reach primary inboxes.
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
                PRICING & IMPLEMENTATION RETAINER
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Get high-converting message scripts and dynamic N8n pipelines.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Pricing is tailored to your goals and market. Contact us for a free quote — we'll recommend exactly what you need.
              </p>
            </div>
            <Button id="email-pricing-quote-btn" href="/contact" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
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
              Clear answers regarding DNS setups, sender reputations, WhatsApp API fees, and N8n workflows.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  id={`email-faq-btn-${idx}`}
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
            Email and WhatsApp marketing automation services available in:
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
