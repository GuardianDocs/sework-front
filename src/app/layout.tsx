import { PropsWithChildren } from 'react';
import localFont from 'next/font/local';
import RootProvider from '@/components/Providers/RootProvider';
import Navbar from '@/components/legacy/Navbar';
import '@/app/globals.css';
import { type NextFont } from 'next/dist/compiled/@next/font';
import { Toaster } from '@/components/ui/Toast/Toaster';

const Pretendard: NextFont = localFont({
  src: '../assets/fonts/Pretendard/PretendardVariable.woff2',
  display: 'swap',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko" className={`${Pretendard.className} light`}>
      <body>
        <RootProvider>
          <Navbar />
          <main>{children}</main>
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
