import React from 'react';
import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | HK COMMUNITIES',
  description: 'Contactez HK COMMUNITIES pour discuter de vos besoins en technologie et solutions digitales.',
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <Contact />
    </div>
  );
} 