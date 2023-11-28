import { ColorKey, colors } from '@/types/theme/color';
import styles from './Body.module.scss';
import { TypographyProps } from '@/types/typography';
import { forwardRef } from 'react';

interface BodyProps extends TypographyProps {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  color?: ColorKey | string;
  children: React.ReactNode;
}

// TODO: cn util 사용하도록 변경
const Body = forwardRef<HTMLSpanElement, BodyProps>(({ size = 'm', color = 'black', children, ...props }, ref) => {
  const isColorKey = (color: ColorKey | string): color is ColorKey => {
    return color in colors;
  };
  const colorValue = isColorKey(color) ? `var(${colors[color]})` : color;

  return (
    <span ref={ref} className={`${styles.body} ${styles[size]}`} style={{ color: `${colorValue}` }} {...props}>
      {children}
    </span>
  );
});
Body.displayName = 'Body';

export default Body;
