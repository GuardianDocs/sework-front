'use client';

import Icon from '@/components/ui/Icon/Icon';
import MenuButton from '@/components/ui/MenuButton/MenuButton';
import { DASHBOARD_MENU } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import VersionCard from './VersionCard';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <aside className="border-r border-gray-100 flex flex-col">
      <div
        className={cn(
          'p-[24px_22px_24px_28px] flex justify-between items-center transition-all',
          open ? 'w-[244px]' : 'w-[68px] p-[24px_22px]'
        )}
      >
        {open && (
          <div className="relative w-[60px] h-4">
            <Image src="/main-logo.png" fill alt="logo" />
          </div>
        )}
        <button onClick={() => setOpen(prev => !prev)}>
          <Icon icon={open ? 'fold' : 'unfold'} className="text-gray-500" />
        </button>
      </div>
      <Divider />
      <section className="p-3 flex flex-col gap-y-3">
        <VersionCard open={open} />
        <div className="flex flex-col gap-y-1">
          {DASHBOARD_MENU.map(menu => (
            <MenuButton key={menu.text} {...menu} menuLevel={0} onlyIcon={!open} />
          ))}
        </div>
      </section>
      <Divider />
      <section className="p-3 flex flex-col gap-y-3 flex-1 items-stretch">
        <MenuButton text="아이라스 가이드" icon="home" menuLevel={0} onlyIcon={!open} />
      </section>
      <Divider />
      <section className="p-3 flex flex-col gap-y-3">
        <MenuButton text="결제 및 플랜" icon="card" menuLevel={0} onlyIcon={!open} />
        <MenuButton text="내 정보" icon="user" menuLevel={0} onlyIcon={!open} />
      </section>
      <Divider />
    </aside>
  );
};

export default Sidebar;

const Divider = () => {
  return <div className="mx-4 border-t border-gray-100" />;
};
