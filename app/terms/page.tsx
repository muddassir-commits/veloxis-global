import React from 'react';
import { Metadata } from 'next';
import { Breadcrumb } from '../../components/ui/Breadcrumb';
import { Badge } from '../../components/ui/Badge';
import { constructMetadata } from '../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service | Veloxis Global Digital Marketing",
  description: "Read the Terms of Service for Veloxis Global. Learn about our month-to-month service agreements and website usage terms. Contact us with questions.",
  path: "/terms"
});

export default function TermsPage() {
  const breadcrumbItems = [{ name: 'Terms of Service', href: '/terms' }];

  return (
    <>
      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter text-left">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 text-left font-sans">
        <div className="max-w-3xl mx-auto px-gutter">
          <Badge color="indigo" className="mb-4">LEGAL DETAILS</Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-xs text-slate-400 font-bold mb-8 uppercase tracking-wider">Last Updated: May 24, 2026</p>

          <div className="flex flex-col gap-6 text-sm sm:text-body-md text-slate-600 leading-relaxed">
            <p>By accessing this website, you agree to comply with and be bound by the following Terms of Service. If you disagree with any part of these terms, please do not use our site or request audits.</p>
            
            <h2 className="text-lg font-extrabold text-slate-900 mt-4">1. Strategy Audits</h2>
            <p>Our Free SEO Audits are delivered in good faith as manual reviews of your public web presence. We make no guarantees regarding rank improvements or lead conversions from implementing our recommended checklists.</p>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">2. Month-to-Month Service Agreement</h2>
            <p>Our digital marketing packages are billed on a month-to-month basis, unless specified otherwise in a signed contract. Clients can cancel recurring campaigns by giving a 30-day written notice.</p>

            <h2 className="text-lg font-extrabold text-slate-900 mt-4">3. Governing Law</h2>
            <p>Any claims relating to Veloxis Global services shall be governed by the laws of India and subject to Kanpur jurisdiction.</p>
          </div>
        </div>
      </section>
    </>
  );
}
