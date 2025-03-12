import { NextRequest, NextResponse } from 'next/server';
import { getAdminUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const user = await getAdminUser(request);

    if (!user) {
      return NextResponse.json({ 
        authenticated: false,
        message: 'Not authenticated' 
      }, { status: 401 });
    }

    return NextResponse.json({ 
      authenticated: true,
      user: {
        id: user.id,
        email: user.email
      }
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({ 
      authenticated: false,
      message: 'Authentication check failed' 
    }, { status: 500 });
  }
}
