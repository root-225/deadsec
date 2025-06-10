
'use client';

import { useEffect } from 'react';

export default function MaterialIcons() {
  useEffect(() => {
    // Only add the Material Icons link on the client side
    if (typeof window !== 'undefined') {
      const existingLink = document.querySelector('link[href*="material+icons"]');
      if (!existingLink) {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    }
  }, []);

  return null;
}
