import React from 'react';
import { 
  Users, 
  UserCheck, 
  UserPlus, 
  Search, 
  Filter, 
  ChevronRight,
  TrendingUp,
  Briefcase,
  MapPin,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Applied', value: 400 },
  { name: 'Screened', value: 300 },
  { name: 'Technical', value: 200 },
  { name: 'Culture', value: 100 },
  { name: 'Hired', value: 50 },
];

const skillData = [
  { name: 'React', demand: 85, supply: 40 },
  { name: 'Node.js', demand: 70, supply: 30 },
  { name: 'Python', demand: 90, supply: 60 },
  { name: 'Design', demand: 65, supply: 45 },
  { name: 'Cloud', demand: 80, supply: 20 },
];

const candidates = [
  { id: 1, name: 'Alex Johnson', role: 'Senior React Developer', exp: '8 years', match: 98, skills: ['React', 'TypeScript', 'Node.js'], status: 'Shortlisted' },
  { id: 2, name: 'Sarah Miller', role: 'Product Designer', exp: '5 years', match: 94, skills: ['Figma', 'UI/UX', 'Prototyping'], status: 'Screening' },
  { id: 3, name: 'Michael Chen', role: 'Backend Engineer', exp: '6 years', match: 88, skills: ['Go', 'Kubernetes', 'AWS'], status: 'Applied' },
];

export default function RecruiterDashboard() {
  const [selectedCandidate, setSelectedCandidate] = React.useState<typeof candidates[0] | null>(null);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Candidates', value: '1,284', icon: Users, color: 'text-primary-blue' },
          { label: 'Shortlisted', value: '42', icon: UserCheck, color: 'text-green-400' },
          { label: 'Hired', value: '12', icon: UserPlus, color: 'text-accent-violet' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-24 h-24 opacity-5 bg-current rounded-bl-full ${stat.color}`} />
            <div className="flex items-start justify-between">
              <div>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                <h3 className="text-3xl font-display font-bold">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-xl bg-white/5 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-green-400/80">
              <TrendingUp className="w-3 h-3" />
              <span>+12.5% vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Candidate List */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-2xl p-6">
            <div className="flex flex-col md:row md:items-center justify-between gap-4 mb-8">
              <h3 className="text-xl font-display font-bold">Top Matches</h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input 
                    placeholder="Search candidate..." 
                    className="bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:border-primary-blue/50 transition-all w-64"
                  />
                </div>
                <button className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {candidates.map((c) => (
                <div 
                  key={c.id}
                  onClick={() => setSelectedCandidate(c)}
                  className={`flex flex-col md:flex-row md:items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    selectedCandidate?.id === c.id ? 'bg-primary-blue/10 border-primary-blue/50 glow-blue' : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <img 
                      src={`https://i.pravatar.cc/100?u=${c.id}`} 
                      className="w-12 h-12 rounded-full border-2 border-white/10" 
                      alt=""
                    />
                    <div>
                      <h4 className="font-bold">{c.name}</h4>
                      <p className="text-xs text-white/40">{c.role} • {c.exp}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="hidden md:flex gap-2">
                      {c.skills.map(s => (
                        <span key={s} className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-white/60">{s}</span>
                      ))}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-display font-bold text-primary-blue">{c.match}%</div>
                      <div className="text-[10px] text-white/30 uppercase font-black">AI Match</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/20" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
             <h3 className="text-xl font-display font-bold mb-6">Recruitment Funnel</h3>
             <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                    <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} />
                    <YAxis stroke="#ffffff40" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '12px' }}
                      itemStyle={{ color: '#4F9CF9' }}
                    />
                    <Bar dataKey="value" fill="url(#colorValue)" radius={[4, 4, 0, 0]} />
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F9CF9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0.3}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
             </div>
          </div>
        </div>

        {/* Right Sidebar: Details & Insights */}
        <div className="lg:col-span-1 space-y-6">
          <AnimatePresence mode="wait">
            {selectedCandidate ? (
              <motion.div 
                key={selectedCandidate.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="glass rounded-2xl p-6 h-full border-primary-blue/30 sticky top-24"
              >
                <div className="text-center mb-8">
                   <img 
                    src={`https://i.pravatar.cc/150?u=${selectedCandidate.id}`} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary-blue/20 p-1" 
                    alt=""
                  />
                  <h3 className="text-2xl font-display font-bold">{selectedCandidate.name}</h3>
                  <p className="text-white/40 mb-6">{selectedCandidate.role}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button className="flex-1 py-3 rounded-xl bg-primary-blue text-black font-bold text-sm hover:glow-blue transition-all">Shortlist</button>
                    <button className="flex-1 py-3 rounded-xl glass text-white font-bold text-sm hover:bg-white/10 transition-all">Reject</button>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold uppercase text-white/30 tracking-widest mb-4">AI Score Breakdown</h4>
                    <div className="space-y-4">
                      {[
                        { label: 'Technical Proficiency', val: 95 },
                        { label: 'Cultural Alignment', val: 82 },
                        { label: 'Experience Depth', val: 91 },
                      ].map(item => (
                        <div key={item.label}>
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-white/60">{item.label}</span>
                            <span className="font-bold text-primary-blue">{item.val}%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${item.val}%` }}
                              className="h-full bg-gradient-to-r from-primary-blue to-accent-violet rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-primary-blue/5 border border-primary-blue/20">
                    <h4 className="text-xs font-bold text-primary-blue uppercase tracking-widest mb-3">AI Insights</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-xs text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                        Exceptionally strong in Reactive patterns and System Architecture.
                      </li>
                      <li className="flex items-start gap-2 text-xs text-white/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                        Moderate overlap with Node.js requirement; might need 2-3 weeks ramp up.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div className="glass rounded-2xl p-8 h-full flex flex-col items-center justify-center text-center border-dashed border-white/10 sticky top-24">
                <Briefcase className="w-12 h-12 text-white/10 mb-4" />
                <h4 className="text-lg font-bold text-white/30">Select a candidate to view AI insights</h4>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
