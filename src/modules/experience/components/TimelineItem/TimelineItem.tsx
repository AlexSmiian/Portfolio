import { Tag } from '@/shared/ui';
import type { ExperienceItem } from '../../types';
import styles from './TimelineItem.module.css';

type TimelineItemProps = {
  item: ExperienceItem;
};

export function TimelineItem({ item }: TimelineItemProps) {
  return (
    <div className={styles.item}>
      <div className={styles.dot} />
      <div className={styles.content}>
        <span className={styles.period}>{item.period}</span>
        <h3 className={styles.position}>{item.position}</h3>
        <span className={styles.company}>{item.company}</span>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.tags}>
          {item.technologies.map((tech) => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
