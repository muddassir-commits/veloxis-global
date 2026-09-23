/**
 * LocationsGrid — Server Component.
 * Framer Motion removed; CSS stagger-reveal handles card animations.
 */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { SectionLabel } from '../ui/SectionLabel';
import { ArrowRight } from 'lucide-react';

export const LocationsGrid: React.FC = () => {
  const locations = [
    {
      city: 'Delhi',
      image: '/images/locations/location-delhi.jpg',
      borderClass: 'border-l-4 border-l-royal-blue',
      desc: 'Serving luxury developers and premium real estate consultants across South Delhi, Central Delhi, and Dwarka.',
      tags: ['Luxury Real Estate', 'Property Portals', 'Developers'],
      href: '/contact'
    },
    {
      city: 'Noida',
      image: '/images/locations/location-noida.jpg',
      borderClass: 'border-l-4 border-l-teal-accent',
      desc: 'Partnering with commercial and residential builders in Sector 150, Expressway, and Central Noida to drive qualified site visits.',
      tags: ['Commercial', 'Residential', 'Channel Partners'],
      href: '/contact'
    },
    {
      city: 'Greater Noida',
      image: '/images/locations/location-greater-noida.jpg',
      borderClass: 'border-l-4 border-l-indigo-accent',
      desc: 'Helping new project launches and township developers in Greater Noida West (Noida Extension) scale their sales fast.',
      tags: ['New Launches', 'Townships', 'Plots'],
      href: '/contact'
    }
  ];

  return (
    <section className="bg-white py-section-gap" id="locations">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16 section-reveal">
          <SectionLabel className="text-center">WHERE WE OPERATE</SectionLabel>
          <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Dominating the Delhi NCR Market
          </h2>
          <p className="text-body-md text-on-surface-variant leading-relaxed">
            We don't do pan-India. We focus exclusively on the Delhi, Noida, and Greater Noida real estate markets to deliver unparalleled local expertise.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-reveal">
          {locations.map((loc, idx) => (
            <div key={idx} className="h-full">
              <Link href={loc.href} className="group block h-full">
                <Card
                  hover
                  className={`flex flex-col items-start text-left h-full border border-slate-100 bg-white p-0 overflow-hidden ${loc.borderClass}`}
                >
                  {/* City Image */}
                  <div className="w-full h-36 relative overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`${loc.city} skyline`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col items-start text-left flex-grow w-full p-8">
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
                      <span>Explore NCR Growth Plans</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

