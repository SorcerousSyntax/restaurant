import { NextResponse } from 'next/server';
import { connectDb } from '@/lib/db';
import { Booking } from '@/lib/models/Booking';
import { bookingSchema } from '@/lib/validation/schemas';

export async function POST(req: Request) {
  try {
    const parsed = bookingSchema.parse(await req.json());
    await connectDb();
    const exists = await Booking.findOne({ date: parsed.date, timeSlot: parsed.timeSlot }).lean();
    if (exists) return NextResponse.json({ error: 'Time slot already booked' }, { status: 409 });
    const created = await Booking.create(parsed);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request', detail: String(error) }, { status: 400 });
  }
}
