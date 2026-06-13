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

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Best Digital Marketing Agency in Delhi 2026 | Veloxis Global",
    description: "Looking for the best digital marketing agency in Delhi? Veloxis Global delivers proven SEO, Google Ads & Social Media results for Delhi businesses. Serving South Delhi, NCR & all of Delhi. Free audit.",
    path: "/digital-marketing-agency-delhi",
    ogImage: '/images/og/delhi-og.jpg'
  }),
  keywords: "best digital marketing agency in Delhi, digital marketing company Delhi 2026, SEO agency Delhi, Google Ads agency Delhi NCR, performance marketing Delhi, social media marketing Delhi, digital marketing South Delhi, online marketing Connaught Place"
};

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

  const delhiFaqs = [
    {
      question: "What is the cost of digital marketing in Delhi in 2026?",
      answer: "Digital marketing cost in Delhi varies according to the scale, goals, and customized marketing channels your business requires. Rather than rigid pre-made templates, Veloxis Global offers performance-driven pricing structures tailored for Delhi businesses. Start with our free digital audit to receive a clear budget estimate."
    },
    {
      question: "How long does SEO take to show results for Delhi businesses?",
      answer: "Most Delhi businesses begin seeing organic traffic growth and improved keywords rankings in 60 to 90 days. Hyperlocal optimizations for competitive markets like South Delhi or Connaught Place can see faster traction in Google Map Pack results because they target specific high-intent searchers."
    },
    {
      question: "Do you work with retail and D2C brands in Delhi?",
      answer: "Yes. We work extensively with physical showrooms, shopping outlets, and online-first D2C brands in Delhi. We build conversion-optimized stores and deploy hyper-targeted social media advertising on Instagram and Facebook to drive direct transactions and retail foot traffic."
    },
    {
      question: "Can you rank my Delhi business on the local Google Map Pack?",
      answer: "Absolutely. Local SEO is one of our primary focuses in Delhi. We optimize your Google Business Profile, target localized search terms, resolve citation inconsistencies, and implement review strategies to place your Delhi business in the Local 3-Pack."
    },
    {
      question: "Do you offer Google Ads services for Delhi businesses?",
      answer: "Yes. We manage high-performance Google Ads campaigns (Search, Display, and Performance Max) optimized for Delhi's competitive landscape. We refine keyword match types, negative keywords, and copy daily to ensure you acquire high-quality leads at a lower cost per acquisition."
    },
    {
      question: "Which Delhi NCR sectors do you specialize in?",
      answer: "We support a wide array of sectors across Delhi NCR, including luxury real estate developers, healthcare clinics and hospitals, schools and educational institutions, local retail networks, professional services, and industrial business firms."
    },
    {
      question: "Do you offer free digital consultations for Delhi businesses?",
      answer: "Yes. We offer a completely free 30-minute digital strategy consultation along with a manual website audit for any business owner in Delhi. We analyze your website speed, on-page SEO issues, and competitors to give you an actionable roadmap."
    },
    {
      question: "What makes Veloxis Global different from other Delhi agencies?",
      answer: "Unlike many agencies in Delhi that focus on vanity metrics like impressions and clicks, Veloxis Global targets bottom-line metrics. We focus on tracking actual business results like sales, phone calls, and high-quality leads, with transparent reporting dashboards."
    }
  ];

  const faqSchema = getFAQPageSchema(delhiFaqs);

  return (
    <>
      <SchemaMarkup schema={localSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-white py-16 sm:py-24 text-left relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge variant="indigo" className="mb-4">DELHI NCR REGIONAL OFFICE</Badge>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Best Digital Marketing Agency in Delhi
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6 font-sans">
              Veloxis Global helps Delhi businesses dominate Google search, social media and paid ads. Whether you're in South Delhi, Connaught Place, Rohini, Dwarka, Saket or anywhere in NCR — our data-driven strategies are built for Delhi's highly competitive digital market.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8 font-sans">
              We serve Delhi businesses remotely with the same efficiency as a local agency — in-person meetings available on request across NCR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="delhi-hero-free-audit-btn" href="/free-seo-audit" variant="primary">
                Get Free Delhi Audit →
              </Button>
              <Button id="delhi-hero-book-consult-btn" href="/contact" variant="outline">
                Book Consult Call
              </Button>
            </div>
          </div>

          {/* Market Data */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-25"></div>
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3 relative z-10">
              Delhi NCR Market Data
            </h3>
            <div className="flex flex-col gap-4 relative z-10 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-royal-blue shrink-0" />
                <span><strong>Coverage:</strong> New Delhi, Dwarka, Rohini, Saket, CP, Vasant Kunj, South Delhi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Key Focus:</strong> Real Estate, Lead Generation, High-ROAS Ads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Services Focus:</strong> Local SEO, Google Ads, Performance Marketing</span>
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
                Rank #1 in Google Maps for localized searches (e.g. \"real estate projects in Dwarka\", \"best IVF clinic in CP\"). We set up schema tags, clean directory citations, and build domain authority to ensure constant lead volume.
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
                  <p className="text-slate-900 italic font-medium mb-6">\"{t.text}\"</p>
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
        customFaqs={delhiFaqs} 
        title="Frequently Asked Questions" 
        badgeText="DELHI FAQ" 
      />

      <CtaBanner />
    </>
  );
}
