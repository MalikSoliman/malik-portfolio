export default function Navbar() {
    return (
      <header className="sticky top-0 z-50 border-b border-black/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-3">
          <a href="#top" className="text-sm font-semibold">
            Malik Soliman
          </a>
  
          <nav className="flex gap-5 text-sm">
            <a href="#education" className="opacity-80 hover:opacity-100">
              Education
            </a>
            <a href="#experience" className="opacity-80 hover:opacity-100">
              Experience
            </a>
            <a href="#projects" className="opacity-80 hover:opacity-100">
              Projects
            </a>
            <a href="#skills" className="opacity-80 hover:opacity-100">
              Skills
            </a>
            <a href="#contact" className="opacity-80 hover:opacity-100">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
  