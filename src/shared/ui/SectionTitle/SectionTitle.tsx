'use client';

import { m } from 'framer-motion';
import styles from './SectionTitle.module.css';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <m.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </m.div>
  );
}
