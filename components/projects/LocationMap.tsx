import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export const LocationMap = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4">
            <h2 className="font-headline text-4xl mb-6">{t('projects.location_map.title')}</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              {t('projects.location_map.desc')}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <div>
                  <p className="font-bold">{t('projects.location_map.district')}</p>
                  <p className="text-sm text-on-surface-variant">{t('projects.location_map.address')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8 h-[500px] bg-surface-container relative overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Stylized map of a coastal mountain region"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF9xtE9wx3cqJJNfd88hnV7uVxMowaRg_1PoErosHwUVXevTvKOndVCWjb4BIjXwr4GsaktiyCTWrTMT1dHo2ROiqeLf-_CeNYlAXzn4k1-Q-rj8lkO3MtQu70emuBLoe3lN6p3j-dzBkjIdOBBCEHbIPGE6MgNUZktqeEi9iOHqBVav3LA4y__6T1W_7-6ZB2zFjGU9Ka_Yo5wfELSy0sEVoFJVrR7J4dDiQF91DaOjT2EnklPWEyhZdAa7ilC_P--8vNaU5mmg"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-pulse">
                <span className="material-symbols-outlined text-white">apartment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
