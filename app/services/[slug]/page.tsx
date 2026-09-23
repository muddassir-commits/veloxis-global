import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { constructMetadata } from '../../../lib/seo-config';
import { servicesData } from '../../../data/services-data';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { Button } from '../../../components/ui/Button';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { getFAQPageSchema } from '../../../lib/schema';

import { CtaBanner } from '../../../components/sections/CtaBanner';
import { Target, CheckCircle } from 'lucide-react';

const serviceHeroImages: Record<string, string> = {
  'high-converting-landing-pages': '/images/sections/hero-skyline-night.jpg',
  'paid-ads': '/images/sections/case-study-cover.jpg',
  'ai-automation': '/images/sections/industries-hero.jpg',
};

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return {};

  return constructMetadata({
    title: `${service.title} | Real Estate Marketing Agency`,
    description: service.shortDesc,
    path: `/services/${service.slug}`
  });
}

export default function ServicePage({ params }: PageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: service.title, href: `/services/${service.slug}` }
  ];

  return (
    <>
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* SEO FAQ Schema */}
      {service.faqs.length > 0 && (
        <SchemaMarkup schema={getFAQPageSchema(service.faqs)} />
      )}

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden text-left">
        <Image
          src={serviceHeroImages[service.slug] || '/images/sections/service-landing-pages.jpg'}
          alt={service.title}
          fill
          priority
          className="object-cover object-center"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/80 to-slate-900/50" aria-hidden="true" />

        <div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
              {service.emoji} {service.title}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              {service.subtitle}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">
              {service.shortDesc}
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                {service.cta}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-slate-600 leading-relaxed">
                  {service.longDesc}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Deliverables</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Our Process / Subservices</h2>
                <div className="flex flex-col gap-4">
                  {service.subservices.map((sub, idx) => (
                    <div key={idx} className="border border-slate-100 rounded-xl p-6 bg-white shadow-sm">
                      <h3 className="font-bold text-lg text-slate-900 mb-4">{sub.name}</h3>
                      <ul className="flex flex-wrap gap-2">
                        {sub.items.map((item, i) => (
                          <li key={i} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-md">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-4">Pricing Packages</h3>
                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Starter</span>
                    <span className="font-bold text-slate-900">{service.pricing.starter}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Growth</span>
                    <span className="font-bold text-slate-900">{service.pricing.growth}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="text-slate-500 font-medium">Enterprise</span>
                    <span className="font-bold text-slate-900">{service.pricing.enterprise}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {service.pricingRange}
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h3 className="font-bold mb-4">Best For</h3>
                <ul className="flex flex-col gap-3">
                  {service.bestFor.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                      <Target className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-gutter">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
            <div className="flex flex-col gap-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
