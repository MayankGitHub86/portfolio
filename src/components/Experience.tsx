"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    type: "internship",
    icon: Briefcase,
    title: "SDE Intern",
    company: "Larsen & Toubro",
    location: "EPC, Hi-Tech Manufacturing — Faridabad campus",
    period: "Jun 2025 – Jul 2025",
    description:
      "Led the design, development, and deployment of a full-stack Campus Gateway application at Larsen & Toubro's Faridabad campus.",
    achievements: [
      "Implemented and deployed the system on IIS using Hyper-V virtualisation",
      "Demonstrated strong ownership and coordination across team members",
      "Delivered a production-ready campus management solution end-to-end",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "IIS", "Hyper-V"],
    color: "#00a3ff",
    accentClass: "text-primary",
    borderClass: "border-primary/30",
    bgClass: "from-primary/10 to-transparent",
    dotColor: "#00a3ff",
  },
  {
    type: "training",
    icon: GraduationCap,
    title: "FLAMES '25 — Summer Training",
    company: "W3Grads",
    location: "Industry-Oriented DSA Program",
    period: "Jun 2025 – Jul 2025",
    description:
      "Completed comprehensive industry-oriented Data Structures & Algorithms training certified by W3Grads.",
    achievements: [
      "Implemented 30+ DSA programs and mini-projects in C++",
      "Strengthened problem-solving and debugging skills significantly",
      "Optimised algorithms using recursion and memory-efficient techniques",
    ],
    techStack: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
    color: "#a020f0",
    accentClass: "text-secondary",
    borderClass: "border-secondary/30",
    bgClass: "from-secondary/10 to-transparent",
    dotColor: "#a020f0",
  },
];

const certifications = [
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Google",
    date: "Sep 2024",
    link: "https://coursera.org/share/d99776de4b928c4df6354ab1a88c0c3b",
    color: "#4285F4",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    provider: "IBM",
    date: "Oct 2024",
    link: null,
    color: "#006699",
  },
  {
    title: "Responsive Web Design",
    provider: "FreeCodeCamp",
    date: "Oct 2024",
    link: null,
    color: "#0A0A23",
  },
  {
    title: "Social Media Marketing",
    provider: "Coursera",
    date: "Oct 2023",
    link: null,
    color: "#0056D2",
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-primary mb-4 font-mono text-sm"
          >
            My Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Experience &amp; <span className="text-neon-purple">Training</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </motion.div>

        {/* ── Vertical Timeline ── */}
        <div className="relative">
          {/* Spine */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-6 top-0 bottom-0 w-px origin-top"
            style={{
              background: "linear-gradient(to bottom, #00a3ff, #a020f0, #00a3ff)",
            }}
          />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.title} exp={exp} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* ── Certifications ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-neon-blue">Certifications</span>
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link || undefined}
                target={cert.link ? "_blank" : undefined}
                rel={cert.link ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`glass-card rounded-xl p-5 border border-primary/15 hover:border-primary/40 transition-all duration-300 text-center ${
                  cert.link ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div
                  className="w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center border border-white/10"
                  style={{ background: `${cert.color}22` }}
                >
                  <Award className="w-6 h-6" style={{ color: cert.color }} />
                </div>
                <p className="text-xs font-semibold mb-1" style={{ color: cert.color }}>
                  {cert.provider}
                </p>
                <p className="text-sm font-medium leading-snug mb-2">{cert.title}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
                {cert.link && (
                  <div className="mt-2 flex items-center justify-center gap-1 text-xs text-primary">
                    <ExternalLink className="w-3 h-3" />
                    <span>Verify</span>
                  </div>
                )}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineItem({
  exp,
  index,
  isInView,
}: {
  exp: (typeof experiences)[0];
  index: number;
  isInView: boolean;
}) {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -40 }}
      animate={itemInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-16"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={itemInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
        className="absolute left-[18px] top-6 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-background z-10"
        style={{
          background: exp.color,
          boxShadow: `0 0 16px ${exp.color}99`,
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.01, y: -3 }}
        transition={{ duration: 0.25 }}
        className={`glass-card rounded-2xl p-6 sm:p-8 border ${exp.borderClass} hover:border-opacity-60 transition-all duration-400 relative overflow-hidden`}
      >
        {/* Gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${exp.bgClass} opacity-40 pointer-events-none`}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10"
              style={{ background: `${exp.color}22` }}
            >
              <exp.icon className="w-6 h-6" style={{ color: exp.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{exp.title}</h3>
                  <p className="font-semibold mt-0.5" style={{ color: exp.color }}>
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                {/* Period badge */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border"
                  style={{
                    background: `${exp.color}18`,
                    borderColor: `${exp.color}44`,
                    color: exp.color,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: exp.color }}
                  />
                  {exp.period}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-5 leading-relaxed">{exp.description}</p>

          {/* Two-column: Achievements + Tech Stack */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={itemInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: exp.color }}
                    />
                    {a}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={itemInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono border transition-all duration-200"
                    style={{
                      background: `${exp.color}14`,
                      borderColor: `${exp.color}33`,
                      color: exp.color,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}