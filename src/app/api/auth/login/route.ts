import { NextResponse } from 'next/server';
import { sign } from 'jsonwebtoken';
import User from '@/models/User';
import dbConnect from '@/config/mongodb';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Rechercher l'utilisateur par email
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return NextResponse.json(
        { error: 'Aucun utilisateur trouvé avec cet email' },
        { status: 404 }
      );
    }

    // Vérifier le mot de passe
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Email ou mot de passe incorrect' },
        { status: 401 }
      );
    }

    // Générer le token JWT
    // Add redirect URL based on user role
    const redirectUrl = user.isAdmin ? '/admin' : '/';

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      redirectUrl: redirectUrl // Include redirect URL in the response body
    };

    const token = sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET || 'secret-par-defaut',
      { expiresIn: '1h' }
    );

    const response = NextResponse.json(userData);
    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 3600
    });

    return response;
  } catch (error) {
    console.error('Erreur de connexion:', error);
    return NextResponse.json(
      { error: 'Erreur lors de la connexion' },
      { status: 500 }
    );
  }
}