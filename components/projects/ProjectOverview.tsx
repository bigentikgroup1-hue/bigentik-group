import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export interface ProjectSpecs {
  price?: string;
  rooms?: string;
  completion: string;
  units: string;
  location: string;
  amenities?: string;
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
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="md:col-span-7">
          <span className="font-label uppercase tracking-widest text-primary mb-18 block">
            {t('projects.overview.title')}
          </span>
          <div className="border-l-4 border-primary pl-8 mb-12">
            <blockquote className="font-headline text-md text-on-surface-variant leading-relaxed whitespace-pre-line">
              &quot;{pullQuote}&quot;
            </blockquote>
          </div>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 md:col-start-9 h-fit bg-surface p-8 shadow-sm">
          <h3 className="font-headline text-xl mb-8">{t('projects.overview.specs_title')}</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-start border-b border-outline-variant/30 pb-4">
              <span className="font-label uppercase text-[10px] tracking-widest text-outline pt-1">{t('projects.overview.price')}</span>
              <span className="font-body text-sm md:text-base text-right">{specs.price}</span>
            </li>
            <li className="flex justify-between items-start border-b border-outline-variant/30 pb-4">
              <span className="font-label uppercase text-[10px] tracking-widest text-outline pt-1">{t('projects.overview.completion')}</span>
              <span className="font-body text-sm md:text-base text-right">{specs.completion}</span>
            </li>
            <li className="flex justify-between items-start border-b border-outline-variant/30 pb-4">
              <span className="font-label uppercase text-[10px] tracking-widest text-outline pt-1">{t('projects.overview.units')}</span>
              <span className="font-body text-sm md:text-base text-right">{specs.units}</span>
            </li>
            <li className="flex justify-between items-start border-b border-outline-variant/30 pb-4">
              <span className="font-label uppercase text-[10px] tracking-widest text-outline pt-1">{t('projects.overview.rooms')}</span>
              <span className="font-body text-sm md:text-base text-right">{specs.rooms}</span>
            </li>
            <li className="flex justify-between items-start border-b border-outline-variant/30 pb-4">
              <span className="font-label uppercase text-[10px] tracking-widest text-outline pt-1">{t('projects.overview.location')}</span>
              <span className="font-body text-sm md:text-base text-right max-w-[60%]">{specs.location}</span>
            </li>
            {specs.amenities && (
              <li className="flex justify-between items-start border-b border-outline-variant/30 pb-4">
                <span className="font-label uppercase text-[10px] tracking-widest text-outline pt-1">{t('projects.overview.amenities')}</span>
                <span className="font-body text-sm md:text-base text-right max-w-[65%] whitespace-pre-line">{specs.amenities}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};
