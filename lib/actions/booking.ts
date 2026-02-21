'use server';

import { revalidatePath } from 'next/cache';
import { connectDb } from '@/lib/db';
import { Booking } from '@/lib/models/Booking';
import { bookingSchema } from '@/lib/validation/schemas';

export async function createBookingAction(formData: FormData) {
  const parsed = bookingSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    guests: formData.get('guests'),
    date: formData.get('date'),
    timeSlot: formData.get('timeSlot'),
    specialRequest: formData.get('specialRequest')
  });

  if (!parsed.success) {
    return { ok: false, message: parsed.error.issues[0]?.message || 'Invalid form data' };
  }

  await connectDb();
  const exists = await Booking.findOne({ date: parsed.data.date, timeSlot: parsed.data.timeSlot }).lean();
  if (exists) return { ok: false, message: 'This slot is already booked.' };

  await Booking.create(parsed.data);
  revalidatePath('/admin');
  return { ok: true, message: 'Booking request submitted successfully.' };
}
