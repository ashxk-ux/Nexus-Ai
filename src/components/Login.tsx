import { motion } from "motion/react";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Linkedin, 
  ArrowLeft,
  Loader2
} from "lucide-react";
import { useState } from "react";

interface LoginProps {
  onBack: () => void;
}

export default function Login({ onBack }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000);
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

      {/* Left Side: Abstract Visuals */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-blobs items-center justify-center p-20 overflow-hidden border-r border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-lg"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-blue to-accent-violet mb-12 flex items-center justify-center shadow-2xl">
            <span className="text-3xl font-bold font-display">N</span>
          </div>
          <h1 className="text-5xl font-display font-bold leading-tight mb-6">
            Welcome Back to <span className="text-gradient">Smarter Hiring</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed">
            Log in to continue your AI-powered recruitment journey and connect with top talent globally.
          </p>

          <div className="mt-12 space-y-6">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * i }}
                className="flex items-center gap-4 text-sm text-white/40"
              >
                <div className="w-2 h-2 rounded-full bg-primary-blue shadow-[0_0_8px_#4F9CF9]" />
                {i === 1 && "Enterprise-grade security standards"}
                {i === 2 && "Real-time candidate matching analytics"}
                {i === 3 && "Unbiased AI ranking engine v2.0"}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative Particles (Simulated) */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-blue/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-violet/10 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      {/* Right Side: Login Card */}
      <div className="flex-1 flex items-center justify-center p-6 relative">
        {/* Mobile background elements */}
        <div className="lg:hidden absolute inset-0 bg-blobs opacity-50 -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-blue/10 blur-[60px] rounded-full group-hover:bg-primary-blue/20 transition-colors" />
            
            <div className="text-center mb-10">
              <h2 className="text-3xl font-display font-bold mb-2">Sign In</h2>
              <p className="text-white/40 text-sm">Access your intelligence dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/30 ml-1">Email Address</label>
                <div className="relative group/field">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within/field:text-primary-blue transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    required
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm outline-none focus:border-primary-blue/50 focus:bg-white/10 transition-all focus:glow-blue"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/30">Password</label>
                  <a href="#" className="text-xs text-primary-blue hover:underline">Forgot?</a>
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

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full group relative bg-gradient-to-r from-primary-blue to-accent-violet p-[1px] rounded-2xl hover:glow-blue transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <div className="bg-dark-bg/90 group-hover:bg-transparent py-4 rounded-2xl transition-all flex items-center justify-center gap-2">
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <span className="font-bold">Login to Dashboard</span>
                      <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-[10px] uppercase tracking-widest text-white/20 font-bold">Or continue with</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Social Logins */}
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
              Don't have an account? <a href="#" className="text-white hover:text-primary-blue transition-colors font-bold underline underline-offset-4 decoration-primary-blue/30">Create one now</a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
