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
  Briefcase,
  Search,
  Sparkles
} from "lucide-react";

interface CandidateLoginProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

export default function CandidateLogin({ onBack, onLoginSuccess }: CandidateLoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call and redirect to candidate view
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess();
    }, 1500);
  };

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
        <span className="font-semibold text-sm">Back to Home</span>
      </button>

      {/* Left Side: Aspirational Career Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-blobs items-center justify-center p-20 overflow-hidden border-r border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-lg"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-primary-blue text-[10px] font-black uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Candidate Portal
          </div>
          <h1 className="text-5xl font-display font-bold leading-tight mb-6">
            Start Your <span className="text-gradient">Career Journey</span> with AI
          </h1>
          <p className="text-lg text-white/50 leading-relaxed mb-12">
            Login to explore jobs perfectly tailored to your unique skill set and career aspirations.
          </p>

          {/* Mini Dashboard Widget Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl p-6 border-primary-blue/20 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-blue/20 flex items-center justify-center">
                <Search className="w-6 h-6 text-primary-blue" />
              </div>
              <div>
                <p className="text-xs text-white/40 uppercase font-black">AI Matching Engine</p>
                <p className="font-bold">Searching for Senior Roles...</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { title: "Frontend Engineer", match: 98, color: "bg-green-400" },
                { title: "Product Designer", match: 85, color: "bg-primary-blue" }
              ].map((job, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-white/5 text-sm">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-4 h-4 text-white/40" />
                    <span className="font-medium">{job.title}</span>
                  </div>
                  <span className={`text-xs font-bold ${idx === 0 ? 'text-green-400' : 'text-primary-blue'}`}>{job.match}% Match</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Dynamic Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      {/* Right Side: Candidate Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        <div className="lg:hidden absolute inset-0 bg-blobs opacity-50 -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <img src="https://ais-dev-5rerhlahtbutmr7n4yveka-32069265483.asia-southeast1.run.app/logo.png" className="w-12 h-12 mx-auto mb-6 hidden" alt="Logo" />
               <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary-blue to-accent-violet mx-auto mb-6 flex items-center justify-center font-bold text-xl shadow-lg ring-4 ring-primary-blue/10">
                N
              </div>
              <h2 className="text-3xl font-display font-bold mb-2">Candidate Login</h2>
              <p className="text-white/40 text-sm">Access your personalized job dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/30 ml-1">Candidate Email</label>
                <div className="relative group/field">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/field:text-primary-blue transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all focus:glow-blue"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/30">Password</label>
                  <a href="#" className="text-xs text-primary-blue hover:underline font-medium">Forgot?</a>
                </div>
                <div className="relative group/field">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/field:text-primary-blue transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    required
                    placeholder="••••••••"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-sm outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all focus:glow-blue"
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
                className="w-full group relative bg-gradient-to-r from-primary-blue to-cyan-400 p-[1px] rounded-2xl hover:glow-blue transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <div className="bg-dark-bg/90 group-hover:bg-transparent py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span className="font-bold">Login as Candidate</span>
                      <Sparkles className="w-4 h-4 group-hover:scale-125 transition-transform" />
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
                <Linkedin className="w-5 h-5 text-[#0077b5]" />
                LinkedIn
              </button>
            </div>

            <p className="mt-10 text-center text-sm text-white/30">
              New to Nexus? <a href="#" className="text-white hover:text-primary-blue transition-colors font-bold underline underline-offset-4 decoration-primary-blue/30">Create Account</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
