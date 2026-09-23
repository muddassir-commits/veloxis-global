// Keyword-stuffing check: how often each page's primary keyword appears in its visible text.
const BASE = process.argv[2] || 'https://www.veloxisglobal.com';
const map = {
  '/': 'real estate marketing agency',
  '/services': 'real estate marketing services',
  '/services/high-converting-landing-pages': 'landing page',
  '/services/paid-ads': 'lead generation',
  '/services/ai-automation': 'chatbot',
  '/industries/real-estate': 'developers',
  '/channel-partners': 'channel partner',
  '/playbooks': 'playbook',
  '/blog/what-is-eoi-in-real-estate': 'eoi',
  '/blog/channel-partner-in-real-estate': 'channel partner',
  '/blog/real-estate-ad-examples': 'ads',
};
(async () => {
  for (const [path, kw] of Object.entries(map)) {
    const h = await (await fetch(BASE + path)).text();
    const main = (h.replace(/<script[\s\S]*?<\/script>/g, '').match(/<main[\s\S]*<\/main>/) || [''])[0];
    const text = main.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').toLowerCase().replace(/\s+/g, ' ');
    const words = text.split(' ').filter(Boolean).length;
    const hits = text.split(kw).length - 1;
    const density = ((hits * kw.split(' ').length) / words) * 100;
    console.log(`${density > 3 ? 'WARN' : 'PASS'}  ${path.padEnd(42)} "${kw}" ×${hits} in ${words} words = ${density.toFixed(2)}%`);
  }
})();
