export type Locale = "en" | "es" | "fr";

export type LocalizedText = {
  en: string;
  es: string;
  fr: string;
};

export interface Project {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  coverImage: string;
  images: string[];
  location: LocalizedText;
  status?: "in construction" | "sold";
  featured?: boolean;
  createdAt?: string;
  [key: string]: any; // Catch-all for any additional un-specified fields
}
