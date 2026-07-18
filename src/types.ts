export interface Skill {
  name: string;
  category: 'Offensive' | 'Defensive' | 'Languages & Scripts' | 'Cloud & DevOps';
  level: number; // 1-100 percentage
  icon?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  logoType: 'ai-prime' | 'cyber-ops' | 'security-plus';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  vulnerabilitiesFound: string[];
  remediation: string;
  github?: string;
  liveDemo?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Red Team' | 'OWASP' | 'Cloud Security' | 'Threat Intelligence';
  date: string;
  readTime: string;
  tags: string[];
}
