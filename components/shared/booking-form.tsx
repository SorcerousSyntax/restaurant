'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { createBookingAction } from '@/lib/actions/booking';

export function BookingForm() {
  const [pending, startTransition] = useTransition();
  const [state, setState] = useState({ ok: false, message: '' });

  return (
    <form
      className="grid gap-3 rounded-2xl glass p-6 md:grid-cols-2"
      action={(formData) =>
        startTransition(async () => {
          const res = await createBookingAction(formData);
          setState(res);
          res.ok ? toast.success(res.message) : toast.error(res.message);
        })
      }
    >
      {['name', 'phone', 'email', 'guests', 'date', 'timeSlot'].map((field) => (
        <input key={field} name={field} placeholder={field} required className="rounded-xl border bg-transparent px-4 py-3" type={field === 'date' ? 'date' : field === 'email' ? 'email' : 'text'} />
      ))}
      <textarea name="specialRequest" placeholder="Special request" className="rounded-xl border bg-transparent px-4 py-3 md:col-span-2" />
      <button disabled={pending} className="luxury-btn bg-royal text-white md:col-span-2">{pending ? 'Booking...' : 'Confirm Reservation'}</button>
      {state.message && <p className={`md:col-span-2 ${state.ok ? 'text-green-600' : 'text-red-600'}`}>{state.message}</p>}
    </form>
  );
}
