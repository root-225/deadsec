
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  FaUsers, 
  FaImages, 
  FaGraduationCap, 
  FaChartBar, 
  FaCog, 
  FaUpload,
  FaEye,
  FaCalendarAlt,
  FaDownload,
  FaSignOutAlt
} from 'react-icons/fa';

interface DashboardStats {
  users: { total: number; active: number };
  images: { total: number; size: string };
  registrations: { total: number; pending: number };
  analytics: { visitors: number; pageViews: number };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/dashboard');
      if (!response.ok) throw new Error('Failed to fetch dashboard data');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const dashboardCards = [
    {
      title: 'Image Management',
      description: 'Manage website images and galleries',
      icon: <FaImages className="w-8 h-8" />,
      href: '/admin/images',
      color: 'bg-blue-500',
      stats: stats ? `${stats.images.total} images (${stats.images.size})` : 'Loading...'
    },
    {
      title: 'Formation Registrations',
      description: 'View and manage course registrations',
      icon: <FaGraduationCap className="w-8 h-8" />,
      href: '/admin/registrations',
      color: 'bg-green-500',
      stats: stats ? `${stats.registrations.total} total, ${stats.registrations.pending} pending` : 'Loading...'
    },
    {
      title: 'Analytics',
      description: 'Website performance and visitor metrics',
      icon: <FaChartBar className="w-8 h-8" />,
      href: '/admin/analytics',
      color: 'bg-purple-500',
      stats: stats ? `${stats.analytics.visitors} visitors, ${stats.analytics.pageViews} views` : 'Loading...'
    },
    {
      title: 'User Management',
      description: 'Manage users and permissions',
      icon: <FaUsers className="w-8 h-8" />,
      href: '/admin/users',
      color: 'bg-orange-500',
      stats: stats ? `${stats.users.total} total, ${stats.users.active} active` : 'Loading...'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-400">Welcome back, Administrator</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/settings"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <FaCog className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                <FaSignOutAlt className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardCards.map((card, index) => (
            <Link key={index} href={card.href}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className={`${card.color} p-3 rounded-lg text-white mr-4`}>
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{card.description}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">{card.stats}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/admin/images/upload"
                className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <FaUpload className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-800 dark:text-blue-300 font-medium">Upload Images</span>
              </Link>
              <Link
                href="/admin/registrations?filter=pending"
                className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
              >
                <FaEye className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-green-800 dark:text-green-300 font-medium">Review Registrations</span>
              </Link>
              <Link
                href="/admin/analytics"
                className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
              >
                <FaChartBar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="text-purple-800 dark:text-purple-300 font-medium">View Analytics</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">New formation registration received</span>
                <span className="text-gray-500 dark:text-gray-500 text-sm">2 minutes ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Image uploaded to cybersecurity gallery</span>
                <span className="text-gray-500 dark:text-gray-500 text-sm">1 hour ago</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Analytics report generated</span>
                <span className="text-gray-500 dark:text-gray-500 text-sm">3 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
