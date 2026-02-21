import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/auth';
import { connectDb } from '@/lib/db';
import { Booking } from '@/lib/models/Booking';

export async function GET() {
  try {
    requireRole(['admin', 'editor']);
    await connectDb();
    const bookings = await Booking.find().sort({ createdAt: -1 }).lean();
    return NextResponse.json(bookings);
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
