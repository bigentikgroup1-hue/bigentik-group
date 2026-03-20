import React from 'react';

export const ContactHero = () => {
  return (
    <section className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-end">
        <div>
          <span className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-4 block">
            Conéctese con nosotros
          </span>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            Hablemos de su próxima inversión.
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-md leading-relaxed">
            Ya sea que busque una visita privada o una consulta arquitectónica,
            nuestros especialistas están disponibles para conversaciones personalizadas.
          </p>
        </div>
        <div className="hidden lg:block pb-4">
          <div className="h-px bg-outline-variant/30 w-full"></div>
        </div>
      </div>
    </section>
  );
};
