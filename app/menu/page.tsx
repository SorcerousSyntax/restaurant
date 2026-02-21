'use client';

import { useEffect, useMemo, useState } from 'react';

type Item = { _id: string; name: string; category: string; description: string; price: number; isVeg: boolean };
const categories = ['All', 'North Indian', 'Pizza', 'Coffee', 'Starters', 'Desserts'];

export default function MenuPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState('');
  const [cat, setCat] = useState('All');

  useEffect(() => {
    fetch('/api/menu').then((r) => r.json()).then(setItems).catch(() => setItems([]));
  }, []);

  const filtered = useMemo(() => items.filter((i) => (cat === 'All' || i.category === cat) && i.name.toLowerCase().includes(search.toLowerCase())), [items, cat, search]);

  return (
    <section className="space-y-5">
      <h1 className="font-serif text-4xl">Curated Menu</h1>
      <div className="flex flex-wrap gap-3">
        <input className="rounded-xl border px-4 py-2" placeholder="Search dishes" value={search} onChange={(e) => setSearch(e.target.value)} />
        {categories.map((c) => <button key={c} onClick={() => setCat(c)} className={`rounded-xl px-3 py-2 ${cat===c?'bg-royal text-white':'glass'}`}>{c}</button>)}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((item) => (
          <article key={item._id} className="rounded-2xl glass p-5">
            <div className="flex items-center justify-between"><h3 className="font-serif text-xl">{item.name}</h3><span>{item.isVeg ? '🟢 Veg' : '🔴 Non-veg'}</span></div>
            <p className="text-sm opacity-80">{item.description}</p>
            <p className="mt-2 font-semibold text-gold">₹{item.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
