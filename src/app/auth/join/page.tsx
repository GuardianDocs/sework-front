import type { Metadata } from 'next';
import JoinForm from './components/JoinForm';
import JoinPage from '@/components/page/join/JoinPage';

export const metadata: Metadata = {
  title: '회원가입',
};

export default function Page() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    // 	<JoinForm />
    // </div>
    <JoinPage />
  );
}
