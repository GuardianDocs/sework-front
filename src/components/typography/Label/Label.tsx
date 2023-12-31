import { ColorKey, colors } from '@/types/theme/color';
import styles from './Label.module.scss';

// TODO: Body처럼 확장
type BodyProps = {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  color?: ColorKey;
  children: React.ReactNode;
};

export default function Label({ size = 'm', color = 'black', children }: BodyProps) {
  return (
    <span className={`${styles.label} ${styles[size]}`} style={{ color: `var(${colors[color]})` }}>
      {children}
    </span>
  );
}
