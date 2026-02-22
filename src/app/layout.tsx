import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/shared/providers/ThemeProvider';
import { MotionProvider } from '@/shared/providers/MotionProvider';
import { Header } from '@/shared/layout/Header';
import { Footer } from '@/shared/layout/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Alex | Frontend Developer',
  description:
    'Portfolio of Alex — Frontend Developer specializing in React, Next.js, and TypeScript.',
  keywords: ['frontend', 'developer', 'react', 'nextjs', 'typescript', 'portfolio'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider>
          <MotionProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
