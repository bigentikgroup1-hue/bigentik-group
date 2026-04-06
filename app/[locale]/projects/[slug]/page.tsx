import React from 'react';
import { notFound } from 'next/navigation';
import { DetailHero } from '@/components/projects/DetailHero';
import { ProjectGallery } from '@/components/projects/ProjectGallery';
import { ProjectOverview } from '@/components/projects/ProjectOverview';
import { InvestmentHighlights } from '@/components/projects/InvestmentHighlights';
import { FloorPlans } from '@/components/projects/FloorPlans';
import { LocationMap } from '@/components/projects/LocationMap';
import { CTASection } from '@/components/shared/CTASection';
import { Locale, getTranslator } from '@/lib/i18n';
import { projects } from '@/data/projects-i18n';

const getLocalizedValue = (val: any, loc: string) => {
  if (!val) return '';
  return val[loc as Locale] || val.en || '';
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const resolvedParams = await params;

  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslator(resolvedParams.locale as Locale);

  const title = getLocalizedValue(project.title, resolvedParams.locale);
  const description = getLocalizedValue(project.description, resolvedParams.locale);
  const location = getLocalizedValue(project.location, resolvedParams.locale);

  let statusText = '';
  if (project.status === 'sold') statusText = t('projects.filters.sold');
  else if (project.status === 'in construction') statusText = t('projects.filters.construction');

  const galleryMapped = project.images.map((img: string, i: number) => ({
    url: img,
    category: "Gallery",
    title: `${title} - Image ${i + 1}`
  }));

  return (
    <main className="bg-background">
      <DetailHero
        title={title}
        collection={""}
        image={project.coverImage || (project.images[0] ?? "")}
        imageMobile={project.coverImageMobile}
      />

      {galleryMapped.length > 0 && <ProjectGallery images={galleryMapped} />}

      <ProjectOverview
        pullQuote={description}
        paragraphs={[]}
        specs={{
          price: project.price || "-",
          completion: statusText || "-",
          units: project.units || "-",
          rooms: project.rooms || "-",
          location: location || "-"
        }}
        locale={resolvedParams.locale}
      />

      <InvestmentHighlights locale={resolvedParams.locale} />

      {/* <FloorPlans locale={resolvedParams.locale} /> */}

      <LocationMap locale={resolvedParams.locale} locationLink={project?.locationLink || ""} title={title} location={location} />

      <CTASection locale={resolvedParams.locale} />
    </main>
  );
}
