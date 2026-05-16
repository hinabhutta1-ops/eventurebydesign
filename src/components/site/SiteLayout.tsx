import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-onyx text-ivory flex flex-col">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/60 to-onyx/30" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative container-x pb-20"
      >
        {eyebrow && <p className="tracking-luxe text-gold mb-4">{eyebrow}</p>}
        <h1 className="font-serif text-5xl md:text-7xl text-ivory max-w-4xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-6 text-ivory/70 max-w-2xl text-lg">{subtitle}</p>}
      </motion.div>
    </section>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-x py-24 md:py-32 ${className}`}>{children}</section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="tracking-luxe text-gold mb-4">{eyebrow}</p>}
      <h2 className="font-serif text-4xl md:text-5xl text-ivory leading-tight">{title}</h2>
      {description && (
        <p className="mt-5 text-ivory/65 leading-relaxed">{description}</p>
      )}
      <div className={`gold-line h-px w-24 mt-8 ${align === "center" ? "mx-auto" : ""}`} />
    </motion.div>
  );
}

export function GoldButton({
  children,
  href,
  variant = "solid",
  type,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "solid" | "outline";
  type?: "submit" | "button";
}) {
  const cls =
    variant === "solid"
      ? "bg-gold text-onyx hover:bg-[oklch(0.82_0.13_85)]"
      : "border border-gold text-gold hover:bg-gold hover:text-onyx";
  const inner = (
    <span className={`inline-flex items-center justify-center px-7 py-3.5 text-[11px] tracking-luxe transition-colors ${cls}`}>
      {children}
    </span>
  );
  if (href) return <a href={href}>{inner}</a>;
  return <button type={type ?? "button"}>{inner}</button>;
}