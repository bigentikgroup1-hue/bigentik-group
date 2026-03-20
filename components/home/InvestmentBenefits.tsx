import React from 'react';

export const InvestmentBenefits = () => {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-24">
          <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Portal de Inversión</span>
          <h2 className="font-headline text-5xl mt-4 leading-tight">
            Crecimiento Estratégico en la República Dominicana
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="h-1 w-12 bg-primary"></div>
            <h3 className="font-headline text-2xl italic">Incentivos Fiscales</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Aproveche la ley CONFOTUR, que ofrece exenciones de impuestos sobre la propiedad por hasta 15 años en desarrollos calificados.
            </p>
          </div>
          <div className="space-y-6">
            <div className="h-1 w-12 bg-primary"></div>
            <h3 className="font-headline text-2xl italic">Alto Rendimiento de Alquiler</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Las Terrenas mantiene un ROI anual promedio del 8-12% debido a la creciente demanda internacional y al inventario premium limitado.
            </p>
          </div>
          <div className="space-y-6">
            <div className="h-1 w-12 bg-primary"></div>
            <h3 className="font-headline text-2xl italic">Valorización del Capital</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Los valores de las propiedades en Samaná han visto un aumento constante del 15% anual a medida que la infraestructura continúa expandiéndose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
