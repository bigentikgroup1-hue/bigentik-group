"use client";

import React from 'react';
import { CldImage } from 'next-cloudinary';

export interface DetailHeroProps {
  title: string;
  collection: string;
  image: string;
  imageMobile?: string;
}

export const DetailHero: React.FC<DetailHeroProps> = ({ title, collection, image, imageMobile }) => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Desktop / Tablet Image */}
      <CldImage
        className="object-cover hidden md:block"
        alt={title}
        src={image}
        fill
        quality={100}
        preload
      />

      {/* Mobile Image */}
      {imageMobile && (
        <CldImage
          className="object-cover md:hidden"
          alt={title}
          src={imageMobile}
          fill
          quality={100}
          preload
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-on-surface/20 to-transparent"></div>
      <div className="absolute bottom-16 left-0 w-full px-6 z-10">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-background justify-start font-headline text-5xl max-w-4xl leading-tight ml-4 md:ml-8">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};
