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
  Mail, 
  Users, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Search,
  Code,
  Map,
  Link2,
  TrendingUp,
  Award,
  ShieldCheck,
  Zap,
  Target
} from 'lucide-react';

export default function B2bLeadGenContent() {
  const { getSectionAnimation } = useInViewAnimation();
  const [activeTab, setActiveTab] = useState<'email' | 'linkedin' | 'abm'>('email');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Outreach Domain Setup",
    "Domain Warmup Automation",
    "DNS Security Verification",
    "ICP Target Database Sourcing",
    "Multi-Step Sequence Writing",
    "LinkedIn Profile Optimization",
    "CRM & Sales Pipeline Setup",
    "Lead Routing Webhooks",
    "Calendar App Booking Links",
    "Lead Qualification Audits"
  ];

  const tabContent = {
    email: {
      title: "Cold Email Infrastructure & Sequences",
      description: "Scale B2B conversations. We configure dedicated outreach domains, run warm-up tools for high inbox health, scrape verified contact data matching your exact buyer criteria, and write direct-response copy that gets replies.",
      features: [
        "Dedicated domain purchasing & warming",
        "Verified lead database scraping (Apollo/SalesNav)",
        "Drip campaigns with automated dynamic personalization",
        "Spam filter checks & blacklists monitoring"
      ],
      icon: <Mail className="w-5 h-5 text-white" />,
      tag: "Inbox Domination"
    },
    linkedin: {
      title: "LinkedIn Social Selling & Outreach",
      description: "Secure meetings with top executives. We optimize your profile to position you as an industry expert, write custom connection messages, and manage systematic B2B outreach to target profiles.",
      features: [
        "Founder/Executive profile optimization pass",
        "Targeted connection invitation campaigns",
        "Conversational nurture templates (no pitch-slapping)",
        "B2B content publishing plans"
      ],
      icon: <Users className="w-5 h-5 text-white" />,
      tag: "Relationship Building"
    },
    abm: {
      title: "Account-Based Marketing (ABM)",
      description: "Target high-value enterprise accounts. We design custom multi-touch campaigns blending LinkedIn ads, personalized email messages, and custom landing pages specifically built for your key target accounts.",
      features: [
        "Key accounts mapping & organization charting",
        "Cross-channel unified messaging funnels",
        "Custom landing pages for high-value companies",
        "Multi-decision maker outreach tracking"
      ],
      icon: <Target className="w-5 h-5 text-white" />,
      tag: "Enterprise Target Retainers"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "ICP & Offer Tuning",
      desc: "Define your Ideal Customer Profile (ICP), locate their pain points, and restructure your offer to guarantee high B2B reply rates.",
      icon: <Target className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Domain Setup",
      desc: "Register outreach domains, configure SPF, DKIM, and DMARC protocols, and begin warmup tool cycles for 21 days.",
      icon: <ShieldCheck className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Lead Sourcing",
      desc: "Extract targeted B2B contact lists (emails + LinkedIn profiles) and clean the data through verified double-verification tools.",
      icon: <Users className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Sequence Writing",
      desc: "Write multi-step email sequences and LinkedIn follow-ups, designing engaging value-first angles and call-to-actions.",
      icon: <FileText className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Campaign Activation",
      desc: "Launch targeted cold outbound batches under tight weekly limits, monitoring logs for spam rating drops.",
      icon: <Zap className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Calendar Sync & Bookings",
      desc: "Nurture positive replies, book appointments directly into your sales calendars, and sync logs with your CRM.",
      icon: <TrendingUp className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "47", label: "Qualified leads in 27 days (Agency Case)" },
    { value: "72%", label: "Average outbound email open rate" },
    { value: "12x", label: "Average pipeline ROI on outreach spend" }
  ];

  const faqs = [
    {
      q: "What does B2B Lead Generation involve?",
      a: "Our service blends automated cold email outreach, LinkedIn outreach, account-based marketing (ABM), and CRM setup to source and qualify decision-maker meetings."
    },
    {
      q: "How do you source contact lists?",
      a: "We build clean contact list databases matching your exact Ideal Customer Profile (ICP) using verified sources like Apollo and LinkedIn Sales Navigator, run through strict bounce-checking protocols."
    },
    {
      q: "What is your cold email deliverability protocol?",
      a: "We set up secondary outreach domains, fully warm up secondary email inboxes, and configure DNS parameters (SPF, DKIM, DMARC) so your emails land in primary inboxes rather than spam."
    },
    {
      q: "Do you handle response management?",
      a: "Yes, we monitor outreach replies, filter out out-of-office responses, and nurture positive hand-raisers to book meetings directly into your sales calendars."
    },
    {
      q: "What is the monthly pricing?",
      a: "B2B Lead Generation retainers range from ₹20,000 to ₹1,50,000/month depending on outbound volumes, database building needs, and LinkedIn campaign management."
    },
    {
      q: "Is this compliance-friendly (spam regulations)?",
      a: "Absolutely. We adhere to CAN-SPAM and GDPR regulations by sending highly-personalized, one-on-one business propositions with easy opt-outs, avoiding bulk blast spam."
    },
    {
      q: "How many leads can we expect?",
      a: "While results vary by market and offer strength, our campaigns typically generate 15 to 45+ highly qualified demo or sales calls per month."
    },
    {
      q: "Do you integrate with our current CRM?",
      a: "Yes, we build custom webhooks and workflows to route qualified leads directly into Salesforce, Hubspot, Zoho, or your preferred CRM."
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
              COLD EMAIL · LINKEDIN OUTREACH · CRM PIPELINES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              B2B Lead Generation Sourcing Qualified Calls
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Fill your sales calendar. We build outbound systems that secure meetings with decision-makers on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="b2b-hero-audit-btn" href="/free-seo-audit" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Free Outbound Audit →
              </Button>
              <Button id="b2b-hero-talk-btn" href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Talk to Lead Gen Director
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
                OUTBOUND SALES ACQUISITION
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              What is B2B Lead Generation & Sales?
            </h2>
            
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
              <strong>Definition:</strong> B2B Lead Generation is the process of identifying, attracting, and engaging potential business buyers for your products or services. Using modern cold outreach infrastructure, we run hyper-targeted email and LinkedIn sequences that warm up accounts and secure direct video calls with key corporate decision-makers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-2">
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">1. Anti-Spam Infrastructure</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We register and warm separate outreach domains with verified SPF, DKIM, and DMARC setups to secure primary inbox deliverability.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">2. Custom Data Sourcing</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  No dead directories. We custom extract list databases, verified with double-verification, matching job, title, and sector targets.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">3. Booking Automation</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Synchronize outbound replies, nurture responders with value assets, and schedule appointments into calendars automatically.
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
              Lead Generation Deliverables
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
              CAMPAIGN PATHS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              B2B Outreach Frameworks
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['email', 'linkedin', 'abm'] as const).map((tab) => (
              <button
                key={tab}
                id={`b2b-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'email' && <Mail className="w-4 h-4" />}
                  {tab === 'linkedin' && <Users className="w-4 h-4" />}
                  {tab === 'abm' && <Target className="w-4 h-4" />}
                  {tab === 'email' ? 'Cold Email' : tab === 'linkedin' ? 'LinkedIn Social' : 'ABM Campaigns'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorB2B"
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
              PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Outbound Build Process
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
                Establish a B2B pipeline.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Outbound management retainers range from ₹20,000–₹1,50,000/month. Contact us to scope database sizing and outreach volumes.
              </p>
            </div>
            <Button id="b2b-pricing-btn" href="/free-seo-audit" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Request Lead Gen Proposal →
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
                  id={`b2b-faq-btn-${idx}`}
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
            Lead Gen services available in:
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
