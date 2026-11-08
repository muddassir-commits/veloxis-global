import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { ImageFrame } from '../ui/ImageFrame';
import { industries } from '../../data/industries';

// "Industries we serve": three equal cards (homepage and the /industries hub).
export const IndustriesStrip: React.FC<{ title?: string; intro?: string; headingLevel?: 'h2' | 'h1'; className?: string }> = ({
  title = 'Three industries, one way of working',
  intro = 'E-commerce brands, local businesses and real estate sell in different ways. We plan each account around how its customers actually buy, and report on the result that matters for it.',
  headingLevel = 'h2',
  className = 'bg-white',
}) => {
  const Heading = headingLevel;
  return (
    <section className={`py-20 ${className}`} aria-labelledby="industries-heading">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center max-w-2xl mx-auto mb-12 section-reveal">
          <span className="text-xs font-bold text-royal-blue uppercase tracking-widest block mb-3">Industries we serve</span>
          <Heading id="industries-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </Heading>
          <p className="text-slate-500 mt-4 leading-relaxed">{intro}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-reveal">
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group spotlight flex flex-col bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              <ImageFrame
                src={ind.image}
                alt={ind.alt}
                ratio="16/10"
                sizes="(max-width: 768px) calc(100vw - 32px), (max-width: 1024px) 50vw, 400px"
                className="!rounded-none"
                imageClassName="transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="p-6 flex flex-col gap-2 flex-grow">
                <span className="text-xs font-bold text-royal-blue uppercase tracking-wider">{ind.eyebrow}</span>
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-royal-blue transition-colors">{ind.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{ind.desc}</p>
                <ul className="flex flex-col gap-2 mt-3 mb-2 flex-grow">
                  {ind.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <Check className="w-4 h-4 text-teal-600 shrink-0" strokeWidth={3} aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-royal-blue">
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
};
