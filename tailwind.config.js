import { nextui } from '@nextui-org/react';
import { animation } from './src/styles/animation';
import { defaultColors } from './src/styles/colors';
import { keyframes } from './src/styles/keyFrames';
import { textEllipsis, textStyle } from './src/styles/typography';

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
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms'),
    nextui(),
    ({ addUtilities }) => {
      addUtilities({
        ...textStyle,
        ...textEllipsis,
        '.flex-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.flex-col-center': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.fixed-top-center': {
          position: 'fixed',
          top: '16px',
          left: '50%',
          transform: 'translate(-50%, 0)',
        },
      });
    },
  ],
};
