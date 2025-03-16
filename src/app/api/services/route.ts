import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Mock service data
const mockServices = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: "code",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
    status: "active",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    icon: "smartphone",
    features: ["iOS & Android", "User-friendly UI/UX", "Push Notifications"],
    status: "active",
    createdAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies",
    icon: "trending_up",
    features: ["Social Media Management", "SEO/SEM", "Content Marketing"],
    status: "active",
    createdAt: new Date().toISOString()
  }
];

// GET /api/services
export async function GET() {
  try {
    return NextResponse.json(mockServices);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

// POST /api/services - Mock implementation
export async function POST(request: Request) {
  try {
    const body = await request.json();
    // In a real app, this would save to a database
    const newService = {
      id: mockServices.length + 1,
      title: body.title,
      description: body.description,
      icon: body.icon,
      features: body.features,
      status: body.status || "active",
      createdAt: new Date().toISOString()
    };
    
    return NextResponse.json(newService);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

// These routes are no longer needed without a database, but kept as mock implementations
// for compatibility with any existing code

// PUT /api/services/:id
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ 
      ...body, 
      updatedAt: new Date().toISOString() 
    });
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
    
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
} 