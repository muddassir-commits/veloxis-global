'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Target, Search, PenTool, MessageSquare, Code, Mail, Cpu, 
  Award, BarChart3, GraduationCap, ShoppingCart, HelpCircle, 
  Layers, Settings, Check, ArrowRight, Zap
} from 'lucide-react';
import { ServiceData, servicesData } from '../../data/services-data';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { FaqAccordion } from '../sections/FaqAccordion';
import { CtaBanner } from '../sections/CtaBanner';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Search,
  PenTool,
  MessageSquare,
  Code,
  Mail,
  Cpu,
  Award,
  BarChart3,
  GraduationCap,
  ShoppingCart,
  HelpCircle,
  Layers,
  Settings
};

interface ServicePageTemplateProps {
  service: ServiceData;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({ service }) => {
  const [openSubserviceIndex, setOpenSubserviceIndex] = useState<number>(0);

  const ServiceIcon = iconMap[service.icon] || Target;

  // Find related services full data
  const relatedServicesData = service.relatedServices
    .map(slug => servicesData.find(s => s.slug === slug || s.id === slug))
    .filter((s): s is ServiceData => !!s);

  // Map accentColor to Tailwind theme styles
  const accentColors: Record<string, { bg: string; text: string; border: string; glow: string; textDark: string }> = {
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', glow: 'shadow-teal-100', textDark: 'text-teal-900' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', glow: 'shadow-indigo-100', textDark: 'text-indigo-900' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', glow: 'shadow-orange-100', textDark: 'text-orange-900' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', glow: 'shadow-purple-100', textDark: 'text-purple-900' },
    cyan: { bg: 'bg-cyan-50', text: 'text-cyan-600', border: 'border-cyan-200', glow: 'shadow-cyan-100', textDark: 'text-cyan-900' },
    gold: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', glow: 'shadow-amber-100', textDark: 'text-amber-900' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', glow: 'shadow-green-100', textDark: 'text-green-900' },
    navy: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', glow: 'shadow-blue-100', textDark: 'text-blue-900' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', glow: 'shadow-red-100', textDark: 'text-red-900' },
    gray: { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200', glow: 'shadow-slate-100', textDark: 'text-slate-900' },
  };

  const currentAccent = accentColors[service.accentColor] || accentColors.teal;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-white py-16 sm:py-24 relative overflow-hidden border-b border-slate-100">
        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradientClass} -z-10`} />
        
        {/* Glow dots in background */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-royal-blue/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-teal-accent/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col items-start">
            <Badge variant="teal" className="mb-4">
              <span className="mr-1">{service.emoji}</span>
              {service.title.toUpperCase()}
            </Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              {service.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id={`service-hero-audit-${service.id}`} href="/free-seo-audit" variant="primary">
                {service.cta} →
              </Button>
              <Button id={`service-hero-contact-${service.id}`} href="/contact" variant="outline">
                Book Free Consultation
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center items-center">
            <div className={`w-32 h-32 sm:w-48 sm:h-48 rounded-3xl ${currentAccent.bg} border-2 ${currentAccent.border} flex items-center justify-center shadow-lg ${currentAccent.glow} transition-transform duration-500 hover:scale-105`}>
              <ServiceIcon className={`w-16 h-16 sm:w-24 sm:h-24 ${currentAccent.text}`} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Service Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                {service.longDesc}
              </p>
              
              <h3 className="font-bold text-lg text-slate-800 mb-4">Core Benefits & Outcomes</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0 p-0.5 rounded-full bg-teal-50 border border-teal-200">
                      <Check className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-4 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500 animate-pulse" />
                Ideal Candidate Profile
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                This service delivers maximum ROI and results for businesses matching the profiles below:
              </p>
              <div className="flex flex-col gap-3">
                {service.bestFor.map((item, idx) => (
                  <div key={idx} className="bg-white px-4 py-3 rounded-xl border border-slate-200 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-royal-blue shrink-0" />
                    <span className="text-sm font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sub-Services Detail Section */}
      {service.subservices && service.subservices.length > 0 && (
        <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="indigo" className="mb-4">WHAT WE COVER</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Detailed Service Capabilities</h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Explore our full suite of modular components. We tailor these items for your specific business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Menu Column */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                {service.subservices.map((sub, idx) => {
                  const isActive = openSubserviceIndex === idx;
                  return (
                    <button
                      key={idx}
                      id={`subservice-toggle-${service.id}-${idx}`}
                      onClick={() => setOpenSubserviceIndex(idx)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex justify-between items-center ${
                        isActive 
                          ? `bg-white ${currentAccent.border} shadow-md border-l-4 border-l-royal-blue` 
                          : 'bg-white/50 border-slate-200/60 hover:bg-white hover:shadow-sm'
                      }`}
                    >
                      <span className="font-bold text-slate-900 text-sm sm:text-base pr-4">
                        {sub.name}
                      </span>
                      <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'translate-x-1 text-royal-blue' : 'text-slate-400'}`} />
                    </button>
                  );
                })}
              </div>

              {/* Items Column */}
              <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm min-h-[300px]">
                <h3 className="font-extrabold text-xl text-slate-900 border-b border-slate-100 pb-4 mb-6">
                  {service.subservices[openSubserviceIndex]?.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.subservices[openSubserviceIndex]?.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50/50 p-3.5 rounded-xl border border-slate-100">
                      <div className="mt-1 shrink-0 p-0.5 rounded-full bg-teal-50">
                        <Check className="w-3 h-3 text-teal-600" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Pricing Plans */}
      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="orange" className="mb-4">INVESTMENT PLANS</Badge>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Flexible Pricing Models</h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose a performance tier that fits your growth stage. Custom terms are available for enterprise brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter Plan */}
            <Card className="border border-slate-200 p-8 flex flex-col justify-between bg-slate-50/50 rounded-3xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-md">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Starter Tier</h3>
                <p className="text-xs text-slate-500 mb-6">Ideal for small businesses starting out</p>
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">{service.pricing.starter}</span>
                </div>
                <hr className="border-slate-200 mb-6" />
                <ul className="flex flex-col gap-3.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Basic setup & strategy kick-off</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Monthly performance dashboards</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Email & WhatsApp support channels</span>
                  </li>
                </ul>
              </div>
              <Button id={`service-starter-${service.id}`} href="/contact" variant="outline" className="w-full">
                Get Started
              </Button>
            </Card>

            {/* Growth Plan */}
            <Card className="border-2 border-royal-blue p-8 flex flex-col justify-between bg-white rounded-3xl relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
              <div className="absolute top-0 right-0 bg-royal-blue text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                Most Popular
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Growth Acceleration</h3>
                <p className="text-xs text-slate-500 mb-6">Designed to scale leads & search visibility</p>
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">{service.pricing.growth}</span>
                </div>
                <hr className="border-slate-200 mb-6" />
                <ul className="flex flex-col gap-3.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>Comprehensive multi-channel setups</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>Bi-weekly optimization reports</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>Dedicated strategy consultant lead</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-royal-blue shrink-0" />
                    <span>Competitor rank gap audits</span>
                  </li>
                </ul>
              </div>
              <Button id={`service-growth-${service.id}`} href="/contact" variant="primary" className="w-full shadow-md">
                Accelerate Growth
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border border-slate-200 p-8 flex flex-col justify-between bg-slate-50/50 rounded-3xl relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-md">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">Enterprise Custom</h3>
                <p className="text-xs text-slate-500 mb-6">Full-scale corporate strategies & support</p>
                <div className="mb-6">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900">{service.pricing.enterprise}</span>
                </div>
                <hr className="border-slate-200 mb-6" />
                <ul className="flex flex-col gap-3.5 mb-8">
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Custom SLAs & priority support lines</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Omni-channel marketing dashboards</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Direct Slack & phone support availability</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-slate-600">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Custom code & backend tracking builds</span>
                  </li>
                </ul>
              </div>
              <Button id={`service-enterprise-${service.id}`} href="/contact" variant="outline" className="w-full">
                Contact Strategy Lead
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <FaqAccordion customFaqs={service.faqs} title={`${service.title} FAQs`} badgeText="GOT QUESTIONS?" />

      {/* 6. Related Services */}
      {relatedServicesData.length > 0 && (
        <section className="bg-slate-50 py-16 border-t border-slate-200">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="mb-12 text-center">
              <Badge variant="indigo" className="mb-4">SYNERGIES</Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Recommended Synergy Services</h2>
              <p className="text-sm text-slate-500 mt-2">These services combine with {service.title} to deliver maximum growth.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServicesData.slice(0, 3).map((relService, idx) => {
                const RelIcon = iconMap[relService.icon] || Target;
                const relAccent = accentColors[relService.accentColor] || accentColors.teal;
                return (
                  <Card key={idx} className="bg-white p-8 border border-slate-200 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <div className={`w-12 h-12 rounded-2xl ${relAccent.bg} border ${relAccent.border} flex items-center justify-center mb-6`}>
                        <RelIcon className={`w-6 h-6 ${relAccent.text}`} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900 mb-3">{relService.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed line-clamp-3">
                        {relService.shortDesc}
                      </p>
                    </div>
                    <Link 
                      href={`/services/${relService.slug}`} 
                      className="text-sm font-bold text-royal-blue hover:underline inline-flex items-center gap-1.5"
                      id={`related-service-link-${relService.id}`}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. CTA Banner */}
      <CtaBanner 
        title={`Scale Your ${service.title} in 2026`} 
        description={`Get a FREE 45-minute digital growth roadmap session. We will evaluate your gaps, audit your competitor channels, and outline an actionable strategy for ${service.title.toLowerCase()}.`} 
      />
    </div>
  );
};
