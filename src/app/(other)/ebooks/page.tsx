import React from 'react';
import { Metadata } from 'next';
import { ebooks } from '@/config/ebooks';
import EbookCard from '@/components/EbookCard'; // Import the new component

export const metadata: Metadata = {
  title: 'Ebooks | deadsec',
  description: 'Découvrez notre collection d\'ebooks sur la technologie, la cybersécurité et le développement web.',
};

export default function EbooksPage() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Nos Ebooks</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Ressources gratuites pour approfondir vos connaissances en technologie
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ebooks.map((book) => (
          <EbookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}