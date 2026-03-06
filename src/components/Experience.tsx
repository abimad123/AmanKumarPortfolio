import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

// Define a type for the experience data
interface Experience {
  company: string;
  logo: string; // Path to the logo image
  role: string;
  period: string;
  tech: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    company: "AutomateX",
    logo: "/automateX.jpeg", // Points to public/automateX.jpeg
    role: "Student Intern – PLC Training for Industrial Automation",
    period: "Jun 2025 – Jul 2025",
    tech: "LogixPro, Ladder Logic, TwidoSuite",
    points: [
      "Enhanced knowledge in PLC and Ladder Logic through designing and troubleshooting industrial control systems using LogixPro simulation software.",
      "Created and simulated complete control logic for a PLC-based hydraulic press, accurately modelling the machine's full operational sequence and safety interlocks.",
      "Applied automation principles to design, program, and validate a hydraulic press control system from concept to validation.",
    ],
  },
  {
    company: "DRDO (RCI)",
    logo: "/DRDOlogo.jpeg", // Points to public/DRDOlogo.jpeg
    role: "Technical Intern – Inspection Parameter of Integrated Missile",
    period: "Dec 2023 – May 2024",
    tech: "Research & Development",
    points: [
      "Inspected structural and mechanical parameters of integrated missile systems to ensure dimensional accuracy and mechanical integrity.",
      "Verified avionics, guidance, and control subsystems for signal integrity, functional accuracy, and system reliability.",
      "Assisted in inspection of propulsion and power systems, focusing on safety compliance and performance validation.",
      "Supported system integration testing and documentation to ensure subsystem interoperability and readiness for trials.",
    ],
  },
];

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              CAREER
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              Internship <span className="neon-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Glowing Timeline Line */}
            <div className="absolute left-[39px] md:left-[47px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-24 md:pl-32 group">

                  {/* Timeline Dot / Pulsing Node */}
                  <div className="absolute left-[24px] md:left-[32px] top-8 w-8 h-8 rounded-full bg-background border-4 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-500 z-10 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-primary/20 before:animate-ping before:opacity-0 group-hover:before:opacity-100">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  {/* Experience Card */}
                  <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-primary/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    <div className="relative h-full bg-background/80 backdrop-blur-xl p-8 rounded-[23px] border border-white/5 flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                      {/* Left Side: Logo & Meta */}
                      <div className="shrink-0 flex flex-col items-start gap-4 w-full md:w-48">
                        <div className="w-20 h-20 rounded-2xl bg-white p-2 border border-border/50 shadow-lg group-hover:scale-105 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] transition-all duration-500">
                          <img
                            src={exp.logo}
                            alt={`${exp.company} Logo`}
                            className="w-full h-full object-contain filter drop-shadow-sm"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-muted/20 text-muted-foreground"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>`;
                            }}
                          />
                        </div>

                        <div className="space-y-3 w-full">
                          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {exp.tech.split(', ').map(tech => (
                              <span key={tech} className="text-[10px] font-mono text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Content */}
                      <div className="flex-1 space-y-6 pt-2">
                        <div>
                          <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground group-hover:neon-text transition-colors mb-2">
                            {exp.company}
                          </h3>
                          <h4 className="text-lg md:text-xl text-primary font-medium tracking-tight">
                            {exp.role}
                          </h4>
                        </div>

                        <ul className="space-y-4">
                          {exp.points.map((point, j) => (
                            <li
                              key={j}
                              className="text-muted-foreground text-sm md:text-base leading-relaxed flex gap-3 items-start"
                            >
                              <ChevronRight className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;