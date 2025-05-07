import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/config/mongodb';
import Inscription from '@/models/Inscription';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, phone, formation } = body;

    // Basic validation
    if (!name || !email || !formation) {
      return NextResponse.json({ message: 'Nom, email et formation sont requis' }, { status: 400 });
    }

    // Validate email format (optional but recommended)
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: 'Format d\'email invalide' }, { status: 400 });
    }

    const newInscription = new Inscription({
      name,
      email,
      phone: phone || undefined, // Store phone only if provided
      formation,
    });

    await newInscription.save();

    return NextResponse.json({ message: 'Inscription réussie !', inscription: newInscription }, { status: 201 });

  } catch (error: any) {
    console.error('Erreur API Inscription:', error);
    // Handle potential validation errors from Mongoose
    if (error.name === 'ValidationError') {
      let errors: { [key: string]: string } = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return NextResponse.json({ message: 'Erreur de validation', errors }, { status: 400 });
    }
    return NextResponse.json({ message: 'Erreur serveur lors de l\'inscription', error: error.message }, { status: 500 });
  }
}

// Optional: GET method to retrieve inscriptions (requires authentication/authorization)
// export async function GET(request: NextRequest) {
//   // Implement logic to get inscriptions, ensuring proper security
//   return NextResponse.json({ message: 'GET method not implemented yet' });
// }