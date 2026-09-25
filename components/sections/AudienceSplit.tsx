/**
 * AudienceSplit — Server Component.
 * "Who we help" block linking to the developer and channel partner pages.
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Users } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { ImageFrame } from '../ui/ImageFrame';

const audiences = [
  {
    href: '/industries/real-estate',
    icon: Building2,
    title: 'Developers & builders',
    desc: 'Launch campaigns, project microsites and lead follow-up for new launches and unsold inventory — with your CP network included.',
    cta: 'Marketing for developers',
    image: '/images/people/home/site-supervisor-hard-hat.jpg',
    alt: 'Site supervisor in a safety vest holding a hard hat at a construction site',
    position: 'center 45%',
  },
  {
    href: '/channel-partners',
    icon: Users,
    title: 'Channel partners & brokers',
    desc: 'Exclusive leads for the projects you’re mandated on, pages under your brand, and a timestamped record of every lead you bring.',
    cta: 'Marketing for channel partners',
    image: '/images/people/home/agent-couple-paperwork.jpg',
    alt: 'Property agent going through paperwork with a couple at a table',
    position: 'center 40%',
  },
];

export const AudienceSplit: React.FC = () => (
  <section className="bg-slate-50 py-section-gap" id="who-we-help">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="text-center max-w-[700px] mx-auto mb-12 section-reveal">
        <SectionLabel className="text-center">WHO WE HELP</SectionLabel>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
          Built for the people who actually sell property
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-reveal">
        {audiences.map(({ href, icon: Icon, title, desc, cta, image, alt, position }) => (
          <Link key={href} href={href} className="group spotlight bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col">
            <ImageFrame
              src={image}
              alt={alt}
              ratio="16/9"
              position={position}
              sizes="(max-width: 768px) calc(100vw - 32px), 600px"
              className="!rounded-none"
              imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="p-8 flex flex-col flex-grow">
              <Icon className="w-8 h-8 text-royal-blue mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true" />
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-royal-blue transition-colors">{title}</h3>
              <p className="text-slate-600 leading-relaxed flex-grow">{desc}</p>
              <span className="inline-flex items-center gap-1.5 mt-6 font-bold text-sm text-royal-blue">
                {cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
