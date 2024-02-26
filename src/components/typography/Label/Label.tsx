import { cn } from '@/lib/utils';
import { ColorKey, colors } from '@/types/theme/color';
import styles from './Label.module.scss';

// TODO: Body처럼 확장
type BodyProps = {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  color?: ColorKey;
  className?: string;
  children: React.ReactNode;
};

export default function Label({ size = 'm', color = 'black', className, children }: BodyProps) {
  return (
    <span className={cn(`${styles.label} ${styles[size]}`, className)} style={{ color: `var(${colors[color]})` }}>
      {children}
    </span>
  );
}
