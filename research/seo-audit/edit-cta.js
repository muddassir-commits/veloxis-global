const edit = require('./edit');

edit('components/sections/CtaBanner.tsx', [
  [`  const displayTitle = title || "Ready to Scale Your Real Estate Sales in 2026?";
  const displayDescription = description || "Get a FREE, no-obligation growth roadmap session. We will evaluate your current funnels, audit your competitor channels, and outline an actionable strategy to double your site visits.";`,
   `  const displayTitle = title || 'Get a free real estate marketing audit';
  const displayDescription =
    description ||
    'Send us your project or current campaigns. We’ll review your landing page, ads and lead follow-up and tell you what to fix first — no obligation.';`],
  [`                Get Your Growth Plan →`, `                Get a free audit →`],
  [`                id="cta-banner-talk-director-btn"
                href="/contact"`, `                id="cta-banner-whatsapp-btn"
                href="https://wa.me/918887620727?text=Hi%20Veloxis%20Global%2C%20I%27d%20like%20a%20free%20marketing%20audit"`],
  [`                Talk to our Director`, `                Chat on WhatsApp`],
  [`              <span>48-Hour Delivery</span>`, `              <span>Real estate only</span>`],
  [`              <span>100% Manual Review</span>`, `              <span>Month-to-month</span>`],
  [`              <span>No Commitments</span>`, `              <span>No obligation</span>`],
]);
