"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import type { Dictionary } from '@/lib/i18n';
import Image from 'next/image';

type HeaderProps = {
  dict: Dictionary;
};

export function Header({ dict }: HeaderProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-nav rounded-full px-6 md:px-10 flex items-center justify-between shadow-2xl border border-white/30 backdrop-blur-xl">
        <div className="flex items-center justify-between w-full lg:w-auto lg:gap-12">
          <Link href={getLocalizedLink('/')} onClick={closeMenu}>
            <Image
              src="/bigentik-logo.svg"
              alt="Bigentik Group Logo"
              width={80}
              height={50}
            />
          </Link>

          <button
            className="lg:hidden text-primary p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            )}
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <Link className={getLinkClass('/')} href={getLocalizedLink('/')}>{dict.header.nav.home}</Link>
            <Link className={getLinkClass('/projects')} href={getLocalizedLink('/projects')}>{dict.header.nav.projects}</Link>
            <Link className={getLinkClass('/about')} href={getLocalizedLink('/about')}>{dict.header.nav.about}</Link>
            <Link className={getLinkClass('/contact')} href={getLocalizedLink('/contact')}>{dict.header.nav.contact}</Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <LanguageSwitcher />
          <div className="hidden md:flex items-center gap-4">
            <button className="rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/80 bg-surface/50 hover:bg-surface border border-outline-variant/30 transition-all">{dict.header.buttons.whatsapp}</button>
            <button className="editorial-gradient rounded-full px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary shadow-lg hover:opacity-90 transition-all">{dict.header.buttons.cta}</button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-4 right-4 md:left-8 md:right-8 p-6 glass-nav rounded-2xl shadow-2xl border border-white/30 backdrop-blur-xl lg:hidden flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <Link className={getLinkClass('/')} href={getLocalizedLink('/')} onClick={closeMenu}>{dict.header.nav.home}</Link>
            <Link className={getLinkClass('/projects')} href={getLocalizedLink('/projects')} onClick={closeMenu}>{dict.header.nav.projects}</Link>
            <Link className={getLinkClass('/about')} href={getLocalizedLink('/about')} onClick={closeMenu}>{dict.header.nav.about}</Link>
            <Link className={getLinkClass('/contact')} href={getLocalizedLink('/contact')} onClick={closeMenu}>{dict.header.nav.contact}</Link>
          </div>

          <div className="h-px w-full bg-on-surface/10"></div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface/60 font-bold">Language</span>
              <LanguageSwitcher />
            </div>
            <button className="w-full text-center rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/80 bg-surface/50 hover:bg-surface border border-outline-variant/30 transition-all">
              {dict.header.buttons.whatsapp}
            </button>
            <button className="w-full text-center editorial-gradient rounded-full px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary shadow-lg hover:opacity-90 transition-all">
              {dict.header.buttons.cta}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
