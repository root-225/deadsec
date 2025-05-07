'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Ebook {
  id: string;
  title: string;
  description: string;
  author: string;
  category: string;
  downloadUrl: string;
}

interface EbookCardProps {
  book: Ebook;
}

export default function EbookCard({ book }: EbookCardProps) {
  return (
    <motion.div
      key={book.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-w-3 aspect-h-4 relative">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          {/* Placeholder for book cover */}
          <span className="text-gray-500 dark:text-gray-400 text-center px-2">{book.title}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{book.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>{book.author}</span>
          <span>{book.category}</span>
        </div>
        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
          onClick={() => window.open(book.downloadUrl, '_blank')}
        >
          Télécharger
        </button>
      </div>
    </motion.div>
  );
}