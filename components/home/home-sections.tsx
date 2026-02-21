import Image from 'next/image';
import { LuxuryButton } from '../shared/luxury-button';

const dishes = [
  { name: 'Stuffed Paneer', price: '₹390' },
  { name: 'Peri Peri Paneer Pizza', price: '₹450' },
  { name: 'Saffron Cheesecake', price: '₹320' }
];

export function HomeSections() {
  return (
    <>
      <section className="grid gap-8 rounded-3xl bg-royal px-8 py-16 text-white md:grid-cols-2">
        <div className="space-y-5">
          <p className="inline-block rounded-full bg-gold/30 px-3 py-1 text-xs">Limited slots today</p>
          <h1 className="font-serif text-4xl">Luxury Asian-Fusion Ambience, Crafted for Evenings to Remember</h1>
          <p className="text-white/80">Royal interiors, floral accents, and warm lighting with curated North Indian classics.</p>
          <div className="flex gap-3"><LuxuryButton href="/book">Book a Table</LuxuryButton><LuxuryButton href="/menu">View Menu</LuxuryButton></div>
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-3xl">
          <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400" alt="Cafe" fill className="object-cover" />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {dishes.map((d) => <article key={d.name} className="rounded-2xl glass p-6"><h3 className="font-serif text-xl">{d.name}</h3><p>{d.price}</p></article>)}
      </section>

      <section className="rounded-3xl glass p-8">
        <h2 className="mb-4 font-serif text-3xl">Guest Reviews</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {['Wonderful place for all kinds', 'Great ambience and quality food', 'Perfect for family gatherings'].map((t) => (
            <blockquote key={t} className="rounded-xl bg-white/40 p-4 dark:bg-white/5">“{t}”</blockquote>
          ))}
        </div>
      </section>

      <section className="rounded-3xl glass p-8">
        <h2 className="mb-4 font-serif text-3xl">Gallery Preview</h2>
        <div className="grid gap-4 md:grid-cols-4">{[1, 2, 3, 4].map((n) => <div key={n} className="h-32 rounded-xl bg-gradient-to-br from-royal/60 to-gold/40" />)}</div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl glass p-6"><h2 className="font-serif text-2xl">Contact & Hours</h2><p>132, Roshanpura Extension, Najafgarh, Delhi</p><p>Open daily: 11:00 AM – 10:30 PM</p></div>
        <iframe className="h-64 w-full rounded-2xl" src="https://www.google.com/maps?q=Najafgarh%20Delhi&output=embed" loading="lazy" />
      </section>

      <section className="rounded-3xl glass p-8">
        <h2 className="font-serif text-3xl">Newsletter</h2>
        <div className="mt-3 flex flex-col gap-3 md:flex-row"><input className="flex-1 rounded-xl border bg-transparent px-4 py-3" placeholder="Your email" /><button className="luxury-btn bg-gold text-black">Subscribe</button></div>
      </section>
    </>
  );
}
