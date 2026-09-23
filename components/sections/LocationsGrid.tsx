/**
 * LocationsGrid — Server Component.
 * Service-area section. Veloxis Global has no public office address, so this lists the
 * markets we work in rather than claiming local offices.
 */
import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const areas = [
  {
    city: 'Noida & Greater Noida',
    desc: 'New launches along the Noida Expressway, Noida Extension (Greater Noida West) and the Yamuna Expressway corridor towards Jewar.',
  },
  {
    city: 'Delhi NCR',
    desc: 'Developers and channel partners across Delhi, Gurugram and Ghaziabad, where buyers compare several micro-markets before shortlisting.',
  },
  {
    city: 'Lucknow',
    desc: 'Residential projects and plotted developments on growth corridors such as Sultanpur Road and Shaheed Path.',
  },
  {
    city: 'Kanpur',
    desc: 'Gated plotted communities and new residential projects for local developers and brokers.',
  },
];

export const LocationsGrid: React.FC = () => (
  <section className="bg-white py-section-gap" id="locations">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="text-center max-w-[700px] mx-auto mb-12 section-reveal">
        <SectionLabel className="text-center">WHERE WE WORK</SectionLabel>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
          Real estate marketing across UP and Delhi NCR
        </h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          We work with developers, brokers and channel partners in these markets, and run campaigns
          for projects elsewhere in India.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {areas.map((a) => (
          <li key={a.city} className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-royal-blue" aria-hidden="true" /> {a.city}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
          </li>
        ))}
      </ul>
      <p className="text-center mt-10 text-sm text-slate-500">
        Working on a project in one of these markets?{' '}
        <Link href="/contact" className="font-bold text-royal-blue hover:underline">Ask for a free audit</Link>.
      </p>
    </div>
  </section>
);
