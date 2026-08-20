"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import esDict from '@/locales/es.json';
import enDict from '@/locales/en.json';
import frDict from '@/locales/fr.json';

const dictionaries = {
  es: esDict.not_found,
  en: enDict.not_found,
  fr: frDict.not_found,
};

export default function NotFound() {
  const pathname = usePathname();
  const segment = pathname.split('/')[1];
  const locale = (segment === 'en' || segment === 'fr' || segment === 'es') ? segment : 'es';
  const t = dictionaries[locale];

  return (
    <main className="bg-background min-h-screen pt-28 md:pt-36 pb-24 px-6 md:px-12 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Decorative ambient background blur & architectural glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-coffee-intense/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#d5ec96]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full text-center z-10">
        {/* Big Stylized 404 Watermark Heading */}
        <div className="relative mb-6">
          <span className="text-[100px] sm:text-[140px] md:text-[180px] font-black leading-none font-headline text-coffee-intense/15 select-none tracking-tighter block">
            {t.code}
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-headline tracking-tight text-coffee-intense leading-tight">
              {t.title_1} <span className="italic font-normal">{t.title_2}</span>
            </h1>
          </div>
        </div>

        {/* Editorial Subtitle & Description */}
        <p className="text-coffee-soft text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-body">
          {t.description}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href={`/${locale}`}
            className="w-full sm:w-auto editorial-gradient text-bone-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full shadow-lg shadow-coffee-intense/20 hover:shadow-coffee-intense/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
          >
            {t.home_btn}
          </Link>

          <Link
            href={`/${locale}/projects`}
            className="w-full sm:w-auto bg-surface-container-high/60 hover:bg-surface-container-high text-coffee-medium border border-coffee-intense/20 font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all flex items-center justify-center"
          >
            {t.projects_btn}
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="w-full sm:w-auto text-coffee-soft hover:text-coffee-intense font-semibold text-xs uppercase tracking-[0.2em] px-6 py-4 transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-lg">mail</span>
            {t.contact_btn}
          </Link>
        </div>
      </div>
    </main>
  );
}
