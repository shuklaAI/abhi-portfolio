import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Radial Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(600px_400px_at_80%_20%,rgba(168,85,247,0.08),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Hero Text */}
          <div className="text-center md:text-left animate-fade-in-up">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
              AI / ML Engineer
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-heading">
              Building AI-first <br />
              <span className="text-gradient">Web & Automation Tools</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              B.Tech student (AI/ML). I build ML-powered web apps, automation pipelines, and data-driven systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-slate-700 text-white font-semibold hover:bg-white/5 hover:border-primary/50 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Tilted Code Block - The "Favorite" Feature */}
          <div className="hidden md:flex justify-center perspective-1000">
            <div className="group relative w-full max-w-lg transition-all duration-500 ease-out transform -rotate-[5deg] hover:rotate-0 hover:scale-105">
               {/* Glow Effect */}
               <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-20 blur-xl rounded-xl group-hover:opacity-40 transition-opacity duration-500"></div>
               
               <div className="relative bg-[#130a1e] bg-opacity-95 backdrop-blur rounded-xl border border-white/10 p-6 shadow-2xl font-mono text-sm leading-relaxed overflow-hidden">
                  {/* Mac-style dots */}
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#ff416c]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffd166]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00f5a0]"></div>
                  </div>

                  {/* Code */}
                  <div className="text-slate-300">
                    <p><span className="text-primary">const</span> <span className="text-[#ffd166]">developer</span> = {'{'}</p>
                    <div className="pl-4">
                      <p>name: <span className="text-accent">"Abhinav Shukla"</span>,</p>
                      <p>role: <span className="text-accent">"AI/ML Engineer"</span>,</p>
                      <p>skills: [<span className="text-accent">"Python"</span>, <span className="text-accent">"Java"</span>, <span className="text-accent">"ML / NLP"</span>],</p>
                      <p>status: <span className="text-accent">"Open for collaborations"</span></p>
                    </div>
                    <p>{'};'}</p>
                    <br/>
                    <p><span className="text-blue-400">deployProject</span>(developer);</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Featured Work</h2>
              <p className="text-slate-400">Recent deployments and experiments.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center text-primary hover:text-accent transition-colors mt-4 md:mt-0">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="group bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.1)]">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                     <span className="px-3 py-1 bg-black/50 backdrop-blur text-xs font-bold text-white rounded-full border border-white/10">
                       {project.liveUrl ? 'LIVE' : 'CODE'}
                     </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors font-heading">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/5 text-slate-300 text-xs rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex-1 btn flex items-center justify-center py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all text-sm font-medium">
                        Live Demo
                      </a>
                    ) : (
                      <button disabled className="flex-1 py-2 rounded-lg bg-white/5 text-slate-500 text-sm font-medium cursor-not-allowed">
                        Not Deployed
                      </button>
                    )}
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center text-primary hover:text-accent transition-colors">
              View all projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;