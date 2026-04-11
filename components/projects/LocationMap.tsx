import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export const LocationMap = async ({ locale, locationLink, title, location }: { locale: string, locationLink: string, title: string, location: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <h2 className="font-headline text-3xl mb-6">{t('projects.location_map.title')}</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              {t('projects.location_map.desc')}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div>
                  <p className="font-bold">{title}</p>
                  <p className="text-sm text-on-surface-variant">{location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 h-[500px] bg-surface-container relative overflow-hidden">
            <iframe
              src={locationLink}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen={false}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
