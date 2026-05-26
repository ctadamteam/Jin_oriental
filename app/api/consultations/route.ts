import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // TODO: Validate body with Zod
    // TODO: Save to Supabase consultations table

    return NextResponse.json({ success: true, message: 'Consultation received' });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
