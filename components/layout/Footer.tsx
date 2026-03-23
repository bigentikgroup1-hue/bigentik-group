import React from 'react';
import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n';

export function Footer({ dict, locale }: { dict: Dictionary, locale: string }) {
  return (
    <footer className="bg-surface-container-highest py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
          <div className="md:col-span-4">
            <span className="font-headline text-2xl font-bold tracking-tight text-primary block mb-6">Bigentik Group</span>
            <p className="text-on-surface-variant leading-relaxed max-w-xs">{dict.footer.description}</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h5 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface font-bold">{dict.footer.company}</h5>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-colors" href="/about">{dict.footer.nav_about}</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">{dict.footer.nav_projects}</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">{dict.footer.nav_portal}</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface font-bold">{dict.footer.support}</h5>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-colors" href="#">{dict.footer.nav_contact}</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">{dict.footer.nav_offices}</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">{dict.footer.nav_privacy}</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface font-bold">{dict.footer.legal}</h5>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-colors" href="#">{dict.footer.nav_terms}</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">{dict.footer.copyright}</p>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
