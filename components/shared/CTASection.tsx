import React from 'react';

interface CTASectionProps {
  title?: string;
  description?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = "Experimente el pináculo del lujo",
  description = "Conéctese con nuestros especialistas para detalles exclusivos del proyecto.",
  className = "py-24 px-6 text-center max-w-4xl mx-auto",
}) => {
  return (
    <section className={className}>
      <h2 className="font-headline text-4xl md:text-5xl mb-6">{title}</h2>
      <p className="font-body text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <button className="editorial-gradient signature-gradient px-12 py-4 font-label text-sm tracking-widest uppercase text-on-primary hover:opacity-90 transition-opacity shadow-lg">
          Contáctenos
        </button>
        <button className="border border-outline-variant/40 px-12 py-4 font-label text-sm tracking-widest uppercase hover:bg-surface-container transition-colors">
          WhatsApp
        </button>
      </div>
    </section>
  );
};
