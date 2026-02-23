import type { Skill } from '../types';

export const SKILLS: Skill[] = [
  // Languages
  { name: 'JavaScript', category: 'Languages', level: 5, icon: '/images/skills/javascript.svg' },
  { name: 'TypeScript', category: 'Languages', level: 4, icon: '/images/skills/ts.svg' },
  { name: 'PhP', category: 'Languages', level: 2, icon: '/images/skills/php.svg' },
  { name: 'HTML', category: 'Languages', level: 5, icon: '/images/skills/html.svg' },
  { name: 'CSS', category: 'Languages', level: 5, icon: '/images/skills/css.svg' },

  // Frameworks
  { name: 'React', category: 'Frameworks', level: 5, icon: '/images/skills/react.svg' },
  { name: 'Next.js', category: 'Frameworks', level: 4, icon: '/images/skills/next.svg' },
  { name: 'Node.js', category: 'Frameworks', level: 3, icon: '/images/skills/node.svg' },

  // Tools
  { name: 'Git', category: 'Tools', level: 4, icon: '/images/skills/git.svg' },
  { name: 'Figma', category: 'Tools', level: 3, icon: '/images/skills/figma.svg' },
  { name: 'Webpack', category: 'Tools', level: 3, icon: '/images/skills/webpack.svg' },
  { name: 'Docker', category: 'Tools', level: 2, icon: '/images/skills/docker.svg' },
  { name: 'WordPress', category: 'Tools', level: 3, icon: '/images/skills/wordpress.svg' },
];
