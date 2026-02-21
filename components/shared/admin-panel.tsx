'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type Booking = { _id: string; name: string; date: string; timeSlot: string; status: string };
type Item = { _id: string; name: string; category: string; price: number };

export function AdminPanel({ role }: { role: string }) {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const load = () => {
    fetch('/api/admin/bookings').then((r) => r.json()).then(setBookings);
    fetch('/api/menu').then((r) => r.json()).then(setItems);
  };
  useEffect(load, []);

  const updateStatus = async (id: string, status: string) => {
    const res = await fetch(`/api/admin/bookings/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) });
    if (res.ok) { toast.success('Booking updated'); load(); }
  };

  const deleteItem = async (id: string) => {
    const res = await fetch(`/api/admin/menu/${id}`, { method: 'DELETE' });
    if (res.ok) { toast.success('Menu item deleted'); load(); }
  };

  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl">Admin Dashboard ({role})</h1>
      <section className="rounded-2xl glass p-6">
        <h2 className="mb-3 font-serif text-2xl">Bookings</h2>
        <div className="space-y-2">
          {bookings.map((b) => <div key={b._id} className="flex items-center justify-between rounded-xl bg-white/30 p-3 dark:bg-black/20"><span>{b.name} • {b.date} {b.timeSlot}</span><select value={b.status} onChange={(e)=>updateStatus(b._id, e.target.value)} className="rounded px-2 py-1"><option>pending</option><option>confirmed</option><option>cancelled</option></select></div>)}
        </div>
      </section>
      <section className="rounded-2xl glass p-6">
        <h2 className="mb-3 font-serif text-2xl">Menu Management</h2>
        <p className="mb-2 text-sm opacity-70">Add/edit via /api/menu POST; integrated with Cloudinary URL field.</p>
        {items.map((i)=><div key={i._id} className="flex items-center justify-between rounded-xl bg-white/30 p-3 dark:bg-black/20"><span>{i.name} - ₹{i.price}</span><button onClick={()=>deleteItem(i._id)} className="text-red-600">Delete</button></div>)}
      </section>
    </div>
  );
}
