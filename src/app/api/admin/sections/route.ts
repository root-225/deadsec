import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { verifyToken } from '@/lib/auth';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface MultilingualContent {
  en: string;
  fr: string;
}

interface SectionData {
  key: string;
  title: MultilingualContent;
  content: MultilingualContent;
  isVisible: boolean;
}

export async function GET(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';

    const { data: sections, error } = await supabase
      .from('website_sections')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;

    const localizedSections = sections.map((section: any) => ({
      ...section,
      title: section.title[lang] || section.title.en,
      content: section.content[lang] || section.content.en,
    }));

    return NextResponse.json(localizedSections);
  } catch (error) {
    console.error('Error fetching sections:', error);
    return NextResponse.json({ error: 'Failed to fetch sections' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json() as SectionData;
    const { key, title, content, isVisible = true } = body;

    if (!key || !title?.en || !content?.en) {
      return NextResponse.json(
        { error: 'Key, title, and content are required in English' },
        { status: 400 }
      );
    }

    const { data: existing } = await supabase
      .from('website_sections')
      .select('id')
      .eq('key', key)
      .single();

    if (existing) {
      return NextResponse.json(
        { error: 'A section with this key already exists' },
        { status: 400 }
      );
    }

    const { data: section, error } = await supabase
      .from('website_sections')
      .insert([{
        key,
        title,
        content,
        is_visible: isVisible,
        languages: ['en', 'fr'].filter(lang => title[lang as keyof MultilingualContent]),
      }])
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(section);
  } catch (error) {
    console.error('Error creating section:', error);
    return NextResponse.json({ error: 'Failed to create section' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    
    if (!key) {
      return NextResponse.json({ error: 'Section key is required' }, { status: 400 });
    }

    const body = await request.json() as Partial<SectionData>;
    const updateData: any = {};

    if (body.title) updateData.title = body.title;
    if (body.content) updateData.content = body.content;
    if (typeof body.isVisible === 'boolean') updateData.is_visible = body.isVisible;

    const { data: section, error } = await supabase
      .from('website_sections')
      .update(updateData)
      .eq('key', key)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(section);
  } catch (error) {
    console.error('Error updating section:', error);
    return NextResponse.json({ error: 'Failed to update section' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const key = searchParams.get('key');
    
    if (!key) {
      return NextResponse.json({ error: 'Section key is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('website_sections')
      .delete()
      .eq('key', key);

    if (error) throw error;
    return NextResponse.json({ message: 'Section deleted successfully' });
  } catch (error) {
    console.error('Error deleting section:', error);
    return NextResponse.json({ error: 'Failed to delete section' }, { status: 500 });
  }
}
