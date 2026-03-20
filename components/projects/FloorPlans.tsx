import React from 'react';

export const FloorPlans = () => {
  return (
    <section className="py-24 bg-surface-container-high">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="font-label uppercase tracking-widest text-primary mb-4 block">
              Distribuciones Arquitectónicas
            </span>
            <h2 className="font-headline text-4xl">Espacios de Vida Refinados</h2>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-surface-container-lowest font-label uppercase tracking-widest text-xs border border-outline-variant/30">
              Villa Tipo A
            </button>
            <button className="px-8 py-3 bg-transparent font-label uppercase tracking-widest text-xs border border-outline-variant/30">
              Villa Tipo B
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="bg-white p-8 shadow-sm">
            <img
              className="w-full grayscale opacity-80 hover:opacity-100 transition-opacity"
              alt="Minimalist architectural floor plan drawing"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Ep0KiHvj6OZln-I-PFogs4HEdpmwdPyP01KR0ABGsGb66qfqQKQ3aV4VYvrSy1gTbgWQZHYsar-QO8hOUTXczA7CI7BN_iPAekwuVsichMMlPW51soGFW4KCJD5Cnjk_SjqxhVi3C9prD_DQcCH4lMxSgbAKQQkMs0BCQwiarAhCFCBOgoK77WdpOmcSwm_0xv-WhjWqNQoXq4N_wSrDzoEopLg9WMTsyw-aCr6YFhbWFVBmETpRWWe5qf_hV6E01zi0i_iMrQ"
            />
          </div>
          <div className="space-y-10">
            <div>
              <h4 className="font-headline text-2xl mb-4">Nivel 01: El Núcleo Social</h4>
              <p className="text-on-surface-variant leading-relaxed">
                Cocina de concepto abierto integrada con una sala de estar hundida, fluyendo sin interrupciones hacia la terraza con piscina infinita.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary" data-weight="fill">
                  check_circle
                </span>{" "}
                350 m² de Área Interna
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary" data-weight="fill">
                  check_circle
                </span>{" "}
                Paredes de cristal de piso a techo
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary" data-weight="fill">
                  check_circle
                </span>{" "}
                Patio interno privado
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
