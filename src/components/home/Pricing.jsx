import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Shield, Globe, Users, Zap, Search, Settings } from 'lucide-react';
import { pricingCopy } from '../../constants/content';
import './Pricing.css';

const Pricing = () => {
  const navigate = useNavigate();
  const iconMap = {
    'Shield': <Shield size={16} />,
    'Zap': <Zap size={16} />,
    'Globe': <Globe size={16} />,
    'Users': <Users size={16} />,
    'Search': <Search size={16} />,
    'Settings': <Settings size={16} />
  };

  return (
    <section className="pricing section-padding">
      <div className="container">
        <div className="pricing-wrapper">
          <div className="pricing-info">
            <span className="section-badge">{pricingCopy.badge}</span>
            <h2 className="section-title">{pricingCopy.title}</h2>
            <p className="section-subtitle">{pricingCopy.subtitle}</p>
            
            <div className="enterprise-card glass-card">
              <h3>{pricingCopy.enterprise.title}</h3>
              <p>{pricingCopy.enterprise.desc}</p>
              <button className="btn-outline" onClick={() => navigate('/contact')}>{pricingCopy.enterprise.cta}</button>
            </div>
          </div>

          <div className="pricing-grid">
            {pricingCopy.plans.map((plan, index) => (
              <div key={index} className={`pricing-card glass-card ${plan.badge === 'Most Popular' ? 'highlighted' : ''}`}>
                <div className="card-header">
                  {plan.badge && <span className="badge">{plan.badge}</span>}
                  <h3>{plan.title}</h3>
                  <div className="price">{plan.price}<span>/ {plan.suffix}</span></div>
                  <p>{plan.desc}</p>
                </div>
                <ul className="price-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><Check size={16} /> {feature}</li>
                  ))}
                </ul>
                <button 
                  className={`btn-${plan.badge === 'Most Popular' ? 'secondary' : 'primary'} w-full`}
                  onClick={() => navigate('/contact')}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pricing-footer">
          <div className="all-plans-include">
            <span>All plans include:</span>
            <div className="include-items">
              <span><Shield size={16} /> Growth strategy clarity</span>
              <span><Zap size={16} /> Conversion-focused systems</span>
              <span><Globe size={16} /> Automation-first operations</span>
              <span><Users size={16} /> Human support and handover</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
