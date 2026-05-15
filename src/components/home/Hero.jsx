import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroCopy } from '../../constants/content';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container hero-content"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="hero-badge"
        >
          <span>{heroCopy.badge}</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hero-title"
        >
          {heroCopy.titleLine1} <br />
          <span>{heroCopy.titleLine2}</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hero-subtitle"
        >
          {heroCopy.subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hero-actions"
        >
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            {heroCopy.primaryCta} <ArrowRight size={20} />
          </button>
          <button className="btn-secondary" onClick={() => navigate('/projects')}>
            {heroCopy.secondaryCta} <ArrowRight size={18} fill="currentColor" />
          </button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="logo-cloud-wrapper"
      >
        <p>{heroCopy.trustTitle}</p>
        <div className="logo-cloud">
          {heroCopy.trustLabels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
