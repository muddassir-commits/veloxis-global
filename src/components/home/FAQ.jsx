import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';
import { faqCopy } from '../../constants/content';
import './FAQ.css';

const FAQ = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header text-center"
        >
          <span className="section-badge">{faqCopy.badge}</span>
          <h2 className="section-title">{faqCopy.title}</h2>
          <p className="section-subtitle">{faqCopy.subtitle}</p>
        </motion.div>

        <div className="faq-grid">
          {faqCopy.faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              key={index} 
              className={`faq-item glass-card ${openIndex === index ? 'open' : ''}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="faq-contact glass-card"
        >
          <div className="contact-info">
            <h3>{faqCopy.contactTitle}</h3>
            <p>{faqCopy.contactBody}</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/contact')}>{faqCopy.contactCta}</button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
