'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionLabel } from '../ui/SectionLabel';
import { useInViewAnimation } from '../../lib/useInViewAnimation';

export const ProcessTimeline: React.FC = () => {
  const { getSectionAnimation, prefersReducedMotion } = useInViewAnimation();

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
    <motion.section 
      {...getSectionAnimation()}
      className="bg-white py-section-gap relative" 
      id="process"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <SectionLabel className="text-center">OUR PROCESS</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
            From Day 1 to Results — Our 5-Step Growth Framework
          </h2>
          <p className="text-body-lg text-slate-500 max-w-[600px] mx-auto text-center mt-4">
            A systematic, transparent approach to scaling your brand's digital footprints.
          </p>
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block relative">
          {/* Timeline background guide line and drawing path */}
          <div className="absolute top-6 left-6 right-6 h-[2px] w-[calc(100%-48px)] -z-10">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 1">
              <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="#f1f5f9" strokeWidth="1" />
              <motion.path
                d="M 0 0.5 L 100 0.5"
                fill="none"
                stroke="#2563eb"
                strokeWidth="1"
                initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Node circle */}
                <motion.div
                  initial={{ scale: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.15 + 0.2, duration: 0.4, type: 'spring', stiffness: 100 }}
                  className="w-12 h-12 rounded-full border-2 border-royal-blue bg-white flex items-center justify-center font-bold text-royal-blue text-lg z-10 shadow-sm"
                >
                  {step.step}
                </motion.div>
                
                {/* Step Content */}
                <motion.div
                  initial={{ y: prefersReducedMotion ? 0 : 20, opacity: prefersReducedMotion ? 1 : 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.15 + 0.3, duration: 0.4 }}
                >
                  <h3 className="font-bold text-slate-900 text-lg mt-6 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-slate-500 leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden relative pl-8 text-left">
          {/* Vertical background guide line and drawing path */}
          <div className="absolute left-6 top-6 bottom-6 w-[2px] h-[calc(100%-48px)] -z-10">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1 100">
              <line x1="0.5" y1="0" x2="0.5" y2="100" stroke="#f1f5f9" strokeWidth="1" />
              <motion.path
                d="M 0.5 0 L 0.5 100"
                fill="none"
                stroke="#2563eb"
                strokeWidth="1"
                initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
            </svg>
          </div>

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 items-start">
                {/* Node Circle */}
                <motion.div
                  initial={{ scale: prefersReducedMotion ? 1 : 0, opacity: prefersReducedMotion ? 1 : 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.1, duration: 0.4 }}
                  className="w-12 h-12 rounded-full border-2 border-royal-blue bg-white flex items-center justify-center font-bold text-royal-blue text-lg z-10 shadow-sm shrink-0"
                >
                  {step.step}
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ x: prefersReducedMotion ? 0 : 20, opacity: prefersReducedMotion ? 1 : 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: prefersReducedMotion ? 0 : index * 0.1 + 0.1, duration: 0.4 }}
                  className="pt-2"
                >
                  <h3 className="font-bold text-slate-900 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body-md text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
