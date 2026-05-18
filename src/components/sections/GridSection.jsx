import React from 'react';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Card from '../ui/Card';

/**
 * GridSection: A reusable responsive grid layout for features, services, or problems.
 * Automatically maps over an array of items.
 */
const GridSection = ({ 
  title, 
  subtitle, 
  items = [], 
  columns = 'auto-fit', 
  className = '' 
}) => {
  // Use inline style or CSS class depending on future CSS refactor strategy
  // For now, mapping to existing inline style grid pattern used in codebase
  const gridStyle = { 
    display: 'grid', 
    gridTemplateColumns: columns === 'auto-fit' ? 'repeat(auto-fit, minmax(280px, 1fr))' : `repeat(${columns}, 1fr)`, 
    gap: '30px' 
  };

  return (
    <Section className={`grid-section ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className="text-center" style={{ marginBottom: '40px' }}>
            {title && <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '20px' }}>{title}</h2>}
            {subtitle && <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{subtitle}</p>}
          </div>
        )}
        
        <div style={gridStyle}>
          {items.map((item, index) => (
            <Card key={item.id || index} style={{ padding: '30px' }}>
              {item.icon && <div style={{ marginBottom: '15px' }}>{item.icon}</div>}
              {item.title && <h3 style={{ color: '#fff', marginBottom: '15px' }}>{item.title}</h3>}
              {item.desc && <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default GridSection;
