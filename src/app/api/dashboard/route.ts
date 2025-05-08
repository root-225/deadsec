import { NextResponse } from 'next/server';
import dbConnect from '@/config/mongodb';
import User from '@/models/User';
// import Service from '@/models/Service';
import ContactSubmission from '@/models/ContactSubmission';

// Middleware for admin authentication would be added here

export async function GET() {
  try {
    await dbConnect();
    
    // Fetch user statistics
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ status: 'active' });
    
    // Fetch service statistics
    // const totalServices = await Service.countDocuments();
    // const activeServices = await Service.countDocuments({ status: 'active' });
    
    // Fetch contact submissions
    const totalSubmissions = await ContactSubmission.countDocuments();
    const recentSubmissions = await ContactSubmission.find()
      .sort({ createdAt: -1 })
      .limit(5);
    
    return NextResponse.json({
      success: true,
      data: {
        users: {
          total: totalUsers,
          active: activeUsers
        },
        services: {
          total: 0,
          active: 0
        },
        submissions: {
          total: totalSubmissions,
          recent: recentSubmissions
        }
      }
    }, { status: 200 });
    
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}