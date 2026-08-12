export interface BentoProjectData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  colSpan: string;
  techStack: string[];
  isFeatured?: boolean;
  icon?: string;
}
