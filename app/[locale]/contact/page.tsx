import React from 'react';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { GlobalOffices } from '@/components/contact/GlobalOffices';
import { CTASection } from '@/components/shared/CTASection';

export default async function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="flex-1 bg-background">
      <ContactHero locale={locale} />
      
      {/* Contact Bento Grid */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <ContactForm />
          <ContactInfo locale={locale} />
        </div>
      </section>

      <GlobalOffices locale={locale} />
      
      <CTASection locale={locale} />
    </main>
  );
}
