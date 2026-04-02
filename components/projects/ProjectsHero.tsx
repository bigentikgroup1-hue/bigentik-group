"use client";

import React from 'react';
import type { Dictionary } from '@/lib/i18n';
import Link from 'next/link';

export const ProjectsHero = ({ dict, currentFilter = 'all' }: { dict: Dictionary, currentFilter?: string }) => {
  const getFilterClass = (filter: string) => {
    return currentFilter === filter
      ? "px-8 py-3 bg-on-surface text-surface text-xs font-label uppercase tracking-widest transition-all"
      : "px-8 py-3 bg-surface-container text-on-surface text-xs font-label uppercase tracking-widest hover:bg-surface-container-high transition-all";
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-xs font-label uppercase tracking-[0.3em] text-primary mb-6 block">
              {dict.projects.hero.subtitle}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8">
              {dict.projects.hero.title_1} <br />
              <span className="italic font-normal">{dict.projects.hero.title_2}</span> {dict.projects.hero.title_3}
            </h1>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-on-surface-variant font-body leading-relaxed max-w-sm">
              {dict.projects.hero.location}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-outline-variant/20 pb-8">
          <div className="flex flex-wrap gap-4">
            <Link href="?filter=all" className={getFilterClass('all')}>
              {dict.projects.filters.all}
            </Link>
            <Link href="?filter=construction" className={getFilterClass('construction')}>
              {dict.projects.filters.construction}
            </Link>
            <Link href="?filter=sold" className={getFilterClass('sold')}>
              {dict.projects.filters.sold}
            </Link>
            <Link href="?filter=preSale" className={getFilterClass('preSale')}>
              {dict.projects.filters.preSale}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

