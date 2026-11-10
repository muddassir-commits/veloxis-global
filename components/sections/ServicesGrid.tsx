/**
 * ServicesGrid — Server Component.
 * Every service, e-commerce first (homepage).
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Target, LayoutTemplate, Search, Bot, ShoppingBag, Store, MousePointerClick, Mail, Package, Share2 } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const services = [
  {
    icon: ShoppingBag,
    title: 'E-commerce Marketing',
    href: '/services/ecommerce-marketing',
    desc: 'One plan across ads, store and repeat orders, run as your outsourced growth team and reported on orders and cost per order.',
    points: ['Full-funnel growth plan', 'Purchase tracking set up first', 'One weekly report'],
    accent: 'from-royal-blue to-blue-400',
  },
  {
    icon: Target,
    title: 'Meta & Google Ads',
    href: '/services/paid-ads',
    desc: 'Campaigns on Facebook, Instagram, Google Search, Shopping and YouTube, set up and tracked so you can see which rupee brought which lead or order.',
    points: ['Conversion tracking done right', 'Weekly budget moves to what works', 'Ad accounts stay in your name'],
    accent: 'from-indigo-accent to-violet-400',
  },
  {
    icon: Store,
    title: 'Shopify Development',
    href: '/services/shopify-development',
    desc: 'New Shopify stores, redesigns and speed fixes, built for phones and for the way Indian buyers pay.',
    points: ['Store builds and redesigns', 'COD and prepaid setup', 'Apps kept to what you need'],
    accent: 'from-teal-accent to-emerald-400',
  },
  {
    icon: MousePointerClick,
    title: 'Conversion Optimisation',
    href: '/services/conversion-rate-optimization',
    desc: 'Find where shoppers drop off, fix product pages and checkout, and test the changes before rolling them out.',
    points: ['Funnel and session review', 'Product page fixes', 'Tested changes'],
    accent: 'from-sunset-orange to-amber-400',
  },
  {
    icon: Mail,
    title: 'Email & WhatsApp Marketing',
    href: '/services/email-whatsapp-marketing',
    desc: 'Abandoned cart, order updates and repeat-purchase flows on the two channels Indian shoppers actually read.',
    points: ['Cart and browse recovery', 'Post-purchase flows', 'Opt-in and consent handled'],
    accent: 'from-indigo-accent to-violet-400',
  },
  {
    icon: Package,
    title: 'Amazon Marketing',
    href: '/services/amazon-marketing',
    desc: 'Listings and Sponsored Ads run against your margin and stock, so you know which products make money.',
    points: ['Listing optimisation', 'Sponsored Ads', 'Stock-aware budgets'],
    accent: 'from-sunset-orange to-amber-400',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    href: '/services/social-media-marketing',
    desc: 'Content plans, Reels and community replies that make your brand familiar and support your sales.',
    points: ['Monthly content plan', 'Reels and short videos', 'Comments and DMs handled'],
    accent: 'from-teal-accent to-emerald-400',
  },
  {
    icon: LayoutTemplate,
    title: 'Websites & Landing Pages',
    href: '/services/high-converting-landing-pages',
    desc: 'Fast, mobile-first websites, landing pages and Shopify store pages that answer the questions buyers ask and make the next step obvious.',
    points: ['Built for phones first', 'Clear call, WhatsApp or buy button', 'Shopify and custom builds'],
    accent: 'from-teal-accent to-emerald-400',
  },
  {
    icon: Search,
    title: 'SEO & Local SEO',
    href: '/services/seo',
    desc: 'On-page SEO, service and area pages, and Google Business Profile set-up so people find you on Google Search and Maps.',
    points: ['Google Business Profile & Maps', 'Technical and on-page SEO', 'Pages ready for AI search'],
    accent: 'from-royal-blue to-blue-400',
  },
  {
    icon: Bot,
    title: 'WhatsApp & AI Automation',
    href: '/services/ai-automation',
    desc: 'Instant WhatsApp replies, follow-ups and reminders, so every enquiry, cart or booking request gets an answer in seconds.',
    points: ['Instant first reply', 'Follow-ups that run themselves', 'Leads in one place (CRM)'],
    accent: 'from-sunset-orange to-amber-400',
  },
];

export const ServicesGrid: React.FC = () => (
  <section className="bg-slate-50 py-section-gap relative border-y border-slate-100" id="services">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="text-center max-w-[700px] mx-auto mb-14 section-reveal">
        <SectionLabel className="text-center">WHAT WE DO</SectionLabel>
        <h2 className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
          Everything an online store needs to grow
        </h2>
        <p className="text-body-lg text-slate-500 max-w-[600px] mx-auto text-center mt-4">
          Ads bring the right people, the store turns them into orders, retention brings them back, and SEO and automation
          keep it all running. Take one service or the whole system.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 stagger-reveal">
        {services.map(({ icon: Icon, title, href, desc, points, accent }) => (
          <Link
            key={title}
            href={href}
            className="group relative flex gap-5 sm:gap-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300"
          >
            <span
              className={`shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${accent} text-white flex items-center justify-center shadow-lg shadow-slate-900/10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3`}
              aria-hidden="true"
            >
              <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">{title}</h3>
                <ArrowRight
                  className="w-5 h-5 mt-1 shrink-0 text-slate-300 transition-all duration-300 group-hover:text-royal-blue group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-[15px] text-slate-600 leading-relaxed">{desc}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {points.map((p) => (
                  <li
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700"
                  >
                    <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" strokeWidth={3} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <span className="sr-only">Learn more about {title}</span>
            </div>
          </Link>
        ))}
      </div>
      <p className="text-center mt-12 text-sm text-slate-600">
        Not sure which you need?{' '}
        <Link href="/services" className="font-bold text-royal-blue hover:underline">See all services</Link> or{' '}
        <Link href="/free-audit" className="font-bold text-royal-blue hover:underline">ask for a free audit</Link>.
      </p>
    </div>
  </section>
);
