// Original research: Veloxis Global's automated check of real estate business websites.
// Source: the lead engine's homepage audits (06_data/veloxis.db outside this repo), run 1–2 Oct 2026.
// Figures are conservative: tracking counts as present if ANY Meta pixel, Google Ads tag or Google
// Tag Manager/Analytics code is on the homepage, and a form counts if the homepage has any <form>.

export const websiteAudit = {
  sample: 749,
  cities: 26,
  dates: '1–2 October 2026',
  findings: [
    { pct: 56, count: 417, label: 'had no ad or analytics tracking of any kind', detail: 'No Meta pixel, no Google Ads tag and no Google Tag Manager or Analytics code on the homepage.' },
    { pct: 60, count: 449, label: 'had no WhatsApp click-to-chat link', detail: 'Buyers who prefer a quick WhatsApp message had no one-tap way to send one.' },
    { pct: 47, count: 354, label: 'had no form of any kind on the homepage', detail: 'Not even a short enquiry or callback form.' },
    { pct: 35, count: 262, label: 'had neither a WhatsApp link nor a form', detail: 'A visitor ready to ask a question had no quick way to do it from the homepage.' },
  ],
  extras: [
    { pct: 19, count: 139, label: 'took more than 3 seconds to load the homepage on our check' },
    { pct: 9, count: 67, label: 'were not on secure HTTPS, so browsers mark them “Not secure”' },
  ],
  method:
    'We found real estate agents, consultants, developers and builders on Google Maps in 26 cities across Uttar Pradesh, Delhi NCR and nearby states, and ran an automated check of each business’s homepage on 1–2 October 2026. Only the homepage was checked, so a site may have tracking or forms on other pages.',
};
