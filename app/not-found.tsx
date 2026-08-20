import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getDictionary } from '@/lib/i18n';
import NotFoundClient from '@/app/[locale]/not-found';

export default async function GlobalNotFound() {
  const dictionary = await getDictionary('es');

  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icon-bigentik.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/aileron" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background font-body antialiased min-h-screen flex flex-col">
        <Header dict={dictionary} />
        <div className="flex-1 flex flex-col">
          <NotFoundClient />
        </div>
        <Footer dict={dictionary} locale="es" />
      </body>
    </html>
  );
}
