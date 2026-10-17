const edit = require('./edit');

edit('data/site.ts', [
  [`  founder: "Muddassir Ali",`, `  founder: "Muddassir Ali",
  booking: "https://calendly.com/veloxis-global/30min",
  whatsappLink: "https://wa.me/918887620727?text=Hi%20Veloxis%20Global%2C%20I%27d%20like%20a%20free%20marketing%20audit",`],
]);

edit('app/about/page.tsx', [
  [`href="https://calendly.com/veloxis-global/30min"`, `href={siteData.booking}`],
  [`import { servicesData } from '../../data/services-data';`, `import { servicesData } from '../../data/services-data';
import { siteData } from '../../data/site';`],
]);

