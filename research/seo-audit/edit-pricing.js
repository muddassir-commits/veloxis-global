const fs = require('fs');
const edit = require('./edit');
const f = 'app/pricing/PricingContent.tsx';

// Replace the inline plans/faqs arrays with the shared data module.
let s = fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
const start = s.indexOf('  const plans = [');
const end = s.indexOf('  return (', start);
if (start < 0 || end < 0) throw new Error('plans/faqs block not found');
s = s.slice(0, start) + '  const faqs = pricingFaqs.map((f) => ({ q: f.question, a: f.answer }));\n\n' + s.slice(end);
fs.writeFileSync(f, s);

edit(f, [
  [`import { motion, AnimatePresence } from 'framer-motion';`, `import { motion, AnimatePresence } from 'framer-motion';
import { plans, pricingFaqs } from '../../data/pricing';
import { servicesData } from '../../data/services-data';`],
  [`              PRICING FRAMEWORK`, `              PRICING`],
  [`              Pricing Built Around Your Goals, Not a Generic Package`, `              Real estate marketing pricing and packages`],
  [`              Every business is different. Our pricing reflects that. Start with a free audit — we'll recommend exactly what you need and what it'll cost. No surprises, no lock-ins.`,
   `              Monthly fees for landing pages, Meta and Google ads, and WhatsApp automation. Ad spend is paid directly to Google and Meta, and there is no lock-in. Start with a free audit and we’ll recommend the right scope.`],
  [`                Get Your Free Growth Plan →`, `                Get a free audit →`],
  [`              SERVICE TIERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Bespoke Execution Frameworks
            </h2>
            <p className="text-slate-500 mt-3 text-sm">
              We align the project scale and resources directly with your brand size and market complexity.
            </p>`, `              STARTING PRICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What each service starts from
            </h2>
            <ul className="mt-6 flex flex-col sm:flex-row sm:justify-center gap-3 text-sm">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <a href={\`/services/\${s.slug}\`} className="inline-block bg-white border border-slate-200 rounded-full px-4 py-2 hover:border-royal-blue">
                    <span className="font-bold text-slate-900">{s.title}</span>{' '}
                    <span className="text-slate-500">· {s.pricingRange.replace('Starts from ', 'from ')}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-slate-500 mt-6 text-sm">
              Most clients combine services in one of the packages below. Final fees are fixed after a free audit.
            </p>`],
  [`                    RECOMMENDED VALUE`, `                    MOST COMMON`],
]);
