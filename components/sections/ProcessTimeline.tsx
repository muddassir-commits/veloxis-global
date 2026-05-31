/**
 * ProcessTimeline — Server Component.
 * Framer Motion removed. Step nodes use CSS animate-scale-in classes from globals.css.
 * The SVG path line is static (always visible) — the animated drawing was decorative only.
 */
import React from 'react';
import { SectionLabel } from '../ui/SectionLabel';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: '1',
      title: 'Audit & Discovery',
      desc: 'We perform a deep dive into your website, competitors, keyword opportunities, and target audience. No assumptions, only data.'
    },
    {
      step: '2',
      title: 'Strategy Building',
      desc: 'We construct a customized 90-day marketing roadmap mapping out channels, campaigns, budget allocations, and key deliverables.'
    },
    {
      step: '3',
      title: 'Execution',
      desc: 'Our specialists go live. SEO optimizations, certified paid ads setup, content creation, and tracking tags are rolled out simultaneously.'
    },
    {
      step: '4',
      title: 'Optimize & Scale',
      desc: 'We review performance daily, performing A/B tests, expanding keyword targets, and reallocating budget to high-converting channels.'
    },
    {
      step: '5',
      title: 'Report & Grow',
      desc: 'Receive transparent monthly reports in plain English. We review direct lead/revenue outcomes and plan the next scaling steps.'
    }
  ];

  return (
    <section className="bg-white py-section-gap relative" id="process">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20 section-reveal">
          <SectionLabel className="text-center">OUR PROCESS</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
            From Day 1 to Results — Our 5-Step Growth Framework
          </h2>
          <p className="text-body-lg text-slate-500 max-w-[600px] mx-auto text-center mt-4">
            A systematic, transparent approach to scaling your brand&apos;s digital footprints.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block relative">
          {/* Static background guide line */}
          <div className="absolute top-6 left-6 right-6 h-[2px] w-[calc(100%-48px)] -z-10 bg-slate-100" aria-hidden="true" />

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const delayClass = [
                'animate-scale-in',
                'animate-scale-in animate-scale-in-delay-1',
                'animate-scale-in animate-scale-in-delay-2',
                'animate-scale-in animate-scale-in-delay-3',
                'animate-scale-in animate-scale-in-delay-4',
              ][index];

              return (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Node circle */}
                  <div className={`w-12 h-12 rounded-full border-2 border-royal-blue bg-white flex items-center justify-center font-bold text-royal-blue text-lg z-10 shadow-sm ${delayClass}`}>
                    {step.step}
                  </div>

                  {/* Step Content */}
                  <div className="section-reveal">
                    <h3 className="font-bold text-slate-900 text-lg mt-6 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-body-md text-slate-500 leading-relaxed max-w-[200px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden relative pl-8 text-left">
          {/* Static vertical guide line */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] h-[calc(100%-48px)] bg-slate-100 -z-10" aria-hidden="true" />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 items-start">
                {/* Node Circle */}
                <div className={`w-12 h-12 rounded-full border-2 border-royal-blue bg-white flex items-center justify-center font-bold text-royal-blue text-lg z-10 shadow-sm shrink-0 animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {step.step}
                </div>

                {/* Content */}
                <div className="pt-2 section-reveal" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
