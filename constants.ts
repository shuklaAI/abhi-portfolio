import { Project, Experience, Achievement, SkillData } from './types';
import { Layout, Code, Smartphone, Cpu, PenTool } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'Certifications', path: '/achievements' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: '103',
    title: 'Hand-Tracking Particle Effect',
    description: 'A browser-based interactive particle simulation controlled by real-time hand-tracking using MediaPipe. Features gesture detection, smooth physics, and dynamic particle responses.',
    category: 'Web',
    technologies: ['JavaScript', 'MediaPipe', 'HTML5 Canvas'],
    imageUrl: 'https://raw.githubusercontent.com/shuklaAI/Hand-Tracking-Particle-Effect/main/preview.png',
    liveUrl: 'https://shuklaAI.github.io/Hand-Tracking-Particle-Effect/',
    repoUrl: 'https://github.com/shuklaAI/Hand-Tracking-Particle-Effect',
    featured: true,
  },
  {
    id: '102',
    title: 'VAT PDF Generator',
    description: 'A Streamlit-based tool that generates VAT-ready PDF invoices from user inputs. Supports dynamic form fields, calculation logic, and PDF export.',
    category: 'AI/ML',
    technologies: ['Python', 'Streamlit', 'ReportLab', 'Pandas'],
    imageUrl: 'https://raw.githubusercontent.com/shuklaAI/vat-pdf-demo/main/preview.png',
    liveUrl: 'https://vat-pdf-demo-26drax3t4cfgmumnrkths9.streamlit.app/',
    repoUrl: 'https://github.com/shuklaAI/vat-pdf-demo',
    featured: true,
  },
  {
    id: '1',
    title: 'AI-Powered Quiz System',
    description: 'Adaptive quiz app with instant scoring, smart randomization, and AI-based question generation.',
    category: 'AI/ML',
    technologies: ['Python', 'Flask', 'NLP', 'SQLite'],
    imageUrl: 'https://picsum.photos/800/600?random=10',
    repoUrl: 'https://github.com/shuklaAI/AI-POWERED-QUIZ-SYSTEM',
    featured: true,
  },
  {
    id: '5',
    title: 'ShuklaAI Tools Collection',
    description: 'Personal tools & automation scripts for experiments and prototyping.',
    category: 'Fullstack',
    technologies: ['Python', 'JavaScript', 'APIs'],
    imageUrl: 'https://picsum.photos/800/600?random=5',
    repoUrl: 'https://github.com/shuklaAI/shuklaAi',
    featured: false,
  },
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Python & ML', A: 90, fullMark: 100 },
  { subject: 'Java & DSA', A: 80, fullMark: 100 },
  { subject: 'Web (JS/Flask)', A: 75, fullMark: 100 },
  { subject: 'Cybersecurity', A: 70, fullMark: 100 },
  { subject: 'Automation', A: 85, fullMark: 100 },
  { subject: 'Data Science', A: 80, fullMark: 100 },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'AI & Data Science Intern',
    company: 'LastBook',
    period: '2025',
    description: 'Developed ML pipelines, recommendation models, backend APIs and NLP sorting tools.',
  },
  {
    id: '2',
    role: 'AI Research Intern',
    company: 'Khabre Vidyarthi',
    period: '2025',
    description: 'Built NLP content systems, engagement trackers and automation tools.',
  },
  {
    id: '3',
    role: 'AI/ML Intern',
    company: 'CrowdFireMedia',
    period: '2024',
    description: 'Developed engagement prediction models and API automation scripts.',
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Machine Learning',
    date: '2024',
    organization: 'Coursera',
    description: 'Comprehensive course on supervised and unsupervised learning techniques.',
    iconType: 'certificate',
  },
  {
    id: '2',
    title: 'Deep Learning Specialization',
    date: '2025',
    organization: 'Coursera',
    description: 'Mastered neural networks, CNNs, and sequence models.',
    iconType: 'certificate',
  },
  {
    id: '3',
    title: 'Python for Data Science',
    date: '2024',
    organization: 'IBM',
    description: 'Professional certification in data analysis and visualization with Python.',
    iconType: 'award',
  },
  {
    id: '4',
    title: 'Data Science Foundations',
    date: '2024',
    organization: 'Great Learning',
    description: 'Fundamental concepts of data science and statistical analysis.',
    iconType: 'milestone',
  },
];

export const CATEGORY_ICONS: Record<string, any> = {
  'Web': Layout,
  'Fullstack': Code,
  'Mobile': Smartphone,
  'AI/ML': Cpu,
};