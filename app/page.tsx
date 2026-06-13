import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { constructMetadata, pageMeta } from '../lib/seo-config';
import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from '../lib/schema';
import { SchemaMarkup } from '../components/ui/SchemaMarkup';
import { HeroSection } from '../components/sections/HeroSection';
import { LogosStrip } from '../components/sections/LogosStrip';

// Dynamic imports for below-fold sections — keeps initial JS bundle lean.
// SSR is kept on (default) for SEO-critical content sections so their text
// remains in server-rendered HTML. TestimonialsSlider uses ssr:false because
// it has client-only drag state and auto-interval that breaks on SSR.
const ServicesGrid = dynamic(() => import('../components/sections/ServicesGrid').then(m => ({ default: m.ServicesGrid })));
const CasestudyFeature = dynamic(() => import('../components/sections/CasestudyFeature').then(m => ({ default: m.CasestudyFeature })));
const ProcessTimeline = dynamic(() => import('../components/sections/ProcessTimeline').then(m => ({ default: m.ProcessTimeline })));
const TestimonialsSlider = dynamic(
  () => import('../components/sections/TestimonialsSlider').then(m => ({ default: m.TestimonialsSlider })),
  { ssr: false }
);
const LocationsGrid = dynamic(() => import('../components/sections/LocationsGrid').then(m => ({ default: m.LocationsGrid })));
const BlogPreview = dynamic(() => import('../components/sections/BlogPreview').then(m => ({ default: m.BlogPreview })));
const CtaBanner = dynamic(() => import('../components/sections/CtaBanner').then(m => ({ default: m.CtaBanner })));

export const metadata: Metadata = {
  ...constructMetadata({
    title: "Best Digital Marketing Agency in India | Veloxis Global",
    description: "Veloxis Global — India's results-driven digital marketing agency. Expert SEO, Google Ads & social media marketing to scale your brand. Get a free audit today.",
    path: pageMeta.home.path
  }),
  keywords: "best digital marketing agency in India, digital marketing agency India, digital marketing services India 2026, performance marketing agency India, SEO agency India, Google Ads agency India"
};

export default function Home() {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();
  const businessSchema = getLocalBusinessSchema({ city: 'General' });

  return (
    <>
      {/* SEO Structured Data */}
      <SchemaMarkup schema={orgSchema} />
      <SchemaMarkup schema={websiteSchema} />
      <SchemaMarkup schema={businessSchema} />

      {/* Above-fold sections — static imports, render immediately */}
      <HeroSection />
      <LogosStrip />

      {/* Below-fold sections — dynamic imports, loaded after critical path */}
      <ServicesGrid />
      <CasestudyFeature />
      <ProcessTimeline />
      <TestimonialsSlider />
      <LocationsGrid />
      <BlogPreview />
      <CtaBanner />
    </>
  );
}
