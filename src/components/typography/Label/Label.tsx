import styles from './Label.module.scss';

type BodyProps = {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  children: React.ReactNode;
};

export default function Label({ size = 'm', children }: BodyProps) {
  return <p className={`${styles.label} ${styles[size]}`}>{children}</p>;
}
