import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <Helmet>
        <title>About Veloxis Global | AI Automation & Lead Generation Agency</title>
        <meta name="description" content="Learn how Veloxis Global helps businesses automate operations, manage leads, and scale growth through AI automation, CRM systems, n8n workflows, and lead generation infrastructure." />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container about-content">
          <span className="section-badge">About Veloxis Global</span>
          <h1 className="hero-title">The Systems-Driven AI Automation Agency for Business Growth</h1>
          <p className="hero-subtitle">
            Veloxis Global helps businesses generate, manage, and convert leads through AI automation, CRM systems, n8n workflows, and structured sales infrastructure designed for measurable growth.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-founder section-padding">
        <div className="container">
          <div className="founder-content glass-card" style={{ padding: '40px', borderRadius: '20px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: '#fff' }}>Founded by Muddassir Ali</h2>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '20px' }}>Built from Operational Experience, Not Just Ideas</h3>
            <p className="about-p">
              Veloxis Global was founded by Muddassir Ali after identifying a major operational gap inside growing businesses: leads were being generated, but there was no structured system to manage, route, follow up, and convert them efficiently.
            </p>
            <p className="about-p">
              Most companies were investing in marketing, ads, and outreach, but lacked CRM discipline, lead visibility, workflow automation, operational structure, and consistent follow-up systems.
            </p>
            <p className="about-p">
              Veloxis Global was built to solve that problem through AI automation, structured workflows, CRM systems, and scalable sales infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="about-why section-padding">
        <div className="container text-center">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>Why Veloxis Global Exists</h2>
          <p style={{ fontSize: '1.5rem', color: 'var(--primary)', marginBottom: '40px' }}>Businesses Don’t Have a Traffic Problem. They Have a Systems Problem.</p>
          <div className="problems-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ color: '#fff', marginBottom: '15px' }}>Missed Follow-Ups</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Leads fall through the cracks without automated nurturing and fast response systems.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ color: '#fff', marginBottom: '15px' }}>Disconnected Tools</h3>
              <p style={{ color: 'var(--text-secondary)' }}>CRMs, forms, and ad platforms don't talk to each other, creating manual data entry work.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ color: '#fff', marginBottom: '15px' }}>Slow Response Times</h3>
              <p style={{ color: 'var(--text-secondary)' }}>In today's market, delayed replies cost you deals. Speed to lead is paramount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Philosophy */}
      <section className="about-philosophy section-padding" style={{ background: 'rgba(10, 10, 12, 0.4)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>Built Around Execution, Not Hype</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
              Most automation agencies focus on tools. Veloxis focuses on operational clarity, measurable movement, scalable systems, reliable execution, and business outcomes.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="glass-card" style={{ padding: '30px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: '#fff', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 color="var(--primary)" /> Systems Over Shortcuts
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>We build operational systems that scale with your business.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: '#fff', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 color="var(--primary)" /> Automation with Purpose
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>Every workflow is designed to reduce friction and improve performance.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: '#fff', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 color="var(--primary)" /> Measurable Execution
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>We focus on visibility, tracking, and real operational movement.</p>
            </div>
            <div className="glass-card" style={{ padding: '30px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ color: '#fff', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 color="var(--primary)" /> Long-Term Infrastructure
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>We create systems businesses can depend on as they grow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta section-padding text-center">
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>Ready to Build Smarter Business Systems?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            Veloxis Global helps businesses automate operations, improve workflows, and scale growth through AI automation systems, CRM infrastructure, and workflow automation.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => navigate('/contact')}>
              Book Free Strategy Call <ArrowRight size={20} className="ml-2" />
            </button>
            <button className="btn-secondary" onClick={() => navigate('/services')}>
              Get Workflow Audit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
