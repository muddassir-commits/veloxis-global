'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Phone, ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  const serviceLinks = [
    { name: 'Search Engine Optimization (SEO)', href: '/services/seo' },
    { name: 'Google Ads & PPC Management', href: '/services/google-ads-ppc' },
    { name: 'Social Media Marketing (SMM)', href: '/services/social-media-marketing' },
    { name: 'Web Design & Development', href: '/services/web-design-development' },
    { name: 'Content Marketing Services', href: '/services/content-marketing' },
    { name: 'Email & WhatsApp Automation', href: '/services/email-marketing' },
  ];

  return (
    <div className="min-h-[85vh] relative flex items-center justify-center bg-slate-50 py-16 px-4 sm:px-6 overflow-hidden">
      {/* Decorative background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

      <div className="max-w-[700px] w-full text-center relative z-10 font-sans">
        {/* Large 404 text with gradient */}
        <span className="text-[120px] md:text-[160px] font-extrabold tracking-tighter leading-none select-none block bg-clip-text text-transparent bg-gradient-to-r from-royal-blue via-indigo-accent to-teal-accent animate-pulse mb-2">
          404
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Oops! That Page Has Scaled Away
        </h1>

        <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-8">
          The link you followed might be broken, or the page has been moved. Don't worry — our results-driven growth routes are still fully functional.
        </p>

        {/* Quick Help Channels */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sm:p-8 max-w-xl mx-auto mb-10 text-left">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-4 border-b border-slate-50 pb-2">
            Where were you looking to go?
          </h2>

          {/* Quick links to main services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {serviceLinks.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="flex items-center justify-between p-3 border border-slate-50 rounded-lg hover:border-slate-200 hover:bg-slate-50 text-sm font-semibold text-slate-800 transition-all group"
              >
                <span>{service.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-royal-blue transform group-hover:translate-x-0.5 transition-transform" />
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-slate-100 gap-4">
            <span className="text-xs font-medium text-slate-400">
              Need immediate assistance?
            </span>
            <a
              href="tel:+918887620727"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900 hover:text-royal-blue transition-colors"
            >
              <Phone className="w-4 h-4 text-royal-blue" />
              +91-88876 20727
            </a>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button href="/" variant="primary" size="lg" className="w-full sm:w-auto">
            <Home className="w-4 h-4 mr-2" />
            Back to Homepage
          </Button>
          <Button href="/contact" variant="secondary" size="lg" className="w-full sm:w-auto">
            Speak to a Consultant
          </Button>
        </div>
      </div>
    </div>
  );
}
