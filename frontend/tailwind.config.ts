import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0.0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
      },
      animation: {
        'poke-rotate': 'rotate 4s linear infinite',
      },
    },
  },
  future: { hoverOnlyWhenSupported: true },
};
export default config;
