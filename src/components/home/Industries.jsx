import React from 'react';
import { motion } from 'framer-motion';
import './Industries.css';

const industries = [
  'SaaS Companies',
  'Marketing Agencies',
  'Real Estate Businesses',
  'Ecommerce Brands',
  'Healthcare Providers',
  'Coaches & Consultants',
  'Service-Based Businesses',
  'Startups & Growing Companies'
];

const Industries = () => {
  return (
    <section className="industries-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="industries-header"
        >
          <h2>Industries We Help Automate</h2>
          <p>Our workflow automation systems are customized to fit the operational needs of each industry.</p>
        </motion.div>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="industry-pill" 
              key={index}
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
