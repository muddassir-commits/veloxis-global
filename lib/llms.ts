// Builds /llms.txt and /llms-full.txt from the same data the pages use, so AI crawlers
// always get an accurate, current description of the site.
import { siteData } from '../data/site';
import { servicesData } from '../data/services-data';
import { audiences } from '../data/audiences';
import { playbooks } from '../data/playbooks';
import { getAllPosts } from './blog';
import { faqs } from '../data/faqs';
import { freeAuditFaqs } from '../data/free-audit';
import { SITE_URL, FOUNDER_YEARS } from './seo-config';
import { playbookFaqs } from '../data/playbook-faqs';
import {
  MIN_AD_BUDGET, leadSystemFaqs, leadSystemIncluded, leadSystemMetrics, leadSystemNri, leadSystemProblems, leadSystemSteps,
  leadSystemTimeline,
} from '../data/lead-system';

const qa = (list: { question: string; answer: string }[] = []) => list.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, '']);

const intro = `> ${siteData.definition} It works only in real estate and reports on site visits and cost per site visit.`;

// Build date: the llms routes are static, so this is when the content was last published.
const updated = `Last updated: ${new Date().toISOString().slice(0, 10)}`;

const leadSystemSummary =
  'Meta ads, a project landing page and an instant WhatsApp reply, set up and run as one system for real estate agents, brokers, channel partners and builders. One-time setup fee plus a monthly fee, month-to-month after setup; ad spend is paid by the client directly to Meta.';

const contact = `## Contact

- Email: ${siteData.email}
- Phone / WhatsApp: ${siteData.phone}
- Service area: ${siteData.areaServed.join(', ')} (service-area business; no walk-in office)
- Book a call: ${siteData.booking}
- Website: ${SITE_URL}`;

const facts = `## Key facts

- Founder: ${siteData.founder} (${FOUNDER_YEARS}+ years in digital marketing) — ${SITE_URL}/about
- Industry focus: real estate only
- Services: landing pages & project microsites; Meta (Facebook & Instagram) & Google ads for real estate lead generation; AI chatbot, WhatsApp & CRM automation
- Terms: month-to-month with 30 days' notice; ad spend is paid directly to Google and Meta by the client
- Playbooks on this site are example plans for hypothetical projects, not client case studies
- ${siteData.disambiguation}`;

export function buildLlmsTxt(): string {
  return [
    '# Veloxis Global',
    '',
    intro,
    '',
    updated,
    '',
    '## Core offer',
    '',
    `- [Real Estate Lead System](${SITE_URL}/real-estate-lead-system): ${leadSystemSummary}`,
    `- [Free marketing audit](${SITE_URL}/free-audit): a free review of a project's landing page, ads and lead follow-up with the founder.`,
    `- [About Veloxis Global and founder ${siteData.founder}](${SITE_URL}/about)`,
    `- [Contact](${SITE_URL}/contact): phone and WhatsApp ${siteData.phone}, email ${siteData.email}.`,
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
  const out: string[] = ['# Veloxis Global — full site content', '', intro, '', updated, '', facts, ''];

  out.push('## Real Estate Lead System', '', `URL: ${SITE_URL}/real-estate-lead-system`, '', leadSystemSummary, '');
  out.push('### The problem', ...leadSystemProblems.map((p) => `- ${p.title}: ${p.desc}`), '');
  out.push('### How it works', ...leadSystemSteps.map((st, i) => `${i + 1}. ${st.title}: ${st.desc}`), '');
  out.push('### What is included', ...leadSystemIncluded.map((g) => `- ${g.group}: ${g.items.join('; ')}`), '');
  out.push('### Timeline', ...leadSystemTimeline.map((t) => `- ${t.when} (${t.title}): ${t.desc}`), '');
  out.push('### Weekly report', ...leadSystemMetrics.map((m) => `- ${m.label}: ${m.desc}`), '');
  out.push(`### ${leadSystemNri.title}`, leadSystemNri.desc, `More: ${SITE_URL}${leadSystemNri.href}`, '');
  out.push(`Recommended minimum ad budget: ${MIN_AD_BUDGET} a month per project, paid directly to Meta. Fees are quoted after the free audit call.`, '');
  out.push('### FAQ', ...qa(leadSystemFaqs));

  for (const s of servicesData) {
    out.push(`## ${s.h1}`, '', `URL: ${SITE_URL}/services/${s.slug}`, '', ...s.intro, '');
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
  out.push('## Free audit FAQ', '', ...freeAuditFaqs.flatMap((f) => [`Q: ${f.question}`, `A: ${f.answer}`, '']));

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
