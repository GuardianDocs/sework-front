import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-start w-[1200px] mx-6">{children}</div>
    </div>
  );
}
