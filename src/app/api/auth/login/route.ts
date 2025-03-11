import { NextRequest, NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import { logger } from '@/lib/logger';
import { env } from '@/lib/env';

export const runtime = 'nodejs';

// Mock admin user for demonstration
const mockAdmin = {
  id: '1',
  email: 'admin@example.com',
  password: 'password123', // In production, this would be hashed
  role: 'admin'
};

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const clientIp = request.ip || request.headers.get('x-forwarded-for') || 'unknown';

    logger.info('Login attempt', {
      ip: clientIp,
      userAgent: request.headers.get('user-agent')
    });

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // In production, you would verify against a database
    if (email === mockAdmin.email && password === mockAdmin.password) {
      // Create JWT token
      const token = sign(
        {
          id: mockAdmin.id,
          email: mockAdmin.email,
          role: mockAdmin.role
        },
        env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      // Create response with token cookie
      const response = NextResponse.json(
        { success: true },
        { status: 200 }
      );

      // Set secure cookie with token
      response.cookies.set({
        name: 'token',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 // 24 hours
      });

      logger.info('Login successful', {
        userId: mockAdmin.id,
        ip: clientIp
      });

      return response;
    }

    logger.warn('Login failed: Invalid credentials', {
      ip: clientIp,
      email
    });

    return NextResponse.json(
      { error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    logger.error('Login error', {
      error: error instanceof Error ? error.message : 'Unknown error'
    });

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 