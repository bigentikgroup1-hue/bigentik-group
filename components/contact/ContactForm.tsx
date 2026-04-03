"use client";

import React from 'react';
import type { Dictionary } from '@/lib/i18n';

export const ContactForm = ({ dict }: { dict: Dictionary }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate API
    console.log("Form submitted");
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
            required
          ></textarea>
        </div>

        <button
          className="editorial-gradient signature-gradient w-full py-4 text-on-primary font-label tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
          type="submit"
        >
          {dict.contact.form.submit}
        </button>
      </form>
    </div>
  );
};
