import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { MessageCircle, Lightbulb, Users, Shuffle, Presentation, Clock, Hexagon } from "lucide-react";

// Assuming these paths still work based on your import structure
import cppLogo from "@/assets/logos/cpp.svg";
import pythonLogo from "@/assets/logos/python.svg";
import embeddedCLogo from "@/assets/logos/embedded-c.svg";
import ros2Logo from "@/assets/logos/ros2.svg";
import arduinoLogo from "@/assets/logos/arduino.svg";
import raspberrypiLogo from "@/assets/logos/raspberrypi.svg";
import esp32Logo from "@/assets/logos/esp32.png";
import ardupilotLogo from "@/assets/logos/ardupilot.png";
import missionplannerLogo from "@/assets/logos/missionplanner.png";
import solidworksLogo from "@/assets/logos/solidworks.png";
import fusion360Logo from "@/assets/logos/fusion360.png";
import autocadLogo from "@/assets/logos/autocad.png";
import matlabLogo from "@/assets/logos/matlab.svg";
import bambustudioLogo from "@/assets/logos/bambustudio.png";
import wokwiLogo from "@/assets/logos/wokwi.png";
import tensorflowLogo from "@/assets/logos/tensorflow.svg";

interface SkillCategory {
  title: string;
  icon?: React.ReactNode;
  skills: { name: string; level: number; logo?: string; icon?: React.ReactNode }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Hexagon size={20} className="text-primary" />,
    skills: [
      { name: "C++", level: 85, logo: cppLogo },
      { name: "Python", level: 80, logo: pythonLogo },
      { name: "Embedded C", level: 82, logo: embeddedCLogo },
    ],
  },
  {
    title: "Robotics & Embedded",
    icon: <Hexagon size={20} className="text-primary" />,
    skills: [
      { name: "ROS2", level: 78, logo: ros2Logo },
      { name: "Arduino", level: 90, logo: arduinoLogo },
      { name: "Raspberry Pi", level: 82, logo: raspberrypiLogo },
      { name: "ESP32", level: 85, logo: esp32Logo },
      { name: "Ardupilot", level: 88, logo: ardupilotLogo },
      { name: "Mission Planner", level: 85, logo: missionplannerLogo },
    ],
  },
  {
    title: "Design & Simulation",
    icon: <Hexagon size={20} className="text-primary" />,
    skills: [
      { name: "SolidWorks", level: 80, logo: solidworksLogo },
      { name: "Fusion 360", level: 75, logo: fusion360Logo },
      { name: "AutoCAD", level: 78, logo: autocadLogo },
      { name: "MATLAB", level: 72, logo: matlabLogo },
      { name: "Bambu Studio", level: 85, logo: bambustudioLogo },
      { name: "Wokwi", level: 80, logo: wokwiLogo },
    ],
  },
  {
    title: "AI & Platforms",
    icon: <Hexagon size={20} className="text-primary" />,
    skills: [
      { name: "TensorFlow", level: 65, logo: tensorflowLogo }
    ],
  },
  {
    title: "Soft Skills",
    icon: <Hexagon size={20} className="text-primary" />,
    skills: [
      { name: "Communication", level: 90, icon: <MessageCircle size={18} /> },
      { name: "Problem-Solving", level: 92, icon: <Lightbulb size={18} /> },
      { name: "Teamwork", level: 88, icon: <Users size={18} /> },
      { name: "Adaptability", level: 85, icon: <Shuffle size={18} /> },
      { name: "Presentation", level: 82, icon: <Presentation size={18} /> },
      { name: "Time Mgt", level: 80, icon: <Clock size={18} /> },
    ],
  },
];

const SkillBar = ({ name, level, logo, icon, animate, delay }: { name: string; level: number; logo?: string; icon?: React.ReactNode; animate: boolean; delay: number }) => (
  <div className="group/skill mb-5 last:mb-0">
    <div className="flex justify-between items-end mb-2">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 group-hover/skill:bg-primary/20 group-hover/skill:scale-110 transition-all duration-300">
          {logo && <img src={logo} alt={name} className="w-5 h-5 object-contain filter group-hover/skill:brightness-125 transition-all" />}
          {icon && <span className="text-primary group-hover/skill:text-primary-foreground transition-colors">{icon}</span>}
        </div>
        <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
          {name}
        </span>
      </div>
      <span className="text-xs font-mono text-primary/80 flex items-center gap-1 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
        <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
        {level}%
      </span>
    </div>

    <div className="h-1.5 w-full bg-muted/30 rounded-full overflow-hidden border border-white/5 relative">
      <div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/50 via-primary to-primary shadow-[0_0_10px_hsl(var(--primary)/0.5)] rounded-full transition-all duration-1000 ease-out"
        style={{
          width: animate ? `${level}%` : "0%",
          transitionDelay: `${delay}ms`
        }}
      >
        {/* Shimmer effect inside the bar */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      </div>
    </div>
  </div>
);

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setAnimate(true), 300);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none translate-y-1/4" />

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              Technical <span className="neon-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
            {skillCategories.map((category, idx) => (
              <div
                key={category.title}
                className="group relative p-[1px] rounded-3xl bg-gradient-to-b from-white/10 to-transparent hover:from-primary/30 transition-colors duration-500 flex flex-col break-inside-avoid"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative bg-background/80 backdrop-blur-xl p-8 rounded-[23px] border border-white/5 flex flex-col">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                    {category.icon}
                    <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex-1 flex flex-col justify-center space-y-2">
                    {category.skills.map((skill, skillIdx) => (
                      <SkillBar
                        key={skill.name}
                        {...skill}
                        animate={animate}
                        delay={idx * 100 + skillIdx * 100}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
