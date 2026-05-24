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
  title: pageMeta.lucknow.title,
  description: pageMeta.lucknow.description,
  path: pageMeta.lucknow.path,
  ogImage: '/images/og/lucknow-og.jpg'
});

export default function LucknowLocationPage() {
  const city = 'Lucknow';
  const localSchema = getLocalBusinessSchema({ city });

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
      question: "How can a local SEO campaign help my Lucknow-based retail store or business?",
      answer: "Our Local SEO campaigns optimize your digital footprint (specifically Google Map Pack and local directories) so when people search for your services in Lucknow, Hazratganj, or Gomti Nagar, your brand ranks first. This drives immediate store traffic and customer calls."
    },
    {
      question: "Which commercial areas in Lucknow do your marketing services cover?",
      answer: "We service clients across all major zones in Lucknow, including Gomti Nagar, Hazratganj, Indira Nagar, Alambagh, Aliganj, Mahanagar, and surrounding NCR."
    },
    {
      question: "Can you help our Lucknow hospital or clinic increase doctor appointment bookings?",
      answer: "Yes. Healthcare marketing is one of our key specialties. We launch compliant Google search ads targeting local healthcare queries, optimize your Google Maps profile for map searches, and create clear landing pages to double booking conversions."
    },
    {
      question: "What social media platforms work best for advertising local Lucknow brands?",
      answer: "For local consumer businesses, hotels, and schools in Lucknow, Meta platforms (Instagram and Facebook) are highly effective. We design localized visual creatives, target regional demographics, and add direct-to-WhatsApp messaging buttons for easy lead acquisition."
    },
    {
      question: "Do you build websites optimized for mobile users in Lucknow?",
      answer: "Yes. Mobile responsiveness and speed are critical. We build websites using modern frameworks like Next.js that load in under 1.5 seconds, ensuring users with varying mobile connections across Lucknow can navigate your site smoothly."
    },
    {
      question: "How does Veloxis Global support traditional family-owned businesses transitioning to digital in Lucknow?",
      answer: "We make digital transition easy. We handle everything from setting up business emails and analytics to designing simple, clean websites and managing initial Google ads. We provide clear, plain-language monthly reports focused on phone calls and revenue."
    },
    {
      question: "What budget should our Lucknow-based business allocate for digital advertising?",
      answer: "We tailor budgets to your goals. Many Lucknow SMEs start with a modest daily ad spend on Google or Meta and scale up once we demonstrate a positive return on investment. Contact us to receive a custom budget recommendation."
    },
    {
      question: "How do we get started with a digital audit for our Lucknow business?",
      answer: "Simply complete our free audit request form. Our certified marketing directors will manually analyze your website speed, map rankings, and competitor positions, delivering a step-by-step roadmap within 48 hours."
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
            <Badge variant="indigo" className="mb-4">LUCKNOW REGIONAL DESK</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Best Digital Marketing Agency in Lucknow
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Lucknow, the historic city of Nawabs, is experiencing a major economic revival, transforming from a traditional trade city into a modern, digitizing commercial hub of Uttar Pradesh. From bustling heritage retail blocks in Hazratganj to upscale corporate offices and hospitals in Gomti Nagar and dense residential hubs in Indira Nagar, Aliganj, and Alambagh, local businesses are eager to expand online.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              At Veloxis Global, we bridge this gap by bringing enterprise-level digital marketing strategies to local Lucknow enterprises. We specialize in optimizing Google Business Profiles to rank #1 in the Local 3-Pack, building lightning-fast websites that rank for high-intent regional search queries, and deploying Facebook and Instagram ad funnels that directly drive customer phone calls, store visits, and appointment inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button href="/free-seo-audit" variant="primary">
                Get Free Lucknow Audit →
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
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Lucknow-Focused Marketing Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">Google Map Pack Dominance</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Make sure you are the first choice when users search for services "near me" in Lucknow. We audit GBP setups, track local citation consistency, and implement review generation flows to boost map positioning.
              </p>
            </Card>
            <Card className="bg-white border border-slate-100 p-8">
              <h3 className="font-extrabold text-slate-900 text-lg mb-3">Targeted Meta & Instagram Leads</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Connect with Lucknow's local buyers. We construct localized Instagram creatives, manage geo-targeted ad sets, and implement WhatsApp link buttons so customers can chat with your team directly.
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
              <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">What Lucknow Brands Say</h2>
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
        title="Frequently Asked Questions in Lucknow" 
        badgeText="LUCKNOW FAQ" 
      />

      <CtaBanner />
    </>
  );
}
