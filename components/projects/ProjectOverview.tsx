import React from 'react';

export interface ProjectSpecs {
  area: string;
  completion: string;
  units: string;
  location: string;
}

export interface ProjectOverviewProps {
  pullQuote: string;
  paragraphs: string[];
  specs: ProjectSpecs;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({ pullQuote, paragraphs, specs }) => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-20">
        <div className="md:col-span-7">
          <span className="font-label uppercase tracking-widest text-primary mb-6 block">
            La Narrativa
          </span>
          <div className="border-l-4 border-primary pl-8 mb-12">
            <blockquote className="font-headline text-3xl italic text-on-surface-variant leading-relaxed">
              &quot;{pullQuote}&quot;
            </blockquote>
          </div>
          <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-5 bg-surface p-12 shadow-sm">
          <h3 className="font-headline text-2xl mb-8">Especificaciones del Proyecto</h3>
          <ul className="space-y-6">
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">Área Total</span>
              <span className="font-body text-lg">{specs.area}</span>
            </li>
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">Finalización</span>
              <span className="font-body text-lg">{specs.completion}</span>
            </li>
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">Unidades</span>
              <span className="font-body text-lg">{specs.units}</span>
            </li>
            <li className="flex justify-between items-end border-b border-outline-variant/30 pb-2">
              <span className="font-label uppercase text-xs tracking-widest text-outline">Ubicación</span>
              <span className="font-body text-lg">{specs.location}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
