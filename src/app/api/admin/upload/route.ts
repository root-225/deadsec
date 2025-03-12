import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type' },
        { status: 400 }
      );
    }

    // Create a unique filename
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const ext = file.type.split('/')[1];
    const filename = `${uuidv4()}.${ext}`;

    // Save to public/uploads directory
    const uploadDir = join(process.cwd(), 'public', 'uploads');
    await writeFile(join(uploadDir, filename), buffer);

    // Return the URL for the uploaded file
    return NextResponse.json({
      url: `/uploads/${filename}`,
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
}
