'use client';

import { useState } from 'react';
import Image from 'next/image';

const images = [
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200'
];

export default function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <section className="space-y-5">
      <h1 className="font-serif text-4xl">Gallery</h1>
      <div className="columns-1 gap-4 space-y-4 md:columns-3">
        {images.map((src) => (
          <button key={src} className="relative block w-full overflow-hidden rounded-2xl" onClick={() => setActive(src)}>
            <Image src={src} alt="gallery" width={800} height={1200} className="h-auto w-full" />
          </button>
        ))}
      </div>
      {active && <button onClick={() => setActive(null)} className="fixed inset-0 z-50 grid place-items-center bg-black/80"><Image src={active} alt="lightbox" width={900} height={1200} className="max-h-[90vh] w-auto rounded-2xl" /></button>}
    </section>
  );
}
