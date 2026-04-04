"use client";
import React, { useState, useEffect } from 'react';
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

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const getLinkClass = (path: string) => {
    // Exact match for localized path
    const localizedPath = path === '/' ? `/${currentLocale}` : `/${currentLocale}${path}`;
    const isActive = pathname === localizedPath || pathname === path;

    return `text-[11px] uppercase tracking-[0.2em] transition-colors w-full inline-block py-2 ${isActive
      ? "text-primary font-bold"
      : "text-on-surface/80 hover:text-primary font-semibold"
      }`;
  };

  const getLocalizedLink = (path: string) => {
    return path === '/' ? `/${currentLocale}` : `/${currentLocale}${path}`;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto glass-nav rounded-full px-6 md:px-10 h-16 md:h-20 flex items-center justify-between shadow-2xl border border-white/30 backdrop-blur-xl">
          {/* Left: Hamburger Icon */}
          <div className="flex-1 flex justify-start">
            <button
              className="text-on-surface hover:text-primary transition-colors focus:outline-none flex items-center justify-center p-2 -ml-2"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="sidebar-menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 flex justify-center">
            <Link href={getLocalizedLink('/')} onClick={closeMenu}>
              <Image
                src="/bigentik-logo.svg"
                alt="Bigentik Group Logo"
                width={90}
                height={55}
                // className="w-auto h-auto max-h-12"
                priority
              />
            </Link>
          </div>

          {/* Right: Language Switcher */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      {/* Sidebar Off-Canvas Menu */}
      <div
        id="sidebar-menu"
        className={`fixed top-0 left-0 bottom-0 w-[85vw] max-w-[400px] glass-nav z-50 transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col border-r border-white/20 backdrop-blur-3xl overflow-y-auto ${isMenuOpen ? "translate-x-0 shadow-[20px_0_40px_rgba(0,0,0,0.5)]" : "-translate-x-full shadow-none"}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-end p-8 border-b border-white/10">
          <button
            className="text-on-surface/60 hover:text-primary transition-colors focus:outline-none p-2 rounded-full hover:bg-white/10"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col flex-grow p-8 px-10 gap-8">
          <nav className="flex flex-col gap-6">
            <Link className={getLinkClass('/')} href={getLocalizedLink('/')} onClick={closeMenu}>{dict.header.nav.home}</Link>
            <Link className={getLinkClass('/projects')} href={getLocalizedLink('/projects')} onClick={closeMenu}>{dict.header.nav.projects}</Link>
            <Link className={getLinkClass('/about')} href={getLocalizedLink('/about')} onClick={closeMenu}>{dict.header.nav.about}</Link>
            <Link className={getLinkClass('/contact')} href={getLocalizedLink('/contact')} onClick={closeMenu}>{dict.header.nav.contact}</Link>
          </nav>
          <div className="flex flex-col gap-5 mt-auto pb-10">
            <div className="md:hidden flex flex-col mb-2">
              <div className="flex justify-between items-center px-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface/60 font-bold">Language / Idioma</span>
                <LanguageSwitcher />
              </div>
            </div>
            <Link
              href={`https://wa.me/18097575168?text=${encodeURIComponent("Hola Grupo BIGENTIK, Estaba viendo su web y me interesa más información sobre los proyectos. Mi nombre es: ")}`}
              target='_blank'
              className="w-full text-center rounded-full px-6 py-4 text-[11px] uppercase tracking-[0.2em] font-bold text-on-surface/80 bg-surface/50 hover:bg-surface border border-outline-variant/30 transition-all shadow-inner"
            >
              {dict.header.buttons.whatsapp}
            </Link>
            <Link
              href={`/${currentLocale}/contact`}
              onClick={closeMenu}
              className="w-full text-center editorial-gradient rounded-full px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-bold text-on-primary shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:opacity-90 transition-all"
            >
              {dict.header.buttons.cta}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
