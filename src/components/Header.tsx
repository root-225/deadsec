'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/lib/ThemeContext';
import Logo from './Logo';
import MobileNavLink from './MobileNavLink';
import MobileMenu from './MobileMenu';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center justify-center h-8 w-8 rounded-md text-[#CECECE] hover:text-[#FFFFFF] transition-colors focus:outline-none"
      aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === 'dark' ? (
        <FaSun className="h-5 w-5" />
      ) : (
        <FaMoon className="h-5 w-5" />
      )}
    </button>
  );
};

const MobileMenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => {
  return (
    <button
      className="p-2 rounded-md text-[#CECECE] hover:text-[#FFFFFF] hover:bg-[#000000]"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {isOpen ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        )}
      </svg>
    </button>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services-list' },
    
    { name: 'Formations', href: '/formations' }, // Ajout du lien Formations
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#000000]/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo animated={false} size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[#FFFFFF]'
                    : 'text-[#CECECE] hover:text-[#FFFFFF]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <ThemeToggleButton />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggleButton />
            <MobileMenuButton 
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            navigation={navigation}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}