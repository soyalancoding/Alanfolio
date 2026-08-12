export interface ProjectCaseStudyInnovation {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectCaseStudyResult {
  value: string;
  label: string;
}

export interface ProjectCaseStudy {
  challenge: string;
  solution: string;
  innovations: ProjectCaseStudyInnovation[];
  results: ProjectCaseStudyResult[];
  testimonial: string;
}

export interface ProjectData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudy?: ProjectCaseStudy;
}
