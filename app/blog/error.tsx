'use client';

// If anything in the blog fails while rendering, only this part of the page is replaced.
// The header, footer and every other page keep working.
import Link from 'next/link';

export default function BlogError({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-xl mx-auto px-gutter text-center flex flex-col items-center gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">This article could not be loaded</h1>
        <p className="text-slate-600">Please try again, or browse our other guides.</p>
        <div className="flex gap-3 mt-2">
          <button type="button" onClick={reset} className="px-5 py-2.5 rounded-md bg-royal-blue text-white text-sm font-bold">
            Try again
          </button>
          <Link href="/blog" className="px-5 py-2.5 rounded-md border border-slate-300 text-slate-800 text-sm font-bold">
            All guides
          </Link>
        </div>
      </div>
    </section>
  );
}
