import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export const InvestmentBenefits = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-7xl mb-24">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">{t('home.investment.subtitle')}</span>
          <h2 className="font-headline text-3xl mt-4 leading-tight">{t('home.investment.title')}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="h-1 w-12 bg-primary"></div>
            <h3 className="font-headline text-2xl">{t('home.investment.cards.0.title')}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {t('home.investment.cards.0.description')}
            </p>
          </div>
          <div className="space-y-6">
            <div className="h-1 w-12 bg-primary"></div>
            <h3 className="font-headline text-2xl">{t('home.investment.cards.1.title')}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {t('home.investment.cards.1.description')}
            </p>
          </div>
          <div className="space-y-6">
            <div className="h-1 w-12 bg-primary"></div>
            <h3 className="font-headline text-2xl">{t('home.investment.cards.2.title')}</h3>
            <p className="text-on-surface-variant leading-relaxed">
              {t('home.investment.cards.2.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
