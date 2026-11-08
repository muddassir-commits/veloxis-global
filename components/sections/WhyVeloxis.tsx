/**
 * WhyVeloxis — Server Component (homepage).
 * Honest proof only: Google certifications, our own published research, the free audit tool,
 * month-to-month terms and ownership of accounts. No client names, results or ratings.
 */
import React from 'react';
import Link from 'next/link';
import { BadgeCheck, FileSearch, CalendarCheck, KeyRound, Users, BarChart3 } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Google certified team',
    desc: 'Certified in Google Ads Search, Google Ads Apps and Google Analytics. Campaigns are planned and checked by the people who hold them.',
  },
  {
    icon: FileSearch,
    title: 'We publish our research',
    desc: 'We checked 749 real estate websites for tracking, WhatsApp links and enquiry forms, and published what we found.',
    link: { href: '/blog/real-estate-landing-page-conversion-hacks#what-sites-miss', label: 'Read the findings' },
  },
  {
    icon: BarChart3,
    title: 'Measured on results',
    desc: 'We report on leads, orders, calls and bookings, with tracking set up first, not on clicks, reach or followers.',
  },
  {
    icon: KeyRound,
    title: 'You own everything',
    desc: 'Ad accounts, website, domain, Google profile and data stay in your name. Ad spend goes straight to Meta and Google.',
  },
  {
    icon: CalendarCheck,
    title: 'Month-to-month',
    desc: 'No lock-in contract. If it is not working for you, you can stop, and you keep everything we built.',
  },
  {
    icon: Users,
    title: 'A small, hands-on team',
    desc: 'You talk to the people doing the work, on WhatsApp, email or a call. No hand-off to junior account managers.',
  },
];

export const WhyVeloxis: React.FC = () => (
  <section className="bg-slate-50 py-section-gap border-y border-slate-100" id="why-veloxis">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="text-center max-w-[700px] mx-auto mb-12 section-reveal">
        <SectionLabel className="text-center">WHY VELOXIS</SectionLabel>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
          No inflated promises. Just the work, measured.
        </h2>
        <p className="text-body-lg text-slate-500 mt-4">
          We are a young agency, so we would rather show you a free audit of your own business than claim results we cannot show.
        </p>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-reveal">
        {reasons.map(({ icon: Icon, title, desc, link }) => (
          <li key={title} className="group spotlight bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
            <span className="w-11 h-11 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center mb-4" aria-hidden="true">
              <Icon className="w-5 h-5" />
            </span>
            <h3 className="font-extrabold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            {link && (
              <Link href={link.href} className="inline-block mt-3 text-sm font-bold text-royal-blue hover:underline">
                {link.label} →
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
