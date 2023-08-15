import Link from 'next/link';

const CTASection = () => (
	<section className="bg-blue-400 text-white text-center py-20">
		<h2 className="text-3xl font-bold mb-4">지금 바로 서비스 이용 시작!</h2>
		<p className="text-lg mb-8">
			우리의 서비스를 경험해보세요. 로그인 후 바로 시작할 수 있습니다.
		</p>
		<Link
			href="/auth/login"
			className="bg-white text-blue-400 p-4 rounded-full hover:bg-gray-100 transition duration-300"
		>
			서비스 이용 시작
		</Link>
	</section>
);

export default CTASection;
