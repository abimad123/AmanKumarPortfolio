import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "ICE-CUTTER UAV",
    period: "Feb 2026 – Present",
    tech: ["Ardupilot", "Mission Planner", "Bambu Studio"],
    image: "/projects/bigg.jpeg",
    points: [
      "Designed and developed an autonomous drone system for safe de-icing of overhead electrical power lines, improving grid reliability in cold conditions.",
      "Implemented mechanical vibration–based ice removal using insulated actuators, minimizing power consumption and eliminating line shutdown.",
      "Integrated flight control, sensors, and vision-based cable detection for precise hovering, alignment, and controlled de-icing.",
      "Addressed electrical safety, stability, and payload constraints with applied UAV systems and control engineering knowledge.",
    ],
  },
  {
    title: "Next-Gen Drone Systems for Defense & Disaster Management",
    period: "Dec 2025",
    tech: ["Ardupilot", "Mission Planner", "Bambu Studio"],
    image: "/projects/varuna-lock.jpg",
    points: [
      "Designed an environment-authorized UAV system that autonomously permits or blocks payload deployment based on real-time sensor conditions.",
      "Implemented multi-condition safety authorization logic using GPS, altitude, IMU, and system-health data to prevent unsafe payload release.",
      "Engineered a fail-safe physical locking mechanism integrated with onboard control logic for validated-condition-only execution.",
      "Built dual-payload deployment capability for emergency medical delivery and critical field operations with decision logging.",
    ],
  },
  {
    title: "ACER – Armored Combat Engineering Robot",
    period: "Jan 2024",
    tech: ["Embedded Systems", "Mission Planner", "Ardupilot"],
    image: "/projects/gun.jpeg",
    points: [
      "Designed ACER for high-risk engineering operations, integrating robust mechanical design, autonomy, and remote control.",
      "Developed mission-specific modules for obstacle handling, surveillance, and hazardous task execution.",
      "Implemented embedded control systems, sensors, and communication links for real-time navigation and monitoring.",
      "Focused on system reliability, protection, and fail-safe operation for defense engineering applications.",
    ],
  },
];

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl -z-10" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              PORTFOLIO
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              Featured <span className="neon-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          <div className="space-y-24 md:space-y-32 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={project.title} className={`flex flex-col gap-8 md:gap-16 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                  {/* Image Container */}
                  <div className="w-full md:w-1/2 relative group">
                    <div className="absolute inset-[-1px] rounded-2xl bg-gradient-to-b from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-muted/20 aspect-video md:aspect-[4/3] transform transition-transform duration-700 group-hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                          (e.target as HTMLImageElement).parentElement!.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-primary/5 text-primary/60 font-mono text-sm border-2 border-dashed border-primary/20 rounded-2xl p-6 text-center"><span class="block mb-2 text-2xl">📸</span>Add image: <br/>${project.image}</div>`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full md:w-1/2 space-y-6">
                    <p className="text-sm font-mono text-primary flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-primary/50" />
                      {project.period}
                    </p>

                    <h3 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-foreground group-hover:neon-text transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-[0_0_10px_hsl(var(--primary)/0.1)]">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="relative p-6 rounded-2xl bg-background/50 backdrop-blur-md border border-white/5 shadow-xl mt-6">
                      <ul className="space-y-4">
                        {project.points.map((point, i) => (
                          <li key={i} className="text-muted-foreground text-sm md:text-base leading-relaxed flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
