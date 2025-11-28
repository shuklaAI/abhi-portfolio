import React from 'react';
import { Award, Star, CheckCircle } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">Certifications</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Professional certifications and milestones in my learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((achievement) => (
            <div key={achievement.id} className="bg-card p-6 rounded-xl border border-white/5 hover:border-primary/40 transition-all duration-300 flex items-start gap-4 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.15)]">
               <div className="p-3 bg-white/5 rounded-lg shrink-0">
                 {achievement.iconType === 'certificate' && <CheckCircle className="h-6 w-6 text-green-400" />}
                 {achievement.iconType === 'award' && <Award className="h-6 w-6 text-yellow-400" />}
                 {achievement.iconType === 'milestone' && <Star className="h-6 w-6 text-primary" />}
               </div>
               <div>
                 <div className="flex justify-between items-start mb-1">
                   <h3 className="text-lg font-bold text-white font-heading">{achievement.title}</h3>
                   <span className="text-xs font-mono text-slate-500 border border-slate-700 px-2 py-0.5 rounded">{achievement.date}</span>
                 </div>
                 <div className="text-accent text-sm font-semibold mb-2">{achievement.organization}</div>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   {achievement.description}
                 </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;