import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export const EditorialQuote = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="bg-surface-container mt-32 py-24">
      <div className="max-w-4xl mx-auto px-6 border-l-4 border-primary pl-12">
        <blockquote className="font-headline text-3xl md:text-4xl leading-relaxed text-on-surface">
          {t('projects.quote.text')}
        </blockquote>
        <span className="block mt-8 font-label text-xs uppercase tracking-[0.3em] text-on-surface-variant">
          {t('projects.quote.author')}
        </span>
      </div>
    </section>
  );
};
