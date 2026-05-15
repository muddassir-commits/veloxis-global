import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServicePage.css';
import FAQ from '../../components/home/FAQ';

const AIWebsites = () => {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      <Helmet>
        <title>AI Website Development | AI-Powered Business & Lead Generation Websites</title>
        <meta name="description" content="Build AI-powered websites with smart automation, lead capture systems, CRM integrations, AI chatbots, and conversion-focused workflows for business growth." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Website Development",
              "provider": {
                "@type": "Organization",
                "name": "Veloxis Global"
              },
              "description": "Build AI-powered websites with smart automation, lead capture systems, CRM integrations, AI chatbots, and conversion-focused workflows for business growth."
            }
          `}
        </script>
      </Helmet>

      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>AI Website Development for Modern Businesses</h1>
            <p>AI-Powered Websites Designed to Generate Leads & Automate Operations. Your website should do more than just look good. At Veloxis Global, we build AI-powered websites designed to automate workflows, capture leads, improve conversions, and support business growth.</p>
            <div className="service-cta-group">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Book Free Strategy Call <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Get AI Website Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-section-header">
            <h2>Smart Websites Built for Business Growth</h2>
            <p>Traditional websites are static. AI business websites are dynamic systems designed to automate communication, capture leads, and improve customer experiences.</p>
          </div>
          <div className="service-grid">
            <div className="service-feature-card">
              <h3>AI Chatbot Integration</h3>
              <p>Automate Customer Communication with AI. We integrate AI chatbots into websites to automate customer interactions, answer questions instantly, and qualify leads.</p>
            </div>
            <div className="service-feature-card">
              <h3>Lead Capture & Automation Systems</h3>
              <p>Turn Website Visitors into Qualified Leads. Our lead generation websites are designed to capture, organize, and automate lead management workflows with smart forms.</p>
            </div>
            <div className="service-feature-card">
              <h3>CRM & Workflow Automation</h3>
              <p>Connect Your Website to Your Business Systems. We build websites that integrate seamlessly with CRMs, automation platforms, and workflow systems to sync data instantly.</p>
            </div>
            <div className="service-feature-card">
              <h3>Conversion-Focused Website Development</h3>
              <p>Websites Designed to Increase Leads & Sales. Every website we build is optimized for user engagement, lead generation, and fast-loading mobile-first performance.</p>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  );
};

export default AIWebsites;
