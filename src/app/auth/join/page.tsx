import type { Metadata } from 'next';
import JoinForm from './components/JoinForm';

export const metadata: Metadata = {
	title: '회원가입',
};

export default function JoinPage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<JoinForm />
		</div>
	);
}
