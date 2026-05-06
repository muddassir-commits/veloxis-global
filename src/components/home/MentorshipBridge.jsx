import React from 'react';
import { ArrowRight } from 'lucide-react';
import { mentorshipBridgeCopy } from '../../constants/content';
import './MentorshipBridge.css';

const MentorshipBridge = () => {
  return (
    <section className="mentorship-bridge section-padding">
      <div className="container">
        <div className="bridge-card glass-card">
          <div className="bridge-content">
            <h2 className="bridge-title">{mentorshipBridgeCopy.title}</h2>
            <p className="bridge-body">{mentorshipBridgeCopy.body}</p>
            <a 
              href={mentorshipBridgeCopy.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary bridge-cta"
            >
              {mentorshipBridgeCopy.cta} <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipBridge;
