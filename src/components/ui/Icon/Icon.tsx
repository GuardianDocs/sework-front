// https://tech.socarcorp.kr/dev/2022/09/06/react-icon-component.html#31-%EC%95%84%EC%9D%B4%EC%BD%98-%ED%8C%8C%EC%9D%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%EB%90%98%EB%8A%94-svg%EB%A5%BC-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90-

import { colors, type ColorKey } from '@/types/theme/color';
import React, { CSSProperties } from 'react';
import svgPaths from './svgIcon.json';

export interface IconProps {
  icon: 'line-add';
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
      fill={colors[color || 'black']}
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <path d={svgPaths[icon]} />
    </svg>
  );
};

export default Icon;
