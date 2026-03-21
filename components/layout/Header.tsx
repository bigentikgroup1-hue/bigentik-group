"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@/components/providers/TranslationProvider';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';

export function Header() {
  const pathname = usePathname();
  const t = useTranslation();

  const currentLocale = pathname.split('/')[1] || 'es';

  const getLinkClass = (path: string) => {
    // Exact match for localized path
    const localizedPath = path === '/' ? `/${currentLocale}` : `/${currentLocale}${path}`;
    const isActive = pathname === localizedPath || pathname === path;

    return `text-[10px] uppercase tracking-[0.2em] transition-colors ${isActive
      ? "text-primary font-bold"
      : "text-on-surface/80 hover:text-primary font-semibold"
      }`;
  };

  const getLocalizedLink = (path: string) => {
    return path === '/' ? `/${currentLocale}` : `/${currentLocale}${path}`;
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-nav rounded-full px-6 md:px-10 py-3.5 flex items-center justify-between shadow-2xl border border-white/30 backdrop-blur-xl">
        <div className="flex items-center gap-12">
          <Link href={getLocalizedLink('/')}>
            <span className="font-headline text-2xl font-bold tracking-tight text-primary">{t('header.logo')}</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link className={getLinkClass('/')} href={getLocalizedLink('/')}>{t('header.nav.home')}</Link>
            <Link className={getLinkClass('/projects')} href={getLocalizedLink('/projects')}>{t('header.nav.projects')}</Link>
            <Link className={getLinkClass('/about')} href={getLocalizedLink('/about')}>{t('header.nav.about')}</Link>
            <Link className={getLinkClass('/contact')} href={getLocalizedLink('/contact')}>{t('header.nav.contact')}</Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <LanguageSwitcher />
          <div className="hidden md:flex items-center gap-4">
            <button className="rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/80 bg-surface/50 hover:bg-surface border border-outline-variant/30 transition-all">{t('header.buttons.whatsapp')}</button>
            <button className="editorial-gradient rounded-full px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary shadow-lg hover:opacity-90 transition-all">{t('header.buttons.cta')}</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
