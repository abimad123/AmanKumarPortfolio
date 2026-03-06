import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, FileText } from "lucide-react";

const certificates = [
  {
    title: "Advitiya Certification",
    image: "/certificate/Advitiya.png",
  },
  {
    title: "Technical Achievement",
    image: "/certificate/Udemy.png",
  },
  {
    title: "Participation Certificate",
    image: "/certificate/IMG_0425.jpeg",
  },
  {
    title: "Excellence Award",
    image: "/certificate/IMG_0771.jpeg",
  },
  {
    title: "Completion Certificate",
    image: "/certificate/IMG_0772.jpeg",
  },
];

const Achievements = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="achievements" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-50% - 1rem)); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              MILESTONES
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              Research & <span className="neon-text">Achievements</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Research & Tech Winner Cards */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-24 md:mb-32">
            {/* Research Card */}
            <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-primary/5 to-transparent hover:from-primary/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative h-full bg-background/80 backdrop-blur-xl p-8 sm:p-10 rounded-[23px] border border-white/5 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <FileText className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                    Feb 2025
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                  Research Publication
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  Authored and presented a research paper on <span className="text-foreground font-medium border-b border-primary/30 pb-0.5">"Fault Detection and Prognosis in Industrial Automation"</span>
                </p>
                <div className="flex flex-col gap-1 mt-auto pt-6 border-t border-border/50">
                  <span className="text-sm text-foreground font-medium">Springer Publisher</span>
                  <span className="text-sm text-muted-foreground">Co-authored with Dr. Ram Deep</span>
                </div>
              </div>
            </div>

            {/* Achievement Card */}
            <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-primary/5 to-transparent hover:from-primary/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="relative h-full bg-background/80 backdrop-blur-xl p-8 sm:p-10 rounded-[23px] border border-white/5 flex flex-col">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                    <Award className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                    Feb 2023
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 text-foreground group-hover:text-primary transition-colors">
                  Tech Marathon Winner
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  Achieved <span className="text-foreground font-medium border-b border-primary/30 pb-0.5 text-primary">First Position</span> at the highly competitive Tech Marathon event, demonstrating rapid problem-solving and technical execution.
                </p>
                <div className="flex flex-col gap-1 mt-auto pt-6 border-t border-border/50">
                  <span className="text-sm text-foreground font-medium">TRR College of Technology</span>
                  <span className="text-sm text-muted-foreground">National Level Competition</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold">
              <span className="neon-text">Certifications</span>
            </h3>
          </div>

          {/* Scrolling Marquee */}
          <div className="max-w-[100vw] overflow-hidden relative pb-12 rounded-3xl group mx-[-1rem] px-[1rem] sm:mx-0 sm:px-0">
            {/* Fade Out Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

            <div className="animate-marquee gap-12 items-center pt-8">
              {[...certificates, ...certificates, ...certificates].map((cert, index) => (
                <div
                  key={index}
                  className="relative group/card w-[500px] shrink-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent p-[1px] transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_20px_40px_-20px_hsl(var(--primary)/0.3)]"
                >
                  <div className="absolute inset-0 rounded-3xl bg-primary/20 opacity-0 group-hover/card:opacity-100 blur-xl transition-opacity duration-500" />

                  <div className="relative h-[360px] bg-background border border-white/5 rounded-[31px] overflow-hidden p-3 flex flex-col justify-center items-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-700 group-hover/card:scale-[1.03]"
                      loading="lazy"
                    />

                    {/* Dark Glass Overlay */}
                    <div className="absolute inset-x-3 bottom-3 translate-y-[calc(100%+0.75rem)] opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 bg-background/90 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center justify-center shadow-2xl">
                      <p className="text-base font-semibold text-foreground text-center tracking-wide">
                        {cert.title}
                      </p>
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

export default Achievements;