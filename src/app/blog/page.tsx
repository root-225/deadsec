'use client';

import React, { useState } from 'react';
import Blog from '@/components/Blog';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';

const categories = [
  'All',
  'Artificial Intelligence',
  'Cloud Computing',
  'Cybersecurity',
  'Web Development',
  'Mobile Development',
  'DevOps',
  'Blockchain'
];

export default function BlogPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <Header />
      <main className="pt-20 bg-[#020617]">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animated-bg"></div>
          <div className="absolute inset-0 matrix-bg opacity-10"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold gradient-text sm:text-5xl mb-2">Our Blog</h1>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
              <p className="mt-4 text-lg text-slate-400 max-w-3xl mx-auto">
                Explore our latest insights, tutorials, and updates about technology and innovation
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300 pl-10"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <Blog />

        {/* Newsletter Section */}
        <section className="relative py-20">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="tech-card p-8 md:p-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Stay updated with our latest articles, tech news, and industry insights delivered straight to your inbox.
              </p>
              <form className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-md bg-slate-800/50 border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="cyber-button px-6 py-2 rounded-md text-cyan-400 border border-cyan-500/30 hover:text-white transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}