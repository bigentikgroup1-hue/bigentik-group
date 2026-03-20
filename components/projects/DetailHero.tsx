import React from 'react';

export interface DetailHeroProps {
  title: string;
  collection: string;
  image: string;
}

export const DetailHero: React.FC<DetailHeroProps> = ({ title, collection, image }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <img
        className="w-full h-full object-cover"
        alt={title}
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
      <div className="absolute bottom-16 left-0 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary-fixed font-label uppercase tracking-[0.3em] mb-4 block">
            {collection}
          </span>
          <h1 className="text-white font-headline text-5xl md:text-7xl max-w-4xl leading-tight -ml-1">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};
