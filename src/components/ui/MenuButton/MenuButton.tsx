'use client';

import type { MenuType } from '@/constants';
import { cn } from '@/lib/utils';
import { MouseEvent, useState } from 'react';
import Icon from '../Icon/Icon';

type MenuButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MenuType & { menuLevel?: number; onlyIcon?: boolean; actived?: boolean };

const MenuButton = ({ text, icon, subMenu, onlyIcon, actived, menuLevel, onClick, ...props }: MenuButtonProps) => {
  const [open, setOpen] = useState(actived);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (!subMenu) return onClick && onClick(e);
    setOpen(prev => !prev);
  };

  return (
    <>
      <div className="flex items-center transition-all">
        {!!menuLevel && (
          <div className="ml-[10px] flex items-center w-6 h-6 justify-center">
            <div className={cn('w-[6px] h-[6px] rounded-full', actived ? 'bg-blue-500' : 'bg-gray-300')}></div>
          </div>
        )}
        <button
          className={cn(
            'p-[10px] flex gap-x-2 w-full rounded-s text-start bg-white',
            actived ? 'text-blue-500' : 'hover:text-blue-500 text-gray-600',
            actived && !subMenu && 'bg-blue-50',
            props.disabled && 'text-gray-300 hover:text-gray-300 cursor-not-allowed'
          )}
          onClick={handleClick}
          {...props}
        >
          {icon && <Icon icon={icon} />}
          {!onlyIcon && (
            <span
              className={cn(
                'flex-1 self-stretch',
                !props.disabled && actived ? 'text-style-title-m' : 'text-style-label-m'
              )}
            >
              {text}
            </span>
          )}
          {!onlyIcon && subMenu && <Icon icon="chevronDown" className={cn('transition-all', open && 'rotate-180')} />}
        </button>
      </div>

      {!onlyIcon && subMenu && open && (
        <div className="flex flex-col gap-y-1 relative">
          <div className="absolute h-full top-0 left-[19.5px] py-[20px] -z-10">
            <div className="h-full border-dashed border-l border-gray-400" />
          </div>
          {subMenu.map(menu => (
            <MenuButton key={menu.text} {...menu} menuLevel={menuLevel ? menuLevel + 1 : 1} />
          ))}
        </div>
      )}
    </>
  );
};

export default MenuButton;
