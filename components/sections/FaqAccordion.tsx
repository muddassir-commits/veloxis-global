import React from 'react';
import { faqs as defaultFaqs } from '../../data/faqs';
import { Badge } from '../ui/Badge';
import { SchemaMarkup } from '../ui/SchemaMarkup';
import { getFAQPageSchema } from '../../lib/schema';

interface FAQItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  customFaqs?: FAQItem[];
  title?: string;
  badgeText?: string;
  description?: string;
  /** Emit FAQPage JSON-LD. Turn off if the page already outputs FAQ schema. */
  withSchema?: boolean;
}

// FAQ list with every question and answer visible — no collapsed panels — so readers,
// search engines and AI crawlers all see the full text. (Name kept for existing imports.)
export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  customFaqs,
  title = 'Frequently Asked Questions',
  badgeText = 'QUESTIONS?',
  description = 'Straight answers about how we run real estate landing pages, ads and WhatsApp automation.',
  withSchema = true,
}) => {
  const activeFaqs = customFaqs || defaultFaqs;

  return (
    <section className="bg-white py-section-gap" id="faq">
      {withSchema && <SchemaMarkup schema={getFAQPageSchema(activeFaqs)} />}

      <div className="max-w-3xl mx-auto px-gutter">
        <div className="text-center mb-12">
          <Badge variant="orange" className="mb-4">
            {badgeText}
          </Badge>
          <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-body-md text-on-surface-variant leading-relaxed">{description}</p>
        </div>

        <dl className="flex flex-col gap-4">
          {activeFaqs.map((faq) => (
            <div key={faq.question} className="border border-slate-100 rounded-xl bg-slate-50 p-6">
              <dt>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg leading-snug">{faq.question}</h3>
              </dt>
              <dd className="mt-3 text-sm sm:text-body-md text-on-surface-variant leading-relaxed">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
