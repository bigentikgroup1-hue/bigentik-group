import React from 'react';

export const InvestmentHighlights = () => {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="font-headline text-4xl mb-16 text-center">Potencial de Inversión</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-surface-container p-10 group hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:text-on-primary">
            trending_up
          </span>
          <h4 className="font-headline text-xl mb-4 group-hover:text-on-primary">
            Crecimiento de Capital
          </h4>
          <p className="text-on-surface-variant group-hover:text-on-primary/80">
            Plusvalía anual proyectada del 18% basada en las tendencias actuales del mercado en el corredor de Western Ridge.
          </p>
        </div>
        <div className="bg-surface-container p-10 group hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:text-on-primary">
            account_balance
          </span>
          <h4 className="font-headline text-xl mb-4 group-hover:text-on-primary">
            Eficiencia Fiscal
          </h4>
          <p className="text-on-surface-variant group-hover:text-on-primary/80">
            Calificado bajo la Ley de Nuevo Patrimonio para incentivos significativos de impuestos sobre la propiedad durante 10 años.
          </p>
        </div>
        <div className="bg-surface-container p-10 group hover:bg-primary transition-colors duration-500">
          <span className="material-symbols-outlined text-4xl text-primary mb-6 group-hover:text-on-primary">
            verified_user
          </span>
          <h4 className="font-headline text-xl mb-4 group-hover:text-on-primary">
            Alquiler Exclusivo
          </h4>
          <p className="text-on-surface-variant group-hover:text-on-primary/80">
            Programa de alquiler premium gestionado que rinde un retorno neto estimado del 7.5% para los inversores.
          </p>
        </div>
      </div>
    </section>
  );
};
