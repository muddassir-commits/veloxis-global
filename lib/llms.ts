// Builds /llms.txt and /llms-full.txt from the same data the pages use, so AI crawlers
// always get an accurate, current description of the site.
import { siteData } from '../data/site';
import { servicesData } from '../data/services-data';
import { audiences } from '../data/audiences';
import { playbooks } from '../data/playbooks';
import { getAllPosts } from './blog';
import { faqs } from '../data/faqs';
import { pricingFaqs } from '../data/pricing';
import { SITE_URL, FOUNDER_YEARS } from './seo-config';
import { playbookFaqs } from '../data/playbook-faqs';

const qa = (list: { question: string; answer: string }[] = []) => list.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, '']);

const intro = `> Veloxis Global is a real estate marketing agency for developers, builders, brokers and channel partners in India. It builds project landing pages, runs Meta and Google ads for property leads, and sets up WhatsApp chatbots and CRM automation that reply to every enquiry within seconds. It works only in real estate and reports on site visits and cost per site visit.`;

const contact = `## Contact

- Email: ${siteData.email}
- Phone / WhatsApp: ${siteData.phone}
- Service area: ${siteData.areaServed.join(', ')} (service-area business; no walk-in office)
- Book a call: ${siteData.booking}
- Website: ${SITE_URL}`;

const facts = `## Key facts

- Founder: ${siteData.founder} (${FOUNDER_YEARS}+ years in digital marketing) — ${SITE_URL}/about
- Industry focus: real estate only
- Services: landing pages & project microsites; Meta & Google ads for lead generation; WhatsApp chatbot & CRM automation
- Terms: month-to-month with 30 days' notice; ad spend is paid directly to Google and Meta by the client
- Playbooks on this site are example plans for hypothetical projects, not client case studies`;

export function buildLlmsTxt(): string {
  return [
    '# Veloxis Global',
    '',
    intro,
    '',
    '## Services',
    '',
    ...servicesData.map((s) => `- [${s.title}](${SITE_URL}/services/${s.slug}): ${s.shortDesc}`),
    '',
    '## Who we help',
    '',
    ...Object.values(audiences).map((a) => `- [${a.h1}](${SITE_URL}${a.path}): ${a.lead}`),
    '',
    '## Playbooks (example plans)',
    '',
    ...playbooks.map((p) => `- [${p.title}](${SITE_URL}/playbooks/${p.slug}): ${p.excerpt}`),
    '',
    '## Guides',
    '',
    ...getAllPosts().map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.excerpt}`),
    '',
    facts,
    '',
    contact,
    '',
    '## Optional',
    '',
    `- [Full site content](${SITE_URL}/llms-full.txt)`,
    `- [Pricing](${SITE_URL}/pricing)`,
    '',
  ].join('\n');
}

const stripHtml = (html: string) =>
  html
    .replace(/<h2[^>]*>/g, '\n### ')
    .replace(/<\/h2>/g, '\n')
    .replace(/<li>/g, '- ')
    .replace(/<\/(p|li|tr|table|ul|ol)>/g, '\n')
    .replace(/<t[dh]>/g, ' | ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

export function buildLlmsFullTxt(): string {
  const out: string[] = ['# Veloxis Global — full site content', '', intro, '', facts, ''];

  for (const s of servicesData) {
    out.push(`## ${s.h1}`, '', `URL: ${SITE_URL}/services/${s.slug}`, `Pricing: ${s.pricingRange}`, '', ...s.intro, '');
    out.push(`### ${s.problemsHeading}`, ...s.problems.map((p) => `- ${p.title}: ${p.desc}`), '');
    out.push(`### ${s.deliverablesHeading}`, ...s.deliverables.map((d) => `- ${d.title}: ${d.desc}`), '');
    out.push('### How it works', ...s.process.map((p, i) => `${i + 1}. ${p.title}: ${p.desc}`), '');
    out.push('### FAQ', ...s.faqs.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, '']));
  }

  for (const a of Object.values(audiences)) {
    out.push(`## ${a.h1}`, '', `URL: ${SITE_URL}${a.path}`, '', ...a.intro, '');
    out.push(`### ${a.painsHeading}`, ...a.pains.map((p) => `- ${p.title}: ${p.desc}`), '');
    out.push('### FAQ', ...a.faqs.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, '']));
  }

  out.push('## General FAQ', '', ...faqs.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, '']));
  out.push('## Pricing FAQ', '', ...pricingFaqs.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, '']));

  for (const p of playbooks) {
    out.push(`## Playbook: ${p.title}`, '', `URL: ${SITE_URL}/playbooks/${p.slug}`, `Scenario (example, not a client result): ${p.scenario}`, '');
    for (const sec of p.sections) {
      out.push(`### ${sec.heading}`, ...(sec.paragraphs || []), ...(sec.list || []).map((l) => `- ${l}`));
      if (sec.table) out.push(`| ${sec.table.headers.join(' | ')} |`, ...sec.table.rows.map((r) => `| ${r.join(' | ')} |`));
      out.push('');
    }
    out.push('### FAQ', ...qa(playbookFaqs[p.slug]));
  }

  for (const post of getAllPosts()) {
    out.push(`## Guide: ${post.title}`, '', `URL: ${SITE_URL}/blog/${post.slug}`, '', stripHtml(post.htmlContent), '', '### FAQ', ...qa(post.faqs));
  }

  out.push(contact, '');
  return out.join('\n');
}
