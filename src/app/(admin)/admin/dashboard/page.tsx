'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from '@/components/LoadingSpinner';
import DashboardChart from '@/components/DashboardCharts';

interface DashboardStats {
  totalPosts: number;
  totalUsers: number;
  totalServices: number;
  totalMessages: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Check if token exists
        const token = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1];

        if (!token) {
          router.push('/admin/login');
          return;
        }

        // Fetch dashboard data
        await fetchDashboardData();
      } catch (err) {
        console.error('Authentication error:', err);
        router.push('/admin/login');
      }
    };

    checkAuth();
  }, [router]);

  const fetchDashboardData = async () => {
    try {
      const response = await fetch('/api/admin/stats', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }

      const data = await response.json();
      setStats(data);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    // Clear token cookie
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  // Simulated chart data - in a real app, this would come from the API
  const visitorData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    values: [120, 145, 132, 187, 209, 187, 142],
  };

  const referrerData = {
    labels: ['Google', 'Direct', 'Facebook', 'Twitter', 'LinkedIn'],
    values: [325, 284, 147, 94, 82],
    colors: [
      'rgba(59, 130, 246, 0.6)', // blue
      'rgba(16, 185, 129, 0.6)', // green
      'rgba(245, 158, 11, 0.6)', // yellow
      'rgba(239, 68, 68, 0.6)',  // red
      'rgba(139, 92, 246, 0.6)',  // purple
    ]
  };

  const platformData = {
    labels: ['Desktop', 'Mobile', 'Tablet'],
    values: [58, 35, 7],
    colors: [
      'rgba(59, 130, 246, 0.7)',
      'rgba(245, 158, 11, 0.7)',
      'rgba(16, 185, 129, 0.7)',
    ]
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" className="text-blue-500" />
          <p className="mt-4 text-slate-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-red-400 mb-2">Error</h2>
            <p className="text-slate-400 mb-4">{error}</p>
            <button
              onClick={() => fetchDashboardData()}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
            <h3 className="text-lg font-medium text-slate-400">Total Posts</h3>
            <p className="text-3xl font-bold mt-2">{stats?.totalPosts}</p>
            <div className="h-1 w-full bg-blue-500 mt-4"></div>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
            <h3 className="text-lg font-medium text-slate-400">Total Users</h3>
            <p className="text-3xl font-bold mt-2">{stats?.totalUsers}</p>
            <div className="h-1 w-full bg-green-500 mt-4"></div>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
            <h3 className="text-lg font-medium text-slate-400">Total Services</h3>
            <p className="text-3xl font-bold mt-2">{stats?.totalServices}</p>
            <div className="h-1 w-full bg-yellow-500 mt-4"></div>
          </div>
          
          <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
            <h3 className="text-lg font-medium text-slate-400">Messages</h3>
            <p className="text-3xl font-bold mt-2">{stats?.totalMessages}</p>
            <div className="h-1 w-full bg-purple-500 mt-4"></div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700">
            <DashboardChart 
              data={visitorData} 
              title="Visitor Activity (Last 7 days)" 
              type="line" 
            />
          </div>
          
          <div className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700">
            <DashboardChart 
              data={referrerData} 
              title="Top Referrers" 
              type="bar" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700 lg:col-span-2">
            <DashboardChart 
              data={visitorData} 
              title="Weekly Performance" 
              type="bar" 
            />
          </div>
          
          <div className="bg-slate-800/50 rounded-lg shadow-lg border border-slate-700">
            <DashboardChart 
              data={platformData} 
              title="User Platforms" 
              type="pie" 
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700 mb-8">
          <h3 className="text-xl font-medium mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={() => router.push('/admin/posts/new')}
              className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg text-white flex flex-col items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              New Post
            </button>
            
            <button
              onClick={() => router.push('/admin/users')}
              className="bg-green-600 hover:bg-green-700 p-4 rounded-lg text-white flex flex-col items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Manage Users
            </button>
            
            <button
              onClick={() => router.push('/admin/messages')}
              className="bg-yellow-600 hover:bg-yellow-700 p-4 rounded-lg text-white flex flex-col items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View Messages
            </button>
            
            <button
              onClick={() => router.push('/admin/settings')}
              className="bg-purple-600 hover:bg-purple-700 p-4 rounded-lg text-white flex flex-col items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-slate-800/50 p-6 rounded-lg shadow-lg border border-slate-700">
          <h3 className="text-xl font-medium mb-4">Recent Activity</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-slate-800/30 rounded-lg overflow-hidden">
              <thead className="bg-slate-700/50">
                <tr>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Date</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Activity</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">User</th>
                  <th className="py-3 px-4 text-left text-sm font-medium text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                <tr>
                  <td className="py-3 px-4 text-sm text-slate-300">Today, 10:30 AM</td>
                  <td className="py-3 px-4 text-sm text-slate-300">New post created</td>
                  <td className="py-3 px-4 text-sm text-slate-300">Admin</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400">Completed</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-slate-300">Today, 9:15 AM</td>
                  <td className="py-3 px-4 text-sm text-slate-300">User account updated</td>
                  <td className="py-3 px-4 text-sm text-slate-300">Admin</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400">Completed</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-slate-300">Yesterday, 3:45 PM</td>
                  <td className="py-3 px-4 text-sm text-slate-300">Contact form message</td>
                  <td className="py-3 px-4 text-sm text-slate-300">visitor@example.com</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded bg-yellow-500/20 text-yellow-400">Pending</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-slate-300">Yesterday, 2:30 PM</td>
                  <td className="py-3 px-4 text-sm text-slate-300">Service updated</td>
                  <td className="py-3 px-4 text-sm text-slate-300">Admin</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded bg-green-500/20 text-green-400">Completed</span></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-sm text-slate-300">Yesterday, 11:20 AM</td>
                  <td className="py-3 px-4 text-sm text-slate-300">User registered</td>
                  <td className="py-3 px-4 text-sm text-slate-300">newuser@example.com</td>
                  <td className="py-3 px-4"><span className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-400">Processing</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}