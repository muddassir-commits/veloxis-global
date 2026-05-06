import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, LineChart, Cpu, Layout, Target, Settings, Zap, Globe } from 'lucide-react';
import { servicesCopy } from '../../constants/content';
import './Services.css';

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const iconMap = [
    <Target size={24} />,
    <Settings size={24} />,
    <Zap size={24} />,
    <Globe size={24} />
  ];

  return (
    <section className="services section-padding">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-badge">{servicesCopy.badge}</span>
          <h2 className="section-title">{servicesCopy.title}</h2>
          <p className="section-subtitle">{servicesCopy.subtitle}</p>
        </div>

        <div className="services-tabs">
          {servicesCopy.services.map((service, index) => (
            <button 
              key={index} 
              className={`tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {service.title}
            </button>
          ))}
        </div>

        <div className="service-display glass-card">
          <div className="service-info">
            <div className="service-icon-box">
              {iconMap[activeTab]}
            </div>
            <h3>{servicesCopy.services[activeTab].title}</h3>
            <p className="service-desc">{servicesCopy.services[activeTab].desc}</p>
            <ul className="service-points">
              {servicesCopy.services[activeTab].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <button className="btn-primary" onClick={() => navigate('/contact')}>{servicesCopy.services[activeTab].cta}</button>
          </div>
          <div className="service-image">
            <img src={servicesCopy.services[activeTab].image} alt={servicesCopy.services[activeTab].title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
