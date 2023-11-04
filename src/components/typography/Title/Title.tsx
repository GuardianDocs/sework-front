import styles from './Title.module.scss';

type BodyProps = {
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  children: React.ReactNode;
};

export default function Title({ size = 'm', children }: BodyProps) {
  return <h1 className={`${styles.title} ${styles[size]}`}>{children}</h1>;
}
