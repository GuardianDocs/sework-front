import styles from './Headline.module.scss';

type HeadlineProps = {
  size?: 's' | 'm' | 'l' | 'xl';
  children: React.ReactNode;
};

export default function Headline({ size = 'm', children }: HeadlineProps) {
  return <h1 className={`${styles.headline} ${styles[size]}`}>{children}</h1>;
}
