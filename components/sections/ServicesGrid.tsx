/**
 * ServicesGrid — Server Component (no client-side dependencies needed).
 * Clean gradient cards with emoji icons for real estate service focus.
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesData as services } from '../../data/services-data';
import { Card } from '../ui/Card';
import { SectionLabel } from '../ui/SectionLabel';
import { ImageFrame } from '../ui/ImageFrame';

const serviceVisuals = [
  {
    image: '/images/people/home/real-estate-landing-page-mockup.jpg',
    alt: 'Sample real estate project landing page on a laptop and phone, with price, RERA number and site-visit form',
    position: 'center',
    accentBg: 'bg-blue-50',
    accentText: 'text-blue-700',
  },
  {
    image: '/images/people/home/team-reviewing-laptops.jpg',
    alt: 'Team gathered around two laptops reviewing work at an office desk',
    position: 'center 40%',
    accentBg: 'bg-violet-50',
    accentText: 'text-violet-700',
  },
  {
    image: '/images/people/home/whatsapp-chatbot-mockup.jpg',
    alt: 'Sample WhatsApp chatbot sending a brochure, asking the budget and booking a site visit, beside a lead inbox',
    position: 'center',
    accentBg: 'bg-emerald-50',
    accentText: 'text-emerald-700',
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section className="bg-white py-section-gap relative" id="services">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16 section-reveal">
          <SectionLabel className="text-center">WHAT WE DO</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
            Three real estate marketing services that work as one system
          </h2>
          <p className="text-body-lg text-slate-500 max-w-[600px] mx-auto text-center mt-4">
            A page that converts, ads that bring exclusive enquiries, and automation that replies to every lead — run together and judged on site visits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-reveal">
          {services.map((service, idx) => {
            const visual = serviceVisuals[idx] || serviceVisuals[0];
            return (
              <div key={service.id} className="h-full">
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card hover className="flex flex-col items-start text-left h-full p-0 overflow-hidden">
                    {/* Top image — fixed 16:10 box, photo cropped to the same ratio */}
                    <ImageFrame
                      src={visual.image}
                      alt={visual.alt}
                      ratio="16/10"
                      position={visual.position}
                      sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 50vw, 400px"
                      className="!rounded-none"
                      imageClassName="transition-transform duration-500 group-hover:scale-[1.04]"
                    />

                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-royal-blue transition-colors duration-300 mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-body-md text-slate-500 leading-relaxed flex-grow mb-6">
                        {service.shortDesc}
                      </p>

                      {/* Benefits chips */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                          <span key={bIdx} className={`text-[11px] font-semibold ${visual.accentBg} ${visual.accentText} rounded-full px-3 py-1`}>
                            {benefit}
                          </span>
                        ))}
                      </div>

                      {/* Explore Link */}
                      <div className="inline-flex items-center gap-1.5 font-bold text-sm text-royal-blue transition-colors duration-300 mt-auto">
                        <span>{service.title}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
