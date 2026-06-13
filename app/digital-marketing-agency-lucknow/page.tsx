import React from 'react';
import { Metadata } from 'next';
import { constructMetadata, pageMeta } from '../../lib/seo-config';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../components/ui/SchemaMarkup';
import { getFAQPageSchema, getBreadcrumbListSchema } from '../../lib/schema';
import { testimonials } from '../../data/testimonials';
import { Star, CheckCircle, MapPin } from 'lucide-react';
import { CtaBanner } from '../../components/sections/CtaBanner';
import { FaqAccordion } from '../../components/sections/FaqAccordion';

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Best Digital Marketing Agency in Lucknow 2026 | Veloxis Global",
    description: "Top-rated digital marketing agency in Lucknow — proven SEO, Google Ads & Social Media for Lucknow businesses. Serving Gomti Nagar, Hazratganj, Indira Nagar & across Lucknow. Free audit available.",
    path: "/digital-marketing-agency-lucknow",
    ogImage: '/images/og/lucknow-og.jpg'
  }),
  keywords: "best digital marketing agency in Lucknow, digital marketing company Lucknow 2026, SEO services Lucknow, Google Ads Lucknow, social media marketing Lucknow, digital marketing Gomti Nagar, online marketing Hazratganj, marketing agency Indira Nagar Lucknow"
};

export default function LucknowLocationPage() {
  const city = 'Lucknow';

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Veloxis Global",
    "description": "Best digital marketing agency in Lucknow — SEO, Google Ads & Social Media for Lucknow businesses.",
    "telephone": "+918887620727",
    "email": "muddassir@veloxisglobal.com",
    "url": "https://veloxisglobal.com/digital-marketing-agency-lucknow",
    "areaServed": {
      "@type": "City",
      "name": "Lucknow"
    },
    "priceRange": "₹₹",
    "image": "https://veloxisglobal.com/images/logos/logo.png"
  };

  const breadcrumbItems = [{ name: 'Lucknow Agency', href: '/digital-marketing-agency-lucknow' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Lucknow Agency', item: 'https://veloxisglobal.com/digital-marketing-agency-lucknow' }
  ]);

  // Filter local testimonials matching Lucknow
  const localTestimonials = testimonials.filter(
    t => t.location.includes('Lucknow') || t.company.includes('Lucknow') || t.text.includes('Lucknow')
  );

  const lucknowFaqs = [
    {
      question: "What is the cost of digital marketing in Lucknow in 2026?",
      answer: "Digital marketing pricing in Lucknow varies depending on the scale and custom goals of your business. At Veloxis Global, we don't offer rigid templates — instead, we tailor our pricing to what will drive the highest ROI for your business. Start with our free digital audit for a direct custom quote."
    },
    {
      question: "How long does SEO take to show results in Lucknow?",
      answer: "For most Lucknow businesses, initial SEO improvements start showing within 60 to 90 days. Local SEO rankings, such as appearing in Google Map Pack results for search terms in Gomti Nagar or Hazratganj, often see faster traction due to targeted geographic intent. We supply clear monthly reports so you can track progress."
    },
    {
      question: "Do you work with traditional businesses in Lucknow?",
      answer: "Yes. Helping traditional retail storefronts, heritage brands, and family-owned businesses in Lucknow transition online is one of our key areas. We create fast, mobile-friendly websites and run straightforward local search campaigns to transition offline reputation into online sales."
    },
    {
      question: "Can you rank my Lucknow business on Google Maps?",
      answer: "Absolutely. We specialize in Local SEO and Google Business Profile optimization for Lucknow businesses. We handle citation building, map tracking, and local review collection, positioning your brand in the Local 3-Pack so clients finding services near them choose you."
    },
    {
      question: "Do you offer Google Ads for Lucknow local businesses?",
      answer: "Yes. We design and manage target-focused Google Ads campaigns (Search, Display, and Performance Max) specifically for Lucknow-focused audiences. We optimize keyword targeting and negative keywords daily to ensure you get actual leads rather than wasted clicks."
    },
    {
      question: "Which Lucknow industries do you serve?",
      answer: "We support a broad range of industries across Lucknow, including retail showrooms, local healthcare clinics and hospitals, schools and higher education institutes, real estate builders, hospitality services, and manufacturing businesses."
    },
    {
      question: "Do you offer free consultations for Lucknow businesses?",
      answer: "Yes, we offer a free 30-minute digital strategy consultation along with a manual website audit for all Lucknow business owners. No obligations or strings attached — just clear insights into where your competitors stand and how you can outperform them."
    },
    {
      question: "What makes you different from other Lucknow agencies?",
      answer: "Unlike typical Lucknow agencies that sell pre-packaged plans and report vanity metrics like impressions, Veloxis Global focuses on business results. We build custom campaigns, provide transparent dashboards, and measure performance in actual phone calls, leads, and sales."
    }
  ];

  const faqSchema = getFAQPageSchema(lucknowFaqs);

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
            <Badge variant="indigo" className="mb-4">LUCKNOW REGIONAL OFFICE</Badge>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Best Digital Marketing Agency in Lucknow
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6 font-sans">
              Veloxis Global helps Lucknow businesses dominate Google search, social media and paid ads. Whether you're in Gomti Nagar, Hazratganj, Indira Nagar, Alambagh, Aliganj or Mahanagar — our data-driven digital marketing strategies are built for Lucknow's growing market.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8 font-sans">
              From heritage retail to modern healthcare and education, we understand how Lucknow's diverse business landscape works — and how to make digital marketing deliver real results for it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="lucknow-hero-free-audit-btn" href="/free-seo-audit" variant="primary">
                Get Free Agency Audit →
              </Button>
              <Button id="lucknow-hero-book-consult-btn" href="/contact" variant="outline">
                Book Consult Call
              </Button>
            </div>
          </div>

          {/* Market Data */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-25"></div>
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3 relative z-10">
              Lucknow Market Profile
            </h3>
            <div className="flex flex-col gap-4 relative z-10 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-royal-blue shrink-0" />
                <span><strong>Coverage:</strong> Gomti Nagar, Hazratganj, Indira Nagar, Alambagh, Aliganj, Mahanagar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Industries:</strong> Healthcare, Education, Hospitality, Retail, Real Estate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Services Focus:</strong> Google Map Pack SEO, WhatsApp Leads, Facebook Ads</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">REGIONAL GROWTH FUNNELS</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Lucknow-Based Marketing Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">Google Map Pack Dominance</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Make sure you are the first choice when users search for services "near me" in the region. We audit GBP setups, track local citation consistency, and implement review generation flows to boost map positioning.
              </p>
            </Card>
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">Targeted Meta & Instagram Leads</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Connect with local buyers. We construct localized Instagram creatives, manage geo-targeted ad sets, and implement WhatsApp link buttons so customers can chat with your team directly.
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
        customFaqs={lucknowFaqs} 
        title="Frequently Asked Questions" 
        badgeText="LUCKNOW FAQ" 
      />

      <CtaBanner />
    </>
  );
}
