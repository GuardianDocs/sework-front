import { ColorKey, colors } from '@/types/theme/color';
import styles from './Body.module.scss';
import { TypographyProps } from '@/types/typography';

interface BodyProps extends TypographyProps {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  color?: ColorKey;
  children: React.ReactNode;
}

export default function Body({ size = 'm', color = 'black', children, ...props }: BodyProps) {
  return (
    <span className={`${styles.body} ${styles[size]}`} style={{ color: `var(${colors[color]})` }} {...props}>
      {children}
    </span>
  );
}
