
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const imagesDir = path.join(process.cwd(), 'public');
    
    // Mock image data (replace with actual file system scanning)
    const mockImages = [
      {
        id: '1',
        name: 'cloud-solutions.jpg',
        path: '/services/cloud-solutions.jpg',
        size: 245760,
        category: 'services',
        uploadDate: new Date().toISOString(),
        dimensions: { width: 1200, height: 800 },
        metadata: {
          alt: 'Cloud Solutions',
          title: 'Cloud Computing Services',
          tags: ['cloud', 'technology', 'servers']
        }
      },
      {
        id: '2',
        name: 'ai-ml.jpg',
        path: '/services/ai-ml.jpg',
        size: 198432,
        category: 'services',
        uploadDate: new Date().toISOString(),
        dimensions: { width: 1200, height: 800 },
        metadata: {
          alt: 'AI & Machine Learning',
          title: 'Artificial Intelligence Services',
          tags: ['ai', 'machine learning', 'technology']
        }
      },
      {
        id: '3',
        name: 'cybersecurity.jpg',
        path: '/services/cybersecurity.jpg',
        size: 312876,
        category: 'services',
        uploadDate: new Date().toISOString(),
        dimensions: { width: 1200, height: 800 },
        metadata: {
          alt: 'Cybersecurity',
          title: 'Security Solutions',
          tags: ['security', 'protection', 'cyber']
        }
      }
    ];
    
    return NextResponse.json({
      success: true,
      images: mockImages
    }, { status: 200 });
    
  } catch (error) {
    console.error('Images API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}
