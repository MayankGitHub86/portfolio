"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Code, Server, Wrench, Cpu, Award } from "lucide-react";

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
    <section id="skills" ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
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
            What I Bring To The Table
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            My <span className="text-neon-purple">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
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

        {/* Certifications Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass-card rounded-2xl p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-6">Certified & Trained</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Google - Networking", provider: "Google", link: "https://coursera.org/share/d99776de4b928c4df6354ab1a88c0c3b" },
                { name: "IBM - Hardware & OS", provider: "IBM", link: null },
                { name: "Responsive Web Design", provider: "FreeCodeCamp", link: null },
                { name: "W3Grads FLAMES '25", provider: "W3Grads", link: null },
              ].map((cert, index) => (
                <motion.a
                  key={cert.name}
                  href={cert.link || undefined}
                  target={cert.link ? "_blank" : undefined}
                  rel={cert.link ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border border-primary/10 hover:border-primary/30 transition-all duration-300 ${
                    cert.link ? 'cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Award className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  <p className="text-sm font-medium mb-1">{cert.provider}</p>
                  <p className="text-xs text-muted-foreground">{cert.name}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}