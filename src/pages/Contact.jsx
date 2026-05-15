import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import FAQ from '../components/home/FAQ';
import { contactCopy } from '../constants/content';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Veloxis Global | AI Automation & Lead Generation Experts</title>
        <meta name="description" content="Contact Veloxis Global to discuss AI automation, n8n workflows, lead generation systems, and AI-powered business growth solutions." />
      </Helmet>

      <section className="contact-hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="page-glow" style={{ 
          position: 'absolute', top: '0', right: '-10%', 
          width: '600px', height: '600px', 
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)', 
          filter: 'blur(100px)', zIndex: -1 
        }}></div>
        <div className="container">
          <span className="section-badge">Contact Veloxis Global</span>
          <h1 className="hero-title">Let’s Build Smarter Systems for Your Business</h1>
          <p className="breadcrumb">Automate Faster. Scale Smarter.</p>
        </div>
      </section>

      <section className="contact-section section-padding" style={{ position: 'relative' }}>
        <div className="page-glow" style={{ 
          position: 'absolute', bottom: '0', left: '-10%', 
          width: '500px', height: '500px', 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)', 
          filter: 'blur(100px)', zIndex: -1 
        }}></div>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-side">
              <span className="section-badge">{contactCopy.badge}</span>
              <h2 className="section-title">Why Businesses Contact Veloxis Global</h2>
              <p>Talk with Veloxis Global about AI automation, n8n workflows, lead generation systems, and scalable business infrastructure designed to help your business grow efficiently. Whether you need workflow automation, CRM systems, AI lead generation, or operational automation, we help businesses build systems that improve efficiency, reduce manual work, and support long-term growth.</p>
              
              <div className="contact-methods">
                <div className="method-card">
                  <div className="method-icon"><Phone size={24} /></div>
                  <div className="method-details">
                    <p>{contactCopy.phoneLabel}</p>
                    <h4>{contactCopy.phone}</h4>
                  </div>
                </div>
                <div className="method-card">
                  <div className="method-icon"><Mail size={24} /></div>
                  <div className="method-details">
                    <p>{contactCopy.emailLabel}</p>
                    <h4>{contactCopy.email}</h4>
                  </div>
                </div>
              </div>
              <p className="chat-hint">{contactCopy.availability}</p>
            </div>

            <div className="contact-form-side glass-card">
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder={contactCopy.fields.name} />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder={contactCopy.fields.email} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" placeholder={contactCopy.fields.phone} />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" placeholder={contactCopy.fields.location} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder={contactCopy.fields.message} rows="5"></textarea>
                </div>
                <div className="form-checkbox">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">I have read and accepted the terms and privacy policy</label>
                </div>
                <button type="submit" className="btn-primary">{contactCopy.submit}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="mock-map glass-card">
          <MapPin size={48} color="var(--accent-blue)" />
          <p>{contactCopy.locationTitle}</p>
          <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>{contactCopy.locationSubtitle}</span>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Contact;
