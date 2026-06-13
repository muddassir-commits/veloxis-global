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
import { Home as HouseIcon, HeartPulse, GraduationCap, ShoppingBag, Landmark } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Digital Marketing for Industries We Serve | Veloxis Global',
  description: 'Discover how we scale digital leads, patient bookings, enrollments, and sales for real estate, healthcare, education, e-commerce, and MSMEs today.',
  path: '/industries'
});

export default function IndustriesIndexPage() {
  const breadcrumbItems = [{ name: 'Industries', href: '/industries' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' }
  ]);

  const industries = [
    {
      title: 'Real Estate Developer Marketing',
      desc: 'Local search domination, virtual tour landing pages, and geo-targeted Google/Facebook campaigns generating qualified property buyers in Delhi NCR.',
      icon: HouseIcon,
      slug: 'real-estate',
      badge: 'teal' as const
    },
    {
      title: 'Healthcare & Patient Bookings',
      desc: 'Google map pack visibility, local citations audit, and lead nurturing flows that fill pediatric, IVF, and multi-specialty clinical schedules in Lucknow.',
      icon: HeartPulse,
      slug: 'healthcare',
      badge: 'indigo' as const
    },
    {
      title: 'Higher Education & Enrollments',
      desc: 'Search campaigns targeting course queries, student journey tracking, and automated CRM WhatsApp flows that double applications for Noida academies.',
      icon: GraduationCap,
      slug: 'education',
      badge: 'orange' as const
    },
    {
      title: 'E-commerce & Shopify Growth',
      desc: 'PMax campaign setups, negative keyword filters, and dynamic Instagram reels advertising delivering 5x+ ROAS for Indian retail brands.',
      icon: ShoppingBag,
      slug: 'ecommerce',
      badge: 'teal' as const
    },
    {
      title: 'MSME & B2B Manufacturing',
      desc: 'B2B export SEO campaigns, technical catalog speed optimizations, and global search targeting that connect Kanpur mills with international buyers.',
      icon: Landmark,
      slug: 'msme-small-business',
      badge: 'indigo' as const
    }
  ];

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
            We don't believe in one-size-fits-all. We build customized, domain-specific digital pipelines optimized for your industry's buying journeys.
          </p>
        </div>
      </section>

      {/* Industry List Grid */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const IconComponent = ind.icon;
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
