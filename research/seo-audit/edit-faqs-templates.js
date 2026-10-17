const edit = require('./edit');

edit('app/playbooks/[slug]/page.tsx', [
  [`import { CtaBanner } from '../../../components/sections/CtaBanner';`, `import { CtaBanner } from '../../../components/sections/CtaBanner';
import { FaqAccordion } from '../../../components/sections/FaqAccordion';
import { playbookFaqs } from '../../../data/playbook-faqs';`],
  [`      </article>

      <CtaBanner`, `      </article>

      {playbookFaqs[pb.slug] && (
        <FaqAccordion customFaqs={playbookFaqs[pb.slug]} title="Questions about this plan" badgeText="FAQ" description="Short answers to the questions this playbook raises most often." />
      )}

      <CtaBanner`],
]);

edit('app/blog/[slug]/page.tsx', [
  [`import BlogPostContent from './BlogPostContent';`, `import BlogPostContent from './BlogPostContent';
import { FaqAccordion } from '../../../components/sections/FaqAccordion';
import { blogFaqs } from '../../../data/blog-faqs';`],
  [`      <CtaBanner />`, `      {blogFaqs[post.slug] && (
        <FaqAccordion customFaqs={blogFaqs[post.slug]} title="Frequently asked questions" badgeText="FAQ" description="Quick answers from this guide." />
      )}

      <CtaBanner />`],
]);

// Include every FAQ set in llms-full.txt too.
edit('lib/llms.ts', [
  [`import { SITE_URL, FOUNDER_YEARS } from './seo-config';`, `import { SITE_URL, FOUNDER_YEARS } from './seo-config';
import { blogFaqs } from '../data/blog-faqs';
import { playbookFaqs } from '../data/playbook-faqs';

const qa = (list: { question: string; answer: string }[] = []) => list.flatMap((f) => [\`Q: \${f.question}\`, \`A: \${f.answer}\`, '']);`],
  [`      out.push('');
    }
  }`, `      out.push('');
    }
    out.push('### FAQ', ...qa(playbookFaqs[p.slug]));
  }`],
  [`    out.push(\`## Guide: \${post.title}\`, '', \`URL: \${SITE_URL}/blog/\${post.slug}\`, '', stripHtml(post.htmlContent), '');`,
   `    out.push(\`## Guide: \${post.title}\`, '', \`URL: \${SITE_URL}/blog/\${post.slug}\`, '', stripHtml(post.htmlContent), '', '### FAQ', ...qa(blogFaqs[post.slug]));`],
]);
