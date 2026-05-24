import React from 'react';
import { Metadata } from 'next';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema, getLocalBusinessSchema } from '../../lib/schema';
import { testimonials } from '../../data/testimonials';
import { services } from '../../data/services';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { CtaBanner } from '../../components/sections/CtaBanner';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.delhi.title,
  description: pageMeta.delhi.description,
  path: pageMeta.delhi.path
});

export default function DelhiLocationPage() {
  const city = 'Delhi';
  const localSchema = getLocalBusinessSchema({ city });

  const breadcrumbItems = [{ name: 'Delhi NCR Agency', href: '/digital-marketing-agency-delhi' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Delhi Agency', item: 'https://veloxisglobal.com/digital-marketing-agency-delhi' }
  ]);

  // Filter local testimonials
  const localTestimonials = testimonials.filter(t => t.location.includes('Delhi') || t.location.includes('NCR'));

  return (
    <>
      <SchemaMarkup schema={localSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-16 sm:py-24 text-left relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge variant="teal" className="mb-4">DELHI NCR REGIONAL OFFICE</Badge>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              The Best Digital Marketing Agency in Delhi
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Partner with Veloxis Global to scale your business in Connaught Place, Dwarka, Saket, Rajouri Garden, and across the NCR. We deliver high-performing SEO, Google Ads, and CRM integrations optimized for Delhi's highly competitive buyers.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              We specialize in scaling <strong>real estate developers, healthcare groups, D2C retail brands, and higher education institutes</strong> with transparent reporting and custom lead scoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="/free-seo-audit" variant="primary">
                Get Free Delhi Audit →
              </Button>
              <Button href="/contact" variant="outline">
                Book Office Visit
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-25"></div>
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3 relative z-10">
              Delhi NCR Market Data
            </h3>
            <div className="flex flex-col gap-4 relative z-10 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-royal-blue shrink-0" />
                <span><strong>Coverage:</strong> New Delhi, Dwarka, Rohini, Saket, CP, Vasant Kunj</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Key Focus:</strong> Real Estate, Lead Generation, High-ROAS Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Local Team Size:</strong> 12 Certified Marketers & Account Managers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">LOCALIZED STRATEGIES</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Delhi-Centric Marketing Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">Geotargeted Delhi Local SEO</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Rank #1 in Google Maps for localized searches (e.g. "real estate projects in Dwarka", "best IVF clinic in CP"). We set up schema tags, clean directory citations, and build domain authority to ensure constant lead volume.
              </p>
            </Card>
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">High-ROAS Google Search & Display Ads</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Stop wasting budget on clicks that leave. We set up exact keyword matches, negative keyword lists, custom demographic targeting, and custom landing page designs to convert Delhi searchers into inquiries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      {localTestimonials.length > 0 && (
        <section className="bg-white py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <div className="max-w-[700px] mx-auto mb-16">
              <Badge variant="orange" className="mb-4">VERIFIED RESULTS</Badge>
              <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">What Delhi Brands Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {localTestimonials.map((t, idx) => (
                <Card key={idx} hoverable={false} className="border border-slate-100 p-8 bg-slate-50">
                  <div className="flex gap-0.5 text-[#F59E0B] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-900 italic font-medium mb-6">"{t.text}"</p>
                  <cite className="not-italic font-extrabold text-slate-900 text-sm block">{t.author}</cite>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
                    {t.role}, {t.company}
                  </span>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
