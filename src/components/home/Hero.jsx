import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroCopy } from '../../constants/content';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="hero__label">{heroCopy.badge}</span>

          <h1 className="hero__title">
            {heroCopy.titleLine1}
            <span className="hero__title-accent"> {heroCopy.titleLine2}</span>
          </h1>

          <p className="hero__subtitle">{heroCopy.subtitle}</p>

          <div className="hero__actions">
            <button className="hero__cta-primary" onClick={() => navigate('/contact')}>
              {heroCopy.primaryCta}
              <ArrowRight size={16} strokeWidth={2} />
            </button>
            <button className="hero__cta-secondary" onClick={() => navigate('/projects')}>
              {heroCopy.secondaryCta}
              <ArrowUpRight size={14} strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Geometric operational visualization */}
          <div className="hero__diagram">
            <div className="diagram__ring diagram__ring--outer">
              <div className="diagram__ring diagram__ring--middle">
                <div className="diagram__ring diagram__ring--inner">
                  <div className="diagram__core">
                    <span>AI</span>
                    <span>OPS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="diagram__node diagram__node--1">CRM</div>
            <div className="diagram__node diagram__node--2">n8n</div>
            <div className="diagram__node diagram__node--3">API</div>
            <div className="diagram__node diagram__node--4">Lead</div>
          </div>
        </motion.div>
      </div>

      {/* Trust strip */}
      <motion.div
        className="hero__trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <span className="hero__trust-label">{heroCopy.trustTitle}</span>
        <div className="hero__trust-items">
          {heroCopy.trustLabels.map((label, i) => (
            <span key={i} className="hero__trust-item">{label}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
