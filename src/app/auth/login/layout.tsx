import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import loginGateImage from './img-login_gate.svg';

export default function LoginLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[100vh]">
      <div className="h-full min-w-[810px] bg-blue-100 w-[810px] flex items-center justify-center relative">
        <Link href="/">
          <Image src="/main-logo.png" width={90} height={30} alt="logo" className="absolute top-12 left-[60px]" />
        </Link>
        <Image src={loginGateImage} alt="login gate" width={500} height={400} />
      </div>
      <div className="flex-1 self-stretch flex items-center justify-center">{children}</div>
    </div>
  );
}
