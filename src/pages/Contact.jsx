import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import FAQ from '../components/home/FAQ';
import SeoHead from '../components/seo/SeoHead';
import HeroSection from '../components/sections/HeroSection';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { contactData } from '../data/contact';
import './Contact.css'; // Keeping old CSS temporarily

const Contact = () => {
  return (
    <div className="contact-page">
      <SeoHead 
        title={contactData.seo.title} 
        description={contactData.seo.description} 
      />

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="page-glow" style={{ 
          position: 'absolute', top: '0', right: '-10%', 
          width: '600px', height: '600px', 
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)', 
          filter: 'blur(100px)', zIndex: -1 
        }}></div>
        <HeroSection 
          badge={contactData.hero.badge}
          title={contactData.hero.title}
          subtitle={contactData.hero.subtitle}
        />
      </div>

      <Section className="contact-section" style={{ position: 'relative' }}>
        <div className="page-glow" style={{ 
          position: 'absolute', bottom: '0', left: '-10%', 
          width: '500px', height: '500px', 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)', 
          filter: 'blur(100px)', zIndex: -1 
        }}></div>
        <Container>
          <div className="contact-grid">
            <div className="contact-info-side">
              <Badge>{contactData.info.badge}</Badge>
              <h2 className="section-title">{contactData.info.title}</h2>
              <p>{contactData.info.description}</p>
              
              <div className="contact-methods">
                <div className="method-card">
                  <div className="method-icon"><Phone size={24} /></div>
                  <div className="method-details">
                    <p>{contactData.methods[0].label}</p>
                    <h4>{contactData.methods[0].value}</h4>
                  </div>
                </div>
                <div className="method-card">
                  <div className="method-icon"><Mail size={24} /></div>
                  <div className="method-details">
                    <p>{contactData.methods[1].label}</p>
                    <h4>{contactData.methods[1].value}</h4>
                  </div>
                </div>
              </div>
              <p className="chat-hint">{contactData.info.availability}</p>
            </div>

            <div className="contact-form-side glass-card">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{contactData.form.nameLabel}</label>
                    <input type="text" placeholder={contactData.form.namePlaceholder} />
                  </div>
                  <div className="form-group">
                    <label>{contactData.form.emailLabel}</label>
                    <input type="email" placeholder={contactData.form.emailPlaceholder} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{contactData.form.phoneLabel}</label>
                    <input type="text" placeholder={contactData.form.phonePlaceholder} />
                  </div>
                  <div className="form-group">
                    <label>{contactData.form.locationLabel}</label>
                    <input type="text" placeholder={contactData.form.locationPlaceholder} />
                  </div>
                </div>
                <div className="form-group">
                  <label>{contactData.form.messageLabel}</label>
                  <textarea placeholder={contactData.form.messagePlaceholder} rows="5"></textarea>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">{contactData.form.termsLabel}</label>
                </div>
                <Button type="submit" variant="primary">{contactData.form.submitText}</Button>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      <section className="map-section">
        <div className="mock-map glass-card">
          <MapPin size={48} color="var(--accent-blue)" />
          <p>{contactData.location.title}</p>
          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{contactData.location.subtitle}</span>
        </div>
      </section>

      {/* Kept FAQ as is for now until we refactor home components */}
      <FAQ />
    </div>
  );
};

export default Contact;

