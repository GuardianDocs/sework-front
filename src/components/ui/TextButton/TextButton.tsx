'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';
import Icon from '../Icon/Icon';
import styles from './TextButton.module.scss';

type ButtonType = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'm' | 's';
type IconPosition = 'left' | 'right';

interface TextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  iconPosition?: IconPosition;
  /**
   * 버튼의 아이콘을 결정합니다.
   */
  icon?: React.ReactElement<typeof Icon>;
}

const TextButton = forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ variant, size, children, isFullWidth, iconPosition = 'left', icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'transition-all',
          styles.textButton,
          styles[variant],
          styles[size],
          isFullWidth ? styles.fullWidth : '',
          icon ? styles.hasIcon : ''
        )}
        {...props}
      >
        <div className="flex gap-1">
          {icon && iconPosition === 'left' && React.cloneElement(icon as React.ReactElement<typeof Icon>)}
          {children}
          {icon && iconPosition === 'right' && React.cloneElement(icon as React.ReactElement<typeof Icon>)}
        </div>
      </button>
    );
  }
);
TextButton.displayName = 'TextButton';

export default TextButton;
