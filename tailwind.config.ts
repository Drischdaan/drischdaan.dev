import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        primary: {
          DEFAULT: colors.indigo[400],
          ...colors.indigo,
        },
        secondary: {
          DEFAULT: colors.violet[400],
          ...colors.violet,
        },
        accent: {
          DEFAULT: colors.lime[400],
          ...colors.lime,
        },
        surface: {
          DEFAULT: colors.neutral[950],
          ...colors.neutral,
        },
      },
    },
  },
  plugins: [],
};
export default config;
