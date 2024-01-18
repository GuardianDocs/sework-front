import type { Metadata } from 'next';
import JoinPage from '@/components/page/join/JoinPage';

export const metadata: Metadata = {
  title: '회원가입',
};

export default function Page() {
  return <JoinPage />;
}
