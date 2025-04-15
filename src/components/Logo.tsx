'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  withText?: boolean;
  className?: string;
};

export default function Logo({ 
  size = 'md', 
  animated = true, 
  withText = true,
  className = '',
}: LogoProps) {
  const sizes = {
    sm: { width: 32, height: 32, textClass: 'text-lg' },
    md: { width: 40, height: 40, textClass: 'text-xl' },
    lg: { width: 48, height: 48, textClass: 'text-2xl' },
  };

  const { width, height, textClass } = sizes[size];

  const logoVariants = {
    initial: { rotate: 0 },
    hover: animated ? { rotate: 360, transition: { duration: 0.8, ease: "easeInOut" } } : {},
  };

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        variants={logoVariants}
        initial="initial"
        whileHover="hover"
        className="relative"
        style={{ width, height }}
      >
        <svg 
          width={width} 
          height={height} 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" />
          
          {/* HK Letters */}
          <path 
            d="M30 25V75M30 50H50M50 25V75M70 25V75M70 50H90" 
            stroke="white" 
            strokeWidth="8" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#CECECE" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
      
      {withText && (
        <span className={`ml-2 font-bold ${textClass} bg-clip-text text-transparent bg-gradient-to-r from-[#CECECE] to-[#000000]`}>
          deadsec
        </span>
      )}
    </Link>
  );
}