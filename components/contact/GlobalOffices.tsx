import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export const GlobalOffices = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="bg-surface-container-low py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl mb-4">{t('contact.offices.subtitle')}</h2>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
            {t('contact.offices.description')}
          </p>
        </div>
        <div className="w-full aspect-square md:aspect-[21/9] min-h-[500px] bg-surface-variant relative overflow-hidden rounded-xl shadow-xl">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.32128690178553!2d-69.53886823319844!3d19.31970471229724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaefbfdffc17ddd%3A0xdc95914da0201e79!2sBigentik%20Group!5e0!3m2!1sen!2sdo!4v1774311995887!5m2!1sen!2sdo" 
            className="w-full h-full border-0" 
            loading="lazy"
            allowFullScreen={false}
          ></iframe>
          <div className="absolute inset-0 pointer-events-none bg-primary/5"></div>
        </div>
      </div>
    </section>
  );
};
