"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* ─── Types ─── */

export interface SlideData {
  id: string;
  content: ReactNode;
}

interface PresentationProps {
  slides: SlideData[];
}

/* ─── AnimateIn helper ─── */

export function AnimateIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Slide transition variants ─── */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.98,
  }),
};

const slideTransition = {
  x: { type: "spring" as const, stiffness: 200, damping: 30 },
  opacity: { duration: 0.35 },
  scale: { duration: 0.35 },
};

/* ─── Presentation ─── */

export default function Presentation({ slides }: PresentationProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  /* Restore slide from URL hash on mount */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const idx = slides.findIndex((s) => s.id === hash);
    if (idx > 0) setCurrent(idx);
  }, [slides]);

  /* Sync slide id to URL hash */
  useEffect(() => {
    window.location.hash = slides[current].id;
  }, [current, slides]);

  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < slides.length && index !== current) {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
      }
    },
    [current, slides.length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  /* Keyboard navigation */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "PageDown":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          prev();
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(slides.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev, goTo, slides.length]);

  /* Touch / swipe navigation */
  useEffect(() => {
    let startX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - startX;
      if (deltaX > 60) prev();
      else if (deltaX < -60) next();
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [next, prev]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Subtle ambient gradient */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Slide content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full max-w-[1400px] mx-auto px-16 py-14 flex items-center">
            {slides[current].content}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ─── Navigation HUD ─── */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Progress bar */}
        <div className="h-[2px] bg-surface-light">
          <motion.div
            className="h-full bg-accent"
            initial={false}
            animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
          />
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center px-6 py-3 bg-background/80 backdrop-blur-sm">
          <span className="font-mono text-xs text-text-secondary">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
          </span>

          {/* Dot navigation */}
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-accent w-6"
                    : i < current
                    ? "bg-text-secondary/40 w-1.5"
                    : "bg-surface-light w-1.5"
                }`}
                style={
                  i === current
                    ? { boxShadow: "0 0 8px var(--accent-glow)" }
                    : undefined
                }
              />
            ))}
          </div>

          <span className="font-mono text-xs text-text-secondary/40">
            &larr; &rarr;
          </span>
        </div>
      </div>
    </div>
  );
}
