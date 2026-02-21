import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { AnimatedBackground } from '@/components/shared/animated-background';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ZOCA Courtyard | Premium North Indian Cafe',
  description: 'Luxury restaurant website with booking and menu experience.',
  openGraph: {
    title: 'ZOCA Courtyard',
    description: 'Royal blue and warm-gold premium dining experience.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider>
          <AnimatedBackground />
          <main className="mx-auto min-h-screen max-w-6xl space-y-10 p-4 md:p-8">
            <Navbar />
            {children}
          </main>
          <a href="https://wa.me/919582820011" className="fixed bottom-6 right-6 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg">WhatsApp</a>
          <a href="tel:+919582820011" className="fixed bottom-6 left-6 rounded-full bg-royal px-4 py-2 text-white shadow-lg md:hidden">Call Now</a>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
