"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Code, Server, Palette, Shield } from "lucide-react";

const skillCategories = [
  {
    name: "Frontend",
    icon: Code,
    color: "primary",
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
    color: "secondary",
    skills: [
      { name: "Node.js", level: 85, description: "Express, REST APIs, middleware" },
      { name: "PHP", level: 80, description: "Server-side scripting, form handling" },
      { name: "MySQL", level: 85, description: "Database design, queries, optimization" },
      { name: "C++", level: 75, description: "Data structures, algorithms, OOP" },
    ],
  },
  {
    name: "Tools & Platforms",
    icon: Palette,
    color: "chart-3",
    skills: [
      { name: "Git & GitHub", level: 90, description: "Version control, collaboration" },
      { name: "Hyper-V", level: 70, description: "Virtualization, cloud environments" },
      { name: "IIS", level: 65, description: "Web server configuration" },
      { name: "VS Code", level: 95, description: "IDE mastery, extensions, debugging" },
    ],
  },
  {
    name: "AI & Integration",
    icon: Shield,
    color: "chart-4",
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
      className="glass-card rounded-2xl p-6 sm:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-500"
    >
      {/* Category Header */}
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 flex items-center justify-center border border-${category.color}/30`}
        >
          <category.icon className={`w-7 h-7 text-${category.color}`} />
        </motion.div>
        <h3 className="text-2xl font-bold">{category.name}</h3>
      </div>

      {/* Skills List */}
      <div className="space-y-6">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skill.name}
            className="relative"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{skill.name}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-muted-foreground"
              >
                {skill.level}%
              </motion.span>
            </div>

            {/* Progress Bar */}
            <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1, ease: "easeOut" }}
                className={`absolute top-0 left-0 h-full bg-gradient-to-r from-${category.color} to-${category.color}/60 rounded-full`}
                style={{
                  boxShadow: `0 0 10px var(--color-${category.color})`,
                }}
              />
            </div>

            {/* Skill Description Tooltip */}
            {hoveredSkill === skill.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute z-10 left-0 right-0 mt-2 p-3 glass-card rounded-lg border border-primary/30 text-sm text-muted-foreground"
              >
                {skill.description}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Neon Glow Effect on Hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          background: `radial-gradient(circle at 50% 50%, var(--color-${category.color})/0.1, transparent)`,
        }}
      />
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
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>

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
                { name: "Google - Networking", provider: "Google" },
                { name: "IBM - Hardware & OS", provider: "IBM" },
                { name: "Responsive Web Design", provider: "FreeCodeCamp" },
                { name: "W3Grads FLAMES '25", provider: "W3Grads" },
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Shield className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  <p className="text-sm font-medium mb-1">{cert.provider}</p>
                  <p className="text-xs text-muted-foreground">{cert.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}