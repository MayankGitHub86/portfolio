"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { GraduationCap, Award, Code2, Users } from "lucide-react";
import aboutImage from "figma:asset/cab3bd892b06f5008d7221e97d84dbd5153e1f1c.png";

const stats = [
  { label: "Projects Completed", value: 15, icon: Code2, suffix: "+" },
  { label: "Technologies", value: 10, icon: Award, suffix: "+" },
  { label: "Certifications", value: 4, icon: GraduationCap, suffix: "" },
  { label: "Team Projects", value: 5, icon: Users, suffix: "+" },
];

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-neon-blue">
      {count}{suffix}
    </span>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="relative py-20 sm:py-32 overflow-hidden">
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
            Get To Know
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-neon-blue">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glass-card rounded-2xl p-8 neon-border hover:neon-glow-blue transition-all duration-500">
              {/* 3D Card Effect */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <img 
                  src={aboutImage} 
                  alt="Mayank Pandey - Full-Stack Developer" 
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold mb-1">Mayank Pandey</h3>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-xl p-6 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">Profile Summary</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Full-Stack Developer with expertise in modern web technologies and cloud computing. 
                Currently pursuing B.Tech in Computer Science and Engineering at Lovely Professional University. 
                Experienced in building scalable applications using React, Node.js, and cutting-edge AI integrations.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-secondary" />
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-primary">Lovely Professional University</h4>
                  <p className="text-sm text-muted-foreground">
                    Bachelor of Technology - Computer Science and Engineering
                  </p>
                  <p className="text-sm text-muted-foreground">CGPA: 6.28 • Since Aug 2023</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">St. Xaviers Public School</h4>
                  <p className="text-sm text-muted-foreground">Intermediate - 78% • Apr 2021 - Mar 2022</p>
                  <p className="text-sm text-muted-foreground">Matriculation - 79%</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold mb-4">Core Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Problem Solving", "Team Player", "Project Management", "Adaptability"].map((skill, i) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 border border-primary/10"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-xl p-6 text-center border border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 mb-4"
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}