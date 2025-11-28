import React, { useState } from 'react';
import { ExternalLink, Github, Eye, X, Monitor, Code, Smartphone, Cpu } from 'lucide-react';
import { PROJECTS, CATEGORY_ICONS } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web', 'AI/ML', 'Fullstack'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  const openProject = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Project Deployments</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Live demos and source code repositories.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-primary to-accent border-transparent text-white shadow-lg scale-105'
                  : 'bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/40 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col h-full"
            >
              {/* Card Image Area */}
              <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => openProject(project)}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-sm">
                  <span className="text-white font-semibold text-sm">View Details</span>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded text-white ${project.liveUrl ? 'bg-gradient-to-r from-green-500 to-emerald-600' : 'bg-slate-700'}`}>
                    {project.liveUrl ? 'Live' : 'Source'}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-heading">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/5 text-slate-400 text-xs rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm font-medium">
                        <ExternalLink className="w-4 h-4 mr-2"/> Live Demo
                      </a>
                    ) : (
                      <button disabled className="flex-1 py-2 rounded-lg bg-white/5 text-slate-500 text-sm font-medium cursor-not-allowed flex items-center justify-center">
                        Not Deployed
                      </button>
                    )}
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-all" title="View Code">
                      <Github className="h-5 w-5" />
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in" onClick={closeProject}>
          <div className="bg-[#12071a] w-full max-w-4xl max-h-[90vh] rounded-2xl border border-primary/20 shadow-2xl overflow-hidden flex flex-col md:flex-row" onClick={e => e.stopPropagation()}>
             
             {/* Image Section (Mobile Top, Desktop Left) */}
             <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-black">
               <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-contain md:object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#12071a] to-transparent md:bg-gradient-to-r"></div>
             </div>

             {/* Content Section */}
             <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white font-heading">{selectedProject.title}</h2>
                    <span className="text-primary text-sm font-medium uppercase tracking-wider">{selectedProject.category}</span>
                  </div>
                  <button onClick={closeProject} className="p-1 text-slate-400 hover:text-white">
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed text-sm">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h3 className="text-sm font-bold text-white uppercase mb-3">Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white/5 text-accent text-sm rounded-full border border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                   {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary/25"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                   )}
                   {selectedProject.repoUrl && (
                    <a 
                      href={selectedProject.repoUrl} 
                      target="_blank" 
                      rel="noreferrer"
                      className={`flex items-center justify-center px-4 py-3 border border-white/20 text-white rounded-lg font-medium hover:bg-white/5 transition-colors ${!selectedProject.liveUrl ? 'flex-1' : ''}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                   )}
                </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;