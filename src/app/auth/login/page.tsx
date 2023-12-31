import type { Metadata } from 'next';
import LoginPage from '@/components/page/login/LoginPage';

export const metadata: Metadata = {
  title: '로그인',
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginPage />
        </div>
      </div>
    </>
  );
}
