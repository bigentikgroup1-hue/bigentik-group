import en from './en.json';
import es from './es.json';
import fr from './fr.json';

export type LanguageCode = 'en' | 'es' | 'fr';

export const i18nConfig = {
  defaultLocale: 'es' as LanguageCode,
  locales: ['es', 'en', 'fr'] as LanguageCode[],
};

export const dictionaries = {
  en,
  es,
  fr,
};

export const getDictionary = (locale: LanguageCode) => {
  return dictionaries[locale] ?? dictionaries[i18nConfig.defaultLocale];
};
