import LoginPage from '@/components/page/login/LoginPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '로그인',
};

export default function Page() {
  return <LoginPage />;
}
