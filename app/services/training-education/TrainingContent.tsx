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
  GraduationCap, 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  FileText,
  Search,
  Code,
  Map,
  Link2,
  TrendingUp,
  Award,
  Users,
  Presentation
} from 'lucide-react';

export default function TrainingContent() {
  const { getSectionAnimation } = useInViewAnimation();
  const [activeTab, setActiveTab] = useState<'corp' | 'ment' | 'work'>('corp');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Skills Gap Audit",
    "Custom Syllabus Design",
    "Live Interactive Classes",
    "Practical SOP Handouts",
    "Campaign Setup Playbooks",
    "Campaign Review Video Loops",
    "Post-Class Q&A Loops",
    "Slack Channel Workspace",
    "1-on-1 Feedback Syncs",
    "Certificate of Graduation"
  ];

  const tabContent = {
    corp: {
      title: "In-House Corporate Marketing Training",
      description: "Upskill your internal team. We audit your staff's current marketing capabilities, construct customized modules targeting your product's specific buyers, and run interactive team bootcamps to bring execution in-house.",
      features: [
        "Audit of team marketing skills & tool access",
        "Syllabus custom-fit for your B2B/B2C products",
        "On-site or live remote screen-share classes",
        "30-day Slack support pass for setup reviews"
      ],
      icon: <Presentation className="w-5 h-5 text-white" />,
      tag: "Enterprise Teams"
    },
    ment: {
      title: "1-on-1 Marketing & Founder Mentorship",
      description: "Accelerate your strategic mastery. Get private weekly strategy calls with agency founder Muddassir Ali. We review your current campaign metrics, audit agency proposals, and define custom execution blueprints.",
      features: [
        "Private 1-on-1 strategy syncs weekly",
        "Direct auditing of your live ad accounts",
        "Growth strategy frameworks definition",
        "Lifetime access to agency SOP playbooks"
      ],
      icon: <GraduationCap className="w-5 h-5 text-white" />,
      tag: "Founder Mentoring"
    },
    work: {
      title: "4-Week Cohort Masterclasses",
      description: "Learn hands-on execution. Join our structured 4-week marketing courses. Every masterclass contains step-by-step video lessons, live weekly Q&A workshops, and daily accountability challenges to build skills.",
      features: [
        "Structured cohort learning loops",
        "Step-by-step campaign build workshops",
        "Peer networking discord directories",
        "Daily action steps & assignment reviews"
      ],
      icon: <Users className="w-5 h-5 text-white" />,
      tag: "Marketing Masterclasses"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Skills Audit",
      desc: "Identify your current skill gaps, tool limitations, and primary marketing goals before customization.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Syllabus Design",
      desc: "Customize modules, compile relevant tool guides, and prepare practical sandbox exercises.",
      icon: <FileText className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Live Workshops",
      desc: "Deliver interactive, screen-shared classes with real-time campaign setups and live questions.",
      icon: <Presentation className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Playbook Handouts",
      desc: "Distribute step-by-step SOP documents, copy checklists, and budget template spreadsheets.",
      icon: <BookOpen className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Campaign Reviews",
      desc: "Review student ad accounts and search setups live, correcting errors and recommending tweaks.",
      icon: <TrendingUp className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Post-Class Support",
      desc: "Transition to private Slack channels for ongoing Q&A, setup reviews, and optimization calls.",
      icon: <Award className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "300+", label: "Marketers and business owners trained" },
    { value: "17+", label: "Cohorts and cohorts batches delivered" },
    { value: "94%", label: "Course completion and satisfaction score" }
  ];

  const faqs = [
    {
      q: "What does Training & Education involve?",
      a: "We deliver group marketing workshops, corporate training bootcamps, and 1-on-1 marketing mentorship to help teams and founders master SEO, PPC, and automation in-house."
    },
    {
      q: "Who conducts the training sessions?",
      a: "Our core training programs are designed and led directly by our founder, Muddassir Ali, drawing from over 6+ years of agency scaling experience."
    },
    {
      q: "What formats are available?",
      a: "We offer self-paced online courses, interactive 4-week group workshops (with daily accountability), and customized on-site corporate training plans."
    },
    {
      q: "Do you provide hands-on playbooks?",
      a: "Yes, all students and corporate clients receive complete SOP playbooks, campaign setup templates, and copy outline sheets to execute campaigns."
    },
    {
      q: "What is the training pricing?",
      a: "Online courses start at ₹499. Live 4-week masterclass programs cost ₹25,000 to ₹50,000 per person. Corporate in-house packages start at ₹1,00,000."
    },
    {
      q: "Do we get support after training?",
      a: "Yes, group masterclasses and corporate workshops include 30 to 90 days of implementation Slack support to review setups and ad performance."
    },
    {
      q: "How many people have you trained?",
      a: "We have successfully trained over 300+ marketers and business owners across 17+ cohorts since launch."
    },
    {
      q: "Can you customize corporate syllabi?",
      a: "Yes, we audit your team's current skills and build custom modules focusing specifically on your industry's buying journeys."
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
              CORPORATE TRAINING · FOUNDER MENTORING · MASTERCLASSES
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Marketing Training & 1-on-1 Mentorship
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Upskill your team. Master SEO, paid advertising, and marketing automation workflows using custom hand-on SOP templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button id="training-hero-quote-btn" href="/free-seo-audit" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Corporate Quote →
              </Button>
              <Button id="training-hero-talk-btn" href="/contact" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
                Talk to Lead Instructor
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
                EDUCATION & UPSKILLING SUITE
              </span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
              What is Training & Education?
            </h2>
            
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed font-medium">
              <strong>Definition:</strong> Digital marketing training refers to structured educational programs, interactive bootcamps, and executive coaching designed to transfer campaign execution skills to an in-house team. We teach proven frameworks, tool setups, and optimization rhythms directly based on active agency client campaigns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4 mt-2">
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">1. Hands-on SOP library</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  No abstract theory. We deliver exact execution playbooks, copywriting outlines, and checklist sheets used daily by our own specialists.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">2. Founder-Led Sessions</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Learn from practical experience. Muddassir Ali conducts core group bootcamps and founder mentorship sessions, sharing active insights.
                </p>
              </div>
              <div>
                <span className="text-xs font-bold text-royal-blue block uppercase tracking-wider mb-1">3. Implementation Support</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Avoid getting stuck post-class. We provide Slack workspace channels to answer questions and review ad sets for 30 to 90 days.
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
              Training Deliverables Checklist
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
              TRAINING CHANNELS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Upskilling Frameworks
            </h2>
          </div>

          {/* Tab Selector */}
          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['corp', 'ment', 'work'] as const).map((tab) => (
              <button
                key={tab}
                id={`training-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'corp' && <Presentation className="w-4 h-4" />}
                  {tab === 'ment' && <GraduationCap className="w-4 h-4" />}
                  {tab === 'work' && <Users className="w-4 h-4" />}
                  {tab === 'corp' ? 'Corporate Team' : tab === 'ment' ? '1-on-1 Mentoring' : 'Masterclasses'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorTraining"
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
              6-Step Training Process
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
                TRAINING PRICING
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Upskill your team or schedule mentorship.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Ranges: ₹499 (Online course) to ₹25,000–₹50,000 (Group workshop) and ₹1,00,000 (Corporate). Reach out to check cohort schedules.
              </p>
            </div>
            <Button id="training-pricing-btn" href="/free-seo-audit" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
              Request Training Outline →
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
                  id={`training-faq-btn-${idx}`}
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
            Training available in:
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
