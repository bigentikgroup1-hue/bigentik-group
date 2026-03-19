import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real Estate Platform',
  description: 'Base project for real estate platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Locale state will be handled inside the project (client context/components) without dynamic routing
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Base HTML structure. Children slot configured. No real navbar/footer yet. */}
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
