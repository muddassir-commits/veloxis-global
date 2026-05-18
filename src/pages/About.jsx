import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SeoHead from '../components/seo/SeoHead';
import HeroSection from '../components/sections/HeroSection';
import GridSection from '../components/sections/GridSection';
import CTASection from '../components/sections/CTASection';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { aboutData } from '../data/about';
import './About.css'; // Keeping old CSS temporarily to avoid visual regressions

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <SeoHead 
        title={aboutData.seo.title} 
        description={aboutData.seo.description} 
      />

      {/* Hero Section */}
      <HeroSection 
        badge={aboutData.hero.badge}
        title={aboutData.hero.title}
        subtitle={aboutData.hero.subtitle}
      />

      {/* Founder Section - Custom layout still using Section primitive */}
      <Section className="about-founder">
        <Container>
          <div className="founder-content glass-card" style={{ padding: '40px', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#fff' }}>{aboutData.founder.title}</h2>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '20px' }}>{aboutData.founder.subtitle}</h3>
            {aboutData.founder.paragraphs.map((p, idx) => (
              <p key={idx} className="about-p">{p}</p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why We Exist */}
      <GridSection 
        className="about-why"
        title={aboutData.why.title}
        subtitle={aboutData.why.subtitle}
        items={aboutData.why.features}
      />

      {/* Execution Philosophy */}
      <GridSection 
        className="about-philosophy"
        style={{ background: 'rgba(10, 10, 12, 0.4)' }}
        title={aboutData.philosophy.title}
        subtitle={aboutData.philosophy.subtitle}
        items={aboutData.philosophy.features}
      />

      {/* CTA Section */}
      <CTASection 
        className="about-cta"
        title={aboutData.cta.title}
        subtitle={aboutData.cta.subtitle}
      >
        <Button variant="primary" onClick={() => navigate('/contact')} style={{ display: 'flex', alignItems: 'center' }}>
          Book Free Strategy Call <ArrowRight size={20} className="ml-2" />
        </Button>
        <Button variant="secondary" onClick={() => navigate('/services')}>
          Get Workflow Audit
        </Button>
      </CTASection>
    </div>
  );
};

export default About;

