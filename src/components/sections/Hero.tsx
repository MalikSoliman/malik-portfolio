import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] items-center">
          
          {/* LEFT: Main content */}
          <div>
            <h1 className="text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-5xl">
              Malik Soliman
            </h1>

            <p className="mt-3 text-lg text-[var(--muted)]">
              Computer Engineering · Systems Integration · Diagnostics
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--muted-2)]">
              Computer Engineering graduate with hands-on experience in
              hardware–software integration, system testing, troubleshooting,
              and technical documentation. Strong foundation in embedded systems,
              diagnostics, scripting, and verification workflows, with a focus
              on building reliable, testable, and scalable engineering systems.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/files/Malik-Soliman-Resume.pdf"
                download
                className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--card)]"
              >
                View Projects
              </a>
            </div>

            {/* Contact row */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--muted)]">
              <span>Middletown Township, NJ</span>
              <span>•</span>
              <a
                href="mailto:maliksoliman6@gmail.com"
                className="hover:text-[var(--primary)]"
              >
                maliksoliman6@gmail.com
              </a>
              <span>•</span>
              <a
                href="tel:17322722441"
                className="hover:text-[var(--primary)]"
              >
                (732) 272-2441
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/malik-soliman/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--primary)]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT: Profile image */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
              <Image
                src="/profile/profile.jpg"
                alt="Malik Soliman"
                width={260}
                height={320}
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
