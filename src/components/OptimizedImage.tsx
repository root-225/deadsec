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
}

export default function OptimizedImage({ src, alt, fill = false, className = '', priority = false }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`relative ${fill ? 'w-full h-full' : ''} overflow-hidden`}>
      {/* Loading Skeleton */}
      <AnimatePresence>
        {isLoading && !error && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-slate-800 animate-pulse"
          />
        )}
      </AnimatePresence>

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <div className="text-slate-400 text-sm">Failed to load image</div>
        </div>
      )}

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
      />
    </div>
  );
}
