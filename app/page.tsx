import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { constructMetadata, pageMeta } from '../lib/seo-config';
import { HeroSection } from '../components/sections/HeroSection';
// Below-fold sections are dynamically imported to keep the initial JS bundle lean.
// SSR stays on so their text is in the server-rendered HTML.
// Organization / WebSite schema is emitted once in app/layout.tsx.
const EcommerceSystem = dynamic(() => import('../components/sections/EcommerceSystem').then((m) => ({ default: m.EcommerceSystem })));
const IndustriesStrip = dynamic(() => import('../components/sections/IndustriesStrip').then((m) => ({ default: m.IndustriesStrip })));
const ServicesGrid = dynamic(() => import('../components/sections/ServicesGrid').then((m) => ({ default: m.ServicesGrid })));
const AuditToolBlock = dynamic(() => import('../components/sections/AuditToolBlock').then((m) => ({ default: m.AuditToolBlock })));
const ProcessTimeline = dynamic(() => import('../components/sections/ProcessTimeline').then((m) => ({ default: m.ProcessTimeline })));
const WhyVeloxis = dynamic(() => import('../components/sections/WhyVeloxis').then((m) => ({ default: m.WhyVeloxis })));
const BlogPreview = dynamic(() => import('../components/sections/BlogPreview').then((m) => ({ default: m.BlogPreview })));
const FaqAccordion = dynamic(() => import('../components/sections/FaqAccordion').then((m) => ({ default: m.FaqAccordion })));
const CtaBanner = dynamic(() => import('../components/sections/CtaBanner').then((m) => ({ default: m.CtaBanner })));

export const metadata: Metadata = constructMetadata(pageMeta.home);

// Homepage: e-commerce first since 10 Nov 2026.
export default function Home() {
  return (
    <>
      <HeroSection />
      <EcommerceSystem />
      <IndustriesStrip />
      <ServicesGrid />
      <AuditToolBlock />
      <ProcessTimeline />
      <WhyVeloxis />
      <BlogPreview />
      <FaqAccordion title="Questions online brands ask us" badgeText="FAQ" />
      <CtaBanner />
    </>
  );
}
