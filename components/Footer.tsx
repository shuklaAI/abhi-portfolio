import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#09040f] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-8 mb-6 md:hidden">
            <a href="https://github.com/shuklaAI" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/abhinav-shukla-837141300" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:abhinav.shukla@outlook.in" className="text-slate-400 hover:text-primary">
              <Mail className="h-5 w-5" />
            </a>
        </div>
        <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Abhinav Shukla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;