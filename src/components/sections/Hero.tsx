// src/components/sections/Hero.tsx

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: TEXT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Malik Soliman
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-6">
            Computer Engineering · Systems Integration · Diagnostics
          </p>

          <p className="text-gray-300 max-w-xl leading-relaxed mb-8">
            Computer Engineering graduate with hands-on experience in
            hardware–software integration, system testing, fault simulation,
            and diagnostics. Strong foundation in embedded systems, structured
            logging, scripting, and verification workflows, with a focus on
            building reliable, testable, and scalable engineering systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/Malik-Soliman--Resume.pdf"
              download
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-white/30 hover:border-white/60 text-white font-medium transition"
            >
              View Projects
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mt-8">
            <span>Middletown Township, NJ</span>
            <a
              href="mailto:maliksoliman6@gmail.com"
              className="hover:text-gray-200 transition"
            >
              maliksoliman6@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/malik-soliman/"
              target="_blank"
              className="hover:text-gray-200 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT: PROFILE IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
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
