import React from 'react';

export const EditorialQuote = () => {
  return (
    <section className="bg-surface-container mt-32 py-24">
      <div className="max-w-4xl mx-auto px-6 border-l-4 border-primary pl-12">
        <blockquote className="font-headline text-3xl md:text-4xl italic leading-relaxed text-on-surface">
          &quot;No solo construimos estructuras; esculpimos entornos que dialogan con su entorno,
          creando una intersección atemporal entre la precisión humana y la gracia natural.&quot;
        </blockquote>
        <cite className="block mt-8 font-label text-xs uppercase tracking-[0.3em] text-on-surface-variant not-italic">
          — Arquitecto Principal, Bigentik Design Lab
        </cite>
      </div>
    </section>
  );
};
