import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' }, 
        { status: 400 }
      );
    }

    // Find admin user
    const admin = await prisma.admin.findUnique({
      where: { email: email }
    });

    // Check if admin exists and password is correct
    if (!admin || !(await compare(password, admin.passwordHash))) {
      return NextResponse.json(
        { message: 'Invalid credentials' }, 
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = sign(
      { 
        id: admin.id, 
        email: admin.email 
      }, 
      process.env.JWT_SECRET!, 
      { expiresIn: '1h' }
    );

    // Create response with token in HTTP-only cookie
    const response = NextResponse.json({ 
      message: 'Login successful',
      user: { 
        id: admin.id, 
        email: admin.email 
      }
    });

    // Set secure, HTTP-only cookie
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600 // 1 hour
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Internal server error' }, 
      { status: 500 }
    );
  }
}