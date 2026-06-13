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
    title: "Best Digital Marketing Agency in Kanpur 2026 | Veloxis Global",
    description: "Looking for the best digital marketing agency in Kanpur? Veloxis Global delivers proven SEO, Google Ads & social media results for Kanpur businesses. Free audit.",
    path: "/digital-marketing-agency-kanpur",
    ogImage: '/images/og/kanpur-og.jpg'
  }),
  keywords: "best digital marketing agency in Kanpur, digital marketing company Kanpur 2026, SEO services Kanpur, Google Ads agency Kanpur, MSME digital marketing Kanpur, online marketing Kanpur, digital marketing Civil Lines Kanpur, textile business marketing Kanpur"
};

export default function KanpurLocationPage() {
  const city = 'Kanpur';

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Veloxis Global",
    "description": "Best digital marketing agency in Kanpur — SEO, Google Ads and Social Media for Kanpur's textile, MSME and manufacturing businesses.",
    "telephone": "+918887620727",
    "email": "info@veloxisglobal.com",
    "url": "https://veloxisglobal.com/digital-marketing-agency-kanpur",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "12 Faithful Ganj, Cantt",
      "addressLocality": "Kanpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "208004",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.4499",
      "longitude": "80.3319"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kanpur"
    },
    "priceRange": "₹₹"
  };

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
      question: "What is the cost of digital marketing in Kanpur in 2026?",
      answer: "Digital marketing pricing in Kanpur varies by scope. At Veloxis Global, we offer custom pricing built around your goals — no fixed packages. Start with our free audit and we'll recommend exactly what you need and what it will cost. No surprises, no lock-in contracts."
    },
    {
      question: "How long does SEO take to show results in Kanpur?",
      answer: "For most Kanpur businesses, initial ranking improvements appear within 60-90 days. Hyperlocal keywords like \"digital marketing agency Kanpur\" or industry-specific terms can rank faster due to lower competition. We set realistic, honest timelines from day one."
    },
    {
      question: "Do you work with small businesses and MSMEs in Kanpur?",
      answer: "Yes — in fact, Kanpur's MSME and manufacturing sector is one of our primary focus areas. We understand the unique challenges of Kanpur's industrial businesses and have built strategies specifically for them."
    },
    {
      question: "Can you help my Kanpur business rank on Google Maps?",
      answer: "Absolutely. Local SEO and Google Business Profile optimisation is our strongest service for Kanpur businesses. We can get your business appearing in Google's Local Pack for Kanpur-specific searches."
    },
    {
      question: "Do you offer Google Ads for Kanpur businesses?",
      answer: "Yes. We manage Google Ads campaigns for Kanpur businesses across all campaign types — Search, Display, and Performance Max. Every rupee is tracked and optimised for your specific Kanpur market."
    },
    {
      question: "Which Kanpur industries do you specialise in?",
      answer: "Textile and garment industry, leather goods and footwear, manufacturing and engineering, MSME retail, education institutes, healthcare clinics, and real estate. We have tailored strategies for each sector."
    },
    {
      question: "Do you offer free consultations for Kanpur businesses?",
      answer: "Yes — we offer a free 30-minute strategy call plus a free website SEO audit for all Kanpur enquiries. No commitments. Just clarity on where you stand and what's possible."
    },
    {
      question: "How is Veloxis Global different from other Kanpur digital agencies?",
      answer: "Most Kanpur agencies offer templated services at low prices with average results. Veloxis Global is built differently — custom strategy per client, transparent reporting, and results measured in business outcomes not just traffic numbers. We're also based here in Kanpur, so we genuinely understand your market."
    }
  ];

  const faqSchema = getFAQPageSchema(kanpurFaqs);

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
            <Badge variant="orange" className="mb-4">KANPUR INDUSTRIAL DESK</Badge>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Best Digital Marketing Agency in Kanpur
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6 font-sans">
              Veloxis Global is Kanpur's most results-driven digital marketing agency — headquartered right here in Kanpur at 12 Faithful Ganj, Cantt. We help Kanpur businesses in textile, leather, manufacturing, retail and MSME sectors grow online with proven SEO, Google Ads and Social Media strategies.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8 font-sans">
              Whether you're in Civil Lines, Swaroop Nagar, Kidwai Nagar, GT Road, Kalyanpur or Kakadeo — our digital marketing experts understand Kanpur's local market, buyer psychology and competitive landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="kanpur-hero-free-audit-btn" href="/free-seo-audit" variant="primary">
                Get Free Agency Audit →
              </Button>
              <Button id="kanpur-hero-book-visit-btn" href="/contact" variant="outline">
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

      {/* Why Choose Us for Kanpur Section */}
      <section className="bg-white py-section-gap border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="teal" className="mb-4">WHY PARTNER WITH US</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Why Choose Us for Kanpur</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            <Card className="bg-slate-50 border border-slate-100 p-8 flex gap-4">
              <span className="text-emerald-500 text-xl font-bold shrink-0">✅</span>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">Physically based in Kanpur</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Physically based in Kanpur — 12 Faithful Ganj, Cantt
                </p>
              </div>
            </Card>
            <Card className="bg-slate-50 border border-slate-100 p-8 flex gap-4">
              <span className="text-emerald-500 text-xl font-bold shrink-0">✅</span>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">Deep sector understanding</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Deep understanding of Kanpur's textile, leather & MSME sectors
                </p>
              </div>
            </Card>
            <Card className="bg-slate-50 border border-slate-100 p-8 flex gap-4">
              <span className="text-emerald-500 text-xl font-bold shrink-0">✅</span>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">B2B & Manufacturing expertise</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Experience with Kanpur's B2B and manufacturing businesses
                </p>
              </div>
            </Card>
            <Card className="bg-slate-50 border border-slate-100 p-8 flex gap-4">
              <span className="text-emerald-500 text-xl font-bold shrink-0">✅</span>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">Bilingual campaigns</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Bilingual campaigns — Hindi + English for Kanpur audiences
                </p>
              </div>
            </Card>
            <Card className="bg-slate-50 border border-slate-100 p-8 flex gap-4">
              <span className="text-emerald-500 text-xl font-bold shrink-0">✅</span>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">In-person meetings</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  In-person meetings available — no remote-only limitations
                </p>
              </div>
            </Card>
            <Card className="bg-slate-50 border border-slate-100 p-8 flex gap-4">
              <span className="text-emerald-500 text-xl font-bold shrink-0">✅</span>
              <div>
                <h3 className="font-extrabold text-slate-900 text-base mb-2">Transparent reporting</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Transparent reporting — live dashboards, no vanity metrics
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      {localTestimonials.length > 0 && (
        <section className="bg-slate-50 py-section-gap">
          <div className="max-w-container-max mx-auto px-gutter text-center">
            <div className="max-w-[700px] mx-auto mb-16">
              <Badge variant="orange" className="mb-4">VERIFIED RESULTS</Badge>
              <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">What Local Brands Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              {localTestimonials.map((t, idx) => (
                <Card key={idx} hoverable={false} className="border border-slate-100 p-8 bg-white">
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

      <CtaBanner 
        title="Ready to Dominate Kanpur's Digital Space in 2026?"
        description="Join Kanpur businesses already growing with Veloxis Global. Get your free audit — delivered within 48 hours."
      />
    </>
  );
}
