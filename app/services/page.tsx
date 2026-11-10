import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { ImageFrame } from '../../components/ui/ImageFrame';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getWebPageSchema } from '../../lib/schema';
import { servicesData } from '../../data/services-data';
import { Target, Code, Zap, Search, ShoppingBag, Store, MousePointerClick, Mail, Package, Share2, ArrowRight, Check } from 'lucide-react';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { servicesHubFaqs } from '../../data/page-faqs';
import { ReviewedLine } from '../../components/ui/ReviewedLine';

export const metadata: Metadata = constructMetadata(pageMeta.services);

// Card images, all 1200x750 to match the 16/10 card frame: sample-design mockups
// for landing pages and automation, a Pexels photo for ads.
const serviceImages: Record<string, { src: string; alt: string }> = {
  'amazon-marketing': { src: '/images/people/blog/meta-ads-for-d2c-brands-1.jpg', alt: 'Hands packing an order into a box' },
  'social-media-marketing': { src: '/images/people/services/ads-woman-scrolling-phone.jpg', alt: 'Woman scrolling on her phone' },
  'ecommerce-marketing': {
    src: '/images/people/blog/meta-ads-for-d2c-brands-1.jpg',
    alt: 'Hands packing a clothing order into a cardboard box next to folded sweaters',
  },
  'shopify-development': {
    src: '/images/people/services/hub-team-reviewing-charts.jpg',
    alt: 'Four colleagues reviewing printed charts around a laptop',
  },
  'conversion-rate-optimization': {
    src: '/images/people/blog/geo-analytics-dashboard-laptop.jpg',
    alt: 'An analytics dashboard open on a laptop',
  },
  'email-whatsapp-marketing': {
    src: '/images/people/home/whatsapp-chatbot-mockup.jpg',
    alt: 'Sample WhatsApp chatbot conversation beside an inbox',
  },
  'high-converting-landing-pages': {
    src: '/images/people/home/real-estate-landing-page-mockup.jpg',
    alt: 'Sample landing page mockup on a laptop and phone, with price, trust points and an enquiry form',
  },
  seo: {
    src: '/images/people/services/hub-team-reviewing-charts.jpg',
    alt: 'Four colleagues reviewing printed charts around a laptop',
  },
  'paid-ads': {
    src: '/images/people/services/hub-team-reviewing-charts.jpg',
    alt: 'Four colleagues reviewing printed charts around a laptop',
  },
  'ai-automation': {
    src: '/images/people/home/whatsapp-chatbot-mockup.jpg',
    alt: 'Sample WhatsApp chatbot sending a brochure, asking the budget and booking a visit, beside a lead inbox',
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Target, Code, Zap, Search, ShoppingBag, Store, MousePointerClick, Mail, Package, Share2 };

const accentColors: Record<string, string> = {
  teal: 'bg-teal-500/10 text-teal-600 border-teal-200/50',
  indigo: 'bg-indigo-500/10 text-indigo-600 border-indigo-200/50',
  orange: 'bg-orange-500/10 text-orange-600 border-orange-200/50',
};

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup
        schema={getWebPageSchema({
          type: 'CollectionPage',
          name: 'Digital marketing services',
          description: pageMeta.services.description,
          path: '/services',
        })}
      />

      <section className="bg-slate-50 pt-16 lg:pt-[72px] border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }]} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <Badge variant="teal" className="mb-4">WHAT WE DO</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-4">
            E-commerce Marketing Services for More Orders
          </h1>
          <p className="text-base sm:text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            One growth system for online stores and D2C brands: Meta and Google ads that bring buyers in, Shopify stores and
            product pages that convert them, email and WhatsApp that bring them back, and SEO that keeps them coming. Local
            businesses and real estate companies use the same services. Take one, or combine them.
          </p>
          <ReviewedLine className="text-slate-500 mt-4" />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 stagger-reveal">
            {servicesData.map((service, i) => {
              const IconComponent = iconMap[service.icon] || Target;
              const href = `/services/${service.slug}`;
              const photo = serviceImages[service.slug] || serviceImages['high-converting-landing-pages'];
              return (
                // 5-row subgrid (image, heading, description, points, footer): rows line up across cards
                <Card key={service.id} className="grid grid-rows-subgrid row-span-5 gap-y-0 text-left bg-white p-0 border border-slate-200 rounded-3xl group spotlight hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
                  <ImageFrame
                    src={photo.src}
                    alt={photo.alt}
                    ratio="16/10"
                    sizes="(min-width: 1280px) 400px, (min-width: 1024px) 31vw, (min-width: 768px) 46vw, 100vw"
                    priority={i === 0}
                    className="!rounded-none"
                    imageClassName="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  />
                  <div className="px-6 pt-8 pb-3">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 ${accentColors[service.accentColor]}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">
                      <Link href={href} className="hover:text-royal-blue transition-colors">{service.title}</Link>
                    </h2>
                  </div>
                  <p className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed">{service.shortDesc}</p>
                  <ul className="mx-6 mb-6 flex flex-col gap-2.5 text-sm text-slate-700 font-semibold pt-5 border-t border-slate-100">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0" aria-hidden="true">
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                  </ul>
                  <div className="flex items-center justify-between px-6 pb-8 pt-4 border-t border-slate-100 gap-4">
                    <Link href="/free-audit" className="font-bold text-slate-900 text-sm hover:text-royal-blue transition-colors">Starts with a free audit</Link>
                    <Button href={href} variant="outline" className="py-2 px-4 text-xs font-bold shrink-0" id={`services-card-btn-${service.id}`}>
                      Details →
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12 stagger-reveal">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Why the services work better together</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ads bring people to a page. The page turns them into orders or enquiries. SEO keeps new visitors arriving without
              paying for every click, and automation makes sure every enquiry is answered before the customer moves on. When
              one part is missing, the others underperform, which is why we look at all of them in the free audit and
              measure them together on orders, bookings or qualified enquiries.
            </p>
            <Link href="/playbooks" className="group inline-flex items-center gap-1 font-bold text-royal-blue hover:underline">
              See how they fit together in our real estate example playbooks <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who we work with</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/industries/ecommerce" className="font-bold text-royal-blue hover:underline">E-commerce and D2C brands</Link>
                <p className="text-sm text-slate-600 mt-1">More orders from your own store, judged on cost per order.</p>
              </li>
              <li>
                <Link href="/industries/local-business" className="font-bold text-royal-blue hover:underline">Local businesses and clinics</Link>
                <p className="text-sm text-slate-600 mt-1">More calls, bookings and WhatsApp enquiries from people nearby.</p>
              </li>
              <li>
                <Link href="/industries/real-estate" className="font-bold text-royal-blue hover:underline">Real estate developers, brokers and CPs</Link>
                <p className="text-sm text-slate-600 mt-1">Exclusive leads and site visits for launches, inventory and mandated projects.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FaqAccordion customFaqs={servicesHubFaqs} title="Questions about our services" badgeText="FAQ" description="What e-commerce brands, local businesses and real estate teams ask before choosing a service." />

      <CtaBanner />
    </>
  );
}
