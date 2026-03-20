import React from 'react';
import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { EditorialQuote } from '@/components/projects/EditorialQuote';
import { CTASection } from '@/components/shared/CTASection';

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 bg-background">
      <ProjectsHero />
      <ProjectsGrid />
      <EditorialQuote />

      <CTASection />
    </main>
  );
}
