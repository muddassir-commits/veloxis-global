const edit = require('./edit');

edit('components/sections/HeroSection.tsx', [
  [`import { companyStats } from '../../data/stats';
import { CheckCircle, Star } from 'lucide-react';`, `import { CheckCircle } from 'lucide-react';`],
  [`        alt="Premium real estate development in Delhi NCR"
        fill
        priority`, `        alt=""
        fill
        priority
        sizes="100vw"`],
  [`<span className="text-xs font-bold tracking-wider uppercase text-white/90">Delhi NCR Real Estate Marketing</span>`,
   `<span className="text-xs font-bold tracking-wider uppercase text-white/90">For builders, brokers &amp; channel partners</span>`],
  [`            The Growth Agency That Fills Your{' '}
            <span className="text-emerald-400">Site Visits</span>`, `            The real estate marketing agency that fills your{' '}
            <span className="text-emerald-400">site visits</span>`],
  [`            We build predictable lead-generation engines for real estate developers and channel partners in Delhi NCR. High-converting landing pages, Meta & Google Ads, and WhatsApp automation — everything you need to sell properties faster.`,
   `            We build project landing pages, run Meta and Google ads, and set up WhatsApp automation that replies to every enquiry in seconds — for developers, brokers and channel partners in Kanpur, Lucknow, Noida and Delhi NCR. Measured on site visits, not clicks.`],
  [`              Get Your Free Growth Plan →`, `              Get a free marketing audit →`],
  [`              href="/case-studies"`, `              href="/playbooks"`],
  [`              View Case Studies`, `              See example plans`],
  [`              <span>{companyStats.yearsExperience} Years Experience</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>{companyStats.projectsDelivered} Projects Delivered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" aria-hidden="true" />
              <span>{companyStats.clientRating} Client Rating</span>`, `              <span>Real estate only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Ad spend stays in your accounts</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Month-to-month, no lock-in</span>`],
]);
