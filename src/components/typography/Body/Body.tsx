import { ColorKey, colors } from '@/types/theme/color';
import styles from './Body.module.scss';

type BodyProps = {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  color?: ColorKey;
  children: React.ReactNode;
};

export default function Body({ size = 'm', color = 'black', children }: BodyProps) {
  return (
    <p className={`${styles.body} ${styles[size]}`} style={{ color: `var(${colors[color]})` }}>
      {children}
    </p>
  );
}
