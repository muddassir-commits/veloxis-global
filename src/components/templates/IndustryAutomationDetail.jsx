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
 * IndustryAutomationDetail Programmatic Template
 * Also maps to WorkflowDetail & UseCaseDetail to fulfill structural taxonomy targets.
 */
const IndustryAutomationDetail = ({ pageData }) => {
  const { seo, hero, breadcrumbs, painPoints, examples, relationships, cta } = pageData;

  return (
    <div className="programmatic-page industry-automation-detail" style={{ paddingTop: '100px' }}>
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

      {/* Dynamic Pain Points Section */}
      {painPoints.length > 0 && (
        <Section>
          <Container>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>
              Solving Complex Operational Friction
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {painPoints.map(pain => (
                <div key={pain.id} className="glass-card hover-glow" style={{ padding: '30px', borderRadius: '15px' }}>
                  <Badge variant="secondary">PAIN POINT</Badge>
                  <h4 style={{ color: '#fff', marginTop: '15px', marginBottom: '10px' }}>{pain.title}</h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{pain.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Dynamic Use Case Example */}
      {examples.length > 0 && (
        <Section>
          <Container>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>
              System Architecture & Workflows
            </h2>
            {examples.map((ex, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '40px', borderRadius: '20px' }}>
                <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>{ex.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>{ex.desc}</p>
              </div>
            ))}
          </Container>
        </Section>
      )}

      {/* Dynamic Entity Relationship Internal Linking */}
      <Section style={{ background: 'rgba(255,255,255,0.02)' }}>
        <Container>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>Operations Graph Connection</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {relationships.parentService && (
              <Link to={`/${relationships.parentService.id}`} style={{ textDecoration: 'none' }}>
                <span className="glass-card" style={{ padding: '10px 20px', borderRadius: '20px', color: 'var(--primary)', display: 'inline-block' }}>
                  Parent Node: {relationships.parentService.name}
                </span>
              </Link>
            )}
            {relationships.childServices.map(child => (
              <Link key={child.id} to={`/${child.id}`} style={{ textDecoration: 'none' }}>
                <span className="glass-card" style={{ padding: '10px 20px', borderRadius: '20px', color: 'var(--primary)', display: 'inline-block' }}>
                  Child Node: {child.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Adaptable CTA Section */}
      <CTASection 
        title={cta.title}
        subtitle={cta.subtitle}
      >
        <Button variant="primary">{cta.action}</Button>
      </CTASection>
    </div>
  );
};

export default IndustryAutomationDetail;
