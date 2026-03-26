"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Experience } from "./components/Experience";
import { CurrentlyWorkingOn } from "./components/CurrentlyWorkingOn";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollProgress } from "./components/ScrollProgress";
import { Toaster } from "./components/ui/sonner";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, useMemo } from "react";

// Section-aware background configuration
const sectionColors: Record<string, { orb1: string; orb2: string; orb3: string; particles: string }> = {
  home:       { orb1: "0, 163, 255",  orb2: "160, 32, 240",  orb3: "0, 163, 255",  particles: "0, 163, 255" },
  about:      { orb1: "0, 200, 180",  orb2: "0, 163, 255",   orb3: "100, 200, 255", particles: "0, 200, 180" },
  skills:     { orb1: "160, 32, 240", orb2: "0, 163, 255",   orb3: "160, 32, 240",  particles: "160, 32, 240" },
  projects:   { orb1: "0, 163, 255",  orb2: "0, 255, 198",   orb3: "0, 100, 255",   particles: "0, 255, 198" },
  certifications: { orb1: "255, 215, 0", orb2: "255, 140, 0", orb3: "255, 165, 0",  particles: "255, 200, 0" },
  experience: { orb1: "160, 32, 240", orb2: "255, 0, 110",   orb3: "200, 50, 255",  particles: "160, 32, 240" },
  contact:    { orb1: "0, 255, 150",  orb2: "0, 163, 255",   orb3: "50, 200, 100",  particles: "0, 200, 100" },
};

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  // Parallax transforms for depth layers
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Section detection for dynamic backgrounds
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "certifications", "experience", "contact"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: [0.3, 0.5, 0.7] }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const colors = sectionColors[activeSection] || sectionColors.home;

  // Pre-generate stable particle positions
  const particlePositions = useMemo(() => 
    [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })), []
  );

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Animated Background - Section Aware */}
      <div className="fixed inset-0 z-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
          <div
            className="absolute inset-0 opacity-30 transition-all duration-1000"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${colors.orb1}, 0.2) 0%, transparent 50%)`,
            }}
          />
        </div>

        {/* Floating Orbs with Parallax + Color Transitions */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y: bgY1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl transition-colors duration-[2000ms]"
          key="orb1"
        >
          <div
            className="w-full h-full rounded-full transition-all duration-[2000ms]"
            style={{ backgroundColor: `rgba(${colors.orb1}, 0.2)` }}
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y: bgY2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-[2000ms]"
          key="orb2"
        >
          <div
            className="w-full h-full rounded-full transition-all duration-[2000ms]"
            style={{ backgroundColor: `rgba(${colors.orb2}, 0.2)` }}
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ y: bgY3 }}
          className="absolute top-1/2 right-1/3 w-80 h-80 rounded-full blur-3xl transition-colors duration-[2000ms]"
          key="orb3"
        >
          <div
            className="w-full h-full rounded-full transition-all duration-[2000ms]"
            style={{ backgroundColor: `rgba(${colors.orb3}, 0.15)` }}
          />
        </motion.div>

        {/* Particles with section-aware color */}
        {particlePositions.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full transition-colors duration-[2000ms]"
            style={{
              left: p.left,
              top: p.top,
              backgroundColor: `rgba(${colors.particles}, 0.8)`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}

        {/* Animated Grid with Parallax */}
        <motion.div className="absolute inset-0 opacity-10" style={{ y: gridY }}>
          <div className="absolute inset-0 transition-all duration-[2000ms]" style={{
            backgroundImage: `
              linear-gradient(rgba(${colors.particles}, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(${colors.particles}, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }} />
        </motion.div>

        {/* Section indicator dots (subtle) */}
        <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3">
          {["home", "about", "skills", "projects", "certifications", "experience", "contact"].map((section) => (
            <motion.button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className="group relative"
              whileHover={{ scale: 1.5 }}
            >
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                  activeSection === section
                    ? "bg-primary scale-125 shadow-lg shadow-primary/50"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
              />
              {/* Label tooltip */}
              <span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 rounded text-xs whitespace-nowrap glass-card border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none capitalize">
                {section.replace("-", " ")}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications />
          <Experience />
          <Contact />
        </main>
        
        {/* Simple Footer */}
        <footer className="relative z-10 py-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2026 Mayank Pandey. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Toast Notifications */}
      <Toaster position="top-right" />

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}