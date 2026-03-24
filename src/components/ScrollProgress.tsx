"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9998] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00a3ff, #a020f0, #00ffc6, #00a3ff)",
        backgroundSize: "300% 100%",
        boxShadow: "0 0 10px rgba(0, 163, 255, 0.6), 0 0 20px rgba(0, 163, 255, 0.3)",
      }}
    >
      {/* Animated gradient sweep */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "300% 0%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: "linear-gradient(90deg, #00a3ff, #a020f0, #00ffc6, #00a3ff)",
          backgroundSize: "300% 100%",
        }}
      />
      {/* Glow tip at the end */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
        style={{
          background: "#00a3ff",
          boxShadow: "0 0 15px #00a3ff, 0 0 30px #00a3ff",
        }}
      />
    </motion.div>
  );
}
