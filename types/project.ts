export interface Project {
  id: string;
  title: string;
  slug: string;
  status: string;
  description: string;
  images: string[];
  location: string;
  [key: string]: any; // Catch-all for any additional un-specified fields
}
