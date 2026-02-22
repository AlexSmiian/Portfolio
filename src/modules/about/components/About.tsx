'use client';

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '@/shared/ui';
import styles from './About.module.css';

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub', icon: <GitHubIcon /> },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: <LinkedInIcon /> },
  { href: 'https://t.me', label: 'Telegram', icon: <TelegramIcon /> },
];

export function About() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <SectionTitle title="About Me" subtitle="A little bit about who I am" />

        <div className={styles.grid}>
          {/* Photo — left */}
          <div className={styles.imageWrap} ref={imageRef}>
            <m.div className={styles.imageCard} style={{ y: imageY }}>
              <div className={styles.imagePlaceholder} aria-label="Profile photo">
                <span className={styles.imagePlaceholderIcon}>👨‍💻</span>
              </div>
            </m.div>

            <div className={styles.socials}>
              {socialLinks.map((link) => (
                <m.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.94 }}
                >
                  {link.icon}
                </m.a>
              ))}
            </div>
          </div>

          {/* Text — right */}
          <m.div
            className={styles.text}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p>
              Hey there! I&apos;m <strong>Alex</strong>, a passionate Frontend Developer with a
              love for building clean, performant web applications that users enjoy using.
            </p>
            <p>
              I specialize in <strong>React</strong> and <strong>Next.js</strong>, always keeping
              accessibility, performance, and developer experience at the forefront of everything I
              build.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
              to open source, or experimenting with UI/UX design patterns. I believe great software
              is built at the intersection of solid engineering and thoughtful design.
            </p>

            <div className={styles.stats}>
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '20+', label: 'Projects Shipped' },
                { value: '∞', label: 'Coffees Consumed' },
              ].map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
