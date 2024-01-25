'use client';

import { Body, Title } from '@/components/typography';
import Image from 'next/image';
import ActionButton from '../ActionButton/ActionButton';
import Link from 'next/link';
import { useEffect } from 'react';
import useLoginInfoStore from '@/hooks/useLoginInfoStore';
import { useRouter } from 'next/navigation';

import { deleteCookie, getCookie } from 'cookies-next';

interface LinkButtonProps {
  href: string;
  label: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, label }) => (
  <Link href={href}>
    <div className="flex items-center justify-center px-3 py-2">
      <Title size="m" color="gray800">
        {label}
      </Title>
    </div>
  </Link>
);

const LinkButtonGroup = () => {
  const linkList = [
    { href: '/dashboard', label: '대시보드(개발중)' },
    { href: '/company-info', label: 'IRAS 소개' },
    { href: '/assessment/start', label: '서비스 소개' },
    { href: '/pricing', label: '요금 정보' },
    { href: '/contact', label: '도입 문의' },
    { href: '/about', label: '가이드' },
  ];

  return (
    <>
      {linkList.map(link => (
        <LinkButton key={link.href} href={link.href} label={link.label} />
      ))}
    </>
  );
};

const UserStatus = () => {
  const router = useRouter();

  useEffect(() => {
    useLoginInfoStore.persist.rehydrate();
  }, []);

  const { companyName, reset } = useLoginInfoStore(state => ({
    companyName: state.companyName,
    reset: state.reset,
  }));

  const realCompanyName = getCookie('companyName');
  const logout = () => {
    //TODO: 당분간 필요
    localStorage.clear();

    deleteCookie('companyName');
    deleteCookie('accessToken');
    deleteCookie('id');
    deleteCookie('requireAdditionalInfoYn');
  };

  return realCompanyName ? (
    <>
      <Body size="s" color="blue800">
        {realCompanyName}님
      </Body>
      <ActionButton variant="tonal-blue" size="s" onClick={logout}>
        로그아웃
      </ActionButton>
    </>
  ) : (
    <>
      <ActionButton
        variant="tonal-blue"
        size="s"
        onClick={() => {
          router.push('/auth/join');
        }}
      >
        회원가입
      </ActionButton>

      <ActionButton
        variant="tonal-blue"
        size="s"
        onClick={() => {
          router.push('/auth/login');
        }}
      >
        로그인
      </ActionButton>
    </>
  );
};

export default function Header() {
  return (
    <div className="flex flex-col items-center self-stretch justify-center py-2 bg-white border-b-1 border-b-gray-200">
      <div className="flex items-center justify-between">
        {/* 로고 */}
        <div className="flex flex-col w-[160px] items-start justify-center shrink-0">
          {/* logo area */}
          <Link href="/">
            <div className="flex px-1 py-2.5 flex-col items-start">
              <Image src="/main-logo.png" width={60} height={20} alt="logo" />
            </div>
          </Link>
        </div>

        {/* 메뉴 */}
        <div className="flex items-center gap-6">
          <LinkButtonGroup />
        </div>
        {/* 로그인 */}
        <div className="flex items-center justify-end gap-2 shrink-0">
          <UserStatus />
        </div>
      </div>
    </div>
  );
}
