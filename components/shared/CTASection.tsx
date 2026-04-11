import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';
import Link from 'next/link';

export const CTASection = async ({ locale, children }: { locale: string; children?: React.ReactNode }) => {
  const t = await getTranslator(locale as Locale);

  const title = t('home.cta.title');
  const description = t('home.cta.description');
  const className = "py-24 px-6 text-center max-w-4xl mx-auto";
  return (
    <section className={className}>
      <h2 className="font-headline text-3xl mb-6">{title}</h2>
      <p className="font-body text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6">
        <Link
          href={`/${locale}/contact`}
          className="editorial-gradient signature-gradient px-12 py-4 font-label text-sm tracking-widest uppercase text-on-primary hover:opacity-90 transition-opacity shadow-lg"
        >
          {t('home.cta.contact_btn')}
        </Link>
        <a
          href={`https://wa.me/18097575168?text=${encodeURIComponent("Hola Grupo BIGENTIK, Estaba viendo su web y me interesa más información sobre los proyectos. Mi nombre es: ")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-outline-variant/40 px-12 py-4 font-label text-sm tracking-widest uppercase hover:bg-surface-container transition-colors inline-block text-center"
        >
          {t('home.cta.whatsapp_btn')}
        </a>
      </div>
    </section>
  );
};
