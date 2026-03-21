import 'server-only';

export type Locale = 'es' | 'en' | 'fr';

const dictionaries = {
  es: () => import('@/locales/es.json').then((module) => module.default),
  en: () => import('@/locales/en.json').then((module) => module.default),
  fr: () => import('@/locales/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    return dictionaries['es']();
  }
  return dictionaries[locale]();
};

export const getTranslator = async (locale: Locale) => {
  const dict = await getDictionary(locale);
  return (key: string): string => {
    return (key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined) ? obj[k] : undefined, dict as any) as string) || key;
  };
};
