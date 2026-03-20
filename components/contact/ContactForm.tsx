"use client";

import React from 'react';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate API
    console.log("Form submitted");
  };

  return (
    <div className="md:col-span-7 bg-surface-container-low p-10 lg:p-16">
      <h2 className="font-headline text-3xl mb-12">Enviar una Consulta</h2>
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="relative">
            <label className="font-label text-xs uppercase tracking-widest text-outline block mb-2">
              Nombre Completo
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all placeholder:text-outline-variant/60"
              placeholder="Juan Pérez"
              type="text"
              required
            />
          </div>
          <div className="relative">
            <label className="font-label text-xs uppercase tracking-widest text-outline block mb-2">
              Correo Electrónico
            </label>
            <input
              className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all placeholder:text-outline-variant/60"
              placeholder="correo@ejemplo.com"
              type="email"
              required
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="font-label text-xs uppercase tracking-widest text-outline block mb-2">
            Interés de Inversión
          </label>
          <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all">
            <option>Desarrollo Residencial</option>
            <option>Cartera Comercial</option>
            <option>Penthouse de Lujo</option>
            <option>Consulta General</option>
          </select>
        </div>
        
        <div className="relative">
          <label className="font-label text-xs uppercase tracking-widest text-outline block mb-2">
            Mensaje
          </label>
          <textarea
            className="w-full bg-transparent border-0 border-b border-outline-variant/40 focus:ring-0 focus:border-primary px-0 py-2 transition-all placeholder:text-outline-variant/60 resize-none"
            placeholder="¿Cómo podemos ayudarle?"
            rows={4}
            required
          ></textarea>
        </div>
        
        <button
          className="editorial-gradient signature-gradient w-full py-4 text-on-primary font-label tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
          type="submit"
        >
          Enviar Solicitud
        </button>
      </form>
    </div>
  );
};
