import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './MentorshipBridge.css';

const MentorshipBridge = () => {
  const navigate = useNavigate();

  return (
    <section className="mentorship">
      <div className="mentorship__inner">
        <div className="mentorship__content">
          <span className="mentorship__label">Mentorship Program</span>
          <h2 className="mentorship__title">Learn to build automation systems yourself</h2>
          <p className="mentorship__desc">
            Hands-on mentorship for operators who want to learn workflow automation, AI integration, and systems architecture from practitioners — not theory from educators.
          </p>
        </div>
        <a
          href="https://mentorship.muddassirali.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mentorship__cta"
        >
          Explore Mentorship <ArrowRight size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};

export default MentorshipBridge;
