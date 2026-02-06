// src/components/sections/Contact.tsx
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          Contact
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/75">
          I’m actively seeking Applications / Systems / Integration roles. If you’d like to connect,
          feel free to reach out.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {/* Left column */}
          <div className="space-y-8">
            <div>
              <div className="text-sm font-semibold text-white/70">Email</div>
              <a
                className="mt-2 inline-flex items-center gap-2 text-white/90 hover:text-white transition"
                href="mailto:maliksoliman6@gmail.com"
              >
                maliksoliman6@gmail.com <span aria-hidden>→</span>
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/70">LinkedIn</div>
              <a
                className="mt-2 inline-flex items-center gap-2 text-white/90 hover:text-white transition"
                href="https://www.linkedin.com/in/malik-soliman"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/malik-soliman <span aria-hidden>→</span>
              </a>
            </div>

            {/* FIXED RESUME LINK */}
            <div>
              <a
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition"
                href="/files/Malik-Soliman-Resume.pdf"
                download
              >
                Download Resume <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-8">
            <div>
              <div className="text-sm font-semibold text-white/70">Phone</div>
              <a
                className="mt-2 inline-flex items-center gap-2 text-white/90 hover:text-white transition"
                href="tel:+17322722441"
              >
                732-272-2441 <span aria-hidden>→</span>
              </a>
            </div>

            <div>
              <div className="text-sm font-semibold text-white/70">GitHub</div>
              <a
                className="mt-2 inline-flex items-center gap-2 text-white/90 hover:text-white transition"
                href="https://github.com/MalikSoliman"
                target="_blank"
                rel="noreferrer"
              >
                github.com/MalikSoliman <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* optional subtle divider */}
        <div className="mt-16 h-px w-full bg-white/10" />
      </div>
    </section>
  );
}
