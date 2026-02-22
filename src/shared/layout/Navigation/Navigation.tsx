'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { m, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from './navigation.data';
import styles from './Navigation.module.css';

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const mobileMenuVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95, y: -10 },
  };

  return (
    <nav className={styles.nav}>
      {/* Desktop links */}
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.replace('#', '');
          return (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${styles.link} ${isActive ? styles.linkActive : ''}`}
              >
                {item.label}
                {isActive && (
                  <m.span
                    className={styles.linkDot}
                    layoutId="activeNavDot"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Theme toggle */}
      {mounted && (
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <m.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </m.div>
        </button>
      )}

      {/* Hamburger */}
      <button
        className={styles.burger}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <m.span
          animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25 }}
        />
        <m.span
          animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        />
        <m.span
          animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.25 }}
        />
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <m.ul
            className={styles.mobileList}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            {NAV_ITEMS.map((item, i) => (
              <m.li
                key={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <a
                  href={item.href}
                  className={`${styles.mobileLink} ${activeSection === item.href.replace('#', '') ? styles.mobileLinkActive : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </m.li>
            ))}
            {mounted && (
              <m.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.06 }}
              >
                <button className={styles.mobileThemeToggle} onClick={toggleTheme}>
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                </button>
              </m.li>
            )}
          </m.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
