import { nextui } from '@nextui-org/react';
import { animation } from './src/styles/animation';
import { defaultColors } from './src/styles/colors';
import { keyframes } from './src/styles/keyFrames';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: defaultColors,
      keyframes: keyframes,
      animation: animation,
      // ...layouts,
    },
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/forms'), nextui()],
};
