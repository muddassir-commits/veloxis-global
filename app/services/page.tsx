import React from 'react';
import { Metadata } from 'next';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../lib/schema';
import { services } from '../../data/services';
import { Search, Share2, DollarSign, PenTool, Code, Mail, ArrowRight } from 'lucide-react';
import { CtaBanner } from '../../components/sections/CtaBanner';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.services.title,
  description: pageMeta.services.description,
  path: pageMeta.services.path
});

export default function ServicesPage() {
  const breadcrumbItems = [{ name: 'Services', href: '/services' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Services', item: 'https://veloxisglobal.com/services' }
  ]);

  const iconMap: Record<string, any> = {
    Search,
    Share2,
    DollarSign,
    PenTool,
    Code,
    Mail,
  };

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-16 sm:py-20 text-center">
        <div className="max-w-container-max mx-auto px-gutter">
          <Badge variant="teal" className="mb-4">WHAT WE DO</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-4">
            Performance Marketing Services Built for Growth
          </h1>
          <p className="text-base sm:text-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Six specialized strategies designed to scale organic traffic, optimize paid budgets, build high-performance sites, and automate pipelines.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Search;
              return (
                <Card key={service.id} className="flex flex-col justify-between items-start text-left h-full bg-white p-8">
                  <div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${
                      service.accentColor === 'teal' ? 'bg-teal-accent/10 text-teal-accent' :
                      service.accentColor === 'indigo' ? 'bg-indigo-accent/10 text-indigo-accent' :
                      'bg-sunset-orange/10 text-sunset-orange'
                    }`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl sm:text-headline-md font-bold text-slate-900 mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                      {service.longDesc}
                    </p>

                    <div className="bg-slate-50 rounded-md p-4 mb-6 border border-slate-100/50">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-2">Key Deliverables</span>
                      <ul className="flex flex-col gap-1.5 text-xs text-slate-700 font-semibold">
                        {service.benefits.slice(0, 3).map((b, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-teal-accent">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 block uppercase tracking-wider">Packages Start At</span>
                      <span className="font-extrabold text-slate-900 text-sm">{service.pricing.starter}</span>
                    </div>

                    <Button href={`/services/${service.slug}`} variant="outline" className="py-2 px-4 text-xs font-bold">
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
