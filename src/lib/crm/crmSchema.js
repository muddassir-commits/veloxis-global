/**
 * CRM Readiness & Lead Normalization Layer
 * 
 * Standardizes raw contact form submissions into CRM-compliant JSON schemas,
 * binding dynamic campaign attribution parameters and lifecycle milestones.
 */

export const normalizeLead = (rawInquiry) => {
  const {
    name = '',
    email = '',
    company = '',
    phone = '',
    serviceOfInterest = 'general',
    message = '',
    utmSource = 'direct',
    utmMedium = 'organic',
    utmCampaign = 'growth-ops',
    landingPage = '/knowledge-lab'
  } = rawInquiry;

  // Clean email formatting
  const sanitizedEmail = email.toLowerCase().trim();
  
  // Standardize full names into first/last properties for standard CRM ingestion
  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0] || 'Inquirer';
  const lastName = nameParts.slice(1).join(' ') || 'Contact';

  // Determine standard CRM Lifecycle Stage based on intent profile
  let lifecycleStage = 'Lead'; // TOFU Lead
  let dealPriority = 'LOW';

  if (serviceOfInterest !== 'general' && serviceOfInterest !== 'blog') {
    lifecycleStage = 'Sales_Qualified_Lead'; // SQL
    dealPriority = 'MEDIUM';
  }
  
  if (company && company.length > 2 && phone) {
    lifecycleStage = 'Opportunity'; // BOFU Opportunity
    dealPriority = 'HIGH';
  }

  // Generate standardized Inquiry Payload
  return {
    leadId: `lead-${Math.random().toString(36).substring(2, 11)}`,
    timestamp: new Date().toISOString(),
    contact: {
      firstName,
      lastName,
      email: sanitizedEmail,
      phone: phone.trim(),
      company: company.trim()
    },
    intent: {
      serviceOfInterest,
      clientMessage: message.trim(),
      lifecycleStage,
      dealPriority
    },
    attribution: {
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      landing_page: landingPage,
      pageRankReferrerWeight: 0.85
    },
    routing: {
      webhookTarget: 'https://api.veloxisglobal.com/webhooks/crm/inbound',
      n8nWorkflowDispatch: true,
      readyForSync: true
    }
  };
};
