import Image from "next/image";

function Pill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {label}
    </span>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-semibold mb-8">Education</h2>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
          {/* LEFT: content */}
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-xl font-medium">
                Rutgers University – New Brunswick
              </h3>
              <span className="text-sm text-white/60">School of Engineering</span>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80">
              <span className="font-medium text-white">
                B.S. in Computer Engineering
              </span>
              <span className="text-white/40">•</span>
              <span>Class of 2025</span>

              {/* OPTIONAL: uncomment if you want */}
              {/* <span className="text-white/40">•</span>
              <span>GPA: 3.xx / 4.0</span> */}
            </div>

            {/* High-impact one-liner */}
            <p className="mt-4 text-sm text-white/75 leading-relaxed">
              Focused on hardware–software integration, embedded systems, and
              diagnostics—building real systems that connect sensors, control
              logic, and data to drive reliable outcomes.
            </p>

            {/* Focus areas (matches your project tags style) */}
            <div className="mt-4 flex flex-wrap gap-2">
              <Pill label="Embedded Systems" />
              <Pill label="Controls & Diagnostics" />
              <Pill label="Hardware–Software Integration" />
              <Pill label="Systems Simulation" />
              <Pill label="Data & Instrumentation" />
            </div>

            {/* Coursework (clean, recruiter-friendly) */}
            <div className="mt-5">
              <p className="text-sm font-medium text-white">Relevant coursework</p>
              <p className="mt-1 text-sm text-white/75 leading-relaxed">
                Embedded Systems • Digital Logic & Computer Architecture •
                Microprocessors • Signals & Systems • Control Systems • Data
                Structures & Algorithms
              </p>
            </div>

            {/* Capstone callout (adds “prestige” fast) */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-medium text-white">
                Senior Design Capstone: WhiskerBot
              </p>
              <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-white/75">
                <li>
                  Built an end-to-end robotics system integrating sensing,
                  control, and real-world testing.
                </li>
                <li>
                  Emphasized reliability, debugging, and validation—mirroring
                  real systems integration work.
                </li>
              </ul>

              {/* Optional: link to your projects section */}
              <a
                href="#projects"
                className="mt-3 inline-flex text-sm text-white/80 hover:text-white"
              >
                View WhiskerBot in Projects →
              </a>
            </div>
          </div>

          {/* RIGHT: Rutgers image */}
          <div className="flex justify-end">
            <Image
              src="/education/rutgerspic.png"
              alt="Rutgers School of Engineering"
              width={260}
              height={80}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
