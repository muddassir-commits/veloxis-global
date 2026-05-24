'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { SectionLabel } from '../ui/SectionLabel';
import { ArrowRight } from 'lucide-react';
import { useInViewAnimation } from '../../lib/useInViewAnimation';

export const LocationsGrid: React.FC = () => {
  const { getSectionAnimation, getStaggerContainer, getStaggerChild } = useInViewAnimation();

  const locations = [
    {
      city: 'Delhi',
      borderClass: 'border-l-4 border-l-royal-blue',
      desc: 'Serving South Delhi, Connaught Place, Rohini, Dwarka, Saket & all NCR. Specialists in scaling real estate, retail, healthcare & education sectors.',
      tags: ['Real Estate', 'Healthcare', 'Retail', 'Education'],
      href: '/digital-marketing-agency-delhi'
    },
    {
      city: 'Noida',
      borderClass: 'border-l-4 border-l-teal-accent',
      desc: 'IT companies, tech startups, real estate, & co-working spaces in Sector 62, Sector 18, Greater Noida, and Noida Extension. Growth marketing that converts.',
      tags: ['IT & Tech', 'Startups', 'Real Estate', 'SaaS'],
      href: '/digital-marketing-agency-noida'
    },
    {
      city: 'Lucknow',
      borderClass: 'border-l-4 border-l-indigo-accent',
      desc: 'Helping heritage businesses and modern brands in Gomti Nagar, Hazratganj, Indira Nagar, and Alambagh capture leads and compete online in 2026.',
      tags: ['Healthcare', 'Education', 'Hospitality', 'Retail'],
      href: '/digital-marketing-agency-lucknow'
    },
    {
      city: 'Kanpur',
      borderClass: 'border-l-4 border-l-sunset-orange',
      desc: 'Digital growth for Kanpur\'s textile, B2B manufacturing, leather, and MSME businesses. Industry-specific strategies built for local industrial players.',
      tags: ['Textile', 'Manufacturing', 'MSME', 'Leather'],
      href: '/digital-marketing-agency-kanpur'
    }
  ];

  return (
    <motion.section 
      {...getSectionAnimation()}
      className="bg-white py-section-gap" 
      id="locations"
    >
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <SectionLabel className="text-center">WHERE WE OPERATE</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
            We Serve Businesses Across India
          </h2>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            Headquartered in Kanpur with deep expertise in Delhi, Noida,
            Lucknow & Kanpur — and serving clients remotely across India.
          </p>
        </div>

        {/* Locations Grid */}
        <motion.div 
          {...getStaggerContainer(0.1)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {locations.map((loc, idx) => (
            <motion.div key={idx} {...getStaggerChild()} className="h-full">
              <Link href={loc.href} className="group block h-full">
                <Card 
                  hover 
                  className={`flex flex-col items-start text-left h-full border border-slate-100 bg-white p-8 ${loc.borderClass}`}
                >
                {/* City Name */}
                <h3 className="text-headline-md font-bold text-slate-900 group-hover:text-royal-blue transition-colors duration-300 mb-3">
                  {loc.city}
                </h3>

                {/* Description */}
                <p className="text-body-md text-slate-500 leading-relaxed mb-6 flex-grow">
                  {loc.desc}
                </p>

                {/* Industry Tag Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {loc.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-bold bg-slate-50 border border-slate-100 text-slate-600 rounded px-2 py-0.5 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow Link */}
                <div className="inline-flex items-center gap-1.5 font-bold text-sm text-royal-blue transition-colors duration-300 mt-auto">
                  <span>Explore {loc.city} Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </motion.section>
  );
};
