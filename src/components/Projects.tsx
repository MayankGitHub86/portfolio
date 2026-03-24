"use client";

import { motion, useInView, useMotionValue, useTransform, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, X, Layers, Target, Zap, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Intelliclaim",
    description: "Full-stack AI-driven insurance claim estimator delivering instant estimates in 2-3 seconds. Built with React, Node.js, Framer Motion, and integrated with AI APIs for seamless claim processing.",
    techStack: ["React", "Node.js", "Framer Motion", "AI API"],
    color: "from-primary to-blue-400",
    status: "Active",
    date: "Since Sep 2025",
    gradient: "from-primary/20 to-blue-500/20",
    githubUrl: "https://github.com/MayankGitHub86/Intelliclaim",
    liveUrl: "https://intelliclaim.vercel.app",
    caseStudy: {
      problem: "Insurance claim processing was manual, slow, and error-prone — taking hours to get cost estimates. Users needed instant, accurate assessments.",
      approach: "Built an AI-powered pipeline that analyzes claim documents, extracts key data, cross-references damage patterns, and generates professional estimates using advanced AI models.",
      results: ["2-3 second estimate generation", "Full document analysis with AI", "Professional PDF report generation", "Responsive design across all devices"],
      architecture: ["React Frontend", "Node.js API", "AI Integration Layer", "PDF Generation Engine"],
    },
  },
  {
    title: "SolveHub",
    description: "Comprehensive problem-solving platform featuring DSA implementations, algorithms, and coding challenges. Built to help developers practice and master data structures and algorithms.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    color: "from-emerald-400 to-cyan-400",
    status: "Active",
    date: "Since Dec 2024",
    gradient: "from-emerald-400/20 to-cyan-500/20",
    githubUrl: "https://github.com/MayankGitHub86/SolveHub",
    liveUrl: "https://solvehub.vercel.app",
    caseStudy: {
      problem: "Developers needed a clean, organized platform to practice DSA problems with proper implementations and explanations — not just random problem sets.",
      approach: "Designed a categorized problem-solving platform with interactive code editors, visual algorithm demonstrations, and structured learning paths.",
      results: ["30+ DSA implementations", "Interactive code playground", "Category-based organization", "Modern TypeScript architecture"],
      architecture: ["React + TypeScript", "Vite Build System", "Tailwind Styling", "Component Library"],
    },
  },
  {
    title: "Venue Finder Chatbot",
    description: "Interactive chatbot helping users discover nearby event venues by city name. Features location-based search using APIs and a user-friendly chat interface with dynamic venue suggestions.",
    techStack: ["HTML", "CSS", "JavaScript", "API Integration", "Gemini AI"],
    color: "from-secondary to-purple-400",
    status: "Completed",
    date: "Aug 2025",
    gradient: "from-secondary/20 to-purple-500/20",
    githubUrl: "https://github.com/MayankGitHub86/Venue-Finder-Chatbot",
    liveUrl: null,
    caseStudy: {
      problem: "Finding suitable event venues required browsing multiple sites. Users wanted a conversational way to discover venues based on city and preferences.",
      approach: "Built a chatbot powered by Gemini AI that understands natural language queries, fetches venue data via APIs, and presents results in a chat-friendly format.",
      results: ["Natural language venue search", "Real-time API integration", "Conversational UI experience", "City-based filtering"],
      architecture: ["Vanilla Frontend", "Gemini AI API", "Location APIs", "Chat Engine"],
    },
  },
  {
    title: "Online Test Planner",
    description: "Web-based quiz platform covering Science Literacy and Temperature Measurement topics. Features dynamic question rendering, form validation, instant feedback, and result calculation.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    color: "from-cyan-400 to-primary",
    status: "Completed",
    date: "Jul 2025",
    gradient: "from-cyan-400/20 to-primary/20",
    githubUrl: "https://github.com/MayankGitHub86/Online-Test-Planner",
    liveUrl: null,
    caseStudy: null,
  },
  {
    title: "Vartalaap.AI",
    description: "AI-powered chat application with modern interface, conversational AI capabilities, and scalable architecture. Designed for smooth interactions and efficient real-time message processing.",
    techStack: ["TypeScript", "JavaScript", "CSS"],
    color: "from-pink-400 to-secondary",
    status: "Completed",
    date: "Jul 2025",
    gradient: "from-pink-400/20 to-secondary/20",
    githubUrl: "https://github.com/MayankGitHub86/Vartalaap.AI",
    liveUrl: null,
    caseStudy: null,
  },
  {
    title: "Campus Gateway",
    description: "Full-stack application for campus management at Larsen & Toubro. Led design, development, and deployment using HTML, CSS, JavaScript, PHP, and MySQL on IIS using Hyper-V.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "IIS", "Hyper-V"],
    color: "from-green-400 to-primary",
    status: "Completed",
    date: "Jun - Jul 2025",
    gradient: "from-green-400/20 to-primary/20",
    githubUrl: "https://github.com/MayankGitHub86/Campus-Gateway",
    liveUrl: null,
    caseStudy: {
      problem: "L&T Faridabad campus needed a centralized gateway system to manage campus operations, replacing fragmented manual processes.",
      approach: "Led full-stack development and deployment on enterprise infrastructure using IIS web server running on Hyper-V virtualization — a production-grade campus management solution.",
      results: ["Production deployment on IIS", "Hyper-V virtualization setup", "Full campus management workflow", "Team leadership & delivery"],
      architecture: ["HTML/CSS/JS Frontend", "PHP Backend", "MySQL Database", "IIS + Hyper-V Infrastructure"],
    },
  },
];

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width - 0.5;
    const yPos = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={className}
    >
      {children}
      {/* Glare/shine effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20"
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
          ),
        }}
      />
    </motion.div>
  );
}

// Case Study Modal
function CaseStudyModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-background/80 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.8, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.8, y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card rounded-2xl border border-primary/30 p-6 sm:p-8"
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass-card border border-primary/30 hover:border-primary/60 transition-colors z-10"
        >
          <X className="w-5 h-5 text-primary" />
        </motion.button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{project.title}</h2>
              <p className="text-sm text-muted-foreground">{project.date}</p>
            </div>
          </div>
          <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full" />
        </div>

        {project.caseStudy && (
          <div className="space-y-8">
            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-6 border border-red-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-red-400">The Problem</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.caseStudy.problem}</p>
            </motion.div>

            {/* My Approach */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-6 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary">My Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{project.caseStudy.approach}</p>
            </motion.div>

            {/* Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-secondary/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-secondary">Architecture</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {project.caseStudy.architecture.map((layer, i) => (
                  <div key={layer} className="flex items-center gap-2">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 text-sm font-medium"
                    >
                      {layer}
                    </motion.span>
                    {i < project.caseStudy!.architecture.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-secondary/50 hidden sm:block" />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-green-400">Key Results</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.caseStudy.results.map((result, i) => (
                  <motion.div
                    key={result}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-green-500/5 border border-green-500/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{result}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-br ${project.gradient} border border-primary/20`}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-4 py-3 rounded-lg bg-gradient-to-r ${project.color} text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                >
                  <ExternalLink className="w-4 h-4" />
                  View Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-lg glass-card border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5 text-primary" />
                  View Code
                </a>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative"
      >
        <TiltCard className="relative h-full">
          <div className="relative h-full glass-card rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 overflow-hidden transition-all duration-500">
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            {/* Animated Border on Hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              style={{
                background: `linear-gradient(90deg, transparent, var(--color-primary), transparent)`,
                backgroundSize: "200% 100%",
              }}
            >
              <motion.div
                animate={{ backgroundPosition: isHovered ? ["0% 0%", "200% 0%"] : "0% 0%" }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: `linear-gradient(90deg, transparent, var(--color-primary), transparent)`,
                  backgroundSize: "200% 100%",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  padding: "1px",
                }}
              />
            </motion.div>

            {/* Content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
                    >
                      <Sparkles className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-muted-foreground">{project.date}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          project.status === "Active" 
                            ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold mb-3 text-primary">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted/30 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                      style={{
                        boxShadow: isHovered ? "0 0 10px rgba(0, 163, 255, 0.3)" : "none",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r ${project.color} text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
                    style={{
                      boxShadow: isHovered ? "0 0 20px rgba(0, 163, 255, 0.4)" : "none",
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${project.liveUrl ? '' : 'flex-1'} px-4 py-2.5 rounded-lg glass-card border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <Github className="w-5 h-5 text-primary" />
                    {!project.liveUrl && <span>View Code</span>}
                  </motion.a>
                )}
                {project.caseStudy && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCaseStudy(true)}
                    className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 hover:border-secondary/60 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
                  >
                    <Layers className="w-4 h-4 text-secondary" />
                    <span className="hidden sm:inline">Case Study</span>
                  </motion.button>
                )}
              </div>
            </div>

            {/* Floating Particles */}
            {isHovered && (
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full"
                    initial={{ 
                      x: Math.random() * 100 - 50, 
                      y: Math.random() * 100 - 50,
                      opacity: 0 
                    }}
                    animate={{ 
                      y: [-20, -60],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </>
            )}
          </div>
        </TiltCard>
      </motion.div>

      {/* Case Study Modal */}
      {showCaseStudy && (
        <CaseStudyModal project={project} onClose={() => setShowCaseStudy(false)} />
      )}
    </>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Active", "AI/ML", "Web Dev", "Full-Stack"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Active") return project.status === "Active";
    if (filter === "AI/ML") return project.techStack.some(tech => 
      tech.includes("AI") || tech.includes("Gemini")
    );
    if (filter === "Web Dev") return project.techStack.some(tech => 
      ["HTML", "CSS", "JavaScript"].includes(tech)
    );
    if (filter === "Full-Stack") return project.techStack.some(tech => 
      ["React", "Node.js", "PHP", "MySQL"].includes(tech)
    );
    return true;
  });

  return (
    <section id="projects" ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary mb-4"
          >
            My Recent Work
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Innovative solutions built with modern technologies — click "Case Study" to explore the story behind each project
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30"
                  : "glass-card border border-primary/20 hover:border-primary/40 hover:bg-primary/10"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/MayankGitHub86"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass-card border border-primary/30 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 font-medium"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}