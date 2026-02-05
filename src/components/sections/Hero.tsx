export default function Hero() {
    return (
      <section id="home" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto] items-center">
            
            {/* LEFT: TEXT */}
            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Malik Soliman
              </h1>
  
              <p className="mt-3 text-lg text-slate-600">
                Computer Engineering · Systems Integration · Diagnostics
              </p>
  
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
                Computer Engineering graduate with hands-on experience in
                hardware–software integration, system testing, fault simulation,
                and diagnostics. Strong foundation in embedded systems,
                structured logging, and verification workflows, with a focus
                on building reliable, testable, and scalable engineering systems.
              </p>
  
              {/* ACTION BUTTONS */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/files/Malik-Soliman-Resume.pdf"
                  download
                  className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Download Resume
                </a>
  
                <a
                  href="#projects"
                  className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  View Projects
                </a>
              </div>
  
              {/* CONTACT */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                <span>Middletown Township, NJ</span>
                <a href="mailto:maliksoliman6@gmail.com">
                  maliksoliman6@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/malik-soliman/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
  
            {/* RIGHT: PROFILE IMAGE */}
            <div className="flex justify-center md:justify-end">
              <img
                src="/profile.jpeg"
                alt="Malik Soliman"
                className="h-[260px] w-[260px] rounded-2xl object-cover border border-slate-300"
              />
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  