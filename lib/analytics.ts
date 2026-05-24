// Google Analytics 4 and Meta Pixel tracking infrastructure

declare global {
  interface Window {
    gtag?: (command: string, name: string, params?: Record<string, any>) => void;
    fbq?: (command: string, name: string, params?: Record<string, any>) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, string | number>) {
  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
  }

  // Meta Pixel integration: track Lead event on form submissions
  if (name === 'form_submit' && typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: params?.form_name || 'unknown',
      source_page: params?.source_page || 'unknown'
    });
  }
}

export const events = {
  ctaClick: (location: string, cta: string) => 
    trackEvent('cta_click', { location, cta }),
  formSubmit: (formName: string, sourcePage: string) => 
    trackEvent('form_submit', { form_name: formName, source_page: sourcePage }),
  phoneClick: () => trackEvent('phone_click'),
  whatsappClick: () => trackEvent('whatsapp_click'),
  scrollDepth: (depth: number) => trackEvent('scroll_depth', { percent: depth }),
};
