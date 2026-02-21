import { NextResponse } from 'next/server';
import { requireRole } from '@/lib/auth';
import { connectDb } from '@/lib/db';
import { Booking } from '@/lib/models/Booking';

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    requireRole(['admin', 'editor']);
    const { status } = await req.json();
    await connectDb();
    await Booking.findByIdAndUpdate(params.id, { status });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}
