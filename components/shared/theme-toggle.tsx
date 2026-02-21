'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="rounded-full p-2 glass transition-all duration-300" aria-label="Toggle theme">
      <span className="block transition-transform duration-300">{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}</span>
    </button>
  );
}
