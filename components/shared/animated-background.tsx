'use client';

import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const lift = Math.min(60, y * 0.08);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-40">
      <svg viewBox="0 0 1200 900" className="h-full w-full">
        {[...Array(22)].map((_, i) => (
          <circle key={i} cx={40 + i * 54} cy={100 + ((i * 67) % 500)} r="1.8" fill="rgb(var(--gold))" opacity="0.12" />
        ))}
        <g transform={`translate(0, ${-lift})`}>
          <path d="M510 680c30-80 85-130 115-185" stroke="rgb(var(--text))" strokeWidth="7" fill="none" strokeLinecap="round" />
          <path d="M640 670c18-72 58-114 88-165" stroke="rgb(var(--text))" strokeWidth="7" fill="none" strokeLinecap="round" />
          <ellipse cx="600" cy="760" rx="190" ry="46" fill="none" stroke="rgb(var(--gold))" strokeWidth="4" />
          <path d="M450 760h300" stroke="rgb(var(--text))" strokeWidth="4" />
        </g>
        <g opacity={Math.min(0.65, 0.15 + y / 1200)}>
          <path d="M560 650c-20-60-20-100 0-150" stroke="rgb(var(--gold))" strokeWidth="2" fill="none" />
          <path d="M600 650c-20-60-20-100 0-150" stroke="rgb(var(--gold))" strokeWidth="2" fill="none" />
          <path d="M640 650c-20-60-20-100 0-150" stroke="rgb(var(--gold))" strokeWidth="2" fill="none" />
        </g>
      </svg>
    </div>
  );
}
