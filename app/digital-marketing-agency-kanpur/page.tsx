import React from 'react';
import { Metadata } from 'next';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getFAQPageSchema, getBreadcrumbListSchema, getLocalBusinessSchema } from '../../lib/schema';
import { testimonials } from '../../data/testimonials';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { FaqAccordion } from '../../components/sections/FaqAccordion';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.kanpur.title,
  description: pageMeta.kanpur.description,
  path: pageMeta.kanpur.path,
  ogImage: '/images/og/kanpur-og.jpg'
});

export default function KanpurLocationPage() {
  const city = 'Kanpur';
  const localSchema = getLocalBusinessSchema({ city });

  const breadcrumbItems = [{ name: 'Kanpur Agency', href: '/digital-marketing-agency-kanpur' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Kanpur Agency', item: 'https://veloxisglobal.com/digital-marketing-agency-kanpur' }
  ]);

  // Filter local testimonials matching Kanpur
  const localTestimonials = testimonials.filter(
    t => t.location.includes('Kanpur') || t.company.includes('Kanpur') || t.text.includes('Kanpur')
  );

  const kanpurFaqs = [
    {
      question: "How can digital marketing benefit local manufacturing companies and MSMEs?",
      answer: "Digital marketing helps manufacturing brands bypass middlemen. By ranking for terms like 'bulk leather goods manufacturer' or 'custom textile exporter' on Google, industrial firms can capture corporate inquiries and wholesale buyers directly."
    },
    {
      question: "Which commercial and industrial areas do you cover?",
      answer: "We service industrial zones and neighborhoods locally, including GT Road, Civil Lines, Swaroop Nagar, Kidwai Nagar, Kalyanpur, and Kakadeo."
    },
    {
      question: "What digital marketing channels are best for B2B industrial sales?",
      answer: "B2B industrial marketing relies heavily on high-intent channels. Google Search Ads capture buyers actively searching for raw materials or manufacturing partners, while Technical SEO builds long-term organic authority and rankings."
    },
    {
      question: "Can you help our local textile or leather business get export inquiries?",
      answer: "Yes. We set up international SEO targeting and run geotargeted Google and LinkedIn campaigns tailored to buyers in key export markets such as Europe, the Middle East, and North America."
    },
    {
      question: "How do you help local retail brands compete online?",
      answer: "We help retail storefronts build local authority by optimizing their Google Map profiles, setting up local store search campaigns, and utilizing targeted Instagram ads to drive local customer walk-ins."
    },
    {
      question: "Do we need a massive marketing budget to start working with Veloxis Global in the region?",
      answer: "No. We specialize in working with MSMEs. We build campaigns with focused budgets, target specific buyer personas, and scale spend only when we see positive conversion rates and qualified inquiries."
    },
    {
      question: "Do you build custom websites for manufacturing companies?",
      answer: "Yes. We build responsive, fast-loading B2B websites that showcase product catalogs, list technical specifications, and include direct call-to-actions like 'Request a Quote' or 'Download Brochure' to maximize lead capture."
    },
    {
      question: "How can our business get a free SEO and digital audit?",
      answer: "Complete our simple audit form. Our team will review your website performance, map visibility, and local competitor strength, and send you a manual optimization plan in 48 hours."
    }
  ];

  return (
    <>
      <SchemaMarkup schema={localSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 text-left relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge variant="orange" className="mb-4">INDUSTRIAL REGIONAL DESK</Badge>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Best Digital Marketing Agency in Kanpur
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Kanpur, long recognized as the industrial heartland and Manchester of Uttar Pradesh, is home to a massive ecosystem of leather tanneries, textile mills, manufacturing plants, and fast-growing MSMEs. However, in 2026, traditional sales channels, bulk distributor directories, and local industry networks are no longer sufficient to secure nationwide or export orders.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              At Veloxis Global, we specialize in helping regional manufacturing companies transition to modern digital customer acquisition. We construct high-converting B2B search campaigns, run targeted SEO strategies to rank for commercial manufacturing keywords, and design optimized landing pages that convert cold traffic into trade inquiries and purchase orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="/free-seo-audit" variant="primary">
                Get Free Agency Audit →
              </Button>
              <Button href="/contact" variant="outline">
                Book Office Visit
              </Button>
            </div>
          </div>

          {/* Market Data */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-25"></div>
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3 relative z-10">
              Kanpur Market Profile
            </h3>
            <div className="flex flex-col gap-4 relative z-10 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-royal-blue shrink-0" />
                <span><strong>Coverage:</strong> Civil Lines, Swaroop Nagar, Kidwai Nagar, GT Road, Kalyanpur, Kakadeo</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Industries:</strong> Textile, Leather, Manufacturing, MSME, Retail</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Services Focus:</strong> B2B Lead Gen, Technical SEO, High-ROAS Search Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">MSME & INDUSTRIAL SOLUTIONS</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Kanpur-Based Marketing Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">Enterprise B2B Lead Acquisition</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Connect directly with enterprise decision-makers. We audit search intent, implement account-based marketing (ABM) structures, write high-converting whitepapers, and build qualified funnels optimized for regional industrial sectors.
              </p>
            </Card>
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">Hyper-Targeted Google & LinkedIn Ads</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Maximize ad budgets in high-competition niches. We setup exact-match search query targets, map precise demographic and job title exclusions, and construct custom landing pages designed to drive higher inquiries at lower CPL.
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
              <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">What Local Brands Say</h2>
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

      {/* Localized FAQ Accordion */}
      <FaqAccordion 
        customFaqs={kanpurFaqs} 
        title="Frequently Asked Questions" 
        badgeText="KANPUR FAQ" 
      />

      <CtaBanner />
    </>
  );
}
