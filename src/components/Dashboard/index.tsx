import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  BarChart2, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  User,
  Briefcase,
  FileText,
  UserCircle,
  Menu,
  X,
  Repeat
} from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";
import RecruiterDashboard from './RecruiterDashboard.tsx';
import CandidateDashboard from './CandidateDashboard.tsx';

type Role = 'recruiter' | 'candidate';

interface DashboardWrapperProps {
  onLogout: () => void;
}

export default function DashboardWrapper({ onLogout }: DashboardWrapperProps) {
  const [role, setRole] = useState<Role>('recruiter');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Overview');

  const recruiterNav = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Candidates', icon: Users },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Settings', icon: Settings },
  ];

  const candidateNav = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Jobs', icon: Briefcase },
    { name: 'Applications', icon: FileText },
    { name: 'Profile', icon: UserCircle },
    { name: 'Settings', icon: Settings },
  ];

  const currentNav = role === 'recruiter' ? recruiterNav : candidateNav;

  return (
    <div className="min-h-screen bg-dark-bg flex font-sans overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-6 right-6 z-[60] lg:hidden w-14 h-14 rounded-full bg-primary-blue text-black shadow-2xl flex items-center justify-center p-0"
      >
        {isSidebarOpen ? <X /> : <Menu />}
      </button>

      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {(isSidebarOpen || window.innerWidth >= 1024) && (
          <motion.aside 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="fixed inset-y-0 left-0 z-50 w-72 glass border-r border-white/5 bg-dark-bg/50 flex flex-col p-6 overflow-y-auto lg:static"
          >
            <div className="flex items-center gap-3 mb-10 px-2 pt-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-blue to-accent-violet flex items-center justify-center font-bold text-white shadow-lg">
                N
              </div>
              <div>
                <span className="font-display font-bold text-xl block leading-none">NexusAI</span>
                <span className="text-[10px] text-white/30 uppercase tracking-[2px] font-black">Enterprise</span>
              </div>
            </div>

            <nav className="flex-1 space-y-2">
              {currentNav.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                    activeTab === item.name 
                      ? 'bg-primary-blue/10 text-primary-blue shadow-[0_0_15px_rgba(79,156,249,0.1)]' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon className={`w-5 h-5 transition-colors ${activeTab === item.name ? 'text-primary-blue' : 'text-white/20 group-hover:text-white/60'}`} />
                  <span className="font-medium text-sm">{item.name}</span>
                  {activeTab === item.name && (
                    <motion.div layoutId="active" className="ml-auto w-1 h-4 bg-primary-blue rounded-full shadow-[0_0_8px_#4F9CF9]" />
                  )}
                </button>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 space-y-4">
               {/* Role Switcher */}
               <button 
                  onClick={() => setRole(role === 'recruiter' ? 'candidate' : 'recruiter')}
                  className="w-full flex items-center gap-4 px-4 py-3 rounded-xl glass border-primary-blue/30 text-white hover:glow-blue transition-all"
               >
                 <Repeat className="w-5 h-5 text-primary-blue" />
                 <div className="text-left">
                   <p className="text-[10px] text-white/30 uppercase font-black">Current View</p>
                   <p className="text-sm font-bold capitalize">{role}</p>
                 </div>
               </button>

               <button 
                 onClick={onLogout}
                 className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-white/40 hover:text-red-400 hover:bg-red-400/5 transition-all"
               >
                 <LogOut className="w-5 h-5" />
                 <span className="font-medium text-sm">Logout</span>
               </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 px-8 flex items-center justify-between bg-dark-bg/50 backdrop-blur-md z-40">
           <div className="flex items-center gap-4 flex-1">
             <div className="relative max-w-md w-full hidden md:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                <input 
                  placeholder="Global AI search..." 
                  className="w-full bg-white/5 border border-white/5 rounded-full py-2.5 pl-11 pr-4 text-sm outline-none focus:border-primary-blue/30 focus:bg-white/10 transition-all"
                />
             </div>
           </div>

           <div className="flex items-center gap-6">
              <button className="relative p-2 rounded-lg hover:bg-white/5 transition-colors">
                <Bell className="w-5 h-5 text-white/50" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary-blue rounded-full shadow-[0_0_5px_#4F9CF9]" />
              </button>
              <div className="h-8 w-px bg-white/10" />
              <div className="flex items-center gap-4">
                 <div className="text-right hidden sm:block">
                   <p className="text-sm font-bold">{role === 'recruiter' ? 'HR Manager' : 'Alex Johnson'}</p>
                   <p className="text-[10px] text-white/30 uppercase tracking-widest leading-none mt-1">
                      {role === 'recruiter' ? 'Recruiter Admin' : 'Senior Dev'}
                   </p>
                 </div>
                 <div className="w-10 h-10 rounded-xl glass flex items-center justify-center border-primary-blue/20">
                   {role === 'recruiter' ? <User className="w-6 h-6 text-primary-blue" /> : <img src="https://i.pravatar.cc/100?u=1" className="w-full h-full object-cover rounded-xl" />}
                 </div>
              </div>
           </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 relative scroll-smooth bg-dark-bg">
           <div className="max-w-7xl mx-auto pb-20">
              {role === 'recruiter' ? <RecruiterDashboard /> : <CandidateDashboard />}
           </div>
        </div>
      </main>
    </div>
  );
}
