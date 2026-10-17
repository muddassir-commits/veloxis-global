const fs = require('fs');
const f = 'app/pricing/PricingContent.tsx';
let s = fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');

const start = s.indexOf('      {/* Pricing FAQs */}');
const end = s.indexOf('    </div>\n  );\n}', start);
if (start < 0 || end < 0) throw new Error('FAQ block not found');
s =
  s.slice(0, start) +
  `      <FaqAccordion
        customFaqs={pricingFaqs}
        title="Pricing questions"
        badgeText="FAQ"
        description="Contracts, ad spend, timelines and cancellation."
      />
` +
  s.slice(end);

const rep = (a, b) => { if (!s.includes(a)) throw new Error('missing ' + a); s = s.replace(a, b); };
rep(`'use client';

import React, { useState } from 'react';`, `import React from 'react';`);
rep(`import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';`, `import { Check } from 'lucide-react';
import { FaqAccordion } from '../../components/sections/FaqAccordion';`);
rep(`  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqs = pricingFaqs.map((f) => ({ q: f.question, a: f.answer }));

`, ``);
fs.writeFileSync(f, s);
console.log('ok');
