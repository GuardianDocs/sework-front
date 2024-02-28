import { cn } from '@/lib/utils';
import { ColorKey, colors } from '@/types/theme/color';
import { TypographyProps } from '@/types/typography';
import { forwardRef } from 'react';
import styles from './Title.module.scss';

interface TitleProps extends TypographyProps {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  color?: ColorKey;
  children: React.ReactNode;
}

// TODO: cn util 사용하도록 변경
const Title = forwardRef<HTMLSpanElement, TitleProps>(
  ({ size = 'm', color = 'black', children, className, ...props }, ref) => {
    const isColorKey = (color: ColorKey | string): color is ColorKey => {
      return color in colors;
    };
    const colorValue = isColorKey(color) ? `var(${colors[color]})` : color;

    return (
      <span
        ref={ref}
        className={cn(styles.title, styles[size], className)}
        style={{ color: `${colorValue}` }}
        {...props}
      >
        {children}
      </span>
    );
  }
);
Title.displayName = 'Title';

export default Title;
