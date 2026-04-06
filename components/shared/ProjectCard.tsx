"use client";

import React from 'react';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

export interface ProjectCardProps {
  title: string;
  slug?: string;
  description?: string;
  image?: string;
  imageMobile?: string;
  images?: string[];
  location?: string;
  status?: string;
  statusText?: string;
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  slug,
  description = "",
  image = "",
  imageMobile = "",
  images = [],
  location = "",
  status,
  statusText,
  link = "#",
}) => {
  const getStatusClasses = (status?: string) => {
    switch (status) {
      case 'preSale':
      case 'Preventa':
        return 'bg-primary text-on-primary';
      case 'sold':
      case 'Vendido':
        return 'bg-on-surface text-surface';
      case 'in construction':
      case 'En Construcción':
        return 'bg-secondary text-on-secondary';
      default:
        return 'bg-outline text-surface';
    }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden group">
      {image && (
        <CldImage
          className="object-fit transition-transform duration-1000 group-hover:scale-105 hidden md:block"
          alt={title}
          src={image}
          fill
          quality={100}
        />
      )}
      {imageMobile && (
        <CldImage
          className="object-fit transition-transform duration-1000 group-hover:scale-105 md:hidden"
          alt={title}
          src={imageMobile}
          fill
          quality={100}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {status && (
                <span className={`${getStatusClasses(status)} text-[10px] uppercase tracking-widest px-3 py-1 font-bold`}>
                  {statusText || status}
                </span>
              )}
              {location && (
                <span className="text-white/70 text-sm tracking-wide flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">location_on</span> {location}
                </span>
              )}
            </div>
            <h2 className="font-headline text-4xl md:text-6xl text-white mb-2">{title}</h2>
            {description && (
              <p className="text-white/60 max-w-md font-light line-clamp-3">{description}</p>
            )}
          </div>
          <div>
            <a className="inline-flex items-center gap-4 text-white group/btn" href={link}>
              <span className="text-sm font-medium tracking-widest uppercase">Ver Detalles del Proyecto</span>
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-on-surface transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
