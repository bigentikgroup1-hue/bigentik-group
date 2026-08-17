import type { Metadata } from 'next';
import '../globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getDictionary, Locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Bigentik Group',
  description: 'Bigentik Group',
  icons: {
    icon: '/icon-bigentik.png',
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const dictionary = await getDictionary(locale as Locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/icon-bigentik.png" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/aileron" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background font-body antialiased min-h-screen flex flex-col">
        <Header dict={dictionary} />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer dict={dictionary} locale={locale} />
      </body>
    </html>
  );
}

