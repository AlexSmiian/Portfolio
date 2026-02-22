import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} <span className={styles.name}>Alex</span>. Crafted with Next.js & Framer
          Motion.
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" className={styles.link}>
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}
