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
          <a href="mailto:smiyanaleksandr@gmail.com" className={styles.link}>
            smiyanaleksandr@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AlexSmiian"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/oleksandr-smiian-a1a2031a8"
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
