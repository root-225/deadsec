import { NextResponse } from 'next/server';
import dbConnect from '@/config/mongodb';
import User from '@/models/User';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    await dbConnect();
    const user = await User.findOne({ username });
    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    // Replace this with your real password check logic
    const isPasswordValid = password === user.password;
    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    // Optionally, set a cookie or session here
    return NextResponse.json({ success: true, message: 'Login successful' });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}