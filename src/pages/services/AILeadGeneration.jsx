import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServicePage.css';
import FAQ from '../../components/home/FAQ';

const AILeadGeneration = () => {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      <Helmet>
        <title>AI Lead Generation Services | Automated Sales & Outreach Systems</title>
        <meta name="description" content="Generate more qualified leads with AI lead generation services, automated outreach, CRM automation, follow-up workflows, and AI sales automation systems." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Lead Generation Services",
              "provider": {
                "@type": "Organization",
                "name": "Veloxis Global"
              },
              "description": "Generate more qualified leads with AI lead generation services, automated outreach, CRM automation, follow-up workflows, and AI sales automation systems."
            }
          `}
        </script>
      </Helmet>

      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>AI Lead Generation Systems That Automate Sales & Outreach</h1>
            <p>Generate More Leads with AI-Powered Sales Automation. Veloxis Global helps businesses automate lead generation, outreach, follow-ups, and sales workflows using intelligent AI automation systems.</p>
            <div className="service-cta-group">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Book Free Strategy Call <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Get AI Lead Generation Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-section-header">
            <h2>AI Lead Generation Systems for Modern Businesses</h2>
            <p>Traditional lead generation takes time, requires manual effort, and often creates inconsistent results. Our systems automate the entire lead acquisition process.</p>
          </div>
          <div className="service-grid">
            <div className="service-feature-card">
              <h3>AI Prospecting Automation</h3>
              <p>Find & Qualify Leads Automatically. We build AI prospecting systems that automatically collect, organize, and qualify leads from multiple sources.</p>
            </div>
            <div className="service-feature-card">
              <h3>Cold Outreach Automation</h3>
              <p>Scale Outreach Without Scaling Your Team. Our AI sales automation systems help businesses automate cold outreach campaigns using personalized workflows and intelligent automation.</p>
            </div>
            <div className="service-feature-card">
              <h3>Automated Follow-Up Systems</h3>
              <p>Never Miss a Lead Opportunity. We build automated follow-up systems that keep prospects engaged automatically across email, WhatsApp, and SMS.</p>
            </div>
            <div className="service-feature-card">
              <h3>Appointment Booking Automation</h3>
              <p>Turn Leads into Booked Calls Faster. We develop appointment booking workflows that automate scheduling and reduce friction in the sales process.</p>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  );
};

export default AILeadGeneration;
