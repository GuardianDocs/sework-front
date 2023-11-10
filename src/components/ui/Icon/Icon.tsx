import { colors, type ColorKey } from '@/types/theme/color';
import React, { CSSProperties } from 'react';

const svgIconMapper = {
  'line-add': {
    path: 'M10.625 3.125C10.625 2.77982 10.3452 2.5 10 2.5C9.65482 2.5 9.375 2.77982 9.375 3.125V9.375H3.125C2.77982 9.375 2.5 9.65482 2.5 10C2.5 10.3452 2.77982 10.625 3.125 10.625H9.375V16.875C9.375 17.2202 9.65482 17.5 10 17.5C10.3452 17.5 10.625 17.2202 10.625 16.875V10.625H16.875C17.2202 10.625 17.5 10.3452 17.5 10C17.5 9.65482 17.2202 9.375 16.875 9.375H10.625V3.125Z',
    viewBox: '0 0 20 20',
  },
  'chevron-down-s': {
    path: 'M6.72 9.231a1.24 1.24 0 0 0-.496.506c-.099.21-.069.444.087.668.212.302 5.25 5.294 5.425 5.373.212.097.447.065.669-.089.302-.212 5.294-5.25 5.373-5.425.142-.311-.012-.706-.371-.953-.224-.154-.46-.186-.671-.089-.105.047-.911.824-2.446 2.354L12 13.858l-2.29-2.282c-1.443-1.439-2.344-2.308-2.436-2.35a.627.627 0 0 0-.554.005',
    viewBox: '0 0 24 24',
  },
};

type IconKey = keyof typeof svgIconMapper;
export const iconKeys = Object.keys(svgIconMapper) as IconKey[];

export interface IconProps {
  icon: IconKey;
  size?: number;
  color?: ColorKey;
  style?: CSSProperties;
  className?: string;
}

const Icon = ({ icon, size = 20, color, style, className }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={svgIconMapper[icon].viewBox}
      fill={`var(${colors[color || 'black']})`}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <path d={svgIconMapper[icon].path} />
    </svg>
  );
};

export default Icon;
