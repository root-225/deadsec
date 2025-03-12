import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateAdminToken } from '@/lib/auth';

export function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginRoute = request.nextUrl.pathname === '/login';

  if (isAdminRoute) {
    const tokenValidation = validateAdminToken(request);

    // If no token or invalid token, redirect to login
    if (!tokenValidation.isValid) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
  }

  // If trying to access login page while already authenticated, redirect to admin dashboard
  if (isLoginRoute) {
    const tokenValidation = validateAdminToken(request);

    if (tokenValidation.isValid) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login']
}