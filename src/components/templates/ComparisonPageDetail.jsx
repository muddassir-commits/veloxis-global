import React from 'react';
import SeoHead from '../seo/SeoHead';
import HeroSection from '../sections/HeroSection';
import CTASection from '../sections/CTASection';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Link } from 'react-router-dom';

/**
 * ComparisonPageDetail Programmatic Template
 * 
 * Renders dynamically composed competitor vs tool comparisons (Informational/Comparison Intent).
 * Offers clear metrics, unbiased breakdown, and highly conversion-optimized migration paths.
 */
const ComparisonPageDetail = ({ pageData }) => {
  const { seo, hero, breadcrumbs, relationships, cta, faqs } = pageData;
  const competitor = relationships.competitor;

  return (
    <div className="programmatic-page comparison-page-detail" style={{ paddingTop: '100px' }}>
      <SeoHead 
        title={seo.title} 
        description={seo.description}
        schemaType={seo.schemaType}
      />

      {/* Breadcrumbs Navigation */}
      <nav className="breadcrumbs" style={{ padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Container>
          <div style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <Link to={crumb.path} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {crumb.label}
                </Link>
                {idx < breadcrumbs.length - 1 && <span>&gt;</span>}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <HeroSection 
        badge={hero.badge}
        title={hero.title}
        subtitle={hero.subtitle}
      >
        <Button variant="primary">{cta.action}</Button>
      </HeroSection>

      {/* Comparison Grid */}
      {competitor && (
        <Section>
          <Container>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>
              Side-by-Side Architectural Breakdown
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              
              <div className="glass-card" style={{ padding: '30px', borderRadius: '15px', border: '1px solid rgba(255,0,0,0.1)' }}>
                <Badge variant="secondary" style={{ background: 'rgba(255,0,0,0.1)', color: '#ff4d4d' }}>
                  THE COMPETITION
                </Badge>
                <h3 style={{ color: '#fff', marginTop: '15px', marginBottom: '20px' }}>Using {competitor.name}</h3>
                
                <h4 style={{ color: '#fff', marginBottom: '10px' }}>Key Drawbacks:</h4>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.8' }}>
                  {competitor.cons.map((con, idx) => (
                    <li key={idx}>{con}</li>
                  ))}
                </ul>
              </div>

              <div className="glass-card" style={{ padding: '30px', borderRadius: '15px', border: '1px solid rgba(0,240,255,0.2)' }}>
                <Badge variant="primary" style={{ background: 'rgba(0,240,255,0.1)', color: 'var(--primary)' }}>
                  THE VELOXIS ADVANTAGE
                </Badge>
                <h3 style={{ color: '#fff', marginTop: '15px', marginBottom: '20px' }}>Using Custom n8n Systems</h3>
                
                <h4 style={{ color: '#fff', marginBottom: '10px' }}>Key Advantages:</h4>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.8' }}>
                  <li>Zero Task Quotas (Eliminate exorbitant Zapier bills)</li>
                  <li>Deep Custom JS Execution & Complex Looping natively</li>
                  <li>100% Secure Self-Hosting & Dedicated Infrastructure</li>
                </ul>
              </div>

            </div>

            <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', marginTop: '40px', textAlign: 'center', background: 'rgba(0,240,255,0.02)' }}>
              <h3 style={{ color: '#fff', marginBottom: '15px' }}>The Veloxis Alternative</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                {competitor.alternativePitch}
              </p>
            </div>
          </Container>
        </Section>
      )}

      {/* Dynamic FAQs */}
      {faqs && faqs.length > 0 && (
        <Section style={{ background: 'rgba(10, 10, 12, 0.4)' }}>
          <Container>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>
              Frequently Asked Questions
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ color: '#fff', marginBottom: '10px' }}>{faq.q}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Comparison-Aware CTA Section */}
      <CTASection 
        title={cta.title}
        subtitle={cta.subtitle}
      >
        <Button variant="primary">{cta.action}</Button>
      </CTASection>
    </div>
  );
};

export default ComparisonPageDetail;
