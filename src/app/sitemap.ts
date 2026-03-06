import type { MetadataRoute } from 'next';

const BASE_URL = 'https://smiianoleksandr.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date('2026-01-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
