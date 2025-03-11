import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { logger } from '@/lib/logger';

export const runtime = 'nodejs';

// Define public routes that don't require authentication
const publicPaths = new Set([
  '/admin/login',
  '/_next',
  '/api/auth/login',
  '/api/auth/logout',
  '/favicon.ico',
]);

// Cache verification results
const tokenCache = new Map<string, { decoded: any; expires: number }>();

export async function middleware(request: NextRequest) {
  const requestPath = request.nextUrl.pathname;
  const requestId = crypto.randomUUID();

  // Quick check for public paths using Set for O(1) lookup
  if (publicPaths.has(requestPath) || 
      requestPath.startsWith('/_next/') || 
      requestPath.startsWith('/api/auth/')) {
    return NextResponse.next();
  }

  // Add request ID to headers for tracing
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-request-id', requestId);

  // Get the token from cookies
  const token = request.cookies.get('token')?.value;

  if (!token) {
    logger.warn('Missing authentication token', {
      requestId,
      ip: request.ip,
      path: requestPath,
    });

    // Redirect to login for non-API routes
    if (!requestPath.startsWith('/api')) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    return NextResponse.json(
      { error: 'Authentication required' },
      { status: 401, headers: requestHeaders }
    );
  }

  try {
    // Check cache first
    const now = Date.now();
    const cached = tokenCache.get(token);
    let decoded;

    if (cached && cached.expires > now) {
      decoded = cached.decoded;
    } else {
      // Verify and cache the token
      decoded = await verifyToken(token);
      tokenCache.set(token, {
        decoded,
        expires: now + 5 * 60 * 1000, // Cache for 5 minutes
      });

      // Clean up expired cache entries
      for (const [key, value] of tokenCache.entries()) {
        if (value.expires <= now) {
          tokenCache.delete(key);
        }
      }
    }
    
    // Add user context to headers
    requestHeaders.set('x-user-id', decoded.id);
    requestHeaders.set('x-user-role', decoded.role);

    // Add security headers
    const securityHeaders = {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
    };

    Object.entries(securityHeaders).forEach(([key, value]) => {
      requestHeaders.set(key, value);
    });

    return NextResponse.next({
      headers: requestHeaders,
    });
  } catch (error) {
    // Clear from cache if invalid
    tokenCache.delete(token);

    logger.error('Authentication error', {
      requestId,
      error: 'Invalid token',
      ip: request.ip,
      path: requestPath,
    });

    // Clear the invalid token
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    response.cookies.delete('token');

    return response;
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
  ],
}; 