import type { Metadata } from 'next';
import '../globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getDictionary, Locale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Bigentik Group',
  description: 'Bigentik Group',
  icons: {
    icon: '/bigentik-logo.svg',
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
        <link href="https://fonts.googleapis.com/css2?family=Droid+Serif:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body antialiased min-h-screen flex flex-col">
        <Header dict={dictionary} />
        <div className="flex-1 flex flex-col">
          {children}
        </div>
        <Footer dict={dictionary} locale={locale} />
      </body>
    </html>
  );
}

