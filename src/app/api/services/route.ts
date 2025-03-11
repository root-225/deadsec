import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/services
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

// POST /api/services
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const service = await prisma.service.create({
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        features: body.features,
        status: body.status,
      },
    });
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

// PUT /api/services/:id
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, ...data } = body;
    const service = await prisma.service.update({
      where: { id: parseInt(id) },
      data: {
        title: data.title,
        description: data.description,
        icon: data.icon,
        features: data.features,
        status: data.status,
      },
    });
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

// DELETE /api/services/:id
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Service ID is required' }, { status: 400 });
    }
    await prisma.service.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
} 