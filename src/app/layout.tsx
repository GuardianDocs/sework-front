import { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';
import { Providers } from './Providers';
import '@/app/globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" className="light">
			<body>
				<Providers>
					<Navbar />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	);
}
