// src/components/sections/Contact.tsx
const CONTACT = [
    {
      label: "Email",
      value: "maliksoliman6@gmail.com",
      href: "mailto:maliksoliman6@gmail.com",
    },
    {
      label: "Phone",
      value: "732-272-2441",
      href: "tel:+17322722441",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/malik-soliman",
      href: "https://www.linkedin.com/in/malik-soliman/",
    },
    {
      label: "GitHub",
      value: "github.com/MalikSoliman",
      href: "https://github.com/MalikSoliman",
    },
  ];
  
  export default function Contact() {
    return (
      <section id="contact" className="py-16">
        <h2 className="text-2xl font-semibold">Contact</h2>
  
        <p className="mt-4 max-w-2xl opacity-80">
          I’m actively seeking Applications / Systems / Integration roles. If you’d like to connect,
          feel free to reach out.
        </p>
  
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {CONTACT.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border border-black/10 p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm opacity-70">{c.label}</p>
              <p className="mt-1 font-medium">{c.value} →</p>
            </a>
          ))}
        </div>
  
        <div className="mt-10">
          <a
            href="/Malik-Soliman--Resume.pdf"
            className="inline-flex items-center rounded-full border border-black/15 px-5 py-2 text-sm font-medium opacity-90 hover:opacity-100"
          >
            Download Resume →
          </a>
        </div>
      </section>
    );
  }
  