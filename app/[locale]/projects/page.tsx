import React from 'react';
import { getDictionary, Locale } from '@/lib/i18n';
import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { EditorialQuote } from '@/components/projects/EditorialQuote';
import { CTASection } from '@/components/shared/CTASection';

export default async function ProjectsPage({ 
  params,
  searchParams
  }: { 
    params: Promise<{ locale: string }>,
    searchParams: Promise<{ filter?: string }>
  }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const filter = resolvedSearchParams.filter || 'all';

  const dict = await getDictionary(resolvedParams.locale as Locale);
  return (
    <main className="pt-32 pb-24 bg-background">
      <ProjectsHero dict={dict} currentFilter={filter} />
      <ProjectsGrid locale={resolvedParams.locale} filter={filter} />
      <EditorialQuote locale={resolvedParams.locale} />

      <CTASection locale={resolvedParams.locale} />
    </main>
  );
}
