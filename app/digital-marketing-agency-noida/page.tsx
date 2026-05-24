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
    title: "Best Digital Marketing Agency in Noida 2026 | Veloxis Global",
    description: "Top digital marketing agency in Noida for IT companies, startups & growing businesses. Expert SEO, Google Ads & Social Media. Serving Sector 62, Greater Noida & all of Noida. Free audit.",
    path: "/digital-marketing-agency-noida",
    ogImage: '/images/og/noida-og.jpg'
  }),
  keywords: "best digital marketing agency in Noida, digital marketing company Noida 2026, SEO services Noida, Google Ads agency Noida, startup marketing Noida, IT company digital marketing Noida, digital marketing Sector 62, social media marketing Noida"
};

export default function NoidaLocationPage() {
  const city = 'Noida';
  const localSchema = getLocalBusinessSchema({ city });

  const breadcrumbItems = [{ name: 'Noida Agency', href: '/digital-marketing-agency-noida' }];
  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Noida Agency', item: 'https://veloxisglobal.com/digital-marketing-agency-noida' }
  ]);

  // Filter local testimonials matching Noida / NCR
  const localTestimonials = testimonials.filter(
    t => t.location.includes('Noida') || t.company.includes('Noida') || t.text.includes('Noida')
  );

  const noidaFaqs = [
    {
      question: "What digital marketing services does Veloxis Global offer to Noida IT and tech companies?",
      answer: "We offer technical SEO, LinkedIn account-based marketing (ABM), search engine marketing (SEM), and marketing automation integration. We help Noida-based software and IT companies build scalable pipelines of domestic and international business leads."
    },
    {
      question: "How long does SEO take to produce results for Noida startups?",
      answer: "Startups in Noida can expect initial visibility and organic search growth in 60 to 90 days. Because Noida is a highly competitive startup hub, focusing on long-tail, high-intent keywords can accelerate lead generation and customer acquisition."
    },
    {
      question: "Do you specialize in B2B marketing for Noida businesses?",
      answer: "Yes, B2B lead generation is our core strength. We optimize your Noida business for organic search keywords, run targeted LinkedIn and Google Ads campaigns, and configure marketing automation to nurture prospects from awareness to close."
    },
    {
      question: "Can you help our Noida company rank for international search queries?",
      answer: "Absolutely. We are experienced in global SEO strategies, multilingual structures, and building domain authority. We help IT exporters and SaaS firms based in Noida capture high-value clients across North America, Europe, and the Middle East."
    },
    {
      question: "Do you manage Google Ads and PPC campaigns for Noida startups?",
      answer: "Yes. We set up, run, and optimize high-ROAS Google Search, Display, and Performance Max ad campaigns. We focus on daily keyword optimization, negative targeting, and page optimization to lower your startup's customer acquisition cost."
    },
    {
      question: "Which specific areas in Noida do you cover?",
      answer: "Our marketing services cover all major Noida zones, including the IT corridor in Sector 62, Sector 18, Sector 137, Noida Expressway commercial hubs, Noida Extension, and Greater Noida."
    },
    {
      question: "Do you offer free digital consultations for Noida startups?",
      answer: "Yes. We provide a free 30-minute growth strategy session along with a manual website audit for Noida startups and IT companies. We review your site speed, keyword positions, and competitor tactics to give you actionable advice."
    },
    {
      question: "What makes you different from typical digital agencies in Noida?",
      answer: "Unlike many agencies in Noida that focus on traffic volume and basic impressions, Veloxis Global is completely results-oriented. We measure campaign success in real revenue metrics, SQLs, and closed-won deals."
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
            <Badge variant="indigo" className="mb-4">NOIDA REGIONAL OFFICE</Badge>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Best Digital Marketing Agency in Noida
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6 font-sans">
              Veloxis Global helps Noida's IT companies, startups and growing businesses dominate digital. Whether you're in Sector 62, Sector 18, Sector 137, Greater Noida, Noida Extension or Film City — our performance-driven digital marketing strategies deliver real ROI.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8 font-sans">
              We understand Noida's tech-first business ecosystem and build campaigns that speak directly to its fast-moving, data-driven business culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="/free-seo-audit" variant="primary">
                Get Free Agency Audit →
              </Button>
              <Button href="/contact" variant="outline">
                Book Consult Call
              </Button>
            </div>
          </div>

          {/* Market Data */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-25"></div>
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3 relative z-10">
              Noida Market Profile
            </h3>
            <div className="flex flex-col gap-4 relative z-10 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-royal-blue shrink-0" />
                <span><strong>Coverage:</strong> Sector 62, 18, 137, Expressway, Extension, Film City, Greater Noida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-accent shrink-0" />
                <span><strong>Industries:</strong> IT/Tech, SaaS, Startups, Real Estate, Education</span>
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
            <Badge variant="indigo" className="mb-4">STARTUP & B2B BOOSTERS</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Noida-Based Marketing Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">Enterprise B2B Lead Acquisition</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Connect directly with enterprise decision-makers. We audit search intent, implement account-based marketing (ABM) structures, write high-converting whitepapers, and build qualified funnels optimized for local B2B software and service industries.
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
        customFaqs={noidaFaqs} 
        title="Frequently Asked Questions" 
        badgeText="NOIDA FAQ" 
      />

      <CtaBanner />
    </>
  );
}
