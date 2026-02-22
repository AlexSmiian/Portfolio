import type { Skill } from '../types';

export const SKILLS: Skill[] = [
  // Languages
  { name: 'HTML', category: 'Languages', level: 5, icon: '🌐' },
  { name: 'CSS', category: 'Languages', level: 5, icon: '🎨' },
  { name: 'JavaScript', category: 'Languages', level: 5, icon: '⚡' },
  { name: 'TypeScript', category: 'Languages', level: 4, icon: '📘' },

  // Frameworks
  { name: 'React', category: 'Frameworks', level: 5, icon: '⚛️' },
  { name: 'Next.js', category: 'Frameworks', level: 4, icon: '▲' },
  { name: 'Framer Motion', category: 'Frameworks', level: 3, icon: '🎞️' },
  { name: 'Node.js', category: 'Frameworks', level: 3, icon: '🟢' },

  // Tools
  { name: 'Git', category: 'Tools', level: 4, icon: '🔀' },
  { name: 'Figma', category: 'Tools', level: 3, icon: '✏️' },
  { name: 'Webpack', category: 'Tools', level: 3, icon: '📦' },
  { name: 'Docker', category: 'Tools', level: 2, icon: '🐳' },
];
