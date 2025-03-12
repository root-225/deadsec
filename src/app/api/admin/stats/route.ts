import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateAdminToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    // Validate admin token from cookie
    const tokenValidation = validateAdminToken(request);
    if (!tokenValidation.isValid) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get the date for last month's comparison
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

    // Fetch current counts
    const [
      totalPosts,
      totalMessages,
      totalUsers,
      lastMonthPosts,
      lastMonthMessages,
      lastMonthUsers,
      pageViews,
      lastMonthPageViews
    ] = await Promise.all([
      // Current counts
      prisma.post.count(),
      prisma.message.count(),
      prisma.user.count(),
      // Last month counts
      prisma.post.count({
        where: {
          createdAt: {
            gte: lastMonth
          }
        }
      }),
      prisma.message.count({
        where: {
          createdAt: {
            gte: lastMonth
          }
        }
      }),
      prisma.user.count({
        where: {
          createdAt: {
            gte: lastMonth
          }
        }
      }),
      // Page views
      prisma.pageView.count(),
      prisma.pageView.count({
        where: {
          timestamp: {
            gte: lastMonth
          }
        }
      })
    ]);

    // Calculate trends (percentage change)
    const calculateTrend = (current: number, lastMonth: number) => {
      if (lastMonth === 0) return current > 0 ? 100 : 0;
      return Math.round(((current - lastMonth) / lastMonth) * 100);
    };

    const stats = {
      totalPosts,
      totalMessages,
      totalUsers,
      totalViews: pageViews,
      trends: {
        posts: calculateTrend(totalPosts, lastMonthPosts),
        messages: calculateTrend(totalMessages, lastMonthMessages),
        users: calculateTrend(totalUsers, lastMonthUsers),
        views: calculateTrend(pageViews, lastMonthPageViews)
      }
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { message: 'Failed to fetch admin stats' },
      { status: 500 }
    );
  }
}