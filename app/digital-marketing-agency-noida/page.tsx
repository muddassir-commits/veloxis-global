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
  title: pageMeta.noida.title,
  description: pageMeta.noida.description,
  path: pageMeta.noida.path,
  ogImage: '/images/og/noida-og.jpg'
});

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
      question: "What digital marketing services does Veloxis Global offer to local IT and SaaS companies?",
      answer: "We specialize in international SEO, high-ROAS Google Ads, LinkedIn account-based marketing (ABM), content marketing, and marketing automation integrations. We help regional technology firms build sustainable pipelines of qualified inbound leads."
    },
    {
      question: "Which commercial areas do your local services cover?",
      answer: "Our regional agency desk covers all key commercial hubs locally including Sector 62, Sector 18, Sector 137, Noida Expressway, Extension, Greater Noida, and Film City."
    },
    {
      question: "How does your local SEO strategy help real estate developers?",
      answer: "The local property market is hyper-competitive. We use geotargeted Local SEO, Google Map Pack optimization, custom landing page creation, and lead nurturing CRM flows to help developers rank for high-intent queries and capture serious buyers."
    },
    {
      question: "Do you offer marketing services tailored specifically for early-stage startups?",
      answer: "Yes. We offer agile digital growth sprints tailored for local startups. This includes landing page optimization, rapid-fire Google and Meta Ads, conversion rate optimization (CRO), and setting up analytics dashboards to track key growth metrics."
    },
    {
      question: "What makes Veloxis Global different from other digital marketing agencies in Sector 62?",
      answer: "Unlike agencies that focus only on traffic and vanity metrics, we align our campaigns with revenue. We integrate lead-scoring and CRM reporting so local business owners know exactly which keywords and campaigns are driving real sales."
    },
    {
      question: "Can you help our local B2B company rank for international search queries?",
      answer: "Absolutely. Our technical SEO team is experienced in international search structures, hreflang tags, and building global domain authority. We help SaaS and IT service exporters capture high-value leads in the US, Europe, and Gulf regions."
    },
    {
      question: "How quickly can we expect to see results from a Google Ads campaign managed by your team?",
      answer: "Google Ads campaigns typically start generating traffic and initial leads within 48 to 72 hours of launch. However, we continuously optimize campaigns over the first 30 days to lower cost-per-lead (CPL) and improve lead quality."
    },
    {
      question: "What is your pricing structure for digital marketing contracts?",
      answer: "We offer transparent, flexible retainer models tailored to your business goals. We do not lock our clients into rigid, long-term contracts. Contact us to receive a custom proposal and quote."
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
            <Badge variant="teal" className="mb-4">LOCAL TECH & STARTUP HUBS Desk</Badge>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Best Digital Marketing Agency in Noida
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Noida has quickly transformed into the premier tech and SaaS hub of North India, standing alongside Gurgaon as a key driver of the digital economy in the National Capital Region. From Sector 62's software clusters to the buzzing startup workspaces in Sector 18 and the major residential developments along the local Expressway and Extension, the city requires a highly specialized, tech-forward approach to digital acquisition.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              At Veloxis Global, we align our marketing operations with these unique local dynamics. We help regional startups and established enterprises design comprehensive search campaigns, engineer technical SEO funnels that rank for global buyer queries, and set up advanced Hubspot and CRM automation loops to qualify incoming leads.
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
              Noida Market Profile
            </h3>
            <div className="flex flex-col gap-4 relative z-10 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-royal-blue shrink-0" />
                <span><strong>Coverage:</strong> Sector 62, 18, 137, Expressway, Extension, Film City</span>
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
        customFaqs={noidaFaqs} 
        title="Frequently Asked Questions" 
        badgeText="NOIDA FAQ" 
      />

      <CtaBanner />
    </>
  );
}
