import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function validateAdminToken(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;

  if (!token) {
    return { isValid: false, error: 'No token provided' };
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET!);
    return { isValid: true, decoded };
  } catch (error) {
    return { isValid: false, error: 'Invalid token' };
  }
}

export async function getAdminUser(request: NextRequest) {
  const tokenValidation = validateAdminToken(request);
  
  if (!tokenValidation.isValid) {
    return null;
  }

  // In a real-world scenario, you might fetch the user from the database here
  return {
    id: (tokenValidation.decoded as any).id,
    email: (tokenValidation.decoded as any).email
  };
}