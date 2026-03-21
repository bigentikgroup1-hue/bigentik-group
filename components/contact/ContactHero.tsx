import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export const ContactHero = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-end">
        <div>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-4 block">
            {t('contact.hero.subtitle')}
          </span>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            {t('contact.hero.title')}
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
            {t('contact.hero.description')}
          </p>
        </div>
        <div className="hidden lg:block pb-4">
          <div className="h-px bg-outline-variant/30 w-full"></div>
        </div>
      </div>
    </section>
  );
};
