import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#111E36',
          gold: '#C5A059',
          ivory: '#F8F9FA',
          dark: '#0A1628',
        },
      },
    },
  },
  plugins: [],
};
export default config;
