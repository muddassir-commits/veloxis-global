/**
 * LocationsGrid — Server Component.
 * Service-area section. Veloxis Global has no public office address, so this lists the
 * markets we work in rather than claiming local offices.
 */
import React from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';
import { ImageFrame } from '../ui/ImageFrame';

const areas: { city: string; desc: string; href?: string; linkText?: string }[] = [
  {
    city: 'Noida & Greater Noida',
    href: '/digital-marketing-agency-noida',
    linkText: 'Digital marketing in Noida',
    desc: 'Where we are based. Online brands, clinics, local services and property businesses across Noida, Greater Noida and the Expressway.',
  },
  {
    city: 'Delhi NCR',
    desc: 'Businesses across Delhi, Gurugram and Ghaziabad that want more enquiries from Google, Meta and WhatsApp.',
  },
  {
    city: 'Lucknow',
    href: '/digital-marketing-agency-lucknow',
    linkText: 'Digital marketing in Lucknow',
    desc: 'Local businesses, growing brands and real estate projects in Lucknow, run remotely with calls whenever you need them.',
  },
  {
    city: 'Kanpur',
    href: '/digital-marketing-agency-kanpur',
    linkText: 'Digital marketing in Kanpur',
    desc: 'Shops, clinics, manufacturers selling online and property developers in Kanpur.',
  },
];

export const LocationsGrid: React.FC = () => (
  <section className="bg-white py-section-gap" id="locations">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="text-center max-w-[700px] mx-auto mb-12 section-reveal">
        <SectionLabel className="text-center">WHERE WE WORK</SectionLabel>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
          Cities we serve
        </h2>
        <p className="text-body-md text-on-surface-variant leading-relaxed">
          Based in Noida, working with businesses across Delhi NCR and Uttar Pradesh. Most work is remote, so we
          also run accounts for brands elsewhere in India, the UK and the US.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-10 items-center">
        <ImageFrame
          src="/images/people/home/home-buyer-browsing-laptop.jpg"
          alt="Woman sitting on a sofa at home, browsing on her laptop"
          ratio="1/1"
          position="center 40%"
          sizes="(max-width: 1024px) calc(100vw - 32px), 480px"
          className="max-w-[480px] mx-auto lg:max-w-none"
        />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-reveal">
          {areas.map((a) => (
            <li key={a.city} className="group spotlight rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-bold text-slate-900 text-lg mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-royal-blue transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-125" aria-hidden="true" /> {a.city}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              {a.href && (
                <Link href={a.href} className="inline-block mt-3 text-sm font-bold text-royal-blue hover:underline">
                  {a.linkText ?? `Marketing in ${a.city}`} →
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p className="text-center mt-10 text-sm text-slate-500">
        In one of these cities, or somewhere else?{' '}
        <Link href="/free-audit" className="font-bold text-royal-blue hover:underline">Ask for a free audit</Link>.
      </p>
    </div>
  </section>
);
