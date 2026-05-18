import React, { useState } from 'react';
import { normalizeLead } from '../../lib/crm/crmSchema';
import { eventBroker } from '../../lib/analytics/eventBroker';

const LeadCaptureForm = ({ serviceContext = 'general' }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceOfInterest: serviceContext,
    message: '',
    utmSource: 'organic',
    utmMedium: 'direct',
    utmCampaign: 'conversion-sandbox'
  });
  
  const [normalizedLeadResult, setNormalizedLeadResult] = useState(null);

  const handleInterestSelect = (interest) => {
    setFormData(prev => ({ ...prev, serviceOfInterest: interest }));
    eventBroker.trackCtaInteraction('lead_form_interest', 'click', { interest });
    setStep(2);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      alert('Please fill out Name and Email.');
      return;
    }

    // Process dynamic CRM Lead normalization
    const normalized = normalizeLead(formData);
    setNormalizedLeadResult(normalized);

    // Instrument telemetry conversions
    eventBroker.trackServiceInquiry(normalized.leadId, normalized.intent.serviceOfInterest, normalized.intent.lifecycleStage);
    eventBroker.trackFunnelProgression('LeadForm_Completed', normalized.intent.lifecycleStage, { leadId: normalized.leadId });

    setStep(3);
  };

  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.01)', border: '1px solid rgba(255, 255, 255, 0.06)', padding: '30px', borderRadius: '16px', color: '#fff', maxWidth: '500px', width: '100%', margin: '0 auto', backdropFilter: 'blur(10px)' }}>
      {/* Step Indicators */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px', fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '10px' }}>
        <span style={{ color: step >= 1 ? '#00f0ff' : 'inherit', fontWeight: step === 1 ? 'bold' : 'normal' }}>1. Interest</span>
        <span style={{ color: step >= 2 ? '#00f0ff' : 'inherit', fontWeight: step === 2 ? 'bold' : 'normal' }}>2. Details</span>
        <span style={{ color: step >= 3 ? '#00f0ff' : 'inherit', fontWeight: step === 3 ? 'bold' : 'normal' }}>3. Audit Complete</span>
      </div>

      {/* STEP 1: INTEREST SELECTION */}
      {step === 1 && (
        <div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#fff' }}>What automation goal do you want to achieve?</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.4' }}>
            Select your primary business objective to initialize your custom conversion mapping.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { id: 'crm-automation', label: 'CRM & GoHighLevel Integration', desc: 'Sync leads automatically.' },
              { id: 'lead-routing', label: 'AI Lead Routing & n8n Workflows', desc: 'Qualify and route leads in 90s.' },
              { id: 'semantic-seo', label: 'Semantic SEO & Content Publishing', desc: 'Scale organic keyword authority.' },
              { id: 'general', label: 'General Growth Consultation', desc: 'Explore tech and automation fits.' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => handleInterestSelect(item.id)}
                style={{
                  padding: '15px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '10px',
                  color: '#fff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid #00f0ff';
                  e.currentTarget.style.background = 'rgba(0, 240, 255, 0.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.06)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#00f0ff' }}>{item.label}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '3px' }}>{item.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: FIELDS FORM */}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <h4 style={{ margin: '0 0 20px 0', fontSize: '1.2rem', color: '#fff' }}>Tell us about your business</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>YOUR NAME *</label>
              <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleFieldChange}
                required
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>BUSINESS EMAIL *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email} 
                onChange={handleFieldChange}
                required
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>COMPANY NAME</label>
              <input 
                type="text" 
                name="company"
                value={formData.company} 
                onChange={handleFieldChange}
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginBottom: '5px' }}>CONTACT PHONE</label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone} 
                onChange={handleFieldChange}
                placeholder="e.g. +1 555-0199"
                style={{ width: '100%', padding: '10px 12px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button 
              type="button" 
              onClick={() => setStep(1)}
              style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', cursor: 'pointer' }}
            >
              Back
            </button>
            <button 
              type="submit" 
              style={{ flex: 2, padding: '12px', background: 'linear-gradient(135deg, #00f0ff, #7a00ff)', border: 'none', borderRadius: '6px', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Submit Inquiry
            </button>
          </div>
        </form>
      )}

      {/* STEP 3: CRM CONFIRMATION */}
      {step === 3 && normalizedLeadResult && (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', color: '#00ff66', marginBottom: '15px' }}>✔</div>
          <h4 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#fff' }}>CRM Normalization Success</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '20px', lineHeight: '1.4' }}>
            Lead processed and validated under standard CRM lifecycle schema. Ready for n8n webhook sync.
          </p>

          <pre style={{ textAlign: 'left', margin: 0, padding: '15px', background: '#070709', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', color: '#00f0ff', fontFamily: 'monospace', fontSize: '0.75rem', overflowX: 'auto', maxHeight: '180px' }}>
            {JSON.stringify(normalizedLeadResult, null, 2)}
          </pre>

          <button 
            onClick={() => {
              setStep(1);
              setNormalizedLeadResult(null);
              setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                serviceOfInterest: serviceContext,
                message: '',
                utmSource: 'organic',
                utmMedium: 'direct',
                utmCampaign: 'conversion-sandbox'
              });
            }}
            style={{ width: '100%', marginTop: '20px', padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', cursor: 'pointer' }}
          >
            Submit Another Inquiry
          </button>
        </div>
      )}
    </div>
  );
};

export default LeadCaptureForm;
