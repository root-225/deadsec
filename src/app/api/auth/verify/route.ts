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
    
    // Verify the token
    const payload = await verifyToken(token);
    
    // Check if the user has admin role
    if (payload.role !== 'admin') {
      return NextResponse.json(
        { message: 'Unauthorized - Admin access required' },
        { status: 403 }
      );
    }

    // Token is valid and user is admin
    return NextResponse.json({
      message: 'Token is valid',
      user: {
        id: payload.id,
        email: payload.email,
        role: payload.role
      }
    });

  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { message: 'Invalid or expired token' },
      { status: 401 }
    );
  }
} 