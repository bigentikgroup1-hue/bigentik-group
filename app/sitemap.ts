import { MetadataRoute } from 'next';
import { projects } from '@/data/projects-i18n';
import { locales } from '@/proxy';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bigentik.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact', '/projects'];
  const projectSlugs = projects.map((p) => p.slug);

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Base domain entry
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1.0,
    alternates: {
      languages: locales.reduce((acc, loc) => {
        acc[loc] = `${baseUrl}/${loc}`;
        return acc;
      }, {} as Record<string, string>),
    },
  });

  // Static routes for each locale
  routes.forEach((route) => {
    locales.forEach((locale) => {
      const path = `${route}`;
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : route === '/projects' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/projects' ? 0.9 : 0.7,
        alternates: {
          languages: locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}${path}`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });

  // Dynamic project routes for each locale
  projectSlugs.forEach((slug) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: locales.reduce((acc, loc) => {
            acc[loc] = `${baseUrl}/${loc}/projects/${slug}`;
            return acc;
          }, {} as Record<string, string>),
        },
      });
    });
  });

  return sitemapEntries;
}
