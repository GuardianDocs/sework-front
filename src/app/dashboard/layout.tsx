import { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex h-[100vh]">
      <Sidebar />
      <div className="flex-1 self-stretch px-10 overflow-auto">
        <div className="pb-[60px] h-full">{children}</div>
      </div>
    </main>
  );
}
