import { Project, Experience, Achievement, SkillData } from './types';
import { Layout, Code, Smartphone, Cpu } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/portfolio' },
  { name: 'Certifications', path: '/achievements' },
  { name: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
    {
    id: '403',
    title: 'Nebula Music',
    description:
      'Nebula-Music is a full-stack music streaming application built as an educational project to demonstrate modern web development skills..',
    category: 'Fullstack',
    technologies: ['JavaScript','Python','CSS','Batchfile','Shell','PowerShell','HTML'],
    imageUrl: 'https://raw.githubusercontent.com/shuklaAI/Nebula-Music/refs/heads/main/logo.png',
    liveUrl: '',
    repoUrl: 'https://github.com/shuklaAI/Nebula-Music',
    featured: true,
  },
  {
    id: '103',
    title: 'Hand-Tracking Particle Effect',
    description:
      'A browser-based interactive particle simulation controlled by real-time hand-tracking using MediaPipe. Features gesture detection, smooth physics, and dynamic particle responses.',
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
    description:
      'A Streamlit-based tool that generates VAT-ready PDF invoices from user inputs. Supports dynamic form fields, calculation logic, and PDF export.',
    category: 'AI/ML',
    technologies: ['Python', 'Streamlit', 'ReportLab', 'Pandas'],
    imageUrl: 'https://raw.githubusercontent.com/shuklaAI/vat-pdf-demo/main/preview.png',
    liveUrl: 'https://vat-pdf-demo-26drax3t4cfgmumnrkths9.streamlit.app/',
    repoUrl: 'https://github.com/shuklaAI/vat-pdf-demo',
    featured: true,
  },
  {
    id: '1',
    title: 'AI-Resume-Screener-System',
    description:
      'Analyzes resumes against job descriptions. It evaluates keyword matches, semantic relevance, and experience, provides personalized suggestions for improvement, and dynamically shortlists candidates.',
    category: 'AI/ML',
    technologies: ['Python', 'Cython', 'C', 'C++', 'XSLT', 'Fortan'],
    imageUrl: 'https://github.com/user-attachments/assets/63eac6d1-4cc8-418a-a317-48c2d818a367',
    repoUrl: 'https://github.com/shuklaAI/AI-Resume-Screener-System',
    featured: true,
  },
  {
    id: '5',
    title: 'OCR-DATA-EXTRACTOR',
    description:
      'A simple and efficient tool that extracts text from images and PDFs using Python, Flask, and Tesseract OCR',
    category: 'Fullstack',
    technologies: ['Python'],
    imageUrl: 'https://picsum.photos/800/600?random=5',
    repoUrl: 'https://github.com/shuklaAI/OCR-DATA-EXTRACTOR',
    featured: false,
  },
];

// ✅ Updated SKILLS_DATA — based on your full resume
export const SKILLS_DATA: SkillData[] = [
  { subject: 'Python', A: 95, fullMark: 100 },
  { subject: 'Machine Learning', A: 90, fullMark: 100 },
  { subject: 'Deep Learning', A: 85, fullMark: 100 },
  { subject: 'Natural Language Processing (NLP)', A: 80, fullMark: 100 },
  { subject: 'Java', A: 75, fullMark: 100 },
  { subject: 'JavaScript / React', A: 80, fullMark: 100 },
  { subject: 'FastAPI / Flask', A: 85, fullMark: 100 },
  { subject: 'Automation (n8n / Make)', A: 90, fullMark: 100 },
  { subject: 'Data Visualization', A: 80, fullMark: 100 },
  { subject: 'Git / GitHub', A: 90, fullMark: 100 },
];

// ✅ Updated EXPERIENCES — matches your refined resume data
export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'AI/ML Engineer',
    company: 'AppSynergies Pvt. Ltd.',
    period: 'Sept 2025 – Dec 2025',
    description:
      'Designed and deployed automation workflows using n8n, Make, and AI integration tools. Built conversational AI systems with Retell AI and ManyChat to enhance client interactions and streamline processes.',
  },
  {
    id: '2',
    role: 'AI & Data Science Intern',
    company: 'LastBook (EdTech)',
    period: 'May 2025 – Jul 2025',
    description:
      'Developed and optimized ML pipelines for student analytics and content personalization. Improved data accuracy using Scikit-learn and Pandas. Supported integration of AI models into educational dashboards for real-time insights.',
  },
  {
    id: '3',
    role: 'AI Research Intern – Media & Content',
    company: 'Khabre Vidyarthi',
    period: 'Jan 2025 – Apr 2025',
    description:
      'Built Python-based automation pipelines to analyze large-scale media data. Applied NLP techniques for content tagging and keyword extraction. Contributed to optimizing AI tools for faster data processing.',
  },
  {
    id: '4',
    role: 'Web Development Intern',
    company: 'CrowdFireMedia',
    period: 'Oct 2024 – Dec 2024',
    description:
      'Developed responsive and SEO-friendly web apps using HTML, CSS, JavaScript, and React. Automated content scheduling, tracked engagement, and implemented analytics for campaign performance.',
  },
];

// ✅ Certifications / Achievements remain the same
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
    title: 'Agentic AI: From Learner to Builder.',
    date: '2025',
    organization: 'IBM SkillsBuild',
    description: 'Professional certification from IBM.',
    iconType: 'certificate',
  },
  {
    id: '4',
    title: 'Generative AI Mastermind',
    date: '2025',
    organization: 'Outskill',
    description: 'Completed under mentorship of Vaibhav Sisinty, covering advanced generative AI applications.',
    iconType: 'certificate',
  },
  {
    id: '5',
    title: 'Data Science Foundations',
    date: '2024',
    organization: 'Great Learning',
    description: 'Fundamental concepts of data science and statistical analysis.',
    iconType: 'milestone',
  },
];

export const CATEGORY_ICONS: Record<string, any> = {
  Web: Layout,
  Fullstack: Code,
  Mobile: Smartphone,
  'AI/ML': Cpu,
};
