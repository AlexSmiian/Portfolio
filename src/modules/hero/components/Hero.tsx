'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { HeroStatic } from './HeroStatic';

const HeroAnimated = dynamic(
  () => import('./HeroAnimated').then((m) => ({ default: m.HeroAnimated })),
  { ssr: false },
);

export function Hero() {
  // null = not yet determined (SSR + first paint → always show static)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // SSR and mobile: static version — zero JS animations, great LCP
  if (!isDesktop) return <HeroStatic />;

  return <HeroAnimated />;
}
