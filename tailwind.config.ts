import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          200: '#F0E4A0',
          300: '#EDD97A',
          400: '#DDB83C',
          500: '#D4AF37',
          600: '#B09428',
          700: '#8A7320',
        },
      },
    },
  },
  plugins: [],
};

export default config;
