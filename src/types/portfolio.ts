// Types for portfolio data
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string[];
  location: string;
  email: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  duration: string;
  features: string[];
  technologies?: string[];
  status?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  location?: string;
}
