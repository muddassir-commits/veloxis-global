import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { constructMetadata, pageMeta } from '../lib/seo-config';
import { HeroSection } from '../components/sections/HeroSection';
// Below-fold sections are dynamically imported to keep the initial JS bundle lean.
// SSR stays on so their text is in the server-rendered HTML.
// Organization / WebSite schema is emitted once in app/layout.tsx.
const ServicesGrid = dynamic(() => import('../components/sections/ServicesGrid').then((m) => ({ default: m.ServicesGrid })));
const AudienceSplit = dynamic(() => import('../components/sections/AudienceSplit').then((m) => ({ default: m.AudienceSplit })));
const ProcessTimeline = dynamic(() => import('../components/sections/ProcessTimeline').then((m) => ({ default: m.ProcessTimeline })));
const PlaybooksPreview = dynamic(() => import('../components/sections/PlaybooksPreview').then((m) => ({ default: m.PlaybooksPreview })));
const LocationsGrid = dynamic(() => import('../components/sections/LocationsGrid').then((m) => ({ default: m.LocationsGrid })));
const BlogPreview = dynamic(() => import('../components/sections/BlogPreview').then((m) => ({ default: m.BlogPreview })));
const FaqAccordion = dynamic(() => import('../components/sections/FaqAccordion').then((m) => ({ default: m.FaqAccordion })));
const CtaBanner = dynamic(() => import('../components/sections/CtaBanner').then((m) => ({ default: m.CtaBanner })));

export const metadata: Metadata = constructMetadata(pageMeta.home);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <AudienceSplit />
      <ProcessTimeline />
      <PlaybooksPreview />
      <LocationsGrid />
      <BlogPreview />
      <FaqAccordion title="Questions builders and brokers ask us" badgeText="FAQ" />
      <CtaBanner />
    </>
  );
}
