"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `text-sm font-label uppercase tracking-widest transition-colors ${isActive
      ? "text-primary font-semibold"
      : "text-on-surface/70 hover:text-primary"
      }`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <span className="font-headline text-2xl font-bold tracking-tight text-primary">Bigentik Group</span>
          <div className="hidden lg:flex items-center gap-8">
            <Link className={getLinkClass('/')} href="/">Inicio</Link>
            <Link className={getLinkClass('/projects')} href="/projects">Proyectos</Link>
            <Link className={getLinkClass('/about')} href="/about">Sobre Nosotros</Link>
            <Link className={getLinkClass('/contact')} href="/contact">Contacto</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-6 py-2.5 text-sm font-label uppercase tracking-widest text-on-surface hover:bg-surface-container transition-colors">WhatsApp</button>
          <button className="editorial-gradient px-8 py-2.5 text-sm font-label uppercase tracking-widest text-on-primary shadow-sm hover:opacity-90 transition-opacity">Solicitar Información</button>
        </div>
      </div>
    </nav>
  );
}
