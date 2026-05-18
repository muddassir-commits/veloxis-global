import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Clock, Calendar, Layers, CheckCircle, Server, BookOpen } from 'lucide-react';
import { getAllContent } from '../lib/content';
import SeoHead from '../components/seo/SeoHead';
import './Blog.css';

const Blog = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allPosts = getAllContent('blog') || [];
  const categories = ['All', ...new Set(allPosts.map(post => post.data.category).filter(Boolean))];
  const filteredPosts = selectedCategory === 'All'
    ? allPosts
    : allPosts.filter(post => post.data.category === selectedCategory);

  const getReadingTime = (content = '', frontmatterReadTime) => {
    if (frontmatterReadTime) return frontmatterReadTime;
    return `${Math.ceil(content.split(/\s+/).filter(Boolean).length / 200)} min read`;
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const featuredPost = allPosts.find(p => p.slug.includes('lead-generation-automation-guide')) || allPosts[0];
  const regularPosts = filteredPosts.filter(p => p !== featuredPost);

  return (
    <div className="blog-page">
      <SeoHead
        title="Operations & Automation Blog | Enterprise AI Systems | Veloxis Global"
        description="Operational blueprints, n8n workflow systems, CRM deduplication frameworks, B2B lead generation automation guides, and consultative ROI breakdowns."
        schemaType="CollectionPage"
      />

      {/* Header */}
      <section className="blog-page__hero">
        <div className="blog-page__hero-inner">
          <span className="blog-page__label">Operational Intelligence</span>
          <h1 className="blog-page__title">The Blueprint</h1>
          <p className="blog-page__subtitle">
            Systems architecture, workflow blueprints, and operational engineering for enterprise-grade automation.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="blog-page__featured">
          <div className="blog-page__featured-inner">
            <Link to={`/${featuredPost.collection}/${featuredPost.slug}`} className="featured-card">
              <div className="featured-card__meta">
                {featuredPost.data.category && (
                  <span className="featured-card__category">{featuredPost.data.category}</span>
                )}
                <span className="featured-card__reading">
                  <Clock size={12} strokeWidth={1.5} />
                  {getReadingTime(featuredPost.content, featuredPost.data.readTime)}
                </span>
              </div>
              <h2 className="featured-card__title">{featuredPost.data.title}</h2>
              <p className="featured-card__excerpt">
                {featuredPost.data.seo?.description || featuredPost.data.excerpt || 'Operational breakdown of modern AI and CRM workflow architectures.'}
              </p>
              <div className="featured-card__footer">
                <span className="featured-card__date">
                  <Calendar size={12} strokeWidth={1.5} />
                  {formatDate(featuredPost.data.date)}
                </span>
                <span className="featured-card__cta">
                  Read Blueprint <ArrowRight size={14} strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Main Content + Sidebar */}
      <section className="blog-page__content">
        <div className="blog-page__content-inner">
          {/* Article Grid */}
          <div className="blog-page__articles">
            {/* Mobile Category Select */}
            <div className="blog-page__mobile-filter">
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            {regularPosts.length === 0 && filteredPosts.length <= 1 ? (
              <div className="blog-page__empty">
                <p>More operational blueprints coming soon.</p>
              </div>
            ) : (
              <div className="blog-page__grid">
                {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post) => (
                  <article key={post.id} className="article-card">
                    <Link to={`/${post.collection}/${post.slug}`} className="article-card__link">
                      <div className="article-card__meta">
                        {post.data.category && (
                          <span className="article-card__category">{post.data.category}</span>
                        )}
                        <span className="article-card__reading">
                          <Clock size={11} strokeWidth={1.5} />
                          {getReadingTime(post.content, post.data.readTime)}
                        </span>
                      </div>
                      <h3 className="article-card__title">{post.data.title}</h3>
                      <p className="article-card__excerpt">
                        {post.data.seo?.description || post.data.excerpt || 'Operational breakdown of modern workflow architectures.'}
                      </p>
                      <div className="article-card__footer">
                        <span className="article-card__date">
                          <Calendar size={11} strokeWidth={1.5} />
                          {formatDate(post.data.date)}
                        </span>
                        <span className="article-card__cta">
                          Read <ArrowUpRight size={12} strokeWidth={1.5} />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="blog-page__sidebar">
            {/* Category Filter */}
            <div className="sidebar-widget desktop-only">
              <h3 className="sidebar-widget__title">Categories</h3>
              <div className="sidebar-widget__categories">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`sidebar-category ${selectedCategory === cat ? 'sidebar-category--active' : ''}`}
                  >
                    {cat}
                    <span className="sidebar-category__count">
                      {cat === 'All'
                        ? allPosts.length
                        : allPosts.filter(p => p.data.category === cat).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Consultation CTA */}
            <div className="sidebar-widget sidebar-widget--cta">
              <h3 className="sidebar-widget__title">Systems Blueprint</h3>
              <p>We build high-volume outreach, CRM integrations, and automated lead routing systems.</p>
              <button className="sidebar-widget__btn" onClick={() => navigate('/contact')}>
                Book Consultation <ArrowRight size={14} strokeWidth={1.5} />
              </button>
              <div className="sidebar-widget__assurance">
                <CheckCircle size={12} strokeWidth={1.5} />
                <span>Consultative — No Sales Pitch</span>
              </div>
            </div>

            {/* Stack Profile */}
            <div className="sidebar-widget desktop-only">
              <h3 className="sidebar-widget__title">Core Stack</h3>
              <div className="sidebar-stack">
                <div className="sidebar-stack__item">
                  <Server size={14} strokeWidth={1.5} />
                  <div>
                    <strong>n8n Automation</strong>
                    <p>Self-hosted queue management & integrations.</p>
                  </div>
                </div>
                <div className="sidebar-stack__item">
                  <Layers size={14} strokeWidth={1.5} />
                  <div>
                    <strong>Make.com Solutions</strong>
                    <p>Visual orchestration & multi-step CRM piping.</p>
                  </div>
                </div>
                <div className="sidebar-stack__item">
                  <BookOpen size={14} strokeWidth={1.5} />
                  <div>
                    <strong>AI Agent Systems</strong>
                    <p>RAG pipelines, vector matching, & lead scoring.</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blog;
