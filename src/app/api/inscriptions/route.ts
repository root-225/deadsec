import { NextRequest, NextResponse } from 'next/server';
import { executeQuery } from '@/config/database';

export async function POST(request: NextRequest) {
  try {
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

    // Insert into MySQL database
    const query = `
      INSERT INTO inscriptions (name, email, phone, formation)
      VALUES (?, ?, ?, ?)
    `;
    
    const result = await executeQuery(query, [name, email, phone || null, formation]);

    return NextResponse.json({ 
      message: 'Inscription réussie !', 
      inscription: { id: (result as any).insertId, name, email, phone, formation }
    }, { status: 201 });

  } catch (error: any) {
    console.error('Erreur API Inscription:', error);
    
    // Handle duplicate email error
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ 
        message: 'Cette adresse email est déjà inscrite pour cette formation' 
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      message: 'Erreur serveur lors de l\'inscription', 
      error: error.message 
    }, { status: 500 });
  }
}

// Optional: GET method to retrieve inscriptions (requires authentication/authorization)
export async function GET(request: NextRequest) {
  try {
    const query = 'SELECT * FROM inscriptions ORDER BY created_at DESC';
    const inscriptions = await executeQuery(query);
    
    return NextResponse.json({ inscriptions }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching inscriptions:', error);
    return NextResponse.json({ 
      message: 'Error fetching inscriptions', 
      error: error.message 
    }, { status: 500 });
  }
}