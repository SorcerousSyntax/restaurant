import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        text: 'rgb(var(--text) / <alpha-value>)',
        gold: 'rgb(var(--gold) / <alpha-value>)',
        royal: '#1E3A8A'
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-inter)']
      },
      boxShadow: {
        glow: '0 0 24px rgba(198,167,94,0.3)'
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-140%)' },
          '100%': { transform: 'translateX(140%)' }
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        shine: 'shine 1.2s ease',
        float: 'float 7s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
