'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  fill = false, 
  className = '', 
  priority = false,
  width,
  height
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} overflow-hidden`}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loading"
            className="absolute inset-0 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}

        {error && (
          <motion.div
            key="error"
            className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/20 backdrop-blur-sm z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-12 h-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-white text-sm">Failed to load image</p>
          </motion.div>
        )}
      </AnimatePresence>

      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill && width ? width : undefined}
        height={!fill && height ? height : undefined}
        className={`${className} ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'} transition-all duration-500`}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
      />
    </div>
  );
}
