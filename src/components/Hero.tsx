import { useTypingEffect } from "@/hooks/useTypingEffect";
import { ArrowDown, Download, Mail, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import DroneSwarmCanvas from "@/components/ui/DroneSwarmCanvas";

const typingWords = [
  "Autonomous Drones & UAVs",
  "Advanced Embedded Systems",
  "Intelligent Robotic Systems",
  "Industrial Automation Solutions",
  "Precision Control Software",
];

const Hero = () => {
  const typedText = useTypingEffect(typingWords, 80, 40, 1500);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Drone Animation Layer */}
      <DroneSwarmCanvas />

      {/* Dynamic Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-[pulse_10s_ease-in-out_infinite_reverse]" />
      <div className="absolute inset-0 circuit-bg opacity-30" />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-12">

          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl mx-auto lg:mx-0">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono tracking-wider mb-8 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.2s_forwards] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AVAILABLE FOR WORK
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-black mb-4 leading-tight opacity-0 animate-[fade-in-up_0.8s_ease-out_0.4s_forwards]">
              <span className="text-foreground">Aman </span>
              <span className="relative inline-block">
                <span className="neon-text relative z-10 whitespace-nowrap">Kumar Dhar</span>
                <span className="absolute -bottom-2 left-0 w-full h-[6px] bg-primary/60 blur-[4px] -z-10 rounded-full"></span>
              </span>
            </h1>

            {/* Typing Effect */}
            <div className="h-8 md:h-12 mb-8 md:mb-12 opacity-0 animate-[fade-in-up_0.8s_ease-out_0.6s_forwards]">
              <span className="text-xl md:text-3xl text-muted-foreground font-light tracking-wide">
                I build <span className="font-mono font-medium text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">{typedText}</span><span className="typing-cursor ml-1 animate-pulse">&nbsp;</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto opacity-0 animate-[fade-in-up_0.8s_ease-out_0.8s_forwards]">
              <a
                href="#projects"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-105"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <a
                  href="/Aman_Kumar_Dhar_CV.docx"
                  download
                  className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-primary/30 text-primary font-medium hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
                >
                  <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                  Resume
                </a>
                <a
                  href="#contact"
                  title="Contact Me"
                  className="group inline-flex items-center justify-center p-4 rounded-xl bg-muted/50 border border-white/5 hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300 backdrop-blur-sm"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Floating Profile Photo */}
          <div className="flex-1 w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[500px] relative opacity-0 animate-[fade-in_1.2s_ease-out_0.5s_forwards]">
            <div className="relative animate-[float_6s_ease-in-out_infinite]">

              {/* Outer decorative ring */}
              <div className="absolute inset-[-10%] rounded-full border border-primary/20 blur-[2px] animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[-20%] rounded-full border border-primary/10 blur-[4px] animate-[spin_30s_linear_infinite_reverse]" />

              {/* Main photo container */}
              <div className="relative w-full aspect-square mx-auto rounded-full p-2 bg-gradient-to-br from-primary/50 via-background to-primary/20 shadow-[0_0_80px_hsl(var(--primary)/0.2)] group hover:shadow-[0_0_120px_hsl(var(--primary)/0.4)] transition-all duration-700 pointer-events-auto">
                <div className="w-full h-full rounded-full overflow-hidden border-[6px] border-background relative z-10">

                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

                  <img
                    src="/Profile/ME.jpeg"
                    alt="Aman Kumar Dhar"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-zinc-900 text-primary font-heading font-black text-6xl md:text-8xl">AKD</div>';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>

      {/* Custom Keyframes embedded to ensure they run */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
