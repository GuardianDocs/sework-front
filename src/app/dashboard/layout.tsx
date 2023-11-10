import { PropsWithChildren } from 'react';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return <div className="flex flex-col items-center justify-center">{children}</div>;
}
