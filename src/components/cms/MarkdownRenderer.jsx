import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

/**
 * MarkdownRenderer Component
 * 
 * Safely parses raw markdown content and maps it to our design system.
 * By using components mapping, we ensure that external CMS content
 * always perfectly matches our global styling rules without needing
 * dangerous innerHTML injection.
 */

const MarkdownRenderer = ({ content }) => {
  if (!content) return null;

  return (
    <div className="markdown-content" style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
      <ReactMarkdown
        components={{
          // Headings
          h1: ({ node, ...props }) => <h1 style={{ color: '#fff', fontSize: '2.5rem', marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
          h2: ({ node, ...props }) => <h2 style={{ color: '#fff', fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }} {...props} />,
          h3: ({ node, ...props }) => <h3 style={{ color: '#fff', fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' }} {...props} />,
          
          // Paragraphs
          p: ({ node, ...props }) => <p style={{ marginBottom: '1.5rem' }} {...props} />,
          
          // Lists
          ul: ({ node, ...props }) => <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }} {...props} />,
          ol: ({ node, ...props }) => <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', marginBottom: '1.5rem' }} {...props} />,
          li: ({ node, ...props }) => <li style={{ marginBottom: '0.5rem' }} {...props} />,
          
          // Links - Automatically handle internal routing vs external hrefs
          a: ({ node, href, ...props }) => {
            const isInternal = href && href.startsWith('/');
            if (isInternal) {
              return <Link to={href} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }} {...props} />;
            }
            return <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }} {...props} />;
          },
          
          // Images
          img: ({ node, ...props }) => (
            <img 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '15px', marginTop: '1.5rem', marginBottom: '1.5rem' }} 
              loading="lazy"
              {...props} 
            />
          ),
          
          // Code Blocks
          code: ({ node, inline, ...props }) => {
            if (inline) {
              return <code style={{ background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.9em' }} {...props} />;
            }
            return (
              <pre style={{ background: 'rgba(10,10,12,0.8)', padding: '1.5rem', borderRadius: '10px', overflowX: 'auto', marginBottom: '1.5rem' }}>
                <code style={{ fontSize: '0.9em', color: '#e2e8f0' }} {...props} />
              </pre>
            );
          },
          
          // Blockquotes
          blockquote: ({ node, ...props }) => (
            <blockquote style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '1.5rem', fontStyle: 'italic', opacity: 0.8, margin: '1.5rem 0' }} {...props} />
          )
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
