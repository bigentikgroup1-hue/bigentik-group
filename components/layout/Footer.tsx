import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-container-highest py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20">
          <div className="md:col-span-4">
            <span className="font-headline text-2xl font-bold tracking-tight text-primary block mb-6">Bigentik Group</span>
            <p className="text-on-surface-variant leading-relaxed max-w-xs">Curando las oportunidades de inversión y bienes raíces más prestigiosas del mundo desde 2008.</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h5 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface font-bold">Empresa</h5>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-colors" href="/about">Sobre Nosotros</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Proyectos</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Portal de Inversión</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface font-bold">Soporte</h5>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-colors" href="#">Contáctenos</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Ubicaciones de Oficinas</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="#">Política de Privacidad</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-label uppercase tracking-[0.2em] text-on-surface font-bold">Legal</h5>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li><Link className="hover:text-primary transition-colors" href="#">Términos de Servicio</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">© 2024 Bigentik Group. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-on-surface-variant hover:text-primary" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
