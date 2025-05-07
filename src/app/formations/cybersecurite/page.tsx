import { Metadata } from 'next';
import React from 'react';
import CybersecuriteClientContent from './CybersecuriteClientContent'; // Import the new client component

export const metadata: Metadata = {
  title: 'Formation Cybersécurité | deadsec',
  description: 'Apprenez les fondamentaux de la cybersécurité avec notre formation complète.',
};

export default function CybersecuritePage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <CybersecuriteClientContent />
    </div>
  );
}