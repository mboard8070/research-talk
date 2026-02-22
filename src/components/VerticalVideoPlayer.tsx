"use client";

import { useRef, useState } from "react";

interface VerticalVideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

const SPEEDS = [0.5, 1, 1.5, 2, 3];

export default function VerticalVideoPlayer({
  videoId,
  title = "Video",
  className = "",
}: VerticalVideoPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [speed, setSpeed] = useState(1);

  // YouTube iframe API doesn't support playback rate via URL params,
  // so we use the postMessage API to control the embedded player.
  const changeSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({
        event: "command",
        func: "setPlaybackRate",
        args: [newSpeed],
      }),
      "*"
    );
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div
        className="relative rounded-lg overflow-hidden border border-surface-light"
        style={{ width: "min(360px, 50vw)", aspectRatio: "9 / 16" }}
      >
        <div
          className="absolute"
          style={{
            width: "177.78%",
            height: "56.25%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(90deg)",
          }}
        >
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&enablejsapi=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-text-secondary/50 font-mono mr-1">Speed</span>
        {SPEEDS.map((s) => (
          <button
            key={s}
            onClick={() => changeSpeed(s)}
            className={`px-2 py-1 rounded text-xs font-mono transition-colors ${
              speed === s
                ? "bg-accent text-black"
                : "bg-surface-light/30 text-text-secondary hover:bg-surface-light/50"
            }`}
          >
            {s}x
          </button>
        ))}
      </div>
    </div>
  );
}
