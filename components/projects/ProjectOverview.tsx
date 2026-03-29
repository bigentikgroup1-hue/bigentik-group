import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export interface ProjectSpecs {
  price?: string;
  rooms?: string;
  completion: string;
  units: string;
  location: string;
}

export interface ProjectOverviewProps {
  pullQuote: string;
  paragraphs: string[];
  specs: ProjectSpecs;
  locale: string;
}

export const ProjectOverview = async ({ pullQuote, paragraphs, specs, locale }: ProjectOverviewProps) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="md:col-span-7">
          <span className="font-label uppercase tracking-widest text-primary mb-6 block">
            {t('projects.overview.title')}
          </span>
          <div className="border-l-4 border-primary pl-8 mb-12">
            <blockquote className="font-headline text-2xl italic text-on-surface-variant leading-relaxed">
              &quot;{pullQuote}&quot;
            </blockquote>
          </div>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 h-fit bg-surface p-12 shadow-sm">
          <h3 className="font-headline text-2xl mb-8">{t('projects.overview.specs_title')}</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">{t('projects.overview.price')}</span>
              <span className="font-body text-lg">{specs.price}</span>
            </li>
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">{t('projects.overview.completion')}</span>
              <span className="font-body text-lg">{specs.completion}</span>
            </li>
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">{t('projects.overview.units')}</span>
              <span className="font-body text-lg">{specs.units}</span>
            </li>
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">{t('projects.overview.rooms')}</span>
              <span className="font-body text-lg">{specs.rooms}</span>
            </li>
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">{t('projects.overview.location')}</span>
              <span className="font-body text-lg">{specs.location}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
