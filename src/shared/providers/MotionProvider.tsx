'use client';

import { LazyMotion } from 'framer-motion';

// Async import keeps the animation features out of the critical bundle
const loadFeatures = () =>
  import('@/shared/lib/motionFeatures').then((mod) => mod.default);

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
