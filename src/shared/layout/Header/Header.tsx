import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/#hero" className={styles.logo}>
          <span className={styles.logoAccent}>&lt;</span>
          Alex
          <span className={styles.logoAccent}>/&gt;</span>
        </a>
        <Navigation />
      </div>
    </header>
  );
}
