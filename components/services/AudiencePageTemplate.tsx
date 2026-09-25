import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, AlertTriangle, Check } from 'lucide-react';
import { AudienceData } from '../../data/audiences';
import { getServiceBySlug } from '../../data/services-data';
import { getPlaybookBySlug } from '../../data/playbooks';
import { getPostBySlug as getBlogPost } from '../../lib/blog';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Breadcrumb } from '../ui/Breadcrumb';
import { ImageFrame } from '../ui/ImageFrame';
import { FaqAccordion } from '../sections/FaqAccordion';
import { CtaBanner } from '../sections/CtaBanner';

export const AudiencePageTemplate: React.FC<{ audience: AudienceData }> = ({ audience }) => {
  const playbooks = audience.relatedPlaybooks.map(getPlaybookBySlug).filter(Boolean);
  const posts = audience.relatedPosts.map((s) => getBlogPost(s)).filter(Boolean);
  const img = audience.images;

  return (
    <>
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: audience.breadcrumb, href: audience.path }]} />
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-24 text-left">
        <Image
          src={img.hero.src}
          alt={img.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover hero-kenburns"
          style={{ objectPosition: img.hero.position ?? 'center' }}
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.92)] via-[rgba(15,23,42,0.8)] to-[rgba(15,23,42,0.55)]" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="aurora-blob -left-24 top-0 h-[380px] w-[380px] bg-[rgba(37,99,235,0.32)]" />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl flex flex-col items-start">
            <Badge variant="teal" className="mb-4 !bg-white/10 !text-white border border-white/20 backdrop-blur-sm">{audience.eyebrow.toUpperCase()}</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-white tracking-tight leading-tight mb-6">{audience.h1}</h1>
            <p className="text-base sm:text-body-lg text-white/80 leading-relaxed mb-8">{audience.lead}</p>
            <Button id={`audience-hero-cta-${audience.key}`} href="/contact" variant="primary">
              Get a free marketing review →
            </Button>
          </div>
        </div>
      </section>

      {/* Intro: text left, photo right */}
      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="flex flex-col gap-4">
            {audience.intro.map((p, i) => (
              <p key={i} className="text-slate-700 leading-relaxed text-base sm:text-lg">{p}</p>
            ))}
          </div>
          <ImageFrame
            src={img.intro.src}
            alt={img.intro.alt}
            ratio="4/3"
            position={img.intro.position}
            sizes="(max-width: 1024px) 100vw, 600px"
            className="shadow-sm"
          />
        </div>
      </section>

      {/* Pains: photo left, cards right */}
      <section className="py-16 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center section-reveal">{audience.painsHeading}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-4 w-full max-w-md mx-auto lg:max-w-none">
              <ImageFrame
                src={img.pains.src}
                alt={img.pains.alt}
                ratio="4/5"
                position={img.pains.position}
                sizes="(max-width: 1024px) 448px, 400px"
              />
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 content-center stagger-reveal">
              {audience.pains.map((p) => (
                <div key={p.title} className="group spotlight bg-white p-6 border border-slate-200 rounded-2xl transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" aria-hidden="true" />
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center section-reveal">{audience.helpHeading}</h2>
          {/* Help: cards left, photo right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-7 flex flex-col gap-5 stagger-reveal">
              {audience.help.map((h) => {
                const service = getServiceBySlug(h.service);
                return (
                  <div key={h.title} className="group spotlight bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col transition-all duration-500 hover:bg-white hover:shadow-lg">
                    <h3 className="font-bold text-lg text-slate-900 mb-3">{h.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed flex-grow">{h.desc}</p>
                    {service && (
                      <Link href={`/services/${service.slug}`} className="inline-flex items-center gap-1 mt-5 text-sm font-bold text-royal-blue hover:underline">
                        {service.title} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none lg:self-center">
              <ImageFrame
                src={img.help.src}
                alt={img.help.alt}
                ratio="4/5"
                position={img.help.position}
                sizes="(max-width: 1024px) 448px, 500px"
              />
            </div>
          </div>

          {/* Extra: photo left, list right (list first on mobile) */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <ImageFrame
              src={img.extra.src}
              alt={img.extra.alt}
              ratio="4/3"
              position={img.extra.position}
              sizes="(max-width: 1024px) 100vw, 600px"
              className="order-2 lg:order-1"
            />
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{audience.extraHeading}</h2>
              <ul className="flex flex-col gap-6 stagger-reveal">
                {audience.extra.map((e) => (
                  <li key={e.title} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-slate-900">{e.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">{e.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Plans and guides, photo right */}
      <section className="bg-slate-50 py-14 border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Example plans</h2>
            <ul className="flex flex-col gap-3">
              {playbooks.map((pb) => pb && (
                <li key={pb.slug}>
                  <Link href={`/playbooks/${pb.slug}`} className="font-semibold text-royal-blue hover:underline">{pb.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Guides</h2>
            <ul className="flex flex-col gap-3">
              {posts.map((p) => p && (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="font-semibold text-royal-blue hover:underline">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <ImageFrame
            src={img.resources.src}
            alt={img.resources.alt}
            ratio="4/3"
            position={img.resources.position}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 400px"
            className="md:col-span-2 lg:col-span-1"
          />
        </div>
      </section>

      <FaqAccordion
        customFaqs={audience.faqs}
        title="Common questions"
        badgeText="FAQ"
        description={`What ${audience.key === 'developers' ? 'developers' : 'channel partners and brokers'} usually ask before working with us.`}
      />

      <CtaBanner title={audience.ctaTitle} description={audience.ctaDescription} />
    </>
  );
};
