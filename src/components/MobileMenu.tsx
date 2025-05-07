'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  navigation: Array<{ name: string; href: string }>;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, navigation, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="md:hidden bg-[#000000]/95 backdrop-blur-md"
    >
      <div className="px-4 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === item.href
                ? 'text-[#FFFFFF] bg-[#000000]'
                : 'text-[#CECECE] hover:text-[#FFFFFF] hover:bg-[#000000]'
            }`}
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}