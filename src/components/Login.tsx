import { motion } from "motion/react";
import React, { useState } from "react";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Linkedin, 
  ArrowLeft,
  Loader2,
  Sparkles
} from "lucide-react";

import { UserRole } from "../App.tsx";

interface LoginProps {
  onBack: () => void;
  onLoginSuccess: (role: UserRole) => void;
  initialRole?: UserRole;
}

export default function Login({ onBack, onLoginSuccess, initialRole = "recruiter" }: LoginProps) {
  const [role, setRole] = useState<UserRole>(initialRole);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(role);
    }, 1500);
  };

  const isRecruiter = role === "recruiter";

  return (
    <div className="min-h-screen bg-dark-bg flex flex-col lg:flex-row overflow-hidden font-sans">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white/50 hover:text-white transition-colors group"
      >
        <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:glow-blue">
          <ArrowLeft className="w-5 h-5" />
        </div>
        <span className="font-semibold text-sm text-white/70">Back to Home</span>
      </button>

      {/* Left Side: Adaptive Visuals */}
      <div className={`hidden lg:flex lg:w-1/2 relative items-center justify-center p-20 overflow-hidden border-r border-white/5 transition-colors duration-1000 ${isRecruiter ? 'bg-gradient-to-br from-accent-violet/10 via-dark-bg to-dark-bg' : 'bg-gradient-to-br from-primary-blue/10 via-dark-bg to-dark-bg'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        
        <motion.div 
          key={role}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-lg"
        >
          <div className={`w-16 h-16 rounded-2xl mb-12 flex items-center justify-center shadow-2xl transition-all duration-500 bg-gradient-to-tr ${isRecruiter ? 'from-accent-violet to-purple-600' : 'from-primary-blue to-cyan-500'}`}>
            <span className="text-3xl font-bold font-display text-white">N</span>
          </div>
          
          <h1 className="text-5xl font-display font-bold leading-tight mb-6">
            {isRecruiter ? (
              <>Welcome Back to <span className="text-gradient">Smarter Hiring</span></>
            ) : (
              <>Start Your <span className="text-gradient">Career Journey</span></>
            )}
          </h1>
          
          <p className="text-lg text-white/50 leading-relaxed mb-12">
            {isRecruiter 
              ? "Log in to continue your AI-powered recruitment journey and connect with top talent globally."
              : "Login to explore jobs perfectly tailored to your unique skill set and career aspirations."
            }
          </p>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 text-sm text-white/40">
                <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isRecruiter ? 'bg-accent-violet shadow-[0_0_8px_#8A2BE2]' : 'bg-primary-blue shadow-[0_0_8px_#4F9CF9]'}`} />
                {isRecruiter ? (
                  i === 1 ? "Enterprise-grade security standards" :
                  i === 2 ? "Real-time candidate matching analytics" : "Unbiased AI ranking engine v2.0"
                ) : (
                  i === 1 ? "Personalized job recommendations" :
                  i === 2 ? "AI-powered skill gap analysis" : "Verified professional identity"
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Glows */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ${isRecruiter ? 'bg-accent-violet/5' : 'bg-primary-blue/5'}`} />
      </div>

      {/* Right Side: Shared Login Card */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <div className="lg:hidden absolute inset-0 bg-blobs opacity-50 -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            {/* Role Toggle Switcher */}
            <div className="p-1 glass rounded-2xl flex items-center mb-10 relative">
              <motion.div 
                className={`absolute inset-y-1 w-[49%] rounded-xl shadow-lg transition-all duration-500 ${isRecruiter ? 'translate-x-full bg-accent-violet/20' : 'bg-primary-blue/20'}`}
              />
              <button 
                type="button"
                onClick={() => setRole("candidate")}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest relative z-10 transition-colors ${role === "candidate" ? "text-primary-blue" : "text-white/30"}`}
              >
                Candidate
              </button>
              <button 
                type="button"
                onClick={() => setRole("recruiter")}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-widest relative z-10 transition-colors ${role === "recruiter" ? "text-accent-violet" : "text-white/30"}`}
              >
                Recruiter
              </button>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold mb-2">Sign In</h2>
              <p className="text-white/40 text-sm">
                Access your {isRecruiter ? "Employer" : "Candidate"} Dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-1">Email Address</label>
                <div className="relative group/field">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors ${isRecruiter ? 'group-focus-within/field:text-accent-violet' : 'group-focus-within/field:text-primary-blue'}`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none transition-all focus:bg-white/10 ${isRecruiter ? 'focus:border-accent-violet/50 focus:glow-violet' : 'focus:border-primary-blue/50 focus:glow-blue'}`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/30">Password</label>
                  <a href="#" className={`text-[10px] font-bold uppercase transition-colors ${isRecruiter ? 'text-accent-violet hover:text-white' : 'text-primary-blue hover:text-white'}`}>Forgot?</a>
                </div>
                <div className="relative group/field">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-white/30 transition-colors ${isRecruiter ? 'group-focus-within/field:text-accent-violet' : 'group-focus-within/field:text-primary-blue'}`}>
                    <Lock className="w-5 h-5" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    placeholder="••••••••"
                    className={`w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-sm outline-none transition-all focus:bg-white/10 ${isRecruiter ? 'focus:border-accent-violet/50 focus:glow-violet' : 'focus:border-primary-blue/50 focus:glow-blue'}`}
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full group relative p-[1px] rounded-2xl transition-all active:scale-[0.98] disabled:opacity-50 ${isRecruiter ? 'bg-gradient-to-r from-accent-violet to-purple-600 hover:glow-violet' : 'bg-gradient-to-r from-primary-blue to-cyan-500 hover:glow-blue'}`}
              >
                <div className="bg-[#0A0A0C] group-hover:bg-transparent py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span className="font-bold flex items-center gap-2">
                        Login to {isRecruiter ? "Portal" : "Dashboard"}
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </>
                  )}
                </div>
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Smart Auth</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 glass py-3 rounded-2xl hover:bg-white/10 transition-all text-sm font-medium">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 glass py-3 rounded-2xl hover:bg-white/10 transition-all text-sm font-medium">
                <Linkedin className={`w-5 h-5 ${isRecruiter ? 'text-accent-violet' : 'text-[#0077b5]'}`} />
                LinkedIn
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-white/30">
              New here? <a href="#" className="text-white hover:text-primary-blue transition-colors font-bold underline underline-offset-4 decoration-primary-blue/30">Apply now</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
