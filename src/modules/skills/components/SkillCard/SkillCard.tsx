'use client';

import { m, type Variants } from 'framer-motion';
import type { Skill } from '../../types';
import styles from './SkillCard.module.css';
import Image from "next/image";

type SkillCardProps = {
  skill: Skill;
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const LEVEL_LABELS: Record<number, string> = {
  1: 'Beginner',
  2: 'Basic',
  3: 'Intermediate',
  4: 'Advanced',
  5: 'Expert',
};

export function SkillCard({ skill }: SkillCardProps) {
  const pct = (skill.level / 5) * 100;

  return (
    <m.div
      className={styles.card}
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      <div className={styles.header}>
        <Image src={skill.icon} alt={skill.name} width={24} height={24} loading="lazy" />
        {/*<span className={styles.icon} role="img" aria-hidden="true">*/}
        {/*  {skill.icon}*/}
        {/*</span>*/}
        <span className={styles.name}>{skill.name}</span>
        <span className={styles.levelLabel}>{LEVEL_LABELS[skill.level]}</span>
      </div>

      <div
        className={styles.barTrack}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name}: ${LEVEL_LABELS[skill.level]}`}
      >
        <m.div
          className={styles.barFill}
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        />
      </div>
    </m.div>
  );
}
