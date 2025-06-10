
import { Metadata } from 'next';
import React from 'react';
import IntelligenceArtificielleClientContent from './IntelligenceArtificielleClientContent';

export const metadata: Metadata = {
  title: 'Formation Intelligence Artificielle | deadsec',
  description: 'Maîtrisez les technologies IA et développez des solutions intelligentes avec notre formation complète.',
};

export default function IntelligenceArtificiellePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <IntelligenceArtificielleClientContent />
    </div>
  );
}
