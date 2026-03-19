export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  projectId?: string; // Optional field
}
