import React from 'react';
import { Metadata } from 'next';
import { constructMetadata } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../lib/schema';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { industries } from '../../data/industries';
import { 
  Home as HouseIcon, 
  HeartPulse, 
  GraduationCap, 
  ShoppingBag, 
  Landmark, 
  Cloud, 
  Users, 
  Utensils, 
  Dumbbell, 
  Heart 
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Industries We Serve | Veloxis Global',
  description: 'Discover how we scale digital leads, patient bookings, enrollments, and sales for ten specialized industries across India today.',
  path: '/industries'
});

export default function IndustriesIndexPage() {
  const breadcrumbItems = [{ name: 'Industries', href: '/industries' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' }
  ]);

  const iconMap: Record<string, any> = {
    Home: HouseIcon,
    HeartPulse,
    GraduationCap,
    ShoppingBag,
    Landmark,
    Cloud,
    Users,
    Utensils,
    Dumbbell,
    Heart
  };

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Header */}
      <section className="bg-white py-16 sm:py-20 text-center">
        <div className="max-w-container-max mx-auto px-gutter">
          <Badge variant="teal" className="mb-4">SPECIALIZED MARKETS</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-4">
            Industry-Specific Performance Frameworks
          </h1>
          <p className="text-base sm:text-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            We don't believe in one-size-fits-all. We build customized, domain-specific digital pipelines optimized for ten specialized industry buying journeys.
          </p>
        </div>
      </section>

      {/* Industry List Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const IconComponent = iconMap[ind.icon] || HouseIcon;
              return (
                <Card key={idx} className="flex flex-col justify-between items-start text-left bg-white p-8 h-full">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-royal-blue/10 text-royal-blue flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant={ind.badge} className="mb-3">{ind.slug.replace('-', ' ')}</Badge>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">{ind.title}</h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{ind.desc}</p>
                  </div>
                  <Button href={`/industries/${ind.slug}`} variant="outline" className="w-full sm:w-auto mt-auto" id={`industries-card-btn-${ind.slug}`}>
                    View Solutions →
                  </Button>
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
