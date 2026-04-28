import React from 'react';
import { 
  Briefcase, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Zap, 
  MapPin, 
  DollarSign,
  TrendingUp,
  Award,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { motion } from "motion/react";

const stats = [
  { label: 'Jobs Applied', value: 12, icon: Briefcase, color: 'text-primary-blue' },
  { label: 'Interviews', value: 4, icon: Clock, color: 'text-accent-violet' },
  { label: 'Shortlisted', value: 2, icon: CheckCircle2, color: 'text-green-400' },
];

const jobs = [
  { id: 1, title: 'Senior Software Engineer', company: 'Google', location: 'Mountain View, CA', match: 96, salary: '$180k - $240k', status: 'Applied' },
  { id: 2, title: 'Full Stack Developer', company: 'Stripe', location: 'Remote', match: 94, salary: '$160k - $210k', status: 'In Review' },
  { id: 3, title: 'Frontend Specialist', company: 'Linear', location: 'San Francisco, CA', match: 88, salary: '$150k - $190k', status: 'New' },
];

const skillGaps = [
  { skill: 'Kubernetes', level: 40, suggestion: 'Complete CKAD certification' },
  { skill: 'GraphQL', level: 60, suggestion: 'Build a sample API with Apollo' },
  { skill: 'Node.js Performance', level: 55, suggestion: 'Explore event loop profiling' },
];

export default function CandidateDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Banner */}
      <div className="glass rounded-2xl p-8 bg-gradient-to-br from-primary-blue/10 to-accent-violet/10 border-primary-blue/30 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-display font-bold mb-2">Hello, Alex! 👋</h2>
          <p className="text-white/60 max-w-xl">
            NexusAI has found <span className="text-primary-blue font-bold">5 new jobs</span> that match your profile with 90%+ accuracy today.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/20 blur-[100px] -z-10" />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl">
            <div className={`p-3 rounded-xl bg-white/5 w-fit ${stat.color} mb-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recommended Jobs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-display font-bold">Recommended for You</h3>
            <button className="text-sm text-primary-blue hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="glass p-6 rounded-2xl group hover:border-primary-blue/50 transition-all flex flex-col md:flex-row justify-between gap-6">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    {job.company[0]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold group-hover:text-primary-blue transition-colors">{job.title}</h4>
                    <p className="text-white/60 text-sm mb-4">{job.company}</p>
                    <div className="flex flex-wrap gap-4 text-xs text-white/40">
                      <div className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</div>
                      <div className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" />{job.salary}</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
                  <div className="text-right">
                    <div className="text-2xl font-display font-bold text-gradient">{job.match}%</div>
                    <div className="text-[10px] text-white/30 uppercase font-black">AI Match</div>
                  </div>
                  <button className="px-5 py-2.5 rounded-xl bg-primary-blue text-black font-bold text-sm shadow-lg hover:glow-blue transition-all active:scale-95">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Skill Analysis */}
        <div className="lg:col-span-1 space-y-6">
          <h3 className="text-xl font-display font-bold">Skill Gap Analysis</h3>
          <div className="glass rounded-2xl p-6 bg-gradient-to-b from-white/5 to-transparent">
             <div className="flex items-center gap-2 mb-6 text-primary-blue">
               <Zap className="w-5 h-5 fill-current" />
               <h4 className="text-xs font-bold uppercase tracking-widest">AI Intelligence</h4>
             </div>

             <div className="space-y-8">
                {skillGaps.map((gap, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-white/80">{gap.skill}</span>
                      <span className="text-xs text-white/40">{gap.level}% Proficient</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-blue/30 rounded-full w-full" />
                      <div 
                        className="h-1.5 bg-gradient-to-r from-primary-blue to-accent-violet rounded-full -mt-1.5" 
                        style={{ width: `${gap.level}%` }}
                      />
                    </div>
                    <div className="flex gap-2 p-3 rounded-lg bg-white/5 text-[11px] text-white/50 leading-relaxed">
                      <BookOpen className="w-4 h-4 text-accent-violet flex-shrink-0" />
                      <div>
                        <span className="text-white/80 font-bold">Path: </span>
                        {gap.suggestion}
                      </div>
                    </div>
                  </div>
                ))}
             </div>

             <button className="w-full mt-8 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-all text-xs font-bold text-white/60">
               Generate Learning Path
               <ArrowUpRight className="w-4 h-4" />
             </button>
          </div>

          {/* Achievement Badge */}
          <div className="glass rounded-2xl p-6 border-accent-violet/30 flex items-center gap-5">
             <div className="w-16 h-16 rounded-full bg-accent-violet/20 flex items-center justify-center relative">
               <Award className="w-8 h-8 text-accent-violet" />
               <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-dark-bg flex items-center justify-center">
                 <CheckCircle2 className="w-3 h-3 text-white" />
               </div>
             </div>
             <div>
               <h5 className="font-bold">Verified Expert</h5>
               <p className="text-xs text-white/40">Nexus v2.0 Identity</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
