"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Rocket, BookOpen, Flame, GitBranch, Star, Clock } from "lucide-react";

const currentProjects = [
  {
    name: "Intelliclaim v2",
    description: "Building advanced AI document analysis with weather forensics and automated repair cost estimation.",
    progress: 75,
    status: "In Progress",
    tech: ["React", "Node.js", "AI APIs"],
    icon: Rocket,
    color: "primary",
  },
  {
    name: "SolveHub Expansion",
    description: "Adding new DSA categories, interactive visualizations, and community-driven problem submissions.",
    progress: 60,
    status: "In Progress",
    tech: ["TypeScript", "Vite", "Tailwind"],
    icon: Code2,
    color: "secondary",
  },
];

const currentlyLearning = [
  { name: "Docker & Containerization", icon: "🐳", progress: 45 },
  { name: "AWS Cloud Services", icon: "☁️", progress: 35 },
  { name: "System Design", icon: "🏗️", progress: 50 },
  { name: "Advanced TypeScript", icon: "📘", progress: 65 },
];

const recentActivity = [
  { action: "Pushed to", target: "Intelliclaim", time: "2 days ago", icon: GitBranch },
  { action: "Starred", target: "next.js", time: "3 days ago", icon: Star },
  { action: "Updated", target: "Portfolio", time: "Today", icon: Code2 },
  { action: "Committed to", target: "SolveHub", time: "1 day ago", icon: GitBranch },
];

// Animated circular progress ring
function ProgressRing({ progress, size = 64, strokeWidth = 4, color = "primary" }: { progress: number; size?: number; strokeWidth?: number; color?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-muted/30"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={`var(--color-${color})`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset: offset } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          style={{
            filter: `drop-shadow(0 0 6px var(--color-${color}))`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold">{progress}%</span>
      </div>
    </div>
  );
}

export function CurrentlyWorkingOn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="current-work" ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
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
            className="inline-flex items-center gap-2 text-primary mb-4"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Flame className="w-5 h-5 text-orange-400" />
            </motion.div>
            What I&apos;m Up To
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Currently <span className="text-neon-blue">Building</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Always learning, always building — here&apos;s what I&apos;m focused on right now
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Projects */}
          <div className="lg:col-span-2 space-y-6">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.01, y: -3 }}
                className="glass-card rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  {/* Progress Ring */}
                  <ProgressRing progress={project.progress} color={project.color} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <project.icon className={`w-5 h-5 text-${project.color}`} />
                      <h3 className="text-xl font-bold truncate">{project.name}</h3>
                      <span className="px-2 py-0.5 rounded-full text-xs bg-green-500/20 text-green-400 border border-green-500/30 whitespace-nowrap">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted/30 border border-primary/15"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Full-width progress bar */}
                <div className="mt-4 h-1.5 bg-muted/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${project.progress}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r from-${project.color} to-${project.color}/60`}
                    style={{ boxShadow: `0 0 10px var(--color-${project.color})` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold">Currently Learning</h3>
              </div>
              <div className="space-y-4">
                {currentlyLearning.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2 text-sm">
                        <span>{item.icon}</span>
                        {item.name}
                      </span>
                      <span className="text-xs text-muted-foreground">{item.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-muted/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.progress}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-primary/20"
            >
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-bold">Recent Activity</h3>
              </div>
              <div className="space-y-3">
                {recentActivity.map((activity, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/20 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm truncate">
                        <span className="text-muted-foreground">{activity.action}</span>{" "}
                        <span className="font-medium text-primary">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
