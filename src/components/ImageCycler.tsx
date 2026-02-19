"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ImageCyclerProps {
  images: { src: string; alt: string }[];
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageCycler({
  images,
  interval = 3000,
  className = "",
  style,
}: ImageCyclerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden aspect-video max-h-[calc(100vh-200px)] bg-black/40 ${className}`} style={style}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index].src}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </AnimatePresence>
    </div>
  );
}
