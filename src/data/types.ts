export interface Profile {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface AboutInfo {
  heading: string;
  label: string;
  paragraphs: string[];
  highlights: { label: string; value: string }[];
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  featured: boolean;
}

export interface ContactInfo {
  heading: string;
  label: string;
  subtitle: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  icon: string;
}
