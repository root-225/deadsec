import { NextResponse } from 'next/server';
import dbConnect from '@/config/mongodb';
import ContactSubmission from '@/models/ContactSubmission';
import User from '@/models/User';

export const runtime = 'nodejs';

// GET /api/admin
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const collection = searchParams.get('collection') || 'contacts';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    await dbConnect();

    let data;
    let total;

    if (collection === 'contacts') {
      data = await ContactSubmission.find({})
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
      total = await ContactSubmission.countDocuments();
    } else if (collection === 'users') {
      data = await User.find({})
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);
      total = await User.countDocuments();
    } else {
      return NextResponse.json(
        { error: 'Invalid collection specified' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      data,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const collection = searchParams.get('collection');
    const id = searchParams.get('id');

    if (!collection || !id) {
      return NextResponse.json(
        { error: 'Collection and ID are required' },
        { status: 400 }
      );
    }

    await dbConnect();

    let result;
    if (collection === 'contacts') {
      result = await ContactSubmission.findByIdAndDelete(id);
    } else if (collection === 'users') {
      result = await User.findByIdAndDelete(id);
    } else {
      return NextResponse.json(
        { error: 'Invalid collection specified' },
        { status: 400 }
      );
    }

    if (!result) {
      return NextResponse.json(
        { error: 'Record not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Record deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to delete record' },
      { status: 500 }
    );
  }
}