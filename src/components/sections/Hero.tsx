// src/components/sections/Hero.tsx
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 pt-28 pb-16">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]">
            Malik Soliman
          </h1>

          <p className="mt-3 text-lg text-zinc-200/90">
            Computer Engineering · Systems Integration · Diagnostics
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-zinc-200/80">
            Computer Engineering graduate with hands-on experience in hardware–software integration, system testing, fault
            simulation, and diagnostics. Strong foundation in embedded systems, structured logging, scripting, and
            verification workflows, with a focus on building reliable, testable, and scalable engineering systems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Download Resume (FIXED PATH) */}
            <a
              href="/files/Malik-Soliman-Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500"
            >
              Download Resume
            </a>

            {/* View Projects */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Projects
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-200/70">
            <span>Middletown Township, NJ</span>
            <span>maliksoliman6@gmail.com</span>
            <a className="underline decoration-white/30 hover:decoration-white" href="https://linkedin.com/in/malik-soliman" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center md:justify-end">
          <div className="relative h-[230px] w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src="/profile.jpeg"
              alt="Malik Soliman"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
