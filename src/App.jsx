import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Database, 
  Cloud,
  ArrowRight,
  Server,
  Code2,
  ShieldCheck,
  Cpu,
  Globe,
  Layers,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Menu,
  X,
  Phone,
  Activity,
  Zap,
  Lock,
  Search
} from 'lucide-react';

// --- ANIMATION WRAPPER ---
const Reveal = ({ children, width = "w-full", delay = 0, x = 0, y = 40 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasTriggered.current) {
        setIsVisible(true);
        hasTriggered.current = true;
      }
    }, { 
      threshold: 0.2, 
      rootMargin: "0px 0px -100px 0px" 
    });

    if (ref.current) observer.observe(ref.current);
    return () => {
      if(ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`relative ${width}`}>
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isVisible ? "translate-y-0 translate-x-0 opacity-100" : ""
        }`}
        style={{ 
          transitionDelay: `${delay}s`,
          transform: isVisible ? 'none' : `translate(${x}px, ${y}px)`,
          opacity: isVisible ? 1 : 0
        }}
      >
        {children}
      </div>
    </div>
  );
};

// --- DATA ---
const PROJECTS = [
  {
    id: "controlhub",
    title: "ControlHub",
    category: "Monitoring & Admin Dashboard",
    desc: "A multi-module backend system designed for high-availability admin operations. Implemented complex environment variable management and real-time service health tracking.",
    technical: "Focused on operational stability and maintaining separate development/production environments.",
    link: "https://github.com/anudeep-kumar-beri/controlhub_frontend",
    tags: ["Node.js", "Express", "PostgreSQL", "React"],
    icon: <Terminal className="w-8 h-8 md:w-12 md:h-12" />
  },
  {
    id: "fileshare",
    title: "FileShare",
    category: "Cloud File Sharing Platform",
    desc: "Full-stack cloud storage solution utilizing worker threads and Redis queues for asynchronous processing. Features secure signed-URL delivery and automated retries.",
    technical: "API and Background Worker deployed as separate microservices to AWS App Runner.",
    link: "https://github.com/anudeep-kumar-beri/fileshare",
    tags: ["Redis", "BullMQ", "Cloudinary", "Mailgun"],
    icon: <Cloud className="w-8 h-8 md:w-12 md:h-12" />
  },
  {
    id: "embroidery",
    title: "Freelance Order System",
    category: "AWS Asset Management",
    desc: "An end-to-end asset management system for embroidery freelance workflows. Built to handle secure uploads and automated order tracking for clients.",
    technical: "Optimized cost trade-offs between AWS App Runner and traditional EC2 instances.",
    link: "#",
    tags: ["AWS", "S3", "Auto-scaling", "Cost"],
    icon: <Database className="w-8 h-8 md:w-12 md:h-12" />
  }
];

const TIMELINE = [
  {
    date: "2025 — present",
    title: "Cloud Operations Focus",
    company: "Independent Research",
    desc: "Shifted focus toward infrastructure. Mastered environment management, containerized deployments, and Redis-backed queue systems.",
    icon: <Briefcase size={20} />
  },
  {
    date: "2023 — 2027",
    title: "B.Tech Computer Science Engineering",
    company: "Narayana Engineering College",
    desc: "Specializing in OS, Networking, and Backend Systems. Currently maintaining a 65% aggregate with a focus on cloud-native architectures.",
    icon: <GraduationCap size={20} />
  },  
  
    {
    date: "2021-2023",
    title: "Intermediate",
    company: "Narayana Junior College",
    desc: "Completed foundation in Mathematics, Physics, and Chemistry with a Grade of 8.3, building the analytical core for engineering.",
    icon: <GraduationCap size={20} />
  }

];

const SKILLS = [
  { name: "Node.js", level: 90, icon: <Code2 size={16} /> },
  { name: "PostgreSQL", level: 85, icon: <Database size={16} /> },
  { name: "AWS Cloud", level: 80, icon: <Cloud size={16} /> },
  { name: "Redis / MQ", level: 88, icon: <Zap size={16} /> },
  { name: "System Design", level: 75, icon: <Layers size={16} /> },
  { name: "Linux Admin", level: 82, icon: <Terminal size={16} /> },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const Navigation = () => (
    <>
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled || mobileMenuOpen ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-4' : 'py-6 md:py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => navigateTo('home')} className="z-50 text-lg md:text-xl font-black tracking-tighter flex items-center gap-2 group">
          <div className="w-2 h-2 bg-[#10B981] rounded-full group-hover:scale-150 transition-transform" />
          ANUDEEP KUMAR
        </button>

        <div className="hidden md:flex gap-12 items-center">
          {['Home', 'Work', 'About', 'Contact'].map(item => (
            <button 
              key={item} 
              onClick={() => navigateTo(item.toLowerCase())}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all ${
                currentPage === item.toLowerCase() ? 'text-[#10B981]' : 'text-white/40 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
          <a href="mailto:anudeepkumarberi@gmail.com" className="px-6 py-2 bg-white text-black text-[10px] font-black rounded-full hover:bg-[#10B981] hover:text-white transition-all">
            HIRE SRE
          </a>
        </div>

        <button className="md:hidden z-50 p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>

    <div className={`fixed inset-0 bg-black transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden flex flex-col justify-center items-center gap-8 px-6 z-40`}>
       {['Home', 'Work', 'About', 'Contact'].map((item, idx) => (
        <button 
          key={item} 
          onClick={() => navigateTo(item.toLowerCase())}
          className={`text-4xl font-black tracking-tighter transition-all ${
            currentPage === item.toLowerCase() ? 'text-[#10B981]' : 'text-white/40'
          }`}
          style={{ transitionDelay: `${idx * 0.1}s` }}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
    </>
  );

  const HomePage = () => (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full">
          <Reveal y={20}>
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-8 md:w-12 h-[1px] bg-[#10B981]" />
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-[#10B981] uppercase">SRE & Infrastructure Focused</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} y={30}>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-12">
              BUILDING <br /> 
              <span className="text-white/20">RELIABLE SYSTEMS.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2} y={30}>
            <p className="text-lg md:text-2xl text-white/40 font-light leading-relaxed max-w-2xl mb-12">
              Deploying scalable backend architectures with focus on <span className="text-white">high availability</span>, 
              efficient <span className="text-white">cloud operations</span>, and stable infrastructure.
            </p>
          </Reveal>
          <Reveal delay={0.3} y={30}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 items-center">
              <button onClick={() => navigateTo('work')} className="w-full sm:w-auto px-8 py-4 bg-[#10B981] text-black font-black text-sm rounded-full flex items-center justify-center gap-3 hover:bg-white transition-all">
                VIEW ARCHITECTURES <ArrowRight size={18} />
              </button>
              <div className="flex gap-4">
                <a href="https://github.com/anudeep-kumar-beri" className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-[#10B981] transition-all">
                  <Github size={20} className="text-white/80" />
                </a>
                <a href="https://linkedin.com/in/anudeep-kumar-beri" className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-[#10B981] transition-all">
                  <Linkedin size={20} className="text-white/80" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Ticker */}
      <div className="relative py-12 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="flex items-center gap-10 md:gap-24 animate-marquee-slow whitespace-nowrap">
          {['99.9% UPTIME GOAL', 'AWS APP RUNNER', 'ENVIRONMENT SECURITY', 'REDIS WORKER QUEUES', 'POSTGRES OPTIMIZATION'].map((text) => (
            <div key={text} className="flex items-center gap-10 md:gap-16">
              <span className="text-3xl md:text-5xl font-black text-white/[0.07] tracking-tighter uppercase">{text}</span>
              <div className="w-2 h-2 bg-[#10B981]/30 rounded-full" />
            </div>
          ))}
          {['99.9% UPTIME GOAL', 'AWS APP RUNNER', 'ENVIRONMENT SECURITY', 'REDIS WORKER QUEUES', 'POSTGRES OPTIMIZATION'].map((text) => (
            <div key={`${text}-loop`} className="flex items-center gap-10 md:gap-16">
              <span className="text-3xl md:text-5xl font-black text-white/[0.07] tracking-tighter uppercase">{text}</span>
              <div className="w-2 h-2 bg-[#10B981]/30 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* New Section: Tech Ecosystem */}
      <section className="py-24 md:py-40 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <Reveal y={20}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">TECH STACK <span className="text-[#10B981]">&</span> TOOLS</h2>
                <p className="text-white/40 leading-relaxed text-lg">My primary toolkit for building and maintaining production-grade applications. Focused on JavaScript ecosystem and Cloud Native tools.</p>
              </div>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full text-[#10B981] text-[10px] font-bold tracking-widest uppercase">Expertise Grid</div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, idx) => (
              <Reveal key={skill.name} delay={idx * 0.1}>
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/[0.08] transition-all group">
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 bg-black rounded-xl text-[#10B981]">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Efficiency: {skill.level}%</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4">{skill.name}</h4>
                  <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#10B981] group-hover:bg-white transition-all duration-1000" 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Operational Metrics (Visualizer) */}
      <section className="py-24 md:py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal x={-20}>
              <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none">THE RELIABILITY <br /> <span className="text-[#10B981]">MANTRA.</span></h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#10B981]/10 rounded-2xl flex items-center justify-center text-[#10B981]">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Real-time Monitoring</h4>
                    <p className="text-white/40 leading-relaxed">Implementing health-checks and logging to ensure every microservice is performing within expected latency parameters.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#10B981]/10 rounded-2xl flex items-center justify-center text-[#10B981]">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Immutable Infrastructure</h4>
                    <p className="text-white/40 leading-relaxed">Focusing on containerization to ensure that what works on my local machine works perfectly in production.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal x={20}>
              <div className="bg-black border border-white/10 rounded-[3rem] p-8 md:p-12 relative">
                <div className="absolute top-8 left-8 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="mt-8 font-mono text-sm space-y-4">
                  <div className="text-white/20 uppercase text-[10px] font-bold tracking-[0.2em] mb-4">Instance Console</div>
                  <div className="flex gap-4"><span className="text-[#10B981]">$</span> <span className="text-white/60">kubectl get pods --all-namespaces</span></div>
                  <div className="pl-6 text-white/40">
                    <div>api-v2-77f6889 ... Running</div>
                    <div>worker-redis-3s2 ... Running</div>
                    <div>auth-svc-99x21 ... Running</div>
                  </div>
                  <div className="flex gap-4"><span className="text-[#10B981]">$</span> <span className="text-white/60">monitoring --status</span></div>
                  <div className="p-4 bg-[#10B981]/5 border border-[#10B981]/20 rounded-xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#10B981] font-bold">Health Status: OK</span>
                      <span className="text-[10px] text-white/30 tracking-widest">LATENCY: 42ms</span>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => (
                        <div key={i} className={`h-8 w-full rounded-sm ${i > 12 ? 'bg-white/10 animate-pulse' : 'bg-[#10B981]/40'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Philosophies */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12">
          {['Infrastructure', 'Maintenance', 'Environment'].map((title, idx) => (
            <Reveal key={title} delay={0.1 * (idx + 1)}>
              <div className="group p-8 md:p-12 bg-white/5 rounded-[3rem] border border-white/10 hover:border-[#10B981]/50 transition-all h-full">
                {idx === 0 && <Server className="w-12 h-12 text-[#10B981] mb-8" />}
                {idx === 1 && <ShieldCheck className="w-12 h-12 text-[#10B981] mb-8" />}
                {idx === 2 && <Layers className="w-12 h-12 text-[#10B981] mb-8" />}
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-white/40 leading-relaxed">
                  {idx === 0 && "Handling complex cloud environments on AWS, Vercel, and Render with automated scaling policies."}
                  {idx === 1 && "Continuous integration and monitoring to catch issues before they impact the end-user experience."}
                  {idx === 2 && "Staged environment variables management ensuring secure secrets and configuration across fleets."}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Reveal y={20}>
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12">READY TO DEPLOY?</h2>
            <button onClick={() => navigateTo('contact')} className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black rounded-full hover:bg-[#10B981] hover:text-white transition-all overflow-hidden">
              <span className="relative z-10">GET IN TOUCH</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );


const WorkPage = () => (
    <div className="pt-32 md:pt-40 px-6 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <Reveal y={20}>
             <p className="text-[#10B981] font-bold text-[10px] md:text-xs mb-4 uppercase tracking-[0.4em]">Case Studies</p>
          <h2 className="text-5xl md:text-8xl font-black mb-12 md:mb-20 tracking-tighter">THE ARCHIVES</h2>
        </Reveal>

        <div className="space-y-24 md:space-y-40">
          {PROJECTS.map((project, idx) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-10 md:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <Reveal x={idx % 2 === 0 ? -20 : 20} y={0}>
                  <div className="aspect-video bg-white/5 rounded-[2rem] md:rounded-[3rem] border border-white/10 flex items-center justify-center group overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    {project.icon}
                    <div className="absolute bottom-6 md:bottom-10 flex flex-wrap justify-center gap-2 md:gap-4 px-4">
                      {project.tags.slice(0, 3).map(t => <span key={t} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[9px] md:text-[10px] border border-white/10">{t}</span>)}
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <Reveal delay={0.2} x={0} y={20}>
                  <p className="text-[#10B981] font-bold text-[10px] mb-4 uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-3xl md:text-6xl font-black mb-6 leading-none tracking-tight">{project.title}</h3>
                  <p className="text-white/50 text-base md:text-xl leading-relaxed mb-8">{project.desc}</p>
                  <div className="p-6 md:p-8 bg-white/5 border-l-4 border-[#10B981] rounded-r-3xl mb-10 text-left">
                    <h4 className="text-[10px] font-black uppercase mb-2">Technical Execution</h4>
                    <p className="text-white/70 italic text-sm">"{project.technical}"</p>
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all group">
                    EXPLORE REPO <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="pt-32 md:pt-40 px-6 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start mb-24 md:mb-32">
          <Reveal y={20}>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-8 md:mb-12">
              BUILDING FOR <br /> <span className="text-[#10B981]">AVAILABILITY.</span>
            </h2>
            <div className="space-y-6 text-white/50 text-base md:text-lg leading-relaxed max-w-lg">
              <p>I am a Computer Science undergraduate at Narayana Engineering College with a specialized interest in the "Operations" side of backend development.</p>
              <p>While many focus purely on features, I focus on how those features behave in a production environment—handling deployments and ensuring reliability.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Reveal delay={0.2} y={20}>
              <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
                <h4 className="text-3xl md:text-4xl font-black text-[#10B981] mb-2">65%</h4>
                <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">B.Tech Aggregate</p>
              </div>
            </Reveal>
            <Reveal delay={0.3} y={20}>
              <div className="p-6 md:p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
                <h4 className="text-3xl md:text-4xl font-black text-[#10B981] mb-2">8.3</h4>
                <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Inter Grade</p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative py-10 md:py-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block" />
          <div className="absolute left-[20px] top-0 bottom-0 w-[1px] bg-white/10 md:hidden" />
          
          <div className="space-y-20 md:space-y-32 relative">
            {TIMELINE.map((item, i) => (
              <div key={i} className="relative w-full">
                <div className="absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 z-20 flex items-center justify-center">
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border-2 border-[#10B981] flex items-center justify-center text-[#10B981] shadow-[0_0_20px_#10B98133]">
                    {item.icon}
                  </div>
                </div>

                <div className={`flex flex-col md:flex-row items-center gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-full md:w-1/2 pl-16 md:px-12">
                    <Reveal x={0} y={20} delay={0.1}>
                      <div className={`p-8 md:p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[2.5rem] hover:border-[#10B981]/50 transition-all group ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <p className="text-[9px] md:text-[10px] font-black text-[#10B981] uppercase tracking-[0.4em] mb-3">{item.date}</p>
                        <h4 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white transition-colors">{item.title}</h4>
                        <p className="text-white/40 font-bold mb-4 md:mb-6 text-xs uppercase tracking-widest">{item.company}</p>
                        <p className="text-white/40 text-xs md:text-sm leading-relaxed max-w-sm inline-block">{item.desc}</p>
                      </div>
                    </Reveal>
                  </div>
                  <div className="hidden md:block w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setStatus({ type: '', message: '' });

      try {
        // EmailJS configuration - You need to replace these with your actual IDs from emailjs.com
        await emailjs.send(
          'service_sxat8yz',     // Replace with your EmailJS service ID
          'template_3nstpsq',    // Replace with your EmailJS template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Anudeep Kumar Beri',
            to_email: 'anudeepkumar9347@gmail.com',
          },
          'AYJFo-P6bt2cdu0gn'      
        );

        setStatus({ 
          type: 'success', 
          message: '✓ Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } catch (error) {
        setStatus({ 
          type: 'error', 
          message: '✗ Failed to send message. Please try again or email directly.' 
        });
        console.error('EmailJS Error:', error);
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="pt-32 md:pt-40 px-6 pb-20 min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20">
            <Reveal y={20}>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10 md:mb-12 text-center lg:text-left">LET'S <br /> <span className="text-[#10B981]">SYNC.</span></h2>
              <div className="space-y-6 md:space-y-8">
                <a href="mailto:anudeepkumarberi@gmail.com" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#10B981] transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Email Address</p>
                    <p className="text-sm md:text-lg font-bold">anudeepkumarberi@gmail.com</p>
                  </div>
                </a>
                <a href="https://linkedin.com/in/anudeep-kumar-beri" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#10B981] transition-all">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">LinkedIn Profile</p>
                    <p className="text-sm md:text-lg font-bold">Anudeep Kumar Beri</p>
                  </div>
                </a>
                <a href="tel:+918019910550" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-all">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-[#10B981] transition-all">
                    <Phone size={20} />
              </div>
                <div>
                    <p className="text-[9px] text-white/40 uppercase font-bold tracking-widest">Phone Number</p>
                    <p className="text-sm md:text-lg font-bold">+91 8019910550</p>
               </div>
              </a>
              </div>
            </Reveal>

            <Reveal delay={0.2} y={30}>
              <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] md:rounded-[3rem]">
                <h3 className="text-lg md:text-2xl font-bold mb-8 italic text-white/60">"Seeking a Tech Role focused on deployments, operations, and system maintenance."</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    placeholder="Your Name / Company" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#10B981] outline-none transition-colors text-sm disabled:opacity-50" 
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#10B981] outline-none transition-colors text-sm disabled:opacity-50" 
                  />
                  <textarea 
                    rows="3" 
                    placeholder="Message..." 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#10B981] outline-none transition-colors resize-none text-sm disabled:opacity-50"
                  ></textarea>
                  
                  {status.message && (
                    <div className={`p-4 rounded-xl text-sm font-bold ${status.type === 'success' ? 'bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                      {status.message}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 md:py-6 bg-[#10B981] text-black font-black uppercase text-[10px] tracking-widest rounded-2xl md:rounded-3xl hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      'ESTABLISH CONNECTION'
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    );
  };


  const Footer = () => (
    <footer className="py-20 border-t border-white/5 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black mb-6 tracking-tighter">ANUDEEP KUMAR BERI</h2>
          <p className="text-white/40 max-w-sm leading-relaxed mb-8">
            Specializing in the deployment and operational reliability of backend systems. 
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/anudeep-kumar-beri" className="p-3 bg-white/5 rounded-full hover:text-[#10B981]"><Github size={20}/></a>
            <a href="https://linkedin.com/in/anudeep-kumar-beri" className="p-3 bg-white/5 rounded-full hover:text-[#10B981]"><Linkedin size={20}/></a>
            <a href="mailto:anudeepkumarberi@gmail.com" className="p-3 bg-white/5 rounded-full hover:text-[#10B981]"><Mail size={20}/></a>
          </div>
        </div>
        <div>
          <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-6">Explore</h3>
          <ul className="space-y-4 text-sm font-medium text-white/40">
            <li><button onClick={() => navigateTo('home')} className="hover:text-white">Home</button></li>
            <li><button onClick={() => navigateTo('work')} className="hover:text-white">Work</button></li>
            <li><button onClick={() => navigateTo('about')} className="hover:text-white">About</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-[10px] font-bold text-white/20 uppercase tracking-[0.3em] mb-6">Status</h3>
          <div className="flex items-center gap-3 text-sm font-medium text-[#10B981]">
            <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
            Open for Works
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] text-white/20 font-bold tracking-widest gap-4">
        <p>© 2024 PORTFOLIO — BUILT WITH REACT</p>
        <p>ALL SYSTEMS OPERATIONAL (200 OK)</p>
      </div>
    </footer>
  );

  return (
    <div className="bg-[#050505] text-[#FAFAFA] min-h-screen selection:bg-[#10B981] selection:text-black font-sans overflow-x-hidden">
      <style>{`
        @keyframes marquee-slow {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 40s linear infinite;
        }
      `}</style>
      <Navigation />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'work' && <WorkPage />}
        {/* About and Contact content remains standard as per your previous setup but simplified for this view */}
        {currentPage === 'about' && <AboutPage/>}
        {currentPage === 'contact' && <ContactPage/>}
      </main>
      <Footer />
    </div>
  );
}