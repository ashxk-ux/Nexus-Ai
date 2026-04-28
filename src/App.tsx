/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Zap, 
  Search, 
  Target, 
  MessageSquare, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  CheckCircle2,
  Users,
  Globe,
  Database,
  Cpu,
  Star
} from "lucide-react";
import { useRef, useState } from "react";
import Login from "./components/Login.tsx";
import CandidateLogin from "./components/CandidateLogin.tsx";
import DashboardWrapper from "./components/Dashboard/index.tsx";

// --- Components ---

const Navbar = ({ onLoginClick, onCandidateLoginClick }: { onLoginClick: () => void, onCandidateLoginClick: () => void }) => (
  <nav className="h-20 border-b border-white/10 flex items-center justify-between px-12 z-50 sticky top-0 bg-dark-bg/80 backdrop-blur-md">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-blue to-accent-violet"></div>
      <span className="text-xl font-bold tracking-tight font-display">NexusAI</span>
    </div>
    <div className="hidden lg:flex gap-8 text-sm text-white/50 font-medium px-4">
      <a href="#features" className="hover:text-white transition-colors">Features</a>
      <a href="#how-it-works" className="hover:text-white transition-colors">Process</a>
      <a href="#dashboard" className="hover:text-white transition-colors">Platform</a>
      <a href="#why-us" className="hover:text-white transition-colors">Benefits</a>
    </div>
    <div className="flex items-center gap-4">
      <button 
        onClick={onCandidateLoginClick}
        className="hidden sm:block text-sm text-white/40 hover:text-white transition-colors font-medium"
      >
        Find Jobs
      </button>
      <button 
        onClick={onLoginClick}
        className="px-5 py-2 rounded-full border border-white/20 text-sm hover:bg-white/5 transition-all font-medium text-white shadow-lg shadow-primary-blue/5"
      >
        Hire Talent
      </button>
    </div>
  </nav>
);

const Hero = ({ onCandidateClick, onRecruiterClick }: { onCandidateClick: () => void, onRecruiterClick: () => void }) => (
  <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-20 px-12 overflow-hidden bg-blobs">
    {/* Background Blobs (Geometric Balance specific) */}
    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary-blue/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-violet/10 blur-[100px] rounded-full pointer-events-none" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl z-10"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-blue/10 border border-primary-blue/30 text-primary-blue text-xs font-semibold mb-8 w-fit mx-auto">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-blue opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-blue"></span>
        </span>
        NEW: V2.0 AI Engine Live
      </div>
      
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
        Hire Smarter with <span className="text-gradient">AI-Powered</span> Recruitment
      </h1>
      
      <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
        Automate resume screening, match top talent instantly, and make data-driven hiring decisions with the world's most advanced AI matching engine.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button 
          onClick={onCandidateClick}
          className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors glow-blue active:scale-95"
        >
          Start Your Career
        </button>
        
        <button 
          onClick={onRecruiterClick}
          className="px-8 py-4 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all text-white active:scale-95"
        >
          Hire Top Talent
        </button>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="mt-20 w-full max-w-6xl relative z-10"
    >
      <div className="glass rounded-2xl overflow-hidden shadow-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent z-10" />
        <img 
          src="https://picsum.photos/seed/tech-dashboard/1200/600?grayscale" 
          alt="Dashboard Preview" 
          className="w-full h-auto opacity-50 contrast-125"
          referrerPolicy="no-referrer"
        />
        {/* Floating UI elements overlay */}
        <div className="absolute top-1/4 left-10 p-4 glass rounded-xl hidden md:block z-20 hover:-translate-y-2 transition-transform">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary-blue/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary-blue" />
            </div>
            <div>
              <p className="text-xs text-white/50">Candidates Scanned</p>
              <p className="font-bold">12,482</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-32 right-10 p-4 glass rounded-xl hidden md:block z-20 hover:-translate-y-2 transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-accent-violet/20 flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-accent-violet border-t-transparent rounded-full animate-spin" />
            </div>
            <div>
              <p className="text-xs text-white/50">AI Analyzing Profile</p>
              <p className="font-bold">Matching: 98.4%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual glow behind the image */}
      <div className="absolute -inset-4 bg-primary-blue/20 rounded-3xl blur-3xl -z-10" />
    </motion.div>
  </section>
);

const Features = () => {
  const cards = [
    { title: "AI Resume Parsing", desc: "Instantly extract skills, experience, and key data points from any document format.", icon: Database },
    { title: "Smart Skill Matching", desc: "Our neural engine maps candidate capabilities directly to your specific requirements.", icon: Target },
    { title: "Candidate Ranking", desc: "Unbiased ranking system based on objective performance metrics and qualifications.", icon: BarChart3 },
    { title: "Explainable AI", desc: "Get detailed reasoning behind every match score to ensure transparency in hiring.", icon: Cpu },
    { title: "AI Chatbot Screening", desc: "Automate first-round interviews with context-aware AI screening bots.", icon: MessageSquare },
    { title: "Skill Gap Analysis", desc: "Identify critical skill gaps in your current team and find the perfect pieces to fill them.", icon: ShieldCheck },
  ];

  return (
    <section id="features" className="py-32 px-6 container mx-auto">
      <div className="text-center mb-20">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Powerful Features for High-Growth Teams</h2>
        <p className="text-white/60 max-w-2xl mx-auto">Everything you need to streamline your recruitment pipeline and find top talent faster.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10, scale: 1.02 }}
            className="p-8 rounded-2xl glass hover:border-primary-blue/50 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary-blue group-hover:text-black transition-colors">
              <card.icon className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold mb-4">{card.title}</h3>
            <p className="text-white/50 leading-relaxed text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Upload Resume", desc: "Drop candidates into the system", icon: Database },
    { title: "AI Processing", desc: "Rapid extraction & indexing", icon: Cpu },
    { title: "Matching Engine", desc: "Neural skill alignment", icon: Zap },
    { title: "Ranking & Insights", desc: "Data-driven visualization", icon: BarChart3 },
    { title: "Hire Top Talent", desc: "Connect with the best candidates", icon: ShieldCheck },
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
          <p className="text-white/60">From raw resume to top-tier hire in minutes.</p>
        </div>

        <div className="relative">
          {/* Animated Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 hidden lg:block -translate-y-1/2" />
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-primary-blue to-accent-violet hidden lg:block -translate-y-1/2"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-4 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 group-hover:glow-blue transition-transform">
                  <step.icon className="w-10 h-10 text-primary-blue" />
                </div>
                <h4 className="font-display text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-white/40 text-sm max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const DashboardSection = () => (
  <section id="dashboard" className="py-32 px-6 container mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="glass rounded-3xl overflow-hidden p-4 relative z-10">
          <div className="flex items-center justify-between mb-6 px-4 pt-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded bg-white/5 text-[10px] text-white/50">Search Candidate...</div>
            </div>
          </div>
          
          <div className="space-y-4 px-4 overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 glass rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-white/20 rounded mb-2" />
                    <div className="flex gap-2">
                      <div className="h-3 w-10 bg-primary-blue/30 rounded" />
                      <div className="h-3 w-12 bg-accent-violet/30 rounded" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-xl font-bold font-display text-primary-blue">{95 - i}%</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest">Match</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 glass rounded-2xl bg-gradient-to-br from-white/5 to-primary-blue/5">
             <div className="flex items-center justify-between mb-4">
               <h5 className="font-bold text-sm">Hiring Trends</h5>
               <BarChart3 className="w-4 h-4 text-primary-blue" />
             </div>
             <div className="flex items-end gap-2 h-24">
               {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                 <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-primary-blue to-accent-violet rounded-t-sm"
                 />
               ))}
             </div>
          </div>
        </div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-violet/30 blur-[60px] -z-10" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-blue/30 blur-[60px] -z-10" />
      </div>

      <div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">Insightful Dashboard for Intelligent Decisions</h2>
        <div className="space-y-8">
          {[
            { icon: Search, title: "Deep Context Filtering", desc: "Go beyond keywords. Find candidates based on project experience and context." },
            { icon: Globe, title: "Global Talent Index", desc: "Access a worldwide database of normalized skill sets and performance data." },
            { icon: Zap, title: "Real-time Scoring", desc: "Watch match scores update live as you adjust job parameters and skill weights." },
          ].map((item, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg glass flex items-center justify-center text-primary-blue">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section id="why-us" className="py-32 px-6 bg-mesh">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <div className="text-6xl font-display font-bold text-gradient mb-4">75%</div>
          <h4 className="text-xl font-bold mb-4">Faster Hiring ⚡</h4>
          <p className="text-white/60">Reduce time-to-hire by automating time-consuming manual screening phases.</p>
        </div>
        <div>
          <div className="text-6xl font-display font-bold text-gradient mb-4">98%</div>
          <h4 className="text-xl font-bold mb-4">Better Accuracy 🎯</h4>
          <p className="text-white/60">Minimize bad hires with data-backed candidate matching that really works.</p>
        </div>
        <div>
          <div className="text-6xl font-display font-bold text-gradient mb-4">60%</div>
          <h4 className="text-xl font-bold mb-4">Reduced Bias 🤖</h4>
          <p className="text-white/60">Our anonymized screening ensures focus on merit and capability alone.</p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-32 px-6 container mx-auto overflow-hidden">
    <div className="text-center mb-20">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Trusted by Forward-Thinking Teams</h2>
      <p className="text-white/60">Hear how leaders are transforming their recruitment with NexusAI.</p>
    </div>
    
    {/* Infinite Logo Scroll - Simplified Mock */}
    <div className="flex overflow-hidden space-x-12 mb-20 group relative">
       <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10" />
       <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10" />
       
       <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex space-x-12 whitespace-nowrap"
       >
          {["Microsoft", "Spotify", "Netflix", "Uber", "Airbnb", "Discord", "Stripe", "Linear"].map((name) => (
            <span key={name} className="text-2xl font-display font-black text-white/20 uppercase tracking-tighter hover:text-primary-blue/40 transition-colors cursor-default">
              {name}
            </span>
          ))}
          {/* Duplicate for seamless scroll */}
          {["Microsoft", "Spotify", "Netflix", "Uber", "Airbnb", "Discord", "Stripe", "Linear"].map((name) => (
            <span key={`${name}-2`} className="text-2xl font-display font-black text-white/20 uppercase tracking-tighter hover:text-primary-blue/40 transition-colors cursor-default">
              {name}
            </span>
          ))}
       </motion.div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="p-8 rounded-2xl glass flex flex-col justify-between">
          <div>
            <div className="flex gap-1 mb-6 text-yellow-500">
              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-white/80 italic mb-8">
              "The AI matching accuracy is uncanny. We've cut our screening time by weeks and the quality of candidates reaching interviews has never been higher."
            </p>
          </div>
          <div className="flex items-center gap-4">
            <img src={`https://i.pravatar.cc/100?u=user${i}`} alt="Client" className="w-12 h-12 rounded-full ring-2 ring-primary-blue/30" />
            <div>
              <p className="font-bold">Alex Rivera</p>
              <p className="text-xs text-white/40 uppercase">VP Engineering, TechFlow</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-32 px-6">
    <div className="container mx-auto">
      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 to-accent-violet/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Transform Your Hiring Process Today</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join 500+ global enterprises using AI to build their dream teams.
          </p>
          <button className="bg-white text-black px-12 py-5 rounded-full text-lg font-bold hover:glow-blue transition-all active:scale-95">
            Get Started Now
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-blue/20 blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-violet/20 blur-[100px] -z-10" />
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/10 glass">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-1 md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-blue to-accent-violet flex items-center justify-center font-bold text-white shadow-lg">
            N
          </div>
          <span className="font-display font-bold text-xl">NexusAI</span>
        </div>
        <p className="text-white/40 max-w-xs leading-relaxed text-sm">
          Empowering recruitment teams with the world's most intelligent skill-matching engine. Built for the future of work.
        </p>
      </div>

      <div>
        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/80">Platform</h5>
        <ul className="space-y-4 text-sm text-white/40">
          <li><a href="#" className="hover:text-primary-blue transition-colors">Resume Parser</a></li>
          <li><a href="#" className="hover:text-primary-blue transition-colors">Skill Matcher</a></li>
          <li><a href="#" className="hover:text-primary-blue transition-colors">Chatbot Screening</a></li>
          <li><a href="#" className="hover:text-primary-blue transition-colors">API Access</a></li>
        </ul>
      </div>

      <div>
        <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/80">Company</h5>
        <ul className="space-y-4 text-sm text-white/40">
          <li><a href="#" className="hover:text-primary-blue transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-primary-blue transition-colors">Case Studies</a></li>
          <li><a href="#" className="hover:text-primary-blue transition-colors">Security</a></li>
          <li><a href="#" className="hover:text-primary-blue transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    
    <div className="container mx-auto flex flex-col md:row items-center justify-between pt-10 border-t border-white/5 text-xs text-white/30 gap-6">
      <p>© 2026 Nexus AI Systems Inc. All rights reserved.</p>
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentView, setCurrentView] = useState<"landing" | "login" | "candidate-login" | "dashboard">("landing");

  if (currentView === "login") {
    return (
      <Login 
        onBack={() => setCurrentView("landing")} 
        onLoginSuccess={() => setCurrentView("dashboard")} 
      />
    );
  }

  if (currentView === "candidate-login") {
    return (
      <CandidateLogin 
        onBack={() => setCurrentView("landing")} 
        onLoginSuccess={() => setCurrentView("dashboard")} 
      />
    );
  }

  if (currentView === "dashboard") {
    return <DashboardWrapper onLogout={() => setCurrentView("landing")} />;
  }

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-primary-blue/30">
      <Navbar 
        onLoginClick={() => setCurrentView("login")} 
        onCandidateLoginClick={() => setCurrentView("candidate-login")} 
      />
      <Hero 
        onCandidateClick={() => setCurrentView("candidate-login")} 
        onRecruiterClick={() => setCurrentView("login")} 
      />
      <Features />
      <HowItWorks />
      <DashboardSection />
      <WhyUs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
