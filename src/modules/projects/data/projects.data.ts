import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    slug: 'customDropdown',
    title: 'Custom Dropdown',
    description:
      'A generic, reusable React dropdown component with built-in search, async filtering, and full keyboard accessibility.',
    overview:
      'A fully-featured custom dropdown built with React 19 and TypeScript. The component is generic — it works with plain strings, objects, or any custom shape via renderOption/renderSelected props. Supports debounced local search, async onSearch override, multi-dropdown coordination through custom DOM events, outside-click detection, and complete ARIA markup.',
    tags: ['React', 'TypeScript', 'Vite', 'CSS Modules'],
    features: [
      'Generic <T> API — works with strings, objects, or any custom shape',
      'Built-in debounced search with async onSearch override',
      'Multi-dropdown coordination without shared state or context',
      'Keyboard accessible — Enter to select, Escape to close',
      'Full ARIA support: role="listbox", aria-expanded, aria-selected',
    ],
    screenshots: [
      '/images/projects/customDropdown/item-4.webp',
      '/images/projects/customDropdown/item-3.webp',
      '/images/projects/customDropdown/item-2.webp',
      '/images/projects/customDropdown/item-1.webp',
    ],
    poster: '/images/projects/customDropdown/item-1.webp',
    liveUrl: 'https://alexsmiian.github.io/CustomDropdown/',
    repoUrl: 'https://github.com/AlexSmiian/CustomDropdown/tree/master/CustomDropdown',
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
