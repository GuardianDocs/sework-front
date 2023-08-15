import { PropsWithChildren } from 'react';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
