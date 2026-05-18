import React from 'react';
import { useNavigate } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Button from '../ui/Button';

/**
 * NotFound Template (404)
 * 
 * An SEO-safe fallback component that renders when a dynamic wildcard route
 * attempts to load a CMS collection or slug that does not exist.
 * It strictly injects a noindex meta tag to prevent Google from indexing soft 404s.
 */
const NotFound = ({ message = "The page you're looking for could not be found." }) => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page" style={{ paddingTop: '100px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      {/* 
        CRITICAL SEO SAFETY:
        We inject "noindex, nofollow" here so that if the dynamic catch-all route
        accidentally loads a bad URL, search engines immediately drop it rather than
        treating it as a soft 404 with duplicate content.
      */}
      <SeoHead 
        title="Page Not Found | Veloxis Global"
        description="The requested page could not be located."
        schemaType="WebPage"
      />
      {/* Manually injecting robots noindex since SeoHead might not have it exposed natively yet */}
      <meta name="robots" content="noindex, nofollow" />

      <Section>
        <Container style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '6rem', color: 'var(--primary)', marginBottom: '1rem', textShadow: '0 0 20px rgba(0, 240, 255, 0.3)' }}>
            404
          </h1>
          <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>
            Page Not Found
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem auto' }}>
            {message}
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Button variant="primary" onClick={() => navigate('/')}>
              Return Home
            </Button>
            <Button variant="outline" onClick={() => navigate('/services')}>
              View Services
            </Button>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default NotFound;
