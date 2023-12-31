import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: '우리회사 진단하기',
};

export default function CompanyInfoPage() {
	return (
		<div className="flex h-screen bg-gray-100">
			<div className="flex flex-col items-start justify-center flex-1 p-10">
				<h1 className="mb-4 text-3xl font-bold">안녕하세요!</h1>
				<p className="mb-6 text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<p className="mb-6 text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua.
				</p>
				<Link href="/company-info/setup-1">
					<button className="px-6 py-3 text-white bg-blue-500 rounded-full">
						우리회사 진단하기
					</button>
				</Link>
			</div>
			<div className="flex items-center justify-center flex-1 bg-blue-200">
				이미지영역
			</div>
		</div>
	);
}
