import styles from './ContactInfo.module.css';

export function ContactInfo() {
  return (
    <div className={styles.info}>
      <h3 className={styles.heading}>Let&apos;s work together</h3>
      <p className={styles.text}>
        I&apos;m currently available for freelance projects and full-time positions.
        Feel free to reach out!
      </p>
      <ul className={styles.links}>
        <li>
          <a href="mailto:your@email.com" className={styles.link}>
            your@email.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/yourname"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}
