'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      try {
        // Replace this with your actual authentication check
        const isAuth = localStorage.getItem('adminToken') !== null;
        setIsAuthenticated(isAuth);
        if (!isAuth) {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isAuthenticated && pathname !== '/admin/login') {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {pathname !== '/admin/login' && (
        <nav className="bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link href="/admin" className="flex items-center text-xl font-bold gradient-text">
                  Admin Dashboard
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <NavLink href="/admin" exact>Dashboard</NavLink>
                <NavLink href="/admin/posts">Posts</NavLink>
                <NavLink href="/admin/services">Services</NavLink>
                <NavLink href="/admin/messages">Messages</NavLink>
                <button
                  onClick={() => {
                    localStorage.removeItem('adminToken');
                    router.push('/admin/login');
                  }}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

function NavLink({ href, children, exact = false }: { href: string; children: React.ReactNode; exact?: boolean }) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive
          ? 'text-white bg-slate-700'
          : 'text-slate-400 hover:text-white hover:bg-slate-700'
      } transition-colors`}
    >
      {children}
    </Link>
  );
} 