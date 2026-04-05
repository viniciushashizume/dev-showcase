import { motion } from "framer-motion";
import { ArrowDown, GraduationCap, MapPin } from "lucide-react";
import { techStack } from "@/data/projectsData";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              {t("hero.greeting")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold mb-6"
          >
            {t("hero.iam")} <span className="gradient-text">Vinicius Hashizume</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.bio").includes("<cs>") ? (
              <>
                {t("hero.bio").split("<cs>")[0]}
                <span className="text-primary font-medium">
                  {t("hero.bio").split("<cs>")[1]?.split("</cs>")[0]}
                </span>
                {t("hero.bio").split("</cs>")[1]}
              </>
            ) : t("hero.bio")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
              <GraduationCap className="text-primary" size={20} />
              <span className="text-sm font-medium">{t("hero.degree")}</span>
            </div>
            <div className="glass rounded-xl px-5 py-3 flex items-center gap-3">
              <MapPin className="text-accent" size={20} />
              <span className="text-sm font-medium">{t("hero.university")}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-muted-foreground text-sm mb-4">{t("hero.techTitle")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="tech-badge"
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.a
            href="#projetos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">{t("hero.scrollCta")}</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
