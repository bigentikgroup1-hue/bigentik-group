import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';
import Image from 'next/image';

export const ValueProposition = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] bg-surface-container-high overflow-hidden">
              <Image
                className="object-cover"
                alt="Modern luxury real estate construction in a Caribbean beach zone"
                src="/value-proposition.jpg"
                fill
                quality={100}
              />
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">{t('home.value_prop.subtitle')}</span>
            <h2 className="font-headline text-5xl leading-tight">
              {t('home.value_prop.title_1')} <br />{t('home.value_prop.title_2')}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
              {t('home.value_prop.description')}
            </p>
            <div className="pt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">diamond</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{t('home.value_prop.card_title1')}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                    {t('home.value_prop.card_desc1')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{t('home.value_prop.card_title2')}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                    {t('home.value_prop.card_desc2')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">attach_money</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{t('home.value_prop.card_title3')}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                    {t('home.value_prop.card_desc3')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">home_work</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{t('home.value_prop.card_title4')}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                    {t('home.value_prop.card_desc4')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
