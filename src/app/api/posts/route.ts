import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/posts
export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

// POST /api/posts
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const post = await prisma.post.create({
      data: {
        title: body.title,
        slug: body.slug,
        content: body.content,
        status: body.status,
        author: body.author,
        tags: body.tags.split(',').map((tag: string) => tag.trim()),
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}

// PUT /api/posts/:id
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...data } = body;
    const post = await prisma.post.update({
      where: { id: parseInt(id) },
      data: {
        title: data.title,
        slug: data.slug,
        content: data.content,
        status: data.status,
        author: data.author,
        tags: data.tags.split(',').map((tag: string) => tag.trim()),
      },
    });
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
  }
}

// DELETE /api/posts/:id
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Post ID is required' }, { status: 400 });
    }
    await prisma.post.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
  }
} 