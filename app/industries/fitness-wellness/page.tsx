import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { constructMetadata } from '../../../lib/seo-config';
import { Badge } from '../../../components/ui/Badge';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { getBreadcrumbListSchema } from '../../../lib/schema';
import { CtaBanner } from '../../../components/sections/CtaBanner';

export const metadata: Metadata = constructMetadata({
  title: 'Fitness Centers, Gyms & Wellness Marketing | Veloxis Global',
  description: 'Lead-to-member conversion systems, local gym brand visibility, social media stories, and CRM retention workflows for wellness hubs.',
  path: '/industries/fitness-wellness'
});

export default function FitnessWellnessIndustryPage() {
  const breadcrumbItems = [
    { name: 'Industries', href: '/industries' },
    { name: 'Fitness & Wellness', href: '/industries/fitness-wellness' }
  ];

  const breadcrumbSchema = getBreadcrumbListSchema([
    { name: 'Home', item: 'https://veloxisglobal.com' },
    { name: 'Industries', item: 'https://veloxisglobal.com/industries' },
    { name: 'Fitness & Wellness', item: 'https://veloxisglobal.com/industries/fitness-wellness' }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      {/* Hero */}
      <section className="bg-white py-16 sm:py-24 text-left relative overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start">
            <Badge variant="teal" className="mb-4">FITNESS & WELLNESS MARKETING</Badge>
            <h1 className="text-4xl sm:text-headline-lg font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Acquire Gym Members & Therapy Bookings
            </h1>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-6">
              Acquire gym members and therapy bookings on autopilot. Veloxis Global sets up local lead acquisition campaigns on Meta and Google, creates engaging Instagram reels highlighting workouts and client results, and builds CRM lead-routing flows to ensure instant staff follow-ups.
            </p>
            <p className="text-base sm:text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Helping premium fitness centers, gyms, yoga studios, health spas, and wellness clinics stand out in Noida, Gurgaon, and Delhi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button id="fitness-hero-audit-btn" href="/free-seo-audit" variant="primary">
                Get Gym Audit →
              </Button>
              <Button id="fitness-hero-contact-btn" href="/contact" variant="outline">
                Talk to Fitness Strategist
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="font-extrabold text-slate-900 text-lg border-b border-slate-200 pb-3">Gym Case Summary</h3>
            <div className="flex flex-col gap-3 text-sm">
              <span><strong>Client Area:</strong> Noida Wellness Center</span>
              <span><strong>Timeframe:</strong> 5 Months scale</span>
              <span><strong>Outcome:</strong> 180+ new monthly memberships</span>
              <span className="text-xs font-bold text-royal-blue mt-2">Acquired over 120+ monthly direct WhatsApp queries</span>
            </div>
            <hr className="border-slate-200 my-1" />
            <Link href="/case-studies" className="text-xs font-bold text-royal-blue hover:underline flex items-center gap-1" id="fitness-case-link">
              Explore Our Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="bg-slate-50 py-section-gap">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="max-w-[700px] mx-auto mb-16">
            <Badge variant="indigo" className="mb-4">HOW WE ACQUIRE MEMBERS</Badge>
            <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900">Fitness Performance Playbook</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Lead Generation Ads</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Run local target ad campaigns offering free day passes or consultation invites, turning local searchers into member leads.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">Instagram Reels & Stories</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Produce engaging daily content showing trainers in action, customer reviews, and studio atmospheres to build local social trust.
              </p>
            </Card>
            <Card className="bg-white p-8">
              <h3 className="font-bold text-lg text-slate-900 mb-3">CRM & Lead Response</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Setup automated lead assignment rules and WhatsApp sequences to follow up with new leads within 2 minutes of form fills.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
