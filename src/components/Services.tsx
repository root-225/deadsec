'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Cloud Solutions',
    description: 'Comprehensive cloud services including migration, optimization, and management for AWS, Azure, and Google Cloud.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    features: [
      'Cloud Migration Services',
      'Cloud Architecture Design',
      'Cost Optimization',
      '24/7 Cloud Support',
      'Security & Compliance'
    ],
    image: '/services/cloud-solutions.jpg',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 2,
    title: 'AI & Machine Learning',
    description: 'Cutting-edge AI solutions including custom model development, data analysis, and intelligent automation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    features: [
      'Custom AI Model Development',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision Solutions',
      'AI Integration Services'
    ],
    image: '/services/ai-ml.jpg',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    features: [
      'Security Assessment',
      'Threat Detection',
      'Compliance Management',
      'Security Training',
      'Incident Response'
    ],
    image: '/services/cybersecurity.jpg',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 4,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: [
      'Process Automation',
      'Digital Strategy',
      'Legacy Modernization',
      'Change Management',
      'Digital Workplace'
    ],
    image: '/services/digital-transformation.jpg',
    color: 'from-green-500 to-teal-500'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 matrix-bg opacity-10"></div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="tech-card group relative overflow-hidden"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn More
                  </button>
                  <button className="px-4 py-2 bg-slate-800 rounded-full text-sm text-white hover:bg-slate-700 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {hoveredService === service.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6"
                  >
                    <div className="w-full space-y-4">
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
                        Contact Us
                      </button>
                      <button className="w-full px-4 py-2 bg-slate-800 rounded-full text-white font-medium hover:bg-slate-700 transition-colors">
                        Schedule Demo
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                {(() => {
                  const service = services.find(s => s.id === selectedService);
                  if (!service) return null;

                  return (
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} text-white`}>
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                        </div>
                        <button
                          onClick={() => setSelectedService(null)}
                          className="p-2 hover:bg-slate-800 rounded-full transition-colors"
                        >
                          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <p className="text-slate-400 mb-6">{service.description}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-slate-800 rounded-lg">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-white">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white font-medium hover:opacity-90 transition-opacity">
                          Get Started
                        </button>
                        <button className="flex-1 px-6 py-3 bg-slate-800 rounded-full text-white font-medium hover:bg-slate-700 transition-colors">
                          Schedule Consultation
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 