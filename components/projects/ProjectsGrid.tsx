import React from 'react';
import { ProjectCard, ProjectCardProps } from '@/components/shared/ProjectCard';
import { getTranslator, Locale } from '@/lib/i18n';

export const ProjectsGrid = async ({ locale }: { locale: string }) => {
  const t = await getTranslator(locale as Locale);
  const projects: ProjectCardProps[] = [
    {
      title: t('projects.grid.residencia_obsidian.title'),
      description: t('projects.grid.residencia_obsidian.description'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-oclsmgnY2ymm2IzTQWc03NGz6kGElZ97INZiRR0ZQXWFVQto0JCwYBXvcxaLIVUGJpjjJ9vB6WFxmxNMeEgnwWgaC1tOQPSlii88FJOiXoyw1M5ImrdiSUJh3ilD0oyphfQ3P5hImxMyrXaQJNEOhyq3jVdlkS7Uj4KW3LXCSYaQnmOUdHKTi7m6M4yfcz-1YY2Fp4GzedRY-eQ--c-LQXsKwPAC3sljH69WfozxnOVHKYrM1skfPQqvMgf-Q75WTnNpohVkEA",
      location: t('projects.grid.residencia_obsidian.location'),
      status: t('projects.grid.residencia_obsidian.status') as any
    },
    {
      title: t('projects.grid.penthouse_skyline.title'),
      description: t('projects.grid.penthouse_skyline.description'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQAGJnyuHSVDcECqQ2ypbpIIb5Fsf5Ukcfoy1cBUEriEFLMX-rIx0sh-Ey3NInJUpPZ3Pf5LMFfkIGjMbN0OZRfLw5xZAI3UzEzn06s_P-qZl2ikd9eg5mxE9U9eTgUkV0ejLtVIxnzSWtYllhullKyK9NqFLp_ZbGYXRiG00T49cPZe5mQQHvcYZgZHA-w63etKyWDDwASwflVD5fna_g0eyb2oimSOCfjLDAYRyc-XLD81GILjzSKQekQLwt400VXImy7KhBhw",
      location: t('projects.grid.penthouse_skyline.location'),
      status: t('projects.grid.penthouse_skyline.status') as any
    },
    {
      title: t('projects.grid.villas_azure_bay.title'),
      description: t('projects.grid.villas_azure_bay.description'),
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALKTOasF46zeoWfZ3kAwbJpTezxeEP5rrsKskMIarkkxbAoHIT0oQQBE--g7BGo1JNIGKo5o1B-S8o6VucJqvyalS7SKIBlstmMKnQa4FFFMemGQuYsDB-9a84vsMdsWNGjTwAtykvzaxiuhJWMBTAEey1R4ehTLyiv0Krxfj0oXxRgGcJmfa4i9eDccf0o71d12YcTYja48_SRrLhsa3fUCEO9m9Q1ZEuJtrfL-hwloNSKjs_K-7A3NyUfumPXHqdnmMzdQMttg",
      location: t('projects.grid.villas_azure_bay.location'),
      status: t('projects.grid.villas_azure_bay.status') as any
    }
  ];

  return (
    <>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </>
  );
};
