import React from 'react';
import { motion } from 'framer-motion';
import './Industries.css';

const industries = [
  { name: 'SaaS Companies', desc: 'Automated onboarding and retention workflows' },
  { name: 'Marketing Agencies', desc: 'Multi-client campaign and reporting automation' },
  { name: 'Real Estate', desc: 'Lead routing and follow-up sequences' },
  { name: 'Ecommerce Brands', desc: 'Order processing and inventory sync' },
  { name: 'Healthcare Providers', desc: 'Patient intake and scheduling automation' },
  { name: 'Coaches & Consultants', desc: 'Appointment booking and nurture systems' },
  { name: 'Service-Based', desc: 'CRM automation and invoice workflows' },
  { name: 'Startups', desc: 'Lean operational infrastructure from day one' },
];

const Industries = () => {
  return (
    <section className="industries">
      <div className="industries__inner">
        <motion.div
          className="industries__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="industries__label">Industries</span>
          <h2 className="industries__title">Systems built for your sector</h2>
        </motion.div>

        <div className="industries__grid">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="industries__item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
            >
              <h3 className="industries__item-name">{industry.name}</h3>
              <p className="industries__item-desc">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
