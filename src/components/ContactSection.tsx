import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/viniciushashizume",
    color: "hover:bg-foreground hover:text-background",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vinicius-hashizume/",
    color: "hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:viniciushashizume26@gmail.com",
    color: "hover:bg-primary hover:text-primary-foreground hover:border-primary",
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section id="contato" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            {t("contact.badge")}
          </span>
          <h2 className="section-title">{t("contact.title")}</h2>
          <p className="text-muted-foreground mb-12">
            {t("contact.subtitle")}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl glass border border-border/50 transition-all duration-300 ${link.color}`}
              >
                <link.icon size={24} />
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
