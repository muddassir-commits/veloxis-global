import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { constructMetadata } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../lib/schema';
import { servicesData } from '../../data/services-data';
import { 
  Target, Search, PenTool, MessageSquare, Code, Mail, Cpu, 
  Award, BarChart3, GraduationCap, ShoppingCart, HelpCircle, 
  Layers, Settings 
} from 'lucide-react';
import { CtaBanner } from '../../components/sections/CtaBanner';

export const metadata: Metadata = constructMetadata({
  title: "Real Estate Marketing Services | Veloxis Global",
  description: "Three services built for real estate: high-converting landing pages, Meta & Google Ads, and AI-powered WhatsApp automation — everything you need to fill your site visits.",
  path: "/services"
});

const serviceImages: Record<string, string> = {
  'high-converting-landing-pages': '/images/sections/service-landing-pages.jpg',
  'paid-ads': '/images/sections/service-paid-ads.jpg',
  'ai-automation': '/images/sections/service-ai-automation.jpg',
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Search,
  PenTool,
  MessageSquare,
  Code,
  Mail,
  Cpu,
  Award,
  BarChart3,
  GraduationCap,
  ShoppingCart,
  HelpCircle,
  Layers,
  Settings
};

export default function ServicesPage() {
  const breadcrumbItems = [{ name: 'Services', href: '/services' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://www.veloxisglobal.com' },
    { name: 'Services', item: 'https://www.veloxisglobal.com/services' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-16 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/30 to-transparent -z-10" />
        <div className="max-w-container-max mx-auto px-gutter">
          <Badge variant="teal" className="mb-4">WHAT WE DO</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-4">
            The Only Three Services That Move Real Estate
          </h1>
          <p className="text-base sm:text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Landing pages that convert, ads that fill your pipeline, and AI that answers every enquiry in under a minute — nothing else, nothing generic.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon] || Target;
              const serviceHref = `/services/${service.slug}`;

              // Colors configuration
              const accentColors: Record<string, string> = {
                teal: 'bg-teal-500/10 text-teal-600 border-teal-200/50',
                indigo: 'bg-indigo-500/10 text-indigo-600 border-indigo-200/50',
                orange: 'bg-orange-500/10 text-orange-600 border-orange-200/50',
                purple: 'bg-purple-500/10 text-purple-600 border-purple-200/50',
                cyan: 'bg-cyan-500/10 text-cyan-600 border-cyan-200/50',
                gold: 'bg-amber-500/10 text-amber-600 border-amber-200/50',
                green: 'bg-green-500/10 text-green-600 border-green-200/50',
                navy: 'bg-blue-500/10 text-blue-600 border-blue-200/50',
                red: 'bg-red-500/10 text-red-600 border-red-200/50',
                gray: 'bg-slate-500/10 text-slate-600 border-slate-200/50',
              };

              const activeColorClass = accentColors[service.accentColor] || accentColors.teal;

              return (
                <Card key={service.id} className="flex flex-col justify-between items-start text-left h-full bg-white p-0 border border-slate-200 rounded-3xl hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="w-full h-40 relative overflow-hidden">
                    <Image
                      src={serviceImages[service.slug] || '/images/sections/service-landing-pages.jpg'}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="w-full p-8">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border ${activeColorClass}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="text-base shrink-0">{service.emoji}</span>
                      <span>{service.title}</span>
                    </h3>

                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                      {service.shortDesc}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-wider block mb-2">Key Deliverables</span>
                      <ul className="flex flex-col gap-2 text-xs text-slate-700 font-semibold">
                        {service.benefits.slice(0, 3).map((b, idx) => (
                          <li key={idx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-teal-600 shrink-0">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-between mt-auto px-8 pb-8 pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-[10px] font-black text-slate-400 block uppercase tracking-wider">Starting Price</span>
                      <span className="font-extrabold text-slate-950 text-xs sm:text-sm">{service.pricing.starter}</span>
                    </div>

                    <Button
                      href={serviceHref}
                      variant="outline"
                      className="py-2 px-4 text-xs font-bold"
                      id={`services-card-btn-${service.id}`}
                    >
                      Explore Details →
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
