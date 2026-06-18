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
import { 
  Search, 
  Share2, 
  DollarSign, 
  PenTool, 
  Code, 
  Mail, 
  Target, 
  Users, 
  Cpu, 
  Palette, 
  BarChart3, 
  ClipboardCheck, 
  ShoppingBag, 
  GraduationCap 
} from 'lucide-react';
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
    Target,
    Users,
    Cpu,
    Palette,
    BarChart3,
    ClipboardCheck,
    ShoppingBag,
    GraduationCap
  };

  const tiers = [
    { name: "Tier 1: Paid Advertising & Lead Generation", id: "Tier 1" },
    { name: "Tier 2: Organic Visibility & Growth", id: "Tier 2" },
    { name: "Tier 3: Conversion & Automation", id: "Tier 3" },
    { name: "Tier 4: Strategy & Intelligence", id: "Tier 4" },
    { name: "Tier 5: Technology & Scaling", id: "Tier 5" },
    { name: "Tier 6: Training & Vertical Expertise", id: "Tier 6" }
  ];

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
            Fourteen specialized strategies designed to scale organic traffic, optimize paid budgets, build high-performance sites, and automate pipelines.
          </p>
        </div>
      </section>

      {/* Services List Tiers */}
      <section className="bg-slate-50 py-16 flex flex-col gap-16">
        <div className="max-w-container-max mx-auto px-gutter w-full">
          {tiers.map((tier) => {
            const tierServices = services.filter(s => s.tier === tier.id);
            if (tierServices.length === 0) return null;

            return (
              <div key={tier.id} className="mb-16 last:mb-0">
                <div className="border-b border-slate-200 pb-4 mb-8">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-royal-blue" />
                    {tier.name}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {tierServices.map((service) => {
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

                          <Button href={`/services/${service.slug}`} variant="outline" className="py-2 px-4 text-xs font-bold" id={`services-card-btn-${service.slug}`}>
                            Explore Details →
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
