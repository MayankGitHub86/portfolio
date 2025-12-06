import { Mail, Download, Github, Linkedin } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import heroImage from "figma:asset/1df0aa5645ac6689ada2f014da20f342dac10e67.png";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    // Mock CV download
    alert("CV download would start here. Add your CV link!");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

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
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <div className="order-2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="block mb-2">Hi, I&apos;m</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Mayank Pandey
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full glass-card text-xs sm:text-sm border border-primary/30 text-primary">
                Web Developer • Cloud & DevOps Enthusiast • Innovator
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Full-Stack Developer crafting innovative web solutions with cutting-edge technologies.
              Passionate about AI, cloud computing, and building scalable applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 163, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-background font-medium overflow-hidden w-full sm:w-auto transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Hire Me
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="px-8 py-4 rounded-lg glass-card border border-primary/30 hover:border-primary/60 transition-all duration-300 font-medium w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-primary/10"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
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

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}