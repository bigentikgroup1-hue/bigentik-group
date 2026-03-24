import React from 'react';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { getTranslator, Locale } from '@/lib/i18n';
import { projects } from '@/data/projects-i18n';

export const ProjectsGrid = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);

  const getLocalizedValue = (val: any, loc: string) => {
    if (!val) return '';
    return val[loc as Locale] || val.en || '';
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-on-surface-variant font-headline text-2xl">No projects available</p>
      </div>
    );
  }

  return (
    <>
      {projects.map((project, index) => {
        const title = getLocalizedValue(project.title, locale);
        const description = getLocalizedValue(project.description, locale);
        const location = getLocalizedValue(project.location, locale);

        let statusText = '';
        if (project.status === 'sold') statusText = t('projects.filters.sold');
        else if (project.status === 'in construction') statusText = t('projects.filters.construction');

        return (
          <ProjectCard
            key={index}
            title={title}
            slug={project.slug}
            description={description}
            image={project.coverImage}
            images={project.images}
            location={location}
            status={project.status}
            statusText={statusText}
            link={`/${locale}/projects/${project.slug}`}
          />
        );
      })}
    </>
  );
};
