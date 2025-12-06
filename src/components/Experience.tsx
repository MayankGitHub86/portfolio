"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const experiences = [
  {
    type: "internship",
    icon: Briefcase,
    title: "SDE Intern",
    company: "EPC, Hi-Tech Manufacturing, Services",
    location: "Larsen & Toubro (Faridabad campus)",
    period: "Jun 2025 - Jul 2025",
    description: "Led the design, development, and deployment of a full-stack Campus Gateway application at Larsen & Toubro (Faridabad campus).",
    achievements: [
      "Successfully implemented and deployed the system on IIS using Hyper-V",
      "Demonstrated strong ownership among team members",
      "Delivered a production-ready campus management solution",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "IIS", "Hyper-V"],
    color: "primary",
    gradient: "from-primary/20 to-blue-500/20",
  },
  {
    type: "training",
    icon: GraduationCap,
    title: "FLAMES '25 Summer Training Program",
    company: "W3Grads",
    location: "Industry-Oriented DSA Training",
    period: "Jun 2025 - Jul 2025",
    description: "Completed comprehensive industry-oriented Data Structures & Algorithms training program certified by W3Grads.",
    achievements: [
      "Implemented 30+ DSA programs and mini-projects",
      "Strengthened problem-solving and debugging skills",
      "Improved algorithm efficiency through optimized logic, recursion techniques, and memory-efficient implementations",
    ],
    techStack: ["C++", "Data Structures", "Algorithms", "Problem Solving"],
    color: "secondary",
    gradient: "from-secondary/20 to-purple-500/20",
  },
];

const certifications = [
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Google",
    date: "Sep 2024",
    icon: Award,
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    provider: "IBM",
    date: "Oct 2024",
  },
  {
    title: "Responsive Web Design",
    provider: "FreeCodeCamp",
    date: "Oct 2024",
  },
  {
    title: "Social Media Marketing",
    provider: "Coursera",
    date: "Oct 2023",
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex gap-8 items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content */}
      <div className="flex-1">
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
          className={`glass-card rounded-2xl p-6 sm:p-8 border border-${experience.color}/20 hover:border-${experience.color}/40 transition-all duration-500`}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${experience.color}/20 to-${experience.color}/10 flex items-center justify-center border border-${experience.color}/30`}
              >
                <experience.icon className={`w-7 h-7 text-${experience.color}`} />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">{experience.title}</h3>
                <p className={`text-${experience.color} font-medium mb-1`}>{experience.company}</p>
                <p className="text-sm text-muted-foreground">{experience.location}</p>
              </div>
            </div>

            {/* Period Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-primary/20 mb-4">
              <div className={`w-2 h-2 rounded-full bg-${experience.color} animate-pulse`} />
              <span className="text-sm text-muted-foreground">{experience.period}</span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-${experience.color} mt-2 flex-shrink-0`} />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium bg-${experience.color}/10 border border-${experience.color}/20 hover:border-${experience.color}/40 transition-all duration-300`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="hidden lg:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={`w-6 h-6 rounded-full bg-${experience.color} border-4 border-background shadow-lg`}
          style={{
            boxShadow: `0 0 20px var(--color-${experience.color})`,
          }}
        />
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden lg:block" />
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
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
            My Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Experience & <span className="text-neon-purple">Training</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12 mb-20">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform -translate-x-1/2" />

          {/* Experience Cards */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-neon-blue">Certifications</span>
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-500 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30"
                >
                  <Award className="w-7 h-7 text-primary" />
                </motion.div>
                <h4 className="font-semibold mb-2 text-sm">{cert.title}</h4>
                <p className="text-sm text-primary mb-1">{cert.provider}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}