"use client";

import dynamic from "next/dynamic";
import Presentation, {
  AnimateIn,
  SlideData,
} from "@/components/Presentation";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import VerticalVideoPlayer from "@/components/VerticalVideoPlayer";
import NeuralNetwork from "@/components/NeuralNetwork";
import CustomCursor from "@/components/CustomCursor";
import GlitchText from "@/components/GlitchText";
import RotatingWords from "@/components/RotatingWords";
import StudentWorkGallery from "@/components/StudentWorkGallery";
import { useEffect } from "react";

const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

/* ── Mouse parallax tracker (sets CSS custom properties) ── */
function useMouseParallax() {
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty("--mx", `${x}`);
      document.documentElement.style.setProperty("--my", `${y}`);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);
}

/* ═══════════════════════════════════════════════════════════
   SLIDE CONTENT
   Edit your slides below. Each slide has an id and content.
   Use AnimateIn to stagger-animate elements within a slide.
   ═══════════════════════════════════════════════════════════ */

/* ── Image base path shorthand ── */
const img = (path: string) => `/images/PresImages/${path}`;

const slides: SlideData[] = [
  /* ── 01 · Title ── */
  {
    id: "title",
    content: (
      <div className="w-full flex flex-col items-center justify-center text-center gap-6">
        <NeuralNetwork />
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
            zIndex: 2,
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
          <AnimateIn>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight parallax-strong">
              <GlitchText>Matthew Board, MFA</GlitchText>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div
              className="w-24 h-[2px] bg-accent mx-auto parallax-medium"
              style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
            />
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed parallax-medium">
              <RotatingWords
                words={[
                  "Technical Artist",
                  "Indie Developer",
                  "Modeling & Animation",
                  "Researcher",
                  "Educator",
                ]}
                interval={2800}
              />
            </p>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── 02 · About ── */
  {
    id: "about",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <AnimateIn>
            <h2 className="text-4xl font-bold leading-tight">
              About me
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed">
              Indie game developer, technical artist, and creative AI researcher
              exploring the intersection of artificial intelligence and 3D content
              creation. From shipping games on Steam to building local AI systems
              on NVIDIA hardware, my work bridges traditional modeling and animation
              pipelines with emerging AI-driven workflows.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-3 mt-2">
              {["Creative AI", "Game Dev", "Tech Art", "3D Modeling", "Animation"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-accent/30 text-accent text-sm font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.2}>
          <div className="aspect-square rounded-lg bg-surface border border-surface-light flex items-center justify-center overflow-hidden max-w-[50%] mx-auto">
            <img src="/images/headshot.jpg" alt="Matthew Board" className="w-full h-full object-cover" />
          </div>
        </AnimateIn>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     INSPIRATION
     ══════════════════════════════════════ */

  /* ── Section: Inspiration ── */
  {
    id: "section-inspiration",
    content: (
      <div className="w-full flex flex-col items-center justify-center text-center gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-text-secondary/50 tracking-[0.3em] uppercase">
            01
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-accent">Inspiration</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.25}>
          <div
            className="w-16 h-[2px] bg-accent mt-2"
            style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── Victor Burgin Quote ── */
  {
    id: "burgin-quote",
    content: (
      <div className="w-full flex flex-col items-center justify-center text-center gap-8 max-w-4xl mx-auto">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Historical Context
          </p>
        </AnimateIn>
        <AnimateIn delay={0.15}>
          <h2 className="text-3xl md:text-4xl font-bold leading-relaxed italic">
            &ldquo;I was drawn to this technology for much the same
            reason I first turned to photography — because of its
            ubiquitous contributions to the everyday environment
            of images.&rdquo;
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.35}>
          <p className="text-text-secondary text-lg">
            — <span className="text-accent">Victor Burgin</span>,{" "}
            <em>TANK Magazine</em> (2024), on his adoption of game
            engine software for art-making
          </p>
        </AnimateIn>
        <AnimateIn delay={0.45}>
          <a
            href="https://tank.tv/magazine/issue-98/features/ca-victor-burgin"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-secondary/40 hover:text-accent transition-colors"
          >
            tank.tv/magazine/issue-98/features/ca-victor-burgin
          </a>
        </AnimateIn>
      </div>
    ),
  },

  /* ── Art & Technology Lineage: Paik + Rath ── */
  {
    id: "lineage-historical",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Paik */}
        <div className="flex flex-col gap-4">
          <AnimateIn>
            <img
              src={img("References/paik_kunstpalast_exhibit.jpg")}
              alt="Nam June Paik — Exhibition"
              className="w-full rounded-lg border border-surface-light"
            />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h3 className="text-2xl font-bold">Nam June Paik</h3>
            <p className="text-accent text-sm font-mono">1932 – 2006 · Father of Video Art</p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed text-sm">
              First to treat the television as a sculptural medium. From{" "}
              <em>TV Buddha</em> to <em>Electronic Superhighway</em>, Paik
              insisted that new media tools demand new artistic vocabularies —
              the direct philosophical predecessor to today&apos;s Creative AI
              practice.
            </p>
          </AnimateIn>
        </div>
        {/* Rath */}
        <div className="flex flex-col gap-4">
          <AnimateIn delay={0.1}>
            <img
              src={img("References/rath_arecibo_sculpture.jpg")}
              alt="Alan Rath — Arecibo (1992)"
              className="max-h-[320px] mx-auto rounded-lg border border-surface-light"
            />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h3 className="text-2xl font-bold">Alan Rath</h3>
            <p className="text-accent text-sm font-mono">1959 – 2020 · Born in Cincinnati</p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-text-secondary leading-relaxed text-sm">
              MIT-trained engineer turned electronic sculptor. Designed custom
              hardware and wrote non-repeating generative software — an early
              practitioner of algorithmic art. Showed with Carl Solway Gallery
              in Cincinnati; work in the Cincinnati Art Museum collection.
              1991 Whitney Biennial.
            </p>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── Concept Design Lineage: Mead + Robertson ── */
  {
    id: "lineage-mead-robertson",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Syd Mead */}
        <div className="flex flex-col gap-4">
          <AnimateIn>
            <img
              src={img("References/syd_mead_gouache.jpg")}
              alt="Syd Mead — Honda concept gouache rendering"
              className="w-full rounded-lg border border-surface-light"
            />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h3 className="text-2xl font-bold">Syd Mead</h3>
            <p className="text-accent text-sm font-mono">1933 – 2019 · Visual Futurist</p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed text-sm">
              Coined the title &ldquo;Visual Futurist.&rdquo; Concept designer for{" "}
              <em>Blade Runner</em>, <em>Tron</em>, and <em>Aliens</em>. His
              industrial-design approach to imaginary worlds — &ldquo;reality
              ahead of schedule&rdquo; — established the modern concept-art
              pipeline used across film, games, and automotive design.
            </p>
          </AnimateIn>
        </div>
        {/* Scott Robertson */}
        <div className="flex flex-col gap-4">
          <AnimateIn delay={0.1}>
            <img
              src={img("References/scott_robertson_hauler.jpg")}
              alt="Scott Robertson — Sci-Fi Hauler concept"
              className="w-full rounded-lg border border-surface-light"
            />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h3 className="text-2xl font-bold">Scott Robertson</h3>
            <p className="text-accent text-sm font-mono">Concept &amp; Industrial Designer</p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-text-secondary leading-relaxed text-sm">
              Art Center grad who chaired the Entertainment Design department.
              Authored 11 books including <em>How to Draw</em> and{" "}
              <em>How to Render</em>. Clients include BMW, Nike, and Mattel;
              film credits on <em>Minority Report</em>. Founded Design Studio
              Press, shaping a generation of concept artists.
            </p>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── Contemporary Context: Anadol, Chung ── */
  {
    id: "lineage-contemporary",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Anadol */}
        <div className="flex flex-col gap-3">
          <AnimateIn>
            <img
              src={img("References/anadol_unsupervised.jpg")}
              alt="Refik Anadol — Unsupervised (2022), MoMA"
              className="w-full aspect-video object-cover rounded-lg border border-surface-light"
            />
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h3 className="text-xl font-bold">Refik Anadol</h3>
            <p className="text-accent text-xs font-mono">AI Data Sculptures</p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed text-sm">
              Uses machine learning to transform massive datasets into immersive,
              large-scale data sculptures. <em>Unsupervised</em> (2022) at MoMA
              was trained on the museum&apos;s entire collection. Opening
              DATALAND — the world&apos;s first AI art museum — in 2026.
            </p>
          </AnimateIn>
        </div>
        {/* Chung */}
        <div className="flex flex-col gap-3">
          <AnimateIn delay={0.1}>
            <img
              src={img("References/chung_art_and_artifice.jpg")}
              alt="Sougwen Chung — Drawing with D.O.U.G."
              className="w-full aspect-video object-cover rounded-lg border border-surface-light"
            />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <h3 className="text-xl font-bold">Sougwen Chung</h3>
            <p className="text-accent text-xs font-mono">Human–AI Collaboration</p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-text-secondary leading-relaxed text-sm">
              Paints alongside robotic arms driven by AI trained on their own
              brushstrokes and biometric data. A decade-long exploration of
              human–machine co-authorship — collaboration, not replacement.
            </p>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     CREATIVE WORK
     ══════════════════════════════════════ */

  /* ── 04 · Section: Creative Work ── */
  {
    id: "section-work",
    content: (
      <div className="w-full flex flex-col items-center justify-center text-center gap-6">
        <AnimateIn>
          <p className="font-mono text-sm text-text-secondary/50 tracking-[0.3em] uppercase">
            02
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-5xl md:text-6xl font-bold">
            Creative <span className="text-accent">Work</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.25}>
          <div
            className="w-16 h-[2px] bg-accent mt-2"
            style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
          />
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <div className="flex flex-col gap-5 mt-4">
            {/* 3D Apps */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-mono text-xs text-text-secondary/50 uppercase tracking-wider">3D &amp; Sculpting</p>
              <div className="flex items-center gap-5">
                {[
                  { src: "/images/logos/maya.svg", alt: "Maya" },
                  { src: "/images/logos/3dsmax.svg", alt: "3ds Max" },
                  { src: "/images/logos/blender.svg", alt: "Blender" },
                  { src: "/images/logos/zbrush.svg", alt: "ZBrush" },
                ].map((logo) => (
                  <div key={logo.alt} className="flex flex-col items-center gap-1">
                    <img src={logo.src} alt={logo.alt} className="w-8 h-8 opacity-70" style={{ filter: "brightness(0) invert(1)" }} />
                    <span className="text-[10px] text-text-secondary/50 font-mono">{logo.alt}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Texturing & Design */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-mono text-xs text-text-secondary/50 uppercase tracking-wider">Texturing &amp; Design</p>
              <div className="flex items-center gap-5">
                {[
                  { src: "/images/logos/substance-painter.svg", alt: "Substance Painter" },
                  { src: "/images/logos/substance-designer.svg", alt: "Substance Designer" },
                  { src: "/images/logos/photoshop.svg", alt: "Photoshop" },
                  { src: "/images/logos/illustrator.svg", alt: "Illustrator" },
                ].map((logo) => (
                  <div key={logo.alt} className="flex flex-col items-center gap-1">
                    <img src={logo.src} alt={logo.alt} className="w-8 h-8 opacity-70" style={{ filter: "brightness(0) invert(1)" }} />
                    <span className="text-[10px] text-text-secondary/50 font-mono">{logo.alt}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Engines & Dev */}
            <div className="flex flex-col items-center gap-2">
              <p className="font-mono text-xs text-text-secondary/50 uppercase tracking-wider">Engines &amp; Dev</p>
              <div className="flex items-center gap-5">
                {[
                  { src: "/images/logos/unreal-engine.svg", alt: "Unreal Engine" },
                  { src: "/images/logos/rider.svg", alt: "Rider" },
                  { src: "/images/logos/pycharm.svg", alt: "PyCharm" },
                  { src: "/images/logos/github.svg", alt: "GitHub" },
                ].map((logo) => (
                  <div key={logo.alt} className="flex flex-col items-center gap-1">
                    <img src={logo.src} alt={logo.alt} className="w-8 h-8 opacity-70" style={{ filter: "brightness(0) invert(1)" }} />
                    <span className="text-[10px] text-text-secondary/50 font-mono">{logo.alt}</span>
                  </div>
                ))}
              </div>
            </div>          </div>
        </AnimateIn>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     ASTRONAUT
     ══════════════════════════════════════ */

  /* ── 05 · Astronaut — Hero ── */
  {
    id: "astronaut-hero",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Character Art
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">Astronaut</h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed">
              A character study exploring realistic skin and hair rendering in UE5.
              Head textures were built layer-by-layer in Substance Painter — from blood
              through skin layers to a final makeup pass. Hair was crafted in XGen with
              guides. Rendering leveraged Metahuman eye shaders and subsurface profiles,
              with a ZBrush cavity map breaking up surface roughness and doubled-up
              normals for extra skin detail. The suit was retopologized in Modo,
              sculpted in ZBrush, and painted in Substance Painter.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {["ZBrush", "Substance Painter", "UE5", "XGen", "Modo"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.15}>
          <img
            src={img("Astronaut/FullBodyHelmet.jpg")}
            alt="Astronaut — Full Body"
            className="w-full max-h-[calc(100vh-160px)] object-contain rounded-lg border border-surface-light"
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── 06 · Astronaut — Detail Plates ── */
  {
    id: "astronaut-details",
    content: (
      <div className="w-full flex flex-col gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Astronaut &middot; Pipeline &amp; Detail
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <StudentWorkGallery
            images={[
              { src: img("Astronaut/NoMakeUp.jpg"), alt: "No Makeup" },
              { src: img("Astronaut/MakeupPass.jpg"), alt: "Makeup Pass" },
              { src: img("Astronaut/FaceDetail.jpg"), alt: "Face Detail" },
              { src: img("Astronaut/SkinDetail.jpg"), alt: "Skin Detail" },
              { src: img("Astronaut/SkinShader.jpg"), alt: "Skin Shader" },
              { src: img("Astronaut/SubstancePainterDetail.jpg"), alt: "Substance Painter" },
              { src: img("Astronaut/ArtDetail.jpg"), alt: "Hair Guides" },
              { src: img("Astronaut/SculptDetail.jpg"), alt: "Sculpt Detail" },
              { src: img("Astronaut/SculptedSuit.jpg"), alt: "Sculpted Suit" },
              { src: img("Astronaut/SuitDetail1.jpg"), alt: "Suit Detail" },
              { src: img("Astronaut/SuitDetail02.jpg"), alt: "Suit Shoulder" },
              { src: img("Astronaut/CGenDetail.jpg"), alt: "Leg Detail" },
              { src: img("Astronaut/HandDetail.jpg"), alt: "Hand Detail" },
              { src: img("Astronaut/Helmet34.jpg"), alt: "Helmet 3/4" },
              { src: img("Astronaut/HelmetGlass.jpg"), alt: "Helmet Glass" },
              { src: img("Astronaut/LightRig.jpg"), alt: "UE5 Light Rig" },
              { src: img("Astronaut/FullBody.jpg"), alt: "Full Body" },
            ]}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     IGGY POP
     ══════════════════════════════════════ */

  /* ── 07 · Iggy Pop — Hero ── */
  {
    id: "iggy-hero",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <img
            src={img("IggyPop/matthew-board-iggyportrait-0001.jpg")}
            alt="Iggy Pop — Portrait"
            className="w-full rounded-lg border border-surface-light"
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Digital Likeness
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">Iggy Pop</h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              Inspired by seeing Iggy Pop perform live in Chicago in 2010, this
              digital likeness began as a personal character study and evolved into
              a real-time rigged model. In 2016, AST Studios licensed the character
              model and textures for the Oneohtrix Point Never &amp; Iggy Pop music
              video &ldquo;The Pure and the Damned&rdquo; from the motion picture{" "}
              <em>Good Time</em>, which debuted at Sundance 2017. Recently reworked
              for UE5 with subsurface shading, strand-based hair in XGen, repainted
              textures in Substance Painter, and path-traced rendering.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="flex flex-wrap gap-2">
              {["ZBrush", "XGen", "Keyshot", "Substance"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── 08 · Iggy Pop — Details ── */
  {
    id: "iggy-details",
    content: (
      <div className="w-full flex flex-col gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Iggy Pop &middot; Process &amp; Detail
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <StudentWorkGallery
            images={[
              { src: img("IggyPop/IggyZBrush.jpg"), alt: "ZBrush Sculpt" },
              { src: img("IggyPop/IggyXGen.jpg"), alt: "XGen Hair" },
              { src: img("IggyPop/IggyKeyshot.jpg"), alt: "Keyshot Render" },
              { src: img("IggyPop/IggyTextureMap.jpg"), alt: "Texture Map" },
              { src: img("IggyPop/IggyTorso.jpg"), alt: "Torso Detail" },
              { src: img("IggyPop/IggyRefSheet.jpg"), alt: "Reference Sheet" },
            ]}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     KAMODO STEVE
     ══════════════════════════════════════ */

  /* ── 09 · Kamodo Steve — Hero ── */
  {
    id: "kamodo-hero",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
        <div className="md:col-span-2 flex flex-col gap-5">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Indie Game &middot; Published on Steam
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">Kamodo Steve:<br />Janitor on Fire!</h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <img
              src={img("KamodoSteve/steam/header.jpg")}
              alt="Steam Header"
              className="w-full rounded-lg border border-surface-light"
            />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed text-sm">
              A janitor discovers the source of the poison hurting his town
              at a local chemical plant. Inspired by the same true story as
              the film <em>Dark Waters</em>, Kamodo Steve is a solo-developed
              indie title published on Steam built in Unreal Engine.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {["Unreal Engine", "Maya", "Substance", "Co-op", "Steam"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="flex items-center gap-4 mt-1">
              {/* Windows */}
              <svg className="w-6 h-6 text-text-secondary/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              {/* Steam */}
              <svg className="w-6 h-6 text-text-secondary/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012zm8.4-9.3c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
              </svg>
            </div>
          </AnimateIn>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 gap-2">
          <AnimateIn delay={0.1}>
            <video autoPlay muted loop playsInline className="w-full aspect-video object-cover rounded-lg border border-surface-light">
              <source src={img("KamodoSteve/steam/gameplay_clip_1.mp4")} type="video/mp4" />
            </video>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <img src={img("KamodoSteve/steam/ss_01.jpg")} alt="Gameplay" className="w-full aspect-video object-cover rounded-lg border border-surface-light" />
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <img src={img("KamodoSteve/steam/ss_03.jpg")} alt="Environment" className="w-full aspect-video object-cover rounded-lg border border-surface-light" />
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <video autoPlay muted loop playsInline className="w-full aspect-video object-cover rounded-lg border border-surface-light">
              <source src={img("KamodoSteve/steam/gameplay_clip_2.mp4")} type="video/mp4" />
            </video>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── 10 · Kamodo Steve — Gameplay Clips ── */
  {
    id: "kamodo-gameplay",
    content: (
      <div className="w-full flex flex-col gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Kamodo Steve &middot; Gameplay Clips
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div className="grid grid-cols-3 gap-2">
            <iframe src="https://www.youtube.com/embed/7vAlTsZSnN0?autoplay=1&mute=1&controls=0&loop=1&playlist=7vAlTsZSnN0&modestbranding=1&rel=0" className="w-full aspect-video rounded border border-surface-light" allow="autoplay; encrypted-media" allowFullScreen frameBorder="0" title="Jetpack Gameplay" />
            <iframe src="https://www.youtube.com/embed/TXTpwV1bFTE?autoplay=1&mute=1&controls=0&loop=1&playlist=TXTpwV1bFTE&modestbranding=1&rel=0" className="w-full aspect-video rounded border border-surface-light" allow="autoplay; encrypted-media" allowFullScreen frameBorder="0" title="Boss Battle" />
            <iframe src="https://www.youtube.com/embed/bP-q69kJNQo?autoplay=1&mute=1&controls=0&loop=1&playlist=bP-q69kJNQo&modestbranding=1&rel=0" className="w-full aspect-video rounded border border-surface-light" allow="autoplay; encrypted-media" allowFullScreen frameBorder="0" title="Aggro Rocket Pods" />
            <iframe src="https://www.youtube.com/embed/3R7B0hfoIjY?autoplay=1&mute=1&controls=0&loop=1&playlist=3R7B0hfoIjY&modestbranding=1&rel=0" className="w-full aspect-video rounded border border-surface-light" allow="autoplay; encrypted-media" allowFullScreen frameBorder="0" title="Shield Feedback" />
            <iframe src="https://www.youtube.com/embed/UaJTu94KZGU?autoplay=1&mute=1&controls=0&loop=1&playlist=UaJTu94KZGU&modestbranding=1&rel=0" className="w-full aspect-video rounded border border-surface-light" allow="autoplay; encrypted-media" allowFullScreen frameBorder="0" title="10sec Short" />
            <iframe src="https://www.youtube.com/embed/ZycgoKhTME8?autoplay=1&mute=1&controls=0&loop=1&playlist=ZycgoKhTME8&modestbranding=1&rel=0" className="w-full aspect-video rounded border border-surface-light" allow="autoplay; encrypted-media" allowFullScreen frameBorder="0" title="Quick Teaser" />
          </div>
        </AnimateIn>
      </div>
    ),
  },

  /* ── 11 · Kamodo Steve — Art Pipeline ── */
  {
    id: "kamodo-art",
    content: (
      <div className="w-full flex flex-col gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Kamodo Steve &middot; Art &amp; Pipeline
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <StudentWorkGallery
            images={[
              { src: img("KamodoSteve/bear.jpg"), alt: "Bear Character" },
              { src: img("KamodoSteve/BearFurShader.jpg"), alt: "Bear Fur Shader" },
              { src: img("KamodoSteve/Island.jpg"), alt: "Island Environment" },
              { src: img("KamodoSteve/FoliageBeauty.jpg"), alt: "Foliage" },
              { src: img("KamodoSteve/TIkiDetail.jpg"), alt: "Tiki Detail" },
              { src: img("KamodoSteve/SleekTikiMascot.jpg"), alt: "Tiki Mascot" },
              { src: img("KamodoSteve/FoliageDetail.jpg"), alt: "Foliage Detail" },
              { src: img("KamodoSteve/MushroomTexture.jpg"), alt: "Mushroom Texture" },
              { src: img("KamodoSteve/JadeTexture.jpg"), alt: "Jade Texture" },
            ]}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── 12 · Kamodo Steve — Trailer ── */
  {
    id: "kamodo-trailer",
    content: (
      <div className="w-full flex flex-col gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Kamodo Steve &middot; Game Trailer
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <YouTubeEmbed videoId="isFH9XxmE2o" />
        </AnimateIn>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     STORIES FROM THE CORES
     ══════════════════════════════════════ */

  /* ── 11 · Stories — Hero ── */
  {
    id: "stories-hero",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <img
            src={img("StoriesFromTheCores/AttractScreen.jpg")}
            alt="Stories from the Cores — Attract Screen"
            className="w-full rounded-lg border border-surface-light"
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Interactive Installation
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">Stories from the Cores</h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              An educational game where players analyze evidence from beneath the
              ocean floor to unlock dramatic stories. Join science bot Rovee on
              expeditions with the International Ocean Discovery Program — drill
              core samples, compare layers, investigate hypotheses, and piece
              together the stories hidden in the Earth&apos;s geological record.
              Published on Steam.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="flex flex-wrap gap-2">
              {["Unreal Engine", "ZBrush", "Maya", "Substance", "Interactive"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.45}>
            <div className="flex items-center gap-4 mt-1">
              {/* Windows */}
              <svg className="w-6 h-6 text-text-secondary/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
              </svg>
              {/* macOS */}
              <svg className="w-6 h-6 text-text-secondary/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {/* Steam */}
              <svg className="w-6 h-6 text-text-secondary/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 12-5.373 12-12s-5.373-12-12-12zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012zm8.4-9.3c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
              </svg>
              {/* Android */}
              <svg className="w-6 h-6 text-text-secondary/70" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.523 15.341c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91zm-11.046 0c-.5 0-.91-.41-.91-.91s.41-.91.91-.91.91.41.91.91-.41.91-.91.91zm11.4-6.24l1.96-3.39c.11-.18.04-.41-.14-.52-.18-.11-.41-.04-.52.14l-1.99 3.43C15.46 7.82 13.8 7.34 12 7.34s-3.46.48-5.17 1.38L4.84 5.33c-.11-.18-.34-.25-.52-.14-.18.11-.25.34-.14.52l1.96 3.39C2.86 11.17.5 14.58.5 18.5h23c0-3.92-2.36-7.33-5.63-9.4z" />
              </svg>
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── 12 · Stories — Details ── */
  {
    id: "stories-details",
    content: (
      <div className="w-full flex flex-col gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Stories from the Cores &middot; Assets &amp; Pipeline
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <StudentWorkGallery
            images={[
              { src: img("StoriesFromTheCores/ColumbiaMammot.jpg"), alt: "Columbian Mammoth" },
              { src: img("StoriesFromTheCores/MammothSculpt.jpg"), alt: "Mammoth Sculpt" },
              { src: img("StoriesFromTheCores/Mososaur.jpg"), alt: "Mososaur" },
              { src: img("StoriesFromTheCores/Forams1.jpg"), alt: "Foraminifera" },
              { src: img("StoriesFromTheCores/Rovee.jpg"), alt: "Rovee Character" },
              { src: img("StoriesFromTheCores/Kiosk.jpg"), alt: "Museum Kiosk" },
              { src: img("StoriesFromTheCores/steam/ss_01.jpg"), alt: "Gameplay" },
              { src: img("StoriesFromTheCores/steam/ss_02.jpg"), alt: "Gameplay" },
              { src: img("StoriesFromTheCores/steam/ss_03.jpg"), alt: "Gameplay" },
              { src: img("StoriesFromTheCores/steam/ss_04.jpg"), alt: "Gameplay" },
              { src: img("StoriesFromTheCores/steam/ss_05.jpg"), alt: "Gameplay" },
              { src: img("StoriesFromTheCores/steam/ss_06.jpg"), alt: "Gameplay" },
              { src: img("StoriesFromTheCores/steam/ss_07.jpg"), alt: "Gameplay" },
              { src: img("StoriesFromTheCores/steam/ss_08.jpg"), alt: "Gameplay" },
            ]}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── Stories — Trailer ── */
  {
    id: "stories-trailer",
    content: (
      <div className="w-full flex flex-col gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Stories from the Cores &middot; Game Trailer
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <YouTubeEmbed videoId="lwt_ndeOZs4" />
        </AnimateIn>
      </div>
    ),
  },

  /* ── Necessary Illusions — Hero ── */
  {
    id: "necessary-illusions",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              SPRING/BREAK Art Show &middot; Los Angeles
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">Necessary Illusions</h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed">
              First collaboration between Stillion &amp; Board after six years
              working together, exhibited at Skylight Culver City in February 2022.
              Stillion&apos;s paintings of face jugs, poppies &amp; houseflies evoke
              decomposition and the animation of inanimate objects &mdash; referencing
              African American pottery from 19th-century South Carolina. Board&apos;s
              custom software manipulates and animates the imagery through code &amp;
              algorithm. Featured in the &ldquo;HEARSAY:HERESY&rdquo; themed exhibition
              alongside 50+ curated shows.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="flex flex-wrap gap-2">
              {["Painting", "Custom Software", "Interactive", "Installation"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.15}>
          <img
            src={img("StoriesFromTheCores/necessary_illusions.jpg")}
            alt="Necessary Illusions — SPRING/BREAK Art Show LA"
            className="w-full max-h-[calc(100vh-160px)] object-contain rounded-lg border border-surface-light"
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── Stories — Vertical Video ── */
  {
    id: "stories-vertical-video",
    content: (
      <div className="w-full flex flex-col items-center gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Stories from the Cores &middot; Gameplay
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <VerticalVideoPlayer videoId="rVOwZSsl1b0" title="Stories from the Cores — Gameplay" />
        </AnimateIn>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     STUDENT WORK
     ══════════════════════════════════════ */

  /* ── 13 · Section: Teaching & Student Work ── */
  {
    id: "section-teaching",
    content: (
      <div className="w-full flex flex-col items-center justify-center text-center gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-text-secondary/50 tracking-[0.3em] uppercase">
            03
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-accent">Student Work</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.25}>
          <div
            className="w-16 h-[2px] bg-accent mt-2"
            style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── 14 · Student Work Gallery ── */
  {
    id: "student-work",
    content: (
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Student Outcomes
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">
              Mentorship &amp; Student Work
            </h2>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.2}>
          <StudentWorkGallery
            images={[
              { src: img("StudentWork/evan-sweeney-roybeauty2-2.jpg"), alt: "Evan Sweeney" },
              { src: img("StudentWork/evan-sweeney-roybeauty4.jpg"), alt: "Evan Sweeney" },
              { src: img("StudentWork/evan-sweeney-concept-art.jpg"), alt: "Evan Sweeney" },
              { src: img("StudentWork/evan-sweeney-finalvsconceptart.jpg"), alt: "Evan Sweeney" },
              { src: img("StudentWork/AnimalWorkstation-noahisaacdavis-noahisaacdavis.webp"), alt: "Noah Isaac Davis" },
              { src: img("StudentWork/Workstation-noahisaacdavis-noahisaacdavis.webp"), alt: "Noah Isaac Davis" },
              { src: img("StudentWork/Untitled-1-noahisaacdavis.webp"), alt: "Noah Isaac Davis" },
              { src: img("StudentWork/Untitled-1-noahisaacdavis (1).webp"), alt: "Noah Isaac Davis" },
              { src: img("StudentWork/GDCSlidedImages/trey-grabinger-nomad2.jpg"), alt: "Trey Grabinger" },
              { src: img("StudentWork/GDCSlidedImages/trey-grabinger-nomadmissionaryrendersheet2.jpg"), alt: "Trey Grabinger" },
              { src: img("StudentWork/GDCSlidedImages/trey-grabinger-nomadmissionarytexturerendersheet5.jpg"), alt: "Trey Grabinger" },
              { src: img("StudentWork/GDCSlidedImages/trey-grabinger-ewanrendersheet.jpg"), alt: "Trey Grabinger" },
              { src: img("StudentWork/GDCSlidedImages/trey-grabinger-cargocontainerrendersheet.jpg"), alt: "Trey Grabinger" },
              { src: img("StudentWork/GDCSlidedImages/trey-grabinger-drifter-boring-normal-overtop.jpg"), alt: "Trey Grabinger" },
              { src: img("StudentWork/GDCSlidedImages/cameron-dava-mimc-render-art-station.jpg"), alt: "Cameron Dava" },
              { src: img("StudentWork/GDCSlidedImages/cameron-dava-mimic-pres-board.jpg"), alt: "Cameron Dava" },
              { src: img("StudentWork/GDCSlidedImages/cameron-dava-closed-egg.jpg"), alt: "Cameron Dava" },
              { src: img("StudentWork/GDCSlidedImages/cameron-dava-modular-rock-pres-board.jpg"), alt: "Cameron Dava" },
              { src: img("StudentWork/GDCSlidedImages/cameron-dava-presentation-board-lantern.jpg"), alt: "Cameron Dava" },
              { src: img("StudentWork/GDCSlidedImages/lauren-smith-architecturalasset.jpg"), alt: "Lauren Smith" },
              { src: img("StudentWork/GDCSlidedImages/lauren-smith-morsepressheet1.jpg"), alt: "Lauren Smith" },
              { src: img("StudentWork/GDCSlidedImages/lauren-smith-teslacoilpressheet1.jpg"), alt: "Lauren Smith" },
              { src: img("StudentWork/GDCSlidedImages/lauren-smith-shelfpressheet.jpg"), alt: "Lauren Smith" },
              { src: img("StudentWork/GDCSlidedImages/lauren-smith-highresscreenshot00056.jpg"), alt: "Lauren Smith" },
              { src: img("StudentWork/GDCSlidedImages/christian-turner-color-variants.jpg"), alt: "Christian Turner" },
              { src: img("StudentWork/GDCSlidedImages/christian-turner-angel-soldier-retopo.jpg"), alt: "Christian Turner" },
              { src: img("StudentWork/GDCSlidedImages/christian-turner-image0-3.jpg"), alt: "Christian Turner" },
              { src: img("StudentWork/GDCSlidedImages/austin-lutz-abed-presentation-sheet.jpg"), alt: "Austin Lutz" },
              { src: img("StudentWork/GDCSlidedImages/austin-lutz-rust-cohle-presentation-sheet.jpg"), alt: "Austin Lutz" },
              { src: img("StudentWork/GDCSlidedImages/ava-hermann-final.jpg"), alt: "Ava Hermann" },
              { src: img("StudentWork/GDCSlidedImages/ava-hermann-hermanab-finalproject05.jpg"), alt: "Ava Hermann" },
              { src: img("StudentWork/GDCSlidedImages/ava-hermann-hermanab-modularrock.jpg"), alt: "Ava Hermann" },
              { src: img("StudentWork/GDCSlidedImages/brennan-doyle-final-project-1.jpg"), alt: "Brennan Doyle" },
              { src: img("StudentWork/GDCSlidedImages/brennan-doyle-final-project-2.jpg"), alt: "Brennan Doyle" },
              { src: img("StudentWork/GDCSlidedImages/brennan-doyle-doylebm-modular-rock-poster.jpg"), alt: "Brennan Doyle" },
              { src: img("StudentWork/GDCSlidedImages/andrew-barrett-gazebopresentationsheet.jpg"), alt: "Andrew Barrett" },
              { src: img("StudentWork/GDCSlidedImages/andrew-barrett-rock01pressheet.jpg"), alt: "Andrew Barrett" },
              { src: img("StudentWork/GDCSlidedImages/lauren-mckenzie-beauty1.jpg"), alt: "Lauren McKenzie" },
              { src: img("StudentWork/GDCSlidedImages/lauren-mckenzie-texturevariations.jpg"), alt: "Lauren McKenzie" },
              { src: img("StudentWork/GDCSlidedImages/nelli-ponomareva-final-nelli-rings.jpg"), alt: "Nelli Ponomareva" },
              { src: img("StudentWork/GDCSlidedImages/sierra-bailey-van-kuren-gourd-lamp.jpg"), alt: "Sierra Bailey Van Kuren" },
              { src: img("StudentWork/GDCSlidedImages/sierra-bailey-van-kuren-rock-presentation-2.jpg"), alt: "Sierra Bailey Van Kuren" },
              { src: img("StudentWork/GDCSlidedImages/caulder-bittle-presentation-sheet-1.jpg"), alt: "Caulder Bittle" },
              { src: img("StudentWork/GDCSlidedImages/cassidy-rayfield-gazebo-final-presentation.jpg"), alt: "Cassidy Rayfield" },
              { src: img("StudentWork/GDCSlidedImages/presentationBismuth.jpg"), alt: "Student Work" },
              { src: img("StudentWork/GDCSlidedImages/HANDPRESENTATIONSHEET.jpg"), alt: "Student Work" },
              { src: img("StudentWork/GDCSlidedImages/WBPresentationHand.jpg"), alt: "Student Work" },
              { src: img("StudentWork/GDCSlidedImages/ART215-finalprojectpresentationsheet.jpg"), alt: "Student Work" },
              { src: img("StudentWork/GDCSlidedImages/Modular Rock_Elle Li.jpg"), alt: "Elle Li" },
              { src: img("StudentWork/GDCSlidedImages/ModularRockAssignment(NL).jpg"), alt: "Student Work" },
              { src: img("StudentWork/GDCSlidedImages/ModularRockSubmission.png"), alt: "Student Work" },
              { src: img("StudentWork/GDCSlidedImages/CarouselDesignDoc2.png"), alt: "Student Work" },
              { src: img("StudentWork/GDCSlidedImages/FootDesignDoc.png"), alt: "Student Work" },
            ]}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── 14b · Student Work Video ── */
  {
    id: "student-work-video",
    content: (
      <div className="w-full flex flex-col gap-4">
        <AnimateIn delay={0.1}>
          <YouTubeEmbed videoId="wSDnGw4yCCI" title="Student Work Video" />
        </AnimateIn>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     CUSTOM TOOLS
     ══════════════════════════════════════ */

  /* ── Section: Custom Tools ── */
  {
    id: "section-tools",
    content: (
      <div className="w-full flex flex-col items-center justify-center text-center gap-4">
        <AnimateIn>
          <p className="font-mono text-sm text-text-secondary/50 tracking-[0.3em] uppercase">
            04
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="text-5xl md:text-6xl font-bold">
            Custom <span className="text-accent">Tools</span>
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.25}>
          <div
            className="w-16 h-[2px] bg-accent mt-2"
            style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── AI & Experimental 3D (Infrastructure context) ── */
  {
    id: "current-research",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <img
            src={img("CurrentResearch/podcast_maxres.jpg")}
            alt="Unreal Engine + ChatGPT — Matt Board"
            className="w-full rounded-lg border border-surface-light"
          />
        </AnimateIn>
        <div className="flex flex-col gap-6">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              AI &amp; Experimental 3D
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-4xl font-bold leading-tight">
              OpenAI API in <span className="text-accent">Unreal Engine</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              Integrated the OpenAI API directly into Unreal Engine to explore
              AI-driven gameplay, procedural dialogue, and intelligent NPC
              behavior — bridging large language models with real-time 3D
              environments.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="flex flex-wrap gap-2">
              {["OpenAI API", "Unreal Engine", "AI/ML", "Real-time"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── DGX Spark ── */
  {
    id: "dgx-spark",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <img
            src={img("CurrentResearch/dgx_spark.png")}
            alt="NVIDIA DGX Spark"
            className="w-full rounded-lg border border-surface-light"
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Hardware
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">
              NVIDIA <span className="text-accent">DGX Spark</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              A Grace Blackwell desktop AI supercomputer — the same architecture
              powering data-center AI, shrunk to a compact form factor. About
              the same cost and power consumption as a gaming computer. Enables
              local training, fine-tuning, and inference for research and
              creative workflows without cloud dependency.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="flex flex-wrap gap-2">
              {["Grace Blackwell", "128GB", "CUDA", "Local AI", "NVIDIA"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ══════════════════════════════════════
     CUSTOM TOOLS — PROJECTS
     ══════════════════════════════════════ */

  /* ── Article-Gen ── */
  {
    id: "article-gen",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <StudentWorkGallery
            columns={2}
            images={[
              { src: img("CurrentResearch/article_gen_ui.png"), alt: "Article-Gen — Automatic Mode" },
              { src: img("CurrentResearch/article_gen_custom.png"), alt: "Article-Gen — Custom Prompts" },
            ]}
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              AI Research Tool
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">Article-Gen</h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              A multi-modal AI content generation platform that creates
              professional articles with AI-generated images and publishes
              them directly to Substack.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li>&bull; Auto-generates articles from trending news topics</li>
              <li>&bull; Creates 3 contextual images per article via Flux.1-dev</li>
              <li>&bull; AI image captioning with LLaVA vision model</li>
              <li>&bull; Custom prompt mode for full creative control</li>
              <li>&bull; One-click Substack publishing</li>
              <li>&bull; Fine-tunable writing style via LoRA on Gemma 2 9B</li>
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {["Gemma 2 9B", "Flux.1-dev", "LLaVA", "Streamlit", "NVIDIA GPU"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── MAUDE ── */
  {
    id: "maude",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Local AI System
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">
              <span className="text-accent">MAUDE</span>
            </h2>
            <p className="text-text-secondary text-sm font-mono mt-1">
              Multi-Agent Unified Dispatch Engine
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed">
              A local AI assistant running entirely on the DGX Spark. MAUDE
              coordinates multiple specialized models — Nemotron for reasoning,
              Codestral for code generation, LLaVA for vision, and Gemma for
              writing — with voice interaction, Telegram integration, and a
              client/server architecture over Tailscale.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li>&bull; Multi-model routing &amp; sub-agent dispatch</li>
              <li>&bull; Voice mode with Whisper transcription</li>
              <li>&bull; RAG-powered memory via vector database</li>
              <li>&bull; Mac/PC client connects to Spark over Tailscale</li>
              <li>&bull; Telegram bot for remote access</li>
              <li>&bull; Fully private — all inference on-device</li>
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {["Nemotron", "Codestral", "LLaVA", "Whisper", "Tailscale", "SQLite"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.15}>
          <StudentWorkGallery
            columns={2}
            images={[
              { src: img("CurrentResearch/maude_screenshot.png"), alt: "MAUDE Server TUI" },
              { src: img("CurrentResearch/maude_client_screenshot.png"), alt: "MAUDE Client on Mac" },
            ]}
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── MAUDE Mobile — Hero ── */
  {
    id: "maude-mobile",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-5">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Mobile Companion
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">
              <span className="text-accent">MAUDE</span> Mobile
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed">
              A native Android companion app that connects to MAUDE on the DGX
              Spark over Tailscale. Provides full voice chat, text conversation,
              SSH terminal, file management, and a built-in web browser — all
              routed through a single gateway on port 30000.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <p className="text-text-secondary leading-relaxed">
              The retro 80s Amber CRT theme shown here is one of three
              selectable themes. The app is built with React, Ionic Capacitor,
              and Tailwind CSS — a single TypeScript codebase compiled as a
              native APK.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {["React", "Capacitor", "Tailwind", "WebSocket", "Mistral", "PersonaPlex"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.15}>
          <div className="flex justify-center gap-4">
            {[
              { src: img("CurrentResearch/maude_mobile_home.png"), alt: "MAUDE Mobile — Home Screen" },
              { src: img("CurrentResearch/maude_mobile_voice.png"), alt: "MAUDE Mobile — Voice Chat" },
              { src: img("CurrentResearch/maude_mobile_settings.png"), alt: "MAUDE Mobile — Settings" },
            ].map((image) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="h-[480px] w-auto rounded-lg border border-surface-light shadow-lg"
              />
            ))}
          </div>
        </AnimateIn>
      </div>
    ),
  },

  /* ── MAUDE Mobile — How It Works ── */
  {
    id: "maude-mobile-details",
    content: (
      <div className="w-full flex flex-col gap-8 max-w-4xl mx-auto">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            How It Works
          </p>
          <h2 className="text-3xl font-bold mt-2">
            <span className="text-accent">MAUDE</span> Mobile — Architecture
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimateIn delay={0.1}>
            <div className="bg-surface-light rounded-lg p-5 border border-surface-light h-full">
              <h3 className="text-accent font-mono text-sm font-bold mb-2">Voice Chat</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Full-duplex voice conversation via PersonaPlex. Opus-encoded
                audio streams over WebSocket with scheduled-playback buffering
                for click-free audio on mobile. Supports camera capture during
                calls — LLaVA analyzes the photo and the voice session
                reconnects with image context injected into the prompt.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="bg-surface-light rounded-lg p-5 border border-surface-light h-full">
              <h3 className="text-accent font-mono text-sm font-bold mb-2">Gateway Proxy</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                A single Python HTTP server on port 30000 routes all traffic:
                multi-model LLM requests (Mistral, Codestral, Nemotron, LLaVA),
                WebSocket proxying for terminal and voice, file upload/download,
                image analysis via the <code className="text-accent">/api/analyze-image</code> endpoint,
                and static PWA hosting. SSL with a self-signed cert for secure mobile access.
              </p>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div className="bg-surface-light rounded-lg p-5 border border-surface-light h-full">
              <h3 className="text-accent font-mono text-sm font-bold mb-2">Mobile Features</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Seven modules in one app: AI chat with tool execution,
                voice calls with live waveform visualization, SSH terminal
                (xterm.js over WebSocket PTY), web browser proxied through
                the Spark, Telegram message viewer, shared file manager
                with camera upload, and a settings panel with theme switching
                and model selection.
              </p>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn delay={0.4}>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Capacitor APK",
              "Opus Codec",
              "WebSocket PTY",
              "LLaVA Vision",
              "PersonaPlex Voice",
              "Tailscale VPN",
              "Multi-Model Routing",
              "Camera → LLM",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimateIn>
      </div>
    ),
  },

  /* ── Tessera ── */
  {
    id: "tessera",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <StudentWorkGallery
            columns={2}
            images={[
              { src: img("CurrentResearch/dashboard.png"), alt: "Tessera — Dashboard" },
              { src: img("CurrentResearch/paper-detail.png"), alt: "Tessera — Paper Detail" },
              { src: img("CurrentResearch/collection-synthesis.png"), alt: "Tessera — Literature Synthesis" },
              { src: img("CurrentResearch/graph.png"), alt: "Tessera — Citation Graph" },
              { src: img("CurrentResearch/knowledge.png"), alt: "Tessera — Knowledge Base" },
              { src: img("CurrentResearch/collection-detail.png"), alt: "Tessera — Collection Detail" },
            ]}
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              AI Research Platform
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">Tessera</h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              An AI-powered academic literature review platform that searches
              five major databases, generates structured summaries and
              cross-paper syntheses, and visualizes citation networks.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li>&bull; Federated search across Semantic Scholar, arXiv, OpenAlex, CrossRef &amp; PubMed</li>
              <li>&bull; AI-generated paper summaries &amp; literature synthesis</li>
              <li>&bull; Interactive citation graph with relationship classification</li>
              <li>&bull; Knowledge extraction — findings, methods, gaps &amp; conclusions</li>
              <li>&bull; Export as BibTeX, JSON, or a deployable static website</li>
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "React", "SQLite", "LLM", "Semantic Scholar", "arXiv"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── Input Streamliner — Hero ── */
  {
    id: "input-streamliner",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <StudentWorkGallery
            columns={2}
            images={[
              { src: img("InputStreamliner/model_choice.jpg"), alt: "Input Streamliner — Model Selection" },
              { src: img("InputStreamliner/ia_settings.jpg"), alt: "Input Streamliner — Generated Assets" },
              { src: img("InputStreamliner/generated_output.jpg"), alt: "Input Streamliner — Output" },
            ]}
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              UE5 Editor Plugin
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">
              <span className="text-accent">Input</span> Streamliner
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              An Unreal Engine 5.7 editor plugin that generates complete
              multiplatform input configurations from natural language
              descriptions using a local Ollama LLM. Describe your controls
              conversationally and get a full input system — keyboard, mouse,
              gamepad, and mobile touch — with one click.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {["UE5 C++", "Ollama", "Enhanced Input", "Slate UI", "MIT"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── Input Streamliner — Details ── */
  {
    id: "input-streamliner-details",
    content: (
      <div className="w-full flex flex-col items-center gap-5">
        <AnimateIn>
          <h2 className="text-2xl font-bold text-center">
            Input Streamliner &mdash; <span className="text-accent">How It Works</span>
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl w-full">
          <AnimateIn delay={0.1}>
            <div className="rounded-lg border border-surface-light overflow-hidden">
              <img src={img("InputStreamliner/model_choice.jpg")} alt="Natural language prompt with model picker" className="w-full max-h-[45vh] object-contain" />
            </div>
            <p className="text-text-secondary text-xs mt-1.5 text-center">Describe controls in plain English &amp; pick a local LLM</p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="rounded-lg border border-surface-light overflow-hidden">
              <img src={img("InputStreamliner/ia_settings.jpg")} alt="Generated input action assets" className="w-full max-h-[45vh] object-contain" />
            </div>
            <p className="text-text-secondary text-xs mt-1.5 text-center">Input Actions generated with bindings &amp; settings configured</p>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.3}>
          <ul className="text-text-secondary text-xs leading-relaxed space-y-1 max-w-2xl">
            <li>&bull; Multiplatform — PC, gamepad, Mac, iOS, Android</li>
            <li>&bull; Mobile touch — virtual joysticks, swipe zones, gesture detection</li>
            <li>&bull; Auto-configured dead zones, triggers &amp; axis modifiers</li>
            <li>&bull; Runtime rebinding with JSON persistence &amp; conflict detection</li>
          </ul>
        </AnimateIn>
      </div>
    ),
  },

  /* ── DataTable Streamliner — Hero ── */
  {
    id: "datatable-streamliner",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <StudentWorkGallery
            columns={2}
            images={[
              { src: img("DataTableStreamliner/screen_with_prompt.png"), alt: "DataTable Streamliner — Prompt" },
              { src: img("DataTableStreamliner/data_preview.png"), alt: "DataTable Streamliner — Data Preview" },
              { src: img("DataTableStreamliner/generated_assets.png"), alt: "DataTable Streamliner — Generated Assets" },
              { src: img("DataTableStreamliner/struct_options.png"), alt: "DataTable Streamliner — Struct Options" },
            ]}
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              UE5 Editor Plugin
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">
              <span className="text-accent">DataTable</span> Streamliner
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              An Unreal Engine 5.7 editor plugin that generates fully populated
              DataTable assets from natural language descriptions using a local
              Ollama LLM. Describe your data — &ldquo;12 fantasy weapons with
              name, damage, weight, and rarity&rdquo; — and get a complete
              DataTable with AI-defined or existing struct schemas.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {["UE5 C++", "Ollama", "DataTables", "Slate UI", "MIT"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── DataTable Streamliner — Details ── */
  {
    id: "datatable-streamliner-details",
    content: (
      <div className="w-full flex flex-col items-center gap-8">
        <AnimateIn>
          <h2 className="text-3xl font-bold text-center">
            DataTable Streamliner &mdash; <span className="text-accent">How It Works</span>
          </h2>
        </AnimateIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          <AnimateIn delay={0.1}>
            <div className="rounded-lg border border-surface-light overflow-hidden">
              <img src={img("DataTableStreamliner/data_preview.png")} alt="Data preview table" className="w-full" />
            </div>
            <p className="text-text-secondary text-sm mt-2 text-center">Preview generated rows before committing to an asset</p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="rounded-lg border border-surface-light overflow-hidden">
              <img src={img("DataTableStreamliner/appending_overwriting.png")} alt="Append and overwrite options" className="w-full" />
            </div>
            <p className="text-text-secondary text-sm mt-2 text-center">Append to existing DataTables with conflict resolution</p>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.3}>
          <ul className="text-text-secondary text-sm leading-relaxed space-y-2 max-w-2xl">
            <li>&bull; AI-defined or existing struct — let the LLM create a schema or use any UScriptStruct</li>
            <li>&bull; Data preview — review rows in a table before generating the asset</li>
            <li>&bull; Append mode — add rows to existing tables with overwrite or merge options</li>
            <li>&bull; Runs entirely local via Ollama — no API keys or cloud dependency</li>
          </ul>
        </AnimateIn>
      </div>
    ),
  },

  /* ── Stillion-AI ── */
  {
    id: "stillion-ai",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <StudentWorkGallery
            columns={2}
            images={[
              { src: img("CurrentResearch/stillion_ui.png"), alt: "Stillion-AI — Status" },
              { src: img("CurrentResearch/stillion_caption.png"), alt: "Stillion-AI — Auto-Caption" },
              { src: img("CurrentResearch/stillion_train.png"), alt: "Stillion-AI — Train LoRA" },
              { src: img("CurrentResearch/stillion_generate.png"), alt: "Stillion-AI — Generate" },
            ]}
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              AI Art Pipeline
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">Stillion-AI</h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              A custom LoRA training pipeline for FLUX.1-dev that lets artists
              teach an image generation model their own visual style using as
              few as 20 reference images.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li>&bull; 3-step workflow: Auto-Caption, Train, Generate</li>
              <li>&bull; LLaVA 1.5 7B auto-captioning for training images</li>
              <li>&bull; Trains custom LoRA weights on FLUX.1-dev</li>
              <li>&bull; Trigger-word activated style generation</li>
              <li>&bull; Gradio web interface — runs locally on NVIDIA GPU</li>
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {["FLUX.1-dev", "LoRA", "LLaVA", "Gradio", "NVIDIA GPU"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── Stillion-AI — Generated Samples ── */
  {
    id: "stillion-samples",
    content: (
      <div className="w-full flex flex-col gap-6">
        <AnimateIn>
          <p className="font-mono text-sm text-accent tracking-wider uppercase">
            Stillion-AI &middot; Generated Samples
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
            <img
              src={img("CurrentResearch/stillion_gen_1.jpg")}
              alt="Stillion-AI — Stone face with flowers"
              className="w-full rounded-lg border border-surface-light"
            />
            <img
              src={img("CurrentResearch/stillion_gen_2.jpg")}
              alt="Stillion-AI — Bird on vase with flowers"
              className="w-full rounded-lg border border-surface-light"
            />
          </div>
        </AnimateIn>
        <AnimateIn delay={0.25}>
          <p className="text-text-secondary text-sm text-center max-w-2xl mx-auto">
            Images generated live on the DGX Spark using the trained Stillion LoRA on FLUX.1-dev
          </p>
        </AnimateIn>
      </div>
    ),
  },

  /* ── Machina Prima — Hero ── */
  {
    id: "machina-prima-gallery",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <div className="grid grid-cols-2 gap-2">
            {[
              { src: img("MachinaPrima/generated/02_sculpture_hall.png"), alt: "Sculpture Hall" },
              { src: img("MachinaPrima/generated/04_suspended_installation.png"), alt: "Suspended Installation" },
              { src: img("MachinaPrima/generated/06_projection_room.png"), alt: "Projection Room" },
              { src: img("MachinaPrima/generated/09_centerpiece.png"), alt: "Centerpiece" },
            ].map((image) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="w-full rounded border border-surface-light object-cover aspect-square"
              />
            ))}
          </div>
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              LoRA Art Generation
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">Machina Prima</h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              An exhibit concept series generated using a custom marker-mech LoRA
              trained on 15 hand-drawn mechanical sketches. The model learned the
              marker rendering style and was prompted to envision spaces for a
              futuristic art exhibition — from gallery entrances and sculpture
              halls to immersive projection rooms.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.35}>
            <div className="flex flex-wrap gap-2">
              {["FLUX.1-dev", "LoRA", "Marker Style", "Exhibit Concept"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── Machina Prima — Sketch vs Generated Comparison ── */
  {
    id: "machina-prima-comparison",
    content: (
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Machina Prima
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">Training Data vs Output</h2>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.15}>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs text-text-secondary/50 uppercase tracking-wider text-center mb-2">Training Data</p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { src: img("MachinaPrima/sketches/IMG_3485.jpeg"), alt: "Sketch 1" },
                { src: img("MachinaPrima/sketches/IMG_3494.jpeg"), alt: "Sketch 2" },
                { src: img("MachinaPrima/sketches/IMG_3497.jpeg"), alt: "Sketch 3" },
                { src: img("MachinaPrima/sketches/IMG_3501.jpeg"), alt: "Sketch 4" },
              ].map((image) => (
                <img key={image.alt} src={image.src} alt={image.alt} className="w-full rounded border border-surface-light object-cover aspect-square" />
              ))}
            </div>
          </div>
        </AnimateIn>
        <AnimateIn delay={0.25}>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs text-text-secondary/50 uppercase tracking-wider text-center mb-2">Generated Output</p>
            <div className="grid grid-cols-4 gap-2">
              {[
                { src: img("MachinaPrima/generated/02_sculpture_hall.png"), alt: "Generated 1" },
                { src: img("MachinaPrima/generated/04_suspended_installation.png"), alt: "Generated 2" },
                { src: img("MachinaPrima/generated/06_projection_room.png"), alt: "Generated 3" },
                { src: img("MachinaPrima/generated/09_centerpiece.png"), alt: "Generated 4" },
              ].map((image) => (
                <img key={image.alt} src={image.src} alt={image.alt} className="w-full rounded border border-surface-light object-cover aspect-square" />
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>
    ),
  },

  /* ── Spatia — Intelligent Environment Generator ── */
  {
    id: "spatia",
    content: (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimateIn>
          <StudentWorkGallery
            columns={2}
            images={[
              { src: img("Spatia/spatia_main.png"), alt: "Spatia — Single Image Input" },
              { src: img("Spatia/spatia_multi_image.png"), alt: "Spatia — Multi-Image Input" },
              { src: img("Spatia/spatia_text_prompt.png"), alt: "Spatia — Text Prompt" },
            ]}
          />
        </AnimateIn>
        <div className="flex flex-col gap-5">
          <AnimateIn delay={0.1}>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              3D Environment Tool
            </p>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <h2 className="text-3xl font-bold">Spatia</h2>
          </AnimateIn>
          <AnimateIn delay={0.25}>
            <p className="text-text-secondary leading-relaxed">
              A frontend for the World Labs Marble API that generates
              photorealistic 3D Gaussian splats from images or text prompts,
              with direct Unreal Engine export.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <ul className="text-text-secondary text-sm leading-relaxed space-y-2">
              <li>&bull; Single image, multi-view, or text prompt input</li>
              <li>&bull; Multi-image with per-view azimuth angles (0°–270°)</li>
              <li>&bull; Draft (~30s) and Professional (~5min) quality tiers</li>
              <li>&bull; Exports SPZ/PLY splats, collision mesh GLB, 360° HDRI</li>
              <li>&bull; Built-in 3D splat viewer via React Three Fiber</li>
              <li>&bull; One-click Unreal Engine 5 export guide</li>
            </ul>
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "World Labs API", "Gaussian Splats", "React Three Fiber", "UE5 Export"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </AnimateIn>
        </div>
      </div>
    ),
  },

  /* ── Machina Prima — Gaussian Splat Level ── */
  {
    id: "machina-splats",
    content: (
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Machina Prima + Spatia
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">3D Gaussian Splat Level</h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-text-secondary leading-relaxed max-w-2xl">
              11 rooms generated from LoRA concept art, each converted into a
              pro-quality Gaussian splat via the World Labs API, then
              auto-cleaned to remove floaters, ghost splats, and blob artifacts.
            </p>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.3}>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-2 max-w-4xl mx-auto">
            {[
              { src: img("MachinaPrima/splats/01_sculpture_hall_thumb.webp"), label: "Sculpture Hall" },
              { src: img("MachinaPrima/splats/02_suspended_installation_thumb.webp"), label: "Suspended Installation" },
              { src: img("MachinaPrima/splats/03_projection_room_thumb.webp"), label: "Projection Room" },
              { src: img("MachinaPrima/splats/04_rotunda_centerpiece_thumb.webp"), label: "Rotunda" },
              { src: img("MachinaPrima/splats/05_grand_entrance_thumb.webp"), label: "Grand Entrance" },
              { src: img("MachinaPrima/splats/06_west_corridor_thumb.webp"), label: "West Corridor" },
              { src: img("MachinaPrima/splats/07_east_corridor_thumb.webp"), label: "East Corridor" },
              { src: img("MachinaPrima/splats/08_observation_deck_thumb.webp"), label: "Observation Deck" },
              { src: img("MachinaPrima/splats/09_underground_vault_thumb.webp"), label: "Underground Vault" },
              { src: img("MachinaPrima/splats/10_assembly_hall_thumb.webp"), label: "Assembly Hall" },
              { src: img("MachinaPrima/splats/11_archive_room_thumb.webp"), label: "Archive Room" },
            ].map((room) => (
              <div key={room.label} className="flex flex-col items-center gap-1">
                <img
                  src={room.src}
                  alt={room.label}
                  className="w-full rounded border border-surface-light object-cover aspect-square"
                />
                <span className="text-[10px] text-text-secondary/60 font-mono leading-tight text-center">
                  {room.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <div className="flex flex-wrap gap-2">
            {["22M Gaussians", "11 Rooms", "Auto-Cleanup", "~5% Artifacts Removed", "SparkJS"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-surface-light text-text-secondary text-xs font-mono"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </AnimateIn>
      </div>
    ),
  },

  /* ── Machina Prima — Panoramic Highlights ── */
  {
    id: "machina-splats-panos",
    content: (
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <AnimateIn>
            <p className="font-mono text-sm text-accent tracking-wider uppercase">
              Machina Prima
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl font-bold">360° Panoramic Renders</h2>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              { src: img("MachinaPrima/splats/05_grand_entrance_pano.png"), label: "Grand Entrance" },
              { src: img("MachinaPrima/splats/01_sculpture_hall_pano.png"), label: "Sculpture Hall" },
              { src: img("MachinaPrima/splats/08_observation_deck_pano.png"), label: "Observation Deck" },
              { src: img("MachinaPrima/splats/09_underground_vault_pano.png"), label: "Underground Vault" },
            ].map((room) => (
              <div key={room.label} className="flex flex-col gap-1">
                <img
                  src={room.src}
                  alt={room.label}
                  className="w-full rounded-lg border border-surface-light object-cover"
                  style={{ aspectRatio: "2 / 1" }}
                />
                <span className="font-mono text-xs text-text-secondary/50 uppercase tracking-wider text-center">
                  {room.label}
                </span>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    ),
  },

  /* ── Machina Prima — Projection Room ── */
  {
    id: "machina-splat-projection",
    content: (
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <AnimateIn>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-sm text-accent tracking-wider uppercase">
                Machina Prima
              </p>
              <h2 className="text-2xl font-bold">Projection Room</h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-text-secondary/50 text-xs font-mono">
              Click to interact &middot; WASD move &middot; Mouse drag to look
            </p>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.2}>
          <iframe
            src="/machina-room-viewer.html?room=Projection+Room"
            className="w-full border-0 rounded-lg border border-surface-light"
            style={{ height: "calc(100vh - 180px)" }}
            allow="accelerometer; autoplay"
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── Machina Prima — Observation Deck ── */
  {
    id: "machina-splat-observation",
    content: (
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <AnimateIn>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-sm text-accent tracking-wider uppercase">
                Machina Prima
              </p>
              <h2 className="text-2xl font-bold">Observation Deck</h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-text-secondary/50 text-xs font-mono">
              Click to interact &middot; WASD move &middot; Mouse drag to look
            </p>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.2}>
          <iframe
            src="/machina-room-viewer.html?room=Observation+Deck"
            className="w-full border-0 rounded-lg border border-surface-light"
            style={{ height: "calc(100vh - 180px)" }}
            allow="accelerometer; autoplay"
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── Machina Prima — Rotunda Centerpiece ── */
  {
    id: "machina-splat-rotunda",
    content: (
      <div className="w-full flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <AnimateIn>
            <div className="flex flex-col gap-1">
              <p className="font-mono text-sm text-accent tracking-wider uppercase">
                Machina Prima
              </p>
              <h2 className="text-2xl font-bold">Rotunda Centerpiece</h2>
            </div>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="text-text-secondary/50 text-xs font-mono">
              Click to interact &middot; WASD move &middot; Mouse drag to look
            </p>
          </AnimateIn>
        </div>
        <AnimateIn delay={0.2}>
          <iframe
            src="/machina-room-viewer.html?room=Rotunda+Centerpiece"
            className="w-full border-0 rounded-lg border border-surface-light"
            style={{ height: "calc(100vh - 180px)" }}
            allow="accelerometer; autoplay"
          />
        </AnimateIn>
      </div>
    ),
  },

  /* ── Thank You (mirrors title slide) ── */
  {
    id: "thanks",
    content: (
      <div className="w-full flex flex-col items-center justify-center text-center gap-6">
        <NeuralNetwork />
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
            zIndex: 2,
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6">
          <AnimateIn>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight parallax-strong">
              <GlitchText>Matthew Board, MFA</GlitchText>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.3}>
            <div
              className="w-24 h-[2px] bg-accent mx-auto parallax-medium"
              style={{ boxShadow: "0 0 12px var(--accent-glow)" }}
            />
          </AnimateIn>
          <AnimateIn delay={0.4}>
            <p className="text-xl text-text-secondary max-w-2xl leading-relaxed parallax-medium">
              <RotatingWords
                words={[
                  "Technical Artist",
                  "Indie Developer",
                  "Modeling & Animation",
                  "Researcher",
                  "Educator",
                ]}
                interval={2800}
              />
            </p>
          </AnimateIn>
        </div>
      </div>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════ */

export default function Home() {
  useMouseParallax();

  return (
    <main>
      <Background3D />
      <CustomCursor />
      <Presentation slides={slides} />
    </main>
  );
}
