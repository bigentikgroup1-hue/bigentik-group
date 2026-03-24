import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';
import Image from 'next/image';

export const HomeHero = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);

  return (
    <header className="relative h-screen flex items-center overflow-hidden lg:pt-34">
      <div className="absolute inset-0 z-0">
        <Image
          className="object-cover"
          alt="Aerial cinematic view of Las Terrenas coastline and luxury villas"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8QjJvw_iuZCjdytNi976SdMeOA8EkYuPoNFug0UQEE7GQ4EVwiuWF8I5e4lbYF5jIntIRz5V5WQumcBMJcwLKISwowqhcnMdEeLWdLlTkqSCViC1ttBvfrGMFXLc-_ubRwuM2bzjGAH743Hn2LWPx70IlFJNH9k_1CLv8HPRBHdsJFHSXqeYItFEmJojGtWAq6cIpPw62Hujjw0Xid6oisb5BNpxZeAkZ9YawyX6u_r-c5-zcIH7JZt_jXDA6in9gerIqbhMJMw"
          fill
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-on-surface/20"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 text-xs uppercase tracking-[0.4em] text-white/90 font-semibold">
            {t('home.hero.subtitle')}
          </span>
          <h1 className="font-headline text-6xl md:text-8xl text-white leading-tight mb-8 -ml-1">
            {t('home.hero.title_1')} <br /><span className="italic">{t('home.hero.title_2')}</span>
          </h1>
          <p className="text-lg text-white/80 max-w-lg mb-10 leading-relaxed">
            {t('home.hero.description')}
          </p>
          <div className="flex gap-6">
            <button className="editorial-gradient px-10 py-4 text-xs uppercase tracking-widest font-bold text-on-primary">
              {t('home.hero.portfolio_btn')}
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-12 right-6 hidden lg:block">
        <div className="flex items-center gap-4 text-white/60">
          <span className="text-[10px] uppercase tracking-[0.5em] rotate-90 origin-left translate-x-4">
            {t('home.hero.scroll')}
          </span>
          <div className="w-px h-24 bg-white/20"></div>
        </div>
      </div>
    </header>
  );
};
