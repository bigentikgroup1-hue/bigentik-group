"use client";

import React from 'react';
import { useTranslation } from '@/components/providers/TranslationProvider';

export const ProjectsHero = () => {
  const t = useTranslation();
  return (
    <>
      {/* Hero Portfolio Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-xs font-label uppercase tracking-[0.3em] text-primary mb-6 block">
              {t('projects.hero.subtitle')}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8">
              {t('projects.hero.title_1')} <br />
              <span className="italic font-normal">{t('projects.hero.title_2')}</span> {t('projects.hero.title_3')}
            </h1>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-on-surface-variant font-body leading-relaxed max-w-sm">
              {t('projects.hero.location')}
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-outline-variant/20 pb-8">
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-on-surface text-surface text-xs font-label uppercase tracking-widest transition-all">
              {t('projects.filters.all')}
            </button>
            <button className="px-8 py-3 bg-surface-container text-on-surface text-xs font-label uppercase tracking-widest hover:bg-surface-container-high transition-all">
              {t('projects.filters.available')}
            </button>
            <button className="px-8 py-3 bg-surface-container text-on-surface text-xs font-label uppercase tracking-widest hover:bg-surface-container-high transition-all">
              {t('projects.filters.construction')}
            </button>
            <button className="px-8 py-3 bg-surface-container text-on-surface text-xs font-label uppercase tracking-widest hover:bg-surface-container-high transition-all">
              {t('projects.filters.sold')}
            </button>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-xl" data-icon="filter_list">
              filter_list
            </span>
            <span className="text-xs font-label uppercase tracking-widest">
              {t('projects.filters.filter_region')}
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
