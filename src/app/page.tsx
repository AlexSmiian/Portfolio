import dynamic from 'next/dynamic';
import { Hero } from '@/modules/hero';

const About = dynamic(() =>
  import('@/modules/about').then((m) => ({ default: m.About })),
);

const SkillsSection = dynamic(() =>
  import('@/modules/skills').then((m) => ({ default: m.SkillsSection })),
);

const ProjectsSection = dynamic(() =>
  import('@/modules/projects').then((m) => ({ default: m.ProjectsSection })),
);

const ContactForm = dynamic(() =>
  import('@/modules/contact').then((m) => ({ default: m.ContactForm })),
);

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactForm />
    </>
  );
}
