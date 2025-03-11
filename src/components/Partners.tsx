'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const partners = [
  {
    name: 'Microsoft',
    logo: '/partners/microsoft.svg',
    description: 'Cloud Solutions Partner',
    category: 'Cloud'
  },
  {
    name: 'AWS',
    logo: '/partners/aws.svg',
    description: 'Advanced Consulting Partner',
    category: 'Cloud'
  },
  {
    name: 'Google Cloud',
    logo: '/partners/google-cloud.svg',
    description: 'Premier Partner',
    category: 'Cloud'
  },
  {
    name: 'IBM',
    logo: '/partners/ibm.svg',
    description: 'Business Partner',
    category: 'Enterprise'
  },
  {
    name: 'Oracle',
    logo: '/partners/oracle.svg',
    description: 'Gold Partner',
    category: 'Enterprise'
  },
  {
    name: 'Salesforce',
    logo: '/partners/salesforce.svg',
    description: 'Consulting Partner',
    category: 'CRM'
  }
];

const categories = ['All', 'Cloud', 'Enterprise', 'CRM'];

export default function Partners() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredPartner, setHoveredPartner] = useState<number | null>(null);

  const filteredPartners = selectedCategory === 'All'
    ? partners
    : partners.filter(partner => partner.category === selectedCategory);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] animated-bg"></div>
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Partners</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We work with industry leaders to deliver cutting-edge solutions to our clients.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {filteredPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="tech-card p-6 text-center group hover:glow relative"
                onMouseEnter={() => setHoveredPartner(index)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-sm text-slate-400 mb-2">{partner.description}</p>
                <div className="text-xs text-cyan-400">{partner.category}</div>

                <AnimatePresence>
                  {hoveredPartner === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute inset-0 bg-slate-900/90 rounded-lg p-4 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <h4 className="text-white font-semibold mb-2">Learn More</h4>
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-sm text-white hover:opacity-90 transition-opacity">
                          View Partnership
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
} 