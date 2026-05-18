import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { QuickAnswer, KeyTakeaways, TimelineBlock, CommonMistakes, BestTools } from '../seo/AIBlocks';

// Helper to generate normalized URL slugs from heading children
const generateSlug = (children) => {
  if (!children) return '';
  const text = React.Children.toArray(children)
    .map(child => {
      if (typeof child === 'string') return child;
      if (child.props && child.props.children) return child.props.children;
      return '';
    })
    .join('');
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

/**
 * MarkdownRenderer Component
 * 
 * Safely parses raw markdown content and maps it to our design system.
 * By using components mapping, we ensure that external CMS content
 * always perfectly matches our global styling rules.
 */
const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  return (
    <div className="markdown-content" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
      <ReactMarkdown
        components={{
          // Headings with auto-generated id fields for TOC scroll jumps
          h1: ({ node, children, ...props }) => {
            const id = generateSlug(children);
            return <h1 id={id} style={{ color: '#fff', fontSize: '2.5rem', marginTop: '2.5rem', marginBottom: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: '800' }} {...props}>{children}</h1>;
          },
          h2: ({ node, children, ...props }) => {
            const id = generateSlug(children);
            return <h2 id={id} style={{ color: '#fff', fontSize: '1.85rem', marginTop: '2.5rem', marginBottom: '1.2rem', fontFamily: 'var(--font-heading)', fontWeight: '700', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '10px' }} {...props}>{children}</h2>;
          },
          h3: ({ node, children, ...props }) => {
            const id = generateSlug(children);
            return <h3 id={id} style={{ color: '#fff', fontSize: '1.4rem', marginTop: '2rem', marginBottom: '0.8rem', fontFamily: 'var(--font-heading)', fontWeight: '600' }} {...props}>{children}</h3>;
          },
          
          // Paragraphs with optimized typography
          p: ({ node, ...props }) => <p style={{ marginBottom: '1.6rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }} {...props} />,
          
          // Lists
          ul: ({ node, ...props }) => <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.6rem' }} {...props} />,
          ol: ({ node, ...props }) => <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.6rem' }} {...props} />,
          li: ({ node, ...props }) => <li style={{ marginBottom: '0.6rem', fontSize: '1.05rem' }} {...props} />,
          
          // Links - Automatically handle internal routing vs external hrefs
          a: ({ node, href, ...props }) => {
            const isInternal = href && href.startsWith('/');
            if (isInternal) {
              return <Link to={href} style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontWeight: '600' }} {...props} />;
            }
            return <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }} {...props} />;
          },
          
          // Images
          img: ({ node, ...props }) => (
            <img 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', marginTop: '2rem', marginBottom: '2rem', border: '1px solid var(--glass-border)' }} 
              loading="lazy"
              {...props} 
            />
          ),
          
          // Intercept custom language tags at the pre level to prevent HTML validateDOMNesting errors
          pre: ({ node, children, ...props }) => {
            const codeChild = React.Children.toArray(children)[0];
            if (codeChild && codeChild.props) {
              const { className, children: codeChildren } = codeChild.props;
              const match = /language-([a-zA-Z0-9_-]+)/.exec(className || '');
              const lang = match ? match[1] : '';
              
              if (lang && ['quick-answer', 'key-takeaways', 'timeline', 'mistakes', 'best-tools'].includes(lang)) {
                const rawVal = String(codeChildren).replace(/\n$/, '');
                try {
                  const parsed = JSON.parse(rawVal);
                  if (lang === 'quick-answer') {
                    return <QuickAnswer question={parsed.question} answer={parsed.answer} />;
                  }
                  if (lang === 'key-takeaways') {
                    return <KeyTakeaways items={parsed.items} />;
                  }
                  if (lang === 'timeline') {
                    return <TimelineBlock steps={parsed.steps} />;
                  }
                  if (lang === 'mistakes') {
                    return <CommonMistakes mistakes={parsed.mistakes} />;
                  }
                  if (lang === 'best-tools') {
                    return <BestTools title={parsed.title} tools={parsed.tools} />;
                  }
                } catch (err) {
                  console.error('[CMS Renderer] Structured block parsing error:', err);
                }
              }
            }
            
            // Standard pre styling for normal code blocks
            return (
              <pre style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '8px', overflowX: 'auto', marginBottom: '1.6rem', border: '1px solid var(--glass-border)' }} {...props}>
                {children}
              </pre>
            );
          },

          // Normal inline and block code styling
          code: ({ node, inline, className, children, ...props }) => {
            if (inline) {
              return (
                <code style={{ background: 'rgba(255,255,255,0.06)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.9em', color: 'var(--accent-gold)', border: '1px solid rgba(255,255,255,0.03)' }} {...props}>
                  {children}
                </code>
              );
            }
            
            const match = /language-([a-zA-Z0-9_-]+)/.exec(className || '');
            const lang = match ? match[1] : '';

            return (
              <code style={{ fontSize: '0.9em', color: '#e4e4e7', fontFamily: 'monospace' }} className={className} {...props}>
                {children}
              </code>
            );
          },
          
          // Blockquotes as elegant highlighted callout cards
          blockquote: ({ node, ...props }) => (
            <blockquote className="editorial-callout" style={{ borderLeft: '3px solid var(--accent-gold)', padding: '20px 24px', background: 'rgba(255,255,255,0.01)', borderRadius: '0 8px 8px 0', opacity: 0.9, margin: '2rem 0', fontStyle: 'italic', fontSize: '1.05rem', color: '#fff' }} {...props} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
