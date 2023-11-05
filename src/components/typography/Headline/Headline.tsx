import { ColorKey, colors } from '@/types/theme/color';
import styles from './Headline.module.scss';

type HeadlineProps = {
  size?: 's' | 'm' | 'l' | 'xl';
  color?: ColorKey;
  children: React.ReactNode;
};

export default function Headline({ size = 'm', color = 'black', children }: HeadlineProps) {
  return (
    <span className={`${styles.headline} ${styles[size]}`} style={{ color: `var(${colors[color]})` }}>
      {children}
    </span>
  );
}
