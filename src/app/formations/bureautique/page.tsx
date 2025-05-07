import React from 'react';
import { Metadata } from 'next';
import { FaKeyboard } from 'react-icons/fa'; // Import icons
import BureautiqueClientContent from './BureautiqueClientContent';

export const metadata: Metadata = {
  title: 'Formation Bureautique | deadsec',
  description: 'Maîtrisez les outils bureautiques essentiels avec notre formation pratique.',
};

export default function BureautiquePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <FaKeyboard className="w-16 h-16 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Formation Bureautique
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Optimisez votre productivité et maîtrisez les outils bureautiques essentiels avec notre formation pratique.
          </p>
        </div>
      </section>

      <BureautiqueClientContent />
    </div>
  );
}