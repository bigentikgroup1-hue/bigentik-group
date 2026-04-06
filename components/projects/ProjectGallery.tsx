"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Handle body scroll
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const nextSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="relative group overflow-hidden bg-surface-container h-[50vh] min-h-[400px] md:h-[700px] md:min-h-0 rounded-2xl">
          {/* Expand Icon Hint for Mobile */}
          <div className="absolute top-4 right-4 z-20 md:hidden pointer-events-none opacity-80 backdrop-blur-md bg-black/30 w-10 h-10 rounded-full flex items-center justify-center text-white">
            <span className="material-symbols-outlined text-[20px]">zoom_out_map</span>
          </div>

          {/* Carousel Slider */}
          <div
            className="flex h-full w-[100%] transition-transform duration-700 ease-in-out cursor-pointer"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onClick={() => setIsModalOpen(true)}
          >
            {images.map((img, index) => (
              <div key={index} className="relative h-full min-w-full flex-shrink-0">
                <CldImage
                  className="object-contain md:object-cover"
                  alt={img.title}
                  src={img.url}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1920px) 100vw, 1920px"
                  quality={100}
                  preload={index === 0 ? true : false}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute z-10 left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 md:bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-black/50 md:hover:bg-white/20 transition-all opacity-100 md:opacity-0 group-hover:opacity-100"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute z-10 right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/30 md:bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-black/50 md:hover:bg-white/20 transition-all opacity-100 md:opacity-0 group-hover:opacity-100"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                  index === currentIndex ? "bg-[#7E9247]" : "bg-white/40 hover:bg-white/60"
                }`}
              ></div>
            ))}
          </div>

          {/* Image Caption */}
          <div className="absolute bottom-8 left-8 text-white z-10 pointer-events-none">
            <p className="text-xs font-label uppercase tracking-[0.2em] opacity-80 mb-1">
              {currentImage.category}
            </p>
            <p className="font-headline text-xl drop-shadow-md">{currentImage.title}</p>
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] w-12 h-12 flex items-center justify-center text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          {/* Main Image Container */}
          <div className="relative w-full h-[80vh] md:h-full p-4 md:p-12 flex items-center justify-center"
               onClick={() => setIsModalOpen(false)}
          >
             <div className="relative w-full h-full max-w-7xl mx-auto" onClick={(e) => e.stopPropagation()}>
               {images.map((img, index) => (
                 <div
                   key={index}
                   className={`absolute inset-0 transition-opacity duration-300 ${
                     index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                   }`}
                 >
                   <CldImage
                     className="object-contain"
                     alt={img.title}
                     src={img.url}
                     fill
                     sizes="100vw"
                     quality={100}
                     priority={index === currentIndex}
                   />
                 </div>
               ))}
             </div>
          </div>

          {/* Navigation Arrows for Modal */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all z-[110]"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all z-[110]"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          {/* Caption for Modal */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white z-[110] w-full px-4 pointer-events-none">
            <p className="text-sm font-label uppercase tracking-[0.2em] opacity-80 mb-2">
              {currentImage.category}
            </p>
            <p className="font-headline text-2xl md:text-3xl">{currentImage.title}</p>
            
            {/* Pagination Dots for Modal */}
            <div className="flex justify-center gap-3 mt-6 pointer-events-auto">
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    index === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
