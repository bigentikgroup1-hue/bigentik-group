import React from 'react';
import { CTASection } from '@/components/shared/CTASection';
import { getTranslator, Locale } from '@/lib/i18n';
import Image from 'next/image';
export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslator(locale as Locale);

  return (
    <main className="pt-32 lg:pt-40 flex-1 overflow-x-hidden">
      {/* Hero Section: Editorial Asymmetry */}
      <section className="relative min-h-[80vh] flex items-center px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="text-sm font-label uppercase tracking-[0.3em] text-primary mb-6 block">{t('about.hero.subtitle')}</span>
            <h1 className="font-headline text-4xl md:text-6xl lg:text-8xl leading-[1.1] mb-8 text-balance -tracking-wider">{t('about.hero.title_1')} <span className="italic text-primary">{t('about.hero.title_2')}</span></h1>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">{t('about.hero.description')}</p>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative aspect-[4/5] bg-surface-container-highest overflow-hidden shadow-2xl">
              <Image className="object-cover grayscale-[20%]" data-alt="Modern luxury beachfront architecture detail" src="/about-hero-arch.png" alt="Modern luxury beachfront architecture detail" fill quality={100} />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy: Tonal Layers */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="font-headline text-3xl md:text-4xl leading-tight text-balance">{t('about.philosophy.title_1')} <span className="italic">{t('about.philosophy.title_2')}</span></h2>
            </div>
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-primary font-headline text-3xl italic">01.</span>
                <h3 className="text-lg font-semibold uppercase tracking-widest">{t('about.philosophy.cards.0.title')}</h3>
                <p className="text-on-surface-variant leading-relaxed">{t('about.philosophy.cards.0.description')}</p>
              </div>
              <div className="space-y-4">
                <span className="text-primary font-headline text-3xl italic">02.</span>
                <h3 className="text-lg font-semibold uppercase tracking-widest">{t('about.philosophy.cards.1.title')}</h3>
                <p className="text-on-surface-variant leading-relaxed">{t('about.philosophy.cards.1.description')}</p>
              </div>
              <div className="space-y-4">
                <span className="text-primary font-headline text-3xl italic">03.</span>
                <h3 className="text-lg font-semibold uppercase tracking-widest">{t('about.philosophy.cards.2.title')}</h3>
                <p className="text-on-surface-variant leading-relaxed">{t('about.philosophy.cards.2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Stories: Pull Quote Style */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-1 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-none aspect-square bg-surface-container overflow-hidden p-4 md:p-6 mx-auto">
              <Image className="object-fit" data-alt="Professional portrait of a founder in a modern office" src="/nicolas-benjamin.png" alt="Professional portrait of a founder in a modern office" fill quality={100} />
            </div>
          </div>
          <div className="lg:col-span-6 order-2 lg:order-2 flex justify-center">
            <div className="border-l-4 border-primary pl-6 md:pl-12 py-4">
              <blockquote className="font-headline text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-on-surface mb-8 break-words text-balance">{t('about.founder1.quote')}</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-outline"></div>
                <div>
                  <p className="font-semibold uppercase tracking-widest text-sm">{t('about.founder1.name')}</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">{t('about.founder1.role')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="border-r-4 border-primary pl-6 md:pl-12 py-4">
              <blockquote className="font-headline text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-on-surface mb-8 break-words text-balance">{t('about.founder2.quote')}</blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-outline"></div>
                <div>
                  <p className="font-semibold uppercase tracking-widest text-sm">{t('about.founder2.name')}</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">{t('about.founder2.role')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-square bg-surface-container overflow-hidden p-4 md:p-6 mx-auto">
              <Image className="object-fit" data-alt="Professional portrait of a founder in a modern office" src="/jose-manuel.png" alt="Professional portrait of a founder in a modern office" fill quality={100} />
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Bento Grid */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <span className="text-sm font-label uppercase tracking-[0.3em] text-primary mb-4 block text-center">{t('about.presence.subtitle')}</span>
            <h2 className="font-headline text-3xl md:text-5xl text-center">{t('about.presence.title_1')} <span className="italic">{t('about.presence.title_2')}</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-highest p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group min-h-[300px]">
              <Image className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" data-alt="Skyline of high-end Caribbean condominiums" src="/corporate-bento.png" alt="Skyline of high-end Caribbean condominiums" fill quality={100} />
              <div className="relative z-10">
                <h3 className="text-2xl md:text-4xl font-headline mb-4">{t('about.presence.portal_title')}</h3>
                <p className="max-w-xs text-on-surface-variant mb-6 text-sm md:text-base">{t('about.presence.portal_desc')}</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-primary text-on-primary p-8 md:p-12 flex items-center min-h-[200px]">
              <div>
                <span className="text-4xl md:text-5xl font-headline italic mb-2 block">{t('about.presence.properties_developed')}</span>
                <p className="text-xs md:text-sm font-label uppercase tracking-widest opacity-80">{t('about.presence.properties_lbl')}</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest p-8 flex flex-col justify-center text-center min-h-[150px]">
              <div>
                <span className="text-4xl md:text-5xl font-headline italic mb-2 block">{t('about.presence.clients_number')}</span>
                <p className="text-xs md:text-sm font-label uppercase tracking-widest opacity-80">{t('about.presence.clients_lbl')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-surface overflow-x-hidden">
        <CTASection locale={locale} />
      </div>
    </main>
  );
}
