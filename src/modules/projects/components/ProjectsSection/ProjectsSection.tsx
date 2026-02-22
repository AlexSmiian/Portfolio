'use client';

import { m, type Variants } from 'framer-motion';
import { SectionTitle } from '@/shared/ui';
import { PROJECTS } from '../../data/projects.data';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import styles from './ProjectsSection.module.css';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <SectionTitle title="Projects" subtitle="Things I've built that I'm proud of" />

        <m.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </m.div>
      </div>
    </section>
  );
}
