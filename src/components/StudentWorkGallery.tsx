"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface StudentWorkGalleryProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export default function StudentWorkGallery({
  images,
  className = "",
}: StudentWorkGalleryProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const goPrev = useCallback(() => {
    setSelected((s) => (s !== null ? (s > 0 ? s - 1 : images.length - 1) : null));
  }, [images.length]);

  const goNext = useCallback(() => {
    setSelected((s) => (s !== null ? (s < images.length - 1 ? s + 1 : 0) : null));
  }, [images.length]);

  const close = useCallback(() => setSelected(null), []);

  /* Keyboard nav for lightbox — captures before Presentation can act */
  useEffect(() => {
    if (selected === null) return;

    const handleKey = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          e.stopPropagation();
          close();
          break;
        case "ArrowLeft":
          e.stopPropagation();
          goPrev();
          break;
        case "ArrowRight":
        case " ":
          e.stopPropagation();
          goNext();
          break;
      }
    };

    /* Use capture phase so we intercept before Presentation's listener */
    window.addEventListener("keydown", handleKey, true);
    return () => window.removeEventListener("keydown", handleKey, true);
  }, [selected, close, goPrev, goNext]);

  return (
    <>
      {/* Thumbnail grid */}
      <div
        className={`overflow-y-auto overflow-x-hidden pr-2 ${className}`}
        style={{ maxHeight: "calc(100vh - 280px)" }}
      >
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-2">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded border border-surface-light bg-black/40 cursor-pointer transition-all hover:border-accent hover:shadow-[0_0_12px_var(--accent-glow)] focus:outline-none focus:border-accent"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-[11px] font-mono text-white/90 truncate">
                  {image.alt}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selected].src}
                alt={images[selected].alt}
                className="max-w-full max-h-[80vh] object-contain rounded"
              />

              {/* Caption bar */}
              <div className="mt-3 flex items-center gap-4">
                <p className="font-mono text-sm text-white/80">
                  {images[selected].alt}
                </p>
                <span className="font-mono text-xs text-text-secondary">
                  {selected + 1} / {images.length}
                </span>
              </div>
            </motion.div>

            {/* Nav arrows */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-accent/20 hover:text-accent transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
            >
              &#8592;
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-accent/20 hover:text-accent transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
            >
              &#8594;
            </button>

            {/* Close button */}
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/60 hover:bg-accent/20 hover:text-accent transition-colors font-mono text-lg"
              onClick={close}
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
