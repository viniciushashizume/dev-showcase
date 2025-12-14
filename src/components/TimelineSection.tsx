import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Rocket, Award } from "lucide-react";
import { timelineData, TimelineItem } from "@/data/projectsData";

const getIcon = (type: TimelineItem["type"]) => {
  switch (type) {
    case "education":
      return GraduationCap;
    case "work":
      return Briefcase;
    case "project":
      return Rocket;
    case "achievement":
      return Award;
    default:
      return Rocket;
  }
};

const getColor = (type: TimelineItem["type"]) => {
  switch (type) {
    case "education":
      return "text-primary";
    case "work":
      return "text-accent";
    case "project":
      return "text-emerald-400";
    case "achievement":
      return "text-amber-400";
    default:
      return "text-primary";
  }
};

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const Icon = getIcon(item.type);
  const colorClass = getColor(item.type);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex items-center gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className={`glass rounded-xl p-6 inline-block ${isLeft ? "md:ml-auto" : "md:mr-auto"}`}>
          <span className={`text-sm font-bold ${colorClass}`}>{item.year}</span>
          <h3 className="font-display text-lg font-bold mt-1 mb-2">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </div>

      {/* Center Icon */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-2 border-border items-center justify-center z-10">
        <Icon className={colorClass} size={20} />
      </div>

      {/* Mobile Icon */}
      <div className="md:hidden absolute left-0 w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center z-10">
        <Icon className={colorClass} size={18} />
      </div>

      {/* Spacer for other side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
};

export const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="jornada" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 mb-4">
            Trajetória
          </span>
          <h2 className="section-title">Minha Jornada</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os marcos mais importantes da minha carreira até agora. 
            Cada passo foi essencial para o desenvolvedor que sou hoje.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 md:-translate-x-1/2" />

          <div className="space-y-12 pl-16 md:pl-0">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
