import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getWebPageSchema } from '../../lib/schema';
import { servicesData } from '../../data/services-data';
import { Target, Code, Zap, ArrowRight } from 'lucide-react';
import { CtaBanner } from '../../components/sections/CtaBanner';

export const metadata: Metadata = constructMetadata(pageMeta.services);

const serviceImages: Record<string, string> = {
  'high-converting-landing-pages': '/images/sections/service-landing-pages.jpg',
  'paid-ads': '/images/sections/service-paid-ads.jpg',
  'ai-automation': '/images/sections/service-ai-automation.jpg',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Target, Code, Zap };

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
          name: 'Real estate marketing services',
          description: pageMeta.services.description,
          path: '/services',
        })}
      />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }]} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter">
          <Badge variant="teal" className="mb-4">WHAT WE DO</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-4">
            Real estate marketing services
          </h1>
          <p className="text-base sm:text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Three services that work as one lead engine: a project page that turns clicks into enquiries, Meta and Google
            ads that bring exclusive leads, and WhatsApp automation that answers every enquiry in seconds. Take one, or all
            three together.
          </p>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon] || Target;
              const href = `/services/${service.slug}`;
              return (
                <Card key={service.id} className="flex flex-col justify-between items-start text-left h-full bg-white p-0 border border-slate-200 rounded-3xl hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="w-full h-40 relative overflow-hidden">
                    <Image
                      src={serviceImages[service.slug] || serviceImages['high-converting-landing-pages']}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full p-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${accentColors[service.accentColor]}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">
                      <Link href={href} className="hover:text-royal-blue">{service.title}</Link>
                    </h2>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{service.shortDesc}</p>
                    <ul className="flex flex-col gap-2 text-sm text-slate-700 font-semibold">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-teal-600 shrink-0" aria-hidden="true">✓</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-full flex items-center justify-between mt-auto px-8 pb-8 pt-4 border-t border-slate-100 gap-4">
                    <span className="font-bold text-slate-900 text-sm">{service.pricingRange}</span>
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
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Why the three work better together</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ads bring buyers to a page. The page turns them into enquiries. Automation makes sure every enquiry is answered
              before the buyer moves on to the next project. When one part is missing, the others underperform — which is
              why most of our clients start with all three and measure them together on cost per site visit.
            </p>
            <Link href="/playbooks" className="inline-flex items-center gap-1 font-bold text-royal-blue hover:underline">
              See how they fit together in our example playbooks <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Who these services are for</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/industries/real-estate" className="font-bold text-royal-blue hover:underline">Developers and builders</Link>
                <p className="text-sm text-slate-600 mt-1">Launches, new phases and unsold inventory, with your CP network included.</p>
              </li>
              <li>
                <Link href="/channel-partners" className="font-bold text-royal-blue hover:underline">Channel partners and brokers</Link>
                <p className="text-sm text-slate-600 mt-1">Exclusive leads for the projects you’re mandated on, and proof of every lead you bring.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
