import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export const InvestmentHighlights = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="font-headline text-4xl mb-16 text-center">{t('projects.highlights.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container p-10 group hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:text-on-primary">
            trending_up
          </span>
          <h4 className="font-headline text-xl mb-4 group-hover:text-on-primary">
            {t('projects.highlights.growth_title')}
          </h4>
          <p className="text-on-surface-variant group-hover:text-on-primary/80">
            {t('projects.highlights.growth_desc')}
          </p>
        </div>
        <div className="bg-surface-container p-10 group hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:text-on-primary">
            account_balance
          </span>
          <h4 className="font-headline text-xl mb-4 group-hover:text-on-primary">
            {t('projects.highlights.tax_title')}
          </h4>
          <p className="text-on-surface-variant group-hover:text-on-primary/80">
            {t('projects.highlights.tax_desc')}
          </p>
        </div>
        <div className="bg-surface-container p-10 group hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:text-on-primary">
            verified_user
          </span>
          <h4 className="font-headline text-xl mb-4 group-hover:text-on-primary">
            {t('projects.highlights.rental_title')}
          </h4>
          <p className="text-on-surface-variant group-hover:text-on-primary/80">
            {t('projects.highlights.rental_desc')}
          </p>
        </div>
      </div>
    </section>
  );
};
