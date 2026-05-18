import React, { useState } from 'react';
import LeadCaptureForm from '../forms/LeadCaptureForm';
import { eventBroker } from '../../lib/analytics/eventBroker';

const ContextualCta = ({ pageSlug = 'general', pageTags = ['ai automation'], pageIntent = 'Awareness' }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');

  const handleDownloadSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setDownloaded(true);
    eventBroker.trackCtaInteraction('blueprint_pdf_download', 'click', { email, pageSlug });
    eventBroker.trackFunnelProgression('Blueprint_Downloaded', 'Consideration', { email });
  };

  // 1. DECISION STAGE (BOFU) - Embedded Multi-Step form
  if (pageIntent === 'Decision') {
    return (
      <div style={{ margin: '40px 0', border: '1px solid rgba(0, 240, 255, 0.1)', padding: '4px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.02) 0%, rgba(122, 0, 255, 0.02) 100%)' }}>
        <div style={{ textAlign: 'center', padding: '20px 20px 0 20px' }}>
          <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: '0 0 8px 0' }}>Request a Bespoke Automation Audit</h3>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: 0 }}>
            Submit an inquiry through our secure lead validator to initialize custom webhook normalization pipelines.
          </p>
        </div>
        <div style={{ padding: '20px' }}>
          <LeadCaptureForm serviceContext={pageSlug} />
        </div>
      </div>
    );
  }

  // 2. CONSIDERATION STAGE (MOFU) - Case Study/Blueprint download
  if (pageIntent === 'Consideration') {
    return (
      <div style={{ margin: '40px 0', padding: '35px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#00f0ff', margin: '0 0 10px 0' }}>📥 Download the GoHighLevel + n8n Blueprint</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 0 25px 0', lineHeight: '1.5' }}>
          Get our technical architecture layout showing how we normalise CRM fields, map attributions, and trigger dynamic routing hooks in 90 seconds.
        </p>

        {downloaded ? (
          <div style={{ color: '#00ff66', fontWeight: 'bold', fontSize: '0.95rem' }}>
            ✔ Blueprint PDF sent! Check your inbox for dynamic webhook setup guides.
          </div>
        ) : (
          <form onSubmit={handleDownloadSubmit} style={{ display: 'flex', gap: '10px', maxWidth: '400px', width: '100%' }}>
            <input 
              type="email" 
              placeholder="Enter business email..." 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ flex: 2, padding: '12px 15px', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', color: '#fff', fontSize: '0.9rem', outline: 'none' }}
            />
            <button 
              type="submit" 
              style={{ flex: 1, padding: '12px', background: 'linear-gradient(135deg, #00f0ff, #7a00ff)', border: 'none', borderRadius: '6px', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Get PDF
            </button>
          </form>
        )}
      </div>
    );
  }

  // 3. AWARENESS STAGE (TOFU) - Interactive RAG Sandbox CTA
  return (
    <div style={{ margin: '40px 0', padding: '30px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h3 style={{ fontSize: '1.3rem', color: '#fff', margin: '0 0 8px 0' }}>🔍 Test Content groundings In the RAG Simulator</h3>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', maxWidth: '500px', margin: '0 0 20px 0', lineHeight: '1.4' }}>
        Paste AI-generated articles in our zero-trust compliance workbench to test source traceability and calculate hallucination scores.
      </p>
      
      <a 
        href="/knowledge-lab"
        onClick={() => eventBroker.trackCtaInteraction('rag_compliance_navigate', 'click')}
        style={{
          padding: '10px 24px',
          background: 'rgba(0, 240, 255, 0.1)',
          border: '1px solid #00f0ff',
          color: '#00f0ff',
          borderRadius: '30px',
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 'bold',
          transition: 'all 0.2s ease'
        }}
      >
        Open Operations Console
      </a>
    </div>
  );
};

export default ContextualCta;
