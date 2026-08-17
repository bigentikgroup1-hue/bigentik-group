import React from 'react';
import { CTASection } from '@/components/shared/CTASection';
import { getTranslator, Locale } from '@/lib/i18n';
import Image from 'next/image';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
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
            <span className="text-sm font-label uppercase tracking-[0.3em]  mb-6 block">{t('about.hero.subtitle')}</span>
            <h1 className="tracking-[0.05em] uppercase font-urbanist text-3xl leading-[1.1] mb-8 text-balance -tracking-wider">{t('about.hero.title_1')} <span className="uppercase font-urbanist tracking-[0.3em]">{t('about.hero.title_2')}</span></h1>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-lg md:text-xl  max-w-lg leading-relaxed">{t('about.hero.description')}</p>
          </div>
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="relative aspect-[4/5] bg-surface-container-highest overflow-hidden shadow-2xl">
              <Image className="object-cover grayscale-[20%]" data-alt="Modern luxury beachfront architecture detail" src="/nosotros-2.png" alt="Modern luxury beachfront architecture detail" fill quality={100} />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 -z-10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Brand Philosophy: Tonal Layers */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-9xl mx-auto px-14 pb-12">
          <div className="lg:col-span-4">
            <h2 className="tracking-[0.1em] uppercase font-urbanist text-3xl leading-tight text-balance text-center">{t('about.philosophy.title_1')} <span>{t('about.philosophy.title_2')}</span></h2>
          </div>
        </div>
        <div className="max-w-9xl mx-auto px-14">
          <div className="lg:col-span-12 grid md:grid-cols-5 gap-8">
            <div className="space-y-4">
              <span className=" font-headline text-3xl">01.</span>
              <h3 className="text-lg font-semibold uppercase tracking-widest">{t('about.philosophy.cards.0.title')}</h3>
              <p className=" leading-relaxed whitespace-pre-line">{t('about.philosophy.cards.0.description')}</p>
            </div>
            <div></div>
            <div className="space-y-4">
              <span className=" font-headline text-3xl">02.</span>
              <h3 className="text-lg font-semibold uppercase tracking-widest">{t('about.philosophy.cards.1.title')}</h3>
              <p className=" leading-relaxed whitespace-pre-line">{t('about.philosophy.cards.1.description')}</p>
            </div>
            <div></div>
            <div className="space-y-4">
              <span className=" font-headline text-3xl">03.</span>
              <h3 className="text-lg font-semibold uppercase tracking-widest">{t('about.philosophy.cards.2.title')}</h3>
              <p className=" leading-relaxed whitespace-pre-line">{t('about.philosophy.cards.2.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:pt-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <span className="text-sm font-label uppercase tracking-[0.3em] mb-4 block text-center">
              {t('about.founders.subtitle')}
            </span>
            <h2 className="tracking-[0.1em] uppercase font-urbanist text-3xl text-center">
              {t('about.founders.title')}
            </h2>
          </div>

          <div className="space-y-16 md:space-y-24">
            {/* Founder 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-1 lg:order-1">
                <div className="relative w-full max-w-[500px] h-[550px] md:h-[600px] mx-auto overflow-hidden">
                  <Image
                    className="object-contain"
                    src="/nicolas-benjamin.jpg"
                    alt={t('about.founder1.name')}
                    fill
                    quality={100}
                  />
                </div>
              </div>
              <div className="lg:col-span-6 order-2 lg:order-2 flex justify-center">
                <div className="border-l-4 border-coffee-intense pl-6 md:pl-12 py-4">
                  <blockquote className="font-headline text-2xl leading-relaxed mb-8 break-words text-balance">
                    {t('about.founder1.quote')}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-px bg-outline"></div>
                    <div>
                      <p className="font-semibold uppercase tracking-widest text-sm">
                        {t('about.founder1.name')}
                      </p>
                      <p className="text-xs uppercase tracking-widest">{t('about.founder1.role')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
                <div className="border-r-4 border-coffee-intense pr-6 md:pr-12 py-4 text-right">
                  <blockquote className="font-headline text-2xl leading-relaxed mb-8 break-words text-balance">
                    {t('about.founder2.quote')}
                  </blockquote>
                  <div className="flex items-center justify-end gap-4">
                    <div>
                      <p className="font-semibold uppercase tracking-widest text-sm">
                        {t('about.founder2.name')}
                      </p>
                      <p className="text-xs uppercase tracking-widest">{t('about.founder2.role')}</p>
                    </div>
                    <div className="w-12 h-px bg-outline"></div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-[500px] h-[550px] md:h-[600px] mx-auto overflow-hidden">
                  <Image
                    className="object-contain"
                    src="/jose-manuel.jpg"
                    alt={t('about.founder2.name')}
                    fill
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="pb-20 md:pb-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16 text-center">
            <span className="text-sm font-label uppercase tracking-[0.3em] mb-4 block text-center">
              {t('about.team.subtitle')}
            </span>
            <h2 className="tracking-[0.1em] uppercase font-urbanist text-3xl text-center">
              {t('about.team.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Field Team */}
            <div className="flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 rounded-sm">
                <Image
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/bigentik-team-field.jpeg"
                  alt={t('about.team.field_title')}
                  fill
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-bone-white block mb-1">
                    01 / {t('about.team.field_title')}
                  </span>
                </div>
              </div>
              <div className="pt-4 border-l-2 border-primary/40 pl-4 mt-3">
                {/* <h3 className="text-lg font-semibold uppercase tracking-wider mb-1">
                  {t('about.team.field_title')}
                </h3> */}
                <p className="text-sm opacity-80 leading-relaxed">
                  {t('about.team.field_desc')}
                </p>
              </div>
            </div>

            {/* Office Team */}
            <div className="flex flex-col group">
              <div className="relative aspect-[16/10] w-full overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-500 rounded-sm">
                <Image
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/bigentik-team-office.jpeg"
                  alt={t('about.team.office_title')}
                  fill
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-bone-white block mb-1">
                    02 / {t('about.team.office_title')}
                  </span>
                </div>
              </div>
              <div className="pt-4 border-l-2 border-primary/40 pl-4 mt-3">
                {/* <h3 className="text-lg font-semibold uppercase tracking-wider mb-1">
                  {t('about.team.office_title')}
                </h3> */}
                <p className="text-sm opacity-80 leading-relaxed">
                  {t('about.team.office_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Bento Grid */}
      <section className="py-20 md:py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <span className="text-sm font-label uppercase tracking-[0.3em]  mb-4 block text-center">{t('about.presence.subtitle')}</span>
            <h2 className="tracking-[0.1em] uppercase font-urbanist text-3xl text-center">{t('about.presence.title_1')} <span>{t('about.presence.title_2')}</span></h2>
            <p className=" mb-6 pt-10 leading-relaxed text-center">{t('about.presence.portal_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-surface-container-highest p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group min-h-[300px]">
              <Image className="object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Skyline of high-end Caribbean condominiums" src="/nosotros-1.png" alt="Skyline of high-end Caribbean condominiums" fill quality={100} />
            </div>
            <div className="md:col-span-2 bg-primary text-on-primary p-8 md:p-12 flex justify-center items-center min-h-[200px]">
              <div>
                <span className="text-4xl md:text-5xl font-headline mb-2 block text-center text-bone-white">
                  <AnimatedCounter className="text-bone-white" value={t('about.presence.properties_developed')} />+
                </span>
                <p className="text-xs md:text-sm font-label uppercase tracking-widest opacity-80 text-bone-white">{t('about.presence.properties_lbl')}</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-surface-container-lowest p-8 flex flex-col justify-center text-center min-h-[150px]">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-headline mb-2 block">
                  <AnimatedCounter value={t('about.presence.clients_number')} />+
                </span>
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
