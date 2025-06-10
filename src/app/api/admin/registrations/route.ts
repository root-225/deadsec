
import { NextResponse } from 'next/server';
import dbConnect from '@/config/mongodb';
import Inscription from '@/models/Inscription';

export async function GET() {
  try {
    await dbConnect();
    
    const registrations = await Inscription.find({})
      .sort({ createdAt: -1 })
      .lean();
    
    // Add status field if not present (for backward compatibility)
    const registrationsWithStatus = registrations.map(reg => ({
      ...reg,
      id: reg._id.toString(),
      status: (reg as any).status || 'pending'
    }));
    
    return NextResponse.json({
      success: true,
      registrations: registrationsWithStatus
    }, { status: 200 });
    
  } catch (error) {
    console.error('Registrations API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch registrations' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { action, registrationIds, status } = await request.json();
    await dbConnect();
    
    if (action === 'bulk-update') {
      await Inscription.updateMany(
        { _id: { $in: registrationIds } },
        { $set: { status } }
      );
      
      return NextResponse.json({
        success: true,
        message: `Updated ${registrationIds.length} registrations`
      }, { status: 200 });
    }
    
    return NextResponse.json(
      { success: false, message: 'Invalid action' },
      { status: 400 }
    );
    
  } catch (error) {
    console.error('Registrations POST API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update registrations' },
      { status: 500 }
    );
  }
}
