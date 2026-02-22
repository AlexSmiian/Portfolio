import { notFound } from 'next/navigation';
import { PROJECTS } from '@/modules/projects/data/projects.data';
import { ProjectDetail } from './ProjectDetail';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ProjectDetail project={project} />;
}
