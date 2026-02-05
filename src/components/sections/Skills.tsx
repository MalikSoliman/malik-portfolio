// src/components/sections/Skills.tsx

type SkillGroup = {
    title: string;
    description?: string;
    items: string[];
  };
  
  const SKILLS: SkillGroup[] = [
    {
      title: "Programming Languages",
      items: ["Python", "C++", "C", "TypeScript", "JavaScript", "Bash / Shell"],
    },
    {
      title: "Frameworks & UI",
      items: ["Next.js", "React", "Tailwind CSS", "Streamlit", "Node.js"],
    },
    {
      title: "Systems & Integration",
      description:
        "Designing, validating, and troubleshooting real-world systems with multiple interacting subsystems.",
      items: [
        "Hardware–software integration",
        "Subsystem dependencies",
        "System bring-up & validation",
        "Fault detection & isolation",
        "Operational constraints",
      ],
    },
    {
      title: "Robotics & Automation",
      items: [
        "Industrial robotics environments",
        "Collaborative robots (cobots)",
        "FANUC robotics exposure",
        "Sensors & actuators",
        "Motion & control fundamentals",
        "Safety-focused operation",
      ],
    },
    {
      title: "Embedded & Low-Level",
      items: [
        "RISC-V assembly (coursework)",
        "Embedded systems fundamentals",
        "Memory & pointer management",
        "Low-level debugging",
        "Timing & performance awareness",
      ],
    },
    {
      title: "Diagnostics & Reliability",
      description:
        "Building systems that explain what happened, why it happened, and what to check next.",
      items: [
        "Structured logging",
        "Alarm & event systems",
        "State-based modeling",
        "Root-cause analysis",
        "Observability-focused design",
      ],
    },
    {
      title: "Tooling & Environment",
      items: [
        "Git & GitHub",
        "Linux / Unix",
        "CLI tooling",
        "VS Code",
        "Virtual environments",
      ],
    },
    {
      title: "Professional Skills",
      items: [
        "Cross-disciplinary collaboration",
        "Technical documentation",
        "Clear technical communication",
        "Customer-facing technical mindset",
        "Adaptability in hands-on environments",
      ],
    },
  ];
  
  export default function Skills() {
    return (
      <section id="skills" className="py-20">
        <h2 className="text-3xl font-semibold tracking-tight">Skills</h2>
  
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          A blend of software, systems, and hands-on engineering skills developed
          through robotics, facility diagnostics, and embedded coursework.
        </p>
  
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {SKILLS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-black/10 bg-black/5 p-6"
            >
              <h3 className="text-lg font-medium tracking-tight">
                {group.title}
              </h3>
  
              {group.description ? (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {group.description}
                </p>
              ) : null}
  
              <ul className="mt-4 space-y-1 text-sm leading-relaxed opacity-90">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="opacity-60">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  