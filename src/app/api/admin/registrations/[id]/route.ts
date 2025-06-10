
import { NextResponse } from 'next/server';
import dbConnect from '@/config/mongodb';
import Inscription from '@/models/Inscription';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { status } = await request.json();
    await dbConnect();
    
    const registration = await Inscription.findByIdAndUpdate(
      params.id,
      { $set: { status } },
      { new: true }
    );
    
    if (!registration) {
      return NextResponse.json(
        { success: false, message: 'Registration not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      registration
    }, { status: 200 });
    
  } catch (error) {
    console.error('Registration update API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update registration' },
      { status: 500 }
    );
  }
}
