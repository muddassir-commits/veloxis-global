import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServicePage.css';
import FAQ from '../../components/home/FAQ';

const N8nWorkflows = () => {
  const navigate = useNavigate();

  return (
    <div className="service-page">
      <Helmet>
        <title>n8n Workflow Automation Services | Custom Workflow & API Automation</title>
        <meta name="description" content="Automate workflows with custom n8n automation services. Connect apps, APIs, CRMs, and AI tools using scalable workflow automation systems." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "n8n Workflow Automation",
              "provider": {
                "@type": "Organization",
                "name": "Veloxis Global"
              },
              "description": "Automate workflows with custom n8n automation services. Connect apps, APIs, CRMs, and AI tools using scalable workflow automation systems."
            }
          `}
        </script>
      </Helmet>

      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <h1>n8n Workflow Automation Services for Scalable Business Operations</h1>
            <p>Automate Workflows, Connect Apps & Streamline Operations with n8n. Veloxis Global provides custom n8n workflow automation services that help businesses automate repetitive tasks, connect applications, integrate APIs, and streamline operations using scalable workflow systems.</p>
            <div className="service-cta-group">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Book Free Strategy Call <ArrowRight size={20} />
              </button>
              <button className="btn-secondary" onClick={() => navigate('/contact')}>
                Get n8n Workflow Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-section-header">
            <h2>Custom Workflow Automation Built for Your Business</h2>
            <p>We create custom n8n workflows that automate operations across sales, marketing, customer support, and internal business systems.</p>
          </div>
          <div className="service-grid">
            <div className="service-feature-card">
              <h3>CRM Automation</h3>
              <p>Automatically capture, organize, and update leads inside your CRM using custom n8n workflows. We support lead assignment, CRM updates, and follow-up triggers.</p>
            </div>
            <div className="service-feature-card">
              <h3>API Integration Automation</h3>
              <p>Connect APIs, applications, and databases into one seamless automation system using scalable n8n workflows.</p>
            </div>
            <div className="service-feature-card">
              <h3>Lead Routing Automation</h3>
              <p>Automatically route leads to the correct sales teams, pipelines, or systems using intelligent workflow automation.</p>
            </div>
            <div className="service-feature-card">
              <h3>WhatsApp Workflow Automation</h3>
              <p>Automate WhatsApp communication workflows for lead follow-ups, appointment reminders, customer notifications, and support automation.</p>
            </div>
          </div>
        </div>
      </section>
      
      <FAQ />
    </div>
  );
};

export default N8nWorkflows;
