import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
	title: 'Next.js Template',
	description: 'Next.js template for fast development',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
	<html lang="en" className="h-full bg-white">
		<body className={`${inter.className} h-full`}>{children}</body>
	</html>
);

export { metadata, RootLayout as default };
