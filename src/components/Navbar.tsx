'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';

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

const NavbarLinks = () => {
	const links = [
		{ href: '/company-info', label: '기업정보 기입' },
		{ href: '/pricing', label: '가격' },
		{ href: '/about', label: '소개' },
		{ href: '/contact', label: '문의하기' },
	];

	return (
		<>
			{links.map(link => (
				<NavbarLink key={link.href} href={link.href}>
					{link.label}
				</NavbarLink>
			))}
		</>
	);
};

const UserStatus = () => {
	useEffect(() => {
		useLoginInfoStore.persist.rehydrate();
	}, []);

	const { companyName, reset } = useLoginInfoStore(state => ({
		companyName: state.companyName,
		reset: state.reset,
	}));

	return companyName ? (
		<>
			<span className="font-semibold text-slate-700">
				{companyName}님
			</span>
			<span className="font-semibold text-slate-700" onClick={reset}>
				로그아웃
			</span>
		</>
	) : (
		<NavbarLink href="/auth/login">로그인</NavbarLink>
	);
};

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

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
					<NavbarLinks />
					<UserStatus />
				</div>
			</nav>
			{menuOpen && (
				<div className="flex flex-col py-4 space-y-2 text-center md:hidden">
					<NavbarLinks />
					<UserStatus />
				</div>
			)}
		</div>
	);
};

export default Navbar;
