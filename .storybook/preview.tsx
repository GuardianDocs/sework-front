import React from 'react';

import type { Preview } from '@storybook/react';
import { type NextFont } from 'next/dist/compiled/@next/font';
import localFont from 'next/font/local';
import '@/app/globals.css';

const Pretendard: NextFont = localFont({
  src: '../assets/fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => (
      <div className={`${Pretendard.className}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
