import { NextResponse } from 'next/server';
import { metrics } from '@/lib/metrics';
import { logger } from '@/lib/logger';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  try {
    // Only allow access from admin users (middleware will handle authentication)
    const format = new URL(request.url).searchParams.get('format');

    if (format === 'prometheus') {
      return new NextResponse(metrics.exportPrometheusMetrics(), {
        headers: {
          'Content-Type': 'text/plain; version=0.0.4'
        }
      });
    }

    return NextResponse.json(metrics.getMetrics());
  } catch (error) {
    logger.error('Error fetching metrics', {
      error: error instanceof Error ? error.message : 'Unknown error'
    });
    return NextResponse.json(
      { message: 'Failed to fetch metrics' },
      { status: 500 }
    );
  }
} 