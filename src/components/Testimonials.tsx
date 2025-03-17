'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { getAvatarPlaceholder } from '@/lib/avatarUtils';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar?: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Alexandre Couture',
      position: 'Directeur Technique',
      company: 'TechSolutions',
      testimonial: "L'équipe de HK Consulting a transformé notre infrastructure cloud, ce qui nous a permis de réduire nos coûts de 30% tout en améliorant nos performances.",
    },
    {
      id: 2,
      name: 'Marie Lefebvre',
      position: 'CEO',
      company: 'InnovateNow',
      testimonial: "Leur expertise en IA nous a permis de développer des solutions innovantes qui ont révolutionné notre approche client. Un partenaire de confiance.",
    },
    {
      id: 3,
      name: 'Thomas Dubois',
      position: 'Responsable Sécurité',
      company: 'SecureData',
      testimonial: "Depuis que nous avons fait appel à HK Consulting pour notre cybersécurité, nous n'avons eu aucune intrusion. Leur approche proactive nous offre une tranquillité d'esprit.",
    },
    {
      id: 4,
      name: 'Sophie Moreau',
      position: 'Directrice Marketing',
      company: 'DigitalGrowth',
      testimonial: "La transformation digitale menée par HK Consulting a permis à notre entreprise d'augmenter son engagement client de 45% et nos conversions de 25%. Résultats exceptionnels!",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];
  const avatarUrl = currentTestimonial.avatar || getAvatarPlaceholder(currentTestimonial.name);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Découvrez pourquoi nos clients nous font confiance pour leurs besoins technologiques.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="h-[400px] md:h-[300px] relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 shadow-lg">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
              >
                <FaQuoteLeft className="text-blue-500 dark:text-blue-400 h-10 w-10 mb-6" />
                <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl italic mb-8">
                  "{currentTestimonial.testimonial}"
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-slate-200 dark:bg-slate-700 mr-4 overflow-hidden">
                    <img 
                      src={avatarUrl}
                      alt={`Avatar of ${currentTestimonial.name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {currentTestimonial.position}, {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-slate-700 shadow-md text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none transform -translate-x-1/2"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="h-5 w-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-slate-700 shadow-md text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-600 focus:outline-none transform translate-x-1/2"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="absolute -bottom-4 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`h-3 w-3 rounded-full focus:outline-none ${
                  index === currentIndex
                    ? 'bg-blue-500'
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 