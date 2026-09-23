/**
 * AudienceSplit — Server Component.
 * "Who we help" block linking to the developer and channel partner pages.
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Users } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const audiences = [
  {
    href: '/industries/real-estate',
    icon: Building2,
    title: 'Developers & builders',
    desc: 'Launch campaigns, project microsites and lead follow-up for new launches and unsold inventory — with your CP network included.',
    cta: 'Marketing for developers',
  },
  {
    href: '/channel-partners',
    icon: Users,
    title: 'Channel partners & brokers',
    desc: 'Exclusive leads for the projects you’re mandated on, pages under your brand, and a timestamped record of every lead you bring.',
    cta: 'Marketing for channel partners',
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {audiences.map(({ href, icon: Icon, title, desc, cta }) => (
          <Link key={href} href={href} className="group bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow flex flex-col">
            <Icon className="w-8 h-8 text-royal-blue mb-5" aria-hidden="true" />
            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-royal-blue">{title}</h3>
            <p className="text-slate-600 leading-relaxed flex-grow">{desc}</p>
            <span className="inline-flex items-center gap-1.5 mt-6 font-bold text-sm text-royal-blue">
              {cta} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
