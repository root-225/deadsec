'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaUser, FaLock } from 'react-icons/fa';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Important for cookie handling
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Login successful');
        router.replace('/admin/dashboard');
      } else {
        setError(data.message || 'Login failed');
        toast.error(data.message || 'Login failed');
      }
    } catch (err) {
      const errorMessage = 'An error occurred. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-lg blur-xl"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        
        {/* Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-slate-800/50 p-8 rounded-lg border border-slate-700 backdrop-blur-sm shadow-xl"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Admin Login
              </h2>
              <div className="w-24 h-1 mx-auto mt-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-slate-400"
            >
              Sign in to access the admin dashboard
            </motion.p>
          </div>

          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit} 
            className="mt-8 space-y-6"
          >
            {error && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
              >
                <p className="text-sm text-red-400">{error}</p>
              </motion.div>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                  Email
                </label>
                <div className="mt-1 relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-slate-500 group-focus-within:text-cyan-500 transition-colors" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                    placeholder="admin@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-slate-300">
                  Password
                </label>
                <div className="mt-1 relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-slate-500 group-focus-within:text-cyan-500 transition-colors" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full pl-10 rounded-lg bg-slate-900/50 border border-slate-700 text-slate-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? (
                <LoadingSpinner 
                  size="sm" 
                  containerClassName="h-5" 
                  className="text-white" 
                />
              ) : (
                'Sign in'
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}