import { Button } from '@/shared/ui';
import styles from './Hero.module.css';

export function HeroStatic() {
  return (
    <section className={`${styles.section} ${styles.sectionStatic}`} id="hero">
      <div className={styles.inner}>
        <span className={styles.greeting}>Welcome to my portfolio</span>

        <h1 className={styles.heading}>
          Hi, I&apos;m Alex
        </h1>

        <p className={styles.subtitle}>Frontend Developer</p>

        <p className={styles.bio}>
          I build fast, accessible, and visually polished web experiences with a focus on clean
          code, great UX, and pixel-perfect design.
        </p>

        <div className={styles.actions}>
          <Button variant="primary" size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="secondary" size="lg">
            <a href="/cv.pdf" download>Download CV</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
