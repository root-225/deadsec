'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHome, FaNewspaper, FaUsers, FaPalette, 
  FaChartBar, FaCog, FaGlobe, FaBars, FaTimes,
  FaSignOutAlt, FaMoon, FaSun
} from 'react-icons/fa';
import clsx from 'clsx';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  labelFr?: string;
}

const navItems: NavItem[] = [
  { 
    label: 'Overview', 
    labelFr: 'Aperçu',
    href: '/admin/dashboard', 
    icon: <FaHome className="w-5 h-5" /> 
  },
  { 
    label: 'Posts', 
    labelFr: 'Articles',
    href: '/admin/posts', 
    icon: <FaNewspaper className="w-5 h-5" /> 
  },
  { 
    label: 'Users', 
    labelFr: 'Utilisateurs',
    href: '/admin/users', 
    icon: <FaUsers className="w-5 h-5" /> 
  },
  { 
    label: 'Appearance', 
    labelFr: 'Apparence',
    href: '/admin/appearance', 
    icon: <FaPalette className="w-5 h-5" /> 
  },
  { 
    label: 'Analytics', 
    labelFr: 'Analytique',
    href: '/admin/analytics', 
    icon: <FaChartBar className="w-5 h-5" /> 
  },
  { 
    label: 'Settings', 
    labelFr: 'Paramètres',
    href: '/admin/settings', 
    icon: <FaCog className="w-5 h-5" /> 
  }
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');
  const pathname = usePathname();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
      if (res.ok) {
        window.location.href = '/admin/login';
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <div className={clsx(
      'min-h-screen bg-slate-900 text-slate-200',
      'transition-colors duration-200'
    )}>
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={clsx(
        'fixed top-0 left-0 h-full w-64 bg-slate-800 border-r border-slate-700',
        'transform transition-transform duration-200 ease-in-out z-40',
        'lg:translate-x-0',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Admin Panel
            </h1>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-150',
                  'hover:bg-slate-700/50',
                  pathname === item.href
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-slate-300 hover:text-white'
                )}
              >
                <span className="mr-3">{item.icon}</span>
                {language === 'en' ? item.label : item.labelFr}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700 space-y-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center w-full px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
          >
            <FaGlobe className="w-5 h-5 mr-3" />
            {language === 'en' ? 'Français' : 'English'}
          </button>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center w-full px-4 py-2 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
          >
            {isDarkMode ? (
              <>
                <FaSun className="w-5 h-5 mr-3" />
                {language === 'en' ? 'Light Mode' : 'Mode Clair'}
              </>
            ) : (
              <>
                <FaMoon className="w-5 h-5 mr-3" />
                {language === 'en' ? 'Dark Mode' : 'Mode Sombre'}
              </>
            )}
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <FaSignOutAlt className="w-5 h-5 mr-3" />
            {language === 'en' ? 'Logout' : 'Déconnexion'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={clsx(
        'transition-all duration-200 ease-in-out',
        isSidebarOpen ? 'lg:ml-64' : 'ml-0'
      )}>
        <main className="min-h-screen p-4 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
