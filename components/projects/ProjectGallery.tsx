"use client";

import React, { useState } from 'react';

export interface GalleryItem {
  url: string;
  category: string;
  title: string;
}

export interface ProjectGalleryProps {
  images: GalleryItem[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="relative group overflow-hidden bg-surface-container h-[600px] md:h-[800px]">
        {/* Carousel Main Image */}
        <div className="absolute inset-0 transition-transform duration-700 ease-out">
          <img
            className="w-full h-full object-cover"
            alt={currentImage.title}
            src={currentImage.url}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                index === currentIndex ? "bg-[#7E9247]" : "bg-white/40 hover:bg-white/60"
              }`}
            ></div>
          ))}
        </div>

        {/* Image Caption */}
        <div className="absolute bottom-8 left-8 text-white">
          <p className="text-xs font-label uppercase tracking-[0.2em] opacity-80 mb-1">
            {currentImage.category}
          </p>
          <p className="font-headline text-xl">{currentImage.title}</p>
        </div>
      </div>
    </section>
  );
};
