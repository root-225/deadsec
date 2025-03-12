'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

// Define types for posts and messages
interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

interface ActivityItem {
  type: 'post' | 'message';
  id: string;
  title?: string;
  name?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<{
    totalPosts: number;
    totalMessages: number;
    recentActivity: ActivityItem[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Verify admin authentication
        const meResponse = await fetch('/api/admin/me');
        if (!meResponse.ok) {
          router.push('/login');
          return;
        }

        // Fetch posts and messages
        const [postsResponse, messagesResponse] = await Promise.all([
          fetch('/api/admin/posts'),
          fetch('/api/messages')
        ]);

        const postsData: Post[] = await postsResponse.json();
        const messagesData: Message[] = await messagesResponse.json();

        setStats({
          totalPosts: postsData.length,
          totalMessages: messagesData.length,
          recentActivity: [
            ...postsData.slice(0, 3).map(post => ({
              type: 'post' as const,
              id: post.id,
              title: post.title,
              createdAt: post.createdAt
            })),
            ...messagesData.slice(0, 3).map(message => ({
              type: 'message' as const,
              id: message.id,
              name: message.name,
              createdAt: message.createdAt
            }))
          ]
        });
        setLoading(false);
      } catch (error) {
        toast.error('Failed to load dashboard data');
        console.error('Dashboard data fetch error:', error);
        router.push('/login');
      }
    };

    fetchDashboardData();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' });
      if (response.ok) {
        router.push('/login');
      } else {
        toast.error('Logout failed');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
      console.error('Logout error:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          Admin Dashboard
        </motion.h1>
        <button 
          onClick={handleLogout}
          className="btn btn-secondary"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Total Posts</h2>
          <p className="text-4xl font-bold text-blue-600">{stats?.totalPosts}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Total Messages</h2>
          <p className="text-4xl font-bold text-green-600">{stats?.totalMessages}</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul>
            {stats?.recentActivity.map((item) => (
              <li 
                key={item.id} 
                className="mb-2 pb-2 border-b last:border-b-0 flex justify-between items-center"
              >
                <span className="truncate">
                  {item.type === 'post' ? item.title : item.name}
                </span>
                <span className="text-sm text-gray-500">
                  {item.type === 'post' ? 'Post' : 'Message'}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}