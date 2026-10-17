const edit = require('./edit');

edit('components/sections/ServicesGrid.tsx', [
  [`import { services } from '../../data/services';`, `import { servicesData as services } from '../../data/services-data';`],
  [`            Three Pipelines. One Growth Engine.`, `            Three real estate marketing services that work as one system`],
  [`            Everything a real estate developer needs to generate qualified leads and fill site visits — no fluff, no vanity metrics.`,
   `            A page that converts, ads that bring exclusive enquiries, and automation that replies to every lead — run together and judged on site visits.`],
  [`                        alt={service.title}`, `                        alt=""`],
  [`                        {service.shortDesc}`, `                        {service.shortDesc}`],
  [`                        <span>Learn More</span>`, `                        <span>{service.title}</span>`],
]);

edit('components/sections/BlogPreview.tsx', [
  [`              Real Estate Marketing Insights for NCR Developers`, `              Guides for builders, brokers and channel partners`],
]);
