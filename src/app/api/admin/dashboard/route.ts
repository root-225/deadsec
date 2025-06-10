
import { NextResponse } from 'next/server';
import dbConnect from '@/config/mongodb';
import User from '@/models/User';
import ContactSubmission from '@/models/ContactSubmission';
import Inscription from '@/models/Inscription';

export async function GET() {
  try {
    await dbConnect();
    
    // Fetch user statistics
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isAdmin: { $ne: true } });
    
    // Fetch registration statistics
    const totalRegistrations = await Inscription.countDocuments();
    const pendingRegistrations = await Inscription.countDocuments({ status: 'pending' });
    
    // Fetch contact submissions
    const totalSubmissions = await ContactSubmission.countDocuments();
    
    // Mock analytics data (replace with real analytics service)
    const analyticsData = {
      visitors: 1250,
      pageViews: 4780
    };

    // Mock image statistics (replace with actual file system or cloud storage data)
    const imageStats = {
      total: 45,
      size: '125 MB'
    };
    
    return NextResponse.json({
      success: true,
      users: {
        total: totalUsers,
        active: activeUsers
      },
      images: imageStats,
      registrations: {
        total: totalRegistrations,
        pending: pendingRegistrations
      },
      analytics: analyticsData
    }, { status: 200 });
    
  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}
