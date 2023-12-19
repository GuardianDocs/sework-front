'use client';

import React, { forwardRef } from 'react';
import styles from './ActionButton.module.scss';
import Icon from '../Icon/Icon';

type ButtonType = 'filled' | 'tonal-blue' | 'tonal-gray' | 'tonal-red';
type ButtonSize = 'l' | 'm' | 's';
type IconPosition = 'left' | 'right';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  size: ButtonSize;
  children: React.ReactNode;
  isFullWidth?: boolean;
  showIcon?: IconPosition;
  icon?: React.ReactElement<typeof Icon>;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonProps>(
  ({ variant, size, children, isFullWidth, showIcon, icon, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${styles.actionButton} ${styles[variant]} ${styles[size]} ${isFullWidth ? styles.fullWidth : ''}`}
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
