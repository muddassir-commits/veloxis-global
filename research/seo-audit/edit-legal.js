const fs = require('fs');

for (const [f, key] of [['app/privacy-policy/page.tsx', 'privacy'], ['app/terms/page.tsx', 'terms']]) {
  let s = fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
  // Metadata from the central registry.
  s = s.replace(/export const metadata: Metadata = constructMetadata\(\{[\s\S]*?\}\);/, `export const metadata: Metadata = constructMetadata(pageMeta.${key});`);
  s = s.replace(`import { constructMetadata } from '../../lib/seo-config';`, `import { constructMetadata, pageMeta } from '../../lib/seo-config';`);
  // Hand-written breadcrumb/WebPage JSON-LD: breadcrumbs now come from <Breadcrumb>, WebPage adds nothing here.
  s = s.replace(/  const breadcrumbSchema = \{[\s\S]*?\n  \};\n/, '');
  s = s.replace(/  const webPageSchema = \{[\s\S]*?\n  \};\n/, '');
  s = s.replace(`      <SchemaMarkup schema={breadcrumbSchema} />\n`, '').replace(`      <SchemaMarkup schema={webPageSchema} />\n`, '');
  s = s.replace(`import { SchemaMarkup } from '../../components/ui/SchemaMarkup';\n`, '');
  // FAQ blocks on legal pages stay visible but don't need FAQPage markup.
  s = s.replace('      <FaqAccordion', '      <FaqAccordion\n        withSchema={false}');
  if (/breadcrumbSchema|webPageSchema/.test(s)) throw new Error('leftover schema in ' + f);
  fs.writeFileSync(f, s);
  console.log('edited', f);
}
