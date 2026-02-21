import Link from 'next/link';

export function LuxuryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="luxury-btn border border-gold/60 bg-gradient-to-r from-gold/80 to-amber-500/80 text-black hover:scale-[1.03] hover:shadow-glow"
    >
      {children}
    </Link>
  );
}
