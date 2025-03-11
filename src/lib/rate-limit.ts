import { NextResponse } from 'next/server';

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};
const WINDOW_SIZE = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 5;

export function rateLimit(ip: string) {
  const now = Date.now();
  const record = store[ip];

  if (!record) {
    store[ip] = {
      count: 1,
      resetTime: now + WINDOW_SIZE,
    };
    return { blocked: false };
  }

  if (now > record.resetTime) {
    store[ip] = {
      count: 1,
      resetTime: now + WINDOW_SIZE,
    };
    return { blocked: false };
  }

  record.count += 1;
  
  if (record.count > MAX_ATTEMPTS) {
    const timeLeft = Math.ceil((record.resetTime - now) / 1000 / 60);
    return {
      blocked: true,
      message: `Too many attempts. Please try again in ${timeLeft} minutes.`,
    };
  }

  return { blocked: false };
} 