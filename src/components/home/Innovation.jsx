import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Zap, Globe, Users } from 'lucide-react';
import { innovationCopy } from '../../constants/content';
import './Innovation.css';

const Innovation = () => {
  const navigate = useNavigate();
  const iconMap = {
    '01': <Zap size={24} />,
    '02': <Shield size={24} />,
    '03': <Globe size={24} />,
    '04': <Users size={24} />,
  };

  return (
    <section className="innovation section-padding">
      <div className="container">
        <div className="innovation-grid">
          <div className="innovation-info">
            <span className="section-badge">{innovationCopy.badge}</span>
            <h2 className="section-title">{innovationCopy.title}</h2>
            <p>
              {innovationCopy.body}
            </p>
            <button className="btn-outline" onClick={() => navigate('/about')}>{innovationCopy.cta}</button>
          </div>
          
          <div className="innovation-cards">
            {innovationCopy.cards.map((card, index) => (
              <div key={index} className="innovation-card glass-card">
                <span className="card-id">{card.id}</span>
                <div className="card-icon">{iconMap[card.id]}</div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
