export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  overview: string;
  tags: string[];
  features: string[];
  imageUrl?: string;
  screenshots?: string[];
  poster: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
};
