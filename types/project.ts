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
  coverImageMobile: string;
  images: string[];
  location: LocalizedText;
  status?: "in construction" | "sold" | "preSale";
  featured?: boolean;
  createdAt?: string;
  price?: string;
  rooms?: string;
  units?: string;
  locationLink?: string;
  unitsCharacteristics?: string;
  rentValue?: string;
  sellValue?: string;
  projectComodities?: string;
  [key: string]: any; // Catch-all for any additional un-specified fields
}
