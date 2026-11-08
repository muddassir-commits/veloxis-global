/**
 * ServicesGrid — Server Component.
 * The four services, for every niche (homepage).
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Target, LayoutTemplate, Search, Bot } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const services = [
  {
    icon: Target,
    title: 'Meta & Google Ads',
    href: '/services/paid-ads',
    desc: 'Campaigns on Facebook, Instagram, Google Search, Shopping and YouTube, set up and tracked so you can see which rupee brought which lead or order.',
    points: ['Conversion tracking done right', 'Weekly budget moves to what works', 'Ad accounts stay in your name'],
    accent: 'bg-indigo-accent/10 text-indigo-accent',
  },
  {
    icon: LayoutTemplate,
    title: 'Websites & Landing Pages',
    href: '/services/high-converting-landing-pages',
    desc: 'Fast, mobile-first websites, landing pages and Shopify store pages that answer the questions buyers ask and make the next step obvious.',
    points: ['Built for phones first', 'Clear call, WhatsApp or buy button', 'Shopify and custom builds'],
    accent: 'bg-teal-accent/10 text-teal-accent',
  },
  {
    icon: Search,
    title: 'SEO & Local SEO',
    href: '/services',
    desc: 'On-page SEO, service and area pages, and Google Business Profile set-up so people find you on Google Search and Maps.',
    points: ['Google Business Profile & Maps', 'Technical and on-page SEO', 'Pages ready for AI search'],
    accent: 'bg-royal-blue/10 text-royal-blue',
  },
  {
    icon: Bot,
    title: 'WhatsApp & AI Automation',
    href: '/services/ai-automation',
    desc: 'Instant WhatsApp replies, follow-ups and reminders, so every enquiry, cart or booking request gets an answer in seconds.',
    points: ['Instant first reply', 'Follow-ups that run themselves', 'Leads in one place (CRM)'],
    accent: 'bg-sunset-orange/10 text-sunset-orange',
  },
];

export const ServicesGrid: React.FC = () => (
  <section className="bg-slate-50 py-section-gap relative border-y border-slate-100" id="services">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="text-center max-w-[700px] mx-auto mb-14 section-reveal">
        <SectionLabel className="text-center">WHAT WE DO</SectionLabel>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
          Four services that work as one growth system
        </h2>
        <p className="text-body-lg text-slate-500 max-w-[600px] mx-auto text-center mt-4">
          Ads bring the right people, the page turns them into enquiries or orders, SEO keeps them coming, and automation
          makes sure nobody waits for a reply.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-reveal">
        {services.map(({ icon: Icon, title, href, desc, points, accent }) => (
          <Link
            key={title}
            href={href}
            className="group spotlight flex flex-col bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
          >
            <span className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${accent}`} aria-hidden="true">
              <Icon className="w-6 h-6" />
            </span>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-royal-blue transition-colors">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-5">{desc}</p>
            <ul className="flex flex-col gap-2 pt-4 border-t border-slate-100 mb-5 flex-grow">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-[13px] font-semibold text-slate-700">
                  <Check className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" strokeWidth={3} aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-royal-blue">
              Learn more <span className="sr-only">about {title}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
      <p className="text-center mt-10 text-sm text-slate-600">
        Not sure which you need?{' '}
        <Link href="/services" className="font-bold text-royal-blue hover:underline">See all services</Link> or{' '}
        <Link href="/free-audit" className="font-bold text-royal-blue hover:underline">ask for a free audit</Link>.
      </p>
    </div>
  </section>
);
