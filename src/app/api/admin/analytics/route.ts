
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const range = searchParams.get('range') || '7d';
    
    // Mock analytics data (replace with real analytics service like Google Analytics)
    const mockAnalytics = {
      visitors: {
        today: 89,
        thisWeek: 542,
        thisMonth: 2341,
        total: 15287
      },
      pageViews: {
        today: 234,
        thisWeek: 1456,
        thisMonth: 6789,
        total: 45123
      },
      bounceRate: 42,
      avgSessionDuration: 185, // seconds
      realTimeVisitors: 7,
      topPages: [
        { path: '/', views: 1234, uniqueVisitors: 890 },
        { path: '/formations', views: 987, uniqueVisitors: 654 },
        { path: '/services', views: 765, uniqueVisitors: 543 },
        { path: '/contact', views: 432, uniqueVisitors: 321 },
        { path: '/about', views: 298, uniqueVisitors: 234 }
      ],
      trafficSources: [
        { source: 'Direct', visitors: 543, percentage: 35 },
        { source: 'Google', visitors: 432, percentage: 28 },
        { source: 'Social Media', visitors: 321, percentage: 21 },
        { source: 'Referrals', visitors: 234, percentage: 16 }
      ],
      deviceTypes: [
        { device: 'desktop', visitors: 876, percentage: 56 },
        { device: 'mobile', visitors: 543, percentage: 35 },
        { device: 'tablet', visitors: 134, percentage: 9 }
      ],
      weeklyData: [
        { date: '2024-01-01', visitors: 123, pageViews: 345 },
        { date: '2024-01-02', visitors: 145, pageViews: 387 },
        { date: '2024-01-03', visitors: 167, pageViews: 423 },
        { date: '2024-01-04', visitors: 134, pageViews: 398 },
        { date: '2024-01-05', visitors: 189, pageViews: 456 },
        { date: '2024-01-06', visitors: 201, pageViews: 498 },
        { date: '2024-01-07', visitors: 178, pageViews: 445 }
      ]
    };
    
    return NextResponse.json(mockAnalytics, { status: 200 });
    
  } catch (error) {
    console.error('Analytics API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}
