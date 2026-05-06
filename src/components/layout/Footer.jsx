import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Youtube, Instagram, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-info">
            <Link to="/" className="logo">
              VELOXIS<span>GLOBAL</span>
            </Link>
            <p className="footer-desc">
              Building lead generation, CRM automation, AI funnels, and conversion systems for businesses that want structured growth instead of random campaigns.
            </p>
            <div className="social-links">
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/projects">Our Projects</Link>
              <Link to="/services">Our Services</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <Link to="/contact">Growth Audit</Link>
              <Link to="/services">AI Automation</Link>
              <Link to="/services">Lead Generation</Link>
              <a href="https://mentorship.muddassirali.com" target="_blank" rel="noopener noreferrer">Mentorship</a>
            </div>
          </div>

          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get practical insights on lead generation, automation, AI tools, and conversion systems.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Email address" />
              <button aria-label="Subscribe"><ArrowRight size={20} /></button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2026 Veloxis Global. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
        
        <div className="footer-branding">
          <h1>VELOXIS GLOBAL</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
