"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, animate } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "./ui/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Spotlight refs
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const spotlightXRef = useRef(0);
  const ambienceXRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- SPOTLIGHT: Mouse Move / Leave ----
  useEffect(() => {
    if (!navContainerRef.current) return;
    const nav = navContainerRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = nav.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setHoverX(x);
      spotlightXRef.current = x;
      nav.style.setProperty("--spotlight-x", `${x}px`);
    };

    const handleMouseLeave = () => {
      setHoverX(null);
      // Spring the spotlight back to the active item
      const activeIdx = navItems.findIndex(item => item.href.substring(1) === activeSection);
      const activeItem = nav.querySelector(`[data-nav-index="${activeIdx}"]`) as HTMLElement | null;
      if (activeItem) {
        const navRect = nav.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        const targetX = itemRect.left - navRect.left + itemRect.width / 2;

        animate(spotlightXRef.current, targetX, {
          type: "spring",
          stiffness: 200,
          damping: 20,
          onUpdate: (v) => {
            spotlightXRef.current = v;
            nav.style.setProperty("--spotlight-x", `${v}px`);
          },
        });
      }
    };

    nav.addEventListener("mousemove", handleMouseMove);
    nav.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      nav.removeEventListener("mousemove", handleMouseMove);
      nav.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeSection]);

  // ---- AMBIENCE: Active Item glow position ----
  const updateAmbience = useCallback(() => {
    if (!navContainerRef.current) return;
    const nav = navContainerRef.current;
    const activeIdx = navItems.findIndex(item => item.href.substring(1) === activeSection);
    const activeItem = nav.querySelector(`[data-nav-index="${activeIdx}"]`) as HTMLElement | null;

    if (activeItem) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();
      const targetX = itemRect.left - navRect.left + itemRect.width / 2;

      animate(ambienceXRef.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          ambienceXRef.current = v;
          nav.style.setProperty("--ambience-x", `${v}px`);
        },
      });

      // Also set initial spotlight position if no hover
      if (hoverX === null) {
        nav.style.setProperty("--spotlight-x", `${targetX}px`);
        spotlightXRef.current = targetX;
      }
    }
  }, [activeSection, hoverX]);

  useEffect(() => {
    updateAmbience();
  }, [updateAmbience]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-card shadow-lg shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto pl-4 pr-4 sm:pr-6 lg:pr-8">
          <div className="relative flex items-center justify-between h-20 md:h-24">

            {/* Logo — left */}
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center z-10">
              <span
                className="font-bold tracking-tight"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2rem",
                  background: "linear-gradient(135deg, #00a3ff, #a020f0)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                MK
              </span>
            </motion.div>

            {/* Desktop Navigation — absolutely centered pill */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div
                ref={navContainerRef}
                className={cn(
                  "relative flex items-center h-14 rounded-full overflow-hidden transition-all duration-300",
                  isScrolled
                    ? "bg-muted/40 backdrop-blur-xl border border-primary/10"
                    : "bg-background/30 backdrop-blur-xl border border-white/[0.06]"
                )}
                style={{
                  boxShadow: "0 0 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Nav items */}
                <ul className="relative flex items-center h-full px-3 gap-1 z-10">
                  {navItems.map((item, idx) => (
                    <li key={item.name} className="relative h-full flex items-center justify-center">
                      <button
                        data-nav-index={idx}
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "px-5 py-2.5 text-base font-medium transition-colors duration-200 rounded-full",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
                          activeSection === item.href.substring(1)
                            ? "text-white"
                            : "text-muted-foreground hover:text-white"
                        )}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>

                {/* 1. Moving Spotlight (Follows Mouse) */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 w-full h-full z-[1] transition-opacity duration-300"
                  style={{
                    opacity: hoverX !== null ? 1 : 0,
                    background: `radial-gradient(
                      120px circle at var(--spotlight-x, 50%) 100%,
                      rgba(0, 163, 255, 0.15) 0%,
                      transparent 50%
                    )`,
                  }}
                />

                {/* 2. Active State Ambience Bar */}
                <div
                  className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
                  style={{
                    background: `radial-gradient(
                      60px circle at var(--ambience-x, 50%) 0%,
                      rgba(0, 163, 255, 1) 0%,
                      transparent 100%
                    )`,
                  }}
                />

                {/* 3. Bottom Border Track */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.06] z-0" />
              </div>
            </div>



            {/* Right side — mobile menu button */}
            <div className="flex items-center justify-end z-10">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg glass-card"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-primary/20"
          >
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "bg-primary/10 text-primary border border-primary/30"
                      : "hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}

            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}