import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { validateAdminToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    // Validate admin token from cookie
    const tokenValidation = validateAdminToken(request);
    if (!tokenValidation.isValid) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Fetch recent posts with authors
    const recentPosts = await prisma.post.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        title: true,
        titleFr: true,
        createdAt: true,
        author: {
          select: {
            name: true,
            image: true
          }
        }
      }
    });

    // Fetch recent messages
    const recentMessages = await prisma.message.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc'
      },
      select: {
        id: true,
        name: true,
        email: true,
        message: true,
        createdAt: true
      }
    });

    // Combine and format activities
    const activities = [
      ...recentPosts.map(post => ({
        id: post.id,
        type: 'post' as const,
        title: post.title,
        titleFr: post.titleFr || post.title,
        description: `New blog post created`,
        descriptionFr: `Nouvel article de blog créé`,
        timestamp: post.createdAt,
        user: post.author ? {
          name: post.author.name,
          avatar: post.author.image
        } : undefined
      })),
      ...recentMessages.map(msg => ({
        id: msg.id,
        type: 'message' as const,
        title: `Message from ${msg.name}`,
        titleFr: `Message de ${msg.name}`,
        description: msg.message.substring(0, 100) + (msg.message.length > 100 ? '...' : ''),
        descriptionFr: msg.message.substring(0, 100) + (msg.message.length > 100 ? '...' : ''),
        timestamp: msg.createdAt
      }))
    ].sort((a, b) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    ).slice(0, 10);

    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activity feed:', error);
    return NextResponse.json(
      { message: 'Failed to fetch activity feed' },
      { status: 500 }
    );
  }
}
