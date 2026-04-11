import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';
import Image from 'next/image';

export const HomeHero = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);

  return (
    <header className="relative h-screen flex items-center justify-start overflow-hidden lg:pt-200">
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          className="object-cover hidden md:block"
          alt="Aerial cinematic view of Las Terrenas coastline and luxury villas"
          src="/home-hero-bg.jpg"
          fill
          priority
          quality={100}
        />
        {/* Mobile Image */}
        <Image
          className="object-cover md:hidden"
          alt="Aerial cinematic view of Las Terrenas coastline and luxury villas"
          src="/home-hero-mobile.jpg"
          fill
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-on-surface/20"></div>
      </div>
      <div className="relative z-10 max-w-8xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 text-xs uppercase tracking-[0.4em] text-white/90 font-semibold">
            {t('home.hero.subtitle')}
          </span>
          <div className="flex gap-6">
            <button className="editorial-gradient px-10 py-4 text-xs uppercase tracking-widest font-bold text-on-primary cursor-pointer">
              {t('home.hero.portfolio_btn')}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
