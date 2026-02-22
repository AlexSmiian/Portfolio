'use client';

import { useEffect, useRef, useState } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/shared/ui';
import styles from './Hero.module.css';

const TYPEWRITER_TEXT = "Hi, I'm Alex";
const TYPEWRITER_SPEED = 80;

function useTypewriter(text: string, speed: number) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplay(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { display, done };
}

export function HeroAnimated() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const { display, done } = useTypewriter(TYPEWRITER_TEXT, TYPEWRITER_SPEED);

  return (
    <section className={styles.section} id="hero" ref={ref}>
      {/* Blobs: pure CSS animations — zero JS cost */}
      <div className={styles.blobs} aria-hidden="true">
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className={`${styles.blob} ${styles.blob4}`} />
      </div>

      {/* Content */}
      <m.div className={styles.inner} style={{ y: contentY }}>
        <m.span
          className={styles.greeting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Welcome to my portfolio
        </m.span>

        <h1 className={styles.heading}>
          {display}
          <span
            className={`${styles.cursor} ${done ? styles.cursorBlink : ''}`}
            aria-hidden="true"
          >
            |
          </span>
        </h1>

        <m.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          Frontend Developer
        </m.p>

        <m.p
          className={styles.bio}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          I build fast, accessible, and visually polished web experiences with a focus on clean
          code, great UX, and pixel-perfect design.
        </m.p>

        <m.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="secondary" size="lg">
            <a href="/cv.pdf" download>Download CV</a>
          </Button>
        </m.div>
      </m.div>

      {/* Scroll indicator */}
      <m.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
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
