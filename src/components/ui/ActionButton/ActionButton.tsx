'use client';

import React from 'react';
import styles from './ActionButton.module.scss';

type ButtonType = 'filled' | 'tonal-blue' | 'tonal-gray' | 'tonal-red';
type ButtonSize = 'l' | 'm' | 's';

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  size: ButtonSize;
  children: React.ReactNode;
  isFullWidth?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({ variant, size, children, isFullWidth, ...props }) => {
  return (
    <button
      className={`${styles.actionButton} ${styles[variant]} ${styles[size]} ${isFullWidth ? styles.fullWidth : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
