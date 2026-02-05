// src/components/sections/Experience.tsx

type ExperienceItem = {
    title: string;
    org: string;
    location: string;
    dates: string;
    bullets: string[];
  };
  
  const EXPERIENCE: ExperienceItem[] = [
    {
      title: "Robotics & Automation Intern",
      org: "May Ship Repair Contracting Corp.",
      location: "Newark, NJ",
      dates: "Summer 2024",
      bullets: [
        "Worked hands-on with industrial robotics and automated systems in a live ship repair and manufacturing environment.",
        "Assisted in the integration, setup, and troubleshooting of robotic equipment spanning electrical, mechanical, and software components.",
        "Supported system bring-up, diagnostics, and fault isolation to reduce downtime during deployments and maintenance operations.",
        "Collaborated with engineers and technicians to ensure robotic systems operated safely, reliably, and within real-world constraints.",
        "Documented system behavior, troubleshooting procedures, and operational workflows to support repeatable deployments.",
      ],
    },
    {
      title: "Finance & Analytics Intern",
      org: "Finance Internship",
      location: "New Jersey",
      dates: "Summer 2023",
      bullets: [
        "Analyzed financial and operational data to support decision-making and performance tracking.",
        "Built and maintained structured spreadsheets and analytical models to identify trends, risks, and inefficiencies.",
        "Worked with large data sets, emphasizing accuracy, validation, and clear presentation of results.",
        "Translated complex numerical data into clear summaries for non-technical stakeholders.",
        "Developed a disciplined, detail-oriented approach to problem solving under real business constraints.",
      ],
    },
  ];
  
  export default function Experience() {
    return (
      <section id="experience" className="py-16">
        <h2 className="text-2xl font-semibold">Experience</h2>
  
        <div className="mt-6 space-y-10">
          {EXPERIENCE.map((item) => (
            <div key={`${item.title}-${item.org}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">
                  {item.title} ·{" "}
                  <span className="opacity-90">{item.org}</span>{" "}
                  <span className="opacity-70">· {item.location}</span>
                </p>
                <p className="text-sm opacity-70">{item.dates}</p>
              </div>
  
              <ul className="mt-4 list-disc space-y-2 pl-5 opacity-85">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  