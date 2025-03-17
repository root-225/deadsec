'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Hero from '@/components/Hero';
import LoadingSpinner from '@/components/LoadingSpinner';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const DynamicStats = dynamic(() => import('@/components/Stats'), { 
  loading: () => <LoadingSpinner />,
  ssr: true
});

const DynamicFeatures = dynamic(() => import('@/components/Features'), { 
  loading: () => <LoadingSpinner />,
  ssr: true
});

const DynamicServices = dynamic(() => import('@/components/Services'), { 
  loading: () => <LoadingSpinner />,
  ssr: true
});

const DynamicPartners = dynamic(() => import('@/components/Partners'), { 
  loading: () => <LoadingSpinner />,
  ssr: true
});

const DynamicContact = dynamic(() => import('@/components/Contact'), { 
  loading: () => <LoadingSpinner />,
  ssr: true
});

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] overflow-x-hidden">
      <Header />
      <Hero />
      <DynamicStats />
      <Features />
      <Services />
      <Testimonials />
      <DynamicPartners />
      <Contact />
    </main>
  );
}