import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';
import { type CityData, cityServices } from '../../data/cities';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Breadcrumb } from '../ui/Breadcrumb';
import { ImageFrame } from '../ui/ImageFrame';
import { ReviewedLine } from '../ui/ReviewedLine';
import { FaqAccordion } from '../sections/FaqAccordion';
import { CtaBanner } from '../sections/CtaBanner';

/** "Digital Marketing Agency in <City>": hero, intro, 4 services, 3 niches (real estate with local details), areas served, FAQ. */
export const CityPageTemplate: React.FC<{ city: CityData }> = ({ city: c }) => {
  const img = c.images;
  return (
    <>
      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: c.breadcrumb, href: c.path }]} />
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24 text-left">
        <Image src={img.hero.src} alt={img.hero.alt} fill priority fetchPriority="high" sizes="100vw" className="object-cover hero-kenburns" style={{ objectPosition: img.hero.position ?? 'center' }} quality={80} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.92)] via-[rgba(15,23,42,0.8)] to-[rgba(15,23,42,0.55)]" aria-hidden="true" />
        <div className="relative z-10 max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl flex flex-col items-start">
            <Badge variant="teal" className="mb-4 !bg-white/10 !text-white border border-white/20 backdrop-blur-sm">{c.eyebrow.toUpperCase()}</Badge>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 break-words">{c.h1}</h1>
            <p className="text-base sm:text-body-lg text-white/80 leading-relaxed mb-3">{c.lead}</p>
            <ReviewedLine className="text-white/60 mb-8" />
            <Button id={`city-hero-cta-${c.key}`} href="/free-audit" variant="primary">Get a free marketing audit →</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex flex-col gap-4">
            {c.intro.map((p, i) => (
              <p key={i} className="text-slate-700 leading-relaxed text-base sm:text-lg">{p}</p>
            ))}
          </div>
          <ImageFrame src={img.intro.src} alt={img.intro.alt} ratio="4/3" position={img.intro.position} sizes="(max-width: 1024px) 100vw, 600px" className="shadow-sm" />
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-y border-slate-200/60">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Our services in {c.city}</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">Take one, or combine them. Everything starts with a free audit.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityServices(c.city).map((s) => (
              <Link key={s.href} href={s.href} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-royal-blue transition-colors">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{s.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-bold text-royal-blue">Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Who we work with in {c.city}</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">Three kinds of business, each with its own plan and its own success measure.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.niches.map((n) => (
              <div key={n.title} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col">
                <h3 className="font-bold text-lg text-slate-900 mb-2">{n.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-grow">{n.desc}</p>
                <Link href={n.href} className="group inline-flex items-center gap-1 mt-4 text-sm font-bold text-royal-blue hover:underline">
                  {n.linkLabel} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{c.realEstate.heading}</h2>
            <p className="text-slate-700 leading-relaxed text-base sm:text-lg">{c.realEstate.intro}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.realEstate.areas.map((a) => (
              <div key={a.title} className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-600">
            More on the <Link href="/industries/real-estate" className="text-royal-blue font-semibold underline">real estate service</Link>,{' '}
            <Link href="/real-estate-lead-system" className="text-royal-blue font-semibold underline">the Real Estate Lead System</Link> and{' '}
            <Link href="/channel-partners" className="text-royal-blue font-semibold underline">marketing for channel partners</Link>.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ImageFrame src={img.extra.src} alt={img.extra.alt} ratio="4/3" position={img.extra.position} sizes="(max-width: 1024px) 100vw, 600px" className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">{c.areasServed.heading}</h2>
            <p className="text-slate-600 leading-relaxed mb-6">{c.areasServed.intro}</p>
            <ul className="flex flex-wrap gap-2">
              {c.areasServed.areas.map((a) => (
                <li key={a} className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 text-sm font-semibold text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" aria-hidden="true" /> {a}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-600">
              Not sure which service fits? <Link href="/tools/website-audit" className="text-royal-blue font-semibold underline">Run the free website audit</Link> or{' '}
              <Link href="/free-audit" className="text-royal-blue font-semibold underline">ask for a personal review</Link>.
            </p>
          </div>
        </div>
      </section>

      <FaqAccordion customFaqs={c.faqs} title={`Digital marketing in ${c.city}: common questions`} badgeText="FAQ" description={`What ${c.city} businesses usually ask before working with us.`} />

      <CtaBanner title={c.ctaTitle} description={c.ctaDescription} />
    </>
  );
};
