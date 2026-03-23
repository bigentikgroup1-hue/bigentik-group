import React from 'react';
import { getDictionary, Locale } from '@/lib/i18n';
import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { EditorialQuote } from '@/components/projects/EditorialQuote';
import { CTASection } from '@/components/shared/CTASection';

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const dict = await getDictionary(resolvedParams.locale as Locale);
  return (
    <main className="pt-32 pb-24 bg-background">
      <ProjectsHero dict={dict} />
      <ProjectsGrid locale={resolvedParams.locale} />
      <EditorialQuote locale={resolvedParams.locale} />

      <CTASection locale={resolvedParams.locale} />
    </main>
  );
}
