const fs = require('fs');
const f = 'app/blog/[slug]/BlogPostContent.tsx';
const norm = (x) => x.replace(/\r\n/g, '\n').replace(/[ \t]+\n/g, '\n');
let s = norm(fs.readFileSync(f, 'utf8'));
const rep = (a, b) => { a = norm(a); if (!s.includes(a)) throw new Error('MISSING: ' + a.slice(0, 80)); s = s.split(a).join(b); };

rep(`import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  ChevronRight,
  FileText,
  ChevronUp
} from 'lucide-react';`, `import { ArrowLeft, Calendar, Clock, Share2, ChevronRight, FileText } from 'lucide-react';`);
rep(`import { Instagram, Facebook, Linkedin } from '../../../components/ui/BrandIcons';`, `import { Linkedin } from '../../../components/ui/BrandIcons';`);
rep(`interface PostContent {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Landing Pages' | 'Paid Ads' | 'AI Automation' | 'Growth Tips';
  badgeColor: 'teal' | 'orange' | 'indigo' | 'blue';
  author: string;
  authorPhoto: string;
  date: string;
  isoDate: string;
  readTime: string;
  headings: { id: string; text: string }[];
  htmlContent: string;
  image?: string;
}

export default function BlogPostContent({ post, relatedPosts }: { post: PostContent; relatedPosts: any[] }) {`, `import type { Post } from '../../../data/blog-posts';

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });

interface Props {
  post: Post;
  relatedPosts: Post[];
  service?: { slug: string; title: string; shortDesc: string };
}

export default function BlogPostContent({ post, relatedPosts, service }: Props) {`);
rep(`  const [shareOpen, setShareOpen] = useState(false);
`, ``);
rep(`              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>`, `              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                <time dateTime={post.modifiedIso}>
                  {post.modifiedIso !== post.isoDate ? 'Updated ' : ''}{formatDate(post.modifiedIso)}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{post.readTime}</span>
              </span>`);
rep(`                  <Image src={post.authorPhoto} alt={post.author} fill className="object-cover" />
                </div>
                <span>{post.author}</span>`, `                  <Image src={post.authorPhoto} alt="" fill sizes="24px" className="object-cover" />
                </div>
                <span>{post.author}</span>`);
rep(`                  href={shareUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"`, `                  href={shareUrls.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"`);
rep(`                  href={shareUrls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"`, `                  href={shareUrls.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"`);
rep(`                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"`, `                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"`);
rep(`            <div
              className="prose prose-slate max-w-none text-sm sm:text-body-md text-on-surface-variant leading-relaxed flex flex-col gap-6 w-full
              prose-headings:font-extrabold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-8 prose-h3:text-lg prose-strong:text-slate-900 prose-a:text-royal-blue prose-a:font-bold hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />`, `            <div className="article-body w-full" dangerouslySetInnerHTML={{ __html: post.htmlContent }} />`);
rep(`                    <Image src={post.authorPhoto} alt={post.author} fill className="object-cover" />`, `                    <Image src={post.authorPhoto} alt={post.author} fill sizes="112px" className="object-cover" />`);
rep(`                  <h4 className="text-lg font-extrabold text-slate-900">{post.author}</h4>`, `                  <p className="text-lg font-extrabold text-slate-900">{post.author}</p>`);
rep(`Muddassir Ali — Founder of Veloxis Global, {FOUNDER_YEARS} years in digital marketing. Based in Kanpur, serving Delhi, Noida, Lucknow & Kanpur.`, `Founder of Veloxis Global, with {FOUNDER_YEARS}+ years in digital marketing. Works with builders, brokers and channel partners across Kanpur, Lucknow, Noida and Delhi NCR.`);
rep(`<Link href="https://www.linkedin.com/in/muddassir-alii/" target="_blank" className`, `<Link href="https://www.linkedin.com/in/muddassir-alii/" target="_blank" rel="noopener noreferrer" className`);
rep(`<Link href="https://muddassirali.com" target="_blank" className`, `<Link href="https://muddassirali.com" target="_blank" rel="noopener noreferrer" className`);
rep(`              <h3 className="text-xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">`, `              <h2 className="text-xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-3">
                Related articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">`);
rep(`                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-royal-blue transition-colors">
                      {rel.title}
                    </h4>`, `                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-royal-blue transition-colors">
                      {rel.title}
                    </h3>`);
rep(`              <h4 className="text-xs font-bold text-royal-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Table of Contents</span>
              </h4>
              <nav className="flex flex-col gap-3 text-xs font-semibold text-slate-500">`, `              <p className="text-xs font-bold text-royal-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>On this page</span>
              </p>
              <nav aria-label="Table of contents" className="flex flex-col gap-3 text-xs font-semibold text-slate-500">`);
rep(`              <h4 className="text-lg font-extrabold relative z-10 leading-tight">
                Ready to fill your site-visit pipeline?
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed relative z-10">
                Get a free growth audit covering your landing page, ad spend, and lead response time — with a plan to fix what's leaking.
              </p>`, `              <p className="text-lg font-extrabold relative z-10 leading-tight">
                {service ? \`Need help with \${service.title.toLowerCase()}?\` : 'Want more site visits from your marketing?'}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed relative z-10">
                {service ? service.shortDesc : 'Get a free review of your landing page, ads and lead response time, with a plan to fix what is leaking.'}
              </p>
              {service && (
                <Link href={\`/services/\${service.slug}\`} className="text-xs font-bold text-teal-300 hover:text-white relative z-10">
                  See how it works →
                </Link>
              )}`);
fs.writeFileSync(f, s);
console.log('ok');
