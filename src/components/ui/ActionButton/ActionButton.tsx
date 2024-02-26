'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';
import Icon from '../Icon/Icon';
import styles from './ActionButton.module.scss';

type ButtonType = 'filled' | 'tonal-blue' | 'tonal-gray' | 'tonal-red';
type ButtonSize = 'l' | 'm' | 's';
type IconPosition = 'left' | 'right';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 스타일을 결정합니다.
   */
  variant: ButtonType;
  /**
   * 버튼의 크기를 결정합니다.
   */
  size: ButtonSize;
  /**
   * 버튼의 내용을 결정합니다.
   */
  children: React.ReactNode;
  /**
   * 버튼의 너비를 꽉 채울지 결정합니다.
   */
  isFullWidth?: boolean;
  /**
   * 버튼의 아이콘을 보여줄 위치를 결정합니다.
   */
  showIcon?: IconPosition;
  /**
   * 버튼의 아이콘을 결정합니다.
   */
  icon?: React.ReactElement<typeof Icon>;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ variant, size, children, isFullWidth, showIcon, icon, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'transition-all',
          styles.actionButton,
          styles[variant],
          styles[size],
          isFullWidth ? styles.fullWidth : '',
          className
        )}
        {...props}
      >
        <div className="flex gap-1">
          {showIcon === 'left' && React.cloneElement(icon as React.ReactElement<typeof Icon>)}
          {children}
          {showIcon === 'right' && React.cloneElement(icon as React.ReactElement<typeof Icon>)}
        </div>
      </button>
    );
  }
);
ActionButton.displayName = 'ActionButton';

export default ActionButton;
