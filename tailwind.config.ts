import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ['forest', 'black'],
  },
} satisfies Config;

export default config;
