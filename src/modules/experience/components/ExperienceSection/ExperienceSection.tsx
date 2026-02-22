import { SectionTitle } from '@/shared/ui';
import { EXPERIENCE } from '../../data/experience.data';
import { TimelineItem } from '../TimelineItem/TimelineItem';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <SectionTitle title="Experience" subtitle="My professional journey" />
        <div className={styles.timeline}>
          {EXPERIENCE.map((item) => (
            <TimelineItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
