import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";
import { Rocket, Briefcase, Award } from "lucide-react";

const counters = [
  { label: "Projects", value: 3, icon: Rocket },
  { label: "Internships", value: 2, icon: Briefcase },
  { label: "Certifications", value: 2, icon: Award },
];

const AnimatedCounter = ({ value, animate }: { value: number; animate: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;
    let start = 0;
    const duration = 1500;
    const step = duration / value;
    const timer = setInterval(() => {
      start++;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [animate, value]);

  return <span className="text-4xl md:text-5xl font-heading font-black neon-text">{count}</span>;
};

const StatsCounter = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section>

    </section>
  );
};

export default StatsCounter;
