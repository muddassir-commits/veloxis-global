import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { aboutCopy } from '../constants/content';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <div className="container about-content">
        <span className="section-badge">{aboutCopy.badge}</span>
        <h1 className="hero-title">{aboutCopy.title}</h1>
        <p className="section-subtitle">{aboutCopy.subtitle}</p>
        
        <div className="about-main">
          {aboutCopy.paragraphs.map((p, i) => (
            <p key={i} className="about-p">{p}</p>
          ))}
        </div>

        <div className="about-stats">
          {aboutCopy.stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="about-cta" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <button className="btn-primary" onClick={() => navigate('/contact')}>
            Book a Strategy Call <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
