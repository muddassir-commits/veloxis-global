import React from 'react';
import { Link } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import HeroSection from '../sections/HeroSection';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import MarkdownRenderer from '../cms/MarkdownRenderer';
import { getRelatedContent } from '../../lib/content';

/**
 * BlogDetail Template
 * 
 * A highly scalable, SEO-optimized generic template for all blog articles.
 * Consumes pure Markdown CMS data passed via CMSController.
 */
const BlogDetail = ({ cmsData, markdownContent }) => {
  // Safety fallback if the data is missing
  if (!cmsData) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <p>The requested blog article could not be located.</p>
      </div>
    );
  }

  // Formatting date for structured metadata and display
  const publishDate = cmsData.date ? new Date(cmsData.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null;

  // Fetch related content dynamically based on tags and category
  const relatedArticles = getRelatedContent(cmsData.id, cmsData.tags, cmsData.category, 3);

  return (
    <div className="blog-detail-page" style={{ paddingTop: '100px' }}>
      <SeoHead 
        title={cmsData.seo?.title || cmsData.title} 
        description={cmsData.seo?.description}
        schemaType={cmsData.seo?.schemaType || "Article"}
        cmsData={cmsData} // Passing raw frontmatter for deep schema extraction
      />

      {/* Using a custom or modified HeroSection for blogs to support metadata */}
      <Section className="blog-hero" style={{ textAlign: 'center' }}>
        <Container>
          {cmsData.category && <Badge>{cmsData.category}</Badge>}
          <h1 style={{ fontSize: '3rem', color: '#fff', marginTop: '20px', marginBottom: '20px' }}>
            {cmsData.title}
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            {cmsData.author && <span>By {cmsData.author}</span>}
            {publishDate && <span>•</span>}
            {publishDate && <span>{publishDate}</span>}
          </div>
          {cmsData.hero?.subtitle && (
            <p style={{ fontSize: '1.2rem', color: 'var(--primary)', maxWidth: '800px', margin: '0 auto' }}>
              {cmsData.hero.subtitle}
            </p>
          )}
        </Container>
      </Section>

      {/* Dynamic Markdown Body Injection */}
      {markdownContent && (
        <Section className="blog-markdown-body">
          <Container>
            <div className="glass-card" style={{ padding: '50px', borderRadius: '20px', maxWidth: '800px', margin: '0 auto' }}>
              <MarkdownRenderer content={markdownContent} />
              
              {/* Topical Cluster / Tags Output */}
              {cmsData.tags && cmsData.tags.length > 0 && (
                <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <h4 style={{ color: '#fff', marginBottom: '15px' }}>Tags</h4>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    {cmsData.tags.map(tag => (
                      <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* Related Content Engine UI */}
      {relatedArticles && relatedArticles.length > 0 && (
        <Section className="related-content">
          <Container>
            <h3 style={{ color: '#fff', marginBottom: '30px', textAlign: 'center' }}>Related Reading</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {relatedArticles.map(article => (
                <Link 
                  key={article.id} 
                  to={`/${article.collection}/${article.slug}`} 
                  style={{ textDecoration: 'none' }}
                >
                  <div className="glass-card hover-glow" style={{ padding: '30px', borderRadius: '15px', height: '100%' }}>
                    {article.data.category && <Badge>{article.data.category}</Badge>}
                    <h4 style={{ color: '#fff', marginTop: '15px', marginBottom: '10px' }}>
                      {article.data.title}
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      {article.data.seo?.description?.substring(0, 100)}...
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
};

export default BlogDetail;

