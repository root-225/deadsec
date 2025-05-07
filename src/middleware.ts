import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value;
  
  // Redirect to login if no token
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET || 'secret-par-defaut') as { userId: string; isAdmin: boolean };
    
    // Protect admin routes
    if (request.nextUrl.pathname.startsWith('/admin') && !decoded.isAdmin) {
      return NextResponse.redirect(new URL('/', request.url));
    }
    
    return NextResponse.next();
  } catch (error) {
    // Handle invalid/expired token
    const response = NextResponse.redirect(new URL('/login', request.url));
    response.cookies.delete('auth-token');
    return response;
  }
}

export const config = {
  matcher: ['/admin/:path*']
};