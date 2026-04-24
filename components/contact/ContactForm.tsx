"use client";

import React from 'react';
import type { Dictionary } from '@/lib/i18n';

export const ContactForm = ({ dict }: { dict: Dictionary }) => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      interest: formData.get('interest') as string,
      message: formData.get('message') as string,
    };

    if (!data.name || !data.email || !data.interest || !data.message) {
      setStatus('error');
      setErrorMessage('Todos los campos son obligatorios.');
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Hubo un error al enviar el mensaje.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.');
    }
  };

  return (
    <div className="md:col-span-7 bg-surface-container-low p-10 lg:p-16">
      <h2 className="font-headline text-3xl mb-12">{dict.contact.form.title}</h2>
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="relative">
            <label className="font-label text-xs uppercase tracking-widest text-outline block mb-2">
              {dict.contact.form.name}
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all placeholder:text-outline-variant/60"
              placeholder={dict.contact.form.name_ph}
              type="text"
              name="name"
              required
            />
          </div>
          <div className="relative">
            <label className="font-label text-xs uppercase tracking-widest text-outline block mb-2">
              {dict.contact.form.email}
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all placeholder:text-outline-variant/60"
              placeholder={dict.contact.form.email_ph}
              type="email"
              name="email"
              required
            />
          </div>
        </div>

        <div className="relative">
          <label className="font-label text-xs uppercase tracking-widest text-outline block mb-2">
            {dict.contact.form.interest}
          </label>
          <textarea
            className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all placeholder:text-outline-variant/60 resize-none"
            placeholder={dict.contact.form.interest_ph}
            rows={1}
            name="interest"
            required
          ></textarea>
        </div>

        <div className="relative">
          <label className="font-label text-xs uppercase tracking-widest text-outline block mb-2">
            {dict.contact.form.message}
          </label>
          <textarea
            className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all placeholder:text-outline-variant/60 resize-none"
            placeholder={dict.contact.form.message_ph}
            rows={4}
            name="message"
            required
          ></textarea>
        </div>

        <button
          className="editorial-gradient signature-gradient w-full py-4 text-on-primary font-label tracking-widest uppercase text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          type="submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? '...' : dict.contact.form.submit}
        </button>

        {status === 'success' && (
          <p className="text-primary mt-4 text-sm text-center">¡Mensaje enviado con éxito!</p>
        )}
        {status === 'error' && (
          <p className="text-error mt-4 text-sm text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
};
