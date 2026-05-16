import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteLayout, PageHero, Section } from "@/components/site/SiteLayout";
import heroImg from "@/assets/portfolio-1.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio — EventureByDesign" },
      { name: "description", content: "Filterable gallery of luxury weddings, corporate, private and brand events by EventureByDesign." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

const items = [
  { id: "mayfair", img: p1, title: "Mayfair Manor Wedding", cat: "Weddings" },
  { id: "atelier", img: p2, title: "Atelier Brand Launch", cat: "Brand" },
  { id: "awards", img: p3, title: "Annual Awards Gala", cat: "Corporate" },
  { id: "hampstead", img: p4, title: "Hampstead Anniversary", cat: "Private" },
  { id: "surrey", img: p5, title: "Surrey Garden Wedding", cat: "Weddings" },
  { id: "riviera", img: p6, title: "Riviera Yacht Soirée", cat: "Private" },
];

const cats = ["All", "Weddings", "Corporate", "Private", "Brand"] as const;

function PortfolioPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Portfolio"
        title="A catalogue of recent work."
        subtitle="Browse by discipline. Click into any project to see the full story."
        image={heroImg}
      />

      <Section>
        <div className="flex flex-wrap gap-2 justify-center mb-14">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 text-[11px] tracking-luxe border transition-colors ${
                active === c
                  ? "bg-gold text-onyx border-gold"
                  : "border-white/15 text-ivory/70 hover:border-gold hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-4 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/portfolio/$slug" params={{ slug: p.id }} className="group block relative overflow-hidden aspect-[4/5]">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
                  <div className="absolute inset-0 bg-onyx/0 group-hover:bg-onyx/70 transition-colors duration-500 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100">
                    <p className="text-xs tracking-luxe text-gold/80">{p.cat}</p>
                    <p className="font-serif text-2xl text-ivory mt-2">{p.title}</p>
                    <p className="mt-3 text-xs tracking-luxe text-gold">View Project →</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </SiteLayout>
  );
}