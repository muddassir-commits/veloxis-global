const edit = require('./edit');

edit('lib/analytics.ts', [
  [`  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
  }`, `  // Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', name, params);
    // GA4's recommended lead event, so form leads can be marked as a key event.
    if (name === 'form_submit') window.gtag('event', 'generate_lead', params);
  }`],
  [`  phoneClick: () => trackEvent('phone_click'),
  whatsappClick: () => trackEvent('whatsapp_click'),`, `  phoneClick: (sourcePage: string) => trackEvent('phone_click', { source_page: sourcePage }),
  whatsappClick: (sourcePage: string) => trackEvent('whatsapp_click', { source_page: sourcePage }),
  bookingClick: (sourcePage: string) => trackEvent('booking_click', { source_page: sourcePage }),`],
]);

edit('components/analytics/AnalyticsTracker.tsx', [
  [`      if (href.startsWith('tel:')) {
        events.phoneClick();
      } else if (href.includes('wa.me') || href.includes('whatsapp.com') || href.includes('api.whatsapp.com')) {
        events.whatsappClick();
      }`, `      const page = window.location.pathname;
      if (href.startsWith('tel:')) {
        events.phoneClick(page);
      } else if (href.includes('wa.me') || href.includes('api.whatsapp.com/send?phone')) {
        events.whatsappClick(page);
      } else if (href.includes('calendly.com')) {
        events.bookingClick(page);
      } else if (href === '/contact' || href.startsWith('/contact?')) {
        events.ctaClick(page, (anchor.textContent || '').trim().slice(0, 60));
      }`],
]);
