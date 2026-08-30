import { Profile, Education, SkillCategory, Experience, Project, ContactInfo } from './types';
import educationData from './education.json';

export type { Profile, Education, SkillCategory, Experience, Project, ContactInfo } from './types';

export const profile: Profile = {
  name: 'Shivam Gupta',
  role: 'Frontend Developer',
  tagline: 'I build responsive web and mobile applications with clean code and great user experiences.',
  email: 'shivam.new2019@gmail.com',
  phone: '+91 8010164488',
  location: 'India',
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', url: 'https://github.com/boy-scripter', icon: 'github' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shivam-gupta-827202267', icon: 'linkedin' },
  ],
};

export const educations: Education[] = educationData as Education[];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages & Core',
    icon: 'code',
    skills: [
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
      { name: 'NestJS', icon: 'nestjs', color: '#E0234E' },
    ],
  },
  {
    name: 'Styling & UI',
    icon: 'palette',
    skills: [
      { name: 'Tailwind CSS', icon: 'tailwindcss', color: '#06B6D4' },
      { name: 'D3.js', icon: 'd3dotjs', color: '#F9A03C' },
      { name: 'Balkan.js', icon: 'javascript', color: '#F7DF1E' },
    ],
  },
  {
    name: 'Tools & Backend',
    icon: 'wrench',
    skills: [
      { name: 'Git', icon: 'git', color: '#F05032' },
      { name: 'Docker', icon: 'docker', color: '#2496ED' },
      { name: 'MongoDB', icon: 'mongodb', color: '#47A248' },
      { name: 'AWS', icon: 'amazonwebservices', color: '#FF9900' },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Frontend Developer',
    company: 'Geonix International Pvt Ltd',
    period: '2024 — Present',
    location: 'India',
    description: 'Working with Next.js, NestJS, MongoDB, and AWS for full-stack development. Also working with Medusa for e-commerce and XState for complex application workflows.',
    achievements: [
      'Developed e-commerce solutions using Medusa framework',
      'Managed complex application state with XState',
      'Integrated AWS services for deployment and scaling',
      'Built REST APIs with NestJS and MongoDB',
    ],
    tags: ['Next.js', 'NestJS', 'MongoDB', 'AWS', 'XState', 'Medusa'],
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Max Vision Solution',
    period: '2023 — 2024',
    location: 'India',
    description: 'Frontend development using React.js, Angular, and Ionic. Created interactive applications with D3.js, Balkan.js, and Alpine.js.',
    achievements: [
      'Built interactive data visualizations with D3.js',
      'Developed family tree visualization using Balkan.js',
      'Created responsive mobile apps with Ionic framework',
      'Integrated multiple REST APIs for real-time data',
    ],
    tags: ['React', 'Angular', 'Ionic', 'D3.js', 'Balkan.js', 'Alpine.js'],
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Medusa E-commerce Plugins',
    description: 'Built two open-source Medusa v2 plugins: Invoices (auto-generates sequential PDF invoices for orders/refunds with presigned URLs) and Serial Allocation (serial number management with full order lifecycle integration).',
    tags: ['Medusa', 'Node.js', 'TypeScript', 'PDF Generation', 'E-commerce'],
    liveUrl: 'https://www.npmjs.com/package/@developerx12/invoices-medusa',
    repoUrl: '',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Link Locality App',
    description: 'A social networking app enabling users to create posts, polls, and send friend requests with real-time updates and push notifications.',
    tags: ['Angular', 'Ionic', 'Real-time', 'Push Notifications'],
    liveUrl: 'https://play.google.com/store/apps/details?id=mvs.pw.linklocality&hl=en_IN',
    repoUrl: '',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'BPS Gaushala',
    description: 'A web platform dedicated to cow welfare with a blogging system, frontend translator module for multilingual support, and backend admin panel.',
    tags: ['HTML', 'Markdown', 'Translation', 'Responsive'],
    liveUrl: 'https://bpsgaushala.in/',
    repoUrl: '',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'RAG Chatbot',
    description: 'A Retrieval Augmented Generation chatbot using LangChain for document processing and vector search, with MongoDB for storing vector embeddings and Server-Sent Events for real-time streaming responses.',
    tags: ['LangChain', 'MongoDB', 'SSE', 'AI/ML', 'Vector Search'],
    liveUrl: '',
    repoUrl: '',
    featured: true,
  },
  {
    id: 'proj-5',
    title: 'Email Verification Platform',
    description: 'A scalable email verification system supporting bulk uploads, real-time validation, and analytics. Hunter.io-like platform built with modern tech stack.',
    tags: ['NestJS', 'Angular', 'GraphQL', 'RabbitMQ', 'MongoDB', 'ClickHouse'],
    liveUrl: '',
    repoUrl: 'https://github.com/boy-scripter/email-verification-frontend',
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'VanshVriksh',
    description: 'A family tree-building platform where users can create and visualize their family hierarchy interactively using D3.js and BalkanJs.',
    tags: ['D3.js', 'BalkanJs', 'JavaScript', 'SVG'],
    liveUrl: 'https://vanshvriksh.com/',
    repoUrl: '',
    featured: false,
  },
  {
    id: 'proj-7',
    title: 'Education Go',
    description: 'A quiz education app for interactive learning through quizzes with real-time leaderboard, PDF support, and secure authentication.',
    tags: ['React', 'GraphQL', 'WebSockets', 'PDF'],
    liveUrl: '',
    repoUrl: 'https://github.com/boy-scripter/react-native-education',
    featured: false,
  },
];

export const contactInfo: ContactInfo = {
  heading: "Let's Build Something Together",
  label: 'Contact',
  subtitle: "I'm currently available for freelance work and full-time opportunities. Drop me a line and let's chat.",
};

export const codeSnippet = `const developer = {
  name: '${profile.name}',
  role: '${profile.role}',
  location: '${profile.location}',
  skills: ['Angular', 'React', 'Next.js'],
  passion: 'Building great UX',
  available: true,
};

developer.build();`;
