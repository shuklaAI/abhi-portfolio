export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Web' | 'Fullstack' | 'Mobile' | 'AI/ML';
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  organization: string;
  description: string;
  iconType: 'award' | 'certificate' | 'milestone';
}

export interface SkillData {
  subject: string;
  A: number; // Proficiency level (0-100)
  fullMark: number;
}