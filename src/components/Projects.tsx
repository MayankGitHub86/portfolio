"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";

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
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="relative h-full glass-card rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 overflow-hidden transition-all duration-500"
      >
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
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
            Innovative solutions built with modern technologies, showcasing full-stack development and AI integration
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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