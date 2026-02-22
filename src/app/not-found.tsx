import Link from 'next/link';
import { Button } from '@/shared/ui';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/">
        <Button variant="primary" size="lg">Back to Home</Button>
      </Link>
    </div>
  );
}
