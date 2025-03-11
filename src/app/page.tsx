import React from 'react';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Partners from '@/components/Partners';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Header />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Partners />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
} 