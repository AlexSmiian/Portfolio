'use client';

import { m, type Variants } from 'framer-motion';
import { SectionTitle } from '@/shared/ui';
import { SKILLS } from '../../data/skills.data';
import type { SkillCategory } from '../../types';
import { SkillCard } from '../SkillCard/SkillCard';
import styles from './SkillsSection.module.css';

const CATEGORIES: SkillCategory[] = ['Languages', 'Frameworks', 'Tools'];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function SkillsSection() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <SectionTitle title="Skills" subtitle="Technologies I work with every day" />

        {CATEGORIES.map((category) => {
          const categorySkills = SKILLS.filter((s) => s.category === category);
          return (
            <div key={category} className={styles.categoryBlock}>
              <m.h3
                className={styles.categoryLabel}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {category}
              </m.h3>

              <m.div
                className={styles.grid}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </m.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
