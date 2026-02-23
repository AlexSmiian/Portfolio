'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: { name: string; email: string; message: string }) {
  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'smiyanaleksandr@gmail.com',
    replyTo: data.email,
    subject: `New message from ${data.name}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
  });

  if (error) throw new Error(error.message);
}