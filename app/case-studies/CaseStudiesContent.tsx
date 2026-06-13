'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ArrowRight, Calendar, MapPin, TrendingUp } from 'lucide-react';

import { caseStudies } from '../../data/case-studies';

export default function CaseStudiesContent() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const filters = ['All', 'SEO', 'Google Ads', 'Social Media'];

  const filteredStudies = caseStudies.filter(
    (study) => activeFilter === 'All' || study.serviceCategory === activeFilter
  );

  return (
    <div className="bg-slate-50 font-sans text-left pb-20">
      
      {/* Header Section */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col items-start gap-4">
          <Badge color="teal" className="mb-2">REAL OUTCOMES</Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 leading-tight">
            Performance Marketing Case Studies
          </h1>
          <p className="text-slate-500 max-w-2xl text-sm sm:text-base leading-relaxed">
            Data-backed client campaigns detailing our exact optimization funnels, traffic charts, and Lead acquisition metrics.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-slate-200/60 sticky top-16 md:top-[72px] z-40 py-4">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
            {filters.map((filter) => (
              <button
                key={filter}
                id={`case-studies-filter-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors shrink-0 ${
                  activeFilter === filter
                    ? 'bg-royal-blue text-white'
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Studies Grid */}
      <div className="max-w-container-max mx-auto px-gutter mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div 
              key={study.id} 
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow h-full"
            >
              {/* Graphic Block */}
              <div className="h-48 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-35"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/30 via-transparent to-slate-900/50"></div>
                <div className="text-center relative z-10 p-6 flex flex-col items-center gap-2">
                  <TrendingUp className="w-10 h-10 text-royal-blue" />
                  <span className="text-white font-extrabold text-lg tracking-tight uppercase">
                    {study.metrics[0]}
                  </span>
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge color="teal">{study.industry}</Badge>
                  <Badge color="indigo" className="bg-indigo-accent/15 text-indigo-accent">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {study.location}
                  </Badge>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-3 hover:text-royal-blue transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>{study.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                    {study.challenge}
                  </p>

                  <div className="w-full border-t border-slate-100 my-4"></div>

                  <ul className="flex flex-col gap-2 mb-6">
                    {study.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-royal-blue"></div>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  id={`case-study-card-btn-${study.id}`}
                  href={`/case-studies/${study.slug}`} 
                  variant="outline" 
                  className="w-full text-center"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 inline" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
