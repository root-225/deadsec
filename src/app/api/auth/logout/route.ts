import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Supprimer le cookie d'authentification
    cookies().delete('auth-token');
    return NextResponse.json(
      { success: true, message: 'Déconnexion réussie' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Erreur lors de la déconnexion' },
      { status: 500 }
    );
  }
}