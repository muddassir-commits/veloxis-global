'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, Check, ShieldAlert, Sparkles, 
  TrendingUp, ChevronRight 
} from 'lucide-react';
import { IndustryData } from '../../data/industries-data';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { FaqAccordion } from '../sections/FaqAccordion';
import { CtaBanner } from '../sections/CtaBanner';

interface IndustryPageTemplateProps {
  industry: IndustryData;
}

export const IndustryPageTemplate: React.FC<IndustryPageTemplateProps> = ({ industry }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-white py-16 sm:py-24 text-left relative overflow-hidden border-b border-slate-100">
        {/* Glow patterns */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-blue/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge variant="teal" className="mb-4 flex items-center gap-1.5">
              <span className="text-sm">{industry.emoji}</span>
              <span>{industry.heroBadge}</span>
            </Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {industry.heroTitle}
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              {industry.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id={`industry-hero-audit-${industry.slug}`} href="/free-seo-audit" variant="primary">
                Get {industry.title} Audit →
              </Button>
              <Button id={`industry-hero-contact-${industry.slug}`} href="/contact" variant="outline">
                Talk to Strategy Lead
              </Button>
            </div>
          </div>

          {/* Case Summary Panel */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col gap-5 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-teal-500/10 text-teal-700 text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-2xl tracking-wider">
              Verified Case Study
            </div>
            
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              {industry.title} Impact Summary
            </h3>
            
            <div className="flex flex-col gap-4 text-sm text-slate-700">
              <div className="flex justify-between border-b border-slate-200/50 pb-2">
                <span className="text-slate-500 font-medium">Segment Profile:</span>
                <span className="font-bold text-slate-900">{industry.caseSummary.clientArea}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/50 pb-2">
                <span className="text-slate-500 font-medium">Timeframe:</span>
                <span className="font-bold text-slate-900">{industry.caseSummary.timeframe}</span>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-200/50 pb-2">
                <span className="text-slate-500 font-medium">Key Milestone:</span>
                <span className="font-bold text-slate-900">{industry.caseSummary.outcome}</span>
              </div>
              <div className="text-sm font-bold text-royal-blue bg-royal-blue/5 p-3 rounded-xl border border-royal-blue/10 flex items-center gap-2">
                <TrendingUp className="w-4.5 h-4.5 shrink-0" />
                <span>{industry.caseSummary.roas}</span>
              </div>
            </div>

            {industry.caseSummary.caseStudyLink && (
              <div className="mt-2">
                <Link 
                  href={industry.caseSummary.caseStudyLink} 
                  className="text-xs font-bold text-royal-blue hover:underline inline-flex items-center gap-1 group"
                  id={`industry-case-study-${industry.slug}`}
                >
                  {industry.caseSummary.caseStudyTitle || "View Detailed Case Study"} 
                  <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Challenges Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200/60">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="orange" className="mb-4">THE OBSTACLES</Badge>
            <h2 className="text-3xl font-bold text-slate-900">Common Industry Gaps</h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Why traditional digital advertising agencies fail to scale companies in the {industry.title.toLowerCase()} sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.challenges.map((challenge, idx) => (
              <Card key={idx} className="bg-white p-8 border border-slate-200 rounded-3xl relative overflow-hidden shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mb-6">
                  <ShieldAlert className="w-5 h-5 text-red-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{challenge.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {challenge.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategies / Tactics Section */}
      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE SOLVE IT</Badge>
            <h2 className="text-3xl font-bold text-slate-900">Our Tailored {industry.title} Playbook</h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              A comprehensive system built to address industry specific gaps and acquire profitable customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.strategies.map((strat, idx) => (
              <Card key={idx} className="bg-slate-50/50 p-8 border border-slate-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mb-6">
                  <Check className="w-4 h-4 text-teal-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{strat.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {strat.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Statistics Strip */}
      <section className="bg-royal-blue py-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-60 -z-10" />
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {industry.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 md:p-0">
                <span className="text-4xl sm:text-5xl font-black tracking-tight mb-2 text-teal-accent">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white/80 max-w-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Recommended Services */}
      <section className="bg-white py-16 border-b border-slate-200/50">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="teal" className="mb-4">SYNERGIES</Badge>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Recommended Services for {industry.title}</h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">
              These digital marketing programs are crucial for executing our {industry.title.toLowerCase()} playbook.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.recommendedServices.map((service, idx) => (
              <Card key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="text-3xl mb-4">{service.emoji}</div>
                  <h3 className="font-extrabold text-lg text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                    Custom-tailored setups specifically optimized for {industry.title.toLowerCase()} marketing goals.
                  </p>
                </div>
                <Link 
                  href={`/services/${service.slug}`} 
                  className="text-sm font-bold text-royal-blue hover:underline inline-flex items-center gap-1 group"
                  id={`industry-service-link-${industry.slug}-${idx}`}
                >
                  Explore Details 
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQs Section */}
      <FaqAccordion 
        customFaqs={industry.faqs} 
        title={`${industry.title} Marketing FAQs`} 
        badgeText="GOT QUESTIONS?" 
      />

      {/* 7. CTA Banner */}
      <CtaBanner 
        title={`Scale Your ${industry.title} Business in 2026`} 
        description={`Get a free, detailed ${industry.title.toLowerCase()} marketing review. We will evaluate your lead generation channels, audit your competitor strategies, and outline an actionable growth roadmap.`} 
      />
    </div>
  );
};
