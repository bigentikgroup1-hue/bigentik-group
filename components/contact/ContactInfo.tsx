import React from 'react';
import { getTranslator, Locale } from '@/lib/i18n';

export const ContactInfo = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  return (
    <div className="md:col-span-5 flex flex-col gap-6">
      {/* WhatsApp Section */}
      <div className="bg-primary text-on-primary p-10 flex flex-col justify-between h-full">
        <div>
          <span className="material-symbols-outlined text-4xl mb-6" data-weight="fill">
            chat
          </span>
          <h3 className="font-headline text-2xl mb-4">{t('contact.info.concierge_title')}</h3>
          <p className="font-body text-sm opacity-80 mb-8 leading-relaxed">
            {t('contact.info.concierge_desc')}
          </p>
        </div>
        <div className="space-y-4">
          <a
            className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 transition-colors"
            href={`https://wa.me/18097575168?text=${encodeURIComponent("Hola Grupo BIGENTIK, Estaba viendo su web y me interesa más información sobre los proyectos. Mi nombre es: ")}`}
            target='_blank'
          >
            <div className="flex flex-col">
              <span className="font-label text-xs uppercase opacity-60">
                Jose Manuel King Medina
              </span>
              <span className="font-body">+1 (809) 757-5168</span>
            </div>
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
          <a
            className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 transition-colors"
            href={`https://wa.me/18097809991?text=${encodeURIComponent("Hola Grupo BIGENTIK, Estaba viendo su web y me interesa más información sobre los proyectos. Mi nombre es: ")}`}
            target='_blank'
          >
            <div className="flex flex-col">
              <span className="font-label text-xs uppercase opacity-60">Nicolás Benjamín</span>
              <span className="font-body">+1 (809) 780-9991</span>
            </div>
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>

      {/* Office Location Brief */}
      <div className="bg-surface-container p-10">
        <h3 className="font-headline text-xl mb-6">{t('contact.info.hq_title')}</h3>
        <div className="space-y-4 text-on-surface-variant font-body text-sm">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <p>
              {t('contact.info.hq_address_1')}
              <br />
              {t('contact.info.hq_address_2')}
              <br />
              {t('contact.info.hq_address_3')}
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary">schedule</span>
            <p>
              {t('contact.info.hq_hours_1')}
              <br />
              {t('contact.info.hq_hours_2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
