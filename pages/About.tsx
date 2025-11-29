import React from 'react';
import { Briefcase, Download } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { EXPERIENCES, SKILLS_DATA } from '../constants';

const About: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abhinav_Shukla_Resume.pdf'; // Must be in public/
    link.download = 'Abhinav_Shukla_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">About Me</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 font-heading">AI/ML Student & Developer</h2>
            <div className="prose prose-lg prose-invert text-slate-400 mb-8">
              <p>
                I’m Abhinav Shukla, a B.Tech student (AI/ML) from Delhi. I build ML-powered applications, 
                automation tools, and dashboards using Python, Java, and modern JS.
              </p>
              <p>
                I’ve interned on AI & data projects for edtech and media, building pipelines, APIs, and NLP systems 
                that automate content workflows. My goal is to turn complex models into accessible, usable products.
              </p>
              <p>
                When not coding, I explore new AI research papers or contribute to open-source automation tools.
              </p>
            </div>

            {/* Resume Button */}
            <div className="flex gap-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 bg-card hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button>
            </div>
          </div>

          {/* Skills Visualization */}
          <div className="bg-card p-6 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <h3 className="text-xl font-bold text-white mb-6 w-full text-left font-heading relative z-10">
              Technical Proficiency
            </h3>
            <div className="w-full h-[300px] md:h-[400px] relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILLS_DATA}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#a855f7"
                    strokeWidth={3}
                    fill="#a855f7"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-white mb-12 font-heading text-center">Experience </h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent max-w-4xl mx-auto">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-card shadow-[0_0_10px_rgba(168,85,247,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>

                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl border border-white/5 shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-2 flex-col sm:flex-row">
                    <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-accent font-medium mb-3 text-sm">{exp.company}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
