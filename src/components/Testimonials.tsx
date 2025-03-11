'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    image: '/testimonials/sarah.jpg',
    content: 'The team at HK Solutions transformed our digital infrastructure. Their expertise in cloud computing and AI solutions helped us achieve unprecedented growth.',
    rating: 5,
    category: 'Cloud Computing'
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at InnovateTech',
    image: '/testimonials/michael.jpg',
    content: 'Working with HK Solutions was a game-changer for our product development. Their innovative approach and technical excellence are unmatched.',
    rating: 5,
    category: 'AI & ML'
  },
  {
    name: 'Emma Davis',
    role: 'Director of Operations at GlobalTech',
    image: '/testimonials/emma.jpg',
    content: 'The level of professionalism and technical expertise demonstrated by HK Solutions is exceptional. They delivered beyond our expectations.',
    rating: 5,
    category: 'Digital Transformation'
  }
];

const categories = ['All', 'Cloud Computing', 'AI & ML', 'Digital Transformation'];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(testimonial => {
      const matchesSearch = testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.role.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || testimonial.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animated-bg"></div>
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">What Our Clients Say</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-2xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search testimonials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-slate-800 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {filteredTestimonials.length > 0 ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="tech-card p-8 md:p-12 max-w-3xl mx-auto"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-gradient">
                    <img
                      src={filteredTestimonials[currentIndex].image}
                      alt={filteredTestimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{filteredTestimonials[currentIndex].name}</h3>
                    <p className="text-slate-400">{filteredTestimonials[currentIndex].role}</p>
                    <span className="text-sm text-purple-400">{filteredTestimonials[currentIndex].category}</span>
                  </div>
                </div>

                <div className="flex mb-6">
                  {[...Array(filteredTestimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-lg text-slate-300 italic">
                  "{filteredTestimonials[currentIndex].content}"
                </blockquote>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-slate-400">No testimonials found matching your search criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {filteredTestimonials.length > 0 && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 