import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export const runtime = 'nodejs'; // Force Node.js runtime

export async function GET(request: Request) {
  try {
    // Get the token from the Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { message: 'Missing or invalid authorization header' },
        { status: 401 }
      );
    }

    const token = authHeader.split(' ')[1];
    
    // Verify the token and check admin role
    const payload = await verifyToken(token);
    if (payload.role !== 'admin') {
      return NextResponse.json(
        { message: 'Unauthorized - Admin access required' },
        { status: 403 }
      );
    }

    // TODO: Replace with actual database queries
    const stats = {
      totalPosts: 12,
      totalServices: 8,
      totalMessages: 24,
      totalUsers: 150
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