import styles from './Body.module.scss';

type BodyProps = {
  size?: 'xxs' | 'xs' | 's' | 'm' | 'l';
  children: React.ReactNode;
};

export default function Body({ size = 'm', children }: BodyProps) {
  return <p className={`${styles.body} ${styles[size]}`}>{children}</p>;
}
