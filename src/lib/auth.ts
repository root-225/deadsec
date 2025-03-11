import { verify, sign } from 'jsonwebtoken';
import { env } from './env';

export interface TokenPayload {
  id: string;
  email: string;
  role: string;
  exp?: number;
  iat?: number;
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  try {
    const decoded = verify(token, env.JWT_SECRET) as TokenPayload;
    
    // Check if token is about to expire (less than 1 hour remaining)
    const expiresIn = decoded.exp ? decoded.exp * 1000 - Date.now() : 0;
    if (expiresIn > 0 && expiresIn < 60 * 60 * 1000) {
      // Generate a new token
      const newToken = generateToken({
        id: decoded.id,
        email: decoded.email,
        role: decoded.role
      });
      
      // Return both the decoded payload and the new token
      return {
        ...decoded,
        newToken
      } as TokenPayload;
    }
    
    return decoded;
  } catch (error) {
    console.error('Token verification error:', error);
    throw new Error('Invalid token');
  }
}

export function generateToken(payload: Omit<TokenPayload, 'exp' | 'iat'>): string {
  return sign(payload, env.JWT_SECRET, { 
    expiresIn: '1d',
    algorithm: 'HS512'
  });
}

export function isTokenExpired(token: string): boolean {
  try {
    const decoded = verify(token, env.JWT_SECRET) as TokenPayload;
    if (!decoded.exp) return true;
    
    // Add 5 minute buffer for clock skew
    return Date.now() >= (decoded.exp * 1000) - (5 * 60 * 1000);
  } catch {
    return true;
  }
}