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
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                alt="Modern architectural detail of a luxury villa entrance" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXcnUdz24a1XCD7NRmthNk2lEk7tqvS_hUTlmtbyCFYm5FJQEKEw6hZjkB1TTLvCz09wO7eaNd4Q1tUJxe-lxgGvCTkoJQ3ZgO6bcl2H2uoLhT6fl5eSqU4UJXhNN7RXHRx-T5o40eI2xkuyFDqUQBEEvKxvvHLds2VFRWirzKlnkM4j7L-CIX-I1P83f15pIzyc68M5pNX74umLLz9VHwCPdOiIdwyAqH-5dNvefhbCKGBX-AIs39uwQB-AdwRMCUJq45npuJhg"
                fill
                quality={100}
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-80 bg-primary-container p-8 hidden md:flex flex-col justify-end">
              <span className="text-on-primary-container font-headline text-4xl mb-4 italic">{t('home.value_prop.float_number')}</span>
              <p className="text-on-primary-container text-sm leading-relaxed font-medium">
                {t('home.value_prop.float_desc')}
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">{t('home.value_prop.subtitle')}</span>
            <h2 className="font-headline text-5xl leading-tight">
              {t('home.value_prop.title_1')} <br/>{t('home.value_prop.title_2')}
            </h2>
            <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
              {t('home.value_prop.description')}
            </p>
            <div className="pt-8 space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">diamond</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{t('home.value_prop.card_title')}</h4>
                  <p className="text-sm text-on-surface-variant">
                    {t('home.value_prop.card_desc')}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">eco</span>
                <div>
                  <h4 className="font-bold text-sm uppercase tracking-wider mb-1">{t('home.value_prop.card_title')}</h4>
                  <p className="text-sm text-on-surface-variant">
                    {t('home.value_prop.card_desc')}
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
