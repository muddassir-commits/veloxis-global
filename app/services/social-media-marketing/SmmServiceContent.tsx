'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../../../components/ui/Button';
import { 
  Check, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Image,
  Search,
  MessageSquare,
  Video,
  Target,
  BarChart3
} from 'lucide-react';
import { Instagram, Facebook, Linkedin } from '../../../components/ui/BrandIcons';

export default function SmmServiceContent() {
  const [activeTab, setActiveTab] = useState<'instagram' | 'facebook' | 'linkedin'>('instagram');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const checklistItems = [
    "Social Media Audit",
    "Platform Strategy",
    "Content Calendar",
    "Custom Graphic Design",
    "Copywriting & Captions",
    "Reels & Video Strategy",
    "LinkedIn B2B Authority",
    "Meta Retargeting",
    "Community Engagement",
    "Performance Reporting"
  ];

  const tabContent = {
    instagram: {
      title: "Instagram & Reels Domination",
      description: "Scale organic reach and viral buzz with short-form vertical video strategy. We manage everything from script writing to video post-production, aesthetic graphic designs, and custom story templates that keep your community engaged.",
      features: [
        "Reels ideation, scripting, and post-production editing",
        "Aesthetic grid styling and high-converting carousels",
        "Active story strategy to nurture leads",
        "Hashtag and audio research updates"
      ],
      icon: <Instagram className="w-5 h-5 text-white" />,
      tag: "Reels & UGC Focus"
    },
    facebook: {
      title: "Facebook Community & Ads Synergies",
      description: "Nurture local customer bases, manage review channels, and run high-efficiency retargeting campaigns. We convert casual traffic on Facebook into active buyers using targeted community engagement campaigns.",
      features: [
        "Localized demographic campaign targeting",
        "Meta Business Manager catalog setup",
        "Active community management & inbox replies",
        "Facebook page optimization & review building"
      ],
      icon: <Facebook className="w-5 h-5 text-white" />,
      tag: "Community & Local Lead Gen"
    },
    linkedin: {
      title: "LinkedIn B2B Leadership",
      description: "Establish industry authority and win high-ticket corporate clients. We write custom thought leadership posts for founders and corporate pages, optimize profile bio setups, and manage direct outbound lead funnels.",
      features: [
        "Founder personal brand writing & scheduling",
        "B2B content gap analysis & industry tagging",
        "Outbound corporate network acceleration",
        "Company page authority building posts"
      ],
      icon: <Linkedin className="w-5 h-5 text-white" />,
      tag: "B2B Lead Generation"
    }
  };

  const timelineSteps = [
    {
      step: "01",
      title: "Platform Discovery & Audit",
      desc: "Comprehensive review of current performance metrics, brand identity matching, and competitor profiling.",
      icon: <Search className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "02",
      title: "Content Persona Alignment",
      desc: "Setting brand colors, visual aesthetics, content tones, and creating templates for visual harmony.",
      icon: <Image className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "03",
      title: "Content Calendar & Scheduling",
      desc: "Creating and scheduling a 30-day posting calendar mapping visual and text assets for approval.",
      icon: <Video className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "04",
      title: "Creative Production",
      desc: "Executing graphic designing, video editing, caption copywriting, and meta hashtags alignment.",
      icon: <Target className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "05",
      title: "Community Management",
      desc: "Engaging with post comments, monitoring direct messages, and initiating interactions with partner pages.",
      icon: <MessageSquare className="w-5 h-5 text-royal-blue" />
    },
    {
      step: "06",
      title: "Conversion Tracking & Optimization",
      desc: "Assessing performance parameters, reviewing lead attribution pathways, and restructuring monthly strategies.",
      icon: <BarChart3 className="w-5 h-5 text-royal-blue" />
    }
  ];

  const stats = [
    { value: "120%", label: "Average organic engagement growth" },
    { value: "1.2M+", label: "Reels impressions generated monthly" },
    { value: "85%", label: "Increase in direct customer leads" }
  ];

  const faqs = [
    {
      q: "How long does it take to see results from SMM?",
      a: "Organic community building takes between 3 to 6 months to establish strong, active engagement. However, paid social media advertising campaigns can generate active inquiries and sales in less than 7 days."
    },
    {
      q: "Which platform is best for my business?",
      a: "If you are a B2B startup, IT consulting firm, or manufacturer, LinkedIn is our primary recommended platform. If you are a D2C retail product, clinic, or consumer service, Instagram and Facebook are best."
    },
    {
      q: "Do you create the graphics and videos?",
      a: "Yes, we handle the entire content production lifecycle, including custom vector graphic designs, high-end infographics, captions, hashtag research, and reels editing."
    },
    {
      q: "Do you handle response management?",
      a: "Yes, we actively monitor post comments and can configure quick-replies for common direct inquiries, forwarding high-intent leads to your sales team on WhatsApp."
    },
    {
      q: "How often do you post?",
      a: "Posting frequency depends on your custom package, but standard strategies involve 3 to 5 posts per week, including reels, carousels, and daily engagement stories."
    },
    {
      q: "What is your video editing workflow?",
      a: "You provide raw video clips or product samples, and our team edits them into high-converting, trending 15-to-60 second reels with custom voiceovers, captions, and transitions."
    },
    {
      q: "Do you manage paid ads on social media?",
      a: "Yes, we handle paid social media marketing campaigns (Meta Ads, Facebook & Instagram Ads, LinkedIn sponsored campaigns) as a unified growth package."
    },
    {
      q: "Do you offer influencer marketing?",
      a: "We help identify local influencers in India and orchestrate outreach campaigns, though influencer fees are separate from agency retainer fees."
    },
    {
      q: "Can I review content before it goes live?",
      a: "Yes. We share a complete 30-day draft content calendar using collaborative tools so your team can review and approve every asset before publishing."
    },
    {
      q: "How do you track SMM conversions?",
      a: "We configure custom UTM parameters for bio links and set up tracking codes (Meta Pixel) to trace leads from SMM back to your site conversions."
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
              META · INSTAGRAM · LINKEDIN · CONTENT
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              Social Media Marketing That Builds Brands & Drives Real Sales
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Stop chasing vanity metrics. We construct high-impact organic content and paid campaigns that scale engagement, build loyal communities, and drive pipeline revenue across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto text-center">
                Get Custom Quote →
              </Button>
              <Button href="/free-seo-audit" variant="ghost" size="lg" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 text-center">
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
              Comprehensive Social Media Management
            </h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              From creative assets to detailed analytics reports, we take complete ownership of your brand presence.
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
              PLATFORM STRATEGIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tailored Platform Frameworks
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We apply customized platform guidelines depends on where your prospective buyers search.
            </p>
          </div>

          <div className="flex justify-center border-b border-slate-200 mb-12 gap-2 sm:gap-6">
            {(['instagram', 'facebook', 'linkedin'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-4 sm:px-6 text-sm font-extrabold uppercase tracking-wider relative transition-colors ${
                  activeTab === tab ? 'text-royal-blue' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span className="flex items-center gap-2">
                  {tab === 'instagram' && <Instagram className="w-4 h-4" />}
                  {tab === 'facebook' && <Facebook className="w-4 h-4" />}
                  {tab === 'linkedin' && <Linkedin className="w-4 h-4" />}
                  {tab === 'instagram' ? 'Instagram' : tab === 'facebook' ? 'Facebook' : 'LinkedIn'}
                </span>
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicatorSmm"
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
              Our 6-Step Social Scaling Framework
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We apply a strict workflow ensuring absolute styling consistency and message quality.
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
                PRICING & RETAINER
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                Get a custom social marketing campaign roadmap tailored to your specific brand goals.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Pricing is tailored to your goals and market. Contact us for a free quote — we'll recommend exactly what you need.
              </p>
            </div>
            <Button href="/contact" variant="primary" size="lg" className="shrink-0 w-full md:w-auto text-center">
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
              Clear answers regarding platform logistics, creative assets, and lead generation tracking.
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
      </section>

      {/* City Strip */}
      <section className="py-12 bg-white border-t border-slate-100 text-center">
        <div className="max-w-container-max mx-auto px-gutter">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
            Social Media marketing services available in:
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
