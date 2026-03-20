"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-[10px] uppercase tracking-[0.2em] transition-colors ${isActive
      ? "text-primary font-bold"
      : "text-on-surface/80 hover:text-primary font-semibold"
      }`;
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-nav rounded-full px-6 md:px-10 py-3.5 flex items-center justify-between shadow-2xl border border-white/30 backdrop-blur-xl">
        <div className="flex items-center gap-12">
          <Link href="/">
            <span className="font-headline text-2xl font-bold tracking-tight text-primary">Bigentik Group</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            <Link className={getLinkClass('/')} href="/">Inicio</Link>
            <Link className={getLinkClass('/projects')} href="/projects">Proyectos</Link>
            <Link className={getLinkClass('/about')} href="/about">Nosotros</Link>
            <Link className={getLinkClass('/contact')} href="/contact">Contacto</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface/80 bg-surface/50 hover:bg-surface border border-outline-variant/30 transition-all">WhatsApp</button>
          <button className="editorial-gradient rounded-full px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold text-on-primary shadow-lg hover:opacity-90 transition-all">Solicitar Info</button>
        </div>
      </div>
    </nav>
  );
}
