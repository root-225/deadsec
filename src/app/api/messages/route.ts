import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/messages
export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

// POST /api/messages
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = await prisma.message.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body.subject,
        message: body.message,
        status: body.status || 'new',
      },
    });
    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
  }
}

// PUT /api/messages/:id
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...data } = body;
    const message = await prisma.message.update({
      where: { id: parseInt(id) },
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        status: data.status,
      },
    });
    return NextResponse.json(message);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

// DELETE /api/messages/:id
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }
    await prisma.message.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ message: 'Message deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
} 