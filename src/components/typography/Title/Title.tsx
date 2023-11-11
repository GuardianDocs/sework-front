import { ColorKey, colors } from '@/types/theme/color';
import styles from './Title.module.scss';

// TODO: Body처럼 확장
type BodyProps = {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  color?: ColorKey;
  children: React.ReactNode;
};

export default function Title({ size = 'm', color = 'black', children }: BodyProps) {
  return (
    <span className={`${styles.title} ${styles[size]}`} style={{ color: `var(${colors[color]})` }}>
      {children}
    </span>
  );
}
