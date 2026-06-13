import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { Badge } from '../../components/ui/Badge';
import { AuditForm } from '../../components/forms/AuditForm';
import { Check, ArrowRight, ClipboardCheck, Sparkles, PhoneCall } from 'lucide-react';
import { constructMetadata, pageMeta } from '../../lib/seo-config';

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Free SEO Audit for Your Website India 2026 | Veloxis Global",
    description: "Get a FREE personalised SEO audit — discover exactly why your website isn't ranking on Google. 48-hour turnaround. No obligation. Serving businesses across India.",
    path: "/free-seo-audit"
  }),
  keywords: "free SEO audit India 2026, free website audit India, free digital marketing audit, website SEO analysis free, Google ranking check free"
};

export default function FreeAuditPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://veloxisglobal.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Free SEO Audit",
        "item": "https://veloxisglobal.com/free-seo-audit"
      }
    ]
  };

  const checklistItems = [
    "Technical SEO health score",
    "Top keyword opportunities for your business",
    "Competitor analysis (who's beating you and how)",
    "Google Business Profile status",
    "Page speed & Core Web Vitals check",
    "Backlink profile snapshot",
    "Priority action checklist (top 5 fixes)"
  ];

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      {/* Main Conversion Section */}
      <section className="bg-slate-50 py-12 lg:py-20 overflow-hidden text-left relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"></div>
        
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Content Column (55%) */}
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <Badge color="teal" className="bg-teal-accent/10 text-teal-accent px-4 py-1.5 text-xs font-bold rounded-full">
                FREE · NO OBLIGATION · 48-HOUR TURNAROUND
              </Badge>
              
              <h1 className="text-headline-lg-mobile md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-slate-900">
                Get Your FREE Website SEO Audit
              </h1>
              
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-sans">
                Discover exactly why your website isn't ranking on Google — with a personalised audit from Muddassir Ali, Veloxis Global. We audit websites for businesses across India — from Kanpur and Lucknow to Delhi and beyond.
              </p>

              <div className="w-full border-t border-slate-200/80 my-2"></div>

              {/* 7-Item Checklist */}
              <div className="flex flex-col gap-4 w-full">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-royal-blue/15 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-royal-blue stroke-[3px]" />
                    </div>
                    <span className="font-extrabold text-slate-800 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="w-full border-t border-slate-200/80 my-2"></div>

              {/* Social Proof */}
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2 font-sans">
                <Sparkles className="w-4 h-4 text-royal-blue shrink-0" />
                <span>Join 20+ businesses across India who've used this audit</span>
              </p>
            </div>

            {/* Right Form Card Column (45%) */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-slate-100">
                <div className="mb-6">
                  <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                    Claim Your Free Audit
                  </h3>
                  <p className="text-xs text-slate-400">
                    We manually analyze your website and email the results.
                  </p>
                </div>

                <AuditForm />

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <p className="text-xs text-slate-400 font-semibold">
                    We respect your privacy. Questions? Reach out to{" "}
                    <a href="mailto:muddassir@veloxisglobal.com" className="text-royal-blue hover:underline">
                      muddassir@veloxisglobal.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Below Fold Flowchart */}
      <section className="py-20 bg-white border-t border-slate-100 text-left">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">
              THE WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Happens Next?
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              Our auditing pipeline is streamlined to give you actionable insights fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative">
            
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 relative flex flex-col gap-4">
              <span className="text-xs font-bold text-royal-blue bg-royal-blue/10 px-2.5 py-1 rounded-full w-fit">
                STEP 01
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Submit Website Details
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Fill out the quick audit form above with your target domain name and local area.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 relative flex flex-col gap-4">
              <span className="text-xs font-bold text-royal-blue bg-royal-blue/10 px-2.5 py-1 rounded-full w-fit">
                STEP 02
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Manual Audit Analysis
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Muddassir Ali checks your domain logs, backlink patterns, and local GBP profile maps.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 relative flex flex-col gap-4">
              <span className="text-xs font-bold text-royal-blue bg-royal-blue/10 px-2.5 py-1 rounded-full w-fit">
                STEP 03
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Report & Discovery Call
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Receive the detailed PDF checklist report via email, alongside a 30-min action roadmap call.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Blurred Sample Audit Preview */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 text-center relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
            <span className="text-xs font-bold text-royal-blue uppercase tracking-widest">
              AUDIT SAMPLE PREVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Actionable SEO Insights Dashboard
            </h2>
            <p className="text-slate-500 max-w-xl text-sm leading-relaxed">
              Below is a blurred preview of the custom audit report dashboard. We scan parameters across technical frameworks, keyword indexes, and speed metrics.
            </p>

            {/* Blurred Visual Container */}
            <div className="w-full relative mt-8 border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-lg p-6 sm:p-10 select-none">
              
              {/* Fake dashboard markup */}
              <div className="filter blur-[6px] opacity-60 flex flex-col gap-6 pointer-events-none text-left">
                
                {/* Row 1: Header */}
                <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-royal-blue"></div>
                    <div className="h-4 w-32 bg-slate-200 rounded"></div>
                  </div>
                  <div className="h-6 w-24 bg-slate-200 rounded-full"></div>
                </div>

                {/* Row 2: Stats cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border border-slate-100 p-4 rounded-xl bg-slate-50">
                    <div className="h-3 w-16 bg-slate-200 rounded mb-2"></div>
                    <div className="h-8 w-24 bg-slate-300 rounded"></div>
                  </div>
                  <div className="border border-slate-100 p-4 rounded-xl bg-slate-50">
                    <div className="h-3 w-20 bg-slate-200 rounded mb-2"></div>
                    <div className="h-8 w-20 bg-slate-300 rounded"></div>
                  </div>
                  <div className="border border-slate-100 p-4 rounded-xl bg-slate-50">
                    <div className="h-3 w-24 bg-slate-200 rounded mb-2"></div>
                    <div className="h-8 w-16 bg-slate-300 rounded"></div>
                  </div>
                </div>

                {/* Row 3: Main chart area */}
                <div className="border border-slate-100 p-6 rounded-xl bg-slate-50 h-40 flex flex-col justify-between">
                  <div className="h-3 w-40 bg-slate-200 rounded"></div>
                  <div className="w-full h-24 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:20px_20px] rounded relative overflow-hidden flex items-end">
                    {/* Simulated line graph using custom styling */}
                    <div className="absolute inset-x-0 bottom-4 h-12 border-b-2 border-royal-blue/30 transform -rotate-6"></div>
                    <div className="absolute inset-x-0 bottom-8 h-12 border-b-2 border-royal-blue transform rotate-12"></div>
                  </div>
                </div>

              </div>

              {/* Non-blurred Overlay Alert */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-[2px]">
                <div className="bg-white/95 border border-slate-200 p-8 rounded-2xl shadow-xl max-w-sm mx-auto flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-royal-blue/15 text-royal-blue flex items-center justify-center mb-1">
                    <ClipboardCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-extrabold text-slate-900 text-lg leading-tight">
                    Get Your Custom Audit Report
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Submit the form above to run this automated audit scans on your target website domain.
                  </p>
                  <a 
                    href="#top" 
                    className="inline-flex items-center gap-2 bg-royal-blue text-white px-5 py-2.5 font-bold rounded-lg text-xs hover:bg-royal-blue/90 transition-colors"
                  >
                    <span>Claim Free Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Free SEO Audit FAQs */}
      <FaqAccordion
        title="SEO Audit FAQs"
        badgeText="QUESTIONS ABOUT AUDIT?"
        customFaqs={[
          {
            question: "Is this website SEO audit really free?",
            answer: "Yes, it is 100% free with absolutely no obligation. We manually inspect your website's search performance parameters to show you exactly how to capture more traffic and customers."
          },
          {
            question: "How long does it take to get my SEO report?",
            answer: "Because our digital marketing experts manually inspect and review your site metrics, we deliver the custom PDF report directly to your email inbox within 48 hours."
          },
          {
            question: "What items are analyzed in the audit?",
            answer: "We analyze technical SEO issues, domain authority, organic keyword positioning, mobile speeds, user accessibility parameters, and Google Business Profile mapping configurations."
          }
        ]}
      />
    </>
  );
}
