"use client";

import { motion } from "motion/react";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { icon: Github, href: "https://github.com/MayankGitHub86", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/mayankpandey-12316543", label: "LinkedIn" },
    { icon: Mail, href: "mailto:pandeymp86012@gmail.com", label: "Email" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-primary/20 bg-background/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center neon-glow-blue">
                <span className="text-xl font-bold text-background">MP</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mayank Pandey
              </span>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-4">
              Full-Stack Developer passionate about creating innovative web solutions and pushing the boundaries of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {footerLinks.navigation.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ x: 5 }}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="space-y-3">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg glass-card border border-primary/20 flex items-center justify-center">
                    <social.icon className="w-4 h-4" />
                  </div>
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {new Date().getFullYear()} Mayank Pandey. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-lg glass-card border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-primary/10"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </motion.button>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-secondary/30 blur-3xl" />
      </div>
    </footer>
  );
}