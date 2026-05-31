/**
 * CasestudyFeature — Server Component.
 * Framer Motion removed; CSS stagger-reveal handles metric chip animations.
 */
import React from 'react';
import Link from 'next/link';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TrendingUp, ArrowRight } from 'lucide-react';

export const CasestudyFeature: React.FC = () => {
  return (
    <section
      className="bg-slate-900 py-section-gap text-white overflow-hidden"
      id="case-studies"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16 section-reveal">
          <SectionLabel color="teal" className="text-center">PROVEN RESULTS</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-white tracking-tight leading-tight">
            Real Businesses. Real Growth. Real Numbers.
          </h2>
        </div>

        {/* Wide Case Study Card */}
        <Card hoverable={false} className="bg-primary-container border border-white/10 rounded-2xl p-6 sm:p-10 text-left relative overflow-hidden">
          {/* Subtle grid mesh background inside the card */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.03]" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <Badge variant="teal" className="px-3 py-1 font-bold text-xs uppercase tracking-wider bg-teal-accent/10 border border-teal-accent/20 text-teal-accent">
                E-Commerce · Delhi · 5 Months
              </Badge>

              <h3 className="text-2xl sm:text-headline-md font-extrabold text-white leading-tight">
                How We Helped a Delhi E-Commerce Brand Grow 280% Organically
              </h3>

              <div className="text-body-md text-white/70 space-y-3">
                <p>
                  <strong>Challenge:</strong> Zero Google visibility, no digital strategy.
                </p>
                <p>
                  <strong>Strategy:</strong> Technical SEO + Content + Google Ads targeting high-intent buyers.
                </p>
              </div>

              {/* Metric Chips — CSS stagger */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full my-4 stagger-reveal">
                <div className="bg-teal-accent/20 border border-teal-accent/30 rounded-lg px-4 py-3 flex flex-col items-start">
                  <span className="text-xl font-bold text-teal-accent">↑ 280%</span>
                  <span className="text-[10px] font-bold text-teal-accent uppercase tracking-wider mt-0.5">Organic Traffic</span>
                </div>

                <div className="bg-sunset-orange/20 border border-sunset-orange/30 rounded-lg px-4 py-3 flex flex-col items-start">
                  <span className="text-xl font-bold text-sunset-orange">4.8x</span>
                  <span className="text-[10px] font-bold text-sunset-orange uppercase tracking-wider mt-0.5">Return on Ad Spend</span>
                </div>

                <div className="bg-indigo-accent/20 border border-indigo-accent/30 rounded-lg px-4 py-3 flex flex-col items-start">
                  <span className="text-xl font-bold text-indigo-accent">#1 for 12</span>
                  <span className="text-[10px] font-bold text-indigo-accent uppercase tracking-wider mt-0.5">Keywords</span>
                </div>
              </div>

              <Button
                href="/case-studies/delhi-ecommerce-brand"
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover:text-white"
              >
                Read Full Case Study →
              </Button>
            </div>

            {/* Right Column — static SVG chart */}
            <div className="lg:col-span-5 relative w-full h-[320px] bg-slate-900/50 border border-white/5 rounded-xl flex items-center justify-center p-6 overflow-hidden">
              <div className="w-full h-full flex flex-col justify-between">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/5 pb-2">
                  <span className="font-semibold">Performance (Last 6 Months)</span>
                  <span className="text-teal-accent flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
                    +342.1%
                  </span>
                </div>

                <div className="flex-grow flex items-center justify-center relative py-2">
                  <svg viewBox="0 0 400 200" className="w-full h-full" aria-hidden="true">
                    <defs>
                      <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0d9488" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Grid Lines */}
                    <line x1="0" y1="160" x2="400" y2="160" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="110" x2="400" y2="110" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="60" x2="400" y2="60" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Gradient Fill */}
                    <path
                      d="M 0 170 C 50 170, 80 150, 120 155 C 160 160, 200 110, 240 100 C 280 90, 320 30, 400 20 L 400 200 L 0 200 Z"
                      fill="url(#chart-grad)"
                    />
                    {/* Curve */}
                    <path
                      d="M 0 170 C 50 170, 80 150, 120 155 C 160 160, 200 110, 240 100 C 280 90, 320 30, 400 20"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="400" cy="20" r="5" fill="#0d9488" />
                    <circle cx="240" cy="100" r="4" fill="#0d9488" />
                  </svg>
                </div>
              </div>

              {/* Floating Comparison Card */}
              <div className="absolute bottom-4 right-4 bg-slate-900 border border-white/10 rounded-lg p-3 shadow-2xl z-20 w-[180px]">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Before/After</h4>
                <table className="w-full text-[11px] text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="pb-1 font-semibold">Metric</th>
                      <th className="pb-1 font-semibold text-right">Pre</th>
                      <th className="pb-1 font-bold text-right text-teal-accent">Post</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-1 text-slate-300">Visits/mo</td>
                      <td className="py-1 text-right text-slate-500">1.2k</td>
                      <td className="py-1 text-right font-bold text-teal-accent">35.4k</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-1 text-slate-300">Leads/mo</td>
                      <td className="py-1 text-right text-slate-500">18</td>
                      <td className="py-1 text-right font-bold text-teal-accent">142</td>
                    </tr>
                    <tr>
                      <td className="py-1 text-slate-300">CPL</td>
                      <td className="py-1 text-right text-slate-500">₹850</td>
                      <td className="py-1 text-right font-bold text-teal-accent">₹210</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 font-bold text-base text-royal-blue hover:text-indigo-accent transition-colors group"
          >
            <span>View All 25+ Case Studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
