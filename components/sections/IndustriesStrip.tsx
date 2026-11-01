import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ImageFrame } from '../ui/ImageFrame';

// Homepage "who we work with": real estate stays the first and largest card (main focus and
// where the site's rankings are), then D2C brands and local businesses.
const industries = [
  {
    href: '/real-estate-lead-system',
    eyebrow: 'Main focus',
    title: 'Real estate',
    desc: 'Project landing pages, Meta and Google ads and instant WhatsApp replies for developers, brokers and channel partners. Measured on site visits.',
    image: '/images/people/home/home-buyer-browsing-laptop.jpg',
    alt: 'A home buyer browsing property listings on a laptop',
    cta: 'See the Real Estate Lead System',
  },
  {
    href: '/d2c',
    eyebrow: 'Online brands',
    title: 'D2C brands',
    desc: 'Meta ads, store pages that convert and WhatsApp and email follow-ups. Measured on orders, not clicks.',
    image: '/images/people/blog/web-man-phone-website.jpg',
    alt: 'A man browsing an online store on his smartphone',
    cta: 'Marketing for D2C brands',
  },
  {
    href: '/local-business',
    eyebrow: 'India, UK & US',
    title: 'Local businesses',
    desc: 'Websites, local SEO and Google Business Profile for clinics, salons, trades and shops. Measured on calls.',
    image: '/images/people/blog/local-seo-woman-phone-call.jpg',
    alt: 'A woman calling a local business from her phone',
    cta: 'Websites for local businesses',
  },
];

export const IndustriesStrip: React.FC = () => (
  <section className="py-20 bg-white" aria-labelledby="industries-heading">
    <div className="max-w-container-max mx-auto px-gutter">
      <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
        <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">Who we work with</span>
        <h2 id="industries-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Three industries we know well
        </h2>
        <p className="text-slate-500 mt-4 leading-relaxed">
          Real estate is our main focus. We also bring the same approach to D2C brands and local businesses.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-reveal">
        {industries.map((ind, i) => (
          <Link
            key={ind.href}
            href={ind.href}
            className={`group spotlight flex flex-col bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1 ${i === 0 ? 'lg:ring-2 lg:ring-royal-blue/30' : ''}`}
          >
            <ImageFrame src={ind.image} alt={ind.alt} ratio="16/10" sizes="(max-width: 1024px) 100vw, 33vw" />
            <div className="p-6 flex flex-col gap-2 flex-grow">
              <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">{ind.eyebrow}</span>
              <h3 className="text-xl font-extrabold text-slate-900">{ind.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-grow">{ind.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-royal-blue">
                {ind.cta}
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
