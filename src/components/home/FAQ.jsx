import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import './FAQ.css';

const faqs = [
  { q: 'What types of businesses do you work with?', a: 'We work with agencies, SaaS companies, service-based businesses, and startups that need structured automation systems — not generic marketing campaigns. Our clients typically have existing operations that need systematization and scaling.' },
  { q: 'How long does a typical automation project take?', a: 'Most implementations take 2-6 weeks depending on complexity. A simple CRM integration may take 1-2 weeks. A full outreach automation system with deduplication, multi-channel routing, and AI qualification typically takes 4-6 weeks.' },
  { q: 'Do you use n8n or Zapier?', a: 'We primarily use self-hosted n8n for production systems because it provides full control, zero per-execution costs, and enterprise-grade reliability. We use Make.com or Zapier for lighter integrations where appropriate.' },
  { q: 'What does a Strategy Call involve?', a: 'A 30-minute consultation where we audit your current workflows, identify automation opportunities, and outline a systems architecture roadmap. No sales pitch — just operational strategy.' },
  { q: 'Can you integrate with our existing CRM?', a: 'Yes. We integrate with HubSpot, GoHighLevel, Salesforce, Pipedrive, and most CRM systems via API. We handle custom field mapping, deduplication logic, and real-time sync configurations.' },
  { q: 'Do you offer ongoing support?', a: 'Yes. All projects include a handover period. We offer monthly retainer packages for ongoing monitoring, optimization, and expansion of your automation systems.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <span className="faq__label">FAQ</span>
          <h2 className="faq__title">Common questions</h2>
        </div>

        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq__question">
                <h3>{faq.q}</h3>
                {openIndex === index
                  ? <Minus size={16} strokeWidth={1.5} />
                  : <Plus size={16} strokeWidth={1.5} />
                }
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq__answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
