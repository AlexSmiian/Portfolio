'use client';

import { useState } from 'react';
import type { ContactFormData } from '../types';
import { sendEmail } from '../actions/sendEmail';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

type Errors = Partial<Record<keyof ContactFormData, string>>;

function validate(form: ContactFormData): Errors {
  const errors: Errors = {};

  if (!form.name.trim()) {
    errors.name = 'Name is required.';
  } else if (form.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email.';
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required.';
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }

  return errors;
}

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormData, boolean>>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: validate({ ...form, [name]: value })[name as keyof ContactFormData] }));
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(form)[name as keyof ContactFormData] }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors = validate(form);
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(newErrors).length > 0) return;

    setStatus('loading');
    try {
      await sendEmail(form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTouched({});
    } catch {
      setStatus('error');
    }
  }

  return { form, status, errors, handleChange, handleBlur, handleSubmit };
}
