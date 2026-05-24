import React from 'react';
import { Metadata } from 'next';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../lib/schema';
import { testimonials } from '../../data/testimonials';
import { Star } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.testimonials.title,
  description: pageMeta.testimonials.description,
  path: pageMeta.testimonials.path
});

export default function TestimonialsPage() {
  const breadcrumbItems = [{ name: 'Testimonials', href: '/testimonials' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Testimonials', item: 'https://veloxisglobal.com/testimonials' }
  ]);

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
          <Badge variant="indigo" className="mb-4">CLIENT REVIEWS</Badge>
          <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight mb-4">
            Proven Digital Marketing Reviews & Client Testimonials
          </h1>
          <p className="text-base sm:text-body-md text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            See how we partner with businesses across Delhi, Noida, Lucknow, and Kanpur to cut acquisition costs, double organic traffic, and accelerate revenue.
          </p>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test) => (
              <Card key={test.id} hoverable={false} className="flex flex-col justify-between bg-white border border-slate-100 p-8">
                <div>
                  <div className="flex gap-1 mb-4 text-[#F59E0B]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg text-slate-900 italic font-medium leading-relaxed mb-6">
                    "{test.text}"
                  </blockquote>
                </div>
                <div className="border-t border-slate-50 pt-4 mt-2">
                  <span className="font-extrabold text-slate-900 text-sm block">{test.author}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mt-0.5">
                    {test.role}, {test.company} · {test.location}
                  </span>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-white rounded-xl border border-slate-100 p-8 sm:p-12 max-w-2xl mx-auto shadow-sm flex flex-col items-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Want to See Similar Results for Your Business?</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 text-center">
              Let us run a manual technical SEO and conversion audit on your website. No costs, no commitments.
            </p>
            <Button href="/free-seo-audit" variant="primary">
              Request Your Free Audit Now →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
