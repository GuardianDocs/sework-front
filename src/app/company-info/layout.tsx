import { PropsWithChildren } from 'react';
import styles from './layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
	return <div className={styles.main}>{children}</div>;
}
