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
 * ServiceLocationDetail Programmatic Template
 * 
 * Renders dynamically composed Service + Location landing pages (Local Intent).
 * Dynamically highlights local examples, custom schemas, and geolocated CTAs.
 */
const ServiceLocationDetail = ({ pageData }) => {
  const { seo, hero, breadcrumbs, examples, proof, relationships, cta } = pageData;

  return (
    <div className="programmatic-page service-location-detail" style={{ paddingTop: '100px' }}>
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

      {/* Contextual Proof Metric */}
      {proof && (
        <Section style={{ background: 'rgba(10, 10, 12, 0.4)', textAlign: 'center' }}>
          <Container>
            <div className="glass-card" style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ fontSize: '4rem', color: 'var(--primary)', margin: 0 }}>{proof.metric}</h2>
              <h3 style={{ color: '#fff', marginTop: '10px', marginBottom: '20px' }}>{proof.label}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{proof.caseStudy}</p>
            </div>
          </Container>
        </Section>
      )}

      {/* Dynamic Local Case Examples */}
      {examples.length > 0 && (
        <Section>
          <Container>
            <h2 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>
              Local Implementation & Operational Success
            </h2>
            {examples.map((ex, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '40px', borderRadius: '20px', marginBottom: '30px' }}>
                <Badge variant="secondary">LOCAL CASE IN POINT</Badge>
                <h3 style={{ color: 'var(--primary)', marginTop: '15px', marginBottom: '20px' }}>{ex.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>{ex.desc}</p>
              </div>
            ))}
          </Container>
        </Section>
      )}

      {/* Dynamic Entity Relationship Internal Linking */}
      <Section style={{ background: 'rgba(255,255,255,0.02)' }}>
        <Container>
          <h3 style={{ color: '#fff', marginBottom: '20px' }}>Semantic Operations Graph</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {relationships.parentService && (
              <Link to={`/${relationships.parentService.id}`} style={{ textDecoration: 'none' }}>
                <span className="glass-card" style={{ padding: '10px 20px', borderRadius: '20px', color: 'var(--primary)', display: 'inline-block' }}>
                  Parent: {relationships.parentService.name}
                </span>
              </Link>
            )}
            {relationships.childServices.map(child => (
              <Link key={child.id} to={`/${child.id}`} style={{ textDecoration: 'none' }}>
                <span className="glass-card" style={{ padding: '10px 20px', borderRadius: '20px', color: 'var(--primary)', display: 'inline-block' }}>
                  Sub-System: {child.name}
                </span>
              </Link>
            ))}
            {relationships.technologies.map(tech => (
              <span key={tech} style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 20px', borderRadius: '20px', color: 'var(--text-secondary)', display: 'inline-block' }}>
                Tech: {tech.toUpperCase()}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Geolocated CTA Section */}
      <CTASection 
        title={cta.title}
        subtitle={cta.subtitle}
      >
        <Button variant="primary">{cta.action}</Button>
      </CTASection>
    </div>
  );
};

export default ServiceLocationDetail;
