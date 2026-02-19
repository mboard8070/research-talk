"use client";

import { useState, useEffect, useRef } from "react";

interface GlitchTextProps {
  children: string;
  className?: string;
}

export default function GlitchText({ children, className = "" }: GlitchTextProps) {
  const [glitchIntensity, setGlitchIntensity] = useState(0); // 0 = off, 0.2–1.0 = intensity
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const glitchTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const scheduleGlitch = () => {
      // Longer gaps between glitches: 4–10 seconds
      const delay = 4000 + Math.random() * 6000;
      timeoutRef.current = setTimeout(() => {
        // Random intensity — most glitches are subtle, occasionally big
        const roll = Math.random();
        let intensity: number;
        if (roll < 0.5) {
          intensity = 0.15 + Math.random() * 0.2;  // subtle (50% of the time)
        } else if (roll < 0.8) {
          intensity = 0.35 + Math.random() * 0.3;  // medium (30% of the time)
        } else {
          intensity = 0.7 + Math.random() * 0.3;   // full (20% of the time)
        }

        setGlitchIntensity(intensity);

        // Duration scales with intensity
        const duration = 100 + intensity * 350 + Math.random() * 150;
        glitchTimeoutRef.current = setTimeout(() => {
          setGlitchIntensity(0);
          scheduleGlitch();
        }, duration);
      }, delay);
    };

    scheduleGlitch();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (glitchTimeoutRef.current) clearTimeout(glitchTimeoutRef.current);
    };
  }, []);

  const isGlitching = glitchIntensity > 0;
  const i = glitchIntensity; // shorthand

  return (
    <span className={`relative inline-block ${className}`} aria-label={children}>
      {/* Base text — hidden during glitch */}
      <span className={isGlitching ? "invisible" : "visible"}>
        {children}
      </span>

      {isGlitching && (
        <>
          {/* Main layer — rapid clip slicing */}
          <span
            className="absolute inset-0"
            style={{
              animation: `glitch-main ${150 + (1 - i) * 100}ms steps(2) infinite`,
              transform: `scale(${1 + i * 0.01})`,
            }}
          >
            {children}
          </span>

          {/* Red channel offset — scaled by intensity */}
          <span
            className="absolute inset-0"
            style={{
              color: `rgba(255, 40, 40, ${0.3 + i * 0.55})`,
              mixBlendMode: "screen",
              animation: `glitch-r ${150 + (1 - i) * 100}ms steps(3) infinite`,
              transform: `translateX(${i * 8}px)`,
            }}
          >
            {children}
          </span>

          {/* Cyan channel offset — scaled by intensity */}
          <span
            className="absolute inset-0"
            style={{
              color: `rgba(40, 255, 255, ${0.3 + i * 0.55})`,
              mixBlendMode: "screen",
              animation: `glitch-b ${150 + (1 - i) * 100}ms steps(3) infinite`,
              transform: `translateX(${-i * 8}px)`,
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}
