"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type MediaItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;

  thumbnail?: { src: string; alt: string };
  media?: MediaItem[];
};

const PROJECTS: Project[] = [
  {
    title: "Facility Systems Integration & Diagnostics",
    description:
      "Interactive diagnostics console that simulates cascading facility failures across power, HVAC, control, and safety systems. Models fault propagation, summarizes incident metrics/timelines, streams log interpretation, and generates a structured diagnostics report.",
    tech: [
      "Python",
      "Streamlit",
      "YAML",
      "Systems Diagnostics",
      "Fault Simulation",
      "Structured Logging",
      "Report Generation",
    ],
    href: "https://github.com/MalikSoliman/facility-systems-integration-diagnostics",
    thumbnail: {
      src: "/projects/facility/01-overview.png",
      alt: "Facility Diagnostics Console overview",
    },
    media: [
      { type: "image", src: "/projects/facility/01-overview.png", alt: "System overview and scenario selection" },
      { type: "image", src: "/projects/facility/02-metrics.png", alt: "Incident metrics and timeline" },
      { type: "image", src: "/projects/facility/03-logs.png", alt: "System interpretation and live log viewer" },
      { type: "image", src: "/projects/facility/04-report.png", alt: "Generated diagnostics report" },
    ],
  },
  {
    title: "Smart Building Alarm Simulator",
    description:
      "Event-driven smart building alarm simulator modeling sensor readings, alarm thresholds, and control-panel failure conditions. Produces structured logs and diagnostics to validate system behavior in safety-critical scenarios.",
    tech: ["Python", "YAML", "Simulation", "Alarm Systems", "Diagnostics", "Logging"],
    href: "https://github.com/MalikSoliman/smart-building-alarm-simulator",
    thumbnail: {
        src: "/projects/alarm/01-smart-alarm.png",
        alt: "Smart Building Alarm Simulator terminal output and diagnostics",
      },
      media: [
        {
          type: "image",
          src: "/projects/alarm/01-smart-alarm.png",
          alt: "Simulator execution showing alarms and diagnostics output",
        },
      ],
      
  },
  {
    title: "WhiskerBot Robotics Capstone",
    description:
      "Senior robotics capstone focused on end-to-end hardware–software integration. Built and validated robotic behaviors with sensing, control logic, and real-world testing constraints.",
    tech: ["Robotics", "Sensors", "Controls", "Hardware–Software Integration", "System Validation"],
    href: "https://github.com/MalikSoliman",
    thumbnail: {
      src: "/projects/whiskerbot/01-overview.jpeg",
      alt: "WhiskerBot overview",
    },
    media: [
      { type: "image", src: "/projects/whiskerbot/01-overview.jpeg", alt: "WhiskerBot overview" },
      { type: "image", src: "/projects/whiskerbot/02-build.jpeg", alt: "WhiskerBot hardware/build details" },
      { type: "video", src: "/projects/whiskerbot/demo.mov", alt: "WhiskerBot demo video" },
    ],
  },
  {
    title: "CompariStock (Market Dashboard)",
    description:
      "Full-featured market dashboard for side-by-side stock analysis using live market data. Includes benchmark + peer comparisons, risk metrics (volatility, drawdown), correlation heatmaps, portfolio modeling, and downloadable OHLCV datasets.",
    tech: [
      "Python",
      "Streamlit",
      "Financial Data Analysis",
      "Time Series",
      "Data Visualization",
      "APIs (Polygon)",
      "Risk Metrics",
      "Correlation Analysis",
      "Portfolio Analytics",
    ],
    href: "https://github.com/MalikSoliman/Market-Dashboard",
    thumbnail: {
      src: "/projects/comparistock/comparistock1.png",
      alt: "Market Dashboard overview",
    },
    media: [
      { type: "image", src: "/projects/comparistock/comparistock1.png", alt: "Dashboard intro and controls" },
      { type: "image", src: "/projects/comparistock/comparistock2.png", alt: "Workspace + watchlist snapshot" },
      { type: "image", src: "/projects/comparistock/comparistock3.png", alt: "Overview tab: key metrics and price chart" },
      { type: "image", src: "/projects/comparistock/comparistock4.png", alt: "Performance comparison chart" },
      { type: "image", src: "/projects/comparistock/comparistock5.png", alt: "Compare tab: metrics table + correlation heatmap" },
      { type: "image", src: "/projects/comparistock/comparistock6.png", alt: "Correlation heatmap close-up" },
      { type: "image", src: "/projects/comparistock/comparistock7.png", alt: "Portfolio tab: weights, sharpe, volatility, return" },
      { type: "image", src: "/projects/comparistock/comparistock8.png", alt: "Portfolio performance chart" },
      { type: "image", src: "/projects/comparistock/comparistock9.png", alt: "Data tab: OHLCV table + CSV download" },
    ],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-black/15 px-3 py-1 text-xs opacity-85">
      {label}
    </span>
  );
}

type LightboxState =
  | { open: false }
  | { open: true; title: string; items: MediaItem[]; index: number };

export default function Projects() {
  const [lightbox, setLightbox] = useState<LightboxState>({ open: false });

  const current = useMemo(() => {
    if (!lightbox.open) return null;
    return lightbox.items[lightbox.index];
  }, [lightbox]);

  function openGallery(project: Project, index = 0) {
    if (!project.media?.length) return;
    setLightbox({
      open: true,
      title: project.title,
      items: project.media,
      index: Math.max(0, Math.min(index, project.media.length - 1)),
    });
  }

  function closeGallery() {
    setLightbox({ open: false });
  }

  function next() {
    if (!lightbox.open) return;
    setLightbox((p) =>
      p.open ? { ...p, index: (p.index + 1) % p.items.length } : p
    );
  }

  function prev() {
    if (!lightbox.open) return;
    setLightbox((p) =>
      p.open ? { ...p, index: (p.index - 1 + p.items.length) % p.items.length } : p
    );
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!lightbox.open) return;
      if (e.key === "Escape") closeGallery();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox.open]);

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-semibold">Projects</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-black/10 p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Tag key={`${project.title}-${t}`} label={t} />
                  ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium opacity-80 hover:opacity-100"
                    >
                      View Repo →
                    </a>
                  ) : null}

                  {project.media?.length ? (
                    <button
                      type="button"
                      onClick={() => openGallery(project, 0)}
                      className="font-medium opacity-80 hover:opacity-100"
                    >
                      View Media →
                    </button>
                  ) : null}
                </div>
              </div>

              {project.thumbnail ? (
                <button
                  type="button"
                  onClick={() => openGallery(project, 0)}
                  className="hidden shrink-0 sm:block"
                  title="Open media bundle"
                >
                  <div className="h-24 w-40 overflow-hidden rounded-xl border border-black/10">
                    <Image
                      src={project.thumbnail.src}
                      alt={project.thumbnail.alt}
                      width={640}
                      height={360}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </button>
              ) : null}
            </div>

            {project.thumbnail ? (
              <button
                type="button"
                onClick={() => openGallery(project, 0)}
                className="mt-4 block w-full sm:hidden"
                title="Open media bundle"
              >
                <div className="h-40 w-full overflow-hidden rounded-xl border border-black/10">
                  <Image
                    src={project.thumbnail.src}
                    alt={project.thumbnail.alt}
                    width={1200}
                    height={675}
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>
            ) : null}
          </div>
        ))}
      </div>

      {lightbox.open && current ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-5xl rounded-2xl bg-background shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-black/10 px-4 py-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium opacity-90">
                  {lightbox.title}
                </p>
                <p className="text-xs opacity-70">
                  Item {lightbox.index + 1} of {lightbox.items.length}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prev}
                  className="rounded-full border border-black/15 px-3 py-1 text-sm opacity-90 hover:opacity-100"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="rounded-full border border-black/15 px-3 py-1 text-sm opacity-90 hover:opacity-100"
                >
                  Next →
                </button>
                <button
                  type="button"
                  onClick={closeGallery}
                  className="rounded-full border border-black/15 px-3 py-1 text-sm opacity-90 hover:opacity-100"
                >
                  Close ✕
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="flex max-h-[72vh] w-full items-center justify-center overflow-hidden rounded-xl border border-black/10 bg-black/5">
                {current.type === "image" ? (
                  <Image
                    src={current.src}
                    alt={current.alt}
                    width={1600}
                    height={900}
                    className="max-h-[72vh] w-auto max-w-full object-contain"
                  />
                ) : (
                  <video
                    controls
                    className="max-h-[72vh] w-auto max-w-full"
                    preload="metadata"
                  >
                    <source src={current.src} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <p className="mt-2 text-xs opacity-70">{current.alt}</p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
