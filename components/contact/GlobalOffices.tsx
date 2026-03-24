import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';
import Image from 'next/image';

export const GlobalOffices = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="bg-surface-container-low py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl mb-4">{t('contact.offices.subtitle')}</h2>
          <p className="font-body text-on-surface-variant max-w-xl">
            {t('contact.offices.description')}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 aspect-[21/9] bg-surface-variant relative overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.32128690178553!2d-69.53886823319844!3d19.31970471229724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaefbfdffc17ddd%3A0xdc95914da0201e79!2sBigentik%20Group!5e0!3m2!1sen!2sdo!4v1774311995887!5m2!1sen!2sdo" width="100%" height="100%" loading="lazy"></iframe>
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
