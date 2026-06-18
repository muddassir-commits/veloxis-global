import React from 'react';
import { Metadata } from 'next';
import { SchemaMarkup } from '../../../components/ui/SchemaMarkup';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { 
  generateBreadcrumbSchema, 
  generateServiceSchema, 
  generateFAQSchema 
} from '../../../lib/schema';
import TrainingContent from './TrainingContent';
import { constructMetadata, pageMeta } from '../../../lib/seo-config';

export const metadata: Metadata = constructMetadata({
  title: pageMeta.trainingEducation.title,
  description: pageMeta.trainingEducation.description,
  path: pageMeta.trainingEducation.path
});

export default function TrainingPage() {
  const breadcrumbItems = [
    { name: 'Services', href: '/services' },
    { name: 'Training & Education', href: '/services/training-education' }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://veloxisglobal.com' },
    { name: 'Services', url: 'https://veloxisglobal.com/services' },
    { name: 'Training & Education', url: 'https://veloxisglobal.com/services/training-education' }
  ]);

  const serviceSchema = generateServiceSchema(
    "Training & Education",
    "Corporate workshops, team training, and 1-on-1 mentorship to upskill your in-house marketing team."
  );

  const faqSchema = generateFAQSchema([
    {
      q: "What does Training & Education involve?",
      a: "We deliver group marketing workshops, corporate training bootcamps, and 1-on-1 marketing mentorship to help teams and founders master SEO, PPC, and automation in-house."
    },
    {
      q: "Who conducts the training sessions?",
      a: "Our core training programs are designed and led directly by our founder, Muddassir Ali, drawing from over 6+ years of agency scaling experience."
    },
    {
      q: "What formats are available?",
      a: "We offer self-paced online courses, interactive 4-week group workshops (with daily accountability), and customized on-site corporate training plans."
    },
    {
      q: "Do you provide hands-on playbooks?",
      a: "Yes, all students and corporate clients receive complete SOP playbooks, campaign setup templates, and copy outline sheets to execute campaigns."
    },
    {
      q: "What is the training pricing?",
      a: "Online courses start at ₹499. Live 4-week masterclass programs cost ₹25,000 to ₹50,000 per person. Corporate in-house packages start at ₹1,00,000."
    },
    {
      q: "Do we get support after training?",
      a: "Yes, group masterclasses and corporate workshops include 30 to 90 days of implementation Slack support to review setups and ad performance."
    },
    {
      q: "How many people have you trained?",
      a: "We have successfully trained over 300+ marketers and business owners across 17+ cohorts since launch."
    },
    {
      q: "Can you customize corporate syllabi?",
      a: "Yes, we audit your team's current skills and build custom modules focusing specifically on your industry's buying journeys."
    }
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      <section className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </section>

      <TrainingContent />
    </>
  );
}
