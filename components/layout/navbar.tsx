import Link from 'next/link';
import { ThemeToggle } from '../shared/theme-toggle';

export function Navbar() {
  return (
    <header className="sticky top-3 z-40 mx-auto max-w-6xl rounded-2xl glass px-6 py-3">
      <nav className="flex items-center justify-between">
        <Link href="/" className="font-serif text-xl">ZOCA Courtyard</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/menu">Menu</Link>
          <Link href="/book">Book</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/admin">Admin</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
