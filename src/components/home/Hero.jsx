import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { heroCopy } from '../../constants/content';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-glow"></div>
      <div className="container hero-content">
        <div className="hero-badge">
          <span>{heroCopy.badge}</span>
        </div>
        <h1 className="hero-title">
          {heroCopy.titleLine1} <br />
          <span>{heroCopy.titleLine2}</span>
        </h1>
        <p className="hero-subtitle">
          {heroCopy.subtitle}
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            {heroCopy.primaryCta} <ArrowRight size={20} />
          </button>
          <button className="btn-secondary" onClick={() => navigate('/projects')}>
            {heroCopy.secondaryCta} <ArrowRight size={18} fill="currentColor" />
          </button>
        </div>
      </div>
      
      <div className="logo-cloud-wrapper">
        <p>{heroCopy.trustTitle}</p>
        <div className="logo-cloud">
          {heroCopy.trustLabels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
