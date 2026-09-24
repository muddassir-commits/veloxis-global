// Turns a Word .docx file into a new blog post DRAFT.
// Usage: npm run blog:from-docx -- "C:\path\to\article.docx" my-post-slug 2026-10-01
//
// Creates content/blog/<slug>/ with:
//   content.html  article body (Word headings become <h2 id="..."> / <h3>, images saved to public/images/blog/<slug>/)
//   post.json     metadata with "draft": true and placeholders to complete
// The draft is NOT published until post.json is completed and "draft": true is removed.
// Run `npm run blog:check` to see what is still missing.
// Old .doc files and Google Docs: save/download as .docx first.
import fs from 'node:fs';
import path from 'node:path';
import mammoth from 'mammoth';

const [docxPath, slug, date] = process.argv.slice(2);
if (!docxPath || !slug) {
  console.error('Usage: npm run blog:from-docx -- <file.docx> <post-slug> [YYYY-MM-DD]');
  process.exit(1);
}
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) {
  console.error('Slug must be lowercase words separated by dashes, e.g. real-estate-crm-guide');
  process.exit(1);
}
if (!docxPath.toLowerCase().endsWith('.docx')) {
  console.error('Only .docx is supported. Open the file in Word or Google Docs and save/download it as .docx.');
  process.exit(1);
}

const postDir = path.join('content', 'blog', slug);
if (fs.existsSync(postDir)) {
  console.error(`content/blog/${slug} already exists. Choose another slug or delete that folder first.`);
  process.exit(1);
}
const imgDir = path.join('public', 'images', 'blog', slug);
let imgCount = 0;

const result = await mammoth.convertToHtml(
  { path: docxPath },
  {
    styleMap: [
      "p[style-name='Title'] => h1:fresh",
      "p[style-name='Heading 1'] => h2:fresh",
      "p[style-name='Heading 2'] => h2:fresh",
      "p[style-name='Heading 3'] => h3:fresh",
    ],
    convertImage: mammoth.images.imgElement(async (image) => {
      const ext = (image.contentType.split('/')[1] || 'png').replace('jpeg', 'jpg');
      if (!['jpg', 'png', 'webp'].includes(ext)) return { src: '' };
      fs.mkdirSync(imgDir, { recursive: true });
      const file = `image-${++imgCount}.${ext}`;
      fs.writeFileSync(path.join(imgDir, file), Buffer.from(await image.readAsBase64String(), 'base64'));
      return { src: `/images/blog/${slug}/${file}` };
    }),
  },
);

let html = result.value;

// Title: first <h1> (Word "Title" style) becomes the post title and is removed from the body.
let title = '';
html = html.replace(/<h1>([\s\S]*?)<\/h1>/, (_, t) => {
  title = t.replace(/<[^>]+>/g, '').trim();
  return '';
});
html = html.replace(/<h1>/g, '<h2>').replace(/<\/h1>/g, '</h2>');

// Give every <h2> a unique id for the table of contents.
const used = new Set();
html = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_, text) => {
  const base = text.replace(/<[^>]+>/g, '').toLowerCase().replace(/&[a-z]+;/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 50) || 'section';
  let id = base;
  for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
  used.add(id);
  return `<h2 id="${id}">${text}</h2>`;
});

// Tidy: drop empty paragraphs, images that could not be converted, and Word anchors.
html = html
  .replace(/<p>\s*<\/p>/g, '')
  .replace(/<img src=""[^>]*>/g, '')
  .replace(/<a id="[^"]*"><\/a>/g, '')
  .replace(/<img /g, '<img loading="lazy" ')
  .replace(/(<\/(p|h2|h3|ul|ol|table|blockquote)>)/g, '$1\n')
  .trim();

fs.mkdirSync(postDir, { recursive: true });
fs.writeFileSync(path.join(postDir, 'content.html'), html + '\n');

const firstPara = (html.match(/<p>([\s\S]*?)<\/p>/)?.[1] || '').replace(/<[^>]+>/g, '').trim();
const meta = {
  draft: true,
  title: title || 'TODO: post title',
  seoTitle: 'TODO: under 60 characters',
  excerpt: firstPara.slice(0, 160) || 'TODO: 50 to 160 characters shown on cards and in Google',
  date: date || new Date().toISOString().slice(0, 10),
  category: 'Guides',
  image: '/images/people/blog/TODO-cover-1600x1000.jpg',
  imageAlt: 'TODO: describe the cover photo',
  faqs: [],
};
fs.writeFileSync(path.join(postDir, 'post.json'), JSON.stringify(meta, null, 2) + '\n');

console.log(`Draft created: content/blog/${slug}/`);
console.log(`  headings: ${used.size}, images: ${imgCount}${result.messages.length ? `, converter notes: ${result.messages.length}` : ''}`);
console.log('Next: complete post.json (seoTitle, excerpt, category, cover image, 7-9 FAQs), then remove "draft": true.');
console.log('Check with: npm run blog:check');
