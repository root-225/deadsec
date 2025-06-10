
"use client";

import { useState, useEffect } from 'react';
import { 
  FaEye, 
  FaUsers, 
  FaMousePointer, 
  FaClock,
  FaDownload,
  FaCalendarAlt,
  FaGlobe,
  FaMobile,
  FaDesktop,
  FaChartLine
} from 'react-icons/fa';

interface AnalyticsData {
  visitors: {
    today: number;
    thisWeek: number;
    thisMonth: number;
    total: number;
  };
  pageViews: {
    today: number;
    thisWeek: number;
    thisMonth: number;
    total: number;
  };
  bounceRate: number;
  avgSessionDuration: number;
  topPages: Array<{ path: string; views: number; uniqueVisitors: number }>;
  trafficSources: Array<{ source: string; visitors: number; percentage: number }>;
  deviceTypes: Array<{ device: string; visitors: number; percentage: number }>;
  realTimeVisitors: number;
  weeklyData: Array<{ date: string; visitors: number; pageViews: number }>;
}

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [dateRange, setDateRange] = useState('7d');
  const [refreshInterval, setRefreshInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetchAnalytics();
    
    // Set up real-time updates every 30 seconds
    const interval = setInterval(fetchAnalytics, 30000);
    setRefreshInterval(interval);
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [dateRange]);

  const fetchAnalytics = async () => {
    try {
      const response = await fetch(`/api/admin/analytics?range=${dateRange}`);
      if (!response.ok) throw new Error('Failed to fetch analytics');
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportReport = async () => {
    try {
      const response = await fetch(`/api/admin/analytics/export?range=${dateRange}`);
      if (!response.ok) throw new Error('Failed to export report');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `analytics-report-${new Date().toISOString().split('T')[0]}.pdf`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting report:', error);
    }
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const StatCard = ({ 
    title, 
    value, 
    change, 
    icon, 
    color 
  }: { 
    title: string; 
    value: string | number; 
    change?: string; 
    icon: React.ReactNode; 
    color: string; 
  }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value.toLocaleString()}</p>
          {change && (
            <p className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
              {change} from last period
            </p>
          )}
        </div>
        <div className={`${color} p-3 rounded-lg text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Website Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400">Monitor your website performance and visitor insights</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="1d">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
            
            <button
              onClick={exportReport}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaDownload className="w-4 h-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Real-time Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Real-time</span>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {analytics?.realTimeVisitors || 0}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">visitors online now</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Visitors"
            value={analytics?.visitors.total || 0}
            change="+12%"
            icon={<FaUsers className="w-6 h-6" />}
            color="bg-blue-500"
          />
          <StatCard
            title="Page Views"
            value={analytics?.pageViews.total || 0}
            change="+8%"
            icon={<FaEye className="w-6 h-6" />}
            color="bg-green-500"
          />
          <StatCard
            title="Bounce Rate"
            value={`${analytics?.bounceRate || 0}%`}
            change="-2%"
            icon={<FaMousePointer className="w-6 h-6" />}
            color="bg-orange-500"
          />
          <StatCard
            title="Avg. Session"
            value={formatDuration(analytics?.avgSessionDuration || 0)}
            change="+15s"
            icon={<FaClock className="w-6 h-6" />}
            color="bg-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Pages */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Top Pages</h2>
            <div className="space-y-4">
              {analytics?.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {page.path}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {page.uniqueVisitors} unique visitors
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {page.views.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">views</p>
                  </div>
                </div>
              )) || (
                <p className="text-gray-500 dark:text-gray-400">No data available</p>
              )}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h2>
            <div className="space-y-4">
              {analytics?.trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FaGlobe className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {source.source}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {source.percentage}%
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      {source.visitors}
                    </span>
                  </div>
                </div>
              )) || (
                <p className="text-gray-500 dark:text-gray-400">No data available</p>
              )}
            </div>
          </div>
        </div>

        {/* Device Types */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Device Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analytics?.deviceTypes.map((device, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  {device.device === 'desktop' && <FaDesktop className="w-8 h-8 text-blue-500" />}
                  {device.device === 'mobile' && <FaMobile className="w-8 h-8 text-green-500" />}
                  {device.device === 'tablet' && <FaDesktop className="w-8 h-8 text-orange-500" />}
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white capitalize">
                  {device.device}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {device.percentage}%
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {device.visitors} visitors
                </p>
              </div>
            )) || (
              <p className="text-gray-500 dark:text-gray-400 col-span-3 text-center">No data available</p>
            )}
          </div>
        </div>

        {/* Weekly Trend Chart Placeholder */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Weekly Trends</h2>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg">
            <div className="text-center">
              <FaChartLine className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">Chart visualization would go here</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Integrate with charting library like Chart.js or Recharts
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
