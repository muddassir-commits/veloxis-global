'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Clock, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

import { Post, blogPosts } from '../../data/blog-posts';

const allPostsData: (Post & { featured?: boolean })[] = blogPosts.map((post, idx) => ({
  ...post,
  featured: idx === 0
}));

export default function BlogContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = ['All', 'Guides', 'Landing Pages', 'Paid Ads', 'AI Automation', 'Growth Tips'];
  const POSTS_PER_PAGE = 9; // keep every article linked in the server-rendered HTML

  // Filter posts by category and search query
  const filteredPosts = allPostsData.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured post (first item matching filter that has featured: true, fallback to first item)
  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  
  // Non-featured posts for the grid
  const gridPosts = filteredPosts.filter(p => p.slug !== (featuredPost?.slug || ''));

  // Paginated grid posts
  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE);
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentGridPosts = gridPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="bg-slate-50 font-sans text-left pb-20">
      
      {/* Blog Hero Section */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <Badge color="indigo" className="mb-3">KNOWLEDGE HUB</Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-slate-900 leading-tight">
              Real estate marketing blog for builders, brokers and CPs
            </h1>
            <p className="text-slate-500 mt-2 text-sm sm:text-base leading-relaxed">
              Practical guides on Meta and Google ads for property, project landing pages, WhatsApp follow-up, EOI and channel partner programmes — written by Muddassir Ali.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              id="blog-search-input"
              type="search"
              aria-label="Search blog articles"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-royal-blue text-slate-900"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white sticky top-16 md:top-[72px] z-40 border-b border-slate-200/60 shadow-sm py-4">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`blog-category-btn-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shrink-0 transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-royal-blue text-white' 
                    : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-gutter mt-12">
        {/* 1. Featured Post Hero */}
        {featuredPost && currentPage === 1 && searchQuery === '' && (
          <Card hover className="bg-white border border-slate-100 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 mb-12 h-full p-0 group">
            
            {/* Visual Block (Left 5 cols) */}
            <div className="lg:col-span-5 bg-slate-100 relative min-h-[260px] lg:min-h-full overflow-hidden">
              <Link href={`/blog/${featuredPost.slug}`} className="block w-full h-full relative min-h-[260px] lg:min-h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="absolute top-6 left-6 z-10">
                <Badge color={featuredPost.badgeColor}>{featuredPost.category}</Badge>
              </div>
            </div>

            {/* Content Block (Right 7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between items-start gap-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold text-royal-blue uppercase tracking-widest">
                  FEATURED ARTICLE
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 hover:text-royal-blue transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>
              </div>

              {/* Author & Meta Row */}
              <div className="w-full flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-100 relative">
                    <Image 
                      src={featuredPost.authorPhoto} 
                      alt={featuredPost.author} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-bold text-slate-900 block">{featuredPost.author}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <Link 
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-1 text-royal-blue hover:text-royal-blue/80 font-bold"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>

          </Card>
        )}

        {/* 2. Grid Posts (3-column) */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center my-8">
            <p className="text-slate-400 font-semibold text-sm">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentGridPosts.map((post) => (
                <Card 
                  key={post.slug} 
                  hover
                  className="bg-white border border-slate-100 rounded-xl overflow-hidden flex flex-col justify-between h-full p-0 group"
                >
                  {/* Card Visual Header */}
                  <div className="h-44 bg-slate-100 relative border-b border-slate-50 flex items-center justify-center overflow-hidden">
                    <Link href={`/blog/${post.slug}`} className="block w-full h-full">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <div className="absolute top-4 left-4 z-10">
                      <Badge color={post.badgeColor}>{post.category}</Badge>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-2 hover:text-royal-blue transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Meta Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-100 relative">
                          <Image src={post.authorPhoto} alt={post.author} fill className="object-cover" />
                        </div>
                        <span className="text-xs font-bold text-slate-700">{post.author}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-400 text-[11px] font-semibold">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                        <Link href={`/blog/${post.slug}`} className="text-royal-blue font-bold">
                          Read →
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* 3. Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-slate-200">
                <button
                  id="blog-prev-page-btn"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors disabled:opacity-50"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-500" />
                </button>
                <span className="text-xs font-extrabold uppercase text-slate-500 tracking-wider">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  id="blog-next-page-btn"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5 text-slate-500" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
