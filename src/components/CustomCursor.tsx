"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const trailPositions = useRef<{ x: number; y: number }[]>([]);
  const animRef = useRef<number>(0);
  const visible = useRef(false);

  const TRAIL_COUNT = 5;

  useEffect(() => {
    // Skip on touch devices
    if ("ontouchstart" in window) return;

    // Initialize trail positions
    trailPositions.current = Array(TRAIL_COUNT).fill({ x: -100, y: -100 });

    const handleMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        ringPos.current = { x: e.clientX, y: e.clientY };
        trailPositions.current = Array(TRAIL_COUNT).fill({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };

    const handleMouseLeave = () => {
      visible.current = false;
    };

    const handleMouseEnter = () => {
      visible.current = true;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.body.style.cursor = "none";

    const animate = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;

      const opacity = visible.current ? 1 : 0;

      // Dot follows exactly
      if (dot) {
        dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
        dot.style.opacity = String(opacity);
      }

      // Ring follows with smooth lag
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (ring) {
        ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
        ring.style.opacity = String(opacity);
      }

      // Trail follows with cascading lag
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const target =
          i === 0 ? pos.current : trailPositions.current[i - 1];
        const tp = trailPositions.current[i];
        const newPos = {
          x: tp.x + (target.x - tp.x) * (0.2 - i * 0.025),
          y: tp.y + (target.y - tp.y) * (0.2 - i * 0.025),
        };
        trailPositions.current[i] = newPos;

        const el = trailRefs.current[i];
        if (el) {
          const trailOpacity = (1 - i / TRAIL_COUNT) * 0.3 * opacity;
          el.style.transform = `translate(${newPos.x}px, ${newPos.y}px)`;
          el.style.opacity = String(trailOpacity);
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={`trail-${i}`}
          ref={(el) => {
            if (el) trailRefs.current[i] = el;
          }}
          className="fixed top-0 left-0 pointer-events-none"
          style={{
            width: 4 - i * 0.4,
            height: 4 - i * 0.4,
            marginLeft: -(4 - i * 0.4) / 2,
            marginTop: -(4 - i * 0.4) / 2,
            borderRadius: "50%",
            backgroundColor: "var(--accent)",
            zIndex: 9997,
            opacity: 0,
          }}
        />
      ))}

      {/* Outer ring — smooth follow */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          borderRadius: "50%",
          border: "1px solid rgba(0, 212, 255, 0.35)",
          boxShadow: "0 0 12px var(--accent-dim), inset 0 0 8px var(--accent-dim)",
          zIndex: 9998,
          opacity: 0,
          transition: "width 0.2s, height 0.2s, margin 0.2s",
        }}
      />

      {/* Core dot — instant follow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          width: 6,
          height: 6,
          marginLeft: -3,
          marginTop: -3,
          borderRadius: "50%",
          backgroundColor: "var(--accent)",
          boxShadow:
            "0 0 8px var(--accent-glow), 0 0 20px var(--accent-dim), 0 0 40px rgba(0, 212, 255, 0.08)",
          zIndex: 9999,
          opacity: 0,
        }}
      />
    </>
  );
}
