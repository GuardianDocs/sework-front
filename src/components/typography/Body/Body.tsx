import { ColorKey, colors } from '@/types/theme/color';
import styles from './Body.module.scss';
import { TypographyProps } from '@/types/typography';

interface BodyProps extends TypographyProps {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  color?: ColorKey | string;
  children: React.ReactNode;
}

export default function Body({ size = 'm', color = 'black', children, ...props }: BodyProps) {
  const isColorKey = (color: ColorKey | string): color is ColorKey => {
    return color in colors;
  };
  const colorValue = isColorKey(color) ? `var(${colors[color]})` : color;

  return (
    <span className={`${styles.body} ${styles[size]}`} style={{ color: `${colorValue}` }} {...props}>
      {children}
    </span>
  );
}
