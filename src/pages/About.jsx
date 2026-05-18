import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SeoHead from '../components/seo/SeoHead';
import { aboutData } from '../data/about';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <SeoHead
        title={aboutData.seo.title}
        description={aboutData.seo.description}
      />

      {/* Hero */}
      <section className="about__hero">
        <div className="about__hero-inner">
          <span className="about__label">{aboutData.hero.badge}</span>
          <h1 className="about__title">{aboutData.hero.title}</h1>
          <p className="about__subtitle">{aboutData.hero.subtitle}</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about__founder">
        <div className="about__founder-inner">
          <div className="about__founder-content">
            <h2>{aboutData.founder.title}</h2>
            <h3>{aboutData.founder.subtitle}</h3>
            {aboutData.founder.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="about__why">
        <div className="about__why-inner">
          <div className="about__why-header">
            <h2>{aboutData.why.title}</h2>
            <p>{aboutData.why.subtitle}</p>
          </div>
          <div className="about__why-grid">
            {aboutData.why.features.map((feature, idx) => (
              <div key={idx} className="about__why-item">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="about__philosophy">
        <div className="about__philosophy-inner">
          <div className="about__philosophy-header">
            <h2>{aboutData.philosophy.title}</h2>
            <p>{aboutData.philosophy.subtitle}</p>
          </div>
          <div className="about__philosophy-grid">
            {aboutData.philosophy.features.map((feature, idx) => (
              <div key={idx} className="about__philosophy-item">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <div className="about__cta-inner">
          <h2>{aboutData.cta.title}</h2>
          <p>{aboutData.cta.subtitle}</p>
          <div className="about__cta-actions">
            <button className="about__cta-primary" onClick={() => navigate('/contact')}>
              Book Free Strategy Call <ArrowRight size={14} strokeWidth={1.5} />
            </button>
            <button className="about__cta-secondary" onClick={() => navigate('/services')}>
              Get Workflow Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
