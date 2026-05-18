import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* Brand Column */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Veloxis<span>Global</span>
          </Link>
          <p className="footer__tagline">
            Operational automation infrastructure for businesses that need systems, not campaigns.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} strokeWidth={1.5} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={18} strokeWidth={1.5} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={18} strokeWidth={1.5} /></a>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="footer__col">
          <h4 className="footer__heading">Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Services Column */}
        <div className="footer__col">
          <h4 className="footer__heading">Services</h4>
          <Link to="/ai-automation-services">AI Automation</Link>
          <Link to="/ai-lead-generation-services">Lead Generation</Link>
          <Link to="/n8n-workflow-automation">n8n Workflows</Link>
          <Link to="/ai-website-development">AI Websites</Link>
          <Link to="/contact">Growth Audit</Link>
        </div>

        {/* Newsletter Column */}
        <div className="footer__col footer__newsletter">
          <h4 className="footer__heading">Stay Updated</h4>
          <p>Operational blueprints, workflow architectures, and automation insights.</p>
          <div className="footer__form">
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button aria-label="Subscribe"><ArrowRight size={16} strokeWidth={1.5} /></button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Veloxis Global. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
