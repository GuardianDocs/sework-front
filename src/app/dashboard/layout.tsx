import { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
      <div className="flex-1 self-stretch">{children}</div>
    </div>
  );
}
