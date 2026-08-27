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

export const profile: Profile = {
  name: 'Shivam Gupta',
  role: 'Front-End Developer',
  tagline: 'I craft delightful, accessible, and performant web experiences with a passion for clean design and smooth interactions.',
  email: 'shivam.new2019@gmail.com',
  phone: '+91 8010164488',
  location: 'India',
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', url: 'https://github.com/boy-scripter', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivam-gupta-827202267?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: 'linkedin' },
  ],
};

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export const educations: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'IGNOU',
    period: '2021 — 2024',
    location: 'Delhi, India',
  },
  {
    id: 'edu-2',
    degree: 'Senior Secondary (XII) — Commerce with Maths',
    institution: 'CBSE Board',
    period: '2019 — 2021',
    location: 'India',
  },
  {
    id: 'edu-3',
    degree: 'Secondary (X)',
    institution: 'CBSE Board',
    period: '2018 — 2019',
    location: 'India',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages & Core',
    icon: 'code',
    skills: [
      { name: 'TypeScript', icon: 'typescript', color: '#3178C6' },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
      { name: 'HTML5', icon: 'html5', color: '#E34F26' },
      { name: 'CSS3', icon: 'css3', color: '#1572B6' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    icon: 'layers',
    skills: [
      { name: 'Angular', icon: 'angular', color: '#DD0031' },
      { name: 'React', icon: 'react', color: '#61DAFB' },
      { name: 'Next.js', icon: 'nextdotjs', color: '#000000' },
    ],
  },
  {
    name: 'Styling & Design',
    icon: 'palette',
    skills: [
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4' },
      { name: 'GSAP', icon: 'greensock', color: '#88CE02' },
    ],
  },
  {
    name: 'Tools & Workflow',
    icon: 'wrench',
    skills: [
      { name: 'Git', icon: 'git', color: '#F05032' },
      { name: 'Vite', icon: 'vite', color: '#646CFF' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Front-End Developer',
    company: 'Nimbus Tech',
    period: '2023 — Present',
    location: 'San Francisco, CA',
    description: 'Leading the front-end team in building a next-generation analytics platform used by 100k+ users.',
    achievements: [
      'Architected a modular design system adopted across 6 product teams',
      'Reduced bundle size by 40% through code splitting and lazy loading',
      'Mentored 4 junior developers and established front-end best practices',
    ],
    tags: ['Angular', 'TypeScript', 'Design Systems', 'Performance'],
  },
  {
    id: 'exp-2',
    role: 'Front-End Developer',
    company: 'Pixel Forge Studio',
    period: '2020 — 2023',
    location: 'Remote',
    description: 'Built award-winning marketing sites and interactive experiences for enterprise clients.',
    achievements: [
      'Delivered 20+ client projects with a 98% on-time delivery rate',
      'Created reusable animation library used across all projects',
      'Won Awwwards Site of the Day for two client launches',
    ],
    tags: ['React', 'GSAP', 'Three.js', 'Creative Dev'],
  },
  {
    id: 'exp-3',
    role: 'UI Developer',
    company: 'Brightwave Solutions',
    period: '2018 — 2020',
    location: 'Austin, TX',
    description: 'Developed responsive web applications and component libraries for SaaS products.',
    achievements: [
      'Built a component library of 60+ reusable UI components',
      'Improved Lighthouse scores from 60 to 95+ across all pages',
      'Collaborated with design to establish a unified visual language',
    ],
    tags: ['JavaScript', 'Sass', 'Accessibility', 'Component Libraries'],
  },
  {
    id: 'exp-4',
    role: 'Junior Web Developer',
    company: 'StartupHub',
    period: '2017 — 2018',
    location: 'Austin, TX',
    description: 'Started my career building landing pages and learning the fundamentals of web development.',
    achievements: [
      'Built and maintained 15+ landing pages for marketing campaigns',
      'Automated deployment pipeline saving 5 hours per week',
      'Learned modern JS frameworks and transitioned to app development',
    ],
    tags: ['HTML', 'CSS', 'jQuery', 'Foundations'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Lumina Dashboard',
    description: 'A real-time analytics dashboard with customizable widgets, dark mode, and smooth data visualizations. Built for scale with lazy-loaded modules.',
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Angular', 'D3.js', 'WebSocket', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Atlas Travel Planner',
    description: 'An interactive trip planning app with map integration, collaborative itineraries, and beautiful animated transitions between views.',
    image: 'https://images.pexels.com/photos/1051073/pexels-photo-1051073.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['React', 'Mapbox', 'Framer Motion', 'Firebase'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Nova Design System',
    description: 'A comprehensive component library and design system with 80+ accessible components, theming support, and full documentation.',
    image: 'https://images.pexels.com/photos/1966452/pexels-photo-1966452.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Angular', 'Storybook', 'SCSS', 'a11y'],
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Pulse Music Player',
    description: 'A web-based music player with animated visualizers, playlist management, and a sleek glassmorphism UI that responds to audio frequencies.',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['React', 'Web Audio API', 'Canvas', 'GSAP'],
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
  {
    id: 'proj-5',
    title: 'Verdant E-Commerce',
    description: 'A full-featured e-commerce storefront with cart, checkout, product filtering, and buttery-smooth page transitions.',
    image: 'https://images.pexels.com/photos/2305448/pexels-photo-2305448.jpeg?auto=compress&cs=tinysrgb&w=1200',
    tags: ['Next.js', 'Stripe', 'TypeScript', 'Sanity'],
    liveUrl: '#',
    repoUrl: '#',
    featured: false,
  },
];

export const contactInfo: ContactInfo = {
  heading: "Let's Build Something Together",
  label: 'Contact',
  subtitle: "I'm currently available for freelance work and full-time opportunities. Drop me a line and let's chat.",
};
