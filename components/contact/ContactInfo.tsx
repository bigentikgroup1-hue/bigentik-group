import React from 'react';

export const ContactInfo = () => {
  return (
    <div className="md:col-span-5 flex flex-col gap-6">
      {/* WhatsApp Section */}
      <div className="bg-primary text-on-primary p-10 flex flex-col justify-between h-full">
        <div>
          <span className="material-symbols-outlined text-4xl mb-6" data-weight="fill">
            chat
          </span>
          <h3 className="font-headline text-2xl mb-4">Conserjería Directa</h3>
          <p className="font-body text-sm opacity-80 mb-8 leading-relaxed">
            Hable directamente con nuestros directores regionales para asistencia inmediata.
          </p>
        </div>
        <div className="space-y-4">
          <a
            className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 transition-colors"
            href="#"
          >
            <div className="flex flex-col">
              <span className="font-label text-xs uppercase opacity-60">
                División Europea
              </span>
              <span className="font-body">+44 20 7946 0123</span>
            </div>
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
          <a
            className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 transition-colors"
            href="#"
          >
            <div className="flex flex-col">
              <span className="font-label text-xs uppercase opacity-60">Región MENA</span>
              <span className="font-body">+971 4 123 4567</span>
            </div>
            <span className="material-symbols-outlined">arrow_outward</span>
          </a>
        </div>
      </div>

      {/* Office Location Brief */}
      <div className="bg-surface-container p-10">
        <h3 className="font-headline text-xl mb-6">Sede Central</h3>
        <div className="space-y-4 text-on-surface-variant font-body text-sm">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <p>
              128 Knightsbridge,
              <br />
              London, SW1X 7PA
              <br />
              United Kingdom
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary">schedule</span>
            <p>
              Lun — Vie: 09:00 - 18:00
              <br />
              Sáb: Solo con cita previa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
