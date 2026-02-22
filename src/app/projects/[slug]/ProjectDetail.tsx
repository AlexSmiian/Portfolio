'use client';

import Link from 'next/link';
import { m } from 'framer-motion';
import { Tag, Button } from '@/shared/ui';
import type { Project } from '@/modules/projects/types';
import styles from './page.module.css';
import Image from "next/image";

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </m.div>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  const screenshots = project.screenshots ?? [];

  return (
    <m.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <FadeUp>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <Link href="/#projects" className={styles.backLink}>
              ← Back to Portfolio
            </Link>

            <div className={styles.heroThumb} aria-hidden="true">
              <Image src={project.poster} alt={``} width={320} height={170} loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" style={{ width: '100%', height: '100%', }} />
            </div>

            <h1 className={styles.heroTitle}>{project.title}</h1>
            <p className={styles.heroDescription}>{project.description}</p>

            <div className={styles.heroCtas}>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">Live Demo ↗</Button>
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg">GitHub ↗</Button>
                </a>
              )}
            </div>
          </div>
        </section>
      </FadeUp>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className={styles.content}>
        <FadeUp delay={0.1}>
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Overview</h2>
            <p className={styles.cardText}>{project.overview}</p>
          </section>
        </FadeUp>

        <FadeUp delay={0.2}>
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Technologies Used</h2>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
          </section>
        </FadeUp>

        <FadeUp delay={0.3}>
          <section className={styles.card}>
            <h2 className={styles.cardTitle}>Key Features</h2>
            <ul className={styles.featureList}>
              {project.features.map((feature) => (
                <li key={feature} className={styles.featureItem}>
                  <span className={styles.featureDot} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        </FadeUp>

        {screenshots.length > 0 && (
          <FadeUp delay={0.4}>
            <section className={styles.card}>
              <h2 className={styles.cardTitle}>Screenshots</h2>
              <div className={styles.screenshots}>
                {screenshots.map((src, i) => (
                  <div key={src} className={styles.screenshot} aria-label={`Screenshot ${i + 1}`}>
                    <Image src={src} alt={`${project.title} screenshot ${i + 1}`} width={320} height={170} loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" style={{ width: '100%', height: '100%', }} />
                  </div>
                ))}
              </div>
            </section>
          </FadeUp>
        )}

        <FadeUp delay={0.5}>
          <div className={styles.backSection}>
            <Link href="/#projects">
              <Button variant="ghost" size="lg">← Back to All Projects</Button>
            </Link>
          </div>
        </FadeUp>
      </div>
    </m.div>
  );
}
