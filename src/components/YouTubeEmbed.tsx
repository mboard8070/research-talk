"use client";

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubeEmbed({
  videoId,
  title = "Video",
  className = "",
}: YouTubeEmbedProps) {
  return (
    <div
      className={`relative w-full aspect-video max-h-[calc(100vh-200px)] rounded-lg overflow-hidden border border-surface-light ${className}`}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
