import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { pricingCopy } from '../../constants/content';
import './Pricing.css';

const Pricing = () => {
  const navigate = useNavigate();

  return (
    <section className="pricing">
      <div className="pricing__inner">
        <motion.div
          className="pricing__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="pricing__label">{pricingCopy.badge}</span>
          <h2 className="pricing__title">{pricingCopy.title}</h2>
          <p className="pricing__subtitle">{pricingCopy.subtitle}</p>
        </motion.div>

        <div className="pricing__cards">
          {pricingCopy.plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing__card ${plan.badge === 'Most Popular' ? 'pricing__card--featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {plan.badge && <span className="pricing__card-badge">{plan.badge}</span>}
              <h3 className="pricing__card-name">{plan.title}</h3>
              <div className="pricing__card-price">
                {plan.price}<span>/ {plan.suffix}</span>
              </div>
              <p className="pricing__card-desc">{plan.desc}</p>
              <ul className="pricing__card-features">
                {plan.features.map((f, i) => (
                  <li key={i}><Check size={14} strokeWidth={1.5} /> {f}</li>
                ))}
              </ul>
              <button
                className={`pricing__card-cta ${plan.badge === 'Most Popular' ? 'pricing__card-cta--primary' : ''}`}
                onClick={() => navigate('/contact')}
              >
                {plan.cta} <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Banner */}
        <motion.div
          className="pricing__enterprise"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="pricing__enterprise-content">
            <h3>{pricingCopy.enterprise.title}</h3>
            <p>{pricingCopy.enterprise.desc}</p>
          </div>
          <button className="pricing__enterprise-cta" onClick={() => navigate('/contact')}>
            {pricingCopy.enterprise.cta} <ArrowRight size={14} strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
