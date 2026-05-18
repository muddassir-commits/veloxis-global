import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SeoHead from '../seo/SeoHead';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Badge from '../ui/Badge';
import MarkdownRenderer from '../cms/MarkdownRenderer';
import { getRelatedContent } from '../../lib/content';
import { Clock, Calendar, ArrowLeft, ArrowRight, Layers, CheckCircle, HelpCircle, User, Tag } from 'lucide-react';
import './BlogDetail.css';

/**
 * Extract headers dynamically from markdown text to build a precise Table of Contents.
 */
const extractHeaders = (markdown) => {
  if (!markdown) return [];
  const lines = markdown.split(/\r?\n/);
  const headers = [];
  lines.forEach(line => {
    if (line.startsWith('## ')) {
      const title = line.replace('## ', '').trim();
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headers.push({ level: 2, title, slug });
    } else if (line.startsWith('### ')) {
      const title = line.replace('### ', '').trim();
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      headers.push({ level: 3, title, slug });
    }
  });
  return headers;
};

const BlogDetail = ({ cmsData, markdownContent }) => {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeader, setActiveHeader] = useState('');

  // 1. Scroll tracking for progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.pageYOffset / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. ScrollSpy logic to highlight active section in TOC
  useEffect(() => {
    const headers = extractHeaders(markdownContent);
    const handleScrollSpy = () => {
      let currentActive = '';
      for (const header of headers) {
        const el = document.getElementById(header.slug);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the element is near or above the top of the viewport
          if (rect.top <= 140) {
            currentActive = header.slug;
          }
        }
      }
      setActiveHeader(currentActive);
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [markdownContent]);

  if (!cmsData) {
    return (
      <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '80vh' }}>
        <h2>Article Not Found</h2>
        <p>The requested blog article could not be located.</p>
        <Link to="/blog" className="sidebar-cta-btn" style={{ maxWidth: '200px', margin: '20px auto' }}>
          Back to Blog
        </Link>
      </div>
    );
  }

  const publishDate = cmsData.date ? new Date(cmsData.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : null;

  const updatedDate = cmsData.updated ? new Date(cmsData.updated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : publishDate;

  // Calculate dynamic reading time if not frontmatter defined
  const words = markdownContent ? markdownContent.split(/\s+/).filter(Boolean).length : 0;
  const readTime = cmsData.readTime || `${Math.ceil(words / 200)} min read`;

  // Fetch related published guides
  const relatedArticles = getRelatedContent(cmsData.id, cmsData.tags, cmsData.category, 3);
  const headers = extractHeaders(markdownContent);

  // Smooth scroll handler
  const handleTocClick = (e, slug) => {
    e.preventDefault();
    const el = document.getElementById(slug);
    if (el) {
      const offset = 120; // Account for dynamic fixed navbar header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="blog-detail-page">
      {/* Dynamic Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

      <SeoHead 
        title={cmsData.seo?.title || cmsData.title} 
        description={cmsData.seo?.description}
        schemaType={cmsData.seo?.schemaType || "Article"}
        cmsData={cmsData}
      />

      <Container>
        {/* Breadcrumb Navigation Schema */}
        <div className="breadcrumb-nav">
          <Link to="/blog" className="back-link">
            <ArrowLeft size={14} /> <span>Back to Blueprints</span>
          </Link>
          <span className="crumb-separator">/</span>
          <span className="current-crumb">{cmsData.category || 'Operations'}</span>
        </div>

        {/* Editorial Header Block */}
        <header className="article-header">
          {cmsData.category && <Badge className="badge-gold">{cmsData.category}</Badge>}
          <h1 className="article-title">{cmsData.title}</h1>
          
          <div className="article-meta-row">
            <div className="meta-item author-meta">
              <User size={14} /> <span>By {cmsData.author || 'Systems Architect'}</span>
            </div>
            <span className="meta-divider">•</span>
            <div className="meta-item date-meta">
              <Calendar size={14} /> 
              <span>Published: {publishDate}</span>
              {cmsData.updated && cmsData.updated !== cmsData.date && (
                <span className="updated-date-text"> (Updated: {updatedDate})</span>
              )}
            </div>
            <span className="meta-divider">•</span>
            <div className="meta-item read-meta">
              <Clock size={14} /> <span>{readTime}</span>
            </div>
          </div>
        </header>

        {/* Two-Column Premium Layout */}
        <div className="article-layout-grid">
          
          {/* Left Column: Interactive Table of Contents (Sticky on Desktop) */}
          <aside className="article-toc-sidebar desktop-only">
            <div className="sticky-toc-box">
              <h3 className="toc-title">Interactive Guide</h3>
              {headers.length === 0 ? (
                <p className="text-muted" style={{ fontSize: '0.85rem' }}>Jump anchors are auto-generated from workflow stages.</p>
              ) : (
                <ul className="toc-list">
                  {headers.map(h => (
                    <li key={h.slug} className={`toc-item-l${h.level}`}>
                      <a 
                        href={`#${h.slug}`} 
                        onClick={(e) => handleTocClick(e, h.slug)}
                        className={`toc-link ${activeHeader === h.slug ? 'active' : ''}`}
                      >
                        {h.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>

          {/* Center Column: Highly Readable Long-Form Article Body */}
          <article className="article-main-body">
            <div className="article-body-wrapper">
              <MarkdownRenderer content={markdownContent} />
            </div>

            {/* Topical Tag List */}
            {cmsData.tags && cmsData.tags.length > 0 && (
              <div className="article-tags-wrap">
                <h4>System Tags</h4>
                <div className="tag-badges-grid">
                  {cmsData.tags.map(tag => (
                    <span key={tag} className="tag-badge">
                      <Tag size={12} /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* In-Line Strategy Consultation CTA Banner */}
            <div className="article-cta-banner glass-card">
              <div className="cta-banner-content">
                <h3>Is your agency losing revenue due to broken workflows?</h3>
                <p>
                  We engineer self-hosted, scalable outreach engines and deep CRM integrations that stop lead dropouts. Let's outline your systems blueprint.
                </p>
                <div className="cta-banner-buttons">
                  <button 
                    className="sidebar-cta-btn banner-btn"
                    onClick={() => navigate('/contact')}
                  >
                    Request Systems Audit <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Right Column: E-E-A-T and Direct Action Panels */}
          <aside className="article-info-sidebar">
            
            {/* E-E-A-T Author Credentials Card */}
            <div className="sidebar-widget author-credential-card glass-card">
              <h3 className="widget-title">Author Profile</h3>
              <div className="author-profile-box">
                <div className="author-avatar-wrap">
                  <User size={30} className="accent-gold" />
                </div>
                <div>
                  <h4>Veloxis Systems Engineers</h4>
                  <p className="author-bio-title">Operations & Automation Architects</p>
                </div>
              </div>
              <p className="author-bio-desc">
                We engineer, audit, and benchmark production lead routing systems, self-hosted n8n pipelines, and API integrations for scaling B2B consultancies.
              </p>
            </div>

            {/* Systems Strategy Consultation Card */}
            <div className="sidebar-widget consultation-widget glass-card">
              <h3 className="widget-title">Book Consultation</h3>
              <p>
                Outline your integration path and eliminate webhook failures with our operations team.
              </p>
              <button 
                className="sidebar-cta-btn"
                onClick={() => navigate('/contact')}
              >
                Book Systems Consultation <ArrowRight size={16} />
              </button>
              <div className="cta-assurance">
                <CheckCircle size={12} /> <span>100% Consultative - No Sales Pitch</span>
              </div>
            </div>

          </aside>

        </div>

        {/* Dynamic Related Blueprints Section */}
        {relatedArticles && relatedArticles.length > 0 && (
          <footer className="article-related-footer">
            <h3 className="related-title">Further Reading & Blueprints</h3>
            <div className="related-grid-3col">
              {relatedArticles.map(article => {
                const wordsCount = article.content ? article.content.split(/\s+/).filter(Boolean).length : 0;
                const readingTimeEst = article.data.readTime || `${Math.ceil(wordsCount / 200)} min read`;
                
                return (
                  <Link 
                    key={article.id} 
                    to={`/${article.collection}/${article.slug}`} 
                    className="related-mini-card glass-card"
                  >
                    {article.data.category && (
                      <span className="related-card-category">{article.data.category}</span>
                    )}
                    <h4 className="related-card-title">{article.data.title}</h4>
                    <p className="related-card-desc">
                      {article.data.seo?.description?.substring(0, 100)}...
                    </p>
                    <div className="related-card-meta">
                      <Clock size={12} /> <span>{readingTimeEst}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </footer>
        )}
      </Container>
    </div>
  );
};

export default BlogDetail;
