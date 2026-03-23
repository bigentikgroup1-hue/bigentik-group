import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';
import Image from 'next/image';

export const GlobalOffices = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <section className="bg-surface-container-low py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-headline text-4xl mb-4">{t('contact.offices.subtitle')}</h2>
          <p className="font-body text-on-surface-variant max-w-xl">
            {t('contact.offices.description')}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 aspect-[21/9] bg-surface-variant relative overflow-hidden">
            <Image
              alt="Mapa"
              className="object-cover grayscale opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl33jWkoWt9cHAsDqFnnYYmBSgcMJ9MwrcPeBvq-GYXs65RaUsJ8ECH5THoN9ZPbC4NBW9Nbzu_Jwcrbe3QgsEuHIRBUuxkQMdJ7XQx5yrqaFaFAlCVTb0LjeixxXBmXHHBN_ji4xkeVuSrD13vz3HTyU0uW_XjPv7J4xxYEQ-BJJhqmEZMraFZdoxzk_KutrhupAUo2nOW-EozfMvvCjioHMpLqXSijQaZMgMRRKCcedmRGXAKcHN0PiXUFJkW-0qxu226jQTwA"
              fill
              quality={100}
            />
            <div className="absolute inset-0 bg-primary/5"></div>
          </div>
          <div className="space-y-12">
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
                {t('contact.offices.cities.0')}
              </h4>
              <p className="font-body text-sm leading-relaxed">
                {t('contact.offices.description')}
              </p>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
                {t('contact.offices.cities.1')}
              </h4>
              <p className="font-body text-sm leading-relaxed">
                {t('contact.offices.description')}
              </p>
            </div>
            <div>
              <h4 className="font-label text-xs uppercase tracking-widest text-primary mb-4">
                {t('contact.offices.cities.2')}
              </h4>
              <p className="font-body text-sm leading-relaxed">
                {t('contact.offices.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
