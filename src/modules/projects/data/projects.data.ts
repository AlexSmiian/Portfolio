import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    slug: 'neumorphic-dashboard',
    title: 'Neumorphic Dashboard',
    description:
      'A modern analytics dashboard built with neumorphic design principles — soft shadows, clean UI, real-time data visualization.',
    overview:
      'A full-featured analytics dashboard that combines neumorphic aesthetics with powerful data visualization. Built with React and Chart.js, it supports real-time updates, customizable widgets, and a fully responsive layout that adapts seamlessly across all devices.',
    tags: ['Next.js', 'TypeScript', 'CSS Modules', 'Chart.js'],
    features: [
      'Real-time data updates via WebSocket',
      'Customizable widget layout with drag-and-drop',
      'Neumorphic design system with light/dark mode',
      'Responsive across mobile, tablet, and desktop',
      'Accessible — meets WCAG 2.1 AA standards',
    ],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/alex/neumorphic-dashboard',
    featured: true,
  },
  {
    id: 'project-2',
    slug: 'dev-portfolio-builder',
    title: 'Dev Portfolio Builder',
    description:
      'A drag-and-drop portfolio generator for developers. Choose templates, fill in your details, and export a ready-to-deploy Next.js site.',
    overview:
      'A no-code portfolio generator that lets developers create stunning portfolios in minutes. Users select from multiple themes, fill in their information through an intuitive form interface, and get a production-ready Next.js codebase they can deploy to Vercel with one click.',
    tags: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    features: [
      'Drag-and-drop section reordering',
      'Live preview as you edit',
      'Export to deployable Next.js project',
      'Multiple neumorphic themes',
      'GitHub integration to auto-import projects',
    ],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/alex/portfolio-builder',
    featured: true,
  },
  {
    id: 'project-3',
    slug: 'motion-ui-kit',
    title: 'Motion UI Kit',
    description:
      'An open-source React component library with Framer Motion animations baked in — 30+ accessible components, zero config.',
    overview:
      'Motion UI Kit is an open-source component library built on Framer Motion and Radix UI primitives. Every component ships with carefully crafted animations, full accessibility support, and a neumorphic design variant. Zero runtime dependencies beyond React and Framer Motion.',
    tags: ['React', 'Framer Motion', 'TypeScript', 'Radix UI'],
    features: [
      '30+ animated, accessible components',
      'Neumorphic design variant out of the box',
      'Tree-shakeable — import only what you use',
      'Full TypeScript support with strict types',
      'Comprehensive Storybook documentation',
    ],
    repoUrl: 'https://github.com/alex/motion-ui-kit',
    featured: false,
  },
];
