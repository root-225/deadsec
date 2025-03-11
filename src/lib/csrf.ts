import { NextResponse } from 'next/server';
import { env } from './env';
import { createHash, randomBytes } from 'crypto';

const CSRF_SALT = env.JWT_SECRET; // Using JWT_SECRET as salt for CSRF token
const CSRF_COOKIE = 'csrf';
const CSRF_HEADER = 'x-csrf-token';

export function generateToken(): string {
  const random = randomBytes(32).toString('hex');
  const timestamp = Date.now().toString();
  const hash = createHash('sha256')
    .update(random + timestamp + CSRF_SALT)
    .digest('hex');
  
  return `${timestamp}.${hash}`;
}

export function validateToken(token: string | null, cookieToken: string | null): boolean {
  if (!token || !cookieToken || token !== cookieToken) {
    return false;
  }

  try {
    const [timestamp] = token.split('.');
    const age = Date.now() - parseInt(timestamp, 10);
    
    // Token expires after 4 hours
    return age < 4 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

export function setCsrfCookie(response: NextResponse): string {
  const token = generateToken();
  
  response.cookies.set({
    name: CSRF_COOKIE,
    value: token,
    httpOnly: true,
    secure: env.IS_PRODUCTION,
    sameSite: 'strict',
    path: '/',
    maxAge: 4 * 60 * 60 // 4 hours
  });

  return token;
}

export function validateCsrfToken(request: Request): boolean {
  const token = request.headers.get(CSRF_HEADER);
  const cookie = request.headers.get('cookie');
  if (!cookie) return false;

  const cookieToken = cookie
    .split(';')
    .map(c => c.trim())
    .find(c => c.startsWith(`${CSRF_COOKIE}=`))
    ?.split('=')[1];

  return validateToken(token, cookieToken);
} 