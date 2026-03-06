import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { User, Target, Cpu } from "lucide-react";

const About = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Story */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  ABOUT ME
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
                  Engineering <br />
                  <span className="neon-text">Autonomy</span> <br />
                  for the Real World
                </h2>
              </div>

              <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                As a Robotics and Automation practitioner, my journey is driven by a profound fascination with how software breathes life into hardware.
                From inspecting critical missile systems at <span className="text-foreground font-semibold">DRDO RCI</span> to architecting custom flight controllers,
                I thrive at the intersection of mechanical design, electronics, and intelligent algorithms.
              </p>
            </div>

            {/* Right Side: Glowing Stacked Cards */}
            <div className="grid gap-6">
              {[
                {
                  icon: User,
                  title: "Who I Am",
                  desc: "B.Tech student in Robotics and Automation Engineering at Lovely Professional University, with a passion for pushing the boundaries of defense and industrial robotics.",
                  delay: "0"
                },
                {
                  icon: Cpu,
                  title: "What I Do",
                  desc: "I design and develop UAV systems, embedded control platforms, and autonomous robots — from advanced flight controllers and PLC logic to sensor integration.",
                  delay: "150"
                },
                {
                  icon: Target,
                  title: "My Vision",
                  desc: "Building autonomous systems for defense, industrial automation, and critical infrastructure — bridging embedded engineering with intelligent robotics for tangible impact.",
                  delay: "300"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-primary/20 via-primary/5 to-transparent hover:from-primary/50 transition-colors duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
                  style={{ transitionDelay: `${item.delay}ms` }}
                >
                  <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  <div className="relative h-full bg-background/60 backdrop-blur-xl p-6 rounded-[15px] flex flex-col sm:flex-row gap-6 items-start sm:items-center border border-white/5">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
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

export default About;
