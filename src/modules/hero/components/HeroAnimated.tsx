'use client';

import { m } from 'framer-motion';
import { Button } from '@/shared/ui';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export function HeroAnimated() {
  return (
    <section className={styles.section} id="hero">
      {/* Blobs: pure CSS animations — zero JS cost */}
      <div className={styles.blobs} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={`${styles.blob} ${styles.blob4}`} />
      </div>

      {/* Content — heading is always visible for LCP */}
      <m.div
        className={styles.inner}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <m.span className={styles.greeting} variants={itemVariants}>
          Welcome to my portfolio
        </m.span>

        {/* Heading rendered immediately — never cleared — so LCP = FCP */}
        <h1 className={styles.heading}>
          Hi, I&apos;m Alex
          <span className={`${styles.cursor} ${styles.cursorBlink}`} aria-hidden="true">
            |
          </span>
        </h1>

        <m.p className={styles.subtitle} variants={itemVariants}>
          Frontend Developer
        </m.p>

        <m.p className={styles.bio} variants={itemVariants}>
          I build fast, accessible, and visually polished web experiences with a focus on clean
          code, great UX, and pixel-perfect design.
        </m.p>

        <m.div className={styles.actions} variants={itemVariants}>
          <Button variant="primary" size="lg" href="#projects">
            View Projects
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="/cv/CV_Front-end-developer_Smiian_Oleksandr.pdf"
            download
          >
            Download CV
          </Button>
        </m.div>
      </m.div>

      {/* Scroll indicator */}
      <m.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-hidden="true"
      >
        <span className={styles.scrollLabel}>Scroll</span>
        <div className={styles.scrollTrack}>
          <div className={styles.scrollDot} />
        </div>
      </m.div>
    </section>
  );
}
