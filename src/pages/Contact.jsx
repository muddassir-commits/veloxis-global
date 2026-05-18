import React from 'react';
import { Phone, Mail, ArrowRight, MapPin, CheckCircle } from 'lucide-react';
import FAQ from '../components/home/FAQ';
import SeoHead from '../components/seo/SeoHead';
import { contactData } from '../data/contact';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <SeoHead
        title={contactData.seo.title}
        description={contactData.seo.description}
      />

      {/* Hero */}
      <section className="contact__hero">
        <div className="contact__hero-inner">
          <span className="contact__label">{contactData.hero.badge}</span>
          <h1 className="contact__title">{contactData.hero.title}</h1>
          <p className="contact__subtitle">{contactData.hero.subtitle}</p>
        </div>
      </section>

      {/* Main Content — Split Layout */}
      <section className="contact__main">
        <div className="contact__main-inner">
          {/* Left — Contact Info */}
          <div className="contact__info">
            <h2>{contactData.info.title}</h2>
            <p className="contact__info-desc">{contactData.info.description}</p>

            <div className="contact__methods">
              <div className="contact__method">
                <Phone size={16} strokeWidth={1.5} />
                <div>
                  <span className="contact__method-label">{contactData.methods[0].label}</span>
                  <strong>{contactData.methods[0].value}</strong>
                </div>
              </div>
              <div className="contact__method">
                <Mail size={16} strokeWidth={1.5} />
                <div>
                  <span className="contact__method-label">{contactData.methods[1].label}</span>
                  <strong>{contactData.methods[1].value}</strong>
                </div>
              </div>
              <div className="contact__method">
                <MapPin size={16} strokeWidth={1.5} />
                <div>
                  <span className="contact__method-label">{contactData.location?.title || 'Location'}</span>
                  <strong>{contactData.location?.subtitle || 'Available globally'}</strong>
                </div>
              </div>
            </div>

            <p className="contact__availability">{contactData.info.availability}</p>
          </div>

          {/* Right — Form */}
          <div className="contact__form-wrapper">
            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>{contactData.form.nameLabel}</label>
                  <input type="text" placeholder={contactData.form.namePlaceholder} />
                </div>
                <div className="contact__field">
                  <label>{contactData.form.emailLabel}</label>
                  <input type="email" placeholder={contactData.form.emailPlaceholder} />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label>{contactData.form.phoneLabel}</label>
                  <input type="text" placeholder={contactData.form.phonePlaceholder} />
                </div>
                <div className="contact__field">
                  <label>{contactData.form.locationLabel}</label>
                  <input type="text" placeholder={contactData.form.locationPlaceholder} />
                </div>
              </div>
              <div className="contact__field">
                <label>{contactData.form.messageLabel}</label>
                <textarea placeholder={contactData.form.messagePlaceholder} rows="5"></textarea>
              </div>
              <div className="contact__checkbox">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">{contactData.form.termsLabel}</label>
              </div>
              <button type="submit" className="contact__submit">
                {contactData.form.submitText} <ArrowRight size={14} strokeWidth={1.5} />
              </button>
              <div className="contact__assurance">
                <CheckCircle size={12} strokeWidth={1.5} />
                <span>100% Consultative — No Sales Pitch</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FAQ />
    </div>
  );
};

export default Contact;
