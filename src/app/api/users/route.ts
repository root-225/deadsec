import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/config/mongodb";
import User from "@/models/User";

export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const { name, email } = await req.json();
  if (!name || !email) {
    return NextResponse.json({ error: "Nom et email requis." }, { status: 400 });
  }
  try {
    const user = await User.create({ name, email });
    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}