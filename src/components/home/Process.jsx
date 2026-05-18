import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const steps = [
  { number: '01', title: 'Workflow Analysis', desc: 'Analyze existing processes and identify automation opportunities.' },
  { number: '02', title: 'Strategy & Mapping', desc: 'Create a custom automation roadmap tailored to your operations.' },
  { number: '03', title: 'System Build', desc: 'Build scalable n8n workflows connecting all your business tools.' },
  { number: '04', title: 'AI Integration', desc: 'Integrate AI tools and smart automation for peak performance.' },
  { number: '05', title: 'Test & Scale', desc: 'Optimize and scale automation systems for long-term growth.' },
];

const Process = () => {
  return (
    <section className="process">
      <div className="process__inner">
        <motion.div
          className="process__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="process__label">Methodology</span>
          <h2 className="process__title">Our operational process</h2>
        </motion.div>

        <div className="process__steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process__step"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <span className="process__step-number">{step.number}</span>
              <h3 className="process__step-title">{step.title}</h3>
              <p className="process__step-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
