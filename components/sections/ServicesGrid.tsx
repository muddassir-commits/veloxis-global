'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, Share2, DollarSign, PenTool, Code, Mail, ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { Card } from '../ui/Card';
import { SectionLabel } from '../ui/SectionLabel';
import { useInViewAnimation } from '../../lib/useInViewAnimation';

export const ServicesGrid: React.FC = () => {
  const { getSectionAnimation, getStaggerContainer, getStaggerChild } = useInViewAnimation();

  // Map string to Lucide component
  const iconMap: Record<string, any> = {
    Search: Search,
    Share2: Share2,
    DollarSign: DollarSign,
    PenTool: PenTool,
    Code: Code,
    Mail: Mail,
  };

  return (
    <motion.section 
      {...getSectionAnimation()}
      className="bg-slate-50 py-section-gap relative" 
      id="services"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionLabel className="text-center">OUR SERVICES</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
            Everything Your Business Needs to Dominate Digital in 2026
          </h2>
          <p className="text-body-lg text-slate-500 max-w-[600px] mx-auto text-center mt-4">
            Six specialized services. One unified strategy. Consistent growth.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          {...getStaggerContainer(0.1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Search;
            
            // Determine color theme: alternate between teal, indigo, orange based on index
            const themeIndex = idx % 3;
            let iconWrapperClass = '';
            
            if (themeIndex === 0) {
              iconWrapperClass = 'bg-teal-accent/10 text-teal-accent';
            } else if (themeIndex === 1) {
              iconWrapperClass = 'bg-indigo-accent/10 text-indigo-accent';
            } else {
              iconWrapperClass = 'bg-sunset-orange/10 text-sunset-orange';
            }

            return (
              <motion.div key={service.id} {...getStaggerChild()} className="h-full">
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card hover className="flex flex-col items-start text-left h-full">
                    {/* Icon Wrapper */}
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${iconWrapperClass}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-headline-md font-semibold text-slate-900 group-hover:text-royal-blue transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body-md text-slate-500 mt-3 leading-relaxed flex-grow line-clamp-2">
                      {service.shortDesc}
                    </p>

                    {/* Explore Link */}
                    <div className="inline-flex items-center gap-1.5 font-medium text-royal-blue mt-6 transition-colors duration-300">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
