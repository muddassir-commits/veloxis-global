'use client';

import React, { useState } from 'react';
import { faqs as defaultFaqs } from '../../data/faqs';
import { Badge } from '../ui/Badge';
import { ChevronDown } from 'lucide-react';
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
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  customFaqs,
  title = 'Frequently Asked Questions',
  badgeText = 'QUESTIONS?'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeFaqs = customFaqs || defaultFaqs;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schema = getFAQPageSchema(activeFaqs);

  return (
    <section className="bg-white py-section-gap" id="faq">
      {/* Inject FAQ Schema */}
      <SchemaMarkup schema={schema} />

      <div className="max-w-3xl mx-auto px-gutter">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="orange" className="mb-4">
            {badgeText}
          </Badge>
          <h2 className="text-3xl sm:text-headline-lg font-bold text-slate-900 tracking-tight leading-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-body-md text-on-surface-variant leading-relaxed">
            Get answers to common queries about our digital marketing and optimization services.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-4">
          {activeFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50 transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 hover:text-royal-blue transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-royal-blue' : 'text-slate-400'}`} />
                </button>
                
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? 'max-h-[300px] border-t border-slate-100/50' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 text-sm sm:text-body-md text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
