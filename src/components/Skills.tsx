"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Code, Server, Wrench, Cpu, Award, Github, ExternalLink } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code,
    hex: "#00a3ff",
    skills: [
      { name: "HTML & CSS", level: 95, description: "Expert in modern CSS, Flexbox, Grid, animations" },
      { name: "JavaScript", level: 90, description: "ES6+, async programming, DOM manipulation" },
      { name: "React", level: 85, description: "Hooks, Context API, component architecture" },
      { name: "TypeScript", level: 75, description: "Type safety, interfaces, generics" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    hex: "#a020f0",
    skills: [
      { name: "Node.js", level: 85, description: "Express, REST APIs, middleware" },
      { name: "PHP", level: 80, description: "Server-side scripting, form handling" },
      { name: "MySQL", level: 85, description: "Database design, queries, optimization" },
      { name: "C++", level: 75, description: "Data structures, algorithms, OOP" },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: Wrench,
    hex: "#00ffc6",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Version control, collaboration" },
      { name: "Hyper-V", level: 70, description: "Virtualisation, cloud environments" },
      { name: "IIS", level: 65, description: "Web server configuration" },
      { name: "VS Code", level: 95, description: "IDE mastery, extensions, debugging" },
    ],
  },
  {
    name: "AI & Integration",
    icon: Cpu,
    hex: "#ff006e",
    skills: [
      { name: "AI APIs", level: 80, description: "OpenAI, Gemini integration" },
      { name: "Framer Motion", level: 85, description: "Advanced animations, transitions" },
      { name: "API Integration", level: 88, description: "RESTful services, webhooks" },
      { name: "Cloud Services", level: 70, description: "Deployment, scaling, monitoring" },
    ],
  },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all duration-500"
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center border border-white/10"
          style={{ background: `${category.hex}22` }}
        >
          <category.icon className="w-5 h-5" style={{ color: category.hex }} />
        </div>
        <h3 className="text-xl font-bold">{category.name}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-5">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skill.name}
            className="relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs font-mono" style={{ color: category.hex }}>
                {skill.level}%
              </span>
            </div>

            {/* Animated Progress Bar */}
            <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1.1, delay: 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${category.hex}cc, ${category.hex})`,
                  boxShadow: `0 0 8px ${category.hex}88`,
                }}
              />
            </div>

            {/* Hover Tooltip */}
            {hoveredSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-20 left-0 right-0 mt-1.5 px-3 py-2 glass-card rounded-lg border border-white/10 text-xs text-muted-foreground"
              >
                {skill.description}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
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
            What I Bring To The Table
          </motion.span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            My <span className="text-neon-purple">Skills</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive toolkit of modern technologies and frameworks, continuously evolving with industry trends
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Tech Cloud — fills the page and adds visual richness */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 glass-card rounded-2xl p-6 sm:p-8 border border-white/10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5 text-center">
            Full Tech Stack at a Glance
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { name: "React", color: "#61DAFB" }, { name: "TypeScript", color: "#3178C6" },
              { name: "Node.js", color: "#68A063" }, { name: "JavaScript", color: "#F7DF1E" },
              { name: "HTML5", color: "#E34F26" }, { name: "CSS3", color: "#1572B6" },
              { name: "PHP", color: "#777BB4" }, { name: "MySQL", color: "#4479A1" },
              { name: "C++", color: "#00599C" }, { name: "Git", color: "#F05032" },
              { name: "GitHub", color: "#a5a5a5" }, { name: "Vite", color: "#646CFF" },
              { name: "Framer Motion", color: "#FF0055" }, { name: "Tailwind", color: "#38BDF8" },
              { name: "OpenAI API", color: "#10A37F" }, { name: "Gemini API", color: "#4285F4" },
              { name: "IIS", color: "#5591c8" }, { name: "Hyper-V", color: "#0078D4" },
              { name: "VS Code", color: "#007ACC" }, { name: "Linux", color: "#FCC624" },
            ].map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
                whileHover={{ scale: 1.12, y: -3 }}
                className="px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 cursor-default"
                style={{
                  background: `${tech.color}18`,
                  borderColor: `${tech.color}44`,
                  color: tech.color,
                }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Coding Profiles Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 sm:mt-32"
        >
          <div className="text-center mb-8">
            <p className="text-lg font-semibold uppercase tracking-[0.3em] text-yellow-600 mb-4">
              Problem Solving
            </p>
            <h3 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Coding <span className="text-yellow-500">Profiles</span>
            </h3>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Consistent problem-solving across top competitive programming platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* LeetCode Card */}
            <motion.a
              href="https://leetcode.com/u/DRa00ooUAG/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-yellow-600/40 transition-all duration-300 group relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center">
                    <span className="text-yellow-500 font-bold text-2xl">L</span>
                  </div>
                  <div>
                    <p className="font-semibold text-base">@DRa00ooUAG</p>
                    <p className="text-xs text-muted-foreground">LeetCode</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-yellow-500 transition-colors" />
              </div>

              {/* Problems Solved */}
              <div className="text-center mb-6">
                <p className="text-6xl font-bold text-yellow-500 mb-1">59</p>
                <p className="text-sm text-muted-foreground">Problems Solved</p>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3 mb-6">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm">Easy</span>
                    </div>
                    <span className="text-sm font-mono text-green-500">17/933</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '1.8%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span className="text-sm">Medium</span>
                    </div>
                    <span className="text-sm font-mono text-yellow-500">36/2030</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '1.8%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-sm">Hard</span>
                    </div>
                    <span className="text-sm font-mono text-red-500">6/916</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '0.7%' }}></div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="flex items-center justify-around pt-4 border-t border-white/10">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">17</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Easy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-500">36</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Medium</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-500">6</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Hard</p>
                </div>
              </div>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              href="https://github.com/MayankGitHub86"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group relative"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-base">@MayankGitHub86</p>
                    <p className="text-xs text-muted-foreground">GitHub</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
              </div>

              {/* Quote */}
              <div className="text-center mb-6">
                <p className="text-sm text-muted-foreground italic">"An innovative and creative Developer"</p>
              </div>

              {/* Stats Grid - Compact */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold mb-1">15</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Repositories</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold mb-1">0</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Followers</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold mb-1">0</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Following</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-3xl font-bold mb-1">2023</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Since</p>
                </div>
              </div>

              {/* Contribution Graph - Compact */}
              <div className="mb-4 p-3 rounded-xl bg-black/20 border border-white/5">
                <div className="flex gap-[1.5px]">
                  {Array.from({ length: 53 }).map((_, week) => (
                    <div key={week} className="flex flex-col gap-[1.5px]">
                      {Array.from({ length: 7 }).map((_, day) => {
                        const intensity = Math.random();
                        let bgColor = 'bg-white/5';
                        if (intensity > 0.75) bgColor = 'bg-yellow-500';
                        else if (intensity > 0.55) bgColor = 'bg-yellow-400';
                        else if (intensity > 0.35) bgColor = 'bg-yellow-500/50';
                        else if (intensity > 0.15) bgColor = 'bg-yellow-500/25';
                        return <div key={day} className={`w-[2.5px] h-[2.5px] rounded-sm ${bgColor}`}></div>;
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-center text-muted-foreground">
                  View all repos on <span className="text-white font-bold">GitHub</span>
                </p>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}