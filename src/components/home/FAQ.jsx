import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
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
        <div className="section-header text-center">
          <span className="section-badge">{faqCopy.badge}</span>
          <h2 className="section-title">{faqCopy.title}</h2>
          <p className="section-subtitle">{faqCopy.subtitle}</p>
        </div>

        <div className="faq-grid">
          {faqCopy.faqs.map((faq, index) => (
            <div key={index} className={`faq-item glass-card ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact glass-card">
          <div className="contact-info">
            <h3>{faqCopy.contactTitle}</h3>
            <p>{faqCopy.contactBody}</p>
          </div>
          <button className="btn-primary" onClick={() => navigate('/contact')}>{faqCopy.contactCta}</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
