import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServicePage.css';
import FAQ from '../../components/home/FAQ';

const AIAutomation = () => {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      <Helmet>
        <title>AI Automation Services | Workflow & Business Automation Solutions</title>
        <meta name="description" content="Automate your business with AI automation services that streamline workflows, reduce manual work, improve efficiency, and help businesses scale faster." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "AI Automation Services",
              "provider": {
                "@type": "Organization",
                "name": "Veloxis Global"
              },
              "description": "Automate your business with AI automation services that streamline workflows, reduce manual work, improve efficiency, and help businesses scale faster."
            }
          `}
        </script>
      </Helmet>

      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>AI Automation Services That Help Businesses Scale Faster</h1>
            <p>Automate Workflows, Save Time & Increase Efficiency. Manual tasks slow businesses down. Veloxis Global helps companies automate operations using AI workflow automation, smart business systems, and scalable automation solutions designed to improve productivity and growth.</p>
            <div className="service-cta-group">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Book Free Strategy Call <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Get Automation Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-section-header">
            <h2>AI Automation Services for Modern Businesses</h2>
            <p>Our AI automation services are designed to help businesses eliminate repetitive work and improve operational efficiency using intelligent workflow systems.</p>
          </div>
          <div className="service-grid">
            <div className="service-feature-card">
              <h3>CRM & Customer Workflow Automation</h3>
              <p>We automate CRM workflows and customer management systems to help businesses improve communication, organize leads, and streamline sales operations.</p>
            </div>
            <div className="service-feature-card">
              <h3>Email & Task Automation</h3>
              <p>Eliminate Repetitive Manual Work. Veloxis Global develops automation systems that handle repetitive operational tasks automatically like email sequences, reporting, and team workflows.</p>
            </div>
            <div className="service-feature-card">
              <h3>Automated Lead Routing</h3>
              <p>Build scalable automation systems tailored to your business operations and growth goals to automatically assign leads to the right team members.</p>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  );
};

export default AIAutomation;
