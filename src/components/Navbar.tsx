'use client';

import Link from 'next/link';
import { useState } from 'react';

type NavbarLinkProps = {
	href: string;
	children: React.ReactNode;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, children }) => (
	<Link
		href={href}
		className="font-semibold text-white cursor-pointer text-ml hover:text-green-200"
	>
		{children}
	</Link>
);

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const links = [
		{ href: '/pricing', label: '가격' },
		{ href: '/about', label: '소개' },
		{ href: '/contact', label: '문의하기' },
		{ href: '/auth/login', label: '로그인' },
	];

	return (
		<div className="bg-blue-400">
			<nav className="flex items-center justify-between w-full p-5">
				<div className="flex items-center h-8">
					<Link
						href="/"
						className="text-xl font-semibold text-white cursor-pointer hover:text-green-200"
					>
						I-RAS
					</Link>
				</div>
				<div className="md:hidden">
					<button onClick={() => setMenuOpen(!menuOpen)}>
						<span className="block w-6 h-1 mb-1 bg-white"></span>
						<span className="block w-6 h-1 mb-1 bg-white"></span>
						<span className="block w-6 h-1 bg-white"></span>
					</button>
				</div>
				<div className="hidden space-x-4 md:flex">
					{links.map(link => {
						return (
							<NavbarLink key={link.href} href={link.href}>
								{link.label}
							</NavbarLink>
						);
					})}
				</div>
			</nav>
			{menuOpen && (
				<div className="flex flex-col py-4 space-y-2 text-center md:hidden">
					{links.map(link => (
						<NavbarLink key={link.href} href={link.href}>
							{link.label}
						</NavbarLink>
					))}
				</div>
			)}
		</div>
	);
};

export default Navbar;
