import React from 'react';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { getTranslator, Locale } from '@/lib/i18n';
import { projects } from '@/data/projects-i18n';

export const FeaturedProjects = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);

  const getLocalizedValue = (val: any, loc: string) => {
    if (!val) return '';
    return val[loc as Locale] || val.en || '';
  };

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="bg-surface-container-low pt-32 pb-0">
      <div className="max-w-8xl mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-primary text-xs uppercase tracking-[0.3em] font-bold">{t('home.featured_projects.subtitle')}</span>
            <h2 className="font-headline text-3xl mt-4">{t('home.featured_projects.title')}</h2>
          </div>
          <a href={`/${locale}/projects`} className="text-xs uppercase tracking-widest font-bold border-b-2 border-primary pb-2">
            {t('home.featured_projects.link')}
          </a>
        </div>
      </div>

      <div className="w-full relative">
        {featuredProjects.map((project, idx) => {
          const title = getLocalizedValue(project.title, locale);
          const description = getLocalizedValue(project.description, locale);
          const location = getLocalizedValue(project.location, locale);

          let statusText = '';
          if (project.status === 'sold') statusText = t('projects.filters.sold');
          else if (project.status === 'in construction') statusText = t('projects.filters.construction');
          else if (project.status === 'preSale') statusText = t('projects.filters.preSale');

          return (
            <ProjectCard
              key={idx}
              title={title}
              slug={project.slug}
              description={description}
              image={project.coverImage}
              imageMobile={project.coverImageMobile}
              images={project.images}
              location={location}
              status={project.status}
              statusText={statusText}
              link={`/${locale}/projects/${project.slug}`}
            />
          );
        })}
      </div>
    </section>
  );
};
