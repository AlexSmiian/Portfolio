'use client';

import { m, AnimatePresence } from 'framer-motion';
import { SectionTitle, Button } from '@/shared/ui';
import { useContactForm } from '../../hooks/useContactForm';
import styles from './ContactForm.module.css';
import GmailIcon from './gmail.svg';
import Github from './github.svg';
import LinkedIn from './linkedIn.svg';
import Image from "next/image";

export function ContactForm() {
  const { form, status, errors, handleChange, handleBlur, handleSubmit } = useContactForm();

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <SectionTitle title="Contact" subtitle="Let's build something great together" />

        <div className={styles.layout}>
          {/* Left: info */}
          <m.div
            className={styles.info}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={styles.infoHeading}>Let&apos;s work together</h3>
            <p className={styles.infoText}>
              I&apos;m available for freelance projects and full-time positions. Whether you have a
              question or just want to say hi, my inbox is always open!
            </p>

            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Image src={GmailIcon} alt={''} loading="lazy"  width={24} height={24} />
                <a href="mailto:smiyanaleksandr@gmail.com" className={styles.contactLink}>
                  smiyanaleksandr@gmail.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <Image src={LinkedIn} alt={''} loading="lazy"  width={24} height={24} />
                <a
                  href="https://www.linkedin.com/in/oleksandr-smiian-a1a2031a8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Linkedin
                </a>
              </li>
              <li className={styles.contactItem}>
                <Image src={Github} alt={''} loading="lazy"  width={24} height={24} />
                <a
                  href="https://github.com/AlexSmiian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  Github
                </a>
              </li>
            </ul>
          </m.div>

          {/* Right: form */}
          <m.form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Name */}
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Your name"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              <AnimatePresence>
                {errors.name && (
                  <m.span
                    id="name-error"
                    className={styles.error}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    role="alert"
                  >
                    {errors.name}
                  </m.span>
                )}
              </AnimatePresence>
            </div>

            {/* Email */}
            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                placeholder="your@email.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              <AnimatePresence>
                {errors.email && (
                  <m.span
                    id="email-error"
                    className={styles.error}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    role="alert"
                  >
                    {errors.email}
                  </m.span>
                )}
              </AnimatePresence>
            </div>

            {/* Message */}
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                placeholder="What's on your mind?"
                rows={5}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              <AnimatePresence>
                {errors.message && (
                  <m.span
                    id="message-error"
                    className={styles.error}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.2 }}
                    role="alert"
                  >
                    {errors.message}
                  </m.span>
                )}
              </AnimatePresence>
            </div>

            {/* Feedback */}
            <AnimatePresence mode="wait">
              {status === 'success' && (
                <m.div
                  className={styles.successMsg}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  key="success"
                >
                  ✅ Message sent! I&apos;ll be in touch soon.
                </m.div>
              )}
              {status === 'error' && (
                <m.div
                  className={styles.errorMsg}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  key="error"
                >
                  ❌ Something went wrong. Please try again.
                </m.div>
              )}
            </AnimatePresence>

            <Button type="submit" variant="primary" size="lg" disabled={status === 'loading'}>
              {status === 'loading' ? (
                <span className={styles.spinner} aria-label="Sending…" />
              ) : (
                'Send Message →'
              )}
            </Button>
          </m.form>
        </div>
      </div>
    </section>
  );
}
