const fs = require('fs');
const edit = require('./edit');
const norm = (x) => x.replace(/\r\n/g, '\n');

// About: replace the inline 3-question list with the shared 7-question set.
{
  const f = 'app/about/page.tsx';
  let s = norm(fs.readFileSync(f, 'utf8'));
  s = s.replace(/        customFaqs=\{\[[\s\S]*?\n        \]\}\n/, '        customFaqs={aboutFaqs(FOUNDER_YEARS)}\n');
  s = s.replace(`import { siteData } from '../../data/site';`, `import { siteData } from '../../data/site';\nimport { aboutFaqs } from '../../data/page-faqs';`);
  if (!s.includes('aboutFaqs(FOUNDER_YEARS)') || !s.includes("from '../../data/page-faqs'")) throw new Error('about edit failed');
  fs.writeFileSync(f, s);
  console.log('edited', f);
}

// Legal pages.
for (const [f, name] of [['app/privacy-policy/page.tsx', 'privacyFaqs'], ['app/terms/page.tsx', 'termsFaqs']]) {
  let s = norm(fs.readFileSync(f, 'utf8'));
  s = s.replace(/        customFaqs=\{\[[\s\S]*?\n        \]\}\n/, `        customFaqs={${name}}\n        description="Short answers based on the policy above."\n`);
  s = s.replace(`import { siteData } from '../../data/site';`, `import { siteData } from '../../data/site';\nimport { ${name} } from '../../data/page-faqs';`);
  if (!s.includes(`customFaqs={${name}}`)) throw new Error(f + ' edit failed');
  fs.writeFileSync(f, s);
  console.log('edited', f);
}

// Services hub, contact, playbooks hub: add a FAQ block before the CTA / at the end.
edit('app/services/page.tsx', [
  [`import { CtaBanner } from '../../components/sections/CtaBanner';`, `import { CtaBanner } from '../../components/sections/CtaBanner';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { servicesHubFaqs } from '../../data/page-faqs';`],
  [`      <CtaBanner />
    </>`, `      <FaqAccordion customFaqs={servicesHubFaqs} title="Questions about our services" badgeText="FAQ" description="What builders, brokers and channel partners ask before choosing a service." />

      <CtaBanner />
    </>`],
]);

edit('app/contact/page.tsx', [
  [`import { siteData } from '@/data/site';`, `import { siteData } from '@/data/site';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { contactFaqs } from '../../data/page-faqs';`],
  [`      </section>
    </>
  );
}`, `      </section>

      <FaqAccordion customFaqs={contactFaqs} title="Before you get in touch" badgeText="FAQ" description="What happens when you contact us, and what the free audit includes." />
    </>
  );
}`],
]);

edit('app/playbooks/page.tsx', [
  [`import { CtaBanner } from '../../components/sections/CtaBanner';`, `import { CtaBanner } from '../../components/sections/CtaBanner';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { playbooksHubFaqs } from '../../data/page-faqs';`],
  [`      <CtaBanner
        title="Want a plan like this for your project?"`, `      <FaqAccordion customFaqs={playbooksHubFaqs} title="About these playbooks" badgeText="FAQ" description="What the playbooks are, where the numbers come from, and how to use them." />

      <CtaBanner
        title="Want a plan like this for your project?"`],
]);

edit('app/blog/page.tsx', [
  [`import BlogContent from './BlogContent';`, `import BlogContent from './BlogContent';
import { FaqAccordion } from '../../components/sections/FaqAccordion';
import { blogIndexFaqs } from '../../data/page-faqs';`],
  [`      <BlogContent />
    </>`, `      <BlogContent />
      <FaqAccordion customFaqs={blogIndexFaqs} title="About the blog" badgeText="FAQ" description="Who writes these guides, what they cover and how they are kept up to date." />
    </>`],
]);
