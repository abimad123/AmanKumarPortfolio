import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react";

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech Robotics and Automation Engineering",
    period: "Aug 2024 – Present",
    grade: "CGPA: 7.51",
  },
  {
    institution: "TRR College of Technology",
    location: "Hyderabad, Telangana",
    degree: "Diploma in Mechanical Engineering",
    period: "Mar 2021 – May 2022",
    grade: "CGPA: 7.02",
  },
  {
    institution: "Bhashyam Blooms The School",
    location: "Hyderabad, Telangana",
    degree: "Matriculation",
    period: "Mar 2011 – May 2021",
    grade: "Percentage: 81.5%",
  },
];

const Education = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl -z-10" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              ACADEMICS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              <span className="neon-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Glowing Timeline Line */}
            <div className="absolute left-[39px] md:left-[47px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

            <div className="space-y-12">
              {educationData.map((edu, i) => (
                <div key={i} className="relative pl-24 md:pl-32 group">

                  {/* Timeline Dot / Pulsing Node */}
                  <div className="absolute left-[24px] md:left-[32px] top-8 w-8 h-8 rounded-full bg-background border-4 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-500 z-10 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-primary/20 before:animate-ping before:opacity-0 group-hover:before:opacity-100">
                    <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-500" />
                  </div>

                  {/* Education Card */}
                  <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-primary/30 transition-colors duration-500">
                    <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    <div className="relative h-full bg-background/80 backdrop-blur-xl p-8 rounded-[23px] border border-white/5 flex flex-col md:flex-row gap-6 md:gap-8 items-start">

                      {/* Left Side: Icon & Meta */}
                      <div className="shrink-0 flex flex-col items-start gap-4 w-full md:w-48">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-inner">
                          <GraduationCap className="w-8 h-8" />
                        </div>

                        <div className="space-y-3 w-full">
                          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                            <Calendar className="w-3 h-3 text-primary/70" />
                            {edu.period}
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Content */}
                      <div className="flex-1 space-y-4 pt-1">
                        <div>
                          <h3 className="font-heading font-black text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors mb-2">
                            {edu.institution}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                            <MapPin className="w-4 h-4 text-primary/70" />
                            {edu.location}
                          </div>
                          <h4 className="text-lg md:text-xl text-foreground font-medium tracking-tight mb-4">
                            {edu.degree}
                          </h4>
                        </div>

                        <div className="inline-flex items-center gap-2 text-sm font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                          <Award className="w-4 h-4" />
                          {edu.grade}
                        </div>
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

export default Education;
