'use client';

import React from 'react';
import styles from './IconButton.module.scss';
import Icon, { type IconKey } from '../Icon/Icon';

type ButtonType = 'outline';
type ButtonSize = 'm';
type ButtonIcon = IconKey;

interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  size: ButtonSize;
  icon: ButtonIcon;
}

const ActionButton: React.FC<ActionButtonProps> = ({ variant, size, icon, ...props }) => {
  return (
    <button className={`${styles.iconButton} ${styles[variant]} ${styles[size]} ${styles[icon]}`} {...props}>
      <Icon icon={icon as any} />
    </button>
  );
};

export default ActionButton;
