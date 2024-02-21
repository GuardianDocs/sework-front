import { PropsWithChildren } from 'react';
import { LandingLogo } from './LandingLogo';

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col">
      <LandingLogo />
      <div className="flex flex-col gap-12 pb-[60px] justify-center items-center">{children}</div>
    </div>
  );
}
