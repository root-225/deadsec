import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateAdminToken } from '@/lib/auth';

export function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginRoute = request.nextUrl.pathname === '/admin/login';

  if (isAdminRoute) {
    const tokenValidation = validateAdminToken(request);

    // If on login page and already authenticated, redirect to dashboard
    if (isLoginRoute && tokenValidation.isValid) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    // If not on login page and not authenticated, redirect to login
    if (!isLoginRoute && !tokenValidation.isValid) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
}