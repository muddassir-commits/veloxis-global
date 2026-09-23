import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { constructMetadata } from '../../../lib/seo-config';
import { servicesData, getServiceBySlug } from '../../../data/services-data';
import { getPlaybookBySlug } from '../../../data/playbooks';
import { blogPosts } from '../../../data/blog-posts';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { ImageFrame } from '../../../components/ui/ImageFrame';
import { Button } from '../../../components/ui/Button';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { FaqAccordion } from '../../../components/sections/FaqAccordion';
import { getServiceSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';
import { Target, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const serviceHeroImages: Record<string, { src: string; alt: string }> = {
  'high-converting-landing-pages': { src: '/images/sections/service-landing-pages.jpg', alt: 'Real estate project landing page shown on a laptop and phone' },
  'paid-ads': { src: '/images/sections/service-paid-ads.jpg', alt: 'Property ad campaign dashboard' },
  'ai-automation': { src: '/images/sections/service-ai-automation.jpg', alt: 'WhatsApp chatbot replying to a property enquiry' },
};

// People photos per service (Pexels stock). Each pixel size matches its frame ratio:
// intro 3/2 (1500x1000), deliverables 16/9 (1600x900), process 4/3 (1400x1050), sidebar 1/1 (900x900).
type Photo = { src: string; alt: string; position?: string };
type ServicePhotos = { intro: Photo; deliverables: Photo; process: Photo; sidebar: Photo };

const P = '/images/people/services';
const servicePhotos: Record<string, ServicePhotos> = {
  'high-converting-landing-pages': {
    intro: { src: `${P}/lp-designer-at-desktop.jpg`, alt: 'Designer working on page layouts on a desktop computer' },
    deliverables: { src: `${P}/lp-couple-browsing-tablet.jpg`, alt: 'Couple browsing on a tablet together on their sofa', position: 'center 30%' },
    process: { src: `${P}/lp-site-visit-agent.jpg`, alt: 'Sales executive talking with a couple outside an apartment building' },
    sidebar: { src: `${P}/lp-agent-welcomes-buyer.jpg`, alt: 'Agent welcoming a young man at the door of a home' },
  },
  'paid-ads': {
    intro: { src: `${P}/ads-team-reviewing-charts.jpg`, alt: 'Marketing team reviewing charts on a laptop at a meeting table' },
    deliverables: { src: `${P}/ads-campaign-planning-table.jpg`, alt: 'Team planning a campaign around a table with laptops, a tablet and ad spend charts' },
    process: { src: `${P}/ads-reports-on-laptops.jpg`, alt: 'Two people working on laptops surrounded by printed performance charts' },
    sidebar: { src: `${P}/ads-woman-scrolling-phone.jpg`, alt: 'Woman scrolling on her phone while sitting on a sofa', position: '70% center' },
  },
  'ai-automation': {
    intro: { src: `${P}/ai-rep-phone-laptop.jpg`, alt: 'Young man checking messages on his phone while working on a laptop' },
    deliverables: { src: `${P}/ai-call-team-headsets.jpg`, alt: 'Sales team wearing headsets working on laptops', position: 'center 35%' },
    process: { src: `${P}/ai-man-desk-phone.jpg`, alt: 'Man taking a call on a desk phone in an office' },
    sidebar: { src: `${P}/ai-man-on-call.jpg`, alt: 'Smiling man talking on his mobile phone' },
  },
};

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return constructMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const hero = serviceHeroImages[service.slug] || serviceHeroImages['high-converting-landing-pages'];
  const photos = servicePhotos[service.slug] || servicePhotos['high-converting-landing-pages'];
  const related = service.relatedServices.map(getServiceBySlug).filter(Boolean) as typeof servicesData;
  const playbook = getPlaybookBySlug(service.relatedPlaybook);
  const posts = service.relatedPosts
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof blogPosts;

  return (
    <>
      <SchemaMarkup
        schema={getServiceSchema({
          name: service.h1,
          description: service.metaDescription,
          path,
          serviceType: service.serviceType,
          audience: 'Real estate developers, builders, brokers and channel partners',
        })}
      />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: service.title, href: path }]} />
        </div>
      </section>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden text-left">
        <Image src={hero.src} alt="" fill priority sizes="100vw" className="object-cover object-center" quality={80} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,23,42,0.92)] via-[rgba(15,23,42,0.8)] to-[rgba(15,23,42,0.5)]" aria-hidden="true" />
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="max-w-3xl flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider">
              <span aria-hidden="true">{service.emoji}</span> {service.eyebrow}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-white">
              {service.h1}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl">{service.shortDesc}</p>
            <div className="mt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id={`service-hero-cta-${service.id}`} href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                {service.cta} →
              </Button>
              {playbook && (
                <Link
                  href={`/playbooks/${playbook.slug}`}
                  className="text-[15px] font-bold text-white/85 hover:text-white transition-colors px-5 py-3 border border-white/25 rounded-xl hover:bg-white/10 text-center"
                >
                  See an example plan
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Intro + problems */}
      <section className="py-20 bg-white">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col gap-4">
                {service.intro.map((p, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed text-base sm:text-lg">{p}</p>
                ))}
              </div>
              <ImageFrame
                src={photos.intro.src}
                alt={photos.intro.alt}
                ratio="3/2"
                position={photos.intro.position}
                sizes="(min-width: 1280px) 390px, (min-width: 768px) 45vw, 100vw"
                className="shadow-sm"
              />
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{service.problemsHeading}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.problems.map((item) => (
                  <div key={item.title} className="bg-slate-50 p-5 rounded-xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-1" aria-hidden="true" />
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">{service.deliverablesHeading}</h2>
              <ImageFrame
                src={photos.deliverables.src}
                alt={photos.deliverables.alt}
                ratio="16/9"
                position={photos.deliverables.position}
                sizes="(min-width: 1280px) 790px, (min-width: 1024px) 64vw, 100vw"
                className="mb-6 shadow-sm"
              />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item) => (
                  <li key={item.title} className="flex items-start gap-3 p-5 rounded-xl border border-slate-100 bg-white shadow-sm">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              {service.toolsNote && <p className="mt-6 text-sm text-slate-500 leading-relaxed">{service.toolsNote}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <ImageFrame
                src={photos.process.src}
                alt={photos.process.alt}
                ratio="4/3"
                position={photos.process.position}
                sizes="(min-width: 1280px) 390px, (min-width: 768px) 45vw, 100vw"
                className="shadow-sm order-2 md:order-1 md:sticky md:top-24"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">How it works</h2>
                <ol className="flex flex-col gap-4">
                  {service.process.map((step, i) => (
                    <li key={step.title} className="flex gap-4 items-start">
                      <span className="w-8 h-8 rounded-full bg-royal-blue text-white text-sm font-bold flex items-center justify-center shrink-0" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-slate-900">{step.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6">
              <h2 className="font-bold mb-4 text-lg">Who it’s for</h2>
              <ul className="flex flex-col gap-4">
                {service.whoFor.map((item) => (
                  <li key={item.title} className="flex items-start gap-2 text-sm">
                    <Target className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>
                      <strong className="text-white">{item.title}.</strong>{' '}
                      <span className="text-slate-300">{item.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2 text-sm">
                <Link href="/industries/real-estate" className="text-teal-300 hover:text-white font-semibold">Marketing for developers →</Link>
                <Link href="/channel-partners" className="text-teal-300 hover:text-white font-semibold">Marketing for channel partners →</Link>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
              <h2 className="font-bold text-slate-900 mb-2 text-lg">Pricing</h2>
              <p className="text-2xl font-extrabold text-slate-900">{service.pricingRange}</p>
              <p className="text-sm text-slate-500 mt-2">Month-to-month, 30 days’ notice. Final scope confirmed after a free audit.</p>
              <Link href="/pricing" className="inline-block mt-4 text-sm font-bold text-royal-blue hover:underline">See all packages →</Link>
            </div>

            <ImageFrame
              src={photos.sidebar.src}
              alt={photos.sidebar.alt}
              ratio="1/1"
              position={photos.sidebar.position}
              sizes="(min-width: 1280px) 395px, 32vw"
              className="shadow-sm hidden lg:block"
            />
          </aside>
        </div>
      </section>

      {/* Related services, playbook and guides */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Works best together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Service</span>
                <h3 className="font-bold text-slate-900 mt-2 group-hover:text-royal-blue">{s.h1}</h3>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-royal-blue mt-4">
                  {s.title} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
            {playbook && (
              <Link href={`/playbooks/${playbook.slug}`} className="group bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Example plan</span>
                <h3 className="font-bold text-slate-900 mt-2 group-hover:text-royal-blue">{playbook.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm font-bold text-royal-blue mt-4">
                  Read the playbook <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            )}
          </div>
          {posts.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <span className="font-bold text-slate-500">Related guides:</span>
              {posts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="font-semibold text-royal-blue hover:underline">
                  {p.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <FaqAccordion
        customFaqs={service.faqs}
        title={`${service.title}: common questions`}
        badgeText="FAQ"
        description="What builders, brokers and channel partners usually ask before starting."
      />

      <CtaBanner />
    </>
  );
}
