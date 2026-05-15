import React from 'react';
import { motion } from 'framer-motion';
import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Business Workflow Analysis',
    desc: 'We analyze your existing processes, identify inefficiencies, and discover automation opportunities.'
  },
  {
    number: '02',
    title: 'Automation Strategy Planning',
    desc: 'Our team creates a custom automation roadmap tailored to your business goals and operational needs.'
  },
  {
    number: '03',
    title: 'n8n Workflow Development',
    desc: 'We build scalable n8n workflows that connect systems, automate tasks, and streamline business operations.'
  },
  {
    number: '04',
    title: 'AI Integration & Optimization',
    desc: 'We integrate AI tools, automation systems, and smart workflows to improve performance and efficiency.'
  },
  {
    number: '05',
    title: 'Testing & Scaling',
    desc: 'After testing and optimization, we scale your automation systems to support long-term business growth.'
  }
];

const Process = () => {
  return (
    <section className="process-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="process-header"
        >
          <h2>Our AI Automation Process</h2>
          <p>A structured approach to transforming your business operations with intelligent automation systems.</p>
        </motion.div>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="process-step" 
              key={index}
            >
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
