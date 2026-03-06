import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Super simple active section tracking based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      } else if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center ${scrolled ? "top-4 px-4" : "top-0 px-0"
          }`}
      >
        <div
          className={`relative flex items-center justify-between transition-all duration-500
            ${scrolled
              ? "bg-background/80 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] min-w-[300px] w-full max-w-5xl"
              : "w-full px-6 py-6 bg-transparent"
            }
          `}
        >
          {scrolled && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-50 pointer-events-none" />
          )}

          <a
            href="#"
            className="text-xl font-heading font-black tracking-widest relative group z-10"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection("");
            }}
          >
            <span className="text-foreground group-hover:neon-text transition-colors duration-300">A</span>
            <span className="text-primary group-hover:neon-text transition-colors duration-300">K</span>
            <span className="text-foreground group-hover:neon-text transition-colors duration-300">D</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 z-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group overflow-hidden
                    ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                  `}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Hover background */}
                  <div className="absolute inset-0 rounded-full bg-white/5 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

                  {/* Active indicator indicator line */}
                  {isActive && (
                    <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Context Action (Desktop) / Mobile Toggle */}
          <div className="flex items-center gap-4 z-10">
            <a
              href="#contact"
              className="hidden md:flex items-center justify-center px-5 py-2 text-xs font-bold tracking-wider text-primary-foreground bg-primary/90 hover:bg-primary rounded-full transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:scale-105"
            >
              HIRE ME
            </a>

            <button
              className="md:hidden relative p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <Menu size={24} className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
                <X size={24} className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center
          ${mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      >
        <div className="flex flex-col items-center space-y-6 w-full px-8">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-2xl font-heading font-bold transition-all duration-300
                  ${isActive ? "text-primary neon-text scale-110" : "text-muted-foreground hover:text-foreground hover:scale-105"}
                `}
                style={{
                  transitionDelay: mobileOpen ? `${i * 50}ms` : '0ms',
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: mobileOpen ? 1 : 0
                }}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-8 px-8 py-4 w-full max-w-[200px] text-center text-sm font-bold tracking-widest text-primary-foreground bg-primary rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : '0ms',
              transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileOpen ? 1 : 0,
              transition: 'all 0.5s ease-out'
            }}
          >
            HIRE ME
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
