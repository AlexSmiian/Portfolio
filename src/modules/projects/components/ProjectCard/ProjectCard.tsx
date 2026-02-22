'use client';

import Link from 'next/link';
import { m, type Variants } from 'framer-motion';
import { Tag } from '@/shared/ui';
import { Button } from '@/shared/ui';
import type { Project } from '../../types';
import styles from './ProjectCard.module.css';

type ProjectCardProps = {
  project: Project;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <m.article
      className={styles.card}
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    >
      {/* Thumbnail placeholder */}
      <div className={styles.thumbnail} aria-hidden="true">
        <span className={styles.thumbnailIcon}>💻</span>
        {project.featured && <span className={styles.featuredBadge}>Featured</span>}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className={styles.footer}>
          <Link href={`/projects/${project.slug}`} className={styles.detailsLink}>
            <Button variant="primary" size="sm">View Details →</Button>
          </Link>

          <div className={styles.externalLinks}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
                aria-label="Live demo"
              >
                Live ↗
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.externalLink}
                aria-label="GitHub repository"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </m.article>
  );
}
