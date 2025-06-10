'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

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
        <Image
          src="/images/general/Deadsec_logo.png"
          alt="deadsec logo"
          width={width}
          height={height}
          className="object-contain"
          priority
        />
      </motion.div>
      
      {withText && (
        <span className={`ml-2 font-bold ${textClass} bg-clip-text text-transparent bg-gradient-to-r from-[#CECECE] to-[#000000]`}>
          deadsec
        </span>
      )}
    </Link>
  );
}