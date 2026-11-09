/**
 * EcommerceSystem — Server Component (homepage).
 * How we grow a store: bring buyers, convert them, bring them back. No results or client claims.
 */
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Megaphone, ShoppingCart, Repeat } from 'lucide-react';
import { SectionLabel } from '../ui/SectionLabel';

const stages = [
  {
    icon: Megaphone,
    label: 'Bring buyers',
    title: 'Ads judged on orders',
    desc: 'Meta, Google Shopping and Performance Max, with purchase tracking and the Conversions API set up before any budget goes live.',
    links: [
      { href: '/services/paid-ads', label: 'Meta & Google ads' },
      { href: '/services/ecommerce-marketing', label: 'E-commerce marketing' },
    ],
  },
  {
    icon: ShoppingCart,
    label: 'Convert visitors',
    title: 'A store that makes buying easy',
    desc: 'Shopify builds and fixes, faster mobile pages, clearer product pages and a checkout with fewer reasons to leave.',
    links: [
      { href: '/services/shopify-development', label: 'Shopify development' },
      { href: '/services/conversion-rate-optimization', label: 'Conversion optimisation' },
    ],
  },
  {
    icon: Repeat,
    label: 'Bring them back',
    title: 'The second order costs less',
    desc: 'Abandoned cart messages, post-purchase flows and repeat-order campaigns on email and WhatsApp, sent to people who opted in.',
    links: [{ href: '/services/email-whatsapp-marketing', label: 'Email & WhatsApp marketing' }],
  },
];

export const EcommerceSystem: React.FC = () => (
  <section className="bg-white py-section-gap" aria-labelledby="ecommerce-system-heading">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="max-w-[720px] mb-12 section-reveal">
        <SectionLabel>YOUR OUTSOURCED GROWTH TEAM</SectionLabel>
        <h2 id="ecommerce-system-heading" className="text-headline-lg-mobile sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight">
          You run the product. We run the sales engine.
        </h2>
        <p className="text-body-lg text-slate-500 mt-4">
          Ads, store and retention usually sit with three different vendors, and nobody owns the order count. We run all three as one system and show you which channel brought which sale.
        </p>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-reveal">
        {stages.map(({ icon: Icon, label, title, desc, links }, i) => (
          <li key={label} className="flex flex-col bg-slate-50 border border-slate-100 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-11 h-11 rounded-xl bg-royal-blue/10 text-royal-blue flex items-center justify-center" aria-hidden="true">
                <Icon className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">
                Step {i + 1} · {label}
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-grow">{desc}</p>
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="group inline-flex items-center gap-1.5 min-h-[44px] text-sm font-bold text-royal-blue hover:underline">
                    {l.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
