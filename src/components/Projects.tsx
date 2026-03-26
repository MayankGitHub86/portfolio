"use client";

import { motion, useInView, useMotionValue, useTransform, useSpring } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, X, Layers, Target, Zap, ArrowRight } from "lucide-react";
import intelliclaimPreview from "../assets/intelliclaim-preview.png";
import solvehubGif from "../assets/solvehub.gif";
import vartalapaiImg from "../assets/vartalapai.jpg";
import campusgatewayImg from "../assets/campusgateway.jpg";

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
    liveUrl: "https://intelliclaim-xi.vercel.app/",
    image: intelliclaimPreview,
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
    liveUrl: "https://solvehub-frontend.vercel.app/",
    image: solvehubGif,
    caseStudy: {
      problem: "Developers needed a clean, organized platform to practice DSA problems with proper implementations and explanations — not just random problem sets.",
      approach: "Designed a categorized problem-solving platform with interactive code editors, visual algorithm demonstrations, and structured learning paths.",
      results: ["30+ DSA implementations", "Interactive code playground", "Category-based organization", "Modern TypeScript architecture"],
      architecture: ["React + TypeScript", "Vite Build System", "Tailwind Styling", "Component Library"],
    },
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
    image: vartalapaiImg,
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
    image: campusgatewayImg,
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
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group relative"
      >
        <div className="relative h-full glass-card rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500">
          {/* Project Image with Overlay */}
          {project.image && (
            <div className="relative h-64 sm:h-80 overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              
              {/* Hover Buttons - Centered */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold flex items-center gap-3 transition-all duration-300 shadow-xl text-xl"
                  >
                    <ExternalLink className="w-6 h-6" strokeWidth={2.5} />
                    <span>Demo</span>
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 rounded-full bg-gray-900/90 hover:bg-gray-900 border-2 border-gray-700 text-white font-bold flex items-center gap-3 transition-all duration-300 shadow-xl text-xl"
                  >
                    <Github className="w-6 h-6" strokeWidth={2} />
                    <span>Code</span>
                  </motion.a>
                )}
              </div>
            </div>
          )}

          {/* Content Section */}
          <div className="p-6 sm:p-8">
            {/* Title and Featured Badge */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>{project.title}</h3>
              <span className="px-4 py-1.5 rounded-full text-xs font-medium border-2 border-yellow-600/60 text-yellow-500 bg-yellow-500/10 whitespace-nowrap uppercase tracking-wider">
                Featured
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed text-base">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-muted/30 border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Case Study Button */}
            {project.caseStudy && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowCaseStudy(true)}
                className="w-full px-4 py-3 rounded-lg bg-gradient-to-r from-secondary/20 to-primary/20 border border-secondary/30 hover:border-secondary/60 transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium"
              >
                <Layers className="w-4 h-4 text-secondary" />
                <span>View Case Study</span>
              </motion.button>
            )}
          </div>
        </div>
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
    <section id="projects" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
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
            className="inline-block text-primary mb-4 text-lg font-semibold"
          >
            My Recent Work
          </motion.span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            Featured <span className="text-neon-blue">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
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