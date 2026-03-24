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
    const link = document.createElement('a');
    link.href = '/Mayank_Pandey_CV.pdf';
    link.download = 'Mayank_Pandey_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const nameText = "Mayank Pandey";
  const greetingText = "Hi, I'm";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="flex justify-center lg:justify-start order-1"
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
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full object-cover border-4 border-primary/40 shadow-2xl"
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

          {/* Text Content - Right Side */}
          <div className="order-2 text-center lg:text-left">
            {/* Animated Greeting - Character reveal */}
            <motion.h1
              className="font-bold mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {/* Greeting - slightly smaller */}
              <motion.span
                className="block mb-1"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.1 }}
                variants={greetingVariants}
                initial="hidden"
                animate="visible"
              >
                {greetingText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={greetingCharVariants}
                    className="inline-block"
                    style={{ whiteSpace: char === " " ? "pre" : undefined }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>

              {/* Name - fills the column on one line */}
              <motion.span
                className="block text-primary whitespace-nowrap"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
                variants={nameVariants}
                initial="hidden"
                animate="visible"
              >
                {nameText.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    variants={charVariants}
                    className="inline-block"
                    style={{
                      whiteSpace: char === " " ? "pre" : undefined,
                      textShadow: "0 0 40px rgba(0, 163, 255, 0.4)",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            {/* Typing Effect Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-6"
            >
              <span className="inline-flex items-center px-4 py-2 rounded-full glass-card text-xs sm:text-sm border border-primary/30 text-primary min-h-[36px]">
                <span className="mr-1">{">"}</span>
                <span className="font-mono">{typedRole}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="ml-0.5 inline-block w-[2px] h-4 bg-primary"
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Full-Stack Developer crafting innovative web solutions with cutting-edge technologies.
              Passionate about AI, cloud computing, and building scalable applications.
            </motion.p>

            {/* CTA Buttons — shared spotlight container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="flex items-center justify-center lg:justify-start mb-8"
            >
              <SpotlightGroup
                buttons={[
                  {
                    children: (<><Mail className="w-5 h-5" />Hire Me</>),
                    onClick: scrollToContact,
                    variant: "filled",
                  },
                  {
                    children: (<><Download className="w-5 h-5" />Download CV</>),
                    onClick: handleDownloadCV,
                    variant: "outline",
                  },
                ]}
              />
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="https://github.com/MayankGitHub86"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg glass-card border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-primary/10"
              >
                <Github className="w-6 h-6 text-primary" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mayankpandey-12316543"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg glass-card border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-primary/10"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </motion.a>
              <motion.a
                href="mailto:pandeymp86012@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg glass-card border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-primary/10"
              >
                <Mail className="w-6 h-6 text-primary" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}