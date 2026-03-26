import { Mail, Download, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState, useCallback } from "react";
import heroImage from "figma:asset/1df0aa5645ac6689ada2f014da20f342dac10e67.png";
import { trackCVDownload } from "../utils/analytics";
import { SpotlightGroup } from "./SpotlightButton";

// Typing effect roles
const roles = [
  "Full-Stack Developer",
  "Cloud & DevOps Enthusiast",
  "AI Integration Specialist",
  "Open Source Contributor",
  "Problem Solver",
];

function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
      if (displayText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
      if (displayText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex, words, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, deletingSpeed, typingSpeed]);

  return displayText;
}

// Character reveal animation variants
const nameVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.3,
    },
  },
};

const charVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: -90,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 12,
    },
  },
};

const greetingVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const greetingCharVariants = {
  hidden: { opacity: 0, x: -20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 20,
    },
  },
};

export function Hero() {
  const typedRole = useTypingEffect(roles);



  const handleDownloadCV = () => {
    trackCVDownload();
    window.open('/Mayank_Pandey_CV.pdf', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const nameText = "Mayank Pandey";
  const greetingText = "Hi, I'm";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-20">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Hero Image - Centered at Top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-6 sm:mb-8"
          >
            <div className="relative">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-40"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img 
                src={heroImage} 
                alt="Mayank Pandey" 
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/40 shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              />
              {/* Floating Ring Animation */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              {/* Second ring - offset timing */}
              <motion.div
                className="absolute inset-0 rounded-full border border-secondary/20"
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          {/* Name - Large and Centered */}
          <motion.h1
            className="font-bold mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            <span
              className="block text-white"
              style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1.1, letterSpacing: "0.02em" }}
            >
              {nameText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={charVariants}
                  className="inline-block"
                  style={{
                    whiteSpace: char === " " ? "pre" : undefined,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          {/* Role/Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-6"
          >
            <span className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Full Stack Developer
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-base sm:text-lg text-muted-foreground mb-8 max-w-3xl"
          >
            Building scalable, user-centric web applications with modern technologies, GenAI integration, and clean architecture.
          </motion.p>

          {/* Tech Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            {[
              { name: "React Frameworks", icon: "⚛️" },
              { name: "Node.js backend", icon: "🟢" },
              { name: "TypeScript", icon: "📘" },
              { name: "GenAI Integration", icon: "🤖" },
              { name: "Java", icon: "☕" },
              { name: "MongoDB", icon: "🍃" },
            ].map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 rounded-full glass-card border border-primary/20 hover:border-primary/40 transition-all duration-300 text-sm font-medium flex items-center gap-2"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex items-center justify-center"
          >
            <SpotlightGroup
              buttons={[
                {
                  children: (<><Mail className="w-5 h-5" />Hire Me</>),
                  onClick: scrollToContact,
                  variant: "filled",
                },
                {
                  children: (<><Download className="w-5 h-5" />View Resume</>),
                  onClick: handleDownloadCV,
                  variant: "outline",
                },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}