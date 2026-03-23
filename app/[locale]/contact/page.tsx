import React from 'react';
import { getDictionary, Locale } from '@/lib/i18n';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { GlobalOffices } from '@/components/contact/GlobalOffices';
import { CTASection } from '@/components/shared/CTASection';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const dict = await getDictionary(locale as Locale);
  return (
    <main className="flex-1 bg-background">
      <ContactHero locale={locale} />
      
      {/* Contact Bento Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <ContactForm dict={dict} />
          <ContactInfo locale={locale} />
        </div>
      </section>

      <GlobalOffices locale={locale} />
      
      <CTASection locale={locale} />
    </main>
  );
}
