"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "./ui/utils";

// ─── Standalone SpotlightButton (for individual use, e.g. navbar CTA) ───────

interface SpotlightButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "filled" | "outline";
  type?: "button" | "submit";
}

export function SpotlightButton({
  children,
  onClick,
  className,
  variant = "filled",
  type = "button",
}: SpotlightButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const isFilled = variant === "filled";

  return (
    <motion.button
      ref={btnRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos(null)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        isFilled
          ? "bg-gradient-to-r from-primary to-secondary text-background font-medium"
          : "glass-card border border-primary/30 hover:border-primary/60 font-medium",
        className
      )}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: mousePos ? 1 : 0,
          background: mousePos
            ? isFilled
              ? `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.28) 0%, transparent 60%)`
              : `radial-gradient(120px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0,163,255,0.22) 0%, transparent 60%)`
            : "none",
        }}
      />
      {/* Bottom edge glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[1]"
        style={{
          opacity: mousePos ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: mousePos
            ? `radial-gradient(80px circle at ${mousePos.x}px 0px, ${isFilled ? "rgba(255,255,255,0.85)" : "rgba(0,163,255,0.9)"} 0%, transparent 100%)`
            : "none",
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
}

// ─── SpotlightGroup — two buttons in one shared spotlight container ───────────

interface GroupButtonConfig {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "filled" | "outline";
  className?: string;
}

interface SpotlightGroupProps {
  buttons: GroupButtonConfig[];
  className?: string;
  containerClassName?: string;
}

export function SpotlightGroup({ buttons, className, containerClassName }: SpotlightGroupProps) {
  const groupRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!groupRef.current) return;
    const rect = groupRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={groupRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMouse(null)}
      className={cn(
        "relative inline-flex items-center rounded-2xl overflow-hidden",
        "border border-white/10 backdrop-blur-xl bg-background/20",
        containerClassName
      )}
      style={{
        boxShadow: mouse
          ? "0 0 30px rgba(0,163,255,0.12), inset 0 1px 0 rgba(255,255,255,0.06)"
          : "0 0 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.03)",
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* ── Shared spotlight: big radial follows mouse across the whole group ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] transition-opacity duration-300"
        style={{
          opacity: mouse ? 1 : 0,
          background: mouse
            ? `radial-gradient(200px circle at ${mouse.x}px ${mouse.y}px, rgba(0,163,255,0.10) 0%, transparent 55%)`
            : "none",
        }}
      />

      {/* ── Bottom edge glow (travels with cursor X) ── */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] z-[2]"
        style={{
          opacity: mouse ? 1 : 0,
          transition: "opacity 0.3s ease",
          background: mouse
            ? `radial-gradient(120px circle at ${mouse.x}px 0px, rgba(0,163,255,0.95) 0%, transparent 100%)`
            : "none",
        }}
      />

      {/* ── Top edge glow ── */}
      <div
        className="pointer-events-none absolute top-0 left-0 w-full h-[1px] z-[2]"
        style={{
          opacity: mouse ? 0.45 : 0,
          transition: "opacity 0.3s ease",
          background: mouse
            ? `radial-gradient(100px circle at ${mouse.x}px 100%, rgba(0,163,255,0.55) 0%, transparent 100%)`
            : "none",
        }}
      />

      {/* ── Buttons ── */}
      <div className={cn("relative z-10 flex items-center gap-0 p-1.5", className)}>
        {buttons.map((btn, idx) => {
          const isFilled = btn.variant === "filled";
          return (
            <motion.button
              key={idx}
              onClick={btn.onClick}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.965 }}
              className={cn(
                "relative px-8 py-3.5 rounded-xl font-medium transition-all duration-300",
                "flex items-center justify-center gap-2 overflow-hidden",
                isFilled
                  ? "bg-gradient-to-r from-primary to-secondary text-background"
                  : "text-foreground hover:text-primary",
                btn.className
              )}
            >
              {/* Per-button highlight on the filled one when hovered */}
              {isFilled && (
                <div
                  className="pointer-events-none absolute inset-0 rounded-xl z-0"
                  style={{
                    opacity: mouse ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    background: mouse
                      ? `radial-gradient(90px circle at ${mouse.x}px ${mouse.y}px, rgba(255,255,255,0.18) 0%, transparent 60%)`
                      : "none",
                  }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">{btn.children}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Divider between buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 w-px h-1/2 bg-white/10 z-[3]" />

      {/* Subtle bottom track */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.04] z-0" />
    </motion.div>
  );
}
